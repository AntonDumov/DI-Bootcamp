const express = require('express');
const cors = require('cors')
const todoRouter = require('./routers/todo.router');

app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3001, () => {
    console.log('Server running on port 3001');
});

app.use('/api/todo', todoRouter);
