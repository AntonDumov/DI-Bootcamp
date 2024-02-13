const express = require('express');
const { products, lastID } = require('../config/db');
const {
    getAllProducts,
    getProduct,
    addProduct,
    changeProduct
} = require('../controllers/products.controler');
const router = express.Router();

router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.post('/', addProduct);

router.put('/:id', changeProduct);

module.exports = router;