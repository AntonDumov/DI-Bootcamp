function exercise1(food='pasta', meal='dinner') {
    console.log(`I eat ${food} at every ${meal}`);
}

function exercise2() {
    // Part i
    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    const myWatchedSeriesLength = myWatchedSeries.length
    const myWatchedSeriesSentence = myWatchedSeries.join(', ')
    console.log(`I watched ${myWatchedSeriesLength} series: ${myWatchedSeriesSentence}`)

    // Part ii
    myWatchedSeries[2] = 'friends'
    myWatchedSeries.push('soprano')
    myWatchedSeries.unshift('firefly')
    myWatchedSeries.splice(1, 1)
    console.log(myWatchedSeries[1][2])
    console.log(myWatchedSeries.join(', '))
}

function exercise3(temperatureCelsius=0) {
    const temperatureFahrenheit = temperatureCelsius / 5 * 9 + 32
    console.log(`${temperatureCelsius}°C is ${temperatureFahrenheit}°F.`)
}

function exercise4() {
    let c;
    let a = 34;
    let b = 21;

    // 1
    console.log(a + b) //first expression
    // Prediction: it will output 55 cause "a" and "b" are numbers and 34 + 21 equals 55
    // Actual: 55

    a = 2;

    // 2
    console.log(a + b) //second expression
    // Prediction: it will output 23 cause "a" and "b" are numbers and "a" is now 2 instead of 34
    // Actual: 23

    // 3
    // value of "c" will be "undefined"

    // 4
    console.log(3 + 4 + '5');
    // Prediction: it will output 12 cause "3 + 4" will result a number 7 and concatenate string to number
    // will result a sum of number and a "string number"
    // Actual: "75" (concatenating string to a number will result a string)
}

function exercise5() {
    console.log(typeof (15))
// Prediction: number cause 15 is a number
// Actual:

    console.log(typeof (5.5))
// Prediction: float cause 5.5 is a float number
// Actual: number (it's still a number)

    console.log(typeof (NaN))
// Prediction: NaN
// Actual: number (NaN is a number, not a different type)

    console.log(typeof ("hello"))
// Prediction: string
// Actual: string

    console.log(typeof (true))
// Prediction: boolean
// Actual: boolean

    console.log(typeof (1 != 2))
// Prediction: boolean cause this expression returns a true or false, which is a boolean
// Actual: boolean

    console.log("hamburger" + "s")
// Prediction: 'hamburgers' cause concatenating string returns a new string
// Actual: hamburgers

    console.log("hamburgers" - "s")
// Prediction: 'hamburger', i think it will remove "s" from the end of the string, but i'm not sure
// Actual: NaN

    console.log("1" + "3")
// Prediction: '13', concatenating strings returns a string
// Actual: '13'

    console.log("1" - "3")
// Prediction: '-2', it's actually "1" + (- "3"), - "3" will turn into number and concatenating string with number will
// try to turn string into a number and just concat two numbers which will return a number 1 - 3
// Actual: -2

    console.log("johnny" + 5)
// Prediction: 'johnny5', string can't be turned into number so it turn number into string and concat them into one
// string
// Actual: johnny5

    console.log("johnny" - 5)
// Prediction: don't know
// Actual: NaN

    console.log(99 * "hello")
// Prediction: ["hello", "hello" ... 99 times], multiplying string will return a list with repeated string
// Actual: NaN

    console.log(1 != 1)
// Prediction: false, 1 is equal 1, so it will return false
// Actual: false

    console.log(1 == "1")
// Prediction: true, because we're using not strict type operator it will turn string into number and then compare it
// Actual: true

    console.log(1 === "1")
// Prediction: false, it's a strict type operator and string is not equal to number
// Actual: false
}

function exercise6() {
    console.log(5 + "34")
// Prediction: 534, because concatenating number with string will return a string
// Actual: '534'

    console.log(5 - "4")
// Prediction: 1, because -"4" will return -4 and 5-4 is 1
// Actual: 1

    console.log(10 % 5)
// Prediction: 0, operator "%" returns remainder of the division
// Actual: 0

    console.log(5 % 10)
// Prediction: 5, same as above
// Actual: 5

    console.log("Java" + "Script")
// Prediction: "JavaScript", concatenating script will return a new string
// Actual: 'JavaScript'

    console.log(" " + " ")
// Prediction: "  ", same as above
// Actual: '  '

    console.log(" " + 0)
// Prediction: " 0", number will be turned into string and this becomes string concatenation
// Actual: ' 0'

    console.log(true + true)
// Prediction: 2, cause concatenating boolean turns it into number analog
// Actual: 2

    console.log(true + false)
// Prediction: 1, same as above
// Actual: 1

    console.log(false + true)
// Prediction: 1, same as above
// Actual: 1

    console.log(false - true)
// Prediction: -1, same as above
// Actual: -1

    console.log(!true)
// Prediction: false, not true is false
// Actual: false

    console.log(3 - 4)
// Prediction: -1
// Actual: -1

    console.log("Bob" - "bill")
// Prediction: NaN
// Actual: NaN
}

console.log("Exercise 1:")
exercise1()
console.log("\nExercise 2:")
exercise2()
console.log("\nExercise 3:")
exercise3()
console.log("\nExercise 4:")
exercise4()
console.log("\nExercise 5:")
exercise5()
console.log("\nExercise 6:")
exercise6()