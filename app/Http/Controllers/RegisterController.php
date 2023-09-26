<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    public function save(Request $request) {
        if (Auth::check()) {
            return redirect(route('home'));
        }

        $validateFields = $request->validate([
            'name' => 'required|',
            'email' => 'required|email',
            'password' => 'required|'
        ]);

        if (User::where('email', $validateFields['email'])->exists()) {
            return redirect(route('user.registration'))->withErrors([
                'email' => 'Такой email уже зарегистрирован'
            ]);
        }

        $user = User::create($validateFields);
        if ($user) {
            Auth::login($user);
            return redirect(route('admin'));
        }

        return redirect(route('home'))->withErrors([
            'formError' => 'Произошла ошибка при сохранении пользователя'
        ]);
    }
}
