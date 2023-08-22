const db = require("../../models/init");





const PutRealTimeDestackerTOP = (req, res) => {
  const { TimeDestacker, DestackerTop, Area } = req.body;

  db.query(
    "UPDATE quality SET DownTime = ? WHERE Station = ? AND Area = ? ORDER BY No DESC LIMIT 1",
    [TimeDestacker, DestackerTop, Area],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.status(200).json({ message: 'Data has been updated successfully' });
    }
  );
}







module.exports = {
  PutRealTimeDestackerTOP,
};
