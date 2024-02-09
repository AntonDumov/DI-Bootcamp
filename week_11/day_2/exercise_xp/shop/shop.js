// In shop.js, require the product objects from the products.js module.
//
// Create a function that takes a product name as a parameter and searches for the corresponding product object.
//
// Call this function with different product names and print the details of the products.
//
// Run shop.js and verify that the correct product details are displayed.

const products = require('./products');

const getProduct = name => products.find(p => p.name === name);

const product1 = getProduct('Bookshelf');
const product2 = getProduct('Yoga Mat');
console.log(product1);
console.log(product2);