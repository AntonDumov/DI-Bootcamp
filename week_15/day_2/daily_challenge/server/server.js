const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
    let body = req.body;
    res.send(`I received your POST request. This is what you sent me: ${body.message}`);
});

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});