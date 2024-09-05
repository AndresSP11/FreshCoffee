<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {


        /* Que  aqui es donde qeu columnas se van a retornar y qeu llaves vas a tener.*/
       /*  return parent::toArray($request); */

       /* Se comenta esa parte */
       /* En este caso se va decidir qeu columnas son las que se desean retornar */
        return[
            'id'=>$this->id,
            'nombre'=>$this->nombre,
            'icono'=>$this->icono
        ];

    }
}
