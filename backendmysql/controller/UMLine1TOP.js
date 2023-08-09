const db = require("../models/init2");


// DestackerTop
const getUMDestackerTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMDestackerTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMDestackerTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMDestackerTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMDestackerTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Destacker (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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



// LabelTop
const getUMLabelTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMLabelTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMLabelTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMLabelTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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

const getUMLabelTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Label (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............


// PrinterTop
const getUMPrinterTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPrinterTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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

const getUMPrinterTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Printer (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............

// SpiTop
const getUMSpiTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMSpiTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMSpiTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMSpiTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMSpiTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Spi (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............



// PickNPlaceTop
const getUMPickNPlaceTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMPickNPlaceTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Pick&Place (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............

// ReflowTop
const getUMReflowTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMReflowTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMReflowTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMReflowTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMReflowTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Reflow (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............

// AOITop
const getUMAOITOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMAOITOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMAOITOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMAOITOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMAOITOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'AOI (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............


// RVSTop
const getUMRVSTOPLine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMRVSTOPLine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMRVSTOPLine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMRVSTOPLine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP' ORDER BY No DESC LIMIT 1";
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
const getUMRVSTOPLine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'RVS (TOP)' AND Line = 'SMT LINE 1' AND Area = 'SMT TOP'
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
// ...............



module.exports = {

    getUMDestackerTOPLine1,
    getUMDestackerTOPLine1QA,
    getUMDestackerTOPLine1QC,
    getUMDestackerTOPLine1Return,
    getUMDestackerTOPLine1ValQuality,

    getUMLabelTOPLine1,
    getUMLabelTOPLine1QA,
    getUMLabelTOPLine1QC,
    getUMLabelTOPLine1Return,
    getUMLabelTOPLine1ValQuality,

    getUMPrinterTOPLine1,
    getUMPrinterTOPLine1QA,
    getUMPrinterTOPLine1QC,
    getUMPrinterTOPLine1Return,
    getUMPrinterTOPLine1ValQuality,

    getUMSpiTOPLine1,
    getUMSpiTOPLine1QA,
    getUMSpiTOPLine1QC,
    getUMSpiTOPLine1Return,
    getUMSpiTOPLine1ValQuality,

    getUMPickNPlaceTOPLine1,
    getUMPickNPlaceTOPLine1QA,
    getUMPickNPlaceTOPLine1QC,
    getUMPickNPlaceTOPLine1Return,
    getUMPickNPlaceTOPLine1ValQuality,

    getUMReflowTOPLine1,
    getUMReflowTOPLine1QA,
    getUMReflowTOPLine1QC,
    getUMReflowTOPLine1Return,
    getUMReflowTOPLine1ValQuality,

    getUMAOITOPLine1,
    getUMAOITOPLine1QA,
    getUMAOITOPLine1QC,
    getUMAOITOPLine1Return,
    getUMAOITOPLine1ValQuality,


    
    getUMRVSTOPLine1,
    getUMRVSTOPLine1QA,
    getUMRVSTOPLine1QC,
    getUMRVSTOPLine1Return,
    getUMRVSTOPLine1ValQuality,


};