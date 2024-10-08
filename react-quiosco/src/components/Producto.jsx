import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";


export default function Producto({producto,botonAgregar=false,botonDisponible=false}) {
    const {nombre,precio,imagen,categoria_id,id}=producto;
    const {handleClickModal,handleSetProducto,handleClickProductoAgotado}=useQuiosco();  


    return (
    <div className=' border p-3 shadow bg-white'>
        <img 
        src={`/img/${imagen}.jpg`} 
        alt={`${nombre}`}
        className=" w-full"
        />
        <div>
          <h3 className=" text-2xl font-bold">{nombre}</h3>
          <p className=" mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>
          {botonAgregar && (<button className=' w-full bg-indigo-500 font-bold text-gray-100 uppercase text-center py-3 hover:bg-indigo-600'
          onClick={
            ()=>{
              handleClickModal();
              handleSetProducto(producto);
            }            
          }>Seleccionar</button>)}

          {botonDisponible && (<button className=' w-full bg-indigo-500 font-bold text-gray-100 uppercase text-center py-3 hover:bg-indigo-600'
          onClick={
            ()=>{
              handleClickProductoAgotado(producto.id)
            }            
          }>Producto Agotado</button>)}
          
      
        </div>
    </div>
  )
}
