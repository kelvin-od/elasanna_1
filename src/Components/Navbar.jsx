import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faBell, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {


    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate()

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    console.log(isMenuOpen)

    const handleSignOut = (e) => {
        e.preventDefault()
        navigate('/login')
    }
    return (
        <div>
            <nav className='bg-white-500 p-1 border-b-1 border-gray-200 shadow-md'>
                <div className="flex items-center justify-between mx-6 mr-24">
                    {/* Logo */}
                    <div className='text-green-700 text-2xl font-bold ml-16'><Link to="/">Sanna</Link></div>
                    <div>
                        {/* <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute text-gray-400"
                        /> */}
                        <input className='rounded-lg py-2 w-96 focus:outline-none bg-green-50 px-3' type="text" placeholder='Search' />
                    </div>

                    <div className='md:hidden'>
                        <button className='text-white' onClick={toggleMenu}>
                            <svg
                                fill='none'
                                stroke='green'
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                stroke-width='2'
                                viewBox='0 0 24 24'
                                className='w-6 h-6'
                            >
                                <path d="M4 6h16M4 12h16M4  18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className='hidden md:flex space-x-8'>
                        {/* <li className='hover:cursor-pointer px-3 py-2 rounded-lg' >
                            <Link to="/home" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <FontAwesomeIcon icon={faHome} />
                                <span className='text-sm'>Home</span>
                            </Link>
                        </li> */}
                        <li className='text-base hover:cursor-pointer px-3 py-2 rounded-lg'>
                            <Link to="/messaging" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span className='text-sm'>Messaging</span>
                            </Link>
                        </li>
                        <li className='text-base hover:cursor-pointer px-3 py-2 rounded-lg'>
                            <Link to="/notification" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <FontAwesomeIcon icon={faBell} />
                                <span className='text-sm'>Notification</span>
                            </Link>
                        </li>
                        <li className='text-base hover:cursor-pointer px-3 py-2 rounded-lg'>
                            <Link to="/profile" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <FontAwesomeIcon icon={faUser} />
                                <span className='text-sm'>Profile</span>
                            </Link>
                        </li>
                        {/*<li className='py hover:cursor-pointer hover:bg-green-100'><Link to="Becomemember">Become a Member</Link></li>*/}
                    </ul>

                    <button onClick={handleSignOut}>
                        <Link to="/becomemember">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            <span className="hidden absolute left-full top-1/2 transform -translate-y-1/2 ml-2 text-sm bg-black text-white rounded-md px-2 py-1 transition duration-300 opacity-0 group-hover:opacity-100">Sign Out</span>
                        </Link>
                    </button>
                </div>

                {/* Mobile Menu */}

                {isMenuOpen ? (
                    <ul className='flex-col md:hidden'>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/ourwork">Our Work</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/ourimpact">Our Impact</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/newsandevents">News & Events</Link>
                        </li>
                        <li className='py hover:cursor-pointer hover:bg-green-100'>
                            <Link to="/becomemember">Become a Member</Link>
                        </li>
                    </ul>
                ) : null}
            </nav>
        </div>
    )
}

export default Navbar