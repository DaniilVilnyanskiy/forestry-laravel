<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProductController;

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

Route::middleware(['admin', 'config.get'])->group(function () {

    Route::get('/', function () {
        return view('home', compact('config'));
    });

    Route::get('/about', function () {
        return view('about', compact('config'));
    });

    Route::get('/catalog', [CatalogController::class, 'index']);

    Route::get('/admin', [AdminController::class, 'index']);

    Route::post('/product-card/update', 'ProductController@update');

    Route::post('/product-card/create', 'ProductController@create');

    Route::post('/product-card/change-image', 'ProductController@changeImage');

});

