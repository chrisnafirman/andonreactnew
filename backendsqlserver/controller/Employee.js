const db = require("../models/init");


const getRequestEmployee = (req, res) => {
  const sqlSelect = "SELECT nama_emp FROM digitalisasi.employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor', 'Manager') ";
  db.query(sqlSelect, (err, results) => {
    if (err) {
      // Handle error
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(results);
    }
  });
};

  
  
const getRequestEmployeeOperatorManufacturing = (req, res) => {
  const sqlSelect = "SELECT nama_emp FROM digitalisasi.employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor', 'Manager') and departement = 'MANUFACTURING' ";
  db.query(sqlSelect, (err, results) => {
    if (err) {
      // Handle error
      console.log(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.send(results);
    }
  });
};




  const getRequestEmployeeTeamMaintenance = (req, res) => {
    const sqlSelect = "SELECT nama_emp FROM digitalisasi.employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor', 'Manager') AND departement = 'MAINTENANCE & IT'";

    db.query(sqlSelect, (err, results) => {
      if (err) {
        // Handle error
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(results);
      }
    });
  };


  const getRequestEmployeeTeamQuality = (req, res) => {
    const sqlSelect = "SELECT nama_emp FROM digitalisasi.employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor', 'Manager') AND departement = 'QUALITY'";

    db.query(sqlSelect, (err, results) => {
      if (err) {
        // Handle error
        console.log(err);
        res.status(500).send("Internal Server Error");
      } else {
        res.send(results);
      }
    });
  };
  



module.exports = {
    getRequestEmployee,
    getRequestEmployeeOperatorManufacturing,
    getRequestEmployeeTeamMaintenance,
    getRequestEmployeeTeamQuality,
};
