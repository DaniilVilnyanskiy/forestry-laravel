import { templateProductCard } from "./html-templates";

export class ProductCard {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.id = null;
        this.urlUpdate = '/product-card/update';
        this.urlDataUpdate = '/product-card/update';
        this.urlCreate = '/product-card/create';
        this.urlUploadImage = '/product-card/change-image'; // TODO: не правильное название роута
        this.selectors = {
            upload: '#upload-image',
            remove: '#remove-image',
            create: '#product-create',
            update: '#product-update',
            catalogList: '.catalog',
            change: '[data-change-image]',
            img: '[data-product-img]',
            name: '[data-product-name]',
            description: '[data-product-description]',
            price: '[data-product-price]'
        }
    }

    init() {
        document.addEventListener('click', this.handleClick);
        document.addEventListener('change', this.handleChange);
    }

    checkEventAndGetID(event) {
        const { target } = event;
        const id = this.getIdFromParent(target);

        if (!id) return false;

        this.id = id;
        return true;
    }

    /**
     * Change for input
     * @param event - change event
     */
    handleChange(event) {
        const { target } = event;
        if (!this.checkEventAndGetID(event)) return;

        const upload = target.closest(this.selectors.upload);
        if (upload) this.uploadImage(upload);
    }

    /**
     * Handler click
     * @param event - document clicks
     */
    handleClick(event) {
        const { target } = event;

        const create = target.closest(this.selectors.create);
        if (create) this.createNewCard(create);

        if (!this.checkEventAndGetID(event)) return;

        const remove = target.closest(this.selectors.remove);
        if (remove) this.removeImage();

        const change = target.closest(this.selectors.change);
        if (change) this.changeImage(change);

        const update = target.closest(this.selectors.update);
        if (update) this.saveNewDataProduct();
    }

    saveNewDataProduct() {
        if (this.id) {
            const product = document.querySelector(`[data-product-id="${this.id}"]`);
            const {
                imgValue, nameValue,
                descriptionValue, priceValue
            } = this.getDataProductFromElements(this.getElementsDataFromProduct(product));

            const data = {
                name: nameValue,
                description: descriptionValue,
                price: priceValue
            }

            const check = confirm('Сохранить изменения?');
            if (!check) return;

            this.sendData(
                this.urlDataUpdate,
                {id: this.id, type: 'update-product', data}
            )
                .then(() => {
                    this.updateProduct(data);
                })
        }
    }

    createNewCard(btn) {
        const catalog = document.querySelector(this.selectors.catalogList);
        if (btn.classList.contains('create-process')) {
            const productNew = document.querySelector('.product-card__new');
            const {
                imgValue, nameValue,
                descriptionValue, priceValue
            } = this.getDataProductFromElements(this.getElementsDataFromProduct(productNew));

            const data = {
                name: nameValue,
                description: descriptionValue,
                price: priceValue
            }

            const check = confirm('Создать новую карточку товара?');
            if (!check) return;

            this.sendData(
                this.urlCreate,
                {id: this.id, type: 'create-product', data}
            )
                .then(() => {
                    productNew.classList.remove('product-card__new');
                    catalog.insertAdjacentElement('beforeend', productNew);

                    btn.classList.remove('create-process');
                    btn.classList.remove('btn-active');
                    btn.textContent = 'Создать новую карточку';
                })
        } else {
            const templateCard = templateProductCard('default-product.jpg');
            catalog.insertAdjacentHTML('afterbegin', templateCard);

            btn.classList.add('create-process');
            btn.classList.add('btn-active');
            btn.textContent = 'Сохранить данные';
        }

    }

    changeImage(element) {
        const imgPath = element?.dataset.changeImage;
        if (imgPath) {
            const check = confirm('Вы точно хотите изменить изображение?');
            if (!check) return;
            this.sendData(
                this.urlUpdate,
                {id: this.id, type: 'change-image', value: imgPath}
                );
            this.closeBlickElements();
        }
    }

    uploadImage(inputElement) {
        const file = inputElement.files[0];
        const type = file?.type;
        if (type !== 'image/jpeg' && type !== 'image/png') {
            console.log('Only jpeg or png files!');
            alert('Only .jpeg or .png files');
            return;
        }
        const check = confirm('Вы точно хотите загрузить изображение?');
        if (!check) return;
        const formData = new FormData();
        formData.append('id', this.id);
        formData.append('file', file);
        formData.append('type', 'upload-image');

        this.sendData(this.urlUploadImage, formData, false)
            .then(() => {
                location.reload();
            });
    }

    removeImage() {
        const check = confirm('Вы точно хотите удалить изображение?');
        if (!check) return
        this.sendData(this.urlUpdate,{id: this.id, type: 'remove-image'});
    }

    async sendData(url, data, toJson = true) {
        const csrf = document.querySelector('meta[name="csrf-token"]');
        const token = csrf.getAttribute('content');
        if (!token) return;
        if (toJson) {
            data = JSON.stringify(data);
        }
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': token
            },
            body: data
        })
            .then((res) => res.json());
        this.updateProduct(response);
    }

    updateProduct(data) {
        if (!data.id) return;
        const product = document.querySelector(`[data-product-id="${data.id}"]`);
        if (!product) return;
        const { image, name, description, price } = this.getElementsDataFromProduct(product);

        if (data.img) {
            image.src = 'img/' + data.img;
        } else {
            image.src = 'img/default-product.jpg';
        }
    }

    getDataProductFromElements({ img, name, description, price }) {
        const imgValue = img?.src;
        const nameValue = name?.value;
        const descriptionValue = description?.value;
        const priceValue = price?.value;
        return { imgValue, nameValue, descriptionValue, priceValue };
    }

    getElementsDataFromProduct(product) {
        const image = product.querySelector(this.selectors.img);
        const name = product.querySelector(this.selectors.name);
        const description = product.querySelector(this.selectors.description);
        const price = product.querySelector(this.selectors.price);
        return { image, name, description, price };
    }

    getIdFromParent(target) {
        const parent = target?.closest('[data-product-id]');
        const id = Number(parent?.dataset.productId);
        if (id) return id
        else return false
    }

    closeBlickElements() {
        const elements = document.querySelectorAll('[data-blink-element].active');
        elements?.forEach((el) => el.classList.remove('active'));
    }
}
