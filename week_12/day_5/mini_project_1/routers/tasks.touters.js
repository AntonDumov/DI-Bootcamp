import express from 'express';
import { getAllTasks, getTaskByID, addNewTask, changeTaskByID, deleteTaskByID } from '../controllers/tasks.controllers.js';


export const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTaskByID);
router.post('/', addNewTask);
router.put('/:id', changeTaskByID);
router.delete('/:id', deleteTaskByID);
