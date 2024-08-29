import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'



export default function Layout() {
  return (
    <div className=' md:flex'>
      <Sidebar></Sidebar>

      <main className='flex-1 h-screen overflow-y-scroll'>
        <Outlet></Outlet>
      </main>
      
      <Resumen></Resumen>
    </div>
  )
}
