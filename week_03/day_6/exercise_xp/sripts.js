// 🌟 Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];

// Part I - Review About Arrays

// Write code to remove “Greg” from the people array.
people.splice(people.indexOf('Greg'), 1)

// Write code to replace “James” to “Jason”.
people[people.indexOf('James')] = 'Jason'

// Write code to add your name to the end of the people array.
people.push('Anton')

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf('Mary'))

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
console.log(people)
let newPeople = people.slice(0, people.indexOf('Mary')).concat(people.slice(people.indexOf('Mary') + 1, people.indexOf('Anton')))
console.log(newPeople)

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo')) // cause there is no 'Foo' in the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length - 1]
console.log(last)

// Part II - Loops


// Using a loop, iterate through the people array and console.log each person.
for (const name of people) {
    console.log(name)
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
// Hint: take a look at the break statement in the lesson.
for (const name of people) {
    console.log(name)
    if (name === 'Devon') {
        break
    }
}


// 🌟 Exercise 2 : Your Favorite Colors

// Create an array called colors where the value is a list of your five favorite colors.
let colors = ['red', 'green', 'purple', 'blue', 'orange']

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (const colorsKey in colors) {
    console.log(`My #${Number(colorsKey) + 1} choice is ${colors[colorsKey]}`)
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = [
    'st', 'nd', 'rd', 'th', 'th'
]
for (const colorsKey in colors) {
    console.log(`My ${Number(colorsKey) + 1}${suffixes[colorsKey]} choice is ${colors[colorsKey]}`)
}

// 🌟 Exercise 3 : Repeat The Question

// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let number = Number(prompt('Write a number'))

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while (number < 10) {
    number = Number(prompt('Write a new number'))
}

// 🌟 Exercise 4 : Building Management

// Copy and paste the above object to your Javascript file.
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

// Console.log the number of floors in the building.
console.log(building.numberOfFloors)

// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.thirdFloor)

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(building.nameOfTenants[1])
console.log(building.numberOfRoomsAndRent.dan[0])

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]){
    building.numberOfRoomsAndRent.dan[1] += 1200
}

// 🌟 Exercise 5 : Family

// Create an object called family with a few key value pairs.
let family = {
    mother: 'Mary',
    father: 'Bob',
    son: 'Jeff',
    daughter: 'Taylor'
}

// Using a for in loop, console.log the keys of the object.
for (const familyKey in family) {
    console.log(familyKey)
}

// Using a for in loop, console.log the values of the object.
for (const familyKey in family) {
    console.log(family[familyKey])
}

// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}

// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
for (const detailsKey in details) {
    console.log(`${detailsKey} ${details[detailsKey]}`)
}

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends has decided to start a secret society.
// The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let letters = names.map((x) => {return x[0]})
console.log(letters.sort().join(''))