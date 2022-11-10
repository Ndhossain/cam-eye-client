import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contacts = () => {
    return (
        <div className='mt-10'>
            <h4 className='text-center text-primary font-bold text-xl'>Contacts</h4>
            <h1 className='text-center text-4xl font-bold mt-5'>Get In Touch</h1>
            <div className='mt-5'>
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    );
};

export default Contacts;