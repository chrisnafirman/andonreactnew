const db = require("../models/init");


// PrinterBOT
const getUMPrinterBOTLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterBOTLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterBOTLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterBOTLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterBOTLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Printer (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
      ) AS combined_data
      ORDER BY Date DESC
      LIMIT 1;
    `;

    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (latest) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};




// SPIBOT
const getUMSPIBOTLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMSPIBOTLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMSPIBOTLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMSPIBOTLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMSPIBOTLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'SPI (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
      ) AS combined_data
      ORDER BY Date DESC
      LIMIT 1;
    `;

    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (latest) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};


// PickNPlaceBOT
const getUMPickNPlaceBOTLine1 = (req, res) => {
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
const getUMPickNPlaceBOTLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceBOTLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceBOTLine1Return = (req, res) => {
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
const getUMPickNPlaceBOTLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Pick&Place (BOT)' AND Line = 'SMT LINE 1' AND Area = 'SMT BOT'
      ) AS combined_data
      ORDER BY Date DESC
      LIMIT 1;
    `;

    db.query(sqlSelect, (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).send("Error fetching data from the database.");
        } else {
            if (results.length > 0) {
                res.send(results[0]); // Send the first (latest) row as it will be the latest entry.
            } else {
                res.status(404).send("No data found.");
            }
        }
    });
};





module.exports = {

    getUMPrinterBOTLine1,
    getUMPrinterBOTLine1QA,
    getUMPrinterBOTLine1QC,
    getUMPrinterBOTLine1Return,
    getUMPrinterBOTLine1ValQuality,


    getUMSPIBOTLine1,
    getUMSPIBOTLine1QA,
    getUMSPIBOTLine1QC,
    getUMSPIBOTLine1Return,
    getUMSPIBOTLine1ValQuality,


    
    getUMPickNPlaceBOTLine1,
    getUMPickNPlaceBOTLine1QA,
    getUMPickNPlaceBOTLine1QC,
    getUMPickNPlaceBOTLine1Return,
    getUMPickNPlaceBOTLine1ValQuality,



};