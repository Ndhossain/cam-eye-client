import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar = () => {
    const { currentUser } = useAuth();
    console.log(currentUser);
    return (
        <div className="navbar bg-base-100">
            <div className='container px-5 mx-auto'>
                <div className="flex-1">
                    <Link to='/' className="font-bold text-3xl">Cam-Eye</Link>
                </div>
                <div className="flex-none">
                <label className="btn btn-circle swap swap-rotate block md:hidden">
                    <input type="checkbox" />
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"/></svg>
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
                </label>
                    <ul className="menu-horizontal p-0 gap-2 hidden md:flex">
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