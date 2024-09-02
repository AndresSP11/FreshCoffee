import React from 'react'
import useQuiosco from '../hooks/useQuiosco';


export default function Resumen() {

  const {pedido}=useQuiosco();

  return (
    <aside className=' w-72 h-screen overflow-y-scroll p-5'>
        <h1 className=' text-4xl font-extrabold'>
          Mi Pedido
        </h1>
        <p className=' text-lg my-5'>
          Aquì podras ver el resumen 
        </p>

        <div className=''>
          { pedido.length===0 ? (<p className=' text-center text-2xl'>No hay nada</p>) : (<p>Si hay algo</p>) }
        </div>

        <p>
          Total: {''}
        </p>

        <form action=" w-full">
          <div className=' mt-5 items-center'>
            <input 
            value="Confirmar Pedido"
            type="text" className=' cursor-pointer bg-indigo-600 hover:bg-indigo-800 p-3 font-bold text-center uppercase rounded-lg text-gray-100' />
          </div>
        </form>

    </aside>  
  )
}


