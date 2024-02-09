const express = require('express');

const books = [
    {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        publishedYear: 1925
    },
    {
        id: 2,
        title: "1984",
        author: "George Orwell",
        publishedYear: 1949
    },
    {
        id: 3,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        publishedYear: 1960
    },
    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        publishedYear: 1813
    }
];
let incrementalID = 4;

const app = express();
app.use(express.json());

app.listen(5000);

app.get('/api/books', (req, res) => {
    res.json(books);
});

app.get('/api/books/:bookId', (req, res) => {
    const bookId = Number(req.params.bookId);
    const book = books.find(b => b.id === bookId);
    if (!book) {
        return res.status(404).json({
            msg: `No book found with id: "${bookId}"`
        });
    } else {
        return res.json(book);
    }
});

app.post('/api/books', (req, res) => {
    const new_book = req.body;
    new_book.id = incrementalID + 1;
    books.push(new_book);
    incrementalID++;
    res.status(201).json(new_book);
});