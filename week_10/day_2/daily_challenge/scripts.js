// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
//     If all the words in the array are strings, resolve the promise.
//     The value of the resolved promise is the array of words uppercase.
//     else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercase as an argument
//     If the array length is bigger than 4, resolve the promise.
//     The value of the resolved promise is the array of words sorted in alphabetical order.
//     else, reject the promise with a reason.

const makeAllCaps = words => new Promise((resolve, reject) => {
    if (words.every(word => typeof word === "string")) {
        resolve(words.map(word => word.toUpperCase()))
    } else {
        reject('All words must be strings')
    }
})


const sortWords = words => new Promise((resolve, reject) => {
    if (words.length > 4) {
        resolve(words.sort())
    } else {
        reject('Words length must be bigger than 4')
    }
})

// Test:

//in this example, the catch method is executed

// makeAllCaps([1, "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

//in this example, the catch method is executed

// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))

//in this example, you should see in the console,

// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then((arr) => sortWords(arr))
    .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
    .catch(error => console.log(error))


const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

const toJs = s => new Promise((resolve, reject) => {
    const result = JSON.parse(s)
    if (!result) {
        reject('Result is empty!')
    } else {
        resolve(result)
    }
})

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object

const toMorse = morseJs => {
    const userString = window.prompt('Write the message:')
    return new Promise((resolve, reject) => {
        const result = []
        for (const char of userString) {
            if (char in morseJs) {
                result.push(morseJs[char])
            } else {
                reject(`No ${char} in morseObject`)
            }
        }
        resolve(result)
    })
}

const joinWords = morseTranslation => {
    document.querySelector('body').innerHTML += morseTranslation.join(' ')
}

toJs(morse).then(morseJs => {
    toMorse(morseJs).then(morseTranslation => {
        joinWords(morseTranslation)
    })
})