const db = require("../../models/init");


const PutDownTimeSPIBOT = (req, res) => {
    const { TimeSPIBot, SPIBot, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1",
      [TimeSPIBot, SPIBot, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }


  

// SPIBot
const getSPIBOTLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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



const getSPIBOTValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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






const getSPIBOTRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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

    getSPIBOTLeader,
    PutDownTimeSPIBOT,
    getSPIBOTRepair,
    getSPIBOTValidation,

    
};