import InputComponent from './InputComponent';
import { useState } from 'react';
import Operator from './Operator';

const Calculator = () => {
    const operators = [
        { name: 'Addition', value: '+' },
        { name: 'Multiplication', value: '*' },
        { name: 'Dividing', value: '/' },
        { name: 'Subtraction', value: '-' }
    ];

    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [operator, setOperator] = useState('+');
    const [result, setResult] = useState(null);

    const handleChangeInput = (inputNumber, event) => {
        const value = Number(event.target.value);
        if (inputNumber === 1) {
            setInput1(value);
        } else {
            setInput2(value);
        }
    };

    const handleCalculation = () => {
        if (operator === '+') {
            setResult(input1 + input2);
        } else if (operator === '*') {
            setResult(input1 * input2);
        } else if (operator === '-') {
            setResult(input1 - input2);
        } else {
            setResult(input1 / input2);
        }
    };

    const handleOperatorChange = (e) => {
        setOperator(e.target.value);
    };

    return (
        <div>
            <InputComponent value={input1} onChange={(e) => {
                handleChangeInput(1, e);
            }}></InputComponent>
            <InputComponent value={input2} onChange={(e) => {
                handleChangeInput(2, e);
            }}></InputComponent>
            <Operator onSelect={(e) => handleOperatorChange(e)} options={operators}/>
            <button onClick={handleCalculation}>Add them</button>
            <output>{result}</output>
        </div>
    );
};

export default Calculator;