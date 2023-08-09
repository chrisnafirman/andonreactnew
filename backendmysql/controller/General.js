const db = require("../models/init2");


const postRequestGeneral = (req, res) => {
    const { NamaPIC, Line, Station, Kerusakan } = req.body;

    db.query(
        "INSERT INTO general (Nama, Line, Station, Problem) VALUES (?, ?, ?, ?)",
        [NamaPIC, Line, Station, Kerusakan ],
        (error, results) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
          }
          res.status(200).json({ message: 'Data has been added successfully' });
        }
      );
    };

const postRequestOthers = (req, res) => {
    const { NamaPIC, Line, Department, Kerusakan } = req.body;

    db.query(
        "INSERT INTO others (Nama, Line, Department, Problem) VALUES (?, ?, ?, ?)",
        [NamaPIC, Line, Department, Kerusakan ],
        (error, results) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
          }
          res.status(200).json({ message: 'Data has been added successfully' });
        }
      );
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
