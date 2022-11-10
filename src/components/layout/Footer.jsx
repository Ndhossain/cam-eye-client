import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer items-center p-4 py-10 bg-neutral text-neutral-content mt-10">
            <div className="items-center grid-flow-col">
                <p className='text-white font-semibold'>Copyright © 2022 - All right reserved by <Link className='text-primary' to='/'>Cam-Eye</Link></p>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <button className='p-2 hover:text-primary text-white border border-primary rounded-full'>
                    <FaFacebookF size={18} />
                </button>
                <button className='p-2 hover:text-primary text-white border border-primary rounded-full'>
                    <FaInstagram size={18} />
                </button>
                <button className='p-2 hover:text-primary text-white border border-primary rounded-full'>
                    <FaLinkedinIn size={18} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;