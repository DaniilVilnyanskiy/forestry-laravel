<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Home</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="/css/app.css">
    <script src="/js/app.js"></script>

    <title>Document</title>
</head>
<body class="{{ $currentRouteName === '/' ? 'home' : $currentRouteName  }}-page">

    {{-- header --}}
    @if($currentRouteName !== 'admin')
        @include('layouts.header')
    @endif

    <main>
        @yield('content')
    </main>

    <section>
        @include('components.Modals.Order')
    </section>

    {{-- footer --}}
    @if($currentRouteName !== 'admin')
        @include('layouts.footer')
    @endif
</body>
</html>
