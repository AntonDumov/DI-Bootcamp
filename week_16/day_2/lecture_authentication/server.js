import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import userRouter from './routers/user.router.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.listen(process.env.PORT || 3001, () => {
    console.log(`running on ${process.env.PORT}`);
});

app.use('/users', userRouter);
