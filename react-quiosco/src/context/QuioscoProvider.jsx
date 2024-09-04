import React, { useEffect, useState } from 'react'

import { createContext } from "react";

import { categorias as categoriasDB } from '../data/categorias'
import {productos as productosDB} from '../data/productos'
import { toast } from 'react-toastify';

const QuioscoContext=createContext();

const QuioscoProvider = ({children}) => {

    /* En este caso la parte de aqui, vamos a tener que autenticar todo lo necesario
    para poder realizarlo bien. En este caso la parte de autenticado se va tener 
    que configurar nuevamente, aqui ES DONDE SE VA PASAR TODAS LAS FUNCIONES. */
    /* Probando Productos */
    const [productos,setProductos]=useState(productosDB);
    const [producto,setProducto]=useState({});
    const [categorias,setCategorias]=useState(categoriasDB);    
    const [categoriaActual,setCategoriaActual]=useState(categorias[0]);

    const [pedido,setPedido]=useState([]);
    
    const [modal,setModal]=useState(false); /* Se crea false para que  presionemos se ahga true */

    const [total,setTotal]=useState(0);

  useEffect(()=>{
    const contarTotal=pedido.reduce((total,producto)=>(producto.precio*producto.cantidad)+total,0);
    setTotal(contarTotal);
  },[pedido]);

    const handleClickCategoria=(id)=>{
      const categoria=categorias.filter(categoria=>categoria.id==id)[0];
      setCategoriaActual(categoria);
    }

    const handleClickModal=()=>{
      setModal(!modal);
      
    }

    const handleSetProducto=(producto)=>{
      setProducto(producto);
    }

    useEffect(()=>{
      const productosFiltrados=productosDB.filter(producto=>producto.categoria_id==categoriaActual.id);
      setProductos(productosFiltrados);
    },[categoriaActual])


    const handleAgregarPedido=({categoria_id,...producto})=>{
        if(pedido.some(pedidoState=>pedidoState.id===producto.id)){
          const productoEdicion=pedido.map(pedidoState=>pedidoState.id===producto.id ? producto : pedidoState);
          setPedido(productoEdicion);
          toast.success("Guardando Cambios")
      }else{
        setPedido([...pedido,producto]);
        toast.success('Agregado el Pedido');
      }
    }

    const handleEditarCantidad=id=>{
      const productoEditar=pedido.filter(pedidoFiltrar=>pedidoFiltrar.id==id)[0];
      setProducto(productoEditar);
      setModal(!modal);
    }

    const eliminarProducto=(producto)=>{
      const nuevoArreglo=pedido.filter(felpudini=>felpudini.id!==producto.id);
      setPedido(nuevoArreglo);
      toast.success('Eliminado Correctamente')
    }
    
  return (
    <QuioscoContext.Provider value={
        {
           categorias,
           categoriaActual,
           handleClickCategoria,
           productos,
           modal,
           handleClickModal,
           producto,
           handleSetProducto,
           pedido,
           handleAgregarPedido,
           eliminarProducto,
           handleEditarCantidad,
           total
        }
    }>
        {children}
    </QuioscoContext.Provider>

  )
}
export{
    QuioscoProvider
}
export default QuioscoContext
