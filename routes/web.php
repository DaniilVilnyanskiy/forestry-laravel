<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\LoginController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['route.name', 'config.get'])->group(function () {

    Route::get('/', function () {
        return view('home', compact('config'));
    })->name('home');

    Route::get('/about', function () {
        return view('about', compact('config'));
    });

    Route::get('/catalog', [CatalogController::class, 'index']);

    Route::post('/product-card/update', [ProductController::class, 'update']);

    Route::post('/product-card/create', [ProductController::class, 'create']);

    Route::post('/product-card/change-image', [ProductController::class, 'changeImage']);

    Route::middleware(['admin'])->group(function () {
        Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin');
    });

    Route::name('user.')->group(function () {

//      Route::get('/admin', [AdminController::class, 'index'])->middleware('auth')->name('admin');

        Route::get('/registration', function () {
            if (Auth::check()) {
                return redirect(route('home'));
            }
            return view('registration');
        })->name('registration');

        Route::post('/registration', [RegisterController::class, 'save']);

        Route::get('/login', function () {
            if (Auth::check()) {
                return redirect(route('home'));
            }
            return view('login');
        })->name('login');

        Route::post('/login', [LoginController::class, 'login']);

        Route::get('/logout', function () {
            Auth::logout();
            return redirect(route('home'));
        })->name('logout');
    });


});


//Auth::routes();
