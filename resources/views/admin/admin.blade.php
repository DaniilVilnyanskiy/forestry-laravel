@extends('layouts.layout')

@section('content')
    <h1 class="title">Editing the catalog</h1>
    <section class="container catalog">
        <div class="catalog__head">
            <div>Image</div>
            <div>Name & Description</div>
            <div>Price</div>
        </div>
        @foreach($products as $product)
            @include('products.product_card', ['product' => $product, 'config' => $config])
        @endforeach
    </section>

@endsection
