<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <title>Home</title>

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="/css/app.css">

    <title>Document</title>
</head>
<body>
<?php
    $imgAssets = "/img/";
?>
@include('layouts.header')
<main>
    @yield('content')
</main>

@include('layouts.footer')
</body>
</html>
