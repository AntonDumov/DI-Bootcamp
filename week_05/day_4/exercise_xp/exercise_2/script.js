// 🌟 Exercise 2 : Move The Box

// In your Javascript file, use setInterval to move the <div id="animate">
// to the right side of the <div id="container">, when the button is clicked on.

function myMove() {

    const div = document.getElementById('animate')
    let divPosition = 0

    // The <div id="animate"> should move 1px to the right every milisecond,
    const animateDivInterval = setInterval(() => {
        divPosition += 1
        div.style.left = `${divPosition}px`

        // until it reaches the end of the <div id="container">.
        if(divPosition === 350) {
            clearInterval(animateDivInterval)
        }

    }, 1)
}
