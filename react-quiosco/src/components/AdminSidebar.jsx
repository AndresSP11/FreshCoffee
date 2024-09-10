import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'



export default function AdminSidebar() {

    const {logout}=useAuth({middleware:'auth'})

  return (
    <aside className=' md:w-72 h-screen'>
      <div className=' p-4'>
            <img src="/img/logo.svg" alt="" />
      </div>

      <nav>"
        <Link to="/admin" className=' font-bold text-lg'>Ordenes</Link>
        <Link to="/admin/productos" className=' font-bold text-lg'>Productos</Link>
      </nav>

      <div>
            <button
            className=' bg-red-500 text-center w-full font-bold text-gray-100 py-3'
            type='button'
            onClick={logout}>
                Cerrar Sesión
            </button>
      </div>
    </aside>
  )
}
