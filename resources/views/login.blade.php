@extends('layouts.layout')

@section('content')
    <h1 class="title">Авторизация</h1>
    <section class="container">
        <form class="col-4 offset-4" method="POST" action="{{ route('user.login') }}">
            @csrf
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" type="text" name="email" placeholder="email">
                @error('email')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input id="password" type="password" name="password" placeholder="password">
                @error('password')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <button type="submit" class="btn">Отправить</button>
        </form>
    </section>
@endsection
