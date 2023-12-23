// Prompt the user for a number to begin counting down bottles.
let n = prompt('Write a number to begin')

// In the song, everytime a bottle drops,
// the subtracted number should go up by 1.
let sub_n = 1
while (n > 0) {
    console.log(`${n} bottles of beer`)
    n = n - sub_n
    // For 1 bottle, you pass “it” around.
    // For more than one bottle, you pass “them” around.
    console.log(`Take ${sub_n} down, pass ${sub_n !== 1 ? 'them' : 'it'} around`)
    console.log(`${n} bottles of beer on the wall\n`)
    sub_n += 1
    if (sub_n > n) {
        sub_n = n
    }
}
