import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <>
      <div className=''>
        <h1 className=' text-4xl font-black'>Iniciar Sesión</h1>
        <p>Para crear un Pedido debes Iniciar Sesión</p>
      </div>

      <div className=' bg-white shadow-lg rounded-md mt-10 px-5 py-10 border'>
          <form action="" className=' gap-2'>

            
            <div className=' mt-2'>
              <label htmlFor="email">Email:</label>
              <input 
              type="email"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='email'
              placeholder='Tu Email'
              />
            
            </div>


            <div className=' mt-2'>
              <label htmlFor="password">Password:</label>
              <input 
              type="password"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='password'
              placeholder='Tu Password'
              />
            
            </div>

            <input
            type="submit"
            value="Crear Cuenta"
            className=' w-full bg-indigo-500 mt-3 p-3 font-extrabold uppercase text-yellow-50 rounded-lg hover:bg-indigo-600 cursor-pointer'
             />
          </form>
      </div>

      <nav className=' mt-5'>
        <Link to="/auth/registro">
          ¿No tienes cuenta? Crea una
        </Link>
      </nav>
    </>
  )
}

export default Login
