// const arr = [1, 2, 3, 4, 5]
//
// arr.forEach(i => {
//     console.log(i)
// })

/** Node.js module system - share js files
 * 1. Create a module to share.
 * 2. NPM - Node package manager.
 * 3. Core Modules - Node.js installation
 * */

const hello = name => {
    console.log(`Hello, ${name}!`);
};

const sayHelloToJs = name => {
    console.log(`Hello, ${name}, welcome to Node.js`);
};

module.exports = {
    hello,
    sayHelloToJs
};
