import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div data-theme="winter">
            <Navbar />
            <main className='container mx-auto px-5'>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;