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

