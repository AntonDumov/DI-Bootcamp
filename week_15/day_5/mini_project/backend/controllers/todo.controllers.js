const { __addTodo, __getAllTodo, __toggleTodo, __removeTodo } = require('../models/todo.models');


const addTodo = async (req, res) => {
    const newTodo = await __addTodo(req.body.text);
    res.json(newTodo);
};

const getAllTodos = async (req, res) => {
    const allTodos = await __getAllTodo();
    res.json(allTodos);
};

const toggleTodo = async (req, res) => {
    const toggledTodo = await __toggleTodo(Number(req.params.id));
    if (toggledTodo) {
        res.json(toggledTodo[0]);
    } else {
        res.status(404).json({ok:false})
    }
};

const removeTodo = async (req, res) => {
    const removedTodo = await __removeTodo(Number(req.params.id));
    if (removedTodo){
        res.json(removedTodo[0])
    }else {
        res.status(404).json({ok:false})
    }
};

module.exports = { addTodo, getAllTodos, toggleTodo, removeTodo };