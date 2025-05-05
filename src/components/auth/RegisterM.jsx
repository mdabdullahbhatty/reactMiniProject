import React from 'react'
import { Link } from 'react-router'

const RegisterM = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[100vh]' style={{ backgroundImage: 'url(./src/assets/login-img.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>


                <form className='bg-white p-8 text-green-800 text-center max-w-1/3 space-y-4 rounded-sm'>

                    <h4 
                    className='text-2xl font-bold'
                    >
                        Register
                    </h4>

                    <input
                    placeholder='Full Name' 
                    className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' 
                    type="text" 
                    name=""
                    required 
                    id="" />

                    <input
                    placeholder='Mobile No.' 
                    className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' 
                    type="number" 
                    name=""
                    required  
                    id="" />

                    <input
                    placeholder='E-mail' 
                    className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' 
                    type="email" 
                    name=""
                    required  
                    id="" />

                    <input
                    placeholder='password' 
                    className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' 
                    type="password" 
                    name=""
                    required  
                    id="" />

                    <input
                    placeholder='Confirm Password' 
                    className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' 
                    type="password" 
                    name=""
                    required  
                    id="" />

                    <button 
                    type="submit" 
                    className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer text-white font-semibold'
                    >
                        Register
                    </button>

                    {/* Divider */}
                    <div className='flex items-center my-6'>
                        <div className='flex-grow h-px bg-gray-700 mr-2'></div>
                        <p className='text-sm text-gray-500'>OR</p>
                        <div className='flex-grow h-px bg-gray-700 ml-2'></div>
                    </div>
                    {/* Divider */}

                    <div
                    className='space-y-3'
                    >
                        <button
                        className='w-full bg-red-700 py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'
                        >
                            Login with Google
                        </button>

                        <button
                        className='w-full bg-black py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'
                        >
                            Login with Github
                        </button>
                    </div>

                    <p 
                    className='text-green-800'
                    >
                        Have an account? 
                        <Link
                        to={'/login'} 
                        className='hover:underline ml-1 font-semibold'
                        >
                             Login Here
                        
                        </Link>
                    </p>
                </form>



            </div>
        </div>
    )
}

export default RegisterM