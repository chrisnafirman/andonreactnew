const db = require("../../models/init");


const PutDownTimeDestackerTOP = (req, res) => {
    const { TimeDestackerTop, DestackerTop, Area } = req.body;
  
    db.query(
      "UPDATE quality SET DownTime = ? WHERE Station = ? AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1",
      [TimeDestackerTop, DestackerTop, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// DestackerTop
const getDestackerTOPLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};


const getDestackerTOPMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};

const getDestackerTOPQuality = (req, res) => {
    const sqlSelect = "SELECT * FROM quality WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};

const getDestackerTOPOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM Others WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};


const getDestackerTOPReturnMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};



const getDestackerTOPReturnOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM returnothers WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};


module.exports = {

    getDestackerTOPLeader,
    PutDownTimeDestackerTOP,
    getDestackerTOPMaintenance,
    getDestackerTOPQuality,
    getDestackerTOPOthers,
    getDestackerTOPReturnMaintenance,
    getDestackerTOPReturnOthers,
};