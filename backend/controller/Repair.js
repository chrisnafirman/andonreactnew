const db = require("../models/init");


const postRequestRepair = (req, res) => {
  const { Uid, NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO repair (Uid, Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [Uid, NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
};


const postReturnRepair = (req, res) => {
  const { Uid, NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO returnrepair (Uid, Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [Uid, NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
};




const PutResponseRepair = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE repair SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutReturnResponseRepair = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE returnrepair SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutRepairDone = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE repair SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutReturnRepairDone = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE returnrepair SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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


const PutUidRepair = (req, res) => {
  const { Uid, Station, Area } = req.body;

  db.query(
    "UPDATE repair SET Uid = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};


const PutUidReturnRepair = (req, res) => {
  const { Uid, Station, Area } = req.body;

  db.query(
    "UPDATE returnrepair SET Uid = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};



const getRequestRepair = (req, res) => {
  const sqlSelect = "SELECT * FROM repair";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const getReturnRepair = (req, res) => {
  const sqlSelect = "SELECT * FROM returnrepair";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};




module.exports = {
  postRequestRepair,
  postReturnRepair,
  getRequestRepair,
  getReturnRepair,
  PutResponseRepair,
  PutRepairDone,
  PutReturnResponseRepair,
  PutReturnRepairDone,
  PutUidRepair,
  PutUidReturnRepair,
};
