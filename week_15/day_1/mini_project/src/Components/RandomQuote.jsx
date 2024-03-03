import './random_quote.css';
import quotes from '../QuotesDatabase.js';
import { useEffect, useState } from 'react';

export const RandomQuote = () => {
    const [quotesPool, setQuotesPool] = useState([...quotes]);
    const [usedQuotes, setUsedQuotesPool] = useState([]);


    const getRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotesPool.length);
        const chosenQuote = quotesPool[randomIndex];
        setUsedQuotesPool([...usedQuotes, quotesPool[randomIndex]]);
        setQuotesPool(quotesPool.filter((q, i) => i !== randomIndex));
        if (quotesPool.length === 1) {
            setQuotesPool([...quotes]);
            setUsedQuotesPool([]);
        }
        return chosenQuote;
    };

    const [currentQuote, setCurrentQuote] = useState({});

    useEffect(() => {
        setCurrentQuote(getRandomQuote());
    }, []);

    return (
        <div className="random-quote-container">
            <div className="quote">
                <span>{currentQuote.quote}</span>
            </div>
            <div className="author">
                <span>{currentQuote.author}</span>
            </div>
            <div className="action">
                <button onClick={() => setCurrentQuote(getRandomQuote())}>New quote</button>
            </div>
        </div>
    );
};