// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the
// other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.

for (let i = 1; i <= 6; i++) {
    let line;
    // You could do it like this in Python, but I don't know how to repeat this in JavaScript
    // line = '* ' * i;
    // So, I had to google it, I don't have any other ideas
    line = '* '.repeat(i)
    console.log(line)
}

for (let i = 1; i <= 6; i++) {
    let line = []
    for (let j = 0; j < i; j++) {
        line.push('*')
    }
    console.log(line.join(' '))
}