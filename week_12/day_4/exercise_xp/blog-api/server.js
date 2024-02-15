import express from 'express';

import { router as postsRouter } from './routers/posts.routers.js';


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/posts', postsRouter);

app.listen(3001);
