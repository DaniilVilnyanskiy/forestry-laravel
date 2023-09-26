<header class="container header">
    <div class="header__logo">
{{--        <img src="{{ $config['imgAssets'] }}forestry.png" alt="Логотип">--}}
        @guest
            {{-- Контент для неавторизованных пользователей --}}
            <div>Пожалуйста, войдите или зарегистрируйтесь.</div>
            <div>
                <a class="title-sm" href="/login"> Авторизация </a>
                <a class="title-sm" href="/registration"> Регистрация </a>
            </div>
        @else
            {{-- Ваш контент для авторизованного пользователя --}}
            <div>Добро пожаловать, {{ Auth::user()->name }}!</div>
            <div>
                <a class="title-sm" href="/logout"> Выйти </a>
                @if($config['admin'])
                    <a class="title-sm" href="/admin"> Администрирование </a>
                @endif
            </div>
        @endif

        <div class="header__logo_title">Пилорама Урала</div>
        <div class="header__logo_subtitle">г. Алапаевск</div>
    </div>
    <nav class="header__nav">
        <a class="title-sm" href="/"> Главная </a>
        <a class="title-sm" href="/catalog"> Каталог </a>
        <a class="title-sm" href="/about"> О компании </a>

        {{--        <a class="title-sm" href="/delivery"> Доставка </a>--}}
        {{--        <a class="title-sm" href="/opt"> Оптовикам </a>--}}
        {{--        <a class="title-sm" href="/contacts"> Контакты  </a>--}}
    </nav>
</header>
