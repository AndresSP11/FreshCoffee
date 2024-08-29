import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout';

import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';
import Login from './views/Login';
import Registro from './views/Registro';



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
    }
]);
export default router;