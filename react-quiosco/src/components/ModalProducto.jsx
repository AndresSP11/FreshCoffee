import React, { useEffect, useState } from 'react'
import useQuiosco from '../hooks/useQuiosco'
import { formatearDinero } from '../helpers';


const ModalProducto = () => {
    const [cantidad,setCantidad]=useState(1);
    const [edicion,setEdicion]=useState(false);
    const {producto,handleClickModal,handleAgregarPedido,pedido}=useQuiosco();

    /* El useEffect se ejecuta cuando se abre el modal , como tambien cuando se hace la parte de o se mueve el setState */
    useEffect(()=>{
        /* En este caso recordar que el producto se llena en base a la parte de cada uno , al momento de seleccionar 
        recordar esa parte */
        if(pedido.some(pedidoState=>pedidoState.id===producto.id)){
            const productoEdicion=pedido.filter(pedidoState=>pedidoState.id===producto.id)[0];
            setCantidad(productoEdicion.cantidad);
            setEdicion(true);
        }
    },[pedido])


    const incrementarCantidad=()=>{
        if(cantidad>=5){
            return
        }
        setCantidad(cantidad+1);
    }

    const decrementarCantidad=()=>{
        if(cantidad<=1){
            return
        }
        setCantidad(cantidad-1);
    }

  return (
    <div className=' md:flex gap-10 items-center'>
        <div className=' md:w-1/3'>
            <img 
            src={`/img/${producto.imagen}.jpg`}
            alt={`Imagen producto ${producto.nombre}`}
             />
        </div>

        <div className=' md:w-2/3'>
            <div className=' flex justify-end'>
                <button className=''
                onClick={()=>handleClickModal()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" size-7">
                 <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                </button>
            </div>
            <h1 className=' text-3xl font-bold mt-5'>
                {producto.nombre}
            </h1>
            <p className='mt-5 font-black text-4xl text-amber-500'>
                {formatearDinero(producto.precio)}
            </p>

            <div className=' flex gap-3 items-center'>
                <button className=' bg-red-500 p-3 rounded-full rounded-xl text-gray-300 font-black'
                onClick={()=>decrementarCantidad(cantidad)}
                >-</button>
                <p>{cantidad}</p>
                <button className=' bg-green-500 p-3   rounded-full text-gray-300 font-black'
                onClick={()=>incrementarCantidad(cantidad)}
                >+</button>
            </div>

            <button
            type='button'
            className='bg-indigo-600 hover:bg-indigo-800 px-5 py-2 mt-5 text-white font-bold uppercase rounded'
            onClick={()=>{
                handleAgregarPedido({...producto,cantidad}),
                handleClickModal()
            }
                
            }
            >
                {edicion ? 'Guardar Cambios':'Añadir Pedido'}
            </button>
        </div>  
    </div>
  )
}

export default ModalProducto
