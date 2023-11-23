const express = require("express");
const router = express.Router();



const DataStation = require("../controller/Station");


// lDR

router.get("/SMT", DataStation.getStationSMT);



module.exports = router;


