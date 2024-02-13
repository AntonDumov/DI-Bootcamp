const express = require('express');
const productsRouter = require('./routes/products.router.js');
const usersRouter = require('./routes/users.router.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', express.static(__dirname + '/public'));

let lastID = 0;

app.listen(3001, () => {
    console.log('Server started');
});

app.use('/api/products', productsRouter);
app.use('/api/users', usersRouter);

/**
 * Server
 * |_ config - connection to database
 * |_ models * - queries to database
 * |_ controllers - functions implementation code
 * |_ routes - route implementation code
 */
