const db = require("../models/init");


const getStationSMT = (req, res) => {
  const sqlSelect = "SELECT * FROM smt";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

module.exports = {
  getStationSMT,

};
