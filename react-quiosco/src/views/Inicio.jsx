import React, { useEffect } from 'react'

import Producto from '../components/Producto'
import useQuiosco from '../hooks/useQuiosco'
import useSWR from 'swr'
import clienteAxios from '../config/axios'
/* import { productos as data } from '../data/productos' */

const Inicio = () => {
  /* Recordar las funciones abiertas extraen el return de cada función necesaria. */
  
  
  const { categoriaActual } = useQuiosco()
  
  // Consulta SWR
  const token = localStorage.getItem('AUTH_TOKEN');
  /* La extracciín de las apis lo hacen ambos tanto como axios y el SWR */
  const fetcher = () => clienteAxios('/api/productos',{
    headers:{
      Authorization:`Bearer ${token}`
    }
  }).then(data => data.data)

  const { data, error, isLoading } = useSWR('/api/productos', fetcher,{
    refreshInterval:1000
  })
  
  
  if(isLoading) return (<span class="loader"></span>);
  const productos = data.data.filter(producto => producto.categoria_id === categoriaActual.id);
  
  
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
            producto={producto}
            botonAgregar={true}
            ></Producto>
          ))}
          
      </div>
    </>
  )
}

export default Inicio
