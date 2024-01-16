// let users = ['eli', 'adam', 'anna']
//
// const emails = users.map(item => {
//     return item + '@gmail.com'
// })
// console.log(emails)

/** Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */

// const greaterThan3 = (array) => {
//     return array.filter(x => x > 3)
// }
//
//
// console.log(greaterThan3([0,1,1,2,3,5,8]))

// const arr = [
//     {id:1 ,name:'John', email:'jjj@gmail.com'},
//     {id:2 ,name:'Mor', email:'mmm@gmail.com'},
//     {id:3 ,name:'Marry', email:'marry@gmail.com'},
//     {id:4 ,name:'Or', email:'or@gmail.com'},
// ]
//
// console.log(
//     arr.filter(o => o.name.toLowerCase().includes('o'))
// )

// let employees = [
//     {
//         firstName: 'John',
//         lastName: 'Doe',
//         age: 27,
//         joinedDate: 'December 15, 2017'
//     },
//
//     {
//         firstName: 'Ana',
//         lastName: 'Rosy',
//         age: 25,
//         joinedDate: 'January 15, 2019'
//     },
//
//     {
//         firstName: 'Zion',
//         lastName: 'Albert',
//         age: 30,
//         joinedDate: 'February 15, 2011'
//     }
// ];
//
// console.log(employees.filter(e => e.age > 26))

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

// const sum = arr => {
//     let result = 0
//     for (const element of arr) {
//         result += element
//     }
//     return result
// }
//
// console.log(sum([2, 5, 10,100]))

/**
 Given n, take the sum of the digits of n.
 If that value has more than one digit,
 continue reducing in this way until a single-digit
 number is produced.
 This is only applicable to the natural numbers.
 Examples
 16  -->  1 + 6 = 7
 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
 */

const reduce2oneDigit = n => {
    let sumDigits = n.toString().split('').reduce((sum, digit) => {
        return sum += parseInt(digit)
    }, 0)
    if (sumDigits.toString().length > 1) {
        return reduce2oneDigit(sumDigits)
    }
    else {
        return sumDigits
    }
}

console.log(reduce2oneDigit(132189))