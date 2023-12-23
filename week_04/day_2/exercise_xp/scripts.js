// 🌟 Exercise 1 : Information

// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
function infoAboutMe() {
    // The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    console.log('My name Anton. I\'m 28 and I like coding and video games')
}

// Call the function.
infoAboutMe()

// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    // The function should console.log a sentence about the person
    // (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log(`Your name is ${personName}, you are ${personAge} years old, your favorite color is ${personFavoriteColor}`)
}

// Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// 🌟 Exercise 2 : Tips

// John created a simple tip calculator to help calculate how much
// to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
function calculateTip() {
    // Inside the function, use prompt to ask John for the amount of the bill.
    const billAmount = Number(prompt("Bill amount:"))

    // Here are the rules
    let tip
    if (billAmount < 50) {
        // If the bill is less than $50, tip 20%.
        tip = billAmount * 0.2
    } else if (billAmount < 200) {
        // If the bill is between $50 and $200, tip 15%.
        tip = billAmount * 0.15
    } else {
        // If the bill is more than $200, tip 10%.
        tip = billAmount * 0.1
    }
    // Console.log the tip amount and the final bill (bill + tip).
    console.log(billAmount + tip)
}

// Call the calculateTip() function.
calculateTip()


// 🌟 Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.
// Bonus: Add a parameter divisor to the function.
function isDivisible(divisor) {
    // In the function, loop through numbers 0 to 500.
    let sum = 0
    for (let i = 0; i <= 500; i++) {
        // Console.log all the numbers divisible by divisor.
        if (i % divisor === 0) {
            console.log(i)
            sum += i
        }
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(sum)
}

isDivisible(23)

// 🌟 Exercise 4 : Shopping List

// Add the stock and prices objects to your js file.
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”.
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
const shoppingList = [
    'banana', 'orange', 'apple'
]

// Create a function called myBill() that takes no parameters.
function myBill() {
    let amount = 0
    for (const item of shoppingList) {
        // The item must be in stock.
        if (stock[item] >= 1) {
            // If the item is in stock find out the price in the prices object.
            const itemPrice = prices[item]
            amount += itemPrice
            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[item] -= 1
        }
    }
    // The function should return the total price of your shoppingList.
    return amount
}

// Call the myBill() function.
console.log(myBill())

// Exercise 5 : What’s In My Wallet ?
// Note: Read the illustration (point 4), while reading the instructions
//
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//     an item price
//     and an array representing the amount of change in your pocket.

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01
function changeEnough(itemPrice, amountOfChange) {
    // In the function, determine whether you can afford the item.
    const sumOfChange = amountOfChange[0] * 0.25 + amountOfChange[1] * 0.1 + amountOfChange[2] * 0.05 + amountOfChange[3] * 0.01

    return sumOfChange >= itemPrice;
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))


// 🌟 Exercise 6 : Vacations Costs
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
function hotelCost() {
    // It should ask the user for the number of nights they would like to stay in the hotel.
    let numberOfNights = Number(prompt('How many nights would you like to stay?'))
    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (isNaN(numberOfNights) || numberOfNights === 0) {
        numberOfNights = Number(prompt('Write a number'))
    }
    // The hotel costs $140 per night. The function should return the total price of the hotel.
    return numberOfNights * 140
}

// Define a function called planeRideCost().
function planeRideCost() {
    // It should ask the user for their destination.
    let destination = prompt('What is your desired destination')
    // If the user doesn’t answer or if the answer is not a string, ask again.
    while (!destination || destination === '') {
        destination = prompt('No such place, try again')
    }

    // The function should return a different price depending on the location.
    switch (destination) {
        // “London”: 183$
        case 'London':
            return 183
        // “Paris” : 220$
        case 'Paris':
            return 220
    }
    // All other destination : 300$
    return 300
}

// Define a function called rentalCarCost().
function rentalCarCost() {
    // It should ask the user for the number of days they would like to rent the car.
    let days = Number(prompt('For how many days would you like to rent a car?'))
    // If the user doesn’t answer or if the answer is not a number, ask again.
    while (isNaN(days) || days === 0) {
        days = Number(prompt('Write a number of days'))
    }
    // Calculate the cost to rent the car. The car costs $40 everyday.
    let cost = days * 40
    // If the user rents a car for more than 10 days, they get a 5% discount.
    if (days > 10) {
        cost *= 0.95
    }
    // The function should return the total price of the car rental.
    return cost
}

// Define a function called totalVacationCost()
// that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
function totalVacationCost() {
    console.log(`The car cost: $${hotelCost()}, the hotel cost: $${planeRideCost()}, the plane tickets cost: $${rentalCarCost()}.`)
}

totalVacationCost()

// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function.
// You need to change the 3 first functions, accordingly.
