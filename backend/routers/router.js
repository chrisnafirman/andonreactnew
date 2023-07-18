const express = require("express");
const router = express.Router();
const MTCcontrollers = require("../controller/Maintenance");
const QAcontrollers = require("../controller/QA");
const QCcontrollers = require("../controller/QC");
const TimeProductioncontrollers = require("../controller/TimeProduction")
const Generalcontrollers = require("../controller/General")
const Employeecontrollers = require("../controller/Employee")

// MTC
router.post("/Maintenance", MTCcontrollers.postRequestMaintenance);

router.post("/ReturnMaintenance", MTCcontrollers.postReturnMaintenance);

router.get("/Maintenance", MTCcontrollers.getRequestMaintenance);

router.get("/ReturnMaintenance", MTCcontrollers.getReturnMaintenance);

// QA
router.post("/QA", QAcontrollers.postRequestQA);

router.post("/ValidationQA", QAcontrollers.postValidationQA);

router.get("/QA", QAcontrollers.getRequestQA);

router.get("/ValidationQA", QAcontrollers.getValidationQA);


// QC
router.post("/QC", QCcontrollers.postRequestQC);

router.post("/ValidationQC", QCcontrollers.postValidationQC);

router.get("/QC", QCcontrollers.getRequestQC);

router.get("/ValidationQC", QCcontrollers.getValidationQC);


// Time Production
router.post("/ScheduleProduction", TimeProductioncontrollers.postInputSchedule);

router.put("/UpdateCMA", TimeProductioncontrollers.updateResultsCMA);

router.put("/UpdateRealProduction", TimeProductioncontrollers.updateRealProduction);

router.get("/ScheduleProduction", TimeProductioncontrollers.getTimeProduction);

// General

router.post("/General", Generalcontrollers.postRequestGeneral);

router.post("/Others", Generalcontrollers.postRequestOthers);

router.get("/General", Generalcontrollers.getRequestGeneral);

router.get("/Others", Generalcontrollers.getRequestOthers);

// Employee

router.get("/Employee_Operator", Employeecontrollers.getRequestEmployee);


module.exports = router;


