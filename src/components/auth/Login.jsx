import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'



const Login = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center my-5'>
      <form className='md:w-1/2 w-full bg-gray-300 rounded-md px-8 lg:px-16 py-14' action="">
        <div>
          <label className='text-xl text-indigo-400 font-semibold ' for="username">Username:</label> <br />
          <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='username' type="text" name='username' />
        </div>
        <div className='mt-5'>
          <label className='text-xl text-indigo-400 font-semibold mt-6 ' for="password">Password</label><br />
          <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='Password' type="password" name='password' />
        </div>

        <button className='cursor-pointer w-full text-center text-xl transition-all bg-green-400 font-semibold mt-16 rounded-md py-2 hover:text-gray-600'>Submit</button>

        <p className='mt-2 cursor-pointer'><input type="checkbox" for='rememberme' /> <span name='rememberme'>Remember me</span></p>

        <div className='flex gap-4 justify-between items-center px-10 mt-16 '>
          <Link to={'/'}><button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 cursor-pointer'>Cancel</button></Link>
          
          <Link to={'/register'}><button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 cursor-pointer'>Register</button></Link>
        </div>

        
      </form>

    </div>
  )
}

export default Login