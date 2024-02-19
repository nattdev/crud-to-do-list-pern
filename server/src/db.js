/*import pg from 'pg';
import {config} from './config.js';*/

const pg = require('pg');
// const { config } = require('./config.js');

const pool = new pg.Pool({
		connectionString: process.env.POSTGRES_URL ,
		//user: process.env.DB_USER || "postgres",
    //password: process.env.DB_PASSWORD || "123",
    //host: process.env.DB_HOST || "localhost",
    //port: process.env.DB_PORT || 5432,
    //database: process.env.DB_DATABASE || "tasksdb"
});

module.exports = { pool };

// pool.on('connect', () => console.log('DB connected'));
