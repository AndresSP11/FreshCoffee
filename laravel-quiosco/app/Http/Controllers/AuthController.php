<?php

namespace App\Http\Controllers;

use App\Http\Requests\RegistroRequest;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    //
   /* los permisos necesarios  */
    public function register(RegistroRequest $request){

        //Valida el registro
        $data=$request->validated();

    }
    public function login(){
        
    }
    public function logout(){

    }
}
