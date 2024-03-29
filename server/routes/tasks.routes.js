/*import { Router } from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask } from '../controllers/tasks.controllers.js';*/

const express = require('express');
const { createTask, deleteTask, getTask, getTasks, updateTask } = require('../controllers/tasks.controllers.js');

//const router = Router();

const router = express.Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

//export default router;

module.exports = router;
