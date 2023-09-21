<div class="product-card">
    <div class="product-card__img">
        <img src="{{ $config['imgAssets'] }}{{ $product['img'] ?? 'default-product.jpg'}}" alt="Product">
    </div>
    <div class="product-card__name title-sm" >{{ $product['name'] }}</div>
    <div class="product-card__actions">
        <div class="product-card__price">
            {{ $product['price'] ? $product['price'] . ' р' : 'Цена по запросу' }}
        </div>
        <button class="product-card__btn btn"> Заказать расчет </button>
    </div>
</div>
