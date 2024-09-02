import React from 'react'

import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'


const Inicio = () => {
  /* Recordar las funciones abiertas extraen el return de cada función necesaria. */
  
  const {categoriaActual,productos}=useQuiosco();

  return (
    <>
      <h1 className=' text-4xl font-black'>{categoriaActual.nombre} </h1>
      <p className=' text-2xl my-10'>
        Elige y personaliza tu pedido a continuación 
      </p>

      <div className=' grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3'>

          {productos.map(producto=>(
            <Producto
            key={producto.id}
            producto={producto}></Producto>
          ))}
          
      </div>
    </>
  )
}

export default Inicio
