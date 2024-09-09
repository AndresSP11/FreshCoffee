<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password as PasswordRules;



class RegistroRequest extends FormRequest
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
          /* en este caso ya detectala variable paswword_conhfirmation */
        return [
            'name'=>['required','string'],
            'email'=>['required','email','unique:users,email'],
            'password'=>[
                'required',
                'confirmed',
                PasswordRules::min(8)->letters()->symbols()->numbers()
            ]
        ];
    }

    public function messages(){
        return [
            'name' => 'El nombre es Obligatorio',
            'email'=> 'El Email es Requerido',
            'email.email'=>'Debe de ser un email contenido @',
            'email.unique'=>'El email ya existe',
            'password'=>'El password debe contener 8 letras como minimo, 1 simbolo, 1 numero'
        ];
        
    }
}
