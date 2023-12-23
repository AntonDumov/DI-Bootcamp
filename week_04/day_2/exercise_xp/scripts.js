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


