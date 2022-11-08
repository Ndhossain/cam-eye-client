import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState(null);
    const { setLoading, login } = useAuth();
    const { register, handleSubmit } = useForm();

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
        } catch (err) {
            if (err.message.includes('wrong-password')) {
                setError('Email adress or password not matching.')
             } else {
                setError('Something went wrong!')
             }
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'>
                <h1 className='text-4xl font-semibold'>Log In now</h1>
                {error && <p className='text-red-400'>{error}</p>}
                <input 
                    type="email"
                    placeholder="Enter email"
                    className="border-b border-primary outline-none p-2"
                    {...register('email', {required: true})}
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                    className="border-b border-primary outline-none p-2"
                    {...register('password', {required: true})}
                />
                <div className="form-control flex-row justify-between">
                    <label className="cursor-pointer flex itmes-center gap-2">
                        <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} className="checkbox checkbox-xs checkbox-primary" />
                        <span className="label-text">Remember me</span> 
                    </label>
                    <Link className='label-text'>Forgot Password</Link>
                </div>
                <button type='submit' className="btn btn-primary w-full">Log In</button>
                <p className='text-sm'>Not have a account. <Link className='text-primary' to='/register'>Register</Link> now.</p>
                <div className="divider">OR</div>
                <SocialLogin setError={setError} 
            />
            </form>
        </div>
    );
};

export default Login;