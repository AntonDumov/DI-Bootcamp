import { useContext } from 'react';
import { TaskContext } from '../TaskContext';

const DisplayTasks = () => {
    const [state, dispatch] = useContext(TaskContext);

    const toggleTask = id => {
        dispatch({ type: 'TOGGLE_TASK', payload: id });
    };

    const removeTask = id => {
        dispatch({ type: 'REMOVE_TASK', payload: id });
    };

    const editTask = id => {
        dispatch({ type: 'SET_EDITING_ID', payload: id });
    }

    let displayedTasks = [...state.tasks];
    if(state.filter === 'ACTIVE') {
        displayedTasks = displayedTasks.filter(task => !task.completed);
    } else if(state.filter === 'COMPLETED') {
        displayedTasks = displayedTasks.filter(task => task.completed);
    }

    return (
        <div>
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ALL' })}>All Tasks</button>
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'ACTIVE' })}>Active Tasks</button>
            <button onClick={() => dispatch({ type: 'FILTER_TASKS', payload: 'COMPLETED' })}>Completed Tasks</button>
            {displayedTasks.map(task => (
                <div key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={() => removeTask(task.id)}>Remove</button>
                    <button onClick={() => editTask(task.id)}>Edit</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayTasks;