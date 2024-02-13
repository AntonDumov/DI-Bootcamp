const { products, productsInitLastID } = require('../config/db.js');
let lastID = productsInitLastID;

const getAllProducts = (req, res) => {
    res.json(products);
};

const getProduct = (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));
    if (product) {
        return res.json(product);
    }
    res.status(404).json({ ok: false, msg: 'Product not found' });
};

const addProduct = (req, res) => {
    const newProduct = { ...req.body, id: lastID + 1 };
    lastID++;
    products.push(newProduct);
    res.send('ok from post');
};

const changeProduct = (req, res) => {
    const i = products.findIndex(p => p.id === Number(req.params.id));
    if (i === -1) {
        return res.status(404).json({ ok: false, msg: 'product not found' });
    }
    for (const productKey in req.body) {
        products[i][productKey] = req.body[productKey];
    }
    res.send('ok');
};

module.exports = {getAllProducts, getProduct, addProduct, changeProduct};