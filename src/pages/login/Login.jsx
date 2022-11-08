import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(null);
    const { setLoading, login, loading } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setError(null);
            const res = await login(data.email, data.password);
            const response = await fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ uid: res.user?.uid }),
            });
            const token = await response.json();
            localStorage.setItem('camEye-token', token.jwt);
            reset();
            toast.success('Successfully Logged In');
            navigate('/');
        } catch (err) {
            if (err.message.includes('wrong-password')) {
                setError('Email adress or password is not matching.');
            } else {
                setError('Something went wrong!');
            }
            toast.error('Something went wrong!');
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'>
                <h1 className='text-4xl font-semibold'>Log In now</h1>
                {error && <p className='text-red-400'>{error}</p>}
                <div>
                    <input 
                        type="email"
                        placeholder="Enter email"
                        className="border-b border-primary outline-none p-2 w-full"
                        {...register('email', {required: 'Can not keep this field blank'})}
                    />
                    <p className='text-red-400'>{errors?.email?.message}</p>
                </div>
                <div>
                    <input 
                        type="password"
                        placeholder="Enter Password"
                        className="border-b border-primary outline-none p-2 w-full"
                        {...register('password', {required: 'Can not keep this field blank'})}
                    />
                    <p className='text-red-400'>{errors?.password?.message}</p>
                </div>
                <div className="form-control flex-row justify-between">
                    <label className="cursor-pointer flex itmes-center gap-2">
                        <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="checkbox checkbox-xs checkbox-primary" />
                        <span className="label-text">Remember me</span> 
                    </label>
                    <Link className='label-text'>Forgot Password</Link>
                </div>
                <button disabled={loading} type='submit' className="btn btn-primary w-full">Log In</button>
                <p className='text-sm'>Not have a account. <Link className='text-primary' to='/register'>Register</Link> now.</p>
                <div className="divider">OR</div>
                <SocialLogin setError={setError} 
            />
            </form>
        </div>
    );
};

export default Login;