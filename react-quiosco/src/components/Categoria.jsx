import React from 'react'
import useQuiosco from '../hooks/useQuiosco';


export default function Categoria({categoria}) {

    const {icono,id,nombre}=categoria;
    const {handleClickCategoria}=useQuiosco();
  return (
    <div className=' flex items-center gap-4 bordeer w-full p-3 hover:bg-amber-400
     cursor-pointer'>
        <img 
        src={`/img/icono_${icono}.svg`}
        alt=""
        className=' w-12' />   
        <button 
        className=' text-lg font-bold cursor-pointer truncate'
        onClick={handleClickCategoria}
        >{categoria.nombre}</button>
    </div>
  )
}
