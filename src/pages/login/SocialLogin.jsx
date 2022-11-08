import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const SocialLogin = ({ setError }) => {
    const { providerLogin, setLoading } = useAuth();
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
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    }

    return (
        <div className='flex justify-center'>
            <FcGoogle onClick={googleLogin} size={30} className="cursor-pointer" />
        </div>
    );
};

export default SocialLogin;