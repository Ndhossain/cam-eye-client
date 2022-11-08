import React from 'react';
import { Link } from 'react-router-dom';
import './BannerImageOverlay.css';

const BannerItem = ({image}) => {
    return (
        <div className="flex basis-full grow-0 shrink-0 duration-300 relative">
            <div className="w-full bg-black">
                <img className="sm:h-[650px] h-[450px] w-full opacity-40" src={image} alt="banner" />
            </div>
            <div className="absolute sm:mt-0 text-white bottom-0sm:top-0 bottom-1/2 translate-y-1/2 flex flex-col gap-5 right-1/2 translate-x-1/2">
                <h1 className="text-4xl md:text-6xl text-center font-bold">
                    Click Your<br />Memorable Moments
                </h1>
                <p className='text-center'>
                    A camera that puts a world of possibilities at your fingertips. Back it up. Get it back. Capture it all. Exceptional images deserve an exceptional presentation.
                </p>
                <div className="flex gap-2 sm:gap-5 justify-center">
                    <Link to='/services' className="btn btn-primary">
                        Services
                    </Link>
                    <Link className="btn btn-primary btn-outline rounded-lg">
                        Contacts
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BannerItem;