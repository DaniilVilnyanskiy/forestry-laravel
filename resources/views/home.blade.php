@extends('layouts.layout')

@section('content')

    {{--  title  --}}
    <h1 class="title">Главная</h1>

    {{--  banner  --}}
    <section class="container banner">
        <div class="banner__img">
            <img src="{{ $config['imgAssets'] }}title.jpg" alt="Banner">
        </div>
    </section>

    <h2 class="title">
        Почему нас выбирают?
    </h2>
    <section class="container">
        <ul class="advantages">
            <li class="advantages__item">
                <div class="advantages__img">
                    <img src="{{ $config['imgAssets'] }}20.jpg" alt="icon">
                </div>
                <div class="title-sm">Более 20-ти лет опыта</div>
            </li>
            <li class="advantages__item">
                <div class="advantages__img">
                    <img src="{{ $config['imgAssets'] }}car.jpg" alt="icon">
                </div>
                <div class="title-sm">Доставка по всей России</div>
            </li>
            <li class="advantages__item">
                <div class="advantages__img">
                    <img src="{{ $config['imgAssets'] }}garant.jpg" alt="icon">
                </div>
                <div class="title-sm">Гарантированное качество</div>
            </li>
            <li class="advantages__item">
                <div class="advantages__img">
                    <img src="{{ $config['imgAssets'] }}hands.jpg" alt="icon">
                </div>
                <div class="title-sm">Индивидуальный подход к каждому</div>
            </li>
        </ul>
    </section>
@endsection
