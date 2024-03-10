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
    return (
        <div>
            {state.map(task => (
                <div key={task.id}>
                    <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => toggleTask(task.id)}
                    />
                    <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
                    <button onClick={() => removeTask(task.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
};

export default DisplayTasks;