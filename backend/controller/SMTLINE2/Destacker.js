const db = require("../../models/init");


const PutDownTimeDestacker = (req, res) => {
    const { TimeDestacker, Destacker, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT' ORDER BY No DESC LIMIT 1",
      [TimeDestacker, Destacker, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

 
  

// Destacker
const getDestackerLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Destacker' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
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




const getDestackerValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Destacker' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
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






const getDestackerRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'Destacker' AND Line = 'SMT LINE 2' AND Area = 'SMT' ORDER BY No DESC LIMIT 1";
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

    getDestackerLeader,
    PutDownTimeDestacker,
    getDestackerRepair,
    getDestackerValidation,
 
    
};