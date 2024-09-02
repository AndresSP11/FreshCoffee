import React, { useEffect, useState } from 'react'

import { createContext } from "react";
import { categorias as categoriasDB } from '../data/categorias'
import {productos as productosDB} from '../data/productos'

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

    const handleAgregarPedido=({categoria_id,imagen,...producto})=>{
        setPedido([...pedido,producto]);
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
           handleAgregarPedido
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
