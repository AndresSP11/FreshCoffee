import React from 'react'
import clienteAxios from '../config/axios'
import useSWR from 'swr'

export default function Ordenes() {
  /* Obteniendo el token de la validaciòn o logeado */
  const token=localStorage.getItem('AUTH_TOKEN')


  const fetcher=()=>clienteAxios('/api/pedidos',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  /* Recordar que el useSWR es el que vale la parte de la extracciòn de datos */
  const {data,error,isLoading}=useSWR('/api/pedidos',fetcher,{refreshInterval:1000});
  
  if(isLoading) return 'Cargando...'


  /* console.log(data?.data.data);
  console.log(error);
  console.log(isLoading); */


  return (
    <div>
      <h1 className=' text-4xl font-black'>Ordenes </h1> 
      <p className=' text-2xl my-10'>
        Administra tus ordenes aqui
      </p>
      <div>
        {data.data.data.map(pedido=>(
            <div key={pedido.key} className=" p-5  bg-white shadow space-y-2 border-b">
              <p className=' text-xl font-bold text-slate-600'>
                Contenidodel Pedido:
              </p>
            </div>
        ))}
      </div>
    </div>

  )
}
