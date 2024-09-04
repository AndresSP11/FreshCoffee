/* Desde pagina Principal */
import React from 'react'

import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Resumen from '../components/Resumen'
import useQuiosco from '../hooks/useQuiosco'
import Modal from 'react-modal'
import ModalProducto from '../components/ModalProducto'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement('#root')



export default function Layout() {
  const {modal,handleClickModal}=useQuiosco();

  return (
    <>
    <div className=' md:flex'>
      <Sidebar></Sidebar>

      <main className='flex-1 h-screen overflow-y-scroll'>
        <Outlet></Outlet>
      </main>
      
      <Resumen></Resumen>
    </div>
    {/* Si modal esta como true entonfes retorna lo siguiente */}
      
        <Modal isOpen={modal} style={customStyles}>
            <ModalProducto></ModalProducto>
        </Modal>
        <ToastContainer></ToastContainer>
    </>
  )
}
