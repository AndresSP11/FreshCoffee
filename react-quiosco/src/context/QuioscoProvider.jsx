import React, { useState } from 'react'

import { createContext } from "react";
import { categorias as categoriasDB } from '../data/categorias'


const QuioscoContext=createContext();

const QuioscoProvider = ({children}) => {

    /* En este caso la parte de aqui, vamos a tener que autenticar todo lo necesario
    para poder realizarlo bien. En este caso la parte de autenticado se va tener 
    que configurar nuevamente, aqui ES DONDE SE VA PASAR TODAS LAS FUNCIONES. */
    const [categorias,setCategorias]=useState(categoriasDB);    
    
    

  return (
    <QuioscoContext.Provider value={
        {
           categorias
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
