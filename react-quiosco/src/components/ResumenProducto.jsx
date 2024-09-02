import React from 'react'

export default function ResumenProducto({producto}) {
    
    const {id,nombre,cantidad}=producto;

    

    return (
    <div>
      Mostrando la parte de producto { nombre  }, mostrando la cantidad referida {cantidad}
    </div>
  )
}
