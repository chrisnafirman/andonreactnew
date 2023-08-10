const db = require("../models/init");


const postRequestMaintenance = (req, res) => {
  const { NamaPIC, Area, Line, Department, Station, Kerusakan } = req.body;

  db.query(
    "INSERT INTO maintenance (Nama, Area, Line, Department, Station, Problem) VALUES (?, ?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Department, Station, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
};

const postReturnMaintenance = (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan } = req.body;

  db.query(
    "INSERT INTO returnmaintenance (Nama, Area, Line, Station, Problem) VALUES (?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Station, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
};

const PutResponseMaintenance = (req, res) => {
  const { NamaPIC, Action, Station, Area} = req.body;

  db.query(
    "UPDATE maintenance SET ResponseName = ?, Action = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [NamaPIC, Action, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};


const getRequestMaintenance = (req, res) => {
  const sqlSelect = "SELECT * FROM maintenance";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const getReturnMaintenance = (req, res) => {
  const sqlSelect = "SELECT * FROM returnmaintenance";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};




module.exports = {
  postRequestMaintenance,
  postReturnMaintenance,
  getRequestMaintenance,
  getReturnMaintenance,
  PutResponseMaintenance,
};
