import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast'
import Footer from './Footer';

const Layout = () => {
    return (
        <div data-theme="winter">
            <Navbar />
            <main className='container mx-auto px-5 min-h-screen'>
                <Outlet />
            </main>
            <Footer />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Layout;