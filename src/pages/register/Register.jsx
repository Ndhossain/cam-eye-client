import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../login/SocialLogin';

const Register = () => {
    const [error, setError] = useState(null);
    const [conditions, setConditions] = useState(false);
    const { register, handleSubmit } = useForm();
    const { register: registerUser, loading, setLoading } = useAuth();

    const onSubmit = async (data) => {
        try {
            setError(null);
            if(data.password !== data.confirmPassword){
                return setError("Password doesn't match");
            }
            const res = await registerUser(data.email, data.password, data.name);
            const response = await fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ uid: res.user.uid }),
            });
            const token = await response.json();
            localStorage.setItem('camEye-token', token.jwt);
        } catch (err) {
            console.log(err);
            if (err.message.includes('auth/email-already-in-use')) {
                setError('Email already in use.')
             } else {
                setError('Something went wrong!')
             }
            setLoading(false);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'>
                <h1 className='text-4xl font-semibold'>Register now</h1>
                {error && <p className='text-red-400'>{error}</p>}
                <input 
                    type="text"
                    placeholder="Full name"
                    className="border-b border-primary outline-none p-2"
                    {...register('name', {required: true})}
                /><input 
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
                <input 
                    type="password"
                    placeholder="Confirm Password"
                    className="border-b border-primary outline-none p-2"
                    {...register('confirmPassword', {required: true})}
                />
                <div className="form-control flex-row justify-between">
                    <label className="cursor-pointer flex itmes-center gap-2">
                        <input 
                            type="checkbox"
                            checked={conditions}
                            className="checkbox checkbox-xs checkbox-primary"
                            onChange={() => setConditions(!conditions)}
                        />
                        <span className="label-text">I accepts terms and conditions.</span> 
                    </label>
                </div>
                <button disabled={!conditions || loading ? true : false} type='submit' className="btn btn-primary w-full">Register</button>
                <p className='text-sm'>Already have a account. <Link className='text-primary' to='/login'>Log In</Link> now.</p>
                <div className="divider">OR</div>
                <SocialLogin setError={setError} />
            </form>
        </div>
    );
};

export default Register;