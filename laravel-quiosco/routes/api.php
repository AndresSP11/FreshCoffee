<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\ProductoController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return $request->user();
    /* Las funciones dentro de esta funcion van a realizar que se requeriran la autorizaci[on del usuario
    ] */
})->middleware('auth:sanctum');


Route::apiResource('/categorias',CategoriaController::class);   
Route::apiResource('/productos',ProductoController::class);   

//Autenticacion

Route::post('/registro',[AuthController::class,'register']);