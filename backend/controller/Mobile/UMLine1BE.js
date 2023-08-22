const db = require("../../models/init");


// DropinBE
const getUMDropinBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMDropinBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMDropinBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMDropinBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMDropinBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Drop in (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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

// FluxerBE
const getUMFluxerBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFluxerBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFluxerBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFluxerBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFluxerBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Fluxer (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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

// PreHeatBE
const getUMPreHeatBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMPreHeatBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMPreHeatBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMPreHeatBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMPreHeatBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'PreHeat (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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


// Seho1BE
const getUMSeho1BELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho1BELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho1BELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho1BELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho1BELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Seho1 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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



// Seho2BE
const getUMSeho2BELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho2BELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho2BELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho2BELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMSeho2BELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Seho2 (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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


// TouchupBE
const getUMTouchupBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMTouchupBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMTouchupBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMTouchupBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMTouchupBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Touch UP (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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

// ICTBE
const getUMICTBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMICTBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMICTBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMICTBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMICTBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'ICT (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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


// FlashBE
const getUMFlashBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFlashBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFlashBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFlashBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMFlashBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Flash (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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


// RouterBE
const getUMRouterBELine1 = (req, res) => {
    const sqlSelect = "SELECT * FROM maintenance WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMRouterBELine1QA = (req, res) => {
    const sqlSelect = "SELECT * FROM qualitya WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMRouterBELine1QC = (req, res) => {
    const sqlSelect = "SELECT * FROM qualityc WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMRouterBELine1Return = (req, res) => {
    const sqlSelect = "SELECT * FROM returnmaintenance WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE' ORDER BY No DESC LIMIT 1";
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
const getUMRouterBELine1ValQuality = (req, res) => {
    const sqlSelect = `
      SELECT * FROM (
        SELECT * FROM validationqa WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
        UNION ALL
        SELECT * FROM validationqc WHERE Station = 'Router (BE)' AND Line = 'SMT LINE 1' AND Area = 'SMT BE'
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

    getUMDropinBELine1,
    getUMDropinBELine1QA,
    getUMDropinBELine1QC,
    getUMDropinBELine1Return,
    getUMDropinBELine1ValQuality,

    getUMFluxerBELine1,
    getUMFluxerBELine1QA,
    getUMFluxerBELine1QC,
    getUMFluxerBELine1Return,
    getUMFluxerBELine1ValQuality,

    getUMPreHeatBELine1,
    getUMPreHeatBELine1QA,
    getUMPreHeatBELine1QC,
    getUMPreHeatBELine1Return,
    getUMPreHeatBELine1ValQuality,

    getUMSeho1BELine1,
    getUMSeho1BELine1QA,
    getUMSeho1BELine1QC,
    getUMSeho1BELine1Return,
    getUMSeho1BELine1ValQuality,

    getUMSeho2BELine1,
    getUMSeho2BELine1QA,
    getUMSeho2BELine1QC,
    getUMSeho2BELine1Return,
    getUMSeho2BELine1ValQuality,

    getUMTouchupBELine1,
    getUMTouchupBELine1QA,
    getUMTouchupBELine1QC,
    getUMTouchupBELine1Return,
    getUMTouchupBELine1ValQuality,

    getUMICTBELine1,
    getUMICTBELine1QA,
    getUMICTBELine1QC,
    getUMICTBELine1Return,
    getUMICTBELine1ValQuality,

    getUMFlashBELine1,
    getUMFlashBELine1QA,
    getUMFlashBELine1QC,
    getUMFlashBELine1Return,
    getUMFlashBELine1ValQuality,

    getUMRouterBELine1,
    getUMRouterBELine1QA,
    getUMRouterBELine1QC,
    getUMRouterBELine1Return,
    getUMRouterBELine1ValQuality,

};