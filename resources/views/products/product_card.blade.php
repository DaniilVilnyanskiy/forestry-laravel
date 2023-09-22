<?php
    $isAdmin = false;
    if ($currentRouteName === 'admin') {
        $isAdmin = true;
    }
?>

<div class="product-card" data-product-id="{{ $product['id'] }}">
    <div class="product-card__img">
        <img src="{{ $config['imgAssets'] }}{{ $product['img'] ?? 'default-product.jpg'}}" alt="Product">
        @if($isAdmin)
            <div class="product-card__img_actions">
                <div class="product-card__change">
                    <button class="btn" data-blink-btn-link="change-list-{{ $product['id'] }}">Изменить</button>
                    <ul class="product-card__change-list" data-blink-element="change-list-{{ $product['id'] }}">
                        @foreach($imagePaths as $item)
                            <li data-change-image="{{ $item }}">
                                <img src="{{ $config['imgAssets'] }}{{ $item }}" alt="Mini">
                            </li>
                        @endforeach
                    </ul>
                </div>
                @include('components.Input', [
                        'name' => 'upload-image',
                        'value' => '',
                        'type' => 'file',
                        'placeholder' => 'Загрузить'
                    ])
                <button class="btn" id="remove-image">Удалить</button>
            </div>
        @endif
    </div>
    <div class="product-card__info">
        @if(!$isAdmin)
            <div class="product-card__name title-sm" >{{ $product['name'] }}</div>
            <div class="product-card__description title-xsm" >{{ $product['description'] }}</div>
        @else
            <input class="product-card__name title-sm" value="{{ $product['name'] }}"/>
            <textarea
                class="product-card__description title-xsm"
                rows="5"
            >{{ $product['description'] }}</textarea>
        @endif

    </div>
    <div class="product-card__actions">
        @if(!$isAdmin)
            <div class="product-card__price">
                {{ $product['price'] ? $product['price'] . ' р' : 'Цена по запросу' }}
            </div>
            <button class="product-card__btn btn"> Заказать расчет </button>
        @else
            <input class="product-card__price" value="{{ $product['price'] }}">
            <button class="product-card__btn btn">Сохранить название, описание и цену</button>
        @endif

    </div>
</div>
