const {readFile, writeFile} = require('./fileManager');

readFile('Hello World.txt').then(s => {
    console.log(s);
});

writeFile('Bye World.txt', 'Writing to the file');
