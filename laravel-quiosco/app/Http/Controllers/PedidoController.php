<?php

namespace App\Http\Controllers;

use App\Models\Pedido;
use App\Http\Controllers\Controller;
use App\Http\Resources\PedidoCollection;
use App\Models\PedidoProducto;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PedidoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
                
        /* La parte del  */
        return new PedidoCollection(Pedido::with('user')->with('productos')->where('estado',0)->get());

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        /* Se hace doble integración en la parte del backend */
        /* La unicaforma de comunicar la parte de frontend con backend  */
        $pedido=new Pedido;
        $pedido->user_id=Auth::user()->id;
        /* Aqui esta recibiendo por parte del frontend el total de pedido */
        $pedido->total=$request->total;
        $pedido->save();

        //Obtener el ID del pedido
        $id=$pedido->id;

        //Obtener los productos
        $productos=$request->productos;

        //Formatear un arreglo
        $pedido_producto=[];

        foreach($productos as $producto){
            $pedido_producto[]=[
                'pedido_id'=>$id,
                'producto_id'=>$producto['id'],
                'cantidad'=>$producto['cantidad'],
                'created_at'=>Carbon::now(),
                'updated_at'=>Carbon::now()
            ];
        }


        // Almacenar en la BD
        /* A diferencia del Create, el de aqui permite insertar arreglos o productos determinados que nos ayuda */
        /* PedidoProducto::insert($pedido_producto); */
        DB::table('pedido_productos')->insert($pedido_producto);
        return[
            'message'=>'Pedido realizado correctamente, estará listo en unos minutos',
        ];
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Pedido $pedido)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Pedido $pedido)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Pedido $pedido)
    {
        //
    }
}
