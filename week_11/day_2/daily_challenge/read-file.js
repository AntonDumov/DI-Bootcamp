import fs from "node:fs";

const readFile = () => {
    fs.readFile('./files/file-data.txt', "utf-8", (err, data) => {
        console.log(data);
    });
};

export default readFile;