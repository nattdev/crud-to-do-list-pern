import { Router } from "express";
import { pool } from "../src/db.js";

const router = Router();

router.get('/ping', async (req, res) => {
    try {
        const result = await pool.query("SELECT 1+1 as result");
        console.log(result["rows"]);
        res.status(200).json({ message: 'Ping successful' });
    } catch (error) {
        console.error(error);
    }
});

export default router;
