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
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation } = req.body;
  const Validation = req.file.path.replace(/\\/g, "/").substring(7); // mengubah backslash menjadi slash dan menghapus "./public"

  db.query(
    "INSERT INTO validationqa(NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, validation) VALUES (?, ?, ?, ?, ?, ?, ?)",
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

///post To QA
app.post("/api/post/QA", (req, res) => {
  const { NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan } = req.body;
  
  db.query(
    "INSERT INTO qualitya (NamaPIC, NpkPIC, MachineName, MachineArea, MachineLine, MachineStation, Kerusakan) VALUES (?, ?, ?, ?, ?, ?, ?)",
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


app.get("/api/get/QA",(req,res) => {
const sqlSelect = "SELECT * FROM qualitya";
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


app.listen(3001, () => {
  console.log("Running on port 3001");
});
