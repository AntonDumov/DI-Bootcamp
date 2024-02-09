// In app.js, import the array of person objects from the data.js module.
//
// Write a function that calculates and prints the average age of all the persons in the array.
//
// Use the imported array and the average age function in app.js.
//
// Run app.js and confirm that the average age is correctly calculated and displayed.

const people = require ('./data');

const getAverageAge = (people) => {
  let total = 0;
  people.forEach(person => {
      total += person.age;
  });
  return total / people.length;
};

console.log(getAverageAge(people));