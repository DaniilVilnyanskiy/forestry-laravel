<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CatalogController;

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
$config = [
    'imgAssets' => '/img/'
];

Route::get('/', function () use ($config) {
    return view('home', compact('config'));
});

Route::get('/about', function () use ($config) {
    return view('about', compact('config'));
});

Route::get('/catalog', [CatalogController::class, 'index']);

