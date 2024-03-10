import { useContext, useState } from 'react';
import { TaskContext } from '../TaskContext';

const AddTask = () => {
    const [, dispatch] = useContext(TaskContext);
    const [taskText, setTaskText] = useState('');

    const addTask = () => {
        dispatch({
            type: 'ADD_TASK',
            payload: { id: Date.now(), text: taskText, completed: false }
        });
        setTaskText('');
    };
    return (
        <div>
            <input value={taskText} onChange={e => setTaskText(e.target.value)}/>
            <button onClick={addTask}>Add</button>
        </div>
    )
};

export default AddTask;