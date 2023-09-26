@extends('components.Modals.template')

@section('modal.body')
    <form class="form" action="" method="post">
        <div class="form-group">
            <input class="title-xsm" type="text" name="name" placeholder="Введите имя" required>
        </div>
        <div class="form-group">
            <input class="title-xsm" type="text" name="phone" placeholder="Введите номер телефона" required>
        </div>
        <div class="form-group">
            <textarea class="title-xsm" rows="5" placeholder="Комментарий к заявке"></textarea>
        </div>
        <button type="submit" class="btn w-100">Отправить</button>
    </form>
@endsection
