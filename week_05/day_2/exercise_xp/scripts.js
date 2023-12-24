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
document.querySelector('#boldButton').addEventListener('click', e => {
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
