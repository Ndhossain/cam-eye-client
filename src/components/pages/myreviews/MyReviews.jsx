import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import useAuth from '../../../hooks/useAuth';
import ReviewContainer from './ReviewContainer';

const MyReviews = () => {
    const {currentUser} = useAuth();
    const [myReviews, setMyReviews] = useState([]);
    const [deleteId, setDeleteId] = useState('')

    useEffect(() => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/my-review/${currentUser.uid}`,
            headers: {
                authorization: `bearer ${localStorage.getItem('camEye-token')}`
            }
        }).then(res => {
            setMyReviews(res.data);
        })
    }, [currentUser.uid]);

    const handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `http://localhost:5000/reviews/${deleteId}?uid=${currentUser.uid}`,
            headers: {
                authorization: `bearer ${localStorage.getItem('camEye-token')}`
            }
        }).then(res => {
            if(res.data.deletedCount === 1) {
                const restReviews = myReviews.filter(rev => rev._id !== deleteId);
                setMyReviews(restReviews);
                toast.success('Successfully Deleted');
            }
        }).catch(err => {
            console.log(err);
            toast.error('Something went wrong');
        })
    }

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <thead>
            <tr>
                <th>
                <label>
                    Delete
                </label>
                </th>
                <th>User Info</th>
                <th>Service</th>
                <th>Review & Time</th>
                <th></th>
            </tr>
            </thead>

            <tbody>
            {
                myReviews.length > 0 ? (
                    myReviews.map(review => (
                        <ReviewContainer 
                            key={review._id} 
                            review={review}
                            setDeleteId={setDeleteId}
                        />
                    ))
                    ) : (
                    <tr>
                        <td>
                            <h1 className='text-center text-4xl font-bold'>No Review Added. Add a review.</h1>
                        </td>
                    </tr>
                )
            }
            </tbody>

        </table>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className='flex justify-between'>
                        <label htmlFor="my-modal-3" className="btn btn-primary btn-outline">Cancel</label>
                        <label onClick={handleDelete} htmlFor="my-modal-3" className="btn btn-primary">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyReviews;