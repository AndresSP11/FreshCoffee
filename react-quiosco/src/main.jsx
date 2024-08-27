import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'
import router from './router'
/* import App from './App.jsx' -> Esta eliminado */ 
import './index.css'


/* Recordar que en este caso se ha borrado el LiveWIre */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
