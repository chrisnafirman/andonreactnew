const db = require("../models/init");


const postRequestMaintenance = (req, res) => {
  const { NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO maintenance (Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor],
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
  const { NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO returnmaintenance (Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor],
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
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE maintenance SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [NamaPIC, Status, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};

const PutReturnResponseMaintenance = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE returnmaintenance SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [NamaPIC, Status, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};

const PutRepairDoneMaintenance = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE maintenance SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Status, Department, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};

const PutReturnRepairDoneMaintenance = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE returnmaintenance SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Status, Department, Station, Area],
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
  PutRepairDoneMaintenance,

  
  PutReturnResponseMaintenance,
  PutReturnRepairDoneMaintenance,
};
