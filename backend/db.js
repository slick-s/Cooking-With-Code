
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
=======
const Pool = require('pg').Pool
require('dotenv').config()
 
const pool = new Pool({
  user: 'postgres',
  password: '2483',
  host: 'localhost',
  port: 5432,
  database: 'recipes_api',
})

module.exports = pool;
