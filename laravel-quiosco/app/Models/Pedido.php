<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    use HasFactory;

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function productos(){
        /* En este caso se esta indicando la tabla de pedido_producto.... lo que se ve  */
        return $this->belongsToMany(Producto::class,'pedido_productos')->withPivot('cantidad');
        /* Obtener por cada pedido, la relación de cada pedido_id con los productos_id osea tener los datos de pedido_id */
    }


}
