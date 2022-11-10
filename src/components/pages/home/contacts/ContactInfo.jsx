import React from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { HiLocationMarker } from 'react-icons/hi';
import { MdEmail } from 'react-icons/md';

const ContactInfo = () => {
    return (
        <div className='flex justify-center flex-col md:flex-row gap-5 mt-5 items-center'>
            <div className='flex flex-col items-center gap-5'>
                <HiLocationMarker size={36} />
                <h2 className='text-xl'>Chittagong, Bangladesh</h2>
            </div>
            <p className='text-8xl font-thin md:block hidden'>
                |
            </p>
            <div className='flex flex-col items-center gap-5'>
                <BsFillTelephoneFill size={36} />
                <h2 className='text-xl'>+88 01700000000</h2>
            </div>
            <p className='text-8xl font-thin md:block hidden'>
                |
            </p>
            <div className='flex flex-col items-center gap-5'>
                <MdEmail size={36} />
                <h2 className='text-xl'>hhhssnahiid@gmail.com</h2>
            </div>
        </div>
    );
};

export default ContactInfo;