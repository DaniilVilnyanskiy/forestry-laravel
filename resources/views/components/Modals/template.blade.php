<div class="my-modal {{ $modal ? 'my-modal__' . $modal : ''}}" id='modal-{{ $modal }}'>
    <div class="my-modal__container">
        <div class="my-modal__head">
            <div>{{ $modalTitle }}</div>
            <button class="my-modal__head-close btn btn-circle" data-my-modal-close="#modal-{{ $modal }}">
                @include('components.icon')
            </button>
        </div>
        <div class="my-modal__body">
            @yield('modal.body')
        </div>
{{--        <div class="my-modal__footer"></div>--}}
    </div>
</div>
