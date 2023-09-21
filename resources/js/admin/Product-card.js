export class ProductCard {
    constructor() {
        this.handleClick = this.handleClick.bind(this);
        this.id = null;
        this.url = '/product-card/update'
    }

    init() {
        document.addEventListener('click', this.handleClick);
    }

    handleClick(event) {
        const { target } = event;
        const id = this.getIdFromParent(target);
        if (!id) return;

        this.id = id;
        const remove = target.closest('#remove-image');
        if (remove) this.removeImage();
    }

    removeImage() {
        this.sendData({id: this.id, type: 'remove-image'});
    }

    async sendData(data) {
        const csrf = document.querySelector('meta[name="csrf-token"]');
        const token = csrf.getAttribute('content');
        if (!token) return;
        const response = await fetch(this.url, {
            method: "POST",
            headers: {
                'X-CSRF-TOKEN': token
            },
            body: JSON.stringify(data)
        })
            .then((res) => res.json);
        console.log(response);
    }

    getIdFromParent(target) {
        const parent = target?.closest('[data-product-id]');
        const id = Number(parent?.dataset.productId);
        if (id) return id
        else return false
    }
}
