// In the JS file, create a function called playTheGame() that takes no parameter.
function playTheGame() {

    // In the function, start by asking the user if they would like to play the game
    // (Hint: use the built-in confirm() function).
    const answer = confirm('Would you like to play the game?')

    //If the answer is false, alert “No problem, Goodbye”.
    if (!answer) {
        alert('No problem, Goodbye')
        return;
    }

    let tries = 0;
    let outcome = false;

    let number = null;
    // create a variable named computerNumber where the value is a random number between 0 and 10
    // (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
    const computerNumber = Math.floor(Math.random() * 11)

    // If the user guessed more than 3 times, alert “out of chances” and exit the function.
    while (tries !== 3 && outcome === false) {
        while (number === null) {
            number = guessNumber()
        }
        outcome = compareNumbers(number, computerNumber)
        tries += 1
        number = null
    }

    if (!outcome) {
        alert('out of chances')
    } else {
        alert('WINNER')
    }
    console.log(`Computer number was ${computerNumber}`)
}

function guessNumber() {
    // Ask the user to enter a number between 0 and 10
    // (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
    const number = Number(prompt('Enter a number between 0 and 10'))

    if (isNaN(number)) {
        // If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
        alert('Sorry Not a number, Goodbye');
    } else if (!(number >= 0 && number <= 10)) {
        // If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
        alert('Sorry it’s not a good number, Goodbye')
    } else {
        return number
    }
    return null;
}


function compareNumbers(userNumber, computerNumber) {
    // Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber)
    // that takes 2 parameters : userNumber and computerNumber
    if (userNumber === computerNumber) {
        // If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
        return true;
    } else if (userNumber > computerNumber) {
        // If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s,
        // guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
        alert('Your number is bigger then the computer’s, guess again')
    } else {
        // If userNumber is lower than computerNumber, alert “Your number is smaller than the computer’s,
        // guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
        alert('Your number is smaller then the computer’s, guess again')
    }
    return false;
}