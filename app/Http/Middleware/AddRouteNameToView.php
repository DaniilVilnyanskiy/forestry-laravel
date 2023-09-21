<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\View;
use Illuminate\Support\Facades\Route;

class AddRouteNameToView
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
        {
            $routeName = $request->route()->uri;

            // Добавляем переменную с названием текущего маршрута во все представления
            View::share('currentRouteName', $routeName);

            return $next($request);
        }
    }
}
