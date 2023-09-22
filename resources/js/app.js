// require('./bootstrap');
import { ProductCard } from './admin/Product-card';
import { Blink } from "./lib/Blink";

const blink = new Blink();
blink.init();

const productCard = new ProductCard();
productCard.init();

