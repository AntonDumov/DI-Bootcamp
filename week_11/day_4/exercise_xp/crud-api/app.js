const express = require('express');
const fetchPosts = require('./data/dataService.js');

const app = express();
app.use(express.json());

app.listen(5000, () => {
    console.log('Server is running');
});

app.get('/api/posts', (req, res) => {
    fetchPosts()
        .then(data => {
            res.json(data);
            console.log('The data has been successfully retrieved and sent as a response');
        })
        .catch(r => {
            res.status(500).json({
                msg: r.toString()
            });
        });
});