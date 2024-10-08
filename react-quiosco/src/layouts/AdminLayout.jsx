import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AdminLayout() {

  useAuth({middleware:'admin'});



  return (
    <div className=' md:flex'>
      <AdminSidebar></AdminSidebar>

      <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
        <Outlet></Outlet>
      </main>
      
      
    </div>
  )
}
