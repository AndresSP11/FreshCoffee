import { useEffect } from "react";
import clienteAxios from "../config/axios";
import useSWR from "swr";
import { useNavigate } from "react-router-dom";
import useSWRMutation from "swr/mutation";



export const useAuth=({middleware,url})=>{

    const token=localStorage.getItem('AUTH_TOKEN')
    const navigate=useNavigate();
    /* Haciendo llamado a la parte de la url de getUser recordarqeu tiene
    Keyvalue 
    ytokens... */
    /* La partede mutate, nos ayuda a tener el mutate */
    /* En este caso la parte se ve la autorizaciòn o el llamado del User  */
    /* Esta obteniendo la parte del Usuario */
    const {data:user,error,mutate}=useSWR('/api/user',()=>
        clienteAxios('/api/user',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        })
        .then(res=>res.data)
        .catch(error=>{
            throw Error(error?.response?.data?.errors)
        },)
);

    /* El middleware va ser en que aprte de nuesta aplicaciòn estamos utilizando este hook */
    const login=async(datos,setErrores)=>{
        try {
            /* Haciendo envio de la parte de la api...  */
            const {data}=await clienteAxios.post('/api/login',datos);
            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores([]);
            await mutate();
          } catch (error) {
            /* Almacenando los errores de la base de datos al mandar o comunicar al a api, recuertda que la ruta es como un opòst*/
            setErrores(Object.values(error.response.data.errors))
          }
    }

    const registro=async (datos,setErrores)=>{
        try {
            /* Haciendo envio de la parte de la api...  */
            const {data}=await clienteAxios.post('/api/registro',datos);
            console.log(data.token);
            localStorage.setItem('AUTH_TOKEN',data.token)
            setErrores([]);
            await mutate();
          } catch (error) {
            console.log(Object.values(error.response.data));
            /* Almacenando los errores de la base de datos al mandar o comunicar al a api, recuertda que la ruta es como un opòst
             */
            setErrores(Object.values(error.response.data.errors))
          }
    }
    const logout=async()=>{
        try {
            await clienteAxios.post('/api/logout',null,{
                /* Autorizaciòn en esta ocasiòn */
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            localStorage.removeItem('AUTH_TOKEN')
            await mutate(undefined)
        } catch (error) {
            throw Error(error?.response?.data?.errors)
        }
    }

    console.log(user);
    console.log(error);


    useEffect(()=>{
        if(middleware ==='guest' && url && user){
            navigate(url);
        }
        if(middleware ==='guest' && user && user.admin){
            navigate('/admin');
        }
        if(middleware ==='admin' && user && !user.admin){
            navigate('/');
        }

        if(middleware==='auth' && error){
            navigate('/auth/login');
        }
        console.log("Estoy ejecutando tu UseEffect");
    },[user,error])


    /* console.log(middleware);
    console.log(url); */
    console.log(user);
    return{
        login,
        registro,
        logout,
        user,
        error
    }
}