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

// PickNPlaceBOT
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


const getPickNPlaceBOTMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getPickNPlaceBOTOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM Others WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getPickNPlaceBOTReturnMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getPickNPlaceBOTReturnOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM returnothers WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
    getPickNPlaceBOTMaintenance,
    getPickNPlaceBOTValidation,
    getPickNPlaceBOTOthers,
    getPickNPlaceBOTReturnMaintenance,
    getPickNPlaceBOTReturnOthers,
};