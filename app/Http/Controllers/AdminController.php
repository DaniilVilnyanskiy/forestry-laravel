<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Config;
use App\Models\Product;

class AdminController extends Controller
{
    public function index()
    {

//        $products = Product::select('id', 'name', 'description', 'price')->get(); // Получить все записи о продуктах из базы данных
        $products = Product::all(); // Получить все записи о продуктах из базы данных

        // Получаем список файлов из директории public/img
        $imageDirectory = public_path('img/catalog');
        $imageFiles = File::files($imageDirectory);

        // Создаем массив для хранения путей к изображениям
        $imagePaths = [];

        foreach ($imageFiles as $imageFile) {
            // Получаем относительный путь к изображению от директории public
            $imagePaths[] = 'catalog/' . $imageFile->getFilename();
        }


        return view('admin.admin', [
            'products' => $products,
            'imagePaths' => $imagePaths,
            'isAdmin' => true
        ]);
    }
}
