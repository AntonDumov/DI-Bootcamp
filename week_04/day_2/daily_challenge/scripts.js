// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

function wordsInTheStars() {
    let wordsInput = prompt('Write several words separated by commas')
    while (!wordsInput) {
        wordsInput = prompt('Write at least one word')
    }
    const words = wordsInput.split(',')

    // trimming words of whitespaces
    for (const i in words) {
        words[i] = words[i].trim()
    }

    const maxLength = words.map(x => {
        return x.length
    }).sort().pop()

    let result = ''
    result += '*'.repeat(maxLength + 4) + '\n'

    for (const word of words) {
        const wsLength = maxLength - word.length
        result += `* ${word} ${' '.repeat(wsLength)}*\n`
    }

    result += '*'.repeat(maxLength + 4)

    console.log(result)
}

wordsInTheStars()