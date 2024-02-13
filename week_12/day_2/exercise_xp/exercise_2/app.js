import express from 'express';

import { router as todosRouter } from './routes/todos.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3001, () => {
    console.log('Server is running: http://localhost:3001/');
});

app.use('/todos', todosRouter);