import { createBrowserRouter } from 'react-router-dom'
import Layout from './layouts/Layout';

import AuthLayout from './layouts/AuthLayout';
import Inicio from './views/Inicio';

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
        element: <AuthLayout/>
    }
]);
export default router;