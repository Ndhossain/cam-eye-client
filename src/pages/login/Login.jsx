import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div>
            <h1>This is login page</h1>
            <form className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg'>
                <h1 className='text-4xl font-semibold'>Log In</h1>
                <input 
                    type="email"
                    placeholder="Enter email"
                    className="border-b border-primary outline-none p-2"
                />
                <input 
                    type="password"
                    placeholder="Enter Password"
                    className="border-b border-primary outline-none p-2"
                />
                <div className="form-control flex-row justify-between">
                    <label className="cursor-pointer flex itmes-center gap-2">
                        <input type="checkbox" checked className="checkbox checkbox-xs checkbox-primary" />
                        <span className="label-text">Remember me</span> 
                    </label>
                    <Link className='label-text'>Forgot Password</Link>
                </div>
                <button type='submit' className="btn btn-primary w-full">Log In</button>
                <p className='text-sm'>Not have a account. <Link className='text-primary' to='/register'>Register</Link> now.</p>
                <div className="divider">OR</div>
                <SocialLogin />
            </form>
        </div>
    );
};

export default Login;