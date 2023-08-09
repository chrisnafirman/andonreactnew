const db = require("../models/init2");
const multer = require("multer");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const postRequestQA = (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan, Action } = req.body;

  db.query(
    "INSERT INTO qualitya (Nama, Area, Line, Station, Problem, Action) VALUES (?, ?, ?, ?, ?, ?)",
    [NamaPIC, Area, Line, Station, Kerusakan, Action],
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

const postValidationQA = (req, res) => {
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
      "INSERT INTO validationqa(Nama, Area, Line, Station, validation) VALUES (?, ?, ?, ?, ?)",
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

const getRequestQA = (req, res) => {
  const sqlSelect = "SELECT * FROM qualitya";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const getValidationQA = (req, res) => {
  const sqlSelect = "SELECT * FROM validationqa";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

module.exports = {
  postRequestQA,
  postValidationQA,
  getRequestQA,
  getValidationQA,
};
