const db = require("../models/init");
const multer = require("multer");
const path = require("path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));


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

const PutFileValidationQA = (req, res) => {
  upload.single("validation")(req, res, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Error during upload", error: error.message });
    }

    console.log("File uploaded successfully:", req.file); // Log the uploaded file

    const { Status, No } = req.body;
    let Validation = null;

    if (req.file) {
      Validation = req.file.path.replace(/\\/g, "/").substring(7);
    }

    db.query(
      "UPDATE qualitya SET Status = ?, validation = ? WHERE No = ?",
      [Status, Validation, No],
      (error, results) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ message: "Internal server error" });
        }
        res.status(200).json({ message: "Data has been updated successfully" });
      }
    );
  });
};



const PutValidationQA = (req, res) => {
  const { Status, NamaPIC, Desc, Station, Area } = req.body;

  db.query(
    "UPDATE qualitya SET Status = ?, ValidationName = ?, ValidationDescription = ?, ValidationDate = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Status, NamaPIC, Desc, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};



const postRequestQA = (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan, Action, Department } = req.body;

  db.query(
    "INSERT INTO qualitya (Nama, Area, Line, Station, Problem, Action, Department) VALUES (?, ?, ?, ?, ?, ?, ?)",
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


const PutReturnQA = (req, res) => {
  const { Status, Department, Station, Area } = req.body;

  db.query(
    "UPDATE qualitya SET Status = ?, ReturnDepartment = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Status, Department, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
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
  getRequestQA,
  getValidationQA,
  PutValidationQA,
  PutReturnQA,
  PutFileValidationQA,
};
