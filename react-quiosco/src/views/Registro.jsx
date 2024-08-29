import React from 'react'
import { Link } from 'react-router-dom'

const Registro = () => {
  return (
    <>
      <div className=''>
        <h1 className=' text-4xl font-black'>Crea tu Cuenta</h1>
        <p>Crea tu cuenta llenando el formulario</p>
      </div>

      <div className=' bg-white shadow-lg rounded-md mt-10 px-5 py-10 border'>
          <form action="" className=' gap-2'>

            <div className=' mt-2' >
              <label htmlFor="name">Nombre:</label>
              <input 
              type="text"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='name'
              placeholder='Tu Nombre'
              />
            {/* Email */}
            </div>
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


            <div className=' mt-2'>
              <label htmlFor="password_confirmation">Repetir Password:</label>
              <input 
              type="password"
              className='p-2 border rounded w-full mt-2'
              id='password_confirmation'
              placeholder='Repetir Password'
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
        <Link to="/auth/login">
          ¿Ya tienes cuenta? Iniciar Sesión
        </Link>
      </nav>
    </>
  )
}

export default Registro
