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

const PutFileValidation = (req, res) => {
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
      "UPDATE validation SET Status = ?, validation = ? WHERE No = ?",
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



const PutValidation = (req, res) => {
  const { Status, NamaPIC, Desc, Station, Area } = req.body;

  db.query(
    "UPDATE validation SET Status = ?, ValidationName = ?, ValidationDescription = ?, ValidationDate = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
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







const postRequestValidation = (req, res) => {
  const { Uid, NamaPIC, Area, Line, Station, Kerusakan, Action, Department, Requestor } = req.body;

  db.query(
    "INSERT INTO validation (Uid, Nama, Area, Line, Station, Problem, Action, DepartTo, Requestor) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [Uid, NamaPIC, Area, Line, Station, Kerusakan, Action, Department, Requestor],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been added successfully' });
    }
  );
};




const PutResponseValidation = (req, res) => {
  const { NamaPIC, Status, Station, Area} = req.body;

  db.query(
    "UPDATE validation SET ValidationName = ?, Status = ?, ResponseValidation = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [NamaPIC, Status, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};





const PutStatusReturnValidation = (req, res) => {
  const { Uid, Status, NamaPIC, Department, Kerusakan, Station, Area } = req.body;

  db.query(
    "UPDATE validation SET UidReturn = ?, Status = ?, ValidationName = ?, ReturnDepartment = ?, ValidationDescription = ?, ValidationDate = NOW() WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Status, NamaPIC, Department, Kerusakan, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};






const PutUidValidation = (req, res) => {
  const { Uid, Station, Area } = req.body;

  db.query(
    "UPDATE validation SET Uid = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [Uid, Station, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};





const getRequestValidation = (req, res) => {
  const sqlSelect = "SELECT * FROM validation";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};











module.exports = {
  postRequestValidation,
  getRequestValidation,
  PutValidation,
  PutFileValidation,
  PutUidValidation,
  PutResponseValidation,
  PutStatusReturnValidation,
};
