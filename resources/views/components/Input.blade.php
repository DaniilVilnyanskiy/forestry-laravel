<div class="input btn">
    <label for="{{ $name }}" class="input__label">{{ $placeholder }}</label>
    <input
        id="{{ $name }}"
        type="file"
        name="{{ $name }}"
        value="{{ $value ?? '' }}"
        class="input__input"
    >
</div>
