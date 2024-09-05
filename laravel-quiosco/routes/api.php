<?php

use App\Http\Controllers\CategoriaController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();




    /* Las funciones dentro de esta funcion van a realizar que se requeriran la autorizaci[on del usuario
    ] */
})->middleware('auth:sanctum');


Route::apiResource('/categorias',CategoriaController::class);