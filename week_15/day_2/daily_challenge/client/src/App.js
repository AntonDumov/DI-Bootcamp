import { useEffect, useState } from 'react';

const fetchHello = async () => {
    const r = await fetch('http://localhost:3001/api/hello/');
    return await r.text();
};

const Hello = () => {
    const [message, setMessage] = useState(null);
    useEffect(() => {
        fetchHello().then(setMessage);
    }, []);
    return (<h1>{message}</h1>);
};

function App() {
    const [inputValue, setInputValue] = useState('');
    const [returnedMessage, setReturnedMessage] = useState('');

    const sendRequest = async (message) => {

        const r = await fetch('http://localhost:3001/api/world', {
            method: 'post',
            body: JSON.stringify({message:message}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setReturnedMessage(await r.text());
    };

    return (
        <>
            <div>
                <Hello/>
            </div>
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendRequest(inputValue);
                }
                }>
                    <input
                        onChange={(e) => {
                            setInputValue(e.target.value);
                        }}
                        type="text" value={inputValue}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                {returnedMessage ? returnedMessage : ''}
            </div>
        </>
    );
}

export default App;
