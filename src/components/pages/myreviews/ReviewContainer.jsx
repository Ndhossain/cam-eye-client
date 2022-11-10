import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaUserCircle } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const ReviewContainer = ({review, setDeleteId}) => {
    const [editMode, setEditMode] = useState(false);
    const {serviceName, userName, userPhotoURL, email, review: reviewContent, date, _id, uid} = review;
    const [newReviewContent, setNewReviewContent] = useState(reviewContent);

    // date
    const day = new Date(date).getDate();
    const month = new Date(date).getMonth();
    const year = new Date(date).getFullYear();
    const time = new Date(date).getHours();
    const minute = new Date(date).getMinutes();
    // date

    const handleUpdate = () => {
        if(newReviewContent === reviewContent){
            return toast.error('Nothing to update');
        }
        axios({
            method: 'PATCH',
            url: `https://cam-eye-server-side.vercel.app/reviews/${_id}?uid=${uid}`,
            data: {review: newReviewContent},
            headers: {
                authorization: `bearer ${localStorage.getItem('camEye-token')}`
            }
        }).then(res => {
            if(res.data.matchedCount === 1 || res.data.modifiedCount === 1) {
                setEditMode(false);
                toast.success('Updated');
            }
        })
    }

    return (
            <tr>
                <th>
                    <label onClick={() => setDeleteId(_id)} htmlFor="my-modal-3" className="btn btn-sm btn-primary btn-circle btn-outline">
                            <ImCross />
                    </label>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                {
                                    userPhotoURL ? (<img className='h-12 w-12 rounded-full' src={userPhotoURL} alt={userName} />) : (<FaUserCircle size={48} />)
                                }
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{userName}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {serviceName}
                </td>
                <td>
                    {
                        editMode ? (
                            <textarea 
                                className="textarea h-7 w-full resize-none border border-slate-400" 
                                defaultValue={newReviewContent}
                                onBlur={(e) => setNewReviewContent(e.target.value)}
                            />
                        ) : (
                            <p>{newReviewContent}</p>
                        )
                    }
                    <p className='font-bold text-primary'>{`${day}-${month}-${year} at ${time}:${minute}`}</p>
                </td>
                <th>
                    {
                        editMode ? (
                            <div className='flex gap-1'>
                                <button onClick={handleUpdate} className="btn btn-sm btn-primary btn-outline">Update</button>
                                <button onClick={() => setEditMode(false)} className="btn btn-sm btn-primary btn-outline">Cancel</button>
                            </div>
                        ) : (
                            <button onClick={() => {
                                setEditMode(true);
                                setDeleteId(_id);
                            }} className="btn btn-sm btn-primary btn-outline">Edit</button>
                        )
                    }
                </th>
            </tr>
    );
};

export default ReviewContainer;