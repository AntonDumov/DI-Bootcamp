import express from 'express';

import {router as booksRouter} from './routes/books.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(3001, 'localhost', () => {
    console.log('Server is started');
});

app.use('/books', booksRouter);
