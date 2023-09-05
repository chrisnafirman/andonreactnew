const db = require("../../models/init");


const PutDownTimeRVSBOT = (req, res) => {
    const { TimeRVSBot, RVSBot, Area } = req.body;
  
    db.query(
      "UPDATE quality SET DownTime = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
      [TimeRVSBot, RVSBot, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// RVSBOT
const getRVSBOTLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getRVSBOTMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

const getRVSBOTQuality = (req, res) => {
    const sqlSelect = "SELECT * FROM quality WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

const getRVSBOTOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM Others WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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


const getRVSBOTReturnMaintenance = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getRVSBOTReturnOthers = (req, res) => {
    const sqlSelect = "SELECT * FROM returnothers WHERE Station = 'RVS (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

    getRVSBOTLeader,
    PutDownTimeRVSBOT,
    getRVSBOTMaintenance,
    getRVSBOTQuality,
    getRVSBOTOthers,
    getRVSBOTReturnMaintenance,
    getRVSBOTReturnOthers,
};