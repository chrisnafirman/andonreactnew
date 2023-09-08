const db = require("../../models/init");


const PutDownTimeReflowTOP = (req, res) => {
    const { TimeReflowTop, ReflowTop, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1",
      [TimeReflowTop, ReflowTop, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// ReflowTop
const getReflowTOPLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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


const getReflowTOPMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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

const getReflowTOPValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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



const getReflowTOPOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM Others WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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


const getReflowTOPReturnMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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



const getReflowTOPReturnOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM returnothers WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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

    getReflowTOPLeader,
    PutDownTimeReflowTOP,
    getReflowTOPMaintenance,
    getReflowTOPValidation,
    getReflowTOPOthers,
    getReflowTOPReturnMaintenance,
    getReflowTOPReturnOthers,
};