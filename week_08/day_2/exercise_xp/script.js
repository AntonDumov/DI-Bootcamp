// 🌟 Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a, b) => a + b

// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function kg2gramsDeclaration(value) {
    return value * 1000
}

console.log(kg2gramsDeclaration(1))

// Then, use function expression and invoke it.
const kg2gramsExpression = function (value) {
    return value * 1000
}

console.log(kg2gramsExpression(2))

// Write in a one line comment, the difference between function declaration and function expression.
// A: Function declarations can be called before they are defined, while function expressions are not.

// Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(5)); // Invoking the function

// 🌟 Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments:
// number of children, partner’s name, geographic location, job title.
((nChildren, pName, location, jobTitle) => {
    // The function should display in the DOM a sentence like
    // "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
    document.querySelector('body').innerHTML += `<span>You will be a ${jobTitle} in ${location},
                                                          and married to ${pName} with ${nChildren} kids.`
})(2, 'Marrie', 'London', 'Engineer');

/*
🌟 Exercise 4 : Welcome
Instructions
John has just signed in to your website and you want to welcome him.

Create a Bootstrap Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture.*/

((username, picture) => {
    document.querySelector('nav>div').innerHTML += `<a class='navbar-brand' href="#"><img src="${picture}"></img>${username}</a>`
})('John', '');

// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:

// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

const makeJuice = (size) => {
    // The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like
    // The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    // In the makeJuice function, create an empty array named ingredients.
    let ingredients = []
    const addIngredients = (first, second, third) => {
        // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
        ingredients.push(first)
        ingredients.push(second)
        ingredients.push(third)
    }

    // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
    addIngredients('tomato', 'orange', 'apple')
    // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE.
    addIngredients('banana','peach', 'pineapple')
    // Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    const displayJuice = () => {
        document.querySelector('body').innerHTML+= `<div>The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}.</div>`
    }
    // Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
    displayJuice()
}

makeJuice('small')
