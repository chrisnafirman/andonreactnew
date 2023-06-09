const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
const multer = require("multer");
const path = require ("path");



app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "andoniot",
});



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
        "-" +
        Date.now() +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage });

app.post("/api/post/validationqa", upload.single("validation"), (req, res) => {
  const { NamaPIC, NpkPIC, Area, Line, Station } = req.body;
  const Validation = req.file.path.replace(/\\/g, "/").substring(7); // mengubah backslash menjadi slash dan menghapus "./public"

  db.query(
    
    "INSERT INTO validationqa(NamaPIC, NpkPIC, Area, Line, Station, validation) VALUES (?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, Area,Line,Station, Validation],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
});


app.post("/api/post/validationqc", upload.single("validation"), (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation } = req.body;
  const Validation = req.file.path.replace(/\\/g, "/").substring(7); // mengubah backslash menjadi slash dan menghapus "./public"

  db.query(
    "INSERT INTO validationqc(NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, validation) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Validation],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({ message: "Data has been added successfully" });
    }
  );
});


// Define a global variable to store the previous status
let prevStatus = "";

app.post("/api/post/data", (req, res) => {
  const status = req.body.status;
  const mesin = req.body.mesin;
  const line = req.body.line;
  const timer = req.body.timer;

  // Validate input
  if (!status || !mesin || !line || !timer) {
    return res.status(400).send("Invalid input");
  }

  // Only insert to the database if the status has changed
  if (prevStatus !== status) {
    db.query(
      "INSERT INTO data (status, mesin, line, timer) VALUES (?, ?, ?, ?)",
      [status, mesin, line, timer],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.send(error);
        }
        res.send("Data has been added successfully");
      }
    );
    // Update the previous status
    prevStatus = status;
  }
});

// post red / kerusakan

app.post("/api/post/datakerusakan", (req, res) => {
  const status = req.body.status;
  const mesin = req.body.mesin;
  const line = req.body.line;
  const timer = req.body.timer;npm 

  // Validate input
  if (!status || !mesin || !line || !timer) {
    return res.status(400).send("Invalid input");
  }

  db.query(
    "INSERT INTO datakerusakan (status2, mesin2, line2, timer2, kerusakan2) VALUES (?, ?, ?, ?, ?)",
    [status, mesin, line, timer, req.body.kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.send(error);
      }
      res.send("Data has been added successfully");
    }
  );
});



///post PPIC
app.post("/api/post/PPIC", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO ppic (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});


/// Purchasing
app.post("/api/post/PURCHASING", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO purchasing (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});



///post PPIC
app.post("/api/post/ReturnPPIC", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO returnppic (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});

///post PPIC
app.post("/api/post/ReturnPURCHASING", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO returnpurchasing (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});




///post To QA
app.post("/api/post/QA", (req, res) => {
  const { NamaPIC, NpkPIC,  Area, Line, Station, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO qualitya (NamaPIC, NpkPIC,  Area, Line, Station, Kerusakan) VALUES (?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, Area, Line, Station, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});



///post To QC
app.post("/api/post/QC", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO qualityc (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});




app.post("/api/post/Inputsche", (req, res) => {
  const { SHIFT, PT1_IN,  PT1_OUT, PT2_IN, PT2_OUT, PT3_IN, PT3_OUT, PT4_IN,  PT4_OUT,  BR1_IN, BR1_OUT, BR2_IN, BR2_OUT, BR3_IN, BR3_OUT, BR4_IN, BR4_OUT, PD_IN,  PD_OUT,  OT_IN, OT_OUT,  PP, PD, CMA, PDATE } = req.body;
  
  db.query(
    "INSERT INTO scheprod (SHIFT, PT1_IN,  PT1_OUT, PT2_IN, PT2_OUT, PT3_IN, PT3_OUT, PT4_IN,  PT4_OUT,  BR1_IN, BR1_OUT, BR2_IN, BR2_OUT, BR3_IN, BR3_OUT, BR4_IN, BR4_OUT, PD_IN,  PD_OUT,  OT_IN, OT_OUT,  PP, PD, CMA, PDATE) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [SHIFT, PT1_IN,  PT1_OUT, PT2_IN, PT2_OUT, PT3_IN, PT3_OUT, PT4_IN,  PT4_OUT,  BR1_IN, BR1_OUT, BR2_IN, BR2_OUT, BR3_IN, BR3_OUT, BR4_IN, BR4_OUT, PD_IN,  PD_OUT,  OT_IN, OT_OUT,  PP, PD, CMA, PDATE],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});


app.put("/api/put/ResultsCMA", (req, res) => {
  const { ResultsCMA } = req.body;
  
  db.query(
    "UPDATE scheprod SET ResultsCMA = ? ORDER BY No DESC LIMIT 1",
    [ResultsCMA],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
});



app.put("/api/put/RealProductionTime", (req, res) => {
  const { RealPT1, RealPT2, RealPT3, RealPT4, RealPD, RealOT, Total } = req.body;

  db.query(
    "UPDATE scheprod SET RealPT1 = ?, RealPT2 = ?, RealPT3 = ?, RealPT4 = ?, RealPD = ?, RealOT = ?, Total = ? ORDER BY No DESC LIMIT 1",
    [RealPT1, RealPT2, RealPT3, RealPT4, RealPD, RealOT, Total],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
});





// SMT LINE 1
///post To network

app.post("/api/post/network", (req, res) => {
  const { NamaPIC, Line, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO network (Nama, Line, Problem) VALUES (?, ?, ?)",
    [NamaPIC, Line, Kerusakan ],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});


///post To network

app.post("/api/post/Maintenance", (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO maintenance (Nama, Area, Line, Station, Problem) VALUES (?, ?, ?, ?, ?)",
    [ NamaPIC, Area, Line, Station, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});


app.post("/api/post/ReturnMaintenance", (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO returnmaintenance (Nama, Area, Line, Station, Problem) VALUES (?, ?, ?, ?, ?)",
    [ NamaPIC, Area, Line, Station, Kerusakan],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
});





app.get("/api/get/Inputsche", (req, res) => {
  const sqlSelect = "SELECT * FROM scheprod";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/data", (req, res) => {
  const sqlSelect = "SELECT * FROM data";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/PPIC", (req, res) => {
  const sqlSelect = "SELECT * FROM ppic";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/PURCHASING", (req, res) => {
  const sqlSelect = "SELECT * FROM purchasing";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/QA",(req,res) => {
const sqlSelect = "SELECT * FROM qualitya";
db.query(sqlSelect,(err,results) =>  {
  res.send(results);
})
});

app.get("/api/get/QC",(req,res) => {
  const sqlSelect = "SELECT * FROM qualityc";
  db.query(sqlSelect,(err,results) =>  {
    res.send(results);
  })
  });

app.get("/api/get/datakerusakan", (req, res) => {
  const sqlSelect = "SELECT * FROM datakerusakan";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/validationqa", (req, res) => {
  const sqlSelect = "SELECT * FROM validationqa";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/validationqc", (req, res) => {
  const sqlSelect = "SELECT * FROM validationqc";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/ReturnPPIC", (req, res) => {
  const sqlSelect = "SELECT * FROM returnppic";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.get("/api/get/ReturnPURCHASING", (req, res) => {
  const sqlSelect = "SELECT * FROM returnpurchasing";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/Network", (req, res) => {
  const sqlSelect = "SELECT * FROM network";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/Maintenance", (req, res) => {
  const sqlSelect = "SELECT * FROM maintenance";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});


app.get("/api/get/ReturnMaintenance", (req, res) => {
  const sqlSelect = "SELECT * FROM returnmaintenance";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
