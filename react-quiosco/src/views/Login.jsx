import React, { createRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta';
import { useAuth } from '../hooks/useAuth';


const Login = () => {
  const emailRef=createRef();
  const passwordRef=createRef();

  const [errores,setErrores]=useState([]);

  const {login}=useAuth({
    middleware:'guest',
    url:'/'
  })


  /* la parte de async... */
  const handleSubmit=async (e)=>{
    e.preventDefault();
    /* Termina la parte de aqui */
    /* Obteniendo la parte de los datos */
    
    const datos={
      email:emailRef.current.value,
      password:passwordRef.current.value,
    }

    login(datos,setErrores);
  }

  return (
    <>
      <div className=''>
        <h1 className=' text-4xl font-black'>Iniciar Sesión</h1>
        <p>Para crear un Pedido debes Iniciar Sesión</p>
      </div>

      <div className=' bg-white shadow-lg rounded-md mt-10 px-5 py-10 border'>
          <form action="" 
          className='gap-2'
          onSubmit={handleSubmit}
          noValidate
          >
            {errores ? errores.map(error=> <Alerta>{error}</Alerta>) : null}
            
            <div className=' mt-2'>
              <label htmlFor="email">Email:</label>
              <input 
              type="email"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='email'
              placeholder='Tu Email'
              ref={emailRef}
              />
            
            </div>


            <div className=' mt-2'>
              <label htmlFor="password">Password:</label>
              <input 
              type="password"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='password'
              placeholder='Tu Password'
              ref={passwordRef}
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
