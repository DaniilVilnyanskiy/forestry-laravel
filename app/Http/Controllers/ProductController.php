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
            // Используйте first() для получения одной записи
            $product = Product::where('id', $requestData['id'])->first();
            if ($product) {
                // Удаление изображения из карточки товара
                if ($requestData['type'] === 'remove-image') {
                    $product['img'] = null;
                    $product->save();
                    return json_encode($product);

                // Изменение изображения в карточке товара
                } else if ($requestData['type'] === 'change-image') {
                    $product['img'] = $requestData['value'];
                    $product->save();
                    return json_encode($product);

                // Изменение данных в полях карточки товара
                } else if ($requestData['type'] === "update-product") {
                    if (isset($requestData['data'])) {
                        foreach ($requestData['data'] as $key => $value) {
                            $product[$key] = $value;
                        }
                        $product->save();
                        $response = response()->json(['message' => 'Product update successfully'], 201);
                    } else {
                        $response = response()->json(['message' => 'Not found - data'], 400);
                    }
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

    /**
     * @param \Illuminate\Http\Request $request
     * @return false|Request|string
     */
    public function create(Request $request)
    {
        $requestData = $request->json()->all()['data'];

        // Создаем новую модель Product и заполняем поля данными из запроса
        $product = new Product([
            'name' => $requestData['name'],
            'description' => $requestData['description'],
            'price' => $requestData['price'],
        ]);

        // Сохраняем модель в базе данных
        $product->save();

        return response()->json(['message' => 'Product created successfully'], 201);
    }
}
