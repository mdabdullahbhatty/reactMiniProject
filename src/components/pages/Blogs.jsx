import React, { useContext } from 'react'
import { userContext } from '../../contexts/ProfileContext';

const Blogs = () => {

  const conTextUser = useContext(userContext);
  return (
    <div className='h-[100vh] text-center flex items-center justify-center'>{conTextUser}</div>
  )
}

export default Blogs