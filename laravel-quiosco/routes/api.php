<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\PedidoController;
use App\Http\Controllers\ProductoController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//Route::get('/user', function (Request $request) {
//    return $request->user();
    /* Las funciones dentro de esta funcion van a realizar que se requeriran la autorizaci[on del usuario
    ] */
//})->middleware('auth:sanctum');

Route::get('/user', function (Request $request) {
    return $request->user();
    
})->middleware('auth:sanctum');


Route::apiResource('/categorias',CategoriaController::class)->middleware('auth:sanctum');   
Route::apiResource('/productos',ProductoController::class)->middleware('auth:sanctum');   

Route::post('/logout',[AuthController::class,'logout'])->middleware('auth:sanctum');

Route::apiResource('/pedidos',PedidoController::class)->middleware('auth:sanctum');

//Autenticacion

Route::post('/registro',[AuthController::class,'register']);
Route::post('/login',[AuthController::class,'login']);

