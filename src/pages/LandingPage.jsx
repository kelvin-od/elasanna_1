import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const LandingPage = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    console.log(isMenuOpen)


  return (
    <div>
      <section>
      <nav className='bg-white-500 p-1 border-b-1 border-gray-200 shadow-md'>
                <div className="flex items-center justify-between mx-6 mr-24">
                    {/* Logo */}
                    <div className='text-green-700 text-2xl font-bold ml-16'><Link to="/">Sanna</Link></div>

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
                                <span className='text-sm'>Messaging</span>
                            </Link>
                        </li>
                        <li className='text-base hover:cursor-pointer px-3 py-2 rounded-lg'>
                            <Link to="/notification" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <span className='text-sm'>Notification</span>
                            </Link>
                        </li>
                        <li className='text-base hover:cursor-pointer px-3 py-2 rounded-lg'>
                            <Link to="/profile" className='flex flex-col items-center text-gray-500 hover:text-gray-300'>
                                <span className='text-sm'>Profile</span>
                            </Link>
                        </li>
                        {/*<li className='py hover:cursor-pointer hover:bg-green-100'><Link to="Becomemember">Become a Member</Link></li>*/}
                    </ul>

                    <button>
                    <Link className='bg-green-500 py-2 px-5 my-3 text-white hover:bg-green-700 rounded-sm' to="/register">Register</Link>
                    </button>
                    <button>
                    <Link className='border-2 border-green-500 py-2 px-5 my-3' to="/login rounded-sm">Login</Link>
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
      </section>
    </div>
  )
}

export default LandingPage
