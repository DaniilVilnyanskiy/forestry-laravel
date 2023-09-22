export class ProductCard {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.id = null;
        this.urlUpdate = '/product-card/update';
        this.urlUploadImage = '/product-card/change-image'; // TODO: не правильное название роута
        this.selectors = {
            upload: '#upload-image',
            remove: '#remove-image',
            change: '[data-change-image]'
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
     * @param event
     */
    handleChange(event) {
        const { target } = event;
        if (!this.checkEventAndGetID(event)) return;

        const upload = target.closest(this.selectors.upload);
        if (upload) this.uploadImage(upload);
    }

    handleClick(event) {
        const { target } = event;
        if (!this.checkEventAndGetID(event)) return;

        const remove = target.closest(this.selectors.remove);
        if (remove) this.removeImage();

        const change = target.closest(this.selectors.change);
        if (change) {
            this.changeImage(change);
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
        const image = product.querySelector('.product-card__img > img');
        if (data.img) {
            image.src = 'img/' + data.img;
        } else {
            image.src = 'img/default-product.jpg';
        }
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
