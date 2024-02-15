import express from 'express';
import {router as taskRouter} from './routers/tasks.touters.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.listen(3001, () => {
    console.log(`Server is running: http://localhost:3001`);
});

app.use('/tasks', taskRouter);