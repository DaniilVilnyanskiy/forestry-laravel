<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Models\Product;

class CatalogController extends Controller
{
    public function index()
    {
        $config = Config::get('custom');
//        $products = Product::select('id', 'name', 'description', 'price')->get(); // Получить все записи о продуктах из базы данных
        $products = Product::all(); // Получить все записи о продуктах из базы данных

        return view('catalog', [
            'products' => $products,
            'config' => $config
        ]);
    }
}
