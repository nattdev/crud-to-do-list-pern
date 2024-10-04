const { Router } = require('express');
const { pool } = require('../src/db.js');

const router = Router();

router.get('/ping', async (req, res) => {
    try {
        const result = await pool.query("SELECT 1+1 as result");
        res.status(200).json({ message: 'Ping successful' });
    } catch (error) {
        console.error(error);
    }
});

// export default router;
module.exports = router;
