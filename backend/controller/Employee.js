const db = require("../models/init");


const getRequestEmployee = (req, res) => {
    const sqlSelect = "SELECT nama_emp FROM employee WHERE jabatan = 'Operator' ";
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
    const sqlSelect = "SELECT nama_emp FROM employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor') and departement = 'MANUFACTURING' ";
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
    const sqlSelect = "SELECT nama_emp FROM employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor') AND departement = 'MAINTENANCE & IT'";

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
    const sqlSelect = "SELECT nama_emp FROM employee WHERE jabatan IN ('Operator', 'Staff', 'Leader', 'Supervisor') AND departement = 'QUALITY'";

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
