const { products } = require('../config/db.js');
const { _getAllProducts, _search4Product, _insertProduct } = require('../models/products.models');

const getAllProducts = async (req, res) => {
    const products = await _getAllProducts();
    res.json(products);
};

const getOneProduct = (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const product = products.find((item) => item.id == id);
    if (!product) {
        res.status(404).json({ msg: 'Product not found' });
    }
    res.json(product);
};

const search4Product = async (req, res) => {
    console.log(req.query);
    const { name } = req.query;
    const filteredProducts = await _search4Product(name);

    if (filteredProducts.length === 0) {
        return res
            .status(404)
            .json({ msg: 'No Product matched your search query' });
    }

    res.json(filteredProducts);
};

const deleteProduct = (req, res) => {
    const { id } = req.params;

    const indx = products.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);

    products.splice(indx, 1);

    res.json(products);
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price } = req.body;

    const indx = products.findIndex((item) => item.id == id);
    if (indx === -1) return res.sendStatus(404);
    //.status(404).json({ message: "product not found" });

    products[indx] = { ...products[indx], name, price };
    res.json(products);
};

const createProduct = async (req, res) => {
  console.log(req.body);
  const { name, price } = req.body;

  // const newProduct = {
  //   id: products.length + 1,
  //   name: req.body.name,
  //   price: req.body.price,
  // };
  const newProduct = await _insertProduct(name, price);

  res.json(newProduct);
};

module.exports = {
    getAllProducts,
    getOneProduct,
    search4Product,
    deleteProduct,
    updateProduct,
    createProduct
};
