// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// // #1
// function funcOne() {
//     const a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

// #1.1 - run in the console:

// funcOne()
// A: console will alert with a = 3;

// #1.2 What will happen if the variable is declared
// with const instead of let ?
// A: function will error

//#2
// let a = 0;
// function funcTwo() {
//     a = 5;
// }
//
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// #2.1 - run in the console:

// funcThree()
// A: function will return a = 0

// funcTwo()
// A: function redeclare a with a = 5

// funcThree()
// A: mow it will return a = 5

// #2.2 What will happen if the variable is declared
// with const instead of let ?
// A: funcTwo will error

//#3
// function funcFour() {
//     window.a = "hello";
// }
//
//
// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// #3.1 - run in the console:

// funcFour()
// A: we added a global variable "a" with value "hello"

// funcFive()
// A: inside the funcFive function a = "hello", because we didn't declare a variable a inside function it will get it from global

//#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// #4.1 - run in the console:

// funcSix()
// A: we declare a variable inside function, so it will get 'a' from local scope, which is "test"

// #4.2 What will happen if the variable is declared
// with const instead of let ?
// A: nothing, they are in different scopes

//#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// A: it will run two alerts: first one with 5 and second -- 2

// #5.2 What will happen if the variable is declared
// with const instead of let ?
// A: variables in different scopes, so nothing


// 🌟 Exercise 2 : Ternary Operator
// Instructions
// Using the code below:
//
//     function winBattle(){
//         return true;
//     }
// Transform the winBattle() function to an arrow function.
const winBattle = () => {
    return true;
}

// Create a variable called experiencePoints.
let experiencePoints;
// Assign to this variable, a ternary operator.
// If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.
experiencePoints = winBattle() ? experiencePoints = 10 : experiencePoints = 1;
console.log(experiencePoints)

// 🌟 Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value
// of the argument passed, is a string or not. The function should return true or false
// Check out the example below to see the expected output
// Example:
// console.log(isString('hello'));
// //true
// console.log(isString([1, 2, 4, 0]));
// //false

const isString = (value) => {
    return typeof value === 'string'
}

