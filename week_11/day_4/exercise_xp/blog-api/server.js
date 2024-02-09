const express = require('express');

const app = express();
const port = 3000;
app.use(express.json());

const data = [
    {
        id: 0,
        title: 'Init Post',
        content: 'This is the first post created automatically.'
    }
];
let last_id = 0;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/posts', (req, res) => {
    res.send(JSON.stringify(data));
});

app.get('/posts/:id', (req, res) => {
    res.send(JSON.stringify(data.find(p => p.id === req.params.id)));
});

app.post('/posts', (req, res) => {
    const newPost = req.body;
    newPost.id = last_id;
    last_id++;
    data.push(newPost);
    res.sendStatus(200);
});

app.put('/posts/:id', (req, res) => {
    data[req.params.id] = req.body;
    res.sendStatus(200);
});

app.delete('/posts/:id', (req, res) => {
    data.splice(data.findIndex(p => p.id === req.params.id), 1);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Example app listening on port: ${port}`);
});