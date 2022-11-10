import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { SpinnerDotted } from 'spinners-react';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    const location = useLocation();

    if(loading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <SpinnerDotted size={30} thickness={200} color={'#0077FF'} />
            </div>
        );
    }

    if (currentUser){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace />;
};

export default PrivateRoute;