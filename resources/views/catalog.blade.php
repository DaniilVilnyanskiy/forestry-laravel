@extends('layouts.layout')

@section('content')

    {{--  title  --}}
    <h1 class="title">Каталог</h1>

    {{--  banner  --}}
    <section class="container banner">
        <div class="banner__img">
            <img src="{{ $config['imgAssets'] }}catalog-title-img.jpg" alt="Banner">
        </div>
    </section>



    <section class="container catalog">
        <div class="catalog__head">
            <div></div>
            <div class="catalog__head_name"> Наименование </div>
            <div></div>
        </div>

        @foreach($products as $product)
            @include('products.product_card', ['product' => $product, 'config' => $config])
        @endforeach

        <div class="catalog__question title">
            <p>Не нашли то, что искали? Оставьте свой номер и мы перезвоним Вам!</p>
            <button class="btn">Оставить заявку</button>
        </div>
    </section>
@endsection
