import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import useAuth from '../../../hooks/useAuth';

const ReviewContainer = ({reviewInfo}) => {
    const { currentUser } = useAuth();
    console.log(reviewInfo);
    const {userPhotoURL, userName, review, uid} = reviewInfo;
    return (
        <div className='flex gap-2 items-center border-b mb-2'>
            <div className='h-8 min-w-8'>
                {
                    userPhotoURL ? (<img className='h-8 min-w-8 rounded-full' src={userPhotoURL} alt={userName} />) : (<FaUserCircle size={32} />)
                }
            </div>
            <div>
                <p>{review}</p>
                <div className='flex justify-between'>
                    <span className={`text-sm ${currentUser.uid === uid ? 'text-primary' : ''}`}>User: {currentUser.uid === uid ? "Me" : userName}</span>
                </div>
            </div>
        </div>
    );
};

export default ReviewContainer;