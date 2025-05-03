import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router';

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenw = () => {
        setIsOpen(!isOpen);
    }
    return (

        <nav className='bg-green-800 text-white py-4 md:py-6 relative'>

            <div className='flex justify-between items-center container mx-auto'>

                <h3 className='font-bold text-3xl md:text-3xl lg:text-4xl'>React Practice</h3>

                {/* Mobile Menu Button */}

                <div >
                    <button className='cursor-pointer text-3xl md:hidden' onClick={toggleMenw}>
                        {
                            isOpen ? <IoCloseSharp /> : <FaBars />
                        }
                    </button>
                </div>



                <ul className='hidden md:flex space-x-4 md:space-x-6 '>
                    <li className='hover:text-green-400 transition cursor-pointer'><Link to={'/'}>Home</Link></li>
                    <li className='hover:text-green-400 transition cursor-pointer'><Link to={'/product'}>Products</Link></li>
                    <li className='hover:text-green-400 transition cursor-pointer'><Link to={'/blogs'}>Blogs</Link></li>
                    <li className='hover:text-green-400 transition cursor-pointer'><Link to={'/contact'}>Contact</Link></li>
                    <li className='hover:text-green-400 transition cursor-pointer'><Link to={'/about'}>About</Link></li>
                </ul>



                <button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition hidden md:flex'>Login</button>

                {/* Mobile menu for responsive */}

                <div className={`w-full absolute bg-green-600 top-full left-0 ${isOpen ? "block" : "hidden"}`}>
                    <ul className='flex flex-col items-center py-4'>
                        <li className='hover:text-green-400 transition cursor-pointer py-2 font-semibold'><Link>Home</Link></li>
                        <li className='hover:text-green-400 transition cursor-pointer py-2 font-semibold'><Link>Products</Link></li>
                        <li className='hover:text-green-400 transition cursor-pointer py-2 font-semibold'><Link>Blogs</Link></li>
                        <li className='hover:text-green-400 transition cursor-pointer py-2 font-semibold'><Link>Contact</Link></li>
                        <li className='hover:text-green-400 transition cursor-pointer py-2 font-semibold'><Link>About</Link></li>

                        <li>
                            <button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition mt-4'>Login</button>
                        </li>
                    </ul>

                </div>

            </div>



        </nav>

    )
}

export default Navbar