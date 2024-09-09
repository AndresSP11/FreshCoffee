import React from 'react'
import useQuiosco from '../hooks/useQuiosco';
import ResumenProducto from './ResumenProducto';
import { formatearDinero } from '../helpers';


export default function Resumen() {

  const {pedido,total,handleSubmitNuevaOrden}=useQuiosco();

  const comprobarPedido=()=>pedido.length==0;

  console.log(comprobarPedido());

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("Enviando datos");
    handleSubmitNuevaOrden();

  }




  return (
    <aside className=' w-72 h-screen overflow-y-scroll p-5'>
        <h1 className=' text-4xl font-extrabold'>
          Mi Pedido
        </h1>
        <p className=' text-lg my-5'>
          Aquì podras ver el resumen 
        </p>

        <div className=''>
          { pedido.length===0 ? (<p className=' text-center text-2xl'>No hay nada</p>) : 
          (pedido.map((producto)=>(
            <p>
              <ResumenProducto
              key={producto.id}
              producto={producto}>
              </ResumenProducto>
            </p>
          ))
          )}
        </div>

        <p>
          Total: {''}
          {formatearDinero(total)}
        </p>

        <form action=" w-full"
          onSubmit={handleSubmit}
        >
          <div className=' mt-5 items-center'>
            <input 
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
            type="submit" className={`cursor-pointer
             
              ${comprobarPedido() ?
                 'bg-indigo-200'
                 :
                 'bg-indigo-600 hover:bg-indigo-800'
              }
               p-3 font-bold text-center uppercase rounded-lg text-gray-100`} />
          </div>
        </form>

    </aside>  
  )
}


