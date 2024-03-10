import { useContext, useEffect, useState } from 'react';
import { TaskContext } from '../TaskContext';

const AddTask = () => {
    const [state, dispatch] = useContext(TaskContext);
    const [taskText, setTaskText] = useState('');

    const addOrEditTask = () => {
        if (state.editingId) {
            dispatch({
                type: 'EDIT_TASK',
                payload: { id: state.editingId, text: taskText }
            });
            dispatch({
                type: 'SET_EDITING_ID',
                payload: null
            });
        } else {
            dispatch({
                type: 'ADD_TASK',
                payload: { id: Date.now(), text: taskText, completed: false }
            });
        }
        setTaskText('');
    };

    useEffect(() => {
        const taskToEdit = state.tasks.find(task => task.id === state.editingId);
        if (taskToEdit) {
            setTaskText(taskToEdit.text);
        }
    }, [state.editingId]);

    return (
        <div>
            <input value={taskText} onChange={e => setTaskText(e.target.value)}/>
            <button onClick={addOrEditTask}>{state.editingId ? 'Edit' : 'Add'}</button>
        </div>
    );
};

export default AddTask;