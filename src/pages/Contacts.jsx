import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/contact/Navbar'
import Siderbar from '../components/contact/Siderbar'

const Contacts = () => {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
          <Siderbar/>
          <Outlet/>
        </div>
    </div>
  )
}

export default Contacts