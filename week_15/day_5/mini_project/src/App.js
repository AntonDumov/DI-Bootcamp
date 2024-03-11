import { TodoContextProvider } from './TodoContext';
import DisplayTodos from './Components/DisplayTodos';
import AddTodo from './Components/AddTodo';
import './App.css'

function App() {
  return (
      <TodoContextProvider>
        <div className='container'>
          <h1>Todo's</h1>
          <div className='todos-dispay-container'>
            <DisplayTodos/>
          </div>
          <div className='todos-adder-container'>
            <AddTodo/>
          </div>
        </div>
      </TodoContextProvider>
  );
}

export default App;
