<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * @param \Illuminate\Http\Request $request
     * @return false|Request|string
     */
    public function update(Request $request)
    {
        $requestData = $request->json()->all();
        $response = null;


        if ($requestData['id']) {
            $product = Product::where('id', $requestData['id'])->first(); // Используйте first() для получения одной записи
            if ($product) {
                if ($requestData['type'] === 'remove-image') {
                    $product['img'] = null;
                    $product->save();
                    return json_encode($product);
                } else {
                    $response = json_encode($product); // Преобразовать объект в JSON строку
                }
            } else {
                $response = 'Product not found'; // Если продукт не найден
            }
        } else {
            $response = 'ID not found';
        }

        return $response;
    }
}
