import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const ServiceReviewContainer = ({reviewInfo}) => {
    const { currentUser } = useAuth();
    const {userPhotoURL, userName, review, uid, date} = reviewInfo;

    // date
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const time = new Date(date).getHours();
    const minute = new Date(date).getMinutes();
    // date

    return (
        <div className='flex gap-2 items-center border-b mb-2'>
            <div className='h-8 min-w-8'>
                {
                    userPhotoURL ? (<img className='h-8 min-w-8 rounded-full' src={userPhotoURL} alt={userName} />) : (<FaUserCircle size={32} />)
                }
            </div>
            <div className='w-full'>
                <p>{review}</p>
                <div className='flex justify-between'>
                    <span className={`text-sm ${currentUser?.uid === uid ? 'text-primary' : ''}`}>User: {currentUser?.uid === uid ? "Me" : userName}</span>
                    <p className='font-bold text-primary'>{`${day}-${month}-${year} at ${time}:${minute}`}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceReviewContainer;