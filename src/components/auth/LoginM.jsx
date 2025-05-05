import React from 'react'
import { Link } from 'react-router'

const LoginM = () => {
    return (
        <div>
            <div className='flex justify-center items-center h-[90vh]' style={{backgroundImage:'url(./src/assets/login-img.jpg)', backgroundSize: 'cover', backgroundPosition:'center'}}>


                <form className='bg-white p-8 text-green-800 text-center max-w-sm space-y-4 rounded-sm'>

                    <h4 className='text-2xl font-bold'>Login</h4>
                    <input placeholder='email' className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' type="text" name="" id="" />

                    <input placeholder='password' className='w-full border px-3 py-2 focus:ring-2 focus:ring-green-700 rounded-md' type="password" name="" id="" />

                    <button type="submit" className='w-full bg-green-700 py-2 rounded hover:bg-green-800 cursor-pointer text-white font-semibold'>Login</button>

                    <div className='space-y-3'>
                        <button className='w-full bg-red-700 py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'>
                            Login with Google
                        </button>

                        <button className='w-full bg-black py-2 rounded hover:text-gray-400 cursor-pointer text-white font-semibold'>
                            Login with Github
                        </button>
                    </div>

                    <p className='text-green-800'>Don't have an account? <Link to={'/register'} className='hover:underline ml-1 font-semibold'>Register Here</Link></p>
                </form>



            </div>
        </div>
    )
}

export default LoginM