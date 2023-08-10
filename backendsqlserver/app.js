const express = require('express');
const path = require('path');
const cors = require('cors');
const sql = require('mssql');
const dotenv = require('dotenv');

dotenv.config(); // Load the configuration from .env file

const app = express();
const router = require('./routers/router');

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.use(express.json());

app.use('/api', router);

const startServer = () => {
  app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });
};

const db = require('./models/init');
db.connect()
  .then(() => {
    console.log('Connected to SQL Server');
    startServer();
  })
  .catch((err) => {
    console.error('Failed to connect to SQL Server', err);
  });

