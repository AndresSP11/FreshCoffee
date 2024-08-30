import React from 'react'

import Categoria from './Categoria'
import useQuiosco from '../hooks/useQuiosco'




export default function Sidebar() {
  
    const {categorias}=useQuiosco();
    return (
    <aside className=' md:w-72'>
        <div className=' p-4'>
            <img
            className=' w-40'
            /* En este caso va sin puntos debido a que va sin rutas en el link */
            src="img/logo.svg" 
            alt="" />
        </div>

        <div className=' mt-10'>
            {categorias.map( categoria=>
                <Categoria
                key={categoria.id}
                categoria={categoria}
                ></Categoria>
            )}
        </div>

        <div className=' my-5 py-5'>
            <button
            className=' bg-red-500 text-center w-full font-bold text-gray-100 py-3'>
                Cancelar Orden
            </button>
        </div>
    </aside>
  )
}
