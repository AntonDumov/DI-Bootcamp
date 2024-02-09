const fs = require('node:fs').promises;

fs.readFile('source.txt', 'utf-8')
    .then(data => fs.writeFile('destination.txt', data, "utf-8"));