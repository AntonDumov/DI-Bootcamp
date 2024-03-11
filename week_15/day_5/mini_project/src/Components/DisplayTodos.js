import { useContext } from 'react';
import { TodoContext } from '../TodoContext';

const DisplayTodos = () => {
    const [state, { addTodo, toggleTodo, removeTodo }] = useContext(TodoContext);
    const handleClick = (task) => {
        if (!task.completed) {
            toggleTodo(task.id)
        } else {
            removeTodo(task.id)
        }
    };
    return <>{state.map(task => {
        return <div className={`task${task.completed?' completed':''}`} key={task.id} onClick={() => {handleClick(task)}}>
            <span>{task.text}</span>
        </div>
    })}</>
}

export default DisplayTodos;
