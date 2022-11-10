import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { BiLogIn } from 'react-icons/bi';
import { FaUserCircle } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { GiHamburgerMenu } from 'react-icons/gi'
import { ImCross } from 'react-icons/im';

const Navbar = () => {
    const { currentUser, logout, loading } = useAuth();
    const [navOpen, setNavOpen] = useState(false);

    return (
        <div className="navbar bg-base-100 py-3 border-b border-primary">
            <div className='container px-5 mx-auto'>
                <div className="flex-1">
                    <Link to='/' className="font-bold text-3xl">Cam-Eye</Link>
                </div>
                <div className="flex-none">
                    <button
                        className='block md:hidden'
                        onClick={() => setNavOpen(!navOpen)}
                    >
                        {
                            navOpen ? (<ImCross size={28} />) : (<GiHamburgerMenu size={30} />)
                        }
                    </button>
                    <ul 
                        className={`menu-horizontal p-0 gap-2 md:flex items-center z-50 ${navOpen ? 'menu-vertical  absolute bg-white left-0 w-full p-5 text-center flex gap-4 flex-col top-16' : 'hidden'}`}
                    >
                        <li><Link className='p-2 font-medium' to='/'>Home</Link></li>
                        <li><Link className='p-2 font-medium' to='/services'>Services</Link></li>
                        <li><Link className='p-2 font-medium' to='/blogs'>Blogs</Link></li>
                        <li className='hidden md:block'>|</li>
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
                                        <li><Link to='/add-service' className='w-full'>Add Services</Link></li>
                                        <li><Link to='/my-reviews' className='w-full'>My Reviews</Link></li>
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