import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import toast from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SocialLogin = ({ setError }) => {
    const { providerLogin, setLoading, loading } = useAuth();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const googleLogin = async () => {
        setError(null);
        try {
            const res = await providerLogin(googleProvider);
            const response = await fetch('http://localhost:5000/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ uid: res.user?.uid }),
            });
            const token = await response.json();
            localStorage.setItem('camEye-token', token.jwt);
            toast.success('Successfully Logged In');
            navigate('/');
        } catch (err) {
            setError(err.message);
            toast.error('Something went wrong!');
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center'>
            <button disabled={loading} type='button' onClick={googleLogin}>
                <FcGoogle size={30} />
            </button>
        </div>
    );
};

export default SocialLogin;