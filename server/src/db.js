const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'education',
    password: 'zapm1907',
    port: '5432',
});

module.exports = { pool };