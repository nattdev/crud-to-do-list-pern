require('dotenv').config()

const pg = require('pg');
let dbConfig;

if (process.env.NODE_ENV === 'development') {
  dbConfig = {
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_DATABASE
  };
} else {
  dbConfig = {
    connectionString: process.env.POSTGRES_URL,
  };
}

const pool = new pg.Pool(dbConfig);

module.exports = { pool };
