import { pool } from '../src/db.js';

export const getTasks = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks");
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
};

export const getTask = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [req.params.id]);
        if (result.rows.length == 0) {
            return res.status(404).json("Message not found");
        }
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}

export const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        const result = await pool.query("INSERT INTO tasks (title, description) VALUES ($1, $2)", [title, description]);

        res.json(result);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: error.message });
    }
}