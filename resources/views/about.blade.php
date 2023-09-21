@extends('layouts.layout')

@section('content')

    {{--  title  --}}
    <h1 class="title">О компании</h1>

    {{--  banner  --}}
    <section class="container banner">
        <div class="banner__img">
            <img src="{{ $config['imgAssets'] }}company-photo.jpg" alt="Banner">
        </div>
    </section>

    <h2 class="title">
        Наша компания была основана в 1999 году.
    </h2>
    <section class="container">
        <p class="">
            За более чем 20-летнюю историю существования мы зарекомендовали себя как надежный партнер и поставщик строительных материалов.
        </p>
        <p class="">
            Основным направлением деятельности компании является комплексное снабжение объектов строительства и торговли строительными материалами в Екатеринбурге и Свердловской области.
        </p>
    </section>
@endsection
