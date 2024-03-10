import { createContext, useReducer } from 'react';

const initialState = [];
export const TaskContext = createContext(initialState);

const taskReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];
        case 'REMOVE_TASK':
            return state.filter(task => task.id !== action.payload);
        case 'TOGGLE_TASK':
            return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
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
    )
}