import React from 'react'
import useQuiosco from '../hooks/useQuiosco';


export default function Categoria({categoria}) {

    const {icono,id,nombre}=categoria;
    const {handleClickCategoria,categoriaActual}=useQuiosco();



  return (
    <div className={`${categoriaActual.id==id ? "bg-amber-400" : ""}  flex items-center gap-4 bordeer w-full p-3 hover:bg-amber-400 cursor-pointer`}>
        <img 
        src={`/img/icono_${icono}.svg`}
        alt=""
        className=' w-12' />   
        <button 
        className=' text-lg font-bold cursor-pointer truncate'
        /* Hacer el llamado de ()=>function() este funciòn se hace lladmado cuando se da click */
        onClick={()=>handleClickCategoria(id)}
        >{categoria.nombre}</button>
    </div>
  )
}
