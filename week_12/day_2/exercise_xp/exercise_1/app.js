const express = require('express');
const indexRouter = require('./routes/index.js');

const app = express();

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001/`);
});

app.use('/', indexRouter);