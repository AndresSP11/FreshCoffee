<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Contracts\Service\Attribute\Required;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email'=>['required','email','exists:users,email'],
            'password'=>'required'
        ];
    }
    public function messages(){
        return [
            
            'email.required'=> 'El Email es Requerido',
            'email.email'=>'Tiene que tener un formato Email',
            'email.exists'=>'Esa cuenta no existe',
            'password'=>'El password es requerido'
        ];
        
    }
}
