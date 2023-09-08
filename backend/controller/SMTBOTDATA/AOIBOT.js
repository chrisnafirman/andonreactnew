const db = require("../../models/init");


const PutDownTimeAOIBOT = (req, res) => {
    const { TimeAOIBot, AOIBot, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1",
      [TimeAOIBot, AOIBot, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// AOIBOT
const getAOIBOTLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getAOIBOTMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

const getAOIBOTValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getAOIBOTOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM Others WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getAOIBOTReturnMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getAOIBOTReturnOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM returnothers WHERE Station = 'AOI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

    getAOIBOTLeader,
    PutDownTimeAOIBOT,
    getAOIBOTMaintenance,
    getAOIBOTValidation,
    getAOIBOTOthers,
    getAOIBOTReturnMaintenance,
    getAOIBOTReturnOthers,
};