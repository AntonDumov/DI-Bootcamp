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

const arr = [
    {id:1 ,name:'John', email:'jjj@gmail.com'},
    {id:2 ,name:'Mor', email:'mmm@gmail.com'},
    {id:3 ,name:'Marry', email:'marry@gmail.com'},
    {id:4 ,name:'Or', email:'or@gmail.com'},
]

console.log(
    arr.filter(o => o.name.toLowerCase().includes('o'))
)