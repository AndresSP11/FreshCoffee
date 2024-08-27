import React from 'react'
import { Outlet } from 'react-router-dom'



export default function Layout() {
  return (
    <div className=' text-4xl'>
       Layout

       <Outlet></Outlet>
    </div>
  )
}
