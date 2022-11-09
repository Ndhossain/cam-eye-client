import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { AiFillStar } from 'react-icons/ai';

const DetailsOfService = ({ serviceDetails }) => {
    const { title, picture, price, description, ratings } = serviceDetails;
    return (
        <div className='md:basis-2/4'>
            <PhotoProvider>
                <div>
                    <PhotoView src={picture}>
                        <img className='rounded-lg' src={picture} alt={title} />
                    </PhotoView>
                </div>
                <div className='mt-5 flex flex-col gap-4'>
                    <h1 className='text-2xl font-semibold'>{title}</h1>
                    <p className='flex items-center'>Rating: {ratings} <AiFillStar color='gold'size={20} /></p>
                    <p className='font-bold text-primary'>Price: ${price}</p>
                    <p>{description}</p>
                </div>
            </PhotoProvider>
        </div>
    );
};

export default DetailsOfService;