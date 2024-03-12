import { TodoContextProvider } from './TodoContext';
import DisplayTodos from './Components/DisplayTodos';
import AddTodo from './Components/AddTodo';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        M.AutoInit();
    }, []);
    return (
        <TodoContextProvider>
            <div className="container">
                <h1>Todo's</h1>
                <div className="todos-dispay-container">
                    <DisplayTodos/>
                </div>
                <div className="todos-adder-container">
                    <AddTodo/>
                </div>
            </div>
        </TodoContextProvider>
    );
}

export default App;
