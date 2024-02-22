const express = require('express');
const userRouter = require('../routers/users.router.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.listen(3001);
app.use('/users/', userRouter);