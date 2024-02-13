import express from 'express';
import path from 'path';
import { router as quizRouter } from './routes/quiz.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
    console.log('Quiz is started!');
});

app.use('/', express.static(path.resolve('./public')));
app.use('/quiz', quizRouter);
