const db = require("../models/init");


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
  const { NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO others (Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?)",
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

const postReturnOthers = (req, res) => {
  const { NamaPIC, Area, Line, Department, Station, Kerusakan, Requestor } = req.body;

  db.query(
    "INSERT INTO returnothers (Nama, Area, Line, Department, Station, Problem, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?)",
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




const PutResponseOthers = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE others SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutReturnResponseOthers = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE returnothers SET ResponseName = ?, Status = ?, ResponseTime = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutRepairDoneOthers = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE others SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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

const PutReturnRepairDoneOthers = (req, res) => {
  const {Status, Department, Station, Area} = req.body;

  db.query(
    "UPDATE returnothers SET Status = ?, DepartTo = ?, ResponseDone = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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


const getReturnOthers = (req, res) => {
  const sqlSelect = "SELECT * FROM returnothers";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};


module.exports = {
    postRequestGeneral,
    getRequestGeneral,


    postRequestOthers,
    getRequestOthers,
    postReturnOthers,
    getReturnOthers,

    PutResponseOthers,
    PutRepairDoneOthers,
  
    
    PutReturnResponseOthers,
    PutReturnRepairDoneOthers,
};
