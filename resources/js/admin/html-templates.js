export const templateProductCard = (defaultImg) => {
    return (`
    <div class="product-card product-card__new" data-product-id="null">
        <div class="product-card__img">
            <img src="/img/${defaultImg}" alt="Product" data-product-img=" ">
            <div class="product-card__img_actions">
                <div class="product-card__change">
                    <button class="btn" data-blink-btn-link="change-list-1">Изменить</button>
                    <ul class="product-card__change-list" data-blink-element="change-list-1"></ul>
                </div>
                <div class="input btn">
                    <label for="upload-image" class="input__label">Загрузить</label>
                    <input id="upload-image" type="file" name="upload-image" value="" class="input__input">
                </div>
                <button class="btn" id="remove-image">Удалить</button>
            </div>
        </div>
        <div class="product-card__info">
            <input class="product-card__name title-sm" value="" data-product-name=" ">
            <textarea class="product-card__description title-xsm" rows="5" data-product-description=" "></textarea>
        </div>
        <div class="product-card__actions">
            <input class="product-card__price" value="" data-product-price=" ">
            <button class="product-card__btn btn">Сохранить название, описание и цену</button>
        </div>
    </div>
    `)
}
