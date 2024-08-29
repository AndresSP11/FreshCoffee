import { formatearDinero } from "../helpers";


export default function Producto({producto}) {
    const {nombre,precio,imagen,categoria_id,id}=producto;
    
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
          <button className=' w-full bg-indigo-500 font-bold text-gray-100 uppercase text-center py-3 hover:bg-indigo-600'>Seleccionar</button>
      
        </div>
    </div>
  )
}
