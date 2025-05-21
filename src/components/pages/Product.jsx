import React, { useContext } from 'react'
import { userContext } from '../../contexts/ProfileContext';

const Product = () => {

  const {userProfile} = useContext(userContext);

  return (
    <div >
      <div className='h-[90vh] flex items-center justify-center'>
        <h1> name: {userProfile.name} </h1>
        <p> email: { userProfile.email } </p>
      </div>
    </div>
  )
}

export default Product