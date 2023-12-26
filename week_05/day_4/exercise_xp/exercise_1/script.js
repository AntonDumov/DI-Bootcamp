// Part I

// In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(() => {
    // The function will alert “Hello World”.
    alert('Hello World')
}, 2000)

//
// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
setTimeout(addP, 2000)

// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addP() {
    const newP = document.createElement('p')
    newP.textContent = 'Hello World'
    document.getElementById('container').appendChild(newP)
}

// Part III

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const interval = setInterval(() => {
    // Instead of clicking on the button, the interval will be cleared (ie. clearInterval)
    // as soon as there will be 5 paragraphs inside the <div id="container">.
    if (document.querySelectorAll('#container > p').length >= 5) {
        clearInterval(interval)
    } else {
        addP();
    }
}, 2000)

// The interval will be cleared (ie. clearInterval), when the user will click on the button.
document.getElementById('clear').addEventListener('click', () => {
    clearInterval(interval)
})
