const db = require("../../models/init");


const PutDownTimeSeho1BE = (req, res) => {
    const { TimeSeho1Be, Seho1Be, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1",
      [TimeSeho1Be, Seho1Be, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

  const PutDownTimeSeho1BEReturn = (req, res) => {
    const { TimeSeho1Be, Seho1Be, Area } = req.body;
  
    db.query(
      "UPDATE returnvalidation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1",
      [TimeSeho1Be, Seho1Be, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// Seho1Be
const getSeho1BELeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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



const getSeho1BEValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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

const getSeho1BEValidationReturn = (req, res) => {
    const sqlSelect = "SELECT * FROM returnvalidation WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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



const getSeho1BERepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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


const getSeho1BEReturnRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM returnrepair WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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

    getSeho1BELeader,
    PutDownTimeSeho1BE,
    getSeho1BERepair,
    getSeho1BEValidation,
    getSeho1BEReturnRepair,
    PutDownTimeSeho1BEReturn,
    getSeho1BEValidationReturn,
};