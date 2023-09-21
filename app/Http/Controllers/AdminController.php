<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Models\Product;

class AdminController extends Controller
{
    public function index()
    {

//        $products = Product::select('id', 'name', 'description', 'price')->get(); // Получить все записи о продуктах из базы данных
        $products = Product::all(); // Получить все записи о продуктах из базы данных

        return view('admin.admin', [
            'products' => $products,
            'isAdmin' => true
        ]);
    }
}
