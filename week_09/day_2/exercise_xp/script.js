// 🌟 Exercise 1 : Location
// Instructions
// Analyze the code below. What will be the output?

const person = {
    name: 'John Doe',
    age: 25,
    location: {
        country: 'Canada',
        city: 'Vancouver',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// A: I amd John Doe from Vancouver, Canada. Latitude 49.2827, Longitude -123.1207

// 🌟 Exercise 2: Display Student Info
// Instructions

// Using the code above, destructure the parameter inside the function and return a string as the example seen below:

function displayStudentInfo(objUser){
    const {first, last} = objUser
    return `Your full name is ${first} ${last}`
}

//output : 'Your full name is Elie Schoppik'

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}))

// 🌟 Exercise 3: User & Id
// Instructions
// Using this object
const users = { user1: 18273, user2: 92833, user3: 90315 }
//
// Using methods taught in class, turn the users object into an array:
// Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
// FYI : The number is their ID number.
console.log(Object.entries(users))

// Modify the outcome of part 1, by multipling the user’s ID by 2.
// Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
console.log(Object.entries(users).map(i => [i[0], i[1] * 2]))

// Exercise 4 : Person Class
// Instructions
// Analyze the code below. What will be the output?

class Person {
    constructor(name) {
        this.name = name;
    }
}

const member = new Person('John');
console.log(typeof member);

// a: object

// 🌟 Exercise 5 : Dog Class
// Instructions
// Using the Dog class below:
class Dog {
    constructor(name) {
        this.name = name;
    }
};

// Analyze the options below. Which constructor will successfully extend the Dog class?

// 1
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.size = size;
//     }
// };

// 2
// class Labrador extends Dog {
//     constructor(name, size) {
//         super(name);
//         this.size = size;
//     }
// };

// 3
// class Labrador extends Dog {
//     constructor(size) {
//         super(name);
//         this.size = size;
//     }
// };

// 4
// class Labrador extends Dog {
//     constructor(name, size) {
//         this.name = name;
//         this.size = size;
//     }
// };

// a: second and third. first and fourth are missing a superclass invocation

// 🌟 Exercise 6 : Challenges
// Evaluate these (ie True or False)

Boolean([2] === [2]) // False
Boolean({} === {}) // False

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

// objects 2 and 3 are reference to object 1,
// but we declared object 4 separately

