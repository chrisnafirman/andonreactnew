const db = require("../models/init2");


const postInputSchedule = (req, res) => {
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
};




const updateResultsCMA = (req, res) => {
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
};

const updateOverTime= (req, res) => {
  const {  OT_IN, OT_OUT } = req.body;

  db.query(
    "UPDATE scheprod SET OT_IN = ?, OT_OUT = ? ORDER BY No DESC LIMIT 1",
    [ OT_IN, OT_OUT],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
};





const getTimeProduction = (req, res) => {
  const sqlSelect = "SELECT * FROM scheprod";
  db.query(sqlSelect, (err, results) => {
    res.send(results);
  });
};

const updateRealProduction = (req, res) => {
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
};





module.exports = {
  postInputSchedule,
  updateResultsCMA,
  updateRealProduction,
  getTimeProduction,
  updateOverTime,
};
