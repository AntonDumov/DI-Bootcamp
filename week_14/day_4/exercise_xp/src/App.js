import './App.css';
import ErrorBoundary from './Components/ErrorBoundary';
import BuggyCounter from './Components/BuggyCounter';
import Color from './Components/Color';
import Child from './Components/Child';
import { useState } from 'react';

function App() {
    const [show, setShow] = useState(true)
    return (
        <div>
            <h1>Exercise 1:</h1>

            <h2>Simulation 1: Shared Error Boundary</h2>
            <ErrorBoundary>
                <BuggyCounter/>
                <BuggyCounter/>
            </ErrorBoundary>

            <h2>Simulation 2: Individual Error Boundaries</h2>
            <ErrorBoundary>
                <BuggyCounter/>
            </ErrorBoundary>
            <ErrorBoundary>
                <BuggyCounter/>
            </ErrorBoundary>

            <h2>Simulation 3: No Error Boundary</h2>
            <BuggyCounter/>

            <h1>Exercise 2:</h1>
            <Color></Color>

            <h1>Exercise 3:</h1>

            {show?<Child/>:""}
            <button onClick={() => {setShow(false)}}>Delete Header</button>

        </div>
    );
}

export default App;
