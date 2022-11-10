import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactForm = () => {
    const {register, handleSubmit, reset} = useForm();

    const onSubmit = (data) => {
        axios({
            method: 'POST',
            url: 'http://localhost:5000/contact-message',
            data: data
        }).then(res => {
            console.log(res);
            if(res.data.acknowledged) {
                toast.success('Message Sent.');
                reset();
            }
        }).catch(err => {
            console.log(err);
            toast.error('Can not send message.');
        })
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)} 
                className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'
            >
                <h1 className='text-2xl text-primary text-center font-semibold'>Contact Form</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your name" 
                        className="input input-bordered w-full max-w-xs"
                        {...register('name')}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your email" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register('email')}
                        required
                    />
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter your Phone no" 
                        className="input input-bordered w-full max-w-xs" 
                        {...register('phoneNo')}
                        required
                    />
                </div>
                <div>
                    <textarea 
                        className="textarea textarea-bordered w-full resize-none h-28" 
                        placeholder="Write your message" 
                        {...register('message')}
                        required
                    />
                </div>
                <div>
                    <button className="btn btn-primary w-full">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;