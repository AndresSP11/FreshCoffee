<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistroRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;


class AuthController extends Controller
{
    //
   /* los permisos necesarios  */
    public function register(RegistroRequest $request){

        //Valida el registro
        /* En esta parte de encuentra la parte de los Request enviados necesarios , asi que no problem */
        $data=$request->validated();

        $user=User::create([
            'name'=>$data['name'],
            'email'=>$data['email'],
            'password'=>bcrypt($data['password'])
        ]);

        return[
            'token'=>$user->createToken('token')->plainTextToken,
            'user'=>$user
        ];

    }
    public function login(LoginRequest $request){

        $data=$request->validated();

        /* En este caso si no se autentica conla parte del Auth pasandole al data 
        se pierde, es la unica forma que autentica con laclase autenticadora, al pasar el email ypassword es launica forma queobtiene ello*/
        /* Recordar que la parte del $data va llegar con un valorr determinado como arreglo */
       
        if(!Auth::attempt($data)){
            /* Asignado en la parte de email lo elegimos ahì */
            /* Recorda la parte de los Peticiones estan en status 200, pero con 400 se arregla esta solicitud  */
            return response([
                'errors'=>['El email o el password son incorrectos']
            ],422);
        }

        $user=Auth::user();
        
        return[
            'token'=>$user->createToken('token')->plainTextToken,
            'user'=>$user
        ];

    }
    public function logout(Request $request){
        $user=$request->user();
        $user->currentAccessToken()->delete();

        return[
            'user'=>null
        ];
    }
}
