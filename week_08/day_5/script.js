const quotes = [
    {
        id: 0,
        author: 'Albert Einstein',
        quote: 'As far as the laws of mathematics refer to reality, they are not certain; and as far as they are certain, they do not refer to reality.'
    },
    {
        id: 1,
        author: 'Albert Einstein',
        quote: 'Every day I remind myself that my inner and outer life are based on the labors of other men, living and dead, and that I must exert myself in order to give in the same measure as I have received and am still receiving.'
    },
    {
        id: 2,
        author: 'Albert Einstein',
        quote: 'Gravitation cannot be held responsible for people falling in love. How on earth can you explain in terms of chemistry and physics so important a biological phenomenon as first love? Put your hand on a stove for a minute and it seems like an hour. Sit with that special girl for an hour and it seems like a minute. That\'s relativity.'
    },
    {
        id: 3,
        author: 'Albert Einstein',
        quote: 'Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.'
    },
    {
        id: 4,
        author: 'Albert Einstein',
        quote: 'I know not with what weapons World War III will be fought, but World War IV will be fought with sticks and stones.'
    },
    {
        id: 5,
        author: 'Albert Einstein',
        quote: 'The hardest thing in the world to understand is the income tax.'
    },
    {
        id: 6,
        author: 'Albert Einstein',
        quote: 'The release of atomic energy has not created a new problem. It has merely made more urgent the necessity of solving an existing one.'
    },
    {
        id: 7,
        author: 'Albert Einstein',
        quote: 'We should take care not to make the intellect our god; it has, of course, powerful muscles, but no personality.'
    },
    {
        id: 8,
        author: 'Albert Einstein',
        quote: 'The important thing is not to stop questioning.'
    },
]

const getRandomQuote = (lastId = null) => {
    let chosenQuote = quotes[Math.floor(Math.random() * quotes.length)]
    return chosenQuote.id === lastId ? getRandomQuote(lastId) : chosenQuote;
}

const renderQuote = quote => {
    document.querySelector('.quote-text').innerHTML = `<i class="fa-solid fa-quote-left fa-2xl"></i>${quote.quote}`
    document.querySelector('.quote-author').innerText = quote.author
    document.querySelector('.quote-container').dataset.quoteId = quote.id
}

document.querySelector('#generateQuoteButton').addEventListener('click', (ev) => {
    renderQuote(getRandomQuote(parseInt(document.querySelector('.quote-container').dataset.quoteId)))
})
