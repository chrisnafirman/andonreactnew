const express = require("express");
const router = express.Router();
const RepairControllers = require("../controller/Repair");
const LDRControllers = require("../controller/Leader");
const ValidationControllers = require("../controller/Validation");
// const ProductionLeaderControllers = require("../controller/ProductionLeader");
const TimeProductioncontrollers = require("../controller/TimeProduction")
const Employeecontrollers = require("../controller/Employee")

// const UMLine1TOP = require("../controller/Mobile/UMLine1TOP")
// const UMLine1General = require("../controller/Mobile/UMLine1General")
// const UMLine1BOT = require("../controller/Mobile/UMLine1BOT")
// const UMLine1BE = require("../controller/Mobile/UMLine1BE")


// Top
const DestackerTOP = require("../controller/SMTTOPDATA/DestackerTOP")
const LabelTOP = require("../controller/SMTTOPDATA/LabelTOP")
const PrinterTOP = require("../controller/SMTTOPDATA/PrinterTOP")
const SPITOP = require("../controller/SMTTOPDATA/SPITOP")
const PickNPlaceTOP = require("../controller/SMTTOPDATA/PickNPlaceTOP")
const ReflowTOP = require("../controller/SMTTOPDATA/ReflowTOP")
const AOITOP = require("../controller/SMTTOPDATA/AOITOP")
const RVSTOP = require("../controller/SMTTOPDATA/RVSTOP")

// Bot
const PrinterBOT = require("../controller/SMTBOTDATA/PrinterBOT")
const SPIBOT = require("../controller/SMTBOTDATA/SPIBOT")
const PickNPlaceBOT = require("../controller/SMTBOTDATA/PickNPlaceBOT")
const ReflowBOT = require("../controller/SMTBOTDATA/ReflowBOT")
const AOIBOT = require("../controller/SMTBOTDATA/AOIBOT")
const RVSBOT = require("../controller/SMTBOTDATA/RVSBOT")


// Be
const DropinBE = require("../controller/SMTBEDATA/DropinBE")
const FluxerBE = require("../controller/SMTBEDATA/FluxerBE")
const PreheatBE = require("../controller/SMTBEDATA/PreheatBE")
const Seho1BE = require("../controller/SMTBEDATA/Seho1BE")
const Seho2BE = require("../controller/SMTBEDATA/Seho2BE")
const TouchupBE = require("../controller/SMTBEDATA/TouchupBE")
const ICTBE = require("../controller/SMTBEDATA/ICTBE")
const FlashBE = require("../controller/SMTBEDATA/FlashBE")
const RouterBE = require("../controller/SMTBEDATA/RouterBE")

// lDR
router.post("/Leader", LDRControllers.postRequestLeader);
router.get("/Leader", LDRControllers.getRequestLeader);
router.put("/PutStatusLeader", LDRControllers.PutStatusLeader);
router.delete("/leader/:id", LDRControllers.DeleteReject);
router.put("/PutUidLeader", LDRControllers.PutUidLeader);



// MTC
router.post("/Repair", RepairControllers.postRequestRepair);
router.get("/Repair", RepairControllers.getRequestRepair);


router.put("/PutResponseRepair", RepairControllers.PutResponseRepair);
router.put("/PutRepairDone", RepairControllers.PutRepairDone);



router.put("/PutUidRepair", RepairControllers.PutUidRepair);







// router.post("/General", Otherscontrollers.postRequestGeneral);
// router.get("/General", Otherscontrollers.getRequestGeneral);

// Validation
router.post("/Validation", ValidationControllers.postRequestValidation);


router.put("/PutValidation", ValidationControllers.PutValidation);



router.put("/PutStatusReturnValidation", ValidationControllers.PutStatusReturnValidation);
router.put("/PutUidValidation", ValidationControllers.PutUidValidation);


router.get("/Validation", ValidationControllers.getRequestValidation);

router.put("/PutResponseValidation", ValidationControllers.PutResponseValidation);


router.put("/PutFileValidation", ValidationControllers.PutFileValidation);


// router.post("/ProductionLeader", ProductionLeaderControllers.postRequestProductionLeader);
// router.put("/PutValidationProductionLeader", ProductionLeaderControllers.PutValidationProductionLeader);
// router.put("/PutReturnProductionLeader", ProductionLeaderControllers.PutReturnProductionLeader);
// router.put("/PutFileValidationQProductionLeader", ProductionLeaderControllers.PutFileValidationProductionLeader);
// router.get("/ProductionLeader", ProductionLeaderControllers.getRequestProductionLeader);
// router.get("/ValidationProductionLeader", ProductionLeaderControllers.getValidationProductionLeader);



// Time Production
router.post("/ScheduleProduction", TimeProductioncontrollers.postInputSchedule);
router.put("/UpdateCMA", TimeProductioncontrollers.updateResultsCMA);
router.put("/UpdateRealProduction", TimeProductioncontrollers.updateRealProduction);
router.put("/UpdateOverTime", TimeProductioncontrollers.updateOverTime);
router.get("/ScheduleProduction", TimeProductioncontrollers.getTimeProduction);






// Fetch Data TOP
// Destacker
router.put("/PutDownTimeDestackerTOP", DestackerTOP.PutDownTimeDestackerTOP);

router.get("/getDestackerTOPLeader", DestackerTOP.getDestackerTOPLeader);
router.get("/getDestackerTOPRepair", DestackerTOP.getDestackerTOPRepair);
router.get("/getDestackerTOPValidation", DestackerTOP.getDestackerTOPValidation);


// Label
router.put("/PutDownTimeLabelTOP", LabelTOP.PutDownTimeLabelTOP);

router.get("/getLabelTOPLeader", LabelTOP.getLabelTOPLeader);
router.get("/getLabelTOPRepair", LabelTOP.getLabelTOPRepair);
router.get("/getLabelTOPValidation", LabelTOP.getLabelTOPValidation);


// Printer
router.put("/PutDownTimePrinterTOP", PrinterTOP.PutDownTimePrinterTOP);

router.get("/getPrinterTOPLeader", PrinterTOP.getPrinterTOPLeader);
router.get("/getPrinterTOPRepair", PrinterTOP.getPrinterTOPRepair);
router.get("/getPrinterTOPValidation", PrinterTOP.getPrinterTOPValidation);

// SPI
router.put("/PutDownTimeSPITOP", SPITOP.PutDownTimeSPITOP);
router.get("/getSPITOPLeader", SPITOP.getSPITOPLeader);
router.get("/getSPITOPRepair", SPITOP.getSPITOPRepair);
router.get("/getSPITOPValidation", SPITOP.getSPITOPValidation);



// PickNPlace
router.put("/PutDownTimePickNPlaceTOP", PickNPlaceTOP.PutDownTimePickNPlaceTOP);

router.get("/getPickNPlaceTOPLeader", PickNPlaceTOP.getPickNPlaceTOPLeader);
router.get("/getPickNPlaceTOPRepair", PickNPlaceTOP.getPickNPlaceTOPRepair);
router.get("/getPickNPlaceTOPValidation", PickNPlaceTOP.getPickNPlaceTOPValidation);


// Reflow
router.put("/PutDownTimeReflowTOP", ReflowTOP.PutDownTimeReflowTOP);

router.get("/getReflowTOPLeader", ReflowTOP.getReflowTOPLeader);
router.get("/getReflowTOPRepair", ReflowTOP.getReflowTOPRepair);
router.get("/getReflowTOPValidation", ReflowTOP.getReflowTOPValidation);



// AOI
router.put("/PutDownTimeAOITOP", AOITOP.PutDownTimeAOITOP);

router.get("/getAOITOPLeader", AOITOP.getAOITOPLeader);
router.get("/getAOITOPRepair", AOITOP.getAOITOPRepair);
router.get("/getAOITOPValidation", AOITOP.getAOITOPValidation);


// RVS
router.put("/PutDownTimeRVSTOP", RVSTOP.PutDownTimeRVSTOP);
router.get("/getRVSTOPLeader", RVSTOP.getRVSTOPLeader);
router.get("/getRVSTOPRepair", RVSTOP.getRVSTOPRepair);
router.get("/getRVSTOPValidation", RVSTOP.getRVSTOPValidation);


// ..........................................




// Fetch Data BOT
// Printer
router.put("/PutDownTimePrinterBOT", PrinterBOT.PutDownTimePrinterBOT);

router.get("/getPrinterBOTLeader", PrinterBOT.getPrinterBOTLeader);
router.get("/getPrinterBOTRepair", PrinterBOT.getPrinterBOTRepair);
router.get("/getPrinterBOTValidation", PrinterBOT.getPrinterBOTValidation);

// SPI
router.put("/PutDownTimeSPIBOT", SPIBOT.PutDownTimeSPIBOT);

router.get("/getSPIBOTLeader", SPIBOT.getSPIBOTLeader);
router.get("/getSPIBOTRepair", SPIBOT.getSPIBOTRepair);
router.get("/getSPIBOTValidation", SPIBOT.getSPIBOTValidation);


// PickNPlace
router.put("/PutDownTimePickNPlaceBOT", PickNPlaceBOT.PutDownTimePickNPlaceBOT);

router.get("/getPickNPlaceBOTLeader", PickNPlaceBOT.getPickNPlaceBOTLeader);
router.get("/getPickNPlaceBOTRepair", PickNPlaceBOT.getPickNPlaceBOTRepair);
router.get("/getPickNPlaceBOTValidation", PickNPlaceBOT.getPickNPlaceBOTValidation);



// Reflow
router.put("/PutDownTimeReflowBOT", ReflowBOT.PutDownTimeReflowBOT);

router.get("/getReflowBOTLeader", ReflowBOT.getReflowBOTLeader);
router.get("/getReflowBOTRepair", ReflowBOT.getReflowBOTRepair);
router.get("/getReflowBOTValidation", ReflowBOT.getReflowBOTValidation);



// AOI
router.put("/PutDownTimeAOIBOT", AOIBOT.PutDownTimeAOIBOT);

router.get("/getAOIBOTLeader", AOIBOT.getAOIBOTLeader);
router.get("/getAOIBOTRepair", AOIBOT.getAOIBOTRepair);
router.get("/getAOIBOTValidation", AOIBOT.getAOIBOTValidation);


// RVS
router.put("/PutDownTimeRVSBOT", RVSBOT.PutDownTimeRVSBOT);

router.get("/getRVSBOTLeader", RVSBOT.getRVSBOTLeader);
router.get("/getRVSBOTRepair", RVSBOT.getRVSBOTRepair);
router.get("/getRVSBOTValidation", RVSBOT.getRVSBOTValidation);





// ..........................................



// Fetch Data BE
// Dropin
router.put("/PutDownTimeDropinBE", DropinBE.PutDownTimeDropinBE);

router.get("/getDropinBELeader", DropinBE.getDropinBELeader);
router.get("/getDropinBERepair", DropinBE.getDropinBERepair);
router.get("/getDropinBEValidation", DropinBE.getDropinBEValidation);


// Fluxer
router.put("/PutDownTimeFluxerBE", FluxerBE.PutDownTimeFluxerBE);

router.get("/getFluxerBELeader", FluxerBE.getFluxerBELeader);
router.get("/getFluxerBERepair", FluxerBE.getFluxerBERepair);
router.get("/getFluxerBEValidation", FluxerBE.getFluxerBEValidation);


// Preheat
router.put("/PutDownTimePreheatBE", PreheatBE.PutDownTimePreheatBE);

router.get("/getPreheatBELeader", PreheatBE.getPreheatBELeader);
router.get("/getPreheatBERepair", PreheatBE.getPreheatBERepair);
router.get("/getPreheatBEValidation", PreheatBE.getPreheatBEValidation);

// Seho1
router.put("/PutDownTimeSeho1BE", Seho1BE.PutDownTimeSeho1BE);

router.get("/getSeho1BELeader", Seho1BE.getSeho1BELeader);
router.get("/getSeho1BERepair", Seho1BE.getSeho1BERepair);
router.get("/getSeho1BEValidation", Seho1BE.getSeho1BEValidation);


// Seho2
router.put("/PutDownTimeSeho2BE", Seho2BE.PutDownTimeSeho2BE);

router.get("/getSeho2BELeader", Seho2BE.getSeho2BELeader);
router.get("/getSeho2BERepair", Seho2BE.getSeho2BERepair);
router.get("/getSeho2BEValidation", Seho2BE.getSeho2BEValidation);



// Touchup
router.put("/PutDownTimeTouchupBE", TouchupBE.PutDownTimeTouchupBE);

router.get("/getTouchupBELeader", TouchupBE.getTouchupBELeader);
router.get("/getTouchupBERepair", TouchupBE.getTouchupBERepair);
router.get("/getTouchupBEValidation", TouchupBE.getTouchupBEValidation);


// ICT
router.put("/PutDownTimeICTBE", ICTBE.PutDownTimeICTBE);

router.get("/getICTBELeader", ICTBE.getICTBELeader);
router.get("/getICTBERepair", ICTBE.getICTBERepair);
router.get("/getICTBEValidation", ICTBE.getICTBEValidation);



// Flash
router.put("/PutDownTimeFlashBE", FlashBE.PutDownTimeFlashBE);

router.get("/getFlashBELeader", FlashBE.getFlashBELeader);
router.get("/getFlashBERepair", FlashBE.getFlashBERepair);
router.get("/getFlashBEValidation", FlashBE.getFlashBEValidation);


// Router
router.put("/PutDownTimeRouterBE", RouterBE.PutDownTimeRouterBE);

router.get("/getRouterBELeader", RouterBE.getRouterBELeader);
router.get("/getRouterBERepair", RouterBE.getRouterBERepair);
router.get("/getRouterBEValidation", RouterBE.getRouterBEValidation);


// ..........................................





// Employee

router.get("/Employee_Operator", Employeecontrollers.getRequestEmployee);
router.get("/Employee_Operator_Manufacturing", Employeecontrollers.getRequestEmployeeOperatorManufacturing);
router.get("/Employee_Team_Maintenance", Employeecontrollers.getRequestEmployeeTeamMaintenance);
router.get("/Employee_Team_Quality", Employeecontrollers.getRequestEmployeeTeamQuality);




// // User Mobile
// router.get("/UMElectricityLine1", UMLine1General.getUMElectricityLine1);
// router.get("/UMNetworkLine1", UMLine1General.getUMNetworkLine1);
// router.get("/UMNAirCompLine1", UMLine1General.getUMAirCompLine1);
// router.get("/UMNOthersLine1", UMLine1General.getUMOthersLine1);
// router.get("/UMElectricityLine1", UMLine1General.getUMElectricityLine1);
// router.get("/UMNetworkLine1", UMLine1General.getUMNetworkLine1);
// router.get("/UMNAirCompLine1", UMLine1General.getUMAirCompLine1);
// router.get("/UMNShorCompLine1", UMLine1General.getUMShorCompLine1);
// router.get("/UMNShorBoxLine1", UMLine1General.getUMShorBoxLine1);
// router.get("/UMNOverTrialLine1", UMLine1General.getUMOverTrialLine1);
// router.get("/UMNOverChangeLine1", UMLine1General.getUMOverChangeLine1);

// router.get("/UMDestackerTOPLine1", UMLine1TOP.getUMDestackerTOPLine1);
// router.get("/UMDestackerTOPLine1QA", UMLine1TOP.getUMDestackerTOPLine1QA);
// router.get("/UMDestackerTOPLine1QC", UMLine1TOP.getUMDestackerTOPLine1QC);
// router.get("/UMDestackerTOPLine1Return", UMLine1TOP.getUMDestackerTOPLine1Return);
// router.get("/UMDestackerTOPLine1ValQuality", UMLine1TOP.getUMDestackerTOPLine1ValQuality);



// router.get("/UMLabelTOPLine1", UMLine1TOP.getUMLabelTOPLine1);
// router.get("/UMLabelTOPLine1QA", UMLine1TOP.getUMLabelTOPLine1QA);
// router.get("/UMLabelTOPLine1QC", UMLine1TOP.getUMLabelTOPLine1QC);
// router.get("/UMLabelTOPLine1Return", UMLine1TOP.getUMLabelTOPLine1Return);
// router.get("/UMLabelTOPLine1ValQuality", UMLine1TOP.getUMLabelTOPLine1ValQuality);

// router.get("/UMPrinterTOPLine1", UMLine1TOP.getUMPrinterTOPLine1);
// router.get("/UMPrinterTOPLine1QA", UMLine1TOP.getUMPrinterTOPLine1QA);
// router.get("/UMPrinterTOPLine1QC", UMLine1TOP.getUMPrinterTOPLine1QC);
// router.get("/UMPrinterTOPLine1Return", UMLine1TOP.getUMPrinterTOPLine1Return);
// router.get("/UMPrinterTOPLine1ValQuality", UMLine1TOP.getUMPrinterTOPLine1ValQuality);

// router.get("/UMSpiTOPLine1", UMLine1TOP.getUMSpiTOPLine1);
// router.get("/UMSpiTOPLine1QA", UMLine1TOP.getUMSpiTOPLine1QA);
// router.get("/UMSpiTOPLine1QC", UMLine1TOP.getUMSpiTOPLine1QC);
// router.get("/UMSpiTOPLine1Return", UMLine1TOP.getUMSpiTOPLine1Return);
// router.get("/UMSpiTOPLine1ValQuality", UMLine1TOP.getUMSpiTOPLine1ValQuality);

// router.get("/UMPickNPlaceTOPLine1", UMLine1TOP.getUMPickNPlaceTOPLine1);
// router.get("/UMPickNPlaceTOPLine1QA", UMLine1TOP.getUMPickNPlaceTOPLine1QA);
// router.get("/UMPickNPlaceTOPLine1QC", UMLine1TOP.getUMPickNPlaceTOPLine1QC);
// router.get("/UMPickNPlaceTOPLine1Return", UMLine1TOP.getUMPickNPlaceTOPLine1Return);
// router.get("/UMPickNPlaceTOPLine1ValQuality", UMLine1TOP.getUMPickNPlaceTOPLine1ValQuality);

// router.get("/UMReflowTOPLine1", UMLine1TOP.getUMReflowTOPLine1);
// router.get("/UMReflowTOPLine1QA", UMLine1TOP.getUMReflowTOPLine1QA);
// router.get("/UMReflowTOPLine1QC", UMLine1TOP.getUMReflowTOPLine1QC);
// router.get("/UMReflowTOPLine1Return", UMLine1TOP.getUMReflowTOPLine1Return);
// router.get("/UMReflowTOPLine1ValQuality", UMLine1TOP.getUMReflowTOPLine1ValQuality);


// router.get("/UMAOITOPLine1", UMLine1TOP.getUMAOITOPLine1);
// router.get("/UMAOITOPLine1QA", UMLine1TOP.getUMAOITOPLine1QA);
// router.get("/UMAOITOPLine1QC", UMLine1TOP.getUMAOITOPLine1QC);
// router.get("/UMAOITOPLine1Return", UMLine1TOP.getUMAOITOPLine1Return);
// router.get("/UMAOITOPLine1ValQuality", UMLine1TOP.getUMAOITOPLine1ValQuality);

// router.get("/UMRVSTOPLine1", UMLine1TOP.getUMRVSTOPLine1);
// router.get("/UMRVSTOPLine1QA", UMLine1TOP.getUMRVSTOPLine1QA);
// router.get("/UMRVSTOPLine1QC", UMLine1TOP.getUMRVSTOPLine1QC);
// router.get("/UMRVSTOPLine1Return", UMLine1TOP.getUMRVSTOPLine1Return);
// router.get("/UMRVSTOPLine1ValQuality", UMLine1TOP.getUMRVSTOPLine1ValQuality);


// // SMT BOT

// router.get("/UMPrinterBOTLine1", UMLine1BOT.getUMPrinterBOTLine1);
// router.get("/UMPrinterBOTLine1QA", UMLine1BOT.getUMPrinterBOTLine1QA);
// router.get("/UMPrinterBOTLine1QC", UMLine1BOT.getUMPrinterBOTLine1QC);
// router.get("/UMPrinterBOTLine1Return", UMLine1BOT.getUMPrinterBOTLine1Return);
// router.get("/UMPrinterBOTLine1ValQuality", UMLine1BOT.getUMPrinterBOTLine1ValQuality);

// router.get("/UMSPIBOTLine1", UMLine1BOT.getUMSPIBOTLine1);
// router.get("/UMSPIBOTLine1QA", UMLine1BOT.getUMSPIBOTLine1QA);
// router.get("/UMSPIBOTLine1QC", UMLine1BOT.getUMSPIBOTLine1QC);
// router.get("/UMSPIBOTLine1Return", UMLine1BOT.getUMSPIBOTLine1Return);
// router.get("/UMSPIBOTLine1ValQuality", UMLine1BOT.getUMSPIBOTLine1ValQuality);


// router.get("/UMPickNPlaceBOTLine1", UMLine1BOT.getUMPickNPlaceBOTLine1);
// router.get("/UMPickNPlaceBOTLine1QA", UMLine1BOT.getUMPickNPlaceBOTLine1QA);
// router.get("/UMPickNPlaceBOTLine1QC", UMLine1BOT.getUMPickNPlaceBOTLine1QC);
// router.get("/UMPickNPlaceBOTLine1Return", UMLine1BOT.getUMPickNPlaceBOTLine1Return);
// router.get("/UMPickNPlaceBOTLine1ValQuality", UMLine1BOT.getUMPickNPlaceBOTLine1ValQuality);


// router.get("/UMReflowBOTLine1", UMLine1BOT.getUMReflowBOTLine1);
// router.get("/UMReflowBOTLine1QA", UMLine1BOT.getUMReflowBOTLine1QA);
// router.get("/UMReflowBOTLine1QC", UMLine1BOT.getUMReflowBOTLine1QC);
// router.get("/UMReflowBOTLine1Return", UMLine1BOT.getUMReflowBOTLine1Return);
// router.get("/UMReflowBOTLine1ValQuality", UMLine1BOT.getUMReflowBOTLine1ValQuality);

// router.get("/UMAOIBOTLine1", UMLine1BOT.getUMAOIBOTLine1);
// router.get("/UMAOIBOTLine1QA", UMLine1BOT.getUMAOIBOTLine1QA);
// router.get("/UMAOIBOTLine1QC", UMLine1BOT.getUMAOIBOTLine1QC);
// router.get("/UMAOIBOTLine1Return", UMLine1BOT.getUMAOIBOTLine1Return);
// router.get("/UMAOIBOTLine1ValQuality", UMLine1BOT.getUMAOIBOTLine1ValQuality);

// router.get("/UMRVSBOTLine1", UMLine1BOT.getUMRVSBOTLine1);
// router.get("/UMRVSBOTLine1QA", UMLine1BOT.getUMRVSBOTLine1QA);
// router.get("/UMRVSBOTLine1QC", UMLine1BOT.getUMRVSBOTLine1QC);
// router.get("/UMRVSBOTLine1Return", UMLine1BOT.getUMRVSBOTLine1Return);
// router.get("/UMRVSBOTLine1ValQuality", UMLine1BOT.getUMRVSBOTLine1ValQuality);

// // SMT BE
// router.get("/UMDropinBELine1", UMLine1BE.getUMDropinBELine1);
// router.get("/UMDropinBELine1QA", UMLine1BE.getUMDropinBELine1QA);
// router.get("/UMDropinBELine1QC", UMLine1BE.getUMDropinBELine1QC);
// router.get("/UMDropinBELine1Return", UMLine1BE.getUMDropinBELine1Return);
// router.get("/UMDropinBELine1ValQuality", UMLine1BE.getUMDropinBELine1ValQuality);

// router.get("/UMFluxerBELine1", UMLine1BE.getUMFluxerBELine1);
// router.get("/UMFluxerBELine1QA", UMLine1BE.getUMFluxerBELine1QA);
// router.get("/UMFluxerBELine1QC", UMLine1BE.getUMFluxerBELine1QC);
// router.get("/UMFluxerBELine1Return", UMLine1BE.getUMFluxerBELine1Return);
// router.get("/UMFluxerBELine1ValQuality", UMLine1BE.getUMFluxerBELine1ValQuality);

// router.get("/UMPreHeatBELine1", UMLine1BE.getUMPreHeatBELine1);
// router.get("/UMPreHeatBELine1QA", UMLine1BE.getUMPreHeatBELine1QA);
// router.get("/UMPreHeatBELine1QC", UMLine1BE.getUMPreHeatBELine1QC);
// router.get("/UMPreHeatBELine1Return", UMLine1BE.getUMPreHeatBELine1Return);
// router.get("/UMPreHeatBELine1ValQuality", UMLine1BE.getUMPreHeatBELine1ValQuality);

// router.get("/UMSeho1BELine1", UMLine1BE.getUMSeho1BELine1);
// router.get("/UMSeho1BELine1QA", UMLine1BE.getUMSeho1BELine1QA);
// router.get("/UMSeho1BELine1QC", UMLine1BE.getUMSeho1BELine1QC);
// router.get("/UMSeho1BELine1Return", UMLine1BE.getUMSeho1BELine1Return);
// router.get("/UMSeho1BELine1ValQuality", UMLine1BE.getUMSeho1BELine1ValQuality);

// router.get("/UMSeho2BELine1", UMLine1BE.getUMSeho2BELine1);
// router.get("/UMSeho2BELine1QA", UMLine1BE.getUMSeho2BELine1QA);
// router.get("/UMSeho2BELine1QC", UMLine1BE.getUMSeho2BELine1QC);
// router.get("/UMSeho2BELine1Return", UMLine1BE.getUMSeho2BELine1Return);
// router.get("/UMSeho2BELine1ValQuality", UMLine1BE.getUMSeho2BELine1ValQuality);

// router.get("/UMTouchupBELine1", UMLine1BE.getUMTouchupBELine1);
// router.get("/UMTouchupBELine1QA", UMLine1BE.getUMTouchupBELine1QA);
// router.get("/UMTouchupBELine1QC", UMLine1BE.getUMTouchupBELine1QC);
// router.get("/UMTouchupBELine1Return", UMLine1BE.getUMTouchupBELine1Return);
// router.get("/UMTouchupBELine1ValQuality", UMLine1BE.getUMTouchupBELine1ValQuality);

// router.get("/UMICTBELine1", UMLine1BE.getUMICTBELine1);
// router.get("/UMICTBELine1QA", UMLine1BE.getUMICTBELine1QA);
// router.get("/UMICTBELine1QC", UMLine1BE.getUMICTBELine1QC);
// router.get("/UMICTBELine1Return", UMLine1BE.getUMICTBELine1Return);
// router.get("/UMICTBELine1ValQuality", UMLine1BE.getUMICTBELine1ValQuality);

// router.get("/UMFlashBELine1", UMLine1BE.getUMFlashBELine1);
// router.get("/UMFlashBELine1QA", UMLine1BE.getUMFlashBELine1QA);
// router.get("/UMFlashBELine1QC", UMLine1BE.getUMFlashBELine1QC);
// router.get("/UMFlashBELine1Return", UMLine1BE.getUMFlashBELine1Return);
// router.get("/UMFlashBELine1ValQuality", UMLine1BE.getUMFlashBELine1ValQuality);

// router.get("/UMRouterBELine1", UMLine1BE.getUMRouterBELine1);
// router.get("/UMRouterBELine1QA", UMLine1BE.getUMRouterBELine1QA);
// router.get("/UMRouterBELine1QC", UMLine1BE.getUMRouterBELine1QC);
// router.get("/UMRouterBELine1Return", UMLine1BE.getUMRouterBELine1Return);
// router.get("/UMRouterBELine1ValQuality", UMLine1BE.getUMRouterBELine1ValQuality);

module.exports = router;


