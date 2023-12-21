function playTheGame() {
    const answer = confirm('Would you like to play the game?')
    if (!answer) {
        return;
    }
    let number = null;
    while (number === null) {
        number = guessNumber()
    }
    const computerNumber = Math.floor(Math.random() * 11)
    compareNumbers(number, computerNumber)
}

function guessNumber() {
    const number = Number(prompt('Enter a number between 0 and 10'))
    if (isNaN(number)) {
        alert('Sorry Not a number, Goodbye');
    } else if (!(number >= 0 && number <= 10)) {
        alert('Sorry it’s not a good number, Goodbye')
    } else {
        return number
    }
    return null
}

function compareNumbers(userNumber,computerNumber) {
    let tries = 0
    while (tries < 3) {
        if (userNumber === computerNumber) {
            alert('WINNER')
            return;
        } else if (userNumber > computerNumber) {
            alert('Your number is bigger then the computer’s, guess again')
            tries += 1
        } else {
            alert('Your number is smaller then the computer’s, guess again')
            tries += 1
        }
        userNumber = guessNumber()
    }
    alert('out of chances')
}