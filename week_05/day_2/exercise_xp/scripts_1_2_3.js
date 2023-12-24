// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:
//
//     <article>
//         <h1> Some Facts </h1>
//         <h2> The Chocolate </h2>
//         <h3> History of the chocolate </h3>
//         <p> Chocolate is made from tropical Theobroma cacao tree seeds.
//             Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//         <p> After the European discovery of the Americas, chocolate became
//             very popular in the wider world, and its demand exploded. </p>
//         <p> Chocolate has since become a popular food product that millions enjoy every day,
//             thanks to its unique, rich, and sweet taste.</p>
//         <p> But what effect does eating chocolate have on our health?</p>
//     </article>


// Using a DOM property, retrieve the h1 and console.log it.
const h1 = document.querySelector('article > h1')
console.log(h1)

// Using DOM methods, remove the last paragraph in the <article> tag.
document.querySelector('article > p:last-of-type').remove()

// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
document.querySelector('h2').addEventListener('click', event => {
    event.target.style.backgroundColor = 'red'
})

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
document.querySelector('h3').addEventListener('click', event => {
    event.target.style.display = 'none'
})

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
document.querySelector('#boldButton').addEventListener('click', () => {
    document.querySelectorAll('article > p').forEach(p => {
        p.style.fontWeight = 'bold'
    })
})

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 and 100.(Check out this documentation)
h1.addEventListener('mouseover', event => {
    event.target.style.fontSize = `${Math.random() * 100}px`
})

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
const p2nd = document.querySelector("article > p:nth-of-type(2)")
p2nd.style.transition = '1s'
p2nd.addEventListener('mouseover', event => {
    event.target.style.opacity = '0%'
})
p2nd.addEventListener('mouseout', event => {
    event.target.style.opacity = '100%'
})


// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:
//
//     <form>
//         <label for="fname">First name:</label><br>
//         <input type="text" id="fname" name="firstname"><br>
//         <label for="lname">Last name:</label><br>
//         <input type="text" id="lname" name="lastname"><br><br>
//         <input type="submit" value="Submit" id="submit">
//     </form>
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.
const form = document.querySelector('form')
console.log(form)

// Retrieve the inputs by their id and console.log them.
const inputFName = document.querySelector('#fname')
const inputLName = document.querySelector('#lname')
console.log(inputFName, inputLName)

// Retrieve the inputs by their name attribute and console.log them.
console.log(
    document.getElementsByName('fname'),
    document.getElementsByName('lname')
)

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create a li per input value,
// then append them to the <ul class="usersAnswer"></ul>, below the form.
// The output should be :
//
// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

function validateFLNames () {
    if (inputFName.value === '') {
        inputFName.setCustomValidity('Please, fill the first name')
        return false
    } else {
        inputFName.setCustomValidity('')
    }
    if (inputLName.value === '') {
        inputLName.setCustomValidity('Please, fill the last name')
        return false
    } else {
        inputLName.setCustomValidity('')
    }
    return true
}

inputFName.addEventListener('input', () => {
    validateFLNames()
})

inputLName.addEventListener('input', () => {
    validateFLNames()
})

form.addEventListener('submit', ev => {
    ev.preventDefault() // to stop form from making a request to the server,
                        // we can also achieve it by setting type attribute of the button to "button"
    const firstName = inputFName.value
    const lastName = inputLName.value
    if (validateFLNames()) {
        const ul = document.createElement('ul')
        ul.classList.add('usersAnswer')
        for (const name of [firstName, lastName]) {
            const li = document.createElement('li')
            li.textContent = name
            ul.appendChild(li)
        }
        form.insertAdjacentElement('afterend', ul)
    }
})


// 🌟 Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :
//
//     <p><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
//         <strong>end</strong> you <strong>will</strong> be great Developers!
//         <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>
//
// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems;

// Create a function called getBoldItems() that takes no parameter.
// This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
function getBoldItems() {
    allBoldItems = document.querySelectorAll('p > strong')
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight () {
    allBoldItems.forEach((item) => {
        item.style.color = 'blue'
    })
}

// Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.
function returnItemsToDefault() {
    allBoldItems.forEach((item) => {
        item.style.color = 'black'
    })
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph).
// Look at this example
const p = document.querySelector('p#exercise3')
p.addEventListener('mouseover', () => {
    getBoldItems()
    highlight()
})
p.addEventListener('mouseout', () => {
    returnItemsToDefault()
})