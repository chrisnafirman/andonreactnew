const db = require("../models/init");
const sql = require('mssql');


const postRequestGeneral = (req, res) => {
  const { NamaPIC, Line, Station, Kerusakan } = req.body;

  const sqlQuery = `
    INSERT INTO digitalisasi.general (Nama, Line, Station, Problem)
    VALUES (@NamaPIC, @Line, @Station, @Kerusakan)
  `;

  const sqlRequest = new sql.Request(db); // Pass the db connection here

  sqlRequest.input('NamaPIC', sql.VarChar, NamaPIC);
  sqlRequest.input('Line', sql.VarChar, Line);
  sqlRequest.input('Station', sql.VarChar, Station);
  sqlRequest.input('Kerusakan', sql.VarChar, Kerusakan);

  sqlRequest.query(sqlQuery, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).json({ message: 'Data has been added successfully' });
  });
};






const postRequestOthers = (req, res) => {
  const { NamaPIC, Line, Station, Kerusakan } = req.body;

  const sqlQuery = `
    INSERT INTO digitalisasi.general (Nama, Line, Department, Problem)
    VALUES (@NamaPIC, @Line, @Department, @Kerusakan)
  `;

  const sqlRequest = new sql.Request(db); // Pass the db connection here

  sqlRequest.input('NamaPIC', sql.VarChar, NamaPIC);
  sqlRequest.input('Line', sql.VarChar, Line);
  sqlRequest.input('Department', sql.VarChar, Department);
  sqlRequest.input('Kerusakan', sql.VarChar, Kerusakan);

  sqlRequest.query(sqlQuery, (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.status(200).json({ message: 'Data has been added successfully' });
  });
};






const getRequestGeneral = (req, res) => {
  const sqlSelect = "SELECT * FROM general";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const getRequestOthers = (req, res) => {
  const sqlSelect = "SELECT * FROM others";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};





module.exports = {
    postRequestGeneral,
    postRequestOthers,
    getRequestGeneral,
    getRequestOthers,
};
