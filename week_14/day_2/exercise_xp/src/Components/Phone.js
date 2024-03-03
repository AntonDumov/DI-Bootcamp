import { useState } from 'react';

const Phone = (props) => {
    const brand = useState('Samsung');
    const model = useState('Galaxy S20');
    const [colour, setColour] = useState('black');
    const year = useState(2020);

    const setColourBlue = () => {
        setColour('blue')
    };

    return (
        <div>
            <h2>My phone is a {brand}</h2>
            <p>It's a {colour} {model} from {year}</p>
            <button onClick={setColourBlue}>Change colour</button>
        </div>
    );
};

export default Phone