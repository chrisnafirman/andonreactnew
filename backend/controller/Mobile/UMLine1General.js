// const db = require("../../models/init");

// // Failure
// const getUMElectricityLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Electricity' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// };

// const getUMNetworkLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Network' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// };


// const getUMAirCompLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Air Compressor' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// };

// const getUMOthersLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM others WHERE  Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// };

// const getUMShorCompLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Shortage Comp' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// }

// const getUMShorBoxLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Shortage Box FG' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// }

// const getUMOverTrialLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Over Trial' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// }


// const getUMOverChangeLine1 = (req, res) => {
//     const sqlSelect = "SELECT * FROM general WHERE Station = 'Over Change Model' AND Line = 'SMT LINE 1'  ORDER BY No DESC LIMIT 1";
//     db.query(sqlSelect, (err, results) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send("Error fetching data from the database.");
//         } else {
//             if (results.length > 0) {
//                 res.send(results[0]); // Send the first (last) row as it will be the latest entry.
//             } else {
//                 res.status(404).send("No data found.");
//             }
//         }
//     });
// }

// // ...........



// module.exports = {

//     getUMElectricityLine1,
//     getUMNetworkLine1,
//     getUMAirCompLine1,
//     getUMOthersLine1,
//     getUMShorCompLine1,
//     getUMShorBoxLine1,
//     getUMOverTrialLine1,
//     getUMOverChangeLine1,


// };