// Inside fileManager.js, define a module that exports functions for reading and writing files.
// Export functions named readFile and writeFile.
// Implement the readFile function to read the content of a specified file using the fs module.
// Implement the writeFile function to write content to a specified file using the fs module.

const fs = require('node:fs').promises;

const readFile = async (name) => {
    try {
        return await fs.readFile(name, 'utf-8');
    } catch (err) {
        console.log(err);
    }
};

const writeFile = (name, data) => {
    try {
        fs.writeFile(name, data, 'utf-8');
    } catch (e) {
        console.log(e);
    }
};

module.exports = { readFile, writeFile };