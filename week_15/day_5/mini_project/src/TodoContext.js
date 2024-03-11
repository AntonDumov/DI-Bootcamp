import { createContext, useReducer, useEffect } from 'react';

const host = 'http://localhost:3001'
const initialState = [];
export const TodoContext = createContext(initialState)

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload];
        case 'TOGGLE_TODO':
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed };
                } else {
                    return todo;
                }
            })
        case 'REMOVE_TODO':
            return state.filter(todo => {
                return todo.id !== action.payload.id;
            })
        case 'LOAD_TODOS':
            return action.payload;
        default:
            return state
    }
}

export const TodoContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const loadTodos = async () => {
        const response = await fetch(
            `${host}/api/todo/`,
            {
                method:'get',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        )
        dispatch({type: 'LOAD_TODOS', payload: await response.json()});
    };

    const addTodo = async (text) => {
        const newTodo = { text, completed: false };
        const response = await fetch(`${host}/api/todo/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newTodo),
        });
        dispatch({type: 'ADD_TODO', payload: await response.json()});
    };

    const toggleTodo = async (id) => {
        const response = await fetch(`${host}/api/todo/${id}/`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
        });
        const todo = await response.json()
        dispatch({type: 'TOGGLE_TODO', payload: todo});
    };

    const removeTodo = async (id) => {
        const response = await fetch(`${host}/api/todo/${id}/`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        });
        const todo = await response.json();
        dispatch({type: 'REMOVE_TODO', payload: todo});
    };

    useEffect(() => {
        loadTodos();
    }, []);

    return (
        <TodoContext.Provider value={[state, {addTodo, toggleTodo, removeTodo}]}>
            {props.children}
        </TodoContext.Provider>
    )
}