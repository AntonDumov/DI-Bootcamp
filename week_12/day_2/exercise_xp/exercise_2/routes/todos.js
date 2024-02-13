import express from 'express';
import { getAllTodos, addTodo, deleteTodo, changeTodo } from '../controllers/todos.js';

export const router = express.Router();

// Get all to-do items
router.get('/', getAllTodos);

// Add a new to-do item
router.post('/', addTodo);

// Update a to-do item by ID
router.put('/:id', changeTodo);

// Delete a to-do item by ID
router.delete('/:id', deleteTodo);