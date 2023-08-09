const sql = require('mssql');
require('dotenv').config();

const config = {
  user: process.env.DB_USER,
  server: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PWD,
  options: {
    encrypt: true,
    trustServerCertificate: true, 
  },
};


const db = new sql.ConnectionPool(config);

db.connect((err) => {
  if (err) {
    console.error('Failed to connect to database:', err);
  } else {
    console.log('Connected to database');
  }
});

module.exports = db;
