import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false)

    const toggleMenw = () => {
        setIsOpen(!isOpen);
    }
    return (

        <nav className='bg-green-800 text-white py-4 md:py-6'>

            <div className='flex justify-between items-center container mx-auto'>

                <h3 className='font-bold text-3xl md:text-3xl lg:text-4xl'>React Practice</h3>

                {/* Mobile Menu Button */}

                <div >
                    <button className='cursor-pointer text-3xl' onClick={toggleMenw}> 
                        {
                            isOpen ? <IoCloseSharp /> : <FaBars />
                        }
                    </button>
                </div>



                <ul className='flex space-x-4 md:space-x-6'>
                    <li className='hover:text-green-400 transition cursor-pointer'>Home</li>
                    <li className='hover:text-green-400 transition cursor-pointer'>Products</li>
                    <li className='hover:text-green-400 transition cursor-pointer'>Blogs</li>
                    <li className='hover:text-green-400 transition cursor-pointer'>Contact</li>
                    <li className='hover:text-green-400 transition cursor-pointer'>About</li>
                </ul>

                <button className='bg-gray-200 px-4 py-2.5 font-semibold rounded-md text-black hover:text-gray-600 cursor-pointer transition'>Login</button>

            </div>

        </nav>

    )
}

export default Navbar