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
  
  
  
  



module.exports = {
    getRequestEmployee,
};
