// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>
//
// Add the code above, to your HTML file
//
// Using Javascript:

//     Retrieve the div and console.log it
console.log(
    document.querySelector('div')
)

//     Change the name “Pete” to “Richard”.
document.querySelector('.list').lastElementChild.textContent = 'Richard'

//     Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)
document.querySelectorAll('.list')[1].children[1].remove()

//     Change each first name of the two <ul>'s to your name. (Hint : use a loop)
for (const li of document.querySelectorAll('.list>li')) {
    li.textContent = 'Anton'
}

// Bonus - Using Javascript:
//     Add a class called student_list to both of the <ul>'s.
for (const ul of document.querySelectorAll('.list')) {
    ul.classList.add('student_list')
}

//     Add the classes university and attendance to the first <ul>.
const universityList = document.querySelector('.student_list');
universityList.classList.add('university')
universityList.classList.add('attendance')

// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>
//
//
// Add the code above, to your HTML file
//
// Using Javascript:
// Add a “light blue” background color and some padding to the <div>.
const secondDiv = document.querySelectorAll('div')[1]
secondDiv.style.backgroundColor = 'lightblue';
secondDiv.style.padding = '10px';

// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)
const thirdList = document.querySelectorAll('ul')[2]
thirdList.firstElementChild.style.display = 'none'
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
thirdList.lastElementChild.style.border = 'solid 1px'
// Change the font size of the whole body.
document.body.style.fontSize = '30px'

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (secondDiv.style.backgroundColor === 'lightblue') {
    alert(`Hello ${thirdList.firstElementChild.textContent} and ${thirdList.lastElementChild.textContent}`)
}

// 🌟 Exercise 3 : Change The Navbar
// Instructions
// <div id="navBar">
//     <ul>
//     <li><a href="#">Profile</a></li>
// <li><a href="#">Home</a></li>
// <li><a href="#">My Friends</a></li>
// <li><a href="#">Messenger</a></li>
// <li><a href="#">My Pics</a></li>
// </ul>
// </div>
//
// Add the code above, to your HTML file

// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
// using the setAttribute method.
const navBar = document.querySelector('#navBar')
navBar.id = 'socialNetworkNavigation'

// We are going to add a new <li> to the <ul>.

//     First, create a new <li> tag (use the createElement method).
const newLi = document.createElement('li')

//     Create a new text node with “Logout” as its specified text.
const textNode = document.createTextNode('Logout')

//     Append the text node to the newly created list node (<li>).
newLi.append(textNode)

//     Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
navBar.firstElementChild.appendChild(newLi)

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li>
// elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
const parentUl = navBar.firstElementChild
const firstLi = parentUl.firstElementChild
const lastLi = parentUl.lastElementChild
console.log(`${firstLi.textContent} ${lastLi.textContent}`)

// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
const booksContainer = document.createElement('div')
booksContainer.classList.add('listBooks')
document.body.appendChild(booksContainer)

// In the js file, create an array called allBooks. This is an array of objects.
// Each object is a book that has 4 keys (ie. 4 properties) :
//     title,
//     author,
//     image : a url,
//     alreadyRead : which is a boolean (true or false).
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
const allBooks = [
    {
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        image: 'https://m.media-amazon.com/images/I/81yA0EpKucL._AC_UF1000,1000_QL80_.jpg',
        alreadyRead: true
    },
    {
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        image: 'data:image/jpeg;base64,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',
        alreadyRead: false
    },
]

// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table
// (the HTML table must be added to the <div> created in part 1).
const bookTable = document.createElement('table')
const bookTableHeader = bookTable.createTHead()
const bookTableHeaderRow = bookTableHeader.insertRow(0)
bookTableHeaderRow.insertCell(0).innerText = 'Title'
bookTableHeaderRow.insertCell(1).innerText = 'Author'
bookTableHeaderRow.insertCell(2).innerText = 'Cover'

const bookTableBody = bookTable.createTBody()

// For each book :
for (const book of allBooks) {
    // You have to display the book’s title and the book’s author.
    const bookRow = bookTableBody.insertRow()
    bookRow.insertCell(0).innerText = book.title
    bookRow.insertCell(1).innerText = book.author

    const coverCell = bookRow.insertCell(2)
    const bookCover = document.createElement('img')
    bookCover.src = book.image
    bookCover.alt = `${book.title} cover`

    // The width of the image has to be set to 100px.
    bookCover.width = 100
    coverCell.appendChild(bookCover)

    // If the book is already read. Set the color of the book’s details to red.
    if (book.alreadyRead) {
        bookRow.style.color = 'red'
    }
}

booksContainer.appendChild(bookTable)