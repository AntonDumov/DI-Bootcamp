// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you
// fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb),
// and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.
//
// In this exercise you work with the HTML code presented below.
//
// Follow these steps :

const form = document.querySelector('form')

const inputNoun = document.querySelector('#noun')
const inputAdjective = document.querySelector('#adjective')
const inputPerson = document.querySelector('#person')
const inputVerb = document.querySelector('#verb')
const inputPlace = document.querySelector('#place')

const inputs = [
    inputNoun, inputAdjective, inputPerson, inputVerb, inputPlace
]

function getFormValues() {
    return inputs.map(i => {return i.value})
}

// Make sure the values are not empty
for (const input of inputs) {
    input.addEventListener('input', () => {
        is_valid()
    })
}

function is_valid() {
    for (const input of inputs) {
        if (input.value === '') {
            input.setCustomValidity('Fill this input')
            return false
        } else {
            input.setCustomValidity('')
        }
    }
    return true
}

// Write a story that uses each of the values.
function generateStory(noun, adjective, person, verb, place) {
    const stories = [
        `${person} went to ${place} to ${verb} a ${adjective} ${noun}.`,
        `In ${place}, ${person} found the ${adjective} ${noun} and decided to ${verb} it.`,
        `${person} always wanted to ${verb} the ${adjective} ${noun} in ${place}.`
    ]
    return stories[Math.floor(Math.random() * stories.length)]
}

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
form.addEventListener('submit', ev => {
    ev.preventDefault();
    if (is_valid()) {
        document.getElementById('story').textContent = generateStory(...getFormValues())
    }
})

// Make sure you check the console for errors when playing the game.

// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change
// the story currently displayed (but keep the values entered by the user).
// The user could click the button at least three times and get a new story.
// Display the stories randomly.
function shuffle() {
    if (is_valid()) {
        const values = getFormValues()
        for (let i = values.length - 1; i > 0; i--) {
            const randomIndex = Math.floor(Math.random() * (i + 1))
            const temp = values[i]
            values[i] = values[randomIndex]
            values[randomIndex] = temp
        }
        document.getElementById('story').textContent = generateStory(
            ...values
        )
    }
}

document.getElementById('shuffleButton').addEventListener('click', () => {
    shuffle()
})
