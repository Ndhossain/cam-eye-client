import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import aboutImage from '../../../assets/about.jpg';

const About = () => {
    return (
        <div className='mt-10'>
            <h4 className='text-center text-primary font-bold text-xl'>About</h4>
            <div className="hero mt-5">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='basis-1/2'>
                        <img src={aboutImage} className="w-8/12 mx-auto rounded-full shadow-2xl" alt='about' />
                    </div>
                    <div className='basis-1/2'>
                        <h1 className="text-3xl font-bold">Hello!</h1>
                        <p className="py-2 mb-3">
                            I am specialize in wedding photography, corporate, family and senior portraits, often traveling to your destination to capture the perfect moment in the perfect place. I also manage tours and travels and work as a guide for your trip.
                            <br />
                            <br />
                            For me photography is about people being real and then letting us paint a picture of that moment to remember it forever. This is the story that matters most: real people, real stories, real moments.
                        </p>
                        <h6 className='font-bold mb-3'>Social Links: </h6>
                        <div className='flex gap-2'>
                            <button className='p-2 hover:bg-primary hover:text-white text-primary border border-primary rounded-full'>
                                <FaFacebookF size={20} />
                            </button>
                            <button className='p-2 hover:bg-primary hover:text-white text-primary border border-primary rounded-full'>
                                <FaInstagram size={20} />
                            </button>
                            <button className='p-2 hover:bg-primary hover:text-white text-primary border border-primary rounded-full'>
                                <FaLinkedinIn size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;