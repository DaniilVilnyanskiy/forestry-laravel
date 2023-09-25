// require('./bootstrap');
import { ProductCard } from './admin/Product-card';
import { Blink } from "./lib/Blink";
import MyModal from "./lib/MyModal";

document.addEventListener('DOMContentLoaded', () => {
    const blink = new Blink();
    blink.init();

    const productCard = new ProductCard();
    productCard.init();

    const modalInit = new MyModal();
    modalInit.init();
})
