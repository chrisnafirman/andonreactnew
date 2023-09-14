const db = require("../../models/init");


const PutDownTimeICTBE = (req, res) => {
    const { TimeICTBe, ICTBe, Area } = req.body;
  
    db.query(
      "UPDATE validation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1",
      [TimeICTBe, ICTBe, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

  const PutDownTimeICTBEReturn = (req, res) => {
    const { TimeICTBe, ICTBe, Area } = req.body;
  
    db.query(
      "UPDATE returnvalidation SET DownTime = ? WHERE Station = ? AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1",
      [TimeICTBe, ICTBe, Area],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Data has been updated successfully' });
      }
    );
  }

// ICTBe
const getICTBELeader = (req, res) => {
    const sqlSelect = "SELECT * FROM leader WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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



const getICTBEValidation = (req, res) => {
    const sqlSelect = "SELECT * FROM validation WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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

const getICTBEValidationReturn = (req, res) => {
    const sqlSelect = "SELECT * FROM returnvalidation WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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



const getICTBERepair = (req, res) => {
    const sqlSelect = "SELECT * FROM repair WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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


const getICTBEReturnRepair = (req, res) => {
    const sqlSelect = "SELECT * FROM returnrepair WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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

    getICTBELeader,
    PutDownTimeICTBE,
    getICTBERepair,
    getICTBEValidation,
    getICTBEReturnRepair,
    PutDownTimeICTBEReturn,
    getICTBEValidationReturn,
};