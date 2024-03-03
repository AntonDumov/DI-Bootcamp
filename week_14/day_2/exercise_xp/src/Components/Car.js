import { useState } from 'react';

const Car = props => {
    const colour = useState(props.colour)
    return <h2>This car is {colour} {props.model}</h2>;
}

export default Car;