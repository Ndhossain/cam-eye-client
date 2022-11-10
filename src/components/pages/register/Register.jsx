import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../login/SocialLogin';

const Register = () => {
    const [error, setError] = useState(null);
    const [conditions, setConditions] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { register: registerUser, loading, setLoading } = useAuth();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            setError(null);
            if(data.password !== data.confirmPassword){
                return setError("Password doesn't match");
            }
            const res = await registerUser(data.email, data.password, data.name);
            const response = await fetch('https://cam-eye-server-side.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ uid: res.user.uid }),
            });
            const token = await response.json();
            localStorage.setItem('camEye-token', token.jwt);
            reset();
            toast.success('Successfully Registered');
            navigate('/');
        } catch (err) {
            if (err.message.includes('auth/email-already-in-use')) {
                setError('Email already in use.')
            } else {
               setError('Something went wrong!')
            }
            toast.error('Something went wrong!');
            setLoading(false);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Register - Cam-Eye</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'>
                <h1 className='text-4xl font-semibold'>Register now</h1>
                {error && <p className='text-red-400'>{error}</p>}
                <div>
                    <input 
                        type="text"
                        placeholder="Full name"
                        className="border-b border-primary outline-none p-2 w-full"
                        {...register('name', {required: 'Can not keep this field blank'})}
                    />
                    <p className='text-red-400'>{errors?.name?.message}</p>
                </div>
                <div>
                    <input 
                        type="text"
                        placeholder="Image URL"
                        className="border-b border-primary outline-none p-2 w-full"
                        {...register('name', {required: false})}
                    />
                </div>
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
                <div>
                    <input 
                        type="password"
                        placeholder="Confirm Password"
                        className="border-b border-primary outline-none p-2 w-full"
                        {...register('confirmPassword', {required: 'Can not keep this field blank'})}
                    />
                    <p className='text-red-400'>{errors?.confirmPassword?.message}</p>
                </div>
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
                <button 
                    disabled={!conditions || loading ? true : false} 
                    type='submit' 
                    className="btn btn-primary w-full"
                >
                    {
                        loading ? <SpinnerDotted size={30} thickness={200} color={'#0077FF'} /> : 'Register'
                    }
                </button>
                <p className='text-sm'>Already have a account. <Link className='text-primary' to='/login'>Log In</Link> now.</p>
                <div className="divider">OR</div>
                <SocialLogin setError={setError} />
            </form>
        </div>
    );
};

export default Register;