const Maintenance = require('../models/maintenance')



const postRequestMaintenance = async (req, res) => {
  const { NamaPIC, Area, Line, Station, Kerusakan } = req.body;

  try {
    const createdMaintenance = await Maintenance.create({
      Nama: NamaPIC,
      Area,
      Line,
      Station,
      Problem: Kerusakan,
    });

    res.status(200).json({ message: 'Data has been added successfully', data: createdMaintenance });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// const postReturnMaintenance = (req, res) => {
//   const { NamaPIC, Area, Line, Station, Kerusakan } = req.body;

//   db.query(
//     "INSERT INTO returnmaintenance (Nama, Area, Line, Station, Problem) VALUES (?, ?, ?, ?, ?)",
//     [NamaPIC, Area, Line, Station, Kerusakan],
//     (error, results) => {
//       if (error) {
//         console.log(error);
//         return res.status(500).json({ message: "Internal server error" });
//       }
//       res.status(200).json({ message: "Data has been added successfully" });
//     }
//   );
// };

// const getRequestMaintenance = (req, res) => {
//   const sqlSelect = "SELECT * FROM maintenance";
//   db.query(sqlSelect, (err, results) => {
//     res.send(results);
//   });
// };

// const getReturnMaintenance = (req, res) => {
//   const sqlSelect = "SELECT * FROM returnmaintenance";
//   db.query(sqlSelect, (err, results) => {
//     res.send(results);
//   });
// };





module.exports = {
  postRequestMaintenance,
  // postReturnMaintenance,
  // getRequestMaintenance,
  // getReturnMaintenance,
};
