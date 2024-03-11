const db = require('../config/pgconnect');

const __addTodo = async (text) => {
    const addedTodo = await db('todos').insert({
        text: text
    }).returning('*');
    return addedTodo[0];
};

const __getAllTodo = async () => {
    return db('todos').select('*');
};

const __toggleTodo = async (id) => {
    return db('todos').where('id', id).update({ completed: true }, ['*']);
};

const __removeTodo = async(id) => {
    return db('todos').where('id', id).delete(['*']);
}

module.exports = {__getAllTodo, __addTodo, __removeTodo, __toggleTodo}