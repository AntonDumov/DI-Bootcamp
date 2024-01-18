const getRandomQuote = (lastId = null) => {
    let chosenQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return chosenQuote.id === lastId ? getRandomQuote(lastId) : chosenQuote;
}

const renderQuote = quote => {
    document.querySelector('.quote-text').innerHTML = `<i class="fa-solid fa-quote-left fa-2xl"></i>${quote.quote}`
    document.querySelector('.quote-author').innerText = quote.author
    document.querySelector('.quote-container').dataset.quoteId = quote.id
}

const getCurrentQuoteId = () => {
    return parseInt(document.querySelector('.quote-container').dataset.quoteId)
}

document.querySelector('#generateQuoteButton').addEventListener('click', () => {
    renderQuote(getRandomQuote(getCurrentQuoteId()))
})

const addNewQuote = (quote, author) => {
    lastId++
    quotes.push({
        id: lastId,
        quote: quote,
        author: author
    })
    renderQuote(getQuoteById(lastId))
}

document.querySelector('#newQuoteForm').addEventListener('submit', ev => {
    ev.preventDefault();
    addNewQuote(
        ev.target[0].value, ev.target[1].value
    )
})

const getQuoteById = id => {
    return quotes.find(quote => quote.id === id)
}

const getQuoteLength = id => {
    return getQuoteById(id).quote.length
}

const getQuoteLengthWOSpace = id => {
    return getQuoteById(id).quote.replace(/\s/g, '').length
}

const getQuiteWordsNumber = id => {
    return getQuoteById(id).quote.trim().split(/\s+/g).length
}

const likeQuote = id => {
    const quote = getQuoteById(id)
    if (typeof quote.likes === "undefined") {
        quote.likes = 0
    }
    quote.likes++
    return quote.likes
}

const displayResult = text => {
    document.querySelector('#result').innerText = text
}

document.getElementById('getLengthButton').addEventListener('click', () => {
    displayResult(
        getQuoteLength(getCurrentQuoteId())
    )
})

document.getElementById('getLengthWOSpaceButton').addEventListener('click', () => {
    displayResult(
        getQuoteLengthWOSpace(getCurrentQuoteId())
    )
})

document.getElementById('getWordsNumberButton').addEventListener('click', ()=> {
    displayResult(
        getQuiteWordsNumber(getCurrentQuoteId())
    )
})

document.getElementById('likeQuoteButton').addEventListener('click', () => {

    displayResult(`Likes: ${likeQuote(getCurrentQuoteId())}`)
})

let filteredQuotes = []
let currentPosition = undefined
const filterByAuthor = query => {
    filteredQuotes = quotes.filter(quote => quote.author.toLowerCase().includes(query.toLowerCase())).map(q => q.id)
    currentPosition = undefined
}

document.getElementById('filterQuoteForm').addEventListener('submit', ev => {
    ev.preventDefault();
    filterByAuthor(ev.target[0].value)
    ev.target[0].value = filteredQuotes.length
})

const navigateFilteredQuotes = direction => {
    if (filteredQuotes.length) {
        if (currentPosition === undefined) {
            currentPosition = 0
        } else {
            if (direction === '+'){
                currentPosition++
            } else {
                currentPosition--
            }
        }
        if (currentPosition > filteredQuotes.length - 1) {
            currentPosition = 0
        } else if (
            currentPosition < 0
        ) {
            currentPosition = filteredQuotes.length - 1
        }
        renderQuote(getQuoteById(filteredQuotes[currentPosition]))
    }
}

document.getElementById('nextQuote').addEventListener('click', () => {
    navigateFilteredQuotes('+')
})

document.getElementById('previousQuote').addEventListener('click', () => {
    navigateFilteredQuotes('-')
})