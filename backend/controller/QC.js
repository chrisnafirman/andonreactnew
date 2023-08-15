const db = require("../models/init");
const multer = require("multer");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const postRequestQC = (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan, Action, Department } = req.body;

  db.query(
    "INSERT INTO qualityc (Nama, Area, Line, Station, Problem, Action, Department) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Station, Kerusakan, Action, Department],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
};

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

const postValidationQC = (req, res) => {
  upload.single("validation")(req, res, (error) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server error" });
    }

    const { NamaPIC, Area, Line, Station } = req.body;
    let Validation = null;

    if (req.file) {
      // Jika ada file 'validation', ambil path-nya dan ubah ke format yang diinginkan
      Validation = req.file.path.replace(/\\/g, "/").substring(7);
    }

    db.query(
      "INSERT INTO validationqc(Nama, Area, Line, Station, validation) VALUES (?, ?, ?, ?, ?)",
      [NamaPIC, Area, Line, Station, Validation],
      (error, results) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(200).json({ message: "Data has been added successfully" });
      }
    );
  });
};


const getRequestQC = (req, res) => {
  const sqlSelect = "SELECT * FROM qualityc";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const getValidationQC = (req, res) => {
  const sqlSelect = "SELECT * FROM validationqc";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

module.exports = {
  postRequestQC,
  postValidationQC,
  getRequestQC,
  getValidationQC,
};
