const db = require("../../models/init");


const PutDownTimePrinterTOP = (req, res) => {
    const { TimePrinterTop, PrinterTop, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1",
      [TimePrinterTop, PrinterTop, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// PrinterTop
const getPrinterTOPLeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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



const getPrinterTOPValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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



const getPrinterTOPRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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


const getPrinterTOPReturnRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM returnrepair WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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

    getPrinterTOPLeader,
    PutDownTimePrinterTOP,
    getPrinterTOPRepair,
    getPrinterTOPValidation,
    getPrinterTOPReturnRepair,
};