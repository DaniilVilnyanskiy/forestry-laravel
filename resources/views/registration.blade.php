@extends('layouts.layout')

@section('content')
    <h1 class="title">Регистрация</h1>
    <section class="container">
        <form class="col-4 offset-4" method="POST" action="{{ route('user.registration') }}">
            @csrf
            <div class="form-group">
                <label for="name">Name:</label>
                <input id="name" type="text" name="name" placeholder="name">
                @error('name')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input id="email" type="text" name="email" placeholder="email">
                @error('email')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <div class="form-group">
                <label for="password">Email:</label>
                <input id="password" type="password" name="password" placeholder="password">
                @error('password')
                <div class="alert alert-danger">{{ $message }}</div>
                @enderror
            </div>
            <button type="submit" class="btn">Отправить</button>
        </form>
    </section>
@endsection
