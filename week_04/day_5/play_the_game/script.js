function playTheGame() {
    const answer = confirm('Would you like to play the game?')
    if (!answer) {
        return;
    }

    let tries = 0;
    let outcome = false;

    let number;
    const computerNumber = Math.floor(Math.random() * 11)

    while (tries !== 3 && outcome === false) {
        number = guessNumber()
        outcome = compareNumbers(number, computerNumber)
        tries += 1
    }

    if (!outcome) {
        alert('out of chances')
    } else {
        alert('WINNER')
    }
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

function compareNumbers(userNumber, computerNumber) {
    if (userNumber === computerNumber) {
        return true;
    } else if (userNumber > computerNumber) {
        alert('Your number is bigger then the computer’s, guess again')
    } else {
        alert('Your number is smaller then the computer’s, guess again')
    }
    return false;
}