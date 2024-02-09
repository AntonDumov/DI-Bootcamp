// Part 2: Creating a Data Module for Axios

const axios = require('axios');

const fetchPosts = async () => {
    const r = await axios.get('https://jsonplaceholder.typicode.com/posts');
    if (r.status === 200) {
        return r.data;
    } else {
        throw new Error('Network response was not ok');
    }
};

module.exports = fetchPosts;