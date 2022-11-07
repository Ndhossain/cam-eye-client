import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className='container px-5 mx-auto'>
                <div className="flex-1">
                    <Link to='/' className="font-bold text-3xl">Cam-Eye</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu-horizontal p-0 gap-2">
                        <li><Link className='p-2 font-medium' to='/'>Home</Link></li>
                        <li><Link className='p-2 font-medium' to='/services'>Services</Link></li>
                        <li><Link className='p-2 font-medium' to='/login'>Login</Link></li>
                        <li><Link className='p-2 font-medium' to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;