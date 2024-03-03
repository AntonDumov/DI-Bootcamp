import './random_quote.css';
import quotes from '../QuotesDatabase.js';
import { useEffect, useState } from 'react';

export const RandomQuote = () => {

    const backgroundColors = [
        "#FFFFFF",
        "#CCCCCC",
        "#666666",
        "#FF0000",
        "#00FF00",
        "#0000FF",
        "#FFFF00",
        "#FF00FF",
        "#00FFFF",
    ];

    const quoteAndButtonColors = [
        '#000000',
        '#333333',
        '#4169E1',
        '#DC143C',
        '#228B22',
        '#95A5A6',
        '#795548',
        '#C02942',
        '#16A085',
        '#FFD700'
    ];

    const getRandomColor = (colorArray) => {
        return colorArray[Math.floor(Math.random() * colorArray.length)];
    };

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

    const [backgroundColor, setBackgroundColor] = useState('#fff');
    const [quoteColor, setQuoteColor] = useState('#515372');
    const [buttonColor, setButtonColor] = useState('#515372');

    function setRandomColors() {
        setBackgroundColor(getRandomColor(backgroundColors));
        setQuoteColor(getRandomColor(quoteAndButtonColors));
        setButtonColor(getRandomColor(quoteAndButtonColors));
    }

    return (
        <div className="random-quote-container" style={{
            '--background-color': backgroundColor,
            '--quote-color': quoteColor,
            '--button-color': buttonColor
        }}>
            <div className="quote">
                <span>{currentQuote.quote}</span>
            </div>
            <div className="author">
                <span>{currentQuote.author}</span>
            </div>
            <div className="action">
                <button onClick={() => {
                    setCurrentQuote(getRandomQuote());
                    setRandomColors();
                }}>New quote
                </button>
            </div>
        </div>
    );
};