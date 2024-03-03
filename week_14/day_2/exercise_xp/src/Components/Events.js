import { useState } from 'react';

const Events = (props) => {
    const clickMe = () => alert('I was clicked');

    const handleKeyDown = e => {
        alert(`The ${e.key} key was pressed, your input is: ${e.target.value}`);
    };

    const [isToggleOn, setToggle] = useState(true);
    const toggle = () => {
        if (isToggleOn) {
            setToggle(false);
        } else {
            setToggle(true);
        }
        ;
    };

    return <>
        <button onClick={clickMe}>Click me</button>
        <input onKeyDown={handleKeyDown}/>
        <button onClick={toggle}>{isToggleOn ? (<>on</>) : (<>off</>)}</button>
    </>;
};

export default Events;