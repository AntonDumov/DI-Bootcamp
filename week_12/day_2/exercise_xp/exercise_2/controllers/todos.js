import { todos } from '../config/db.js';

export const getAllTodos = (req, res) => {
    res.json(todos.list);
};

export const addTodo = (req, res) => {
    const newTodo = {
        id: todos.nextID,
        title: req.body.title,
        completed: req.body.completed || false
    };
    todos.nextID++;
    todos.list.push(newTodo);
    res.json(newTodo);
};

export const changeTodo = (req, res) => {
    const indexToChange = todos.list.findIndex(t => t.id === Number(req.params.id));
    if (indexToChange === -1) {
        res.status(404).json({ ok:false, msg: `No todo task with id: ${req.params.id}` });
    }
    for (const todoKey in req.body) {
        if (todos.list[indexToChange].hasOwnProperty(todoKey)) {
            todos.list[indexToChange][todoKey] = req.body[todoKey];
        }
    }
    res.json(todos.list[indexToChange]);
};

export const deleteTodo = (req, res) => {
    const indexToDelete = todos.list.findIndex(t => t.id === Number(req.params.id));
    if (indexToDelete === -1) {
        res.status(404).json({ ok:false, msg: `No todo task with id: ${req.params.id}` });
    }
    todos.list.splice(indexToDelete, 1);
    res.json({ msg: 'ok' });
};