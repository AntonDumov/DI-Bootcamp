import { _getAllTasks, _getTaskByID, _addNewTask, _changeTaskByID, _deleteTaskByID } from '../models/tasks.models.js';


export const getAllTasks = async (req, res) => {
    res.json(await _getAllTasks());
};

export const getTaskByID = async (req, res) => {
    const task = await _getTaskByID(Number(req.params.id));
    if (task) {
        return res.json(task);
    }
    res.status(404).json({ ok: false, msg: `Task with id "${req.params.id}" not found` });
};

export const addNewTask = async (req, res) => {
    try {
        const task = await _addNewTask(req.body.name, req.body.description);
        return res.json(task);
    } catch (e) {
        res.status(400).json({ ok: false, msg: 'bad request' });
    }
};

export const changeTaskByID = async (req, res) => {
    try {
        const task = await _changeTaskByID(Number(req.params.id), { ...req.body });
        if (task) {
            return res.json(task);
        } else {
            return res.status(404).json({ ok: false, msg: `Task with id "${req.params.id}" not found` });
        }

    } catch (e) {
        res.status(400).json({ ok: false, msg: 'bad request' });
    }
};

export const deleteTaskByID = async (req, res) => {
    try {
        const deletedTask = await _deleteTaskByID(Number(req.params.id));
        if (deletedTask) {
            return res.json(deletedTask);
        }
        return res.status(404).json({ ok: false, msg: `Task with id "${req.params.id}" not found` });
    } catch (e) {
        res.status(400).json({ ok: false, msg: 'bad request' });
    }
};