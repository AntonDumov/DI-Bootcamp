import { useRef, useState } from 'react';

const CharacterCounter = () => {
    const inputRef = useRef('');
    const [textLength, setTextLength] = useState(0)
    const handleInputChange = () => {
        setTextLength(inputRef.current.value.length);
    };
    return (
        <div>
            <textarea ref={inputRef} onChange={handleInputChange} placeholder="Type something..."></textarea>
            <p>Character Count: {textLength}</p>
        </div>
    );
};

export default CharacterCounter;