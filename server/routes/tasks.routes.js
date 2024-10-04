const express = require('express');
const { createTask, deleteTask, getTask, getTasks, updateTask } = require('../controllers/tasks.controllers.js');

const router = express.Router();

router.get('/tasks', getTasks);

router.get('/tasks/:id', getTask);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

//export default router;

module.exports = router;
