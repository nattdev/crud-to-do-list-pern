import { Router } from 'express';
import { pool } from '../src/db.js';

const router = Router();

router.get('/tasks', (req, res) => { res.send("Get Tasks")  });

router.get('/tasks/:id', (req, res) => { res.send("Get Task:id:" + req.params.id) });

router.post('/tasks/:id', (req, res) => { res.send("Create Task:id:" + req.params.id) });

router.put('/tasks/:id', (req, res) => { res.send("Update Task:id:" + req.params.id) });

router.delete('/tasks/:id', (req, res) => { res.send("Delete Task:id:" + req.params.id) });

export default router;