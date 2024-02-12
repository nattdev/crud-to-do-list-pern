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