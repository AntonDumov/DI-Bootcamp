import { createContext, useReducer } from 'react';

const initialState = {
    tasks: [],
    editingId: null,
    filter: 'ALL'
};
export const TaskContext = createContext(initialState);

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            // return [...state, action.payload];
            return { ...state, tasks: [...state.tasks, action.payload] };
        case 'REMOVE_TASK':
            // return state.filter(task => task.id !== action.payload);
            return { ...state, tasks: state.tasks.filter(task => task.id !== action.payload) };
        case 'TOGGLE_TASK':
            // return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
            return { ...state, tasks: state.tasks.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task) };
        case 'EDIT_TASK':
            return {
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? { ...task, text: action.payload.text } : task)
            };
        case 'SET_EDITING_ID':
            return { ...state, editingId: action.payload };
        case 'FILTER_TASKS':
            return { ...state, filter: action.payload };
        default:
            return state;
    }
};

export const TaskProvider = props => {
    const [state, dispatch] = useReducer(taskReducer, initialState);
    return (
        <TaskContext.Provider value={[state, dispatch]}>
            {props.children}
        </TaskContext.Provider>
    );
};