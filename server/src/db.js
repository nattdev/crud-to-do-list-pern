import pg from 'pg';
import {config} from './config.js';

export const pool = new pg.Pool({
    user: process.env.DB_HOST || config.DB_USER,
    password: process.env.DB_PASSWORD || config.DB_PASSWORD,
    host: process.env.DB_HOST || config.DB_HOST,
    port: process.env.DB_PORT || config.DB_PORT,
    database: process.env.DB_DATABASE || config.DB_DATABASE
});

// pool.on('connect', () => console.log('DB connected'));