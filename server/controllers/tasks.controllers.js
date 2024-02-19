//import { pool } from '../src/db.js';

const { pool } = require('../src/db.js');

const getTasks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks ORDER BY dateCreated ASC");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

const getTask = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
        if (result.rows.length == 0) {
            return res.status(404).json("Task not found");
        }
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const result = await pool.query("INSERT INTO tasks (title, description) VALUES ($1, $2)", [title, description]);

        res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const result = await pool.query("UPDATE tasks SET title = $1, description = $2 WHERE id = $3", [req.body["title"], req.body["description"], req.params.id]);

        if (result.rowCount == 0) {
            return res.status(404).json("Task not found");
        }
        res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const result = await pool.query("DELETE FROM tasks WHERE id = $1", [req.params.id]);
        if (result.rowCount == 0) {
            return res.status(404).json("Task not found");
        }
        console.log(result);
        return res.sendStatus(204);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
  
}

module.exports = {
	getTasks,
	getTask,
	createTask,
	updateTask,
	deleteTask
};
