import {products} from "./products.js";

products.forEach(product => {
    console.log(product.id, product.name, product.price);
});