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
                // Удаление изображения из карточки товара
                if ($requestData['type'] === 'remove-image') {
                    $product['img'] = null;
                    $product->save();
                    return json_encode($product);
                } else if ($requestData['type'] === 'change-image') {
                    $product['img'] = $requestData['value'];
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

    /**
     * @param \Illuminate\Http\Request $request
     * @return false|Request|string
     */
    public function changeImage(Request $request)
    {
        if ($request->hasFile('file')) {
            $file = $request->file('file');

            // Получаем оригинальное имя файла
            $originalName = $file->getClientOriginalName();
            $destinationPath = public_path('img/catalog');
            $fileName = $originalName;

            // Проверяем, существует ли файл с таким именем
            $counter = 1;
            while (file_exists($destinationPath . '/' . $fileName)) {
                $fileName = pathinfo($originalName, PATHINFO_FILENAME) . '-' . $counter . '.' . $file->getClientOriginalExtension();
                $counter++;
            }

            // Перемещаем файл в папку public/img с уникальным именем
            $file->move($destinationPath, $fileName);


            // Возвращаем ответ об успешной загрузке
            return response()->json(['message' => 'Файл успешно загружен', 'file_name' => $fileName]);
        }
    }
}
