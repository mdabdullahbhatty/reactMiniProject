import React, { useContext, useEffect, useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from 'react-router';
import { FaToggleOff, FaToggleOn } from "react-icons/fa6";
import DarkMood from './DarkMood';
import { userContext } from '../../contexts/ProfileContext';



const Navbar = () => {
 
    const { userProfile } = useContext(userContext);

   

    const [isOpen, setIsOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')
    const location = useLocation()
    const [darkButton, setDarkButton] = useState(false)

    useEffect(() => {
        setActiveLink(location.pathname || "/")
    }, [location.pathname])

    // const toggleMenw = () => {
    //     setIsOpen(!isOpen);
    // }

    const handleActiveLink = (path) => {
        setActiveLink(path);
    }

    return (

        <nav className='bg-black/50 fixed text-white py-4 md:py-6  border-b-4 w-full z-10 top-0'>


            <div className='flex justify-between items-center container mx-auto'>

                <Link to={'/'}><h3 className='font-bold text-3xl md:text-3xl lg:text-4xl'>React Practice</h3></Link>

                {/* Mobile Menu Button */}

                <div >
                    <button className='cursor-pointer text-3xl md:hidden' onClick={() => setIsOpen(!isOpen)}>
                        {
                            isOpen ? <IoCloseSharp /> : <FaBars />
                        }
                    </button>
                </div>



                <ul className='hidden md:flex space-x-4 md:space-x-6 '>
                    <li className={`${activeLink === '/' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/')} to={'/'}>Home</Link></li>
                    <li className={`${activeLink === '/product' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/product')} to={'/product'}>Products</Link></li>
                    <li className={`${activeLink === '/blogs' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/blogs')} to={'/blogs'}>Blogs</Link></li>
                    <li className={`${activeLink === '/contact' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/contact')} to={'/contact'}>Contact</Link></li>
                    <li className={`${activeLink === '/about' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/about')} to={'/about'}>About</Link></li>
                </ul>



                {
                    userProfile ? <button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition hidden md:flex'>Log Out</button>
                     : 
                     <Link to={'/login'}><button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition hidden md:flex'>Login</button></Link>
                }

                {/* Mobile menu for responsive */}

                <div className={`w-full absolute bg-green-600 top-full left-0 ${isOpen ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4'>
                        <li className={`${activeLink === '/' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/')} to={'/'}>Home</Link></li>
                        <li className={`${activeLink === '/product' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/product')} to={'/product'}>Products</Link></li>
                        <li className={`${activeLink === '/blogs' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/blogs')} to={'/blogs'}>Blogs</Link></li>
                        <li className={`${activeLink === '/contact' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/contact')} to={'/contact'}>Contact</Link></li>
                        <li className={`${activeLink === '/about' ? "text-yellow-600 font-bold " : "hover:text-green-400 transition cursor-pointer"}`}><Link onClick={() => handleActiveLink('/about')} to={'/about'}>About</Link></li>

                        <li>
                            <Link to={'/login'}><button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition mt-4'>Login</button></Link>
                        </li>
                    </ul>



                </div>


                <div>
                    {
                        userProfile && <div className='group flex flex-col relative transition-all ease-in-out duration-200 cursor-pointer'>

                            {
                                userProfile.userPhoto && <img src={userProfile.userPhoto} alt="user Photo" className='w-10 rounded-full' />
                            }

                            <div className='hidden group-hover:block absolute top-9 -left-12 z-50'>
                                {
                                    userProfile.name ? <p> {userProfile.name} </p> : <p>Hi</p>
                                }
                                {
                                    userProfile.email && <p className=' group-hover:flex'> {userProfile.email} </p>
                                }
                            </div>
                        </div>
                    }
                </div>

                {/* <div className='relative flex items-center justify-center'>
                    <FaToggleOn 
                    onClick={() => setDarkButton(!darkButton)}  
                    className={`${darkButton ? 'text-3xl absolutetext-3xl absolute' : 'hidden'}`}
                    />

                    <FaToggleOff 
                    onClick={() => setDarkButton(!darkButton)} 
                    className='text-3xl absolute' 
                    />

                    
                </div> */}
            </div>



        </nav>

    )
}

export default Navbar