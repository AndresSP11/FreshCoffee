import React from 'react'
import useSWR from 'swr'
import clienteAxios from '../config/axios'
import Producto from '../components/Producto'


export default function Productos() {
  const token =localStorage.getItem('AUTH_TOKEN')
  const fetcher=()=>clienteAxios('/api/productos',{
    headers:{
      Authorization:`Bearer ${token}` 
    }
  }).then(datos=>datos.data)

  const {data,error,isLoading}=useSWR('/api/productos',fetcher,{refreshInterval:10000})


if(isLoading) return 'cargando...';
console.log("La data es:");
console.log(data);

  return (
    <div>
      <h1 className=' text-4xl font-black'>Producto </h1> 
      <p className=' text-2xl my-10'>
        Maneja la disponibilidad Aqui
      </p>
      <div className=' grid grid-cols-5'>
        {data.data.map(producto=>(
              <Producto
              key={producto.id}
              producto={producto}
              botonDisponible={true}></Producto>
        ))}
      </div>
    </div>
  )
}
