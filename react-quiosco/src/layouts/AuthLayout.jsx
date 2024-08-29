import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <main className=' max-w-7xl m-auto items-center md:mt-20 flex flex-col md:flex-row'>
        <img className=' max-w-xs' src="../img/logo.svg" alt="imagen logotipo" />
        <div className=' p-10 w-full'>
          <Outlet></Outlet>
        </div>
    </main>
  )
}

export default AuthLayout
