import React from 'react'

const Register = () => {
  return (
    <div>
      <div className='md:h-[100vh] h-[100vh] flex  justify-center items-center' style={{backgroundImage:'url(./src/assets/register-img.jpg)', backgroundPosition:'center', backgroundSize:'cover'}}>

        <form className='md:w-1/3 bg-amber-100 w-full rounded-md px-8 lg:px-16 pb-14 pt-5'>
          <h1 className='md:text-4xl text-2xl font-bold text-center mb-5'>New Register Form</h1>

          <div>
            <label className='text-xl text-indigo-400 font-semibold mt-6 ' htmlFor="">First Name:</label>
            <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='First Name' type="text" />
          </div>
          <div className='mt-3'>
            <label className='text-xl text-indigo-400 font-semibold mt-6 ' htmlFor="">Last Name:</label>
            <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='Last Name' type="text" />
          </div>
          <div className='mt-3'>
            <label className='text-xl text-indigo-400 font-semibold mt-6 ' htmlFor="">E-mail Address:</label>
            <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='E-mail Address' type="email" />
          </div>
          <div className='mt-3'>
            <label className='text-xl text-indigo-400 font-semibold mt-6 ' htmlFor="">Password:</label>
            <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='Password' type="password" />
          </div>
          <div className='mt-3'>
            <label className='text-xl text-indigo-400 font-semibold mt-6 ' htmlFor="">Comfirm Password:</label>
            <input className='w-full py-2 px-3.5 border rounded-md ' required placeholder='Re-type Password' type="password" />
          </div>

          <div className='flex justify-center mt-10 '>
            <button className='bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 text-center cursor-pointer'>Submit</button>
          </div>


        </form>
      </div>
    </div>
  )
}

export default Register