import React, { useState } from 'react'

import { createContext } from "react";
import { categorias as categoriasDB } from '../data/categorias'


const QuioscoContext=createContext();

const QuioscoProvider = ({children}) => {

    /* En este caso la parte de aqui, vamos a tener que autenticar todo lo necesario
    para poder realizarlo bien. En este caso la parte de autenticado se va tener 
    que configurar nuevamente, aqui ES DONDE SE VA PASAR TODAS LAS FUNCIONES. */
    const [categorias,setCategorias]=useState(categoriasDB);    
    
    const [categoriaActual,setCategoriaActual]=useState(categorias[0]);
    
    const handleClickCategoria=()=>{
      console.log('click ne categoria');
    }
    
  return (
    <QuioscoContext.Provider value={
        {
           categorias,
           categoriaActual,
           handleClickCategoria
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
