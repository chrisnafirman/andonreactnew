const db = require("../../models/init");


const PutDownTimePickNPlaceBOT = (req, res) => {
    const { TimePickNPlaceBot, PickNPlaceBot, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1",
      [TimePickNPlaceBot, PickNPlaceBot, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

  const PutDownTimePickNPlaceBOTReturn = (req, res) => {
    const { TimePickNPlaceBot, PickNPlaceBot, Area } = req.body;
  
    db.query(
      "UPDATE returnvalidation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1",
      [TimePickNPlaceBot, PickNPlaceBot, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// PickNPlaceBot
const getPickNPlaceBOTLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getPickNPlaceBOTValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

const getPickNPlaceBOTValidationReturn = (req, res) => {
    const sqlSelect = "SELECT * FROM returnvalidation WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getPickNPlaceBOTRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getPickNPlaceBOTReturnRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM returnrepair WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

    getPickNPlaceBOTLeader,
    PutDownTimePickNPlaceBOT,
    getPickNPlaceBOTRepair,
    getPickNPlaceBOTValidation,
    getPickNPlaceBOTReturnRepair,
    PutDownTimePickNPlaceBOTReturn,
    getPickNPlaceBOTValidationReturn,
};