import React from 'react';
import toast from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
    const { currentUser, logout, loading } = useAuth();
    console.log(currentUser);
    return (
        <div className="navbar bg-base-100 py-3 border-b border-primary">
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
                    <ul className="menu-horizontal p-0 gap-2 hidden md:flex items-center">
                        <li><Link className='p-2 font-medium' to='/'>Home</Link></li>
                        <li><Link className='p-2 font-medium' to='/services'>Services</Link></li>
                        <li><Link className='p-2 font-medium' to='/blogs'>Blogs</Link></li>
                        <li>|</li>
                        {
                            !loading && !currentUser ? (
                                <>
                                    <li className='my-2'>
                                        <Link className='btn btn-sm btn-primary btn-outline flex rounded-lg justify-center items-center gap-1' to='/login'>
                                            Log in <BiLogIn size={16} />
                                        </Link>
                                    </li>
                                    <li className='my-2'>
                                        <Link className='btn btn-sm btn-primary flex justify-center items-center gap-1 rounded-lg text-white' to='/register'>
                                            Register <TiUserAdd color='white' size={16} />
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-primary btn-outline avatar gap-1">
                                        <div className="w-10 rounded-full">
                                            {
                                                currentUser?.photoURL ? (
                                                    <img src={currentUser.photoURL} alt="User" />
                                                ) : (
                                                    <FaUserCircle size={40} />
                                                )
                                            }
                                        </div>
                                            {currentUser?.displayName}
                                    </label>
                                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                        <li><Link className='w-full'>Add Services</Link></li>
                                        <li><Link className='w-full'>My Reviews</Link></li>
                                        <li>
                                            <button 
                                                className='w-full' 
                                                onClick={() => {
                                                    logout();
                                                    toast.success('Successfully Logged Out')
                                                }} 
                                                type='button'
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;