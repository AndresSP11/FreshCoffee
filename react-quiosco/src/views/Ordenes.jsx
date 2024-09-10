import React from 'react'
import clienteAxios from '../config/axios'
import useSWR from 'swr'
import {formatearDinero} from '../helpers'
export default function Ordenes() {
  /* Obteniendo el token de la validaciòn o logeado */
  const token=localStorage.getItem('AUTH_TOKEN')

  /* En esta ocasión la parte de la extración de la parte de pedido
 */
  const fetcher=()=>clienteAxios('/api/pedidos',{
    headers:{
      Authorization: `Bearer ${token}`
    }
  })
  /* Recordar que el useSWR es el que vale la parte de la extracciòn de datos */
  const {data,error,isLoading}=useSWR('/api/pedidos',fetcher,{refreshInterval:4000});
  
  if(isLoading) return 'Cargando...'


  console.log(data?.data.data);
  console.log(error);
  console.log(isLoading);

  

  return (
    <div>
      <h1 className=' text-4xl font-black'>Ordenes </h1> 
      <p className=' text-2xl my-10'>
        Administra tus ordenes aqui
      </p>
      <div className=' grid grid-cols-3'>
        {data?.data.data.map(pedido=>(
            <div key={pedido.key} className=" p-5  bg-white shadow space-y-2 border-b my-2">
              <p className=' text-xl font-bold text-slate-600'>
                  Contenido del Pedido:
              </p>
              {pedido.productos.map(producto=>(
                <div
                key={producto.id}
                className=' border-b border-b-slate-200 last-of-type:border-none py-5'
                >
                  <p>{producto.id}</p>
                  <p>{producto.nombre}</p>
                  <p>
                    Cantidad:{''}
                    <span className=' font-bold'>{producto.pivot.cantidad}</span>
                  </p>
                </div>
              ))}
              <p className=' text-lg font-bold text-slate-600'>
                Cliente:{''}
                <span className=' font-normal'>{pedido.user.name}</span>
              </p>
              <p className=' text-lg font-bold text-amber-600'>
                Total a pagar:{''}
                <span className=' font-normal  text-slate-600'>{formatearDinero(pedido.total)}</span>
              </p>
              <button
              type="submit" className={`cursor-pointer w-full bg-indigo-600 hover:bg-indigo-800' p-3 font-bold text-center uppercase rounded-lg text-gray-100`} > 
              Completado
            </button>
            </div>
        ))}
      </div>
    </div>

  )
}
