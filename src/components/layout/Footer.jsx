import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="mt-10 bg-neutral">
            <div className='container mx-auto'>
                <div className='footer items-center p-4 py-5 text-neutral-content flex-row'>
                    <div>
                        <span className="footer-title">Services</span> 
                        <Link className="link link-hover">Branding</Link>
                        <Link className="link link-hover">Design</Link>
                        <Link className="link link-hover">Marketing</Link>
                        <Link className="link link-hover">Advertisement</Link>
                    </div> 
                    <div>
                        <span className="footer-title">Company</span> 
                        <Link className="link link-hover">About us</Link>
                        <Link className="link link-hover">Contact</Link>
                        <Link className="link link-hover">Jobs</Link>
                        <Link className="link link-hover">Press kit</Link>
                    </div> 
                    <div>
                        <span className="footer-title">Legal</span> 
                        <Link className="link link-hover">Terms of use</Link>
                        <Link className="link link-hover">Privacy policy</Link>
                        <Link className="link link-hover">Cookie policy</Link>
                    </div>
                </div>
                <div className='footer items-center p-4 py-5 bg-neutral text-neutral-content flex-row'>
                    <div className="items-center grid-flow-col">
                        <p className='text-white font-semibold'>Copyright © {new Date().getFullYear()} - All right reserved by <Link className='text-primary' to='/'>Cam-Eye</Link></p>
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;