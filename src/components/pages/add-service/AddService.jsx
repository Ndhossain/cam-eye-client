import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import banner from '../../../assets/otherspagebanner.jpg';
import useAuth from '../../../hooks/useAuth';
import PageBanner from '../../common/PageBanner';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const { currentUser } = useAuth();

    const onSubmit = (data) => {
        if(!data.title || !data.price || !data.picture || !data.description || data.price < 0) {
            return toast.error('Fill the inputs properly')
        }
        data.ratings = 0;
        axios({
            method: 'POST',
            url: `https://cam-eye-server-side.vercel.app/services?uid=${currentUser.uid}`,
            data: data,
            headers: {
                authorization: `bearer ${localStorage.getItem('camEye-token')}`
            },
        }).then(res => {
            console.log(res);
            if(res.data) {
                toast.success('Successfully added service');
            }
        }).catch(err => {
            console.log(err);
            toast.error('Something went wrong');
        })
    }

    return (
        <div className='mt-5'>
            <PageBanner image={banner} title="Add new services" />
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className='p-5 bg-slate-100 flex flex-col gap-5 mt-10 rounded-lg'>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Service title" 
                            className="input input-bordered w-full" 
                            {...register('title')}
                        />
                    </div>
                    <div>
                        <input 
                            type="number"
                            min={0}
                            placeholder="Price of Service" 
                            className="input input-bordered w-full" 
                            {...register('price')}
                        />
                    </div>
                    <div>
                        <input 
                            type="text" 
                            placeholder="Image URL" 
                            className="input input-bordered w-full" 
                            {...register('picture')}
                        />
                    </div>
                    <div>
                        <textarea 
                            className="textarea textarea-bordered w-full resize-none h-40" 
                            placeholder="Service Description" 
                            {...register('description')}
                        />
                    </div>
                    <div>
                        <button type='submit' className='w-full btn btn-primary'>Add Service</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddService;