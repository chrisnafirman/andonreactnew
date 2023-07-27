const express = require("express");
const router = express.Router();
const MTCcontrollers = require("../controller/Maintenance");
const QAcontrollers = require("../controller/QA");
const QCcontrollers = require("../controller/QC");
const TimeProductioncontrollers = require("../controller/TimeProduction")
const Generalcontrollers = require("../controller/General")
const Employeecontrollers = require("../controller/Employee")
const UMLine1TOP = require("../controller/UMLine1TOP")
const UMLine1General = require("../controller/UMLine1General")
const UMLine1BOT = require("../controller/UMLine1BOT")

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

router.put("/UpdateOverTime", TimeProductioncontrollers.updateOverTime);

router.get("/ScheduleProduction", TimeProductioncontrollers.getTimeProduction);

// General

router.post("/General", Generalcontrollers.postRequestGeneral);

router.post("/Others", Generalcontrollers.postRequestOthers);

router.get("/General", Generalcontrollers.getRequestGeneral);

router.get("/Others", Generalcontrollers.getRequestOthers);

// Employee

router.get("/Employee_Operator", Employeecontrollers.getRequestEmployee);
router.get("/Employee_Operator_Manufacturing", Employeecontrollers.getRequestEmployeeOperatorManufacturing);
router.get("/Employee_Team_Maintenance", Employeecontrollers.getRequestEmployeeTeamMaintenance);
router.get("/Employee_Team_Quality", Employeecontrollers.getRequestEmployeeTeamQuality);


// User Mobile
router.get("/UMElectricityLine1", UMLine1General.getUMElectricityLine1);
router.get("/UMNetworkLine1", UMLine1General.getUMNetworkLine1);
router.get("/UMNAirCompLine1", UMLine1General.getUMAirCompLine1);
router.get("/UMNOthersLine1", UMLine1General.getUMOthersLine1);
router.get("/UMElectricityLine1", UMLine1General.getUMElectricityLine1);
router.get("/UMNetworkLine1", UMLine1General.getUMNetworkLine1);
router.get("/UMNAirCompLine1", UMLine1General.getUMAirCompLine1);
router.get("/UMNShorCompLine1", UMLine1General.getUMShorCompLine1);


router.get("/UMDestackerTOPLine1", UMLine1TOP.getUMDestackerTOPLine1);
router.get("/UMDestackerTOPLine1QA", UMLine1TOP.getUMDestackerTOPLine1QA);
router.get("/UMDestackerTOPLine1QC", UMLine1TOP.getUMDestackerTOPLine1QC);
router.get("/UMDestackerTOPLine1Return", UMLine1TOP.getUMDestackerTOPLine1Return);
router.get("/UMDestackerTOPLine1ValQuality", UMLine1TOP.getUMDestackerTOPLine1ValQuality);


router.get("/UMLabelTOPLine1", UMLine1TOP.getUMLabelTOPLine1);
router.get("/UMLabelTOPLine1QA", UMLine1TOP.getUMLabelTOPLine1QA);
router.get("/UMLabelTOPLine1QC", UMLine1TOP.getUMLabelTOPLine1QC);
router.get("/UMLabelTOPLine1Return", UMLine1TOP.getUMLabelTOPLine1Return);
router.get("/UMLabelTOPLine1ValQuality", UMLine1TOP.getUMLabelTOPLine1ValQuality);

router.get("/UMPrinterTOPLine1", UMLine1TOP.getUMPrinterTOPLine1);
router.get("/UMPrinterTOPLine1QA", UMLine1TOP.getUMPrinterTOPLine1QA);
router.get("/UMPrinterTOPLine1QC", UMLine1TOP.getUMPrinterTOPLine1QC);
router.get("/UMPrinterTOPLine1Return", UMLine1TOP.getUMPrinterTOPLine1Return);
router.get("/UMPrinterTOPLine1ValQuality", UMLine1TOP.getUMPrinterTOPLine1ValQuality);

router.get("/UMSpiTOPLine1", UMLine1TOP.getUMSpiTOPLine1);
router.get("/UMSpiTOPLine1QA", UMLine1TOP.getUMSpiTOPLine1QA);
router.get("/UMSpiTOPLine1QC", UMLine1TOP.getUMSpiTOPLine1QC);
router.get("/UMSpiTOPLine1Return", UMLine1TOP.getUMSpiTOPLine1Return);
router.get("/UMSpiTOPLine1ValQuality", UMLine1TOP.getUMSpiTOPLine1ValQuality);

router.get("/UMPickNPlaceTOPLine1", UMLine1TOP.getUMPickNPlaceTOPLine1);
router.get("/UMPickNPlaceTOPLine1QA", UMLine1TOP.getUMPickNPlaceTOPLine1QA);
router.get("/UMPickNPlaceTOPLine1QC", UMLine1TOP.getUMPickNPlaceTOPLine1QC);
router.get("/UMPickNPlaceTOPLine1Return", UMLine1TOP.getUMPickNPlaceTOPLine1Return);
router.get("/UMPickNPlaceTOPLine1ValQuality", UMLine1TOP.getUMPickNPlaceTOPLine1ValQuality);

router.get("/UMReflowTOPLine1", UMLine1TOP.getUMReflowTOPLine1);
router.get("/UMReflowTOPLine1QA", UMLine1TOP.getUMReflowTOPLine1QA);
router.get("/UMReflowTOPLine1QC", UMLine1TOP.getUMReflowTOPLine1QC);
router.get("/UMReflowTOPLine1Return", UMLine1TOP.getUMReflowTOPLine1Return);
router.get("/UMReflowTOPLine1ValQuality", UMLine1TOP.getUMReflowTOPLine1ValQuality);


router.get("/UMAOITOPLine1", UMLine1TOP.getUMAOITOPLine1);
router.get("/UMAOITOPLine1QA", UMLine1TOP.getUMAOITOPLine1QA);
router.get("/UMAOITOPLine1QC", UMLine1TOP.getUMAOITOPLine1QC);
router.get("/UMAOITOPLine1Return", UMLine1TOP.getUMAOITOPLine1Return);
router.get("/UMAOITOPLine1ValQuality", UMLine1TOP.getUMAOITOPLine1ValQuality);

router.get("/UMRVSTOPLine1", UMLine1TOP.getUMRVSTOPLine1);
router.get("/UMRVSTOPLine1QA", UMLine1TOP.getUMRVSTOPLine1QA);
router.get("/UMRVSTOPLine1QC", UMLine1TOP.getUMRVSTOPLine1QC);
router.get("/UMRVSTOPLine1Return", UMLine1TOP.getUMRVSTOPLine1Return);
router.get("/UMRVSTOPLine1ValQuality", UMLine1TOP.getUMRVSTOPLine1ValQuality);


// SMT BOT

router.get("/UMPrinterBOTLine1", UMLine1BOT.getUMPrinterBOTLine1);
router.get("/UMPrinterBOTLine1QA", UMLine1BOT.getUMPrinterBOTLine1QA);
router.get("/UMPrinterBOTLine1QC", UMLine1BOT.getUMPrinterBOTLine1QC);
router.get("/UMPrinterBOTLine1Return", UMLine1BOT.getUMPrinterBOTLine1Return);
router.get("/UMPrinterBOTLine1ValQuality", UMLine1BOT.getUMPrinterBOTLine1ValQuality);

router.get("/UMSPIBOTLine1", UMLine1BOT.getUMSPIBOTLine1);
router.get("/UMSPIBOTLine1QA", UMLine1BOT.getUMSPIBOTLine1QA);
router.get("/UMSPIBOTLine1QC", UMLine1BOT.getUMSPIBOTLine1QC);
router.get("/UMSPIBOTLine1Return", UMLine1BOT.getUMSPIBOTLine1Return);
router.get("/UMSPIBOTLine1ValQuality", UMLine1BOT.getUMSPIBOTLine1ValQuality);


router.get("/UMPickNPlaceBOTLine1", UMLine1BOT.getUMPickNPlaceBOTLine1);
router.get("/UMPickNPlaceBOTLine1QA", UMLine1BOT.getUMPickNPlaceBOTLine1QA);
router.get("/UMPickNPlaceBOTLine1QC", UMLine1BOT.getUMPickNPlaceBOTLine1QC);
router.get("/UMPickNPlaceBOTLine1Return", UMLine1BOT.getUMPickNPlaceBOTLine1Return);
router.get("/UMPickNPlaceBOTLine1ValQuality", UMLine1BOT.getUMPickNPlaceBOTLine1ValQuality);


module.exports = router;


