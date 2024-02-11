const express = require('express');

const app = express();
app.use(express.json());

const emojis = [
    { character: '😀', name: 'grinning face' },
    { character: '😂', name: 'face with tears of joy' },
    { character: '❤️', name: 'red heart' },
    { character: '👍', name: 'thumbs up' },
    { character: '🎉', name: 'party popper' },
    { character: '🚀', name: 'rocket' },
    { character: '📚', name: 'books' },
    { character: '🐱', name: 'cat' },
    { character: '🌈', name: 'rainbow' },
    { character: '⚽', name: 'soccer ball' }
];
let rightEmoji;
const emojisNum = 3;
let score = 0;

const getRandomEmoji = () => {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
};

const getSetOfEmojis = () => {
    const result = [];
    result.push(getRandomEmoji());
    while (result.length < emojisNum) {
        const newEmoji = getRandomEmoji();
        if (!result.includes(newEmoji)) {
            result.push(newEmoji);
        }
    }
    return result;
};

const getHTML = emojis => {
    let html = '<form method="get" action="/try">';
    for (let i = 0; i < emojisNum; i++) {
        html += `<input type="radio" id="emoji${i}" name="emoji" value="${emojis[i].character}"><label for="emoji${i}">${emojis[i].character} -- ${emojis[i].name}</label><br>`;
    }
    return html + '<button type="submit">Submit</button> </form>';
};

app.listen(5001);

app.get('/', (req, res) => {
    let emojis = getSetOfEmojis();
    rightEmoji = emojis[Math.floor(Math.random()*3)];
    res.send(`${getHTML(emojis)}<br><h1>Your Score: ${score}</h1>`);
});

app.get('/try', (req, res) => {
    if (req.query.emoji === rightEmoji.character) {
        score ++;
        res.send('<h1>Your guess was correct!</h1>');
    } else {
        res.send('<h1>You guess was incorrect.</h1>');
    }
});