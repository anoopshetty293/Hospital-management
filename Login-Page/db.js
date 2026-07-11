const { Pool } = require('pg'); 
const pool = new Pool({ 
user: 'postgres', 
host: 'localhost', 
database: 'HospitalDB', 
password: 'somethingofsort', 
port: 5432 
});

module.exports = pool;