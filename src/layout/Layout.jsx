import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    return (
        <div data-theme="winter">
            <Navbar />
            <main className='container mx-auto px-5'>
                <Outlet />
            </main>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default Layout;