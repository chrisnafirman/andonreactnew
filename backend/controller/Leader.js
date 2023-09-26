const db = require("../models/init");


const postRequestLeader = (req, res) => {
  const { NamaPIC, Area, Line, Station } = req.body;

  db.query(
    "INSERT INTO leader (Nama, Area, Line, Station) VALUES (?, ?, ?, ?)",
    [NamaPIC, Area, Line, Station],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
};


const PutStatusLeader = (req, res) => {
  const { Uid, Status, Department, Station, Area } = req.body;

  db.query(
    "UPDATE leader SET Uid = ?, Status = ?, DepartTo = ?, Dateout = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Status, Department, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};



const PutRejectStatusLeader = (req, res) => {
  const { Uid, Status, Station, Area } = req.body;

  db.query(
    "UPDATE leader SET Uid = ?, Status = ?, Dateout = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Status, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};





const PutUidLeader = (req, res) => {
  const { Uid, Station, Area } = req.body;

  db.query(
    "UPDATE leader SET Uid = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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





const getRequestLeader = (req, res) => {
  const sqlSelect = "SELECT * FROM leader";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};



const DeleteReject = (req, res) => {
  const itemId = req.params.id; // Get the item ID from the URL parameter

  db.query(
    "DELETE FROM leader WHERE No = ?",
    [itemId],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been deleted successfully' });
    }
  );
};






module.exports = {
  postRequestLeader,
  getRequestLeader,
  PutStatusLeader,
  DeleteReject,
  PutUidLeader,
  PutRejectStatusLeader,
};
