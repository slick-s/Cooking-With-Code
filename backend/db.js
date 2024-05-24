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