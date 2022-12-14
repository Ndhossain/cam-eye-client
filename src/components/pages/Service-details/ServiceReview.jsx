import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineSend } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import ServiceReviewContainer from './ServiceReviewContainer';

const ServiceReview = ({ serviceDetails }) => {
    const [review, setReview] = useState('');
    const { currentUser } = useAuth();
    const [reviewData, setReviewData] = useState([]);

    useEffect(() => {
        axios({
            method: 'GET',
            url: `https://cam-eye-server-side.vercel.app/reviews/${serviceDetails._id}`,
        }).then(res => {
            setReviewData(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [serviceDetails._id])

    const handleSubmitReview = () => {
        if(!review) {
            return toast.error('Enter a review first');
        }
        const data = {
            review,
            uid: currentUser?.uid,
            userPhotoURL: currentUser.photoURL,
            userName: currentUser.displayName,
            email: currentUser.email,
            serviceId: serviceDetails._id,
            serviceName: serviceDetails.title
        };
        axios({
            method: 'POST',
            url: 'https://cam-eye-server-side.vercel.app/reviews',
            data: data,
            headers: {
                authorization: `bearer ${localStorage.getItem('camEye-token')}`
            },
        }).then(res => {
            console.log(res);
            data.date = new Date();
            data._id = res.data.insertedId
            setReviewData([data, ...reviewData]);
            setReview('');
            toast.success('Review Added');
        }).catch(err => {
            console.log(err);
        })
    }

    console.log(reviewData)

    return (
        <div className='md:basis-2/4 border border-slate-300 h-screen rounded-lg flex flex-col justify-between'>
            <h2 className='text-center p-2 border-b bg-slate-200 font-bold'>Reviews</h2>
            <div className='h-full p-3 overflow-y-scroll overflow-x-auto'>
                {
                    reviewData.length > 0 ? (
                        reviewData.map((reviewInfo) => <ServiceReviewContainer key={reviewInfo._id} reviewInfo={reviewInfo} />)
                    ) : (
                        <h1 className='text-center'>No Review added for this service</h1>
                    )
                }
            </div>
            <div className='flex items-center h-16 border-t border-slate-400 relative'>
                {
                    !currentUser && !currentUser?.uid ? (
                        <div className='absolute h-16 top-0 w-full bg-black/80 flex justify-center items-center'>
                            <p className='text-white font-medium'><Link to='/login' className='text-primary font-bold'>Log In</Link> first to add a review</p>
                        </div>
                    ) : (
                        <>
                            <textarea 
                                className='resize-none h-16 w-full outline-none p-3 bg-transparent' 
                                name="comment" 
                                placeholder='Write a Review here'
                                onChange={(e) => setReview(e.target.value)}
                                value={review}
                            />
                            <button
                                onClick={handleSubmitReview}
                                className='p-2'
                            >
                                <AiOutlineSend size={20} />
                            </button>
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceReview;