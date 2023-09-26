<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\View;

class AddConfigToView
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
        $config = Config::get('custom');

        if (auth()->check() && auth()->user()->admin == 1) {
            $config['admin'] = true;
        }

        // Добавляем переменную с названием текущего маршрута во все представления
        View::share('config', $config);

        return $next($request);
    }
}
