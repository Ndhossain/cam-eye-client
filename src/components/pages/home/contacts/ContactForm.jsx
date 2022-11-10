import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <form className='mx-auto flex flex-col w-full sm:w-3/4 md:w-2/4 lg:w-1/4 gap-5 p-5 shadow-2xl rounded-lg mt-10 md:mt-16'>
                <h1 className='text-2xl text-primary text-center font-semibold'>Contact Form</h1>
                <div>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" />
                </div>
                <div>
                    <textarea className="textarea textarea-bordered w-full resize-none h-28" placeholder="Write your message" />
                </div>
                <div>
                    <button className="btn btn-primary w-full">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;