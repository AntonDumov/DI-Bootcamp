const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'postgres'
    }
});

module.exports = {
    db
};

// db('products').select('id', 'name', 'price', 'description')
//     .then((rows) => {
//         console.log(rows);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// db('products').insert([
//     { name: 'samsung122', price: 2143 },
//     { name: 'samsung222', price: 4342 }
// ], ['id', 'name'])
//     .then((rows) => {
//         console.log(rows);
// })
//     .catch((err) => {
//         console.log(err);
//     });

// db('products').update({
//     name: 'Samsung S32'
// }, ['*']).where({
//     id: 2
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err);
// });

// db('products')
//     .del(['*'])
//     .where({
//         id: 2
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     });