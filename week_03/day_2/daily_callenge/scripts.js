const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

function exercise1() {
    let newFruits = fruits
    newFruits.shift()
    newFruits = newFruits.sort((a, b) => {
        return a.localeCompare(b)
    })
    newFruits.push('Kiwi')
    newFruits = newFruits.filter(v => {
        return v !== 'Apples'
    })
    newFruits.reverse()
    console.log(newFruits)
}

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

function exercise2() {
    console.log(moreFruits[1][1][0])
}

console.log('Exercise 1:')
exercise1()
console.log('\nExercise 2:')
exercise2()