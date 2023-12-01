const db = require("../../models/init");


const PutDownTimeTouchup = (req, res) => {
    const { TimeTouchup, Touchup, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT' ORDER BY No DESC LIMIT 1",
      [TimeTouchup, Touchup, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has en updated successfully' });
      }
    );
  }

  
  

// Touchup
const getTouchupLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Touch UP' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will  the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};



const getTouchupValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Touch UP' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will  the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};






const getTouchupRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'Touch UP' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (last) row as it will  the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};








module.exports = {

    getTouchupLeader,
    PutDownTimeTouchup,
    getTouchupRepair,
    getTouchupValidation,

    
};