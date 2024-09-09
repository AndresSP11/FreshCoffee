import React from 'react'

const Alerta = ({children}) => {
  return (
    <>
        <div className='text-center my-2 bg-red-600 text-white font-bold p-1 block rounded-lg '>
            {children}
        </div>
    </>
  )
}

export default Alerta
