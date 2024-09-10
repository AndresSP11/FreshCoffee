import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout';

import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';
import AdminLayout from './layouts/AdminLayout';
import Ordenes from './views/Ordenes';
import Productos from './views/Productos';



const router= createBrowserRouter([
    {
        path:'/',
        element: <Layout></Layout>,
        children:[
            {
                index:true,
                element:<Inicio></Inicio>
            }
        ]
    },
    {
        path:'/auth',
        element: <AuthLayout/>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/registro',
                element:<Registro />
            }
        ]
    },
    {
        path:'/admin',
        element:<AdminLayout></AdminLayout>,
        children:[
            {
                index:true,
                element:<Ordenes></Ordenes>
            },
            {
                path:'/admin/productos',
                element:<Productos></Productos>
            }
        ]
    }
]);
export default router;