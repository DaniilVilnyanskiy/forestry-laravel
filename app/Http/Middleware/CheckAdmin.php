<?php

namespace App\Http\Middleware;

use Closure;

class CheckAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // Проверяем, является ли текущий пользователь администратором (по вашему полю admin)
        if (auth()->check() && auth()->user()->admin == 1) {
            return $next($request);
        }

        // Если пользователь не администратор, то выполните нужные действия, например, редирект на другую страницу или показать ошибку.
        return redirect()->route('home')->with('error', 'У вас нет доступа к этой странице.');
    }
}
