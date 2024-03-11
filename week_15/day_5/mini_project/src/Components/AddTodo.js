import { useContext, useRef } from 'react';
import { TodoContext } from '../TodoContext';

const AddTodo = () => {
    const [, { addTodo, toggleTodo, removeTodo }] = useContext(TodoContext);
    const inputRef =useRef('');

    const handleSubmit = () => {
        addTodo(inputRef.current.value)
    };
    return (<>
        <form className='todo-form' onSubmit={(e) => {e.preventDefault(); handleSubmit()}}>
            <input className={'todo-input'} ref={inputRef} placeholder={'Add new todo...'} type={'text'}/>
        </form>

    </>)
}

export default AddTodo;