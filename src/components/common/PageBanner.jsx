import React from 'react';

const PageBanner = ({ image, title }) => {
    return (
        <div className='w-full rounded-lg bg-black relative'>
            <img className='rounded-lg h-[250px] sm:h-[450px] w-full object-cover sm:object-fill opacity-80' src={image} alt="banner" />
            <div className='absolute bottom-1/2 translate-y-1/2 flex flex-col gap-5 right-1/2 translate-x-1/2'>
                <h1 className='text-white text-4xl font-bold text-center'>{title}</h1>
            </div>
        </div>
    );
};

export default PageBanner;