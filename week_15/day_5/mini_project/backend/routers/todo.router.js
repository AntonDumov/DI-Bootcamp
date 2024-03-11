const express = require('express')
const { getAllTodos, addTodo, toggleTodo, removeTodo } = require('../controllers/todo.controllers');

router = express.Router()

router.get('/', getAllTodos);
router.post('/', addTodo);
router.patch('/:id', toggleTodo);
router.delete('/:id', removeTodo);

module.exports = router;
