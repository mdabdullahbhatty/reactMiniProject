import React from 'react'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router'
import Footer from '../shared/Footer'

const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Root