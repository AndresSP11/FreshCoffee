import React, { createRef, useState} from 'react'
import { Link } from 'react-router-dom'
import clienteAxios from '../config/axios';


const Registro = () => {

  const nameRef=createRef();
  const emailRef=createRef();
  const passwordRef=createRef();
  const passwordConfirmationRef=createRef();

  const [errores,setErrores]=useState([]);

  const handleSubmit=async (e)=>{
    e.preventDefault();

    const datos={
      name:nameRef.current.value,
      email:emailRef.current.value,
      password:passwordRef.current.value,
      /*   */
    }
    
    try {
      /* Haciendo envio de la parte de la api...  */
      const respuesta=await clienteAxios.post('/api/registro',datos);
      console.log(respuesta);
    } catch (error) {
      console.log(Object.values(error.response.data.errors));
    }


  }
  return (
    <>
      <div className=''>
        <h1 className=' text-4xl font-black'>Crea tu Cuenta</h1>
        <p>Crea tu cuenta llenando el formulario</p>
      </div>

      <div className=' bg-white shadow-lg rounded-md mt-10 px-5 py-10 border'>
          <form action="" className=' gap-2'
            onSubmit={handleSubmit}
            noValidate
          >

            <div className=' mt-2' >
              <label htmlFor="name">Nombre:</label>
              <input 
              type="text"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='name'
              name='name'
              placeholder='Tu Nombre'
              ref={nameRef}
              />
            {/* Email */}
            </div>
            <div className=' mt-2'>
              <label htmlFor="email">Email:</label>
              <input 
              type="email"
              className='p-2 border rounded w-full mt-2 bg-gray-50'
              id='email'
              name='email'
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
              name='password'
              placeholder='Tu Password'
              ref={passwordRef}
              />
            
            </div>


            <div className=' mt-2'>
              <label htmlFor="password_confirmation">Repetir Password:</label>
              <input 
              type="password"
              className='p-2 border rounded w-full mt-2'
              name="password_confirmation"
              id='password_confirmation   '
              placeholder='Repetir Password'
              ref={passwordConfirmationRef}
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
