import express from 'express';
import { getAllBooks, addNewBook, updateBookByID, deleteBookByID } from '../controllers/books.js';


export const router = express.Router();

// Get all books
router.get('/', getAllBooks);

// Add a new book
router.post('/', addNewBook);

// Update a book by ID
router.put('/:id/', updateBookByID);

// Delete a book by ID
router.delete('/:id/', deleteBookByID);
