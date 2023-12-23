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