// import React, { useState, useEffect, useRef } from "react";
// import firebase from "firebase/compat/app";
// import "firebase/compat/database";
// import Select from "react-select";

// const firebaseConfig = {
//   apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
//   databaseURL:
//     "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
// };
// firebase.initializeApp(firebaseConfig);

// const database = firebase.database();

// const UserMobile = () => {
//   // FIREBASE
//   const [showDrawer, setShowDrawer] = useState(false);
//   //---------------

//   // NAVBAR
//   const [currentTime, setCurrentTime] = useState(new Date());
//   const [time, setTime] = useState(new Date().toLocaleString());
//   // -------------------

//   // popup form 1
//   const [isOpen2, setIsOpen2] = useState(false);

//   const [isGeneral, setIsGeneral] = useState(true);
//   const [isSMTTOP, setIsSMTTOP] = useState(false);
//   const [isSMTBOT, setIsSMTBOT] = useState(false);
//   const [isSMTBE, setIsSMTBE] = useState(false);


//   // popup DestackerTOP
//   const [isRequestGeneral, setIsRequestGeneral] = useState(false);
//   const [isRequestDepartment, setIsRequestDepartment] = useState(false);
//   const [isRequestMaintenance, setIsRequestMaintenance] = useState(false);
//   const [isReturnMaintenance, setIsReturnMaintenance] = useState(false);
//   const [isRequestQA, setIsRequestQA] = useState(false);
//   const [isRequestQC, setIsRequestQC] = useState(false);
//   const [isRepair, setIsRepair] = useState(false);
//   const [isValidation, setIsValidation] = useState(false);

//   // -------------
//   // SMT LINE 1
//   const [StatusLine, setStatusLine] = useState("");
//   // -------------

//   // DATA SCHEDULE PLANING
//   const [data, setData] = useState(null);
//   const [OptionData, setOptionData] = useState(null);


//   // Failure
//   const [dataElectricity, setDataElectricity] = useState(null);
//   const [dataNetwork, setDataNetwork] = useState(null);
//   const [dataAirComp, setDataAirComp] = useState(null);
//   const [dataOthers, setDataOthers] = useState(null);
//   const [dataShorComp, setDataShorcomp] = useState(null);
//   const [dataShorBox, setDataShorbox] = useState(null);
//   const [dataOverTrial, setDataOvertrial] = useState(null);
//   const [dataOverChange, setDataOverchange] = useState(null);
//   // ..

//   const [dataDestackerTOP, setDataDestackerTOP] = useState(null);
//   const [dataDestackerTOPQA, setDataDestackerTOPQA] = useState(null);
//   const [dataDestackerTOPQC, setDataDestackerTOPQC] = useState(null);
//   const [dataDestackerTOPReturn, setDataDestackerTOPReturn] = useState(null);
//   const [dataDestackerTOPValQuality, setDataDestackerTOPValQuality] = useState(null);

//   const [dataLabelTOP, setDataLabelTOP] = useState(null);
//   const [dataLabelTOPQA, setDataLabelTOPQA] = useState(null);
//   const [dataLabelTOPQC, setDataLabelTOPQC] = useState(null);
//   const [dataLabelTOPReturn, setDataLabelTOPReturn] = useState(null);
//   const [dataLabelTOPValQuality, setDataLabelTOPValQuality] = useState(null);

//   const [dataPrinterTOP, setDataPrinterTOP] = useState(null);
//   const [dataPrinterTOPQA, setDataPrinterTOPQA] = useState(null);
//   const [dataPrinterTOPQC, setDataPrinterTOPQC] = useState(null);
//   const [dataPrinterTOPReturn, setDataPrinterTOPReturn] = useState(null);
//   const [dataPrinterTOPValQuality, setDataPrinterTOPValQuality] = useState(null);

//   const [dataSpiTOP, setDataSpiTOP] = useState(null);
//   const [dataSpiTOPQA, setDataSpiTOPQA] = useState(null);
//   const [dataSpiTOPQC, setDataSpiTOPQC] = useState(null);
//   const [dataSpiTOPReturn, setDataSpiTOPReturn] = useState(null);
//   const [dataSpiTOPValQuality, setDataSpiTOPValQuality] = useState(null);

//   const [dataPickNPlaceTOP, setDataPickNPlaceTOP] = useState(null);
//   const [dataPickNPlaceTOPQA, setDataPickNPlaceTOPQA] = useState(null);
//   const [dataPickNPlaceTOPQC, setDataPickNPlaceTOPQC] = useState(null);
//   const [dataPickNPlaceTOPReturn, setDataPickNPlaceTOPReturn] = useState(null);
//   const [dataPickNPlaceTOPValQuality, setDataPickNPlaceTOPValQuality] = useState(null);

//   const [dataReflowTOP, setDataReflowTOP] = useState(null);
//   const [dataReflowTOPQA, setDataReflowTOPQA] = useState(null);
//   const [dataReflowTOPQC, setDataReflowTOPQC] = useState(null);
//   const [dataReflowTOPReturn, setDataReflowTOPReturn] = useState(null);
//   const [dataReflowTOPValQuality, setDataReflowTOPValQuality] = useState(null);

//   const [dataAOITOP, setDataAOITOP] = useState(null);
//   const [dataAOITOPQA, setDataAOITOPQA] = useState(null);
//   const [dataAOITOPQC, setDataAOITOPQC] = useState(null);
//   const [dataAOITOPReturn, setDataAOITOPReturn] = useState(null);
//   const [dataAOITOPValQuality, setDataAOITOPValQuality] = useState(null);

//   const [dataRVSTOP, setDataRVSTOP] = useState(null);
//   const [dataRVSTOPQA, setDataRVSTOPQA] = useState(null);
//   const [dataRVSTOPQC, setDataRVSTOPQC] = useState(null);
//   const [dataRVSTOPReturn, setDataRVSTOPReturn] = useState(null);
//   const [dataRVSTOPValQuality, setDataRVSTOPValQuality] = useState(null);


//   // Data Bot
//   const [dataPrinterBOT, setDataPrinterBOT] = useState(null);
//   const [dataPrinterBOTQA, setDataPrinterBOTQA] = useState(null);
//   const [dataPrinterBOTQC, setDataPrinterBOTQC] = useState(null);
//   const [dataPrinterBOTReturn, setDataPrinterBOTReturn] = useState(null);
//   const [dataPrinterBOTValQuality, setDataPrinterBOTValQuality] = useState(null);


//   const [dataSPIBOT, setDataSPIBOT] = useState(null);
//   const [dataSPIBOTQA, setDataSPIBOTQA] = useState(null);
//   const [dataSPIBOTQC, setDataSPIBOTQC] = useState(null);
//   const [dataSPIBOTReturn, setDataSPIBOTReturn] = useState(null);
//   const [dataSPIBOTValQuality, setDataSPIBOTValQuality] = useState(null);

//   const [dataPickNPlaceBOT, setDataPickNPlaceBOT] = useState(null);
//   const [dataPickNPlaceBOTQA, setDataPickNPlaceBOTQA] = useState(null);
//   const [dataPickNPlaceBOTQC, setDataPickNPlaceBOTQC] = useState(null);
//   const [dataPickNPlaceBOTReturn, setDataPickNPlaceBOTReturn] = useState(null);
//   const [dataPickNPlaceBOTValQuality, setDataPickNPlaceBOTValQuality] = useState(null);

//   const [dataReflowBOT, setDataReflowBOT] = useState(null);
//   const [dataReflowBOTQA, setDataReflowBOTQA] = useState(null);
//   const [dataReflowBOTQC, setDataReflowBOTQC] = useState(null);
//   const [dataReflowBOTReturn, setDataReflowBOTReturn] = useState(null);
//   const [dataReflowBOTValQuality, setDataReflowBOTValQuality] = useState(null);

//   const [dataAOIBOT, setDataAOIBOT] = useState(null);
//   const [dataAOIBOTQA, setDataAOIBOTQA] = useState(null);
//   const [dataAOIBOTQC, setDataAOIBOTQC] = useState(null);
//   const [dataAOIBOTReturn, setDataAOIBOTReturn] = useState(null);
//   const [dataAOIBOTValQuality, setDataAOIBOTValQuality] = useState(null);

//   const [dataRVSBOT, setDataRVSBOT] = useState(null);
//   const [dataRVSBOTQA, setDataRVSBOTQA] = useState(null);
//   const [dataRVSBOTQC, setDataRVSBOTQC] = useState(null);
//   const [dataRVSBOTReturn, setDataRVSBOTReturn] = useState(null);
//   const [dataRVSBOTValQuality, setDataRVSBOTValQuality] = useState(null);

//   // SMT BE

//   const [dataDropinBE, setDataDropinBE] = useState(null);
//   const [dataDropinBEQA, setDataDropinBEQA] = useState(null);
//   const [dataDropinBEQC, setDataDropinBEQC] = useState(null);
//   const [dataDropinBEReturn, setDataDropinBEReturn] = useState(null);
//   const [dataDropinBEValQuality, setDataDropinBEValQuality] = useState(null);

//   const [dataFluxerBE, setDataFluxerBE] = useState(null);
//   const [dataFluxerBEQA, setDataFluxerBEQA] = useState(null);
//   const [dataFluxerBEQC, setDataFluxerBEQC] = useState(null);
//   const [dataFluxerBEReturn, setDataFluxerBEReturn] = useState(null);
//   const [dataFluxerBEValQuality, setDataFluxerBEValQuality] = useState(null);

  
//   const [dataPreHeatBE, setDataPreHeatBE] = useState(null);
//   const [dataPreHeatBEQA, setDataPreHeatBEQA] = useState(null);
//   const [dataPreHeatBEQC, setDataPreHeatBEQC] = useState(null);
//   const [dataPreHeatBEReturn, setDataPreHeatBEReturn] = useState(null);
//   const [dataPreHeatBEValQuality, setDataPreHeatBEValQuality] = useState(null);

//   const [dataSeho1BE, setDataSeho1BE] = useState(null);
//   const [dataSeho1BEQA, setDataSeho1BEQA] = useState(null);
//   const [dataSeho1BEQC, setDataSeho1BEQC] = useState(null);
//   const [dataSeho1BEReturn, setDataSeho1BEReturn] = useState(null);
//   const [dataSeho1BEValQuality, setDataSeho1BEValQuality] = useState(null);

//   const [dataSeho2BE, setDataSeho2BE] = useState(null);
//   const [dataSeho2BEQA, setDataSeho2BEQA] = useState(null);
//   const [dataSeho2BEQC, setDataSeho2BEQC] = useState(null);
//   const [dataSeho2BEReturn, setDataSeho2BEReturn] = useState(null);
//   const [dataSeho2BEValQuality, setDataSeho2BEValQuality] = useState(null);

//   const [dataTouchupBE, setDataTouchupBE] = useState(null);
//   const [dataTouchupBEQA, setDataTouchupBEQA] = useState(null);
//   const [dataTouchupBEQC, setDataTouchupBEQC] = useState(null);
//   const [dataTouchupBEReturn, setDataTouchupBEReturn] = useState(null);
//   const [dataTouchupBEValQuality, setDataTouchupBEValQuality] = useState(null);

//   const [dataICTBE, setDataICTBE] = useState(null);
//   const [dataICTBEQA, setDataICTBEQA] = useState(null);
//   const [dataICTBEQC, setDataICTBEQC] = useState(null);
//   const [dataICTBEReturn, setDataICTBEReturn] = useState(null);
//   const [dataICTBEValQuality, setDataICTBEValQuality] = useState(null);

//   const [dataFlashBE, setDataFlashBE] = useState(null);
//   const [dataFlashBEQA, setDataFlashBEQA] = useState(null);
//   const [dataFlashBEQC, setDataFlashBEQC] = useState(null);
//   const [dataFlashBEReturn, setDataFlashBEReturn] = useState(null);
//   const [dataFlashBEValQuality, setDataFlashBEValQuality] = useState(null);

//   const [dataRouterBE, setDataRouterBE] = useState(null);
//   const [dataRouterBEQA, setDataRouterBEQA] = useState(null);
//   const [dataRouterBEQC, setDataRouterBEQC] = useState(null);
//   const [dataRouterBEReturn, setDataRouterBEReturn] = useState(null);
//   const [dataRouterBEValQuality, setDataRouterBEValQuality] = useState(null);
//   // ---------------------

//   // REAL PRODUCTION TIME

//   const [RealPT1, setRealPT1] = useState("");
//   const [RealPT2, setRealPT2] = useState("");
//   const [RealPT3, setRealPT3] = useState("");
//   const [RealPT4, setRealPT4] = useState("");
//   const [RealPD, setRealPD] = useState("");
//   const [RealOT, setRealOT] = useState("");
//   const [Total, setTotal] = useState("");

//   // -------------

//   // CMA
//   const [CMATime, setCMATime] = useState({ hours: 0, minutes: 0, seconds: 0 });
//   const [CMARunning, setCMARunning] = useState();
//   const [ResultsCMA, setResultsCMA] = useState();

//   // -------------

//   // SMT TOP
//   const [DestackerTop, setDestackerTop] = useState("Destacker (TOP)");
//   const [StatusdestackerTop, setStatusdestackerTop] = useState("");
//   const [StatuslabelTop, setStatuslabelTop] = useState("");
//   const [LabelTop, setLabelTop] = useState("Label (TOP)");
//   const [StatusPrinterTop, setStatusPrinterTop] = useState("");
//   const [PrinterTop, setPrinterTop] = useState("Printer (TOP)");
//   const [StatusSpiTop, setStatusSpiTop] = useState("");
//   const [SpiTop, setSpiTop] = useState("Spi (TOP)");
//   const [StatusPickNPlace, setStatusPickNPlace] = useState("");
//   const [PickNPlace, setPickNPlace] = useState("Pick&Place (TOP)");
//   const [StatusReflowTop, setStatusReflowTop] = useState("");
//   const [ReflowTop, setReflowTop] = useState("Reflow (TOP)");
//   const [StatusAOITop, setStatusAOITop] = useState("");
//   const [AOITop, setAOITop] = useState("AOI (TOP)");
//   const [StatusRVSTop, setStatusRVSTop] = useState("");
//   const [RVSTop, setRVSTop] = useState("RVS (TOP)");

//   // SMT BOT
//   const [PrinterBot, setPrinterBot] = useState("Printer (BOT)");
//   const [StatusPrinterBot, setStatusPrinterBot] = useState("");
//   const [StatusSpiBot, setStatusSpiBot] = useState("");
//   const [SpiBot, setSpiBot] = useState("Spi (BOT)");
//   const [StatusPickNPlaceBot, setStatusPickNPlaceBot] = useState("");
//   const [PickNPlaceBot, setPickNPlaceBot] = useState("Pick&Place (BOT)");
//   const [StatusReflowBot, setStatusReflowBot] = useState("");
//   const [ReflowBot, setReflowBot] = useState("Reflow (BOT)");
//   const [StatusAOIBot, setStatusAOIBot] = useState("");
//   const [AOIBot, setAOIBot] = useState("AOI (BOT)");
//   const [StatusRVSBot, setStatusRVSBot] = useState("");
//   const [RVSBot, setRVSBot] = useState("RVS (BOT)");
//   // .............

//   // SMT BE
//   const [DropinBE, setDropinBE] = useState("Drop in (BE)");
//   const [StatusDropinBE, setStatusDropinBE] = useState("");
//   const [StatusFluxerBE, setStatusFluxerBE] = useState("");
//   const [FluxerBE, setFluxerBE] = useState("Fluxer (BE)");
//   const [StatusPreheatBE, setStatusPreheatBE] = useState("");
//   const [PreheatBE, setPreheatBE] = useState("PreHeat (BE)");
//   const [StatusSeho1BE, setStatusSeho1BE] = useState("");
//   const [Seho1BE, setSeho1BE] = useState("Seho1 (BE)");
//   const [StatusSeho2BE, setStatusSeho2BE] = useState("");
//   const [Seho2BE, setSeho2BE] = useState("Seho2 (BE)");
//   const [StatusTouchupBE, setStatusTouchupBE] = useState("");
//   const [TouchupBE, setTouchupBE] = useState("Touch UP (BE)");
//   const [StatusICTBE, setStatusICTBE] = useState("");
//   const [ICTBE, setICTBE] = useState("ICT (BE)");
//   const [StatusFlashBE, setStatusFlashBE] = useState("");
//   const [FlashBE, setFlashBE] = useState("Flash (BE)");
//   const [StatusRouterBE, setStatusRouterBE] = useState("");
//   const [RouterBE, setRouterBE] = useState("Router (BE)");
//   // .............

//   // Status Failure
//   const [Others, setOthers] = useState("");
//   const [StatusOthers, setStatusOthers] = useState("");
//   const [Network, setNetwork] = useState("");
//   const [StatusNetwork, setStatusNetwork] = useState("");
//   const [Electricity, setElectricity] = useState("");
//   const [StatusElectricity, setStatusElectricity] = useState("");
//   const [Aircomp, setAircomp] = useState("");
//   const [StatusAircomp, setStatusAircomp] = useState("");
//   const [Shorcomp, setShorcomp] = useState("");
//   const [StatusShorcomp, setStatusShorcomp] = useState("");
//   const [Shorbox, setShorbox] = useState("");
//   const [StatusShorbox, setStatusShorbox] = useState("");
//   const [Overtrial, setOvertrial] = useState("");
//   const [StatusOvertrial, setStatusOvertrial] = useState("");
//   const [Overchange, setOverchange] = useState("");
//   const [StatusOverchange, setStatusOverchange] = useState("");

//   // ------------------------

//   //BACKGROUND Failure
//   const [backgroundColor, setBackgroundColor] = useState("");
//   const [backgroundColorOthers, setBackgroundColorOthers] = useState("");
//   const [backgroundColorNetwork, setBackgroundColorNetwork] = useState("");
//   const [backgroundColorElectricity, setBackgroundColorElectricity] =
//     useState("");
//   const [backgroundColorAircomp, setBackgroundColorAircomp] = useState("");
//   const [backgroundColorShorcomp, setBackgroundColorShorcomp] = useState("");
//   const [backgroundColorShorbox, setBackgroundColorShorbox] = useState("");
//   const [backgroundColorOvertrial, setBackgroundColorOvertrial] = useState("");
//   const [backgroundColorOverchange, setBackgroundColorOverchange] =
//     useState("");
//   // ------------------

//   //BACKGROUND Top
//   const [
//     backgroundColorStatusdestackerTop,
//     setBackgroundColorStatusdestackerTop,
//   ] = useState("");
//   const [backgroundColorStatuslabelTop, setBackgroundColorStatuslabelTop] =
//     useState("");
//   const [backgroundColorStatusPrinterTop, setBackgroundColorStatusPrinterTop] =
//     useState("");
//   const [backgroundColorStatusSpiTop, setBackgroundColorStatusSpiTop] =
//     useState("");
//   const [backgroundColorStatusPickNPlace, setBackgroundColorStatusPickNPlace] =
//     useState("");
//   const [backgroundColorStatusReflowTop, setBackgroundColorStatusReflowTop] =
//     useState("");
//   const [backgroundColorStatusAOITop, setBackgroundColorStatusAOITop] =
//     useState("");
//   const [backgroundColorStatusRVSTop, setBackgroundColorStatusRVSTop] =
//     useState("");
//   // ------------------

//   //BACKGROUND BOT
//   const [backgroundColorStatusPrinterBot, setBackgroundColorStatusPrinterBot] =
//     useState("");
//   const [backgroundColorStatusSpiBot, setBackgroundColorStatusSpiBot] =
//     useState("");
//   const [
//     backgroundColorStatusPickNPlaceBot,
//     setBackgroundColorStatusPickNPlaceBot,
//   ] = useState("");
//   const [backgroundColorStatusReflowBot, setBackgroundColorStatusReflowBot] =
//     useState("");
//   const [backgroundColorStatusAOIBot, setBackgroundColorStatusAOIBot] =
//     useState("");
//   const [backgroundColorStatusRVSBot, setBackgroundColorStatusRVSBot] =
//     useState("");
//   // ------------------

//   //BACKGROUND BE
//   const [backgroundColorStatusDropinBE, setBackgroundColorStatusDropinBE] =
//     useState("");
//   const [backgroundColorStatusFluxerBE, setBackgroundColorStatusFluxerBE] =
//     useState("");
//   const [backgroundColorStatusPreheatBE, setBackgroundColorStatusPreheatBE] =
//     useState("");
//   const [backgroundColorStatusSeho1BE, setBackgroundColorStatusSeho1BE] =
//     useState("");
//   const [backgroundColorStatusSeho2BE, setBackgroundColorStatusSeho2BE] =
//     useState("");
//   const [backgroundColorStatusTouchupBE, setBackgroundColorStatusTouchupBE] =
//     useState("");
//   const [backgroundColorStatusICTBE, setBackgroundColorStatusICTBE] =
//     useState("");
//   const [backgroundColorStatusFlashBE, setBackgroundColorStatusFlashBE] =
//     useState("");
//   const [backgroundColorStatusRouterBE, setBackgroundColorStatusRouterBE] =
//     useState("");
//   // ------------------

//   // Gesture Button

//   // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//   //  fungsi mengambil data dari firebase
//   const toggleDrawer = () => {
//     setShowDrawer(!showDrawer);
//   };

//   // Fetching FIrebase
//   useEffect(() => {
//     const ref2 = firebase.database().ref("StatusLine/SMTLine1");
//     ref2.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setStatusLine(data);
//     });

//     const ref10 = firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing");
//     ref10.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setResultsCMA(data);
//     });

//     const ref11 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1");
//     ref11.on("value", (snapshot) => {
//       const data = snapshot.val();

//       setRealPT1(data);
//     });

//     const ref12 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime2");
//     ref12.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setRealPT2(data);
//     });

//     const ref13 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime3");
//     ref13.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setRealPT3(data);
//     });

//     const ref14 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime4");
//     ref14.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setRealPT4(data);
//     });

//     const ref15 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/DownTime");
//     ref15.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setRealPD(data);
//     });

//     const ref16 = firebase
//       .database()
//       .ref("/StatusLine/SMTLine1ProductionTime/OverTime");
//     ref16.on("value", (snapshot) => {
//       const data = snapshot.val();
//       setRealOT(data);
//     });

//     // Failure

//     const ref20 = firebase.database().ref("SMTLine1/Network");
//     ref20.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateNetwork(data);
//     });

//     const ref21 = firebase.database().ref("SMTLine1/Electricity");
//     ref21.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateElectricity(data);
//     });

//     const ref22 = firebase.database().ref("SMTLine1/Air Compressor");
//     ref22.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateAircomp(data);
//     });

//     const ref23 = firebase.database().ref("SMTLine1/Shortage Comp");
//     ref23.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateShorcomp(data);
//     });

//     const ref24 = firebase.database().ref("SMTLine1/Shortage Box FG");
//     ref24.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateShorbox(data);
//     });

//     const ref25 = firebase.database().ref("SMTLine1/Over Trial");
//     ref25.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateOvertrial(data);
//     });


//     const ref26 = firebase.database().ref("SMTLine1/Over Change Model");
//     ref26.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateOverchange(data);
//     });

//     const ref27 = firebase.database().ref("SMTLine1/Others");
//     ref27.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateOthers(data);
//     });

//     // SMT TOP

//     const ref28 = firebase.database().ref("SMTLine1TOP/Destacker (TOP)");
//     ref28.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusdestackerTop(data);
//     });


//     const ref29 = firebase.database().ref("SMTLine1TOP/Label (TOP)");
//     ref29.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatuslabelTop(data);
//     });


//     const ref30 = firebase.database().ref("/SMTLine1TOP/Printer (TOP)");
//     ref30.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusPrinterTop(data);
//     });

//     const ref31 = firebase.database().ref("/SMTLine1TOP/Spi (TOP)");
//     ref31.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusSpiTop(data);
//     });

//     const ref32 = firebase.database().ref("/SMTLine1TOP/Pick&Place (TOP)");
//     ref32.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusPickNPlace(data);
//     });

//     const ref33 = firebase.database().ref("/SMTLine1TOP/Reflow (TOP)");
//     ref33.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusReflowTop(data);
//     });

//     const ref34 = firebase.database().ref("/SMTLine1TOP/AOI (TOP)");
//     ref34.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusAOITop(data);
//     });

//     const ref35 = firebase.database().ref("/SMTLine1TOP/RVS (TOP)");
//     ref35.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusRVSTop(data);
//     });

//     // SMT BOT
//     const ref36 = firebase.database().ref("SMTLine1BOT/Printer (BOT)");
//     ref36.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusPrinterBot(data);
//     });

//     const ref37 = firebase.database().ref("SMTLine1BOT/Spi (BOT)");
//     ref37.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusSpiBot(data);
//     });


//     const ref38 = firebase.database().ref("/SMTLine1BOT/Pick&Place (BOT)");
//     ref38.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusPickNPlaceBot(data);
//     });

//     const ref39 = firebase.database().ref("/SMTLine1BOT/Reflow (BOT)");
//     ref39.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusReflowBot(data);
//     });

//     const ref40 = firebase.database().ref("/SMTLine1BOT/AOI (BOT)");
//     ref40.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusAOIBot(data);
//     });

//     const ref41 = firebase.database().ref("/SMTLine1BOT/RVS (BOT)");
//     ref41.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusRVSBot(data);
//     });


//     // Update Status BE

//     const ref42 = firebase.database().ref("SMTLine1BE/Drop in (BE)");
//     ref42.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusDropinBE(data);
//     });

//     const ref43 = firebase.database().ref("SMTLine1BE/Fluxer (BE)");
//     ref43.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusFluxerBE(data);
//     });

//     const ref44 = firebase.database().ref("/SMTLine1BE/PreHeat (BE)");
//     ref44.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusPreheatBE(data);
//     });

//     const ref45 = firebase.database().ref("/SMTLine1BE/Seho1 (BE)");
//     ref45.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusSeho1BE(data);
//     });

//     const ref46 = firebase.database().ref("/SMTLine1BE/Seho2 (BE)");
//     ref46.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusSeho2BE(data);
//     });

//     const ref47 = firebase.database().ref("/SMTLine1BE/Touch UP (BE)");
//     ref47.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusTouchupBE(data);
//     });

//     const ref48 = firebase.database().ref("/SMTLine1BE/ICT (BE)");
//     ref48.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusICTBE(data);
//     });

//     const ref49 = firebase.database().ref("/SMTLine1BE/Flash (BE)");
//     ref49.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusFlashBE(data);
//     });


//     const ref50 = firebase.database().ref("/SMTLine1BE/Router (BE)");
//     ref50.on("value", (snapshot) => {
//       const data = snapshot.val();
//       updateStatusRouterBE(data);
//     });
//     // ...........

//     return () => { };
//   }, []);

//   // ---------------------

//   // Realtime production
//   const calculateTotalTime = () => {
//     let totalJam = 0;
//     let totalMenit = 0;

//     // Mengambil nilai dari state
//     const waktuPT1 = RealPT1.split(" ");
//     const waktuPT2 = RealPT2.split(" ");
//     const waktuPT3 = RealPT3.split(" ");
//     const waktuPT4 = RealPT4.split(" ");
//     const waktuPD = RealPD.split(" ");
//     const waktuOT = RealOT.split(" ");

//     // Menambahkan waktu PT1
//     if (waktuPT1[0] !== "waiting...") {
//       if (waktuPT1.length === 4) {
//         totalJam += parseInt(waktuPT1[0]);
//         totalMenit += parseInt(waktuPT1[2]);
//       } else if (waktuPT1.length === 2) {
//         totalMenit += parseInt(waktuPT1[0]);
//       }
//     }

//     // Menambahkan waktu PT2
//     if (waktuPT2[0] !== "waiting...") {
//       if (waktuPT2.length === 4) {
//         totalJam += parseInt(waktuPT2[0]);
//         totalMenit += parseInt(waktuPT2[2]);
//       } else if (waktuPT2.length === 2) {
//         totalMenit += parseInt(waktuPT2[0]);
//       }
//     }

//     // Menambahkan waktu PT3
//     if (waktuPT3[0] !== "waiting...") {
//       if (waktuPT3.length === 4) {
//         totalJam += parseInt(waktuPT3[0]);
//         totalMenit += parseInt(waktuPT3[2]);
//       } else if (waktuPT3.length === 2) {
//         totalMenit += parseInt(waktuPT3[0]);
//       }
//     }

//     // Menambahkan waktu PT4
//     if (waktuPT4[0] !== "waiting...") {
//       if (waktuPT4.length === 4) {
//         totalJam += parseInt(waktuPT4[0]);
//         totalMenit += parseInt(waktuPT4[2]);
//       } else if (waktuPT4.length === 2) {
//         totalMenit += parseInt(waktuPT4[0]);
//       }
//     }

//     // Menambahkan waktu PD jika bukan "waiting..."
//     if (waktuPD[0] !== "waiting...") {
//       if (waktuPD.length === 4) {
//         totalJam += parseInt(waktuPD[0]);
//         totalMenit += parseInt(waktuPD[2]);
//       } else if (waktuPD.length === 2) {
//         totalMenit += parseInt(waktuPD[0]);
//       }
//     }

//     // Menambahkan waktu OT jika bukan "waiting..."
//     if (waktuOT[0] !== "waiting...") {
//       if (waktuOT.length === 4) {
//         totalJam += parseInt(waktuOT[0]);
//         totalMenit += parseInt(waktuOT[2]);
//       } else if (waktuOT.length === 2) {
//         totalMenit += parseInt(waktuOT[0]);
//       }
//     }

//     // Mengubah menit menjadi jam jika lebih dari 60
//     if (totalMenit >= 60) {
//       const tambahanJam = Math.floor(totalMenit / 60);
//       totalJam += tambahanJam;
//       totalMenit -= tambahanJam * 60;
//     }

//     // Mengatur nilai hasil penjumlahan ke state Total
//     const output = `${totalJam} jam ${totalMenit} menit`;
//     setTotal(output);
//   };

//   useEffect(() => {
//     calculateTotalTime();
//   }, [RealPT1, RealPT2, RealPT3, RealPT4, RealPD, RealOT]);

//   // CMA WAKTU / FIREBASE

//   let CMAInterval;
//   useEffect(() => {
//     if (CMARunning) {
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       CMAInterval = setInterval(() => {
//         setCMATime((prevTime) => {
//           const newSeconds = prevTime.seconds + 1;
//           const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
//           const newHours = prevTime.hours + Math.floor(newMinutes / 60);
//           const newTime = {
//             hours: newHours,
//             minutes: newMinutes % 60,
//             seconds: newSeconds % 60,
//           };
//           firebase
//             .database()
//             .ref("StatusLine/SMTLine1CMALastTime")
//             .set(newTime);
//           firebase
//             .database()
//             .ref("/StatusLine/SMTLine1CMAOnGoing")
//             .set(
//               `${newTime.hours} Jam ${newTime.minutes} Menit ${newTime.seconds} Detik`
//             );
//           return newTime;
//         });
//       }, 1000); // 1 detik = 1000 ms
//     }

//     // Mengambil waktu terakhir yang dihitung dari Firebase saat halaman dimuat ulang
//     firebase
//       .database()
//       .ref("StatusLine/SMTLine1CMALastTime")
//       .once("value")
//       .then((snapshot) => {
//         const lastTime = snapshot.val();
//         if (lastTime) {
//           setCMATime(lastTime);
//         }
//       });

//     return () => clearInterval(CMAInterval);
//   }, [CMARunning]);

//   // FETCHING SCHEDULE
//   function formatDate(dateString) {
//     const options = { day: "numeric", month: "numeric", year: "numeric" };
//     const formattedDate = new Date(dateString).toLocaleDateString(
//       "id-ID",
//       options
//     );
//     return formattedDate;
//   }
//   // Fetching Data Schedule Planing
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://andonline.astra-visteon.com:3002/api/ScheduleProduction"
//         );
//         const jsonData = await response.json();
//         const latestData = jsonData[jsonData.length - 1]; // Ambil data terakhir

//         setData(latestData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   // ----

//   //  FUNGSI WAKTU
//   const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1
//     }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

//   // fungsi time di navbar
//   function updateTime() {
//     const interval = setInterval(() => {
//       setTime(new Date().toLocaleString());
//     }, 1000);
//     return () => clearInterval(interval);
//   }
//   useEffect(() => {
//     updateTime();
//   }, []);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentTime(new Date());
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   // ----

//   // FUNGSI UPDATE STATUS


//   // UPDATE Others
//   const updateOthers = (data) => {
//     setStatusOthers(data);
//     setBackgroundColorOthers(
//       data === "Go"
//         ? "rgb(54, 83, 20)"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "HRGA & EHS"
//             ? "#A61D00"
//             : data === "PURCHASING,PPIC,MP&L"
//               ? "#873e23"
//               : data === "PROCESS ENGINEERING"
//                 ? "#1e81b0"
//                 : data === "PRODUCT DEVELOPMENT"
//                   ? "#233087"
//                   : data === "ADVANCED MANUFACTURING ENGINEERING"
//                     ? "#C5B602"
//                     : data === "QA"
//                       ? "#93C2C4"
//                       : data === "QC"
//                         ? "#BDD0D1"
//                         : data === "MAINTENANCE & IT"
//                           ? "#be4f62"
//                           : "#565454"
//     );
//   };

//   // UPDATE Network
//   const updateNetwork = (data) => {
//     setStatusNetwork(data);
//     setBackgroundColorNetwork(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE Electricity
//   const updateElectricity = (data) => {
//     setStatusElectricity(data);
//     setBackgroundColorElectricity(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE Aircomp
//   const updateAircomp = (data) => {
//     setStatusAircomp(data);
//     setBackgroundColorAircomp(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE Shorcomp
//   const updateShorcomp = (data) => {
//     setStatusShorcomp(data);
//     setBackgroundColorShorcomp(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE Shorbox
//   const updateShorbox = (data) => {
//     setStatusShorbox(data);
//     setBackgroundColorShorbox(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE OverTrial
//   const updateOvertrial = (data) => {
//     setStatusOvertrial(data);
//     setBackgroundColorOvertrial(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };

//   // UPDATE Overchangemodel
//   const updateOverchange = (data) => {
//     setStatusOverchange(data);
//     setBackgroundColorOverchange(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Down"
//             ? "#C00000"
//             : "#565454"
//     );
//   };


//   // Update Status SMT TOP
//   const updateStatusdestackerTop = (data) => {
//     setStatusdestackerTop(data);
//     setBackgroundColorStatusdestackerTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatuslabelTop = (data) => {
//     setStatuslabelTop(data);
//     setBackgroundColorStatuslabelTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusPrinterTop = (data) => {
//     setStatusPrinterTop(data);
//     setBackgroundColorStatusPrinterTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusSpiTop = (data) => {
//     setStatusSpiTop(data);
//     setBackgroundColorStatusSpiTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusPickNPlace = (data) => {
//     setStatusPickNPlace(data);
//     setBackgroundColorStatusPickNPlace(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusReflowTop = (data) => {
//     setStatusReflowTop(data);
//     setBackgroundColorStatusReflowTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusAOITop = (data) => {
//     setStatusAOITop(data);
//     setBackgroundColorStatusAOITop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusRVSTop = (data) => {
//     setStatusRVSTop(data);
//     setBackgroundColorStatusRVSTop(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   // Update Status BOT

//   const updateStatusPrinterBot = (data) => {
//     setStatusPrinterBot(data);
//     setBackgroundColorStatusPrinterBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusSpiBot = (data) => {
//     setStatusSpiBot(data);
//     setBackgroundColorStatusSpiBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusPickNPlaceBot = (data) => {
//     setStatusPickNPlaceBot(data);
//     setBackgroundColorStatusPickNPlaceBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusReflowBot = (data) => {
//     setStatusReflowBot(data);
//     setBackgroundColorStatusReflowBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusAOIBot = (data) => {
//     setStatusAOIBot(data);
//     setBackgroundColorStatusAOIBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusRVSBot = (data) => {
//     setStatusRVSBot(data);
//     setBackgroundColorStatusRVSBot(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   // Update Status BE

//   const updateStatusDropinBE = (data) => {
//     setStatusDropinBE(data);
//     setBackgroundColorStatusDropinBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusFluxerBE = (data) => {
//     setStatusFluxerBE(data);
//     setBackgroundColorStatusFluxerBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusPreheatBE = (data) => {
//     setStatusPreheatBE(data);
//     setBackgroundColorStatusPreheatBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusSeho1BE = (data) => {
//     setStatusSeho1BE(data);
//     setBackgroundColorStatusSeho1BE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusSeho2BE = (data) => {
//     setStatusSeho2BE(data);
//     setBackgroundColorStatusSeho2BE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusTouchupBE = (data) => {
//     setStatusTouchupBE(data);
//     setBackgroundColorStatusTouchupBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusICTBE = (data) => {
//     setStatusICTBE(data);
//     setBackgroundColorStatusICTBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusFlashBE = (data) => {
//     setStatusFlashBE(data);
//     setBackgroundColorStatusFlashBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };

//   const updateStatusRouterBE = (data) => {
//     setStatusRouterBE(data);
//     setBackgroundColorStatusRouterBE(
//       data === "Go"
//         ? "#31A207"
//         : data === "Repair"
//           ? "#E9CE08"
//           : data === "Leader"
//             ? "#C00000"
//             : data === "Maintenance"
//               ? "#be4f62"
//               : data === "Return Maintenance"
//                 ? "#be4f62"
//                 : data === "PPIC"
//                   ? "#7A6544"
//                   : data === "QA"
//                     ? "#93C2C4"
//                     : data === "QC"
//                       ? "#BDD0D1"
//                       : "#565454"
//     );
//   };
//   // ----

//   // Function Call Leader
//   const handleCall = () => {
//     window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
//   };

//   const handleCall2 = () => {
//     window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
//   };
//   // ------

//   const styles = {
//     background: "linear-gradient(800deg, #020A2F, #1E295D)",
//     backgroundSize: "1300px",
//     backgroundPosition: "0px",
//     height: "1500px", // Change the height according to your needs
//   };


//   const formatDateAPI = (dateString) => {
//     if (!dateString) return "";

//     const date = new Date(dateString);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     const hours = date.getHours().toString().padStart(2, '0'); // Add leading zeros to hours
//     const minutes = date.getMinutes().toString().padStart(2, '0'); // Add leading zeros to minutes

//     return `${day}/${month}/${year} ~~ ${hours}:${minutes} WIB`;
//   };



//   // Fetch Failure



//   // ....

//   // Printer
//   const fetchDataNetwork = () => fetchData("UMNetworkLine1", setDataNetwork);
//   const fetchDataElectricity = () => fetchData("UMElectricityLine1", setDataElectricity);
//   const fetchDataAirComp = () => fetchData("UMNAirCompLine1", setDataAirComp);
//   const fetchDataOthers = () => fetchData("UMNOthersLine1", setDataOthers);
//   const fetchDataShorComp = () => fetchData("UMNShorCompLine1", setDataShorcomp);
//   const fetchDataShorBox = () => fetchData("UMNShorBoxLine1", setDataShorbox);
//   const fetchDataOverTrial = () => fetchData("UMNOverTrialLine1", setDataOvertrial);
//   const fetchDataOverChange = () => fetchData("UMNOverChangeLine1", setDataOverchange);

//   const fetchDataDestackerTOP = () => fetchData("UMDestackerTOPLine1", setDataDestackerTOP);
//   const fetchDataDestackerTOPQA = () => fetchData("UMDestackerTOPLine1QA", setDataDestackerTOPQA);
//   const fetchDataDestackerTOPQC = () => fetchData("UMDestackerTOPLine1QC", setDataDestackerTOPQC);
//   const fetchDataDestackerTOPReturn = () => fetchData("UMDestackerTOPLine1Return", setDataDestackerTOPReturn);
//   const fetchDataDestackerTOPValQuality = () => fetchData("UMDestackerTOPLine1ValQuality", setDataDestackerTOPValQuality);

//   const fetchDataLabelTOP = () => fetchData("UMLabelTOPLine1", setDataLabelTOP);
//   const fetchDataLabelTOPQA = () => fetchData("UMLabelTOPLine1QA", setDataLabelTOPQA);
//   const fetchDataLabelTOPQC = () => fetchData("UMLabelTOPLine1QC", setDataLabelTOPQC);
//   const fetchDataLabelTOPReturn = () => fetchData("UMLabelTOPLine1Return", setDataLabelTOPReturn);
//   const fetchDataLabelTOPValQuality = () => fetchData("UMLabelTOPLine1ValQuality", setDataLabelTOPValQuality);

//   const fetchDataPrinterTOP = () => fetchData("UMPrinterTOPLine1", setDataPrinterTOP);
//   const fetchDataPrinterTOPQA = () => fetchData("UMPrinterTOPLine1QA", setDataPrinterTOPQA);
//   const fetchDataPrinterTOPQC = () => fetchData("UMPrinterTOPLine1QC", setDataPrinterTOPQC);
//   const fetchDataPrinterTOPReturn = () => fetchData("UMPrinterTOPLine1Return", setDataPrinterTOPReturn);
//   const fetchDataPrinterTOPValQuality = () => fetchData("UMPrinterTOPLine1ValQuality", setDataPrinterTOPValQuality);

//   const fetchDataSpiTOP = () => fetchData("UMSpiTOPLine1", setDataSpiTOP);
//   const fetchDataSpiTOPQA = () => fetchData("UMSpiTOPLine1QA", setDataSpiTOPQA);
//   const fetchDataSpiTOPQC = () => fetchData("UMSpiTOPLine1QC", setDataSpiTOPQC);
//   const fetchDataSpiTOPReturn = () => fetchData("UMSpiTOPLine1Return", setDataSpiTOPReturn);
//   const fetchDataSpiTOPValQuality = () => fetchData("UMSpiTOPLine1ValQuality", setDataSpiTOPValQuality);

//   const fetchDataPickNPlaceTOP = () => fetchData("UMPickNPlaceTOPLine1", setDataPickNPlaceTOP);
//   const fetchDataPickNPlaceTOPQA = () => fetchData("UMPickNPlaceTOPLine1QA", setDataPickNPlaceTOPQA);
//   const fetchDataPickNPlaceTOPQC = () => fetchData("UMPickNPlaceTOPLine1QC", setDataPickNPlaceTOPQC);
//   const fetchDataPickNPlaceTOPReturn = () => fetchData("UMPickNPlaceTOPLine1Return", setDataPickNPlaceTOPReturn);
//   const fetchDataPickNPlaceTOPValQuality = () => fetchData("UMPickNPlaceTOPLine1ValQuality", setDataPickNPlaceTOPValQuality);

//   const fetchDataReflowTOP = () => fetchData("UMReflowTOPLine1", setDataReflowTOP);
//   const fetchDataReflowTOPQA = () => fetchData("UMReflowTOPLine1QA", setDataReflowTOPQA);
//   const fetchDataReflowTOPQC = () => fetchData("UMReflowTOPLine1QC", setDataReflowTOPQC);
//   const fetchDataReflowTOPReturn = () => fetchData("UMReflowTOPLine1Return", setDataReflowTOPReturn);
//   const fetchDataReflowTOPValQuality = () => fetchData("UMReflowTOPLine1ValQuality", setDataReflowTOPValQuality);


//   const fetchDataAOITOP = () => fetchData("UMAOITOPLine1", setDataAOITOP);
//   const fetchDataAOITOPQA = () => fetchData("UMAOITOPLine1QA", setDataAOITOPQA);
//   const fetchDataAOITOPQC = () => fetchData("UMAOITOPLine1QC", setDataAOITOPQC);
//   const fetchDataAOITOPReturn = () => fetchData("UMAOITOPLine1Return", setDataAOITOPReturn);
//   const fetchDataAOITOPValQuality = () => fetchData("UMAOITOPLine1ValQuality", setDataAOITOPValQuality);

//   const fetchDataRVSTOP = () => fetchData("UMRVSTOPLine1", setDataRVSTOP);
//   const fetchDataRVSTOPQA = () => fetchData("UMRVSTOPLine1QA", setDataRVSTOPQA);
//   const fetchDataRVSTOPQC = () => fetchData("UMRVSTOPLine1QC", setDataRVSTOPQC);
//   const fetchDataRVSTOPReturn = () => fetchData("UMRVSTOPLine1Return", setDataRVSTOPReturn);
//   const fetchDataRVSTOPValQuality = () => fetchData("UMRVSTOPLine1ValQuality", setDataRVSTOPValQuality);

// // BOT
//   const fetchDataPrinterBOT = () => fetchData("UMPrinterBOTLine1", setDataPrinterBOT);
//   const fetchDataPrinterBOTQA = () => fetchData("UMPrinterBOTLine1QA", setDataPrinterBOTQA);
//   const fetchDataPrinterBOTQC = () => fetchData("UMPrinterBOTLine1QC", setDataPrinterBOTQC);
//   const fetchDataPrinterBOTReturn = () => fetchData("UMPrinterBOTLine1Return", setDataPrinterBOTReturn);
//   const fetchDataPrinterBOTValQuality = () => fetchData("UMPrinterBOTLine1ValQuality", setDataPrinterBOTValQuality);

//   const fetchDataSPIBOT = () => fetchData("UMSPIBOTLine1", setDataSPIBOT);
//   const fetchDataSPIBOTQA = () => fetchData("UMSPIBOTLine1QA", setDataSPIBOTQA);
//   const fetchDataSPIBOTQC = () => fetchData("UMSPIBOTLine1QC", setDataSPIBOTQC);
//   const fetchDataSPIBOTReturn = () => fetchData("UMSPIBOTLine1Return", setDataSPIBOTReturn);
//   const fetchDataSPIBOTValQuality = () => fetchData("UMSPIBOTLine1ValQuality", setDataSPIBOTValQuality);

//   const fetchDataPickNPlaceBOT = () => fetchData("UMPickNPlaceBOTLine1", setDataPickNPlaceBOT);
//   const fetchDataPickNPlaceBOTQA = () => fetchData("UMPickNPlaceBOTLine1QA", setDataPickNPlaceBOTQA);
//   const fetchDataPickNPlaceBOTQC = () => fetchData("UMPickNPlaceBOTLine1QC", setDataPickNPlaceBOTQC);
//   const fetchDataPickNPlaceBOTReturn = () => fetchData("UMPickNPlaceBOTLine1Return", setDataPickNPlaceBOTReturn);
//   const fetchDataPickNPlaceBOTValQuality = () => fetchData("UMPickNPlaceBOTLine1ValQuality", setDataPickNPlaceBOTValQuality);

//   const fetchDataReflowBOT = () => fetchData("UMReflowBOTLine1", setDataReflowBOT);
//   const fetchDataReflowBOTQA = () => fetchData("UMReflowBOTLine1QA", setDataReflowBOTQA);
//   const fetchDataReflowBOTQC = () => fetchData("UMReflowBOTLine1QC", setDataReflowBOTQC);
//   const fetchDataReflowBOTReturn = () => fetchData("UMReflowBOTLine1Return", setDataReflowBOTReturn);
//   const fetchDataReflowBOTValQuality = () => fetchData("UMReflowBOTLine1ValQuality", setDataReflowBOTValQuality);

//   const fetchDataAOIBOT = () => fetchData("UMAOIBOTLine1", setDataAOIBOT);
//   const fetchDataAOIBOTQA = () => fetchData("UMAOIBOTLine1QA", setDataAOIBOTQA);
//   const fetchDataAOIBOTQC = () => fetchData("UMAOIBOTLine1QC", setDataAOIBOTQC);
//   const fetchDataAOIBOTReturn = () => fetchData("UMAOIBOTLine1Return", setDataAOIBOTReturn);
//   const fetchDataAOIBOTValQuality = () => fetchData("UMAOIBOTLine1ValQuality", setDataAOIBOTValQuality);

//   const fetchDataRVSBOT = () => fetchData("UMRVSBOTLine1", setDataRVSBOT);
//   const fetchDataRVSBOTQA = () => fetchData("UMRVSBOTLine1QA", setDataRVSBOTQA);
//   const fetchDataRVSBOTQC = () => fetchData("UMRVSBOTLine1QC", setDataRVSBOTQC);
//   const fetchDataRVSBOTReturn = () => fetchData("UMRVSBOTLine1Return", setDataRVSBOTReturn);
//   const fetchDataRVSBOTValQuality = () => fetchData("UMRVSBOTLine1ValQuality", setDataRVSBOTValQuality);

//   // smt be

//   const fetchDataDropinBE = () => fetchData("UMDropinBELine1", setDataDropinBE);
//   const fetchDataDropinBEQA = () => fetchData("UMDropinBELine1QA", setDataDropinBEQA);
//   const fetchDataDropinBEQC = () => fetchData("UMDropinBELine1QC", setDataDropinBEQC);
//   const fetchDataDropinBEReturn = () => fetchData("UMDropinBELine1Return", setDataDropinBEReturn);
//   const fetchDataDropinBEValQuality = () => fetchData("UMDropinBELine1ValQuality", setDataDropinBEValQuality);

//   const fetchDataFluxerBE = () => fetchData("UMFluxerBELine1", setDataFluxerBE);
//   const fetchDataFluxerBEQA = () => fetchData("UMFluxerBELine1QA", setDataFluxerBEQA);
//   const fetchDataFluxerBEQC = () => fetchData("UMFluxerBELine1QC", setDataFluxerBEQC);
//   const fetchDataFluxerBEReturn = () => fetchData("UMFluxerBELine1Return", setDataFluxerBEReturn);
//   const fetchDataFluxerBEValQuality = () => fetchData("UMFluxerBELine1ValQuality", setDataFluxerBEValQuality);

//   const fetchDataPreHeatBE = () => fetchData("UMPreHeatBELine1", setDataPreHeatBE);
//   const fetchDataPreHeatBEQA = () => fetchData("UMPreHeatBELine1QA", setDataPreHeatBEQA);
//   const fetchDataPreHeatBEQC = () => fetchData("UMPreHeatBELine1QC", setDataPreHeatBEQC);
//   const fetchDataPreHeatBEReturn = () => fetchData("UMPreHeatBELine1Return", setDataPreHeatBEReturn);
//   const fetchDataPreHeatBEValQuality = () => fetchData("UMPreHeatBELine1ValQuality", setDataPreHeatBEValQuality);

//   const fetchDataSeho1BE = () => fetchData("UMSeho1BELine1", setDataSeho1BE);
//   const fetchDataSeho1BEQA = () => fetchData("UMSeho1BELine1QA", setDataSeho1BEQA);
//   const fetchDataSeho1BEQC = () => fetchData("UMSeho1BELine1QC", setDataSeho1BEQC);
//   const fetchDataSeho1BEReturn = () => fetchData("UMSeho1BELine1Return", setDataSeho1BEReturn);
//   const fetchDataSeho1BEValQuality = () => fetchData("UMSeho1BELine1ValQuality", setDataSeho1BEValQuality);

//   const fetchDataSeho2BE = () => fetchData("UMSeho2BELine1", setDataSeho2BE);
//   const fetchDataSeho2BEQA = () => fetchData("UMSeho2BELine1QA", setDataSeho2BEQA);
//   const fetchDataSeho2BEQC = () => fetchData("UMSeho2BELine1QC", setDataSeho2BEQC);
//   const fetchDataSeho2BEReturn = () => fetchData("UMSeho2BELine1Return", setDataSeho2BEReturn);
//   const fetchDataSeho2BEValQuality = () => fetchData("UMSeho2BELine1ValQuality", setDataSeho2BEValQuality);

//   const fetchDataTouchupBE = () => fetchData("UMTouchupBELine1", setDataTouchupBE);
//   const fetchDataTouchupBEQA = () => fetchData("UMTouchupBELine1QA", setDataTouchupBEQA);
//   const fetchDataTouchupBEQC = () => fetchData("UMTouchupBELine1QC", setDataTouchupBEQC);
//   const fetchDataTouchupBEReturn = () => fetchData("UMTouchupBELine1Return", setDataTouchupBEReturn);
//   const fetchDataTouchupBEValQuality = () => fetchData("UMTouchupBELine1ValQuality", setDataTouchupBEValQuality);


//   const fetchDataICTBE = () => fetchData("UMICTBELine1", setDataICTBE);
//   const fetchDataICTBEQA = () => fetchData("UMICTBELine1QA", setDataICTBEQA);
//   const fetchDataICTBEQC = () => fetchData("UMICTBELine1QC", setDataICTBEQC);
//   const fetchDataICTBEReturn = () => fetchData("UMICTBELine1Return", setDataICTBEReturn);
//   const fetchDataICTBEValQuality = () => fetchData("UMICTBELine1ValQuality", setDataICTBEValQuality);

  
//   const fetchDataFlashBE = () => fetchData("UMFlashBELine1", setDataFlashBE);
//   const fetchDataFlashBEQA = () => fetchData("UMFlashBELine1QA", setDataFlashBEQA);
//   const fetchDataFlashBEQC = () => fetchData("UMFlashBELine1QC", setDataFlashBEQC);
//   const fetchDataFlashBEReturn = () => fetchData("UMFlashBELine1Return", setDataFlashBEReturn);
//   const fetchDataFlashBEValQuality = () => fetchData("UMFlashBELine1ValQuality", setDataFlashBEValQuality);

//   const fetchDataRouterBE = () => fetchData("UMRouterBELine1", setDataRouterBE);
//   const fetchDataRouterBEQA = () => fetchData("UMRouterBELine1QA", setDataRouterBEQA);
//   const fetchDataRouterBEQC = () => fetchData("UMRouterBELine1QC", setDataRouterBEQC);
//   const fetchDataRouterBEReturn = () => fetchData("UMRouterBELine1Return", setDataRouterBEReturn);
//   const fetchDataRouterBEValQuality = () => fetchData("UMRouterBELine1ValQuality", setDataRouterBEValQuality);

//   const fetchData = (endpoint, setDataFunction) => {
//     fetch(`https://andonline.astra-visteon.com:3002/api/${endpoint}`)
//       .then((response) => response.json())
//       .then((data) => {
//         setDataFunction(data);
//       })
//       .catch((error) => {
//         // Handle error if the request fails
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     const fetchDataFunctions = [
//       fetchDataElectricity,
//       fetchDataNetwork,
//       fetchDataAirComp,
//       fetchDataOthers,
//       fetchDataShorComp,
//       fetchDataShorBox,
//       fetchDataOverTrial,
//       fetchDataOverChange,

//       fetchDataDestackerTOP,
//       fetchDataDestackerTOPQA,
//       fetchDataDestackerTOPQC,
//       fetchDataDestackerTOPReturn,
//       fetchDataDestackerTOPValQuality,

//       fetchDataLabelTOP,
//       fetchDataLabelTOPQA,
//       fetchDataLabelTOPQC,
//       fetchDataLabelTOPReturn,
//       fetchDataLabelTOPValQuality,

//       fetchDataPrinterTOP,
//       fetchDataPrinterTOPQA,
//       fetchDataPrinterTOPQC,
//       fetchDataPrinterTOPReturn,
//       fetchDataPrinterTOPValQuality,

//       fetchDataSpiTOP,
//       fetchDataSpiTOPQA,
//       fetchDataSpiTOPQC,
//       fetchDataSpiTOPReturn,
//       fetchDataSpiTOPValQuality,

//       fetchDataPickNPlaceTOP,
//       fetchDataPickNPlaceTOPQA,
//       fetchDataPickNPlaceTOPQC,
//       fetchDataPickNPlaceTOPReturn,
//       fetchDataPickNPlaceTOPValQuality,

//       fetchDataReflowTOP,
//       fetchDataReflowTOPQA,
//       fetchDataReflowTOPQC,
//       fetchDataReflowTOPReturn,
//       fetchDataReflowTOPValQuality,

//       fetchDataAOITOP,
//       fetchDataAOITOPQA,
//       fetchDataAOITOPQC,
//       fetchDataAOITOPReturn,
//       fetchDataAOITOPValQuality,

//       fetchDataRVSTOP,
//       fetchDataRVSTOPQA,
//       fetchDataRVSTOPQC,
//       fetchDataRVSTOPReturn,
//       fetchDataRVSTOPValQuality,


//       // BOT
//       fetchDataPrinterBOT,
//       fetchDataPrinterBOTQA,
//       fetchDataPrinterBOTQC,
//       fetchDataPrinterBOTReturn,
//       fetchDataPrinterBOTValQuality,


//       fetchDataSPIBOT,
//       fetchDataSPIBOTQA,
//       fetchDataSPIBOTQC,
//       fetchDataSPIBOTReturn,
//       fetchDataSPIBOTValQuality,

      
//       fetchDataPickNPlaceBOT,
//       fetchDataPickNPlaceBOTQA,
//       fetchDataPickNPlaceBOTQC,
//       fetchDataPickNPlaceBOTReturn,
//       fetchDataPickNPlaceBOTValQuality,

         
//       fetchDataReflowBOT,
//       fetchDataReflowBOTQA,
//       fetchDataReflowBOTQC,
//       fetchDataReflowBOTReturn,
//       fetchDataReflowBOTValQuality,

//       fetchDataAOIBOT,
//       fetchDataAOIBOTQA,
//       fetchDataAOIBOTQC,
//       fetchDataAOIBOTReturn,
//       fetchDataAOIBOTValQuality,

//       fetchDataRVSBOT,
//       fetchDataRVSBOTQA,
//       fetchDataRVSBOTQC,
//       fetchDataRVSBOTReturn,
//       fetchDataRVSBOTValQuality,


//       // BE

//       fetchDataDropinBE,
//       fetchDataDropinBEQA,
//       fetchDataDropinBEQC,
//       fetchDataDropinBEReturn,
//       fetchDataDropinBEValQuality,
      
//       fetchDataFluxerBE,
//       fetchDataFluxerBEQA,
//       fetchDataFluxerBEQC,
//       fetchDataFluxerBEReturn,
//       fetchDataFluxerBEValQuality,

//       fetchDataPreHeatBE,
//       fetchDataPreHeatBEQA,
//       fetchDataPreHeatBEQC,
//       fetchDataPreHeatBEReturn,
//       fetchDataPreHeatBEValQuality,

//       fetchDataSeho1BE,
//       fetchDataSeho1BEQA,
//       fetchDataSeho1BEQC,
//       fetchDataSeho1BEReturn,
//       fetchDataSeho1BEValQuality,

//       fetchDataSeho2BE,
//       fetchDataSeho2BEQA,
//       fetchDataSeho2BEQC,
//       fetchDataSeho2BEReturn,
//       fetchDataSeho2BEValQuality,

//       fetchDataTouchupBE,
//       fetchDataTouchupBEQA,
//       fetchDataTouchupBEQC,
//       fetchDataTouchupBEReturn,
//       fetchDataTouchupBEValQuality,

//       fetchDataICTBE,
//       fetchDataICTBEQA,
//       fetchDataICTBEQC,
//       fetchDataICTBEReturn,
//       fetchDataICTBEValQuality,

//       fetchDataFlashBE,
//       fetchDataFlashBEQA,
//       fetchDataFlashBEQC,
//       fetchDataFlashBEReturn,
//       fetchDataFlashBEValQuality,

//       fetchDataRouterBE,
//       fetchDataRouterBEQA,
//       fetchDataRouterBEQC,
//       fetchDataRouterBEReturn,
//       fetchDataRouterBEValQuality,
//     ];
  
//     const intervalIds = fetchDataFunctions.map((func) => setInterval(func, 5000));
  
//     return () => {
//       intervalIds.forEach((intervalId) => clearInterval(intervalId));
//     };
//   }, []);
  

//   return (
//     <body style={styles}>
//       <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
//         <div class="flex h-14 items-center justify-between">
//           <div class="flex items-center">
//             <a href="/AndonLine1">
//               <div class="flex-shrink-0">
//                 <img
//                   src={process.env.PUBLIC_URL + "/smt.jpeg"}
//                   alt="Logo"
//                   class="h-6 ml-4 sm:h-9 bg-white rounded-md"
//                 />
//               </div>
//             </a>
//           </div>
//           <div className="flex">
//             <p class="text-gray-500 text-sm">{formattedTime}</p>
//           </div>
//         </div>
//       </nav>

//       <header class="bg-white shadow mb-3">
//         <div class="mx-auto max-w-7xl px-4 ">
//           <header class="bg-white shadow mb-3">
//             <div class="mx-auto max-w-7xl px-4">
//               <div>
//                 <div class="flex items-center">
//                   <h1 class="text-xl font-sans tracking-tight text-gray-900">
//                     | Andon 2.0 |
//                   </h1>
//                   <h1 class="text-xl font-sans tracking-tight ml-4">
//                     <span class="text-black">SMT LINE 1:</span>
//                     <span
//                       class="ml-4"
//                       style={{
//                         color: StatusLine === "Running" ? "green" : "red",
//                       }}
//                     >
//                       {StatusLine}
//                     </span>
//                     <span className="ml-4">|</span>
//                   </h1>
//                   <h1 class="text-xl font-sans tracking-tight ml-4">
//                     <span class="text-black">SMT LINE 2:</span>
//                     <span class="ml-4 text-green-500">Running </span>|
//                     {/* <a href="Tickets">
//                     <span class="ml-4 mr-2 text-slate-900">Tickets </span>
//                     </a> */}
//                   </h1>{" "}
//                   {/* <a href="Tickets">
//                     <svg
//                       width="26px"
//                       viewBox="0 0 24 24"
//                       className="mt-1"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9 15L15 9"
//                         stroke="#1C274C"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                       />
//                       <path
//                         d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z"
//                         fill="#1C274C"
//                       />
//                       <path
//                         d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5C8.94772 10.5 8.5 10.0523 8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z"
//                         fill="#1C274C"
//                       />
//                       <path
//                         d="M14.0037 4H9.9963C6.21809 4 4.32899 4 3.15525 5.17157C2.27661 6.04858 2.0557 7.32572 2.00016 9.49444C1.99304 9.77248 2.22121 9.99467 2.49076 10.0652C3.35074 10.2901 3.98521 11.0711 3.98521 12C3.98521 12.9289 3.35074 13.7099 2.49076 13.9348C2.22121 14.0053 1.99304 14.2275 2.00016 14.5056C2.0557 16.6743 2.27661 17.9514 3.15525 18.8284M18 4.10041C19.3086 4.22774 20.1885 4.51654 20.8448 5.17157C21.7234 6.04858 21.9443 7.32572 21.9998 9.49444C22.007 9.77248 21.7788 9.99467 21.5092 10.0652C20.6493 10.2901 20.0148 11.0711 20.0148 12C20.0148 12.9289 20.6493 13.7099 21.5092 13.9348C21.7788 14.0053 22.007 14.2275 21.9998 14.5056C21.9443 16.6743 21.7234 17.9514 20.8448 18.8284C19.671 20 17.7819 20 14.0037 20H9.9963C8.82865 20 7.84143 20 7 19.9654"
//                         stroke="#1C274C"
//                         stroke-width="1.5"
//                         stroke-linecap="round"
//                       />
//                     </svg>{" "}
//                   </a> */}
//                 </div>
//               </div>
//             </div>
//           </header>
//         </div>
//       </header>

//       {/*  */}
//       <main>
//         <ul class="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
//           <button
//             className="absolute mt-8 right-3 rounded-full"
//             onClick={() => setIsOpen2(true)}
//           >
//             <svg
//               width="40px"
//               viewBox="0 0 64 64"
//               aria-hidden="true"
//               role="img"
//               className="iconify iconify--emojione"
//               preserveAspectRatio="xMidYMid meet"
//             >
//               <circle cx="32" cy="32" r="30" fill="#0014a8 "></circle>
//               <g fill="#ffffff">
//                 <path d="M27 27.8h10v24H27z"></path>
//                 <circle cx="32" cy="17.2" r="5"></circle>
//               </g>
//             </svg>
//           </button>
//         </ul>

//         <div
//           class="relative pt-4 sm:ml-5   text-2xl flex mb-4  text-white font-thin px-2 "
//           data-te-dropdown-ref
//         >
//           <button
//             class="flex items-center whitespace-nowrap rounded bg-primary bg-blue-800 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
//             type="button"
//             onClick={() => setIsGeneral((prevValue) => !prevValue)}
//             id="dropdownMenuSmallButton"
//             data-te-dropdown-toggle-ref
//             aria-expanded="false"
//             data-te-ripple-init
//             data-te-ripple-color="light"
//           >
//             General
//             <span class="ml-2 w-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 class="h-5 w-5"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>

//         {isGeneral ? (
//           <>
//             <div>
//               <div class="pt-3 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorElectricity }}
//                         value={Electricity}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusElectricity === "Go") {


//                           } else if (StatusElectricity === "Repair") {


//                           } else if (StatusElectricity === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataElectricity);
//                           }
//                         }}
//                       >
//                         <svg
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto"
//                           width="60px"
//                           viewBox="0 0 1024 1024"
//                         >
//                           <path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z" />
//                           <path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z" />
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Electricity
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorNetwork }}
//                         value={Network}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusNetwork === "Go") {
//                             // set isOpenEStatusNetwork state to true if EStatusNetwork is "Go"
//                             ;
//                           } else if (StatusNetwork === "Repair") {
//                             // set Quality state to true if EStatusNetwork is "Repair"

//                           } else if (StatusNetwork === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataNetwork)
//                           }
//                         }}
//                       >
//                         <svg
//                           width="60px"
//                           className="justify-center items-center mx-auto"
//                           viewBox="0 0 16 16"
//                         >
//                           <path
//                             d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 3.085938 -2.957032 8.53125 -2.957032 11.617188 0 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.375 0.40625 -0.347657 1.042969 0.0625 1.414063 c 0.410156 0.371094 1.042969 0.339844 1.414062 -0.070313 l 0.5 -0.546875 c 1.277344 -1.402344 4.160157 -1.496094 5.523438 0 l 0.5 0.546875 c 0.371093 0.410157 1.003906 0.441407 1.414062 0.070313 c 0.40625 -0.371094 0.4375 -1.007813 0.0625 -1.414063 l -0.5 -0.550781 c -1.125 -1.230469 -2.703125 -1.824219 -4.269531 -1.8125 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0"
//                             fill="#2e3436"
//                             fill-opacity="0.7000"
//                           />
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Network
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorAircomp }}
//                         value={Aircomp}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusAircomp === "Go") {
//                             // set isOpenEStatusAirComp state to true if EStatusAirComp is "Go"
//                             ;
//                           } else if (StatusAircomp === "Repair") {
//                             // set Quality state to true if EStatusAirComp is "Repair"

//                           } else if (StatusAircomp === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataAirComp)
//                           }
//                         }}
//                       >
//                         <svg
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto"
//                           version="1.1"
//                           id="Capa_1"
//                           width="60px"
//                           viewBox="0 0 913.443 913.443"
//                         >
//                           <g>
//                             <g>
//                               <path
//                                 d="M160.172,752.869l-35.715,85.408c-2.255,5.395,1.707,11.346,7.553,11.346h101.786c8.608,0,16.375-5.17,19.695-13.113
// 			l34.305-82.037H186.389C177.561,754.473,168.815,753.934,160.172,752.869z"
//                               />
//                               <path
//                                 d="M484.246,201.833v105.811h242.809c28.527,0,56.213,5.593,82.291,16.622c21.188,8.962,40.545,21.188,57.717,36.4V201.833
// 			c0-14.329-11.615-25.945-25.945-25.945H510.191C495.861,175.888,484.246,187.504,484.246,201.833z"
//                               />
//                               <path
//                                 d="M863.732,669.795c30.844-33.254,49.711-77.775,49.711-126.711v-24.051c0-47.148-17.514-90.2-46.381-123.025
// 			c-34.158-38.843-84.217-63.364-140.008-63.364H484.246h-51.687v-12.5v-12.5V115.131l110.21-0.232
// 			c5.643,12.801,18.436,21.741,33.324,21.741h91.76c20.109,0,36.41-16.301,36.41-36.41s-16.301-36.41-36.41-36.41l-260.699,0.167
// 			c-13.61,0-25.004,11.143-25.435,24.664c-0.043,0.594-0.073,1.192-0.073,1.795v217.197v12.5v12.5H186.389
// 			C83.45,332.644,0,416.092,0,519.033v24.051c0,97.5,74.868,177.502,170.249,185.686c5.32,0.455,10.701,0.703,16.14,0.703H298.25
// 			h265.603c-0.178-3.041-0.277-6.096-0.277-9.166c0-20.82,4.082-41.033,12.137-60.072c7.773-18.381,18.896-34.881,33.061-49.045
// 			c14.164-14.162,30.664-25.285,49.043-33.061c19.041-8.053,39.252-12.137,60.074-12.137s41.033,4.084,60.074,12.137
// 			c18.379,7.775,34.879,18.898,49.043,33.061c14.164,14.164,25.287,30.664,33.061,49.043
// 			C861.402,663.389,862.617,666.578,863.732,669.795z"
//                               />
//                               <path
//                                 d="M843.32,688.76c-14.082-56.168-64.895-97.766-125.43-97.766c-71.418,0-129.314,57.896-129.314,129.314
// 			c0,3.082,0.115,6.137,0.328,9.164c0.295,4.227,0.795,8.396,1.488,12.5c0.715,4.24,1.637,8.41,2.754,12.5
// 			c14.986,54.838,65.154,95.15,124.744,95.15c71.418,0,129.314-57.896,129.314-129.314c0-1.086-0.016-2.168-0.041-3.248
// 			c-0.121-4.957-0.531-9.84-1.197-14.643C845.326,697.781,844.441,693.225,843.32,688.76z M717.891,762.959
// 			c-9.576,0-18.416-3.156-25.535-8.486c-4.51-3.375-8.322-7.629-11.201-12.5c-2.26-3.824-3.938-8.029-4.916-12.5
// 			c-0.646-2.953-0.998-6.018-0.998-9.164c0-23.555,19.096-42.65,42.65-42.65s42.652,19.096,42.652,42.65
// 			c0,2.123-0.16,4.207-0.461,6.248c-0.697,4.746-2.18,9.232-4.305,13.336c-2.801,5.406-6.721,10.133-11.457,13.879
// 			C737.053,759.518,727.877,762.959,717.891,762.959z"
//                               />
//                             </g>
//                           </g>
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Air Compressor
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorOthers }}
//                         value={Others}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusOthers === "Go") {
//                             // set isOpenEStatusOthers state to true if EStatusOthers is "Go"
//                             ;
//                           } else if (StatusOthers === "Repair") {
//                             // set Quality state to true if EStatusOthers is "Repair"

//                           } else if (StatusOthers === "Down" || StatusOthers === "MAINTENANCE & IT" || StatusOthers === "HRGA & EHS" || StatusOthers === "PURCHASING,PPIC,MP&L" || StatusOthers === "PROCESS ENGINEERING" || StatusOthers === "PRODUCT DEVELOPMENT" || StatusOthers === "ADVANCED MANUFACTURING ENGINEERING" || StatusOthers === "QA" || StatusOthers === "QC") {
//                             setIsRequestDepartment(true);
//                             setOptionData(dataOthers);
//                           }
                          
//                         }}
//                       >
//                         <svg
//                           width="60px"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                         >
//                           <path
//                             d="M15.0002 4V5C15.0002 6.88562 15.0002 7.82843 15.586 8.41421C16.1718 9 17.1146 9 19.0002 9H20.5002M20.5002 9L18.0002 7M20.5002 9L18.0002 11"
//                             stroke="#1C274C"
//                             stroke-width="1.5"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                           />
//                           <path
//                             d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
//                             fill="#1C274C"
//                           />
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Department
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorShorcomp }}
//                         value={Shorcomp}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusShorcomp === "Go") {
//                             // set isOpenEStatusShorComp state to true if EStatusShorComp is "Go"
//                             ;
//                           } else if (StatusShorcomp === "Repair") {
//                             // set Quality state to true if EStatusShorComp is "RepShor"

//                           } else if (StatusShorcomp === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataShorComp)
//                           }
//                         }}
//                       >
//                         <svg
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center mt-1 items-center mx-auto"
//                           width="50px"
//                           viewBox="0 0 16 16"
//                           id="hardware-16px"
//                         >
//                           <path
//                             id="Path_94"
//                             data-name="Path 94"
//                             d="M37.5,0h-13A1.5,1.5,0,0,0,23,1.5v13A1.5,1.5,0,0,0,24.5,16h13A1.5,1.5,0,0,0,39,14.5V1.5A1.5,1.5,0,0,0,37.5,0Zm0,15H28v-.5a.5.5,0,0,0-1,0V15H26V12.5a.5.5,0,0,0-1,0V15h-.5a.5.5,0,0,1-.5-.5V1.5a.5.5,0,0,1,.5-.5H29V9.5a.5.5,0,0,0,.5.5h1.592a1.5,1.5,0,1,0,0-1H30V1h7.5a.5.5,0,0,1,.5.5V2H35.5a.5.5,0,0,0,0,1H38V4H36.5a.5.5,0,0,0,0,1H38V6H33V4.908a1.5,1.5,0,1,0-1,0V6.5a.5.5,0,0,0,.5.5H38v7.5A.5.5,0,0,1,37.5,15ZM32,9.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,9.5Zm0-6a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,3.5ZM35.5,11a1.5,1.5,0,0,0-1.408,1H28.707L27,10.293V4.908a1.5,1.5,0,1,0-1,0V10.5a.5.5,0,0,0,.146.354l2,2A.5.5,0,0,0,28.5,13h5.592A1.5,1.5,0,1,0,35.5,11Zm-9-8a.5.5,0,1,1-.5.5A.5.5,0,0,1,26.5,3Zm9,10a.5.5,0,1,1,.5-.5A.5.5,0,0,1,35.5,13Z"
//                             transform="translate(-23)"
//                           />
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Shortage Comp
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorShorbox }}
//                         value={Shorbox}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusShorbox === "Go") {
//                             // set isOpenEStatusShorbox state to true if EStatusShorbox is "Go"
//                             ;
//                           } else if (StatusShorbox === "Repair") {
//                             // set Quality state to true if EStatusShorbox is "RepShor"

//                           } else if (StatusShorbox === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataShorBox)
//                           }
//                         }}
//                       >
//                         <svg
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center mt-1 items-center mx-auto"
//                           width="50px"
//                           viewBox="0 0 16 16"
//                           id="hardware-16px"
//                         >
//                           <path
//                             id="Path_94"
//                             data-name="Path 94"
//                             d="M37.5,0h-13A1.5,1.5,0,0,0,23,1.5v13A1.5,1.5,0,0,0,24.5,16h13A1.5,1.5,0,0,0,39,14.5V1.5A1.5,1.5,0,0,0,37.5,0Zm0,15H28v-.5a.5.5,0,0,0-1,0V15H26V12.5a.5.5,0,0,0-1,0V15h-.5a.5.5,0,0,1-.5-.5V1.5a.5.5,0,0,1,.5-.5H29V9.5a.5.5,0,0,0,.5.5h1.592a1.5,1.5,0,1,0,0-1H30V1h7.5a.5.5,0,0,1,.5.5V2H35.5a.5.5,0,0,0,0,1H38V4H36.5a.5.5,0,0,0,0,1H38V6H33V4.908a1.5,1.5,0,1,0-1,0V6.5a.5.5,0,0,0,.5.5H38v7.5A.5.5,0,0,1,37.5,15ZM32,9.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,9.5Zm0-6a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,3.5ZM35.5,11a1.5,1.5,0,0,0-1.408,1H28.707L27,10.293V4.908a1.5,1.5,0,1,0-1,0V10.5a.5.5,0,0,0,.146.354l2,2A.5.5,0,0,0,28.5,13h5.592A1.5,1.5,0,1,0,35.5,11Zm-9-8a.5.5,0,1,1-.5.5A.5.5,0,0,1,26.5,3Zm9,10a.5.5,0,1,1,.5-.5A.5.5,0,0,1,35.5,13Z"
//                             transform="translate(-23)"
//                           />
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm  text-white">
//                             Shortage Box FG
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorOvertrial }}
//                         value={Overtrial}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusOvertrial === "Go") {
//                             // set isOpenEStatusOvertrial state to true if EStatusOvertrial is "Go"
//                             ;
//                           } else if (StatusOvertrial === "Repair") {
//                             // set Quality state to true if EStatusOvertrial is "RepShor"

//                           } else if (StatusOvertrial === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataOverTrial)
//                           }
//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto"
//                           viewBox="0 0 24 24"
//                         >
//                           <path
//                             d="M10.5 11.5L12 10V14"
//                             stroke="#1C274C"
//                             stroke-width="1.5"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                           />
//                           <path
//                             d="M9.5 19.75C9.91421 19.75 10.25 19.4142 10.25 19C10.25 18.5858 9.91421 18.25 9.5 18.25V19.75ZM11 5V5.75C11.3033 5.75 11.5768 5.56727 11.6929 5.28701C11.809 5.00676 11.7448 4.68417 11.5303 4.46967L11 5ZM9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967C8.17678 2.76256 8.17678 3.23744 8.46967 3.53033L9.53033 2.46967ZM1.25 12C1.25 12.4142 1.58579 12.75 2 12.75C2.41421 12.75 2.75 12.4142 2.75 12H1.25ZM3.86991 15.5709C3.63293 15.2312 3.16541 15.1479 2.82569 15.3849C2.48596 15.6219 2.40267 16.0894 2.63965 16.4291L3.86991 15.5709ZM9.5 18.25H9.00028V19.75H9.5V18.25ZM9 5.75H11V4.25H9V5.75ZM11.5303 4.46967L9.53033 2.46967L8.46967 3.53033L10.4697 5.53033L11.5303 4.46967ZM2.75 12C2.75 8.54822 5.54822 5.75 9 5.75V4.25C4.71979 4.25 1.25 7.71979 1.25 12H2.75ZM2.63965 16.4291C4.03893 18.435 6.36604 19.75 9.00028 19.75V18.25C6.87703 18.25 5.00068 17.1919 3.86991 15.5709L2.63965 16.4291Z"
//                             fill="#1C274C"
//                           />
//                           <path
//                             d="M13 19V18.25C12.6967 18.25 12.4232 18.4327 12.3071 18.713C12.191 18.9932 12.2552 19.3158 12.4697 19.5303L13 19ZM14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303C15.8232 21.2374 15.8232 20.7626 15.5303 20.4697L14.4697 21.5303ZM14.5 4.25C14.0858 4.25 13.75 4.58579 13.75 5C13.75 5.41421 14.0858 5.75 14.5 5.75V4.25ZM22.75 12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12H22.75ZM20.1302 8.42907C20.3671 8.76881 20.8347 8.85211 21.1744 8.61514C21.5141 8.37817 21.5974 7.91066 21.3604 7.57093L20.1302 8.42907ZM15 18.25H13V19.75H15V18.25ZM12.4697 19.5303L14.4697 21.5303L15.5303 20.4697L13.5303 18.4697L12.4697 19.5303ZM14.5 5.75H15V4.25H14.5V5.75ZM21.25 12C21.25 15.4518 18.4518 18.25 15 18.25V19.75C19.2802 19.75 22.75 16.2802 22.75 12H21.25ZM21.3604 7.57093C19.9613 5.56497 17.6342 4.25 15 4.25V5.75C17.1232 5.75 18.9995 6.80806 20.1302 8.42907L21.3604 7.57093Z"
//                             fill="#1C274C"
//                           />
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Over Trial
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorOverchange }}
//                         value={Overchange}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusOverchange === "Go") {
//                             // set isOpenEStatusOverchange state to true if EStatusOverchange is "Go"
//                             ;
//                           } else if (StatusOverchange === "Repair") {
//                             // set Quality state to true if EStatusOverchange is "RepShor"

//                           } else if (StatusOverchange === "Down") {

//                             setIsRequestGeneral(true);
//                             setOptionData(dataOverChange)
//                           }
//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           viewBox="0 0 52 52"
//                           className="justify-center items-center mx-auto"
//                           enable-background="new 0 0 52 52"
//                         >
//                           <path
//                             d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5
// 	V37.5z"
//                           />
//                           <path
//                             d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7
// 	c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"
//                           />
//                           <path
//                             d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6
// 	c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"
//                           />
//                           <path
//                             d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5
// 	V3.5z"
//                           />
//                         </svg>

//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Over Change Model
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </>
//         ) : null}

//         <div
//           class="relative pt-4 sm:ml-5   text-2xl flex mb-4  text-white font-thin px-2 "
//           data-te-dropdown-ref
//         >
//           <button
//             class="flex items-center whitespace-nowrap rounded bg-primary bg-blue-800 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
//             type="button"
//             onClick={() => setIsSMTTOP((prevValue) => !prevValue)}
//             id="dropdownMenuSmallButton"
//             data-te-dropdown-toggle-ref
//             aria-expanded="false"
//             data-te-ripple-init
//             data-te-ripple-color="light"
//           >
//             SMT TOP
//             <span class="ml-2 w-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 class="h-5 w-5"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>

//         {isSMTTOP ? (
//           <>
//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusdestackerTop }}
//                         value={DestackerTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusdestackerTop === "Maintenance") {
//                             // set isOpenDestackerTop state to true if DestackerTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataDestackerTOP);
//                           } else if (StatusdestackerTop === "Repair") {
//                             // set Quality state to true if DestackerTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataDestackerTOP);
//                           } else if (StatusdestackerTop === "QA") {
//                             // set Quality state to true if DestackerTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataDestackerTOPQA);
//                           } else if (StatusdestackerTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataDestackerTOPQC);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           } else if (StatusdestackerTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataDestackerTOPReturn);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }
//                           else if (StatusdestackerTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataDestackerTOPValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Destacker (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatuslabelTop }}
//                         value={LabelTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatuslabelTop === "Maintenance") {
//                             // set isOpenLabelTop state to true if LabelTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataLabelTOP);
//                           } else if (StatuslabelTop === "Repair") {
//                             // set Quality state to true if LabelTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataLabelTOP);
//                           } else if (StatuslabelTop === "QA") {
//                             // set Quality state to true if LabelTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataLabelTOPQA);
//                           } else if (StatuslabelTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataLabelTOPQC);
//                             // set Quality state to true if LabelTop is "Repair"

//                           } else if (StatuslabelTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataLabelTOPReturn);
//                             // set Quality state to true if Top is "Repair"

//                           } else if (StatuslabelTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataLabelTOPValQuality);
//                             // set Quality state to true if Label Top is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic   text-center text-sm text-white">
//                             Label (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusPrinterTop }}
//                         value={PrinterTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusPrinterTop === "Maintenance") {
//                             // set isOpenPrinterTop state to true if PrinterTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataPrinterTOP);
//                           } else if (StatusPrinterTop === "Repair") {
//                             // set Quality state to true if PrinterTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataPrinterTOP);
//                           } else if (StatusPrinterTop === "QA") {
//                             // set Quality state to true if PrinterTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataPrinterTOPQA);
//                           } else if (StatusPrinterTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataPrinterTOPQC);
//                             // set Quality state to true if PrinterTop is "Repair"

//                           } else if (StatusPrinterTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataPrinterTOPReturn);
//                             // set Quality state to true if Top is "Repair"

//                           } else if (StatusPrinterTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataPrinterTOPValQuality);
//                             // set Quality state to true if Label Top is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Printer (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusSpiTop }}
//                         value={SpiTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusSpiTop === "Maintenance") {
//                             // set isOpenSpiTop state to true if SpiTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataSpiTOP);
//                           } else if (StatusSpiTop === "Repair") {
//                             // set Quality state to true if SpiTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataSpiTOP);
//                           } else if (StatusSpiTop === "QA") {
//                             // set Quality state to true if SpiTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataSpiTOPQA);
//                           } else if (StatusSpiTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataSpiTOPQC);
//                             // set Quality state to true if SpiTop is "Repair"

//                           } else if (StatusSpiTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataSpiTOPReturn);
//                             // set Quality state to true if Top is "Repair"

//                           } else if (StatusSpiTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataSpiTOPValQuality);
//                             // set Quality state to true if Spi Top is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             SPI (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusPickNPlace }}
//                         value={PickNPlace}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusPickNPlace === "Maintenance") {
//                             // set isOpenPickNPlaceTop state to true if PickNPlaceTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataPickNPlaceTOP);
//                           } else if (StatusPickNPlace === "Repair") {
//                             // set Quality state to true if PickNPlaceTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataPickNPlaceTOP);
//                           } else if (StatusPickNPlace === "QA") {
//                             // set Quality state to true if PickNPlaceTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataPickNPlaceTOPQA);
//                           } else if (StatusPickNPlace === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataPickNPlaceTOPQC);
//                             // set Quality state to true if PickNPlaceTop is "Repair"

//                           } else if (StatusPickNPlace === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataPickNPlaceTOPReturn);
//                             // set Quality state to true if Top is "Repair"

//                           } else if (StatusPickNPlace === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataPickNPlaceTOPValQuality);
//                             // set Quality state to true if PickNPlace Top is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Pick&Place (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusReflowTop }}
//                         value={ReflowTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusReflowTop === "Maintenance") {
//                             // set isOpenReflowTop state to true if ReflowTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataReflowTOP);
//                           } else if (StatusReflowTop === "Repair") {
//                             // set Quality state to true if ReflowTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataReflowTOP);
//                           } else if (StatusReflowTop === "QA") {
//                             // set Quality state to true if ReflowTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataReflowTOPQA);
//                           } else if (StatusReflowTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataReflowTOPQC);
//                             // set Quality state to true if ReflowTop is "Repair"

//                           } else if (StatusReflowTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataReflowTOPReturn);
//                             // set Quality state to true if Top is "Repair"
//                           } else if (StatusReflowTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataReflowTOPValQuality);
//                             // set Quality state to true if PickNPlace Top is "Repair"
//                           }
//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Reflow (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusAOITop }}
//                         value={AOITop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusAOITop === "Maintenance") {
//                             // set isOpenAOITop state to true if AOITop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataAOITOP);
//                           } else if (StatusAOITop === "Repair") {
//                             // set Quality state to true if AOITop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataAOITOP);
//                           } else if (StatusAOITop === "QA") {
//                             // set Quality state to true if AOITop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataAOITOPQA);
//                           } else if (StatusAOITop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataAOITOPQC);
//                             // set Quality state to true if AOITop is "Repair"

//                           } else if (StatusAOITop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataAOITOPReturn);
//                             // set Quality state to true if Top is "Repair"
//                           } else if (StatusAOITop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataAOITOPValQuality);
//                             // set Quality state to true if PickNPlace Top is "Repair"
//                           }
//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             AOI (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusRVSTop }}
//                         value={RVSTop}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusRVSTop === "Maintenance") {
//                             // set isOpenRVSTop state to true if RVSTop is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataRVSTOP);
//                           } else if (StatusRVSTop === "Repair") {
//                             // set Quality state to true if RVSTop is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataRVSTOP);
//                           } else if (StatusRVSTop === "QA") {
//                             // set Quality state to true if RVSTop is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataRVSTOPQA);
//                           } else if (StatusRVSTop === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataRVSTOPQC);
//                             // set Quality state to true if RVSTop is "Repair"

//                           } else if (StatusRVSTop === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataRVSTOPReturn);
//                             // set Quality state to true if Top is "Repair"
//                           } else if (StatusRVSTop === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataRVSTOPValQuality);
//                             // set Quality state to true if PickNPlace Top is "Repair"
//                           }
//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             RVS (TOP)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </>
//         ) : null}

//         <div
//           class="relative pt-4 sm:ml-5   text-2xl flex mb-4  text-white font-thin px-2 "
//           data-te-dropdown-ref
//         >
//           <button
//             class="flex items-center whitespace-nowrap rounded bg-primary bg-blue-800 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
//             type="button"
//             onClick={() => setIsSMTBOT((prevValue) => !prevValue)}
//             id="dropdownMenuSmallButton"
//             data-te-dropdown-toggle-ref
//             aria-expanded="false"
//             data-te-ripple-init
//             data-te-ripple-color="light"
//           >
//             SMT BOT
//             <span class="ml-2 w-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 class="h-5 w-5"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>

//         {isSMTBOT ? (
//           <>
//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusPrinterBot }}
//                         value={PrinterBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusPrinterBot === "Maintenance") {
//                             // set isOpenPrinterBOT state to true if PrinterBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataPrinterBOT);
//                           } else if (StatusPrinterBot === "Repair") {
//                             // set Quality state to true if PrinterBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataPrinterBOT);
//                           } else if (StatusPrinterBot === "QA") {
//                             // set Quality state to true if PrinterBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataPrinterBOTQA);
//                           } else if (StatusPrinterBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataPrinterBOTQC);
//                             // set Quality state to true if PrinterBOT is "Repair"

//                           } else if (StatusPrinterBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataPrinterBOTReturn);
//                             // set Quality state to true if PrinterBOT is "Repair"

//                           }
//                           else if (StatusPrinterBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataPrinterBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
                      
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Printer (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusSpiBot }}
//                         value={SpiBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusSpiBot === "Maintenance") {
//                             // set isOpenSPIBOT state to true if SPIBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataSPIBOT);
//                           } else if (StatusSpiBot === "Repair") {
//                             // set Quality state to true if SPIBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataSPIBOT);
//                           } else if (StatusSpiBot === "QA") {
//                             // set Quality state to true if SPIBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataSPIBOTQA);
//                           } else if (StatusSpiBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataSPIBOTQC);
//                             // set Quality state to true if SPIBOT is "Repair"

//                           } else if (StatusSpiBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataSPIBOTReturn);
//                             // set Quality state to true if SPIBOT is "Repair"

//                           }
//                           else if (StatusSpiBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataSPIBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             SPI (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusPickNPlaceBot }}
//                         value={PickNPlaceBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusPickNPlaceBot === "Maintenance") {
//                             // set isOpenPickNPlaceBOT state to true if PickNPlaceBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataPickNPlaceBOT);
//                           } else if (StatusPickNPlaceBot === "Repair") {
//                             // set Quality state to true if PickNPlaceBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataPickNPlaceBOT);
//                           } else if (StatusPickNPlaceBot === "QA") {
//                             // set Quality state to true if PickNPlaceBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataPickNPlaceBOTQA);
//                           } else if (StatusPickNPlaceBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataPickNPlaceBOTQC);
//                             // set Quality state to true if PickNPlaceBOT is "Repair"

//                           } else if (StatusPickNPlaceBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataPickNPlaceBOTReturn);
//                             // set Quality state to true if PickNPlaceBOT is "Repair"

//                           }
//                           else if (StatusPickNPlaceBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataPickNPlaceBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Pick&Place (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusReflowBot }}
//                         value={ReflowBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusReflowBot === "Maintenance") {
//                             // set isOpenReflowBOT state to true if ReflowBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataReflowBOT);
//                           } else if (StatusReflowBot === "Repair") {
//                             // set Quality state to true if ReflowBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataReflowBOT);
//                           } else if (StatusReflowBot === "QA") {
//                             // set Quality state to true if ReflowBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataReflowBOTQA);
//                           } else if (StatusReflowBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataReflowBOTQC);
//                             // set Quality state to true if ReflowBOT is "Repair"

//                           } else if (StatusReflowBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataReflowBOTReturn);
//                             // set Quality state to true if ReflowBOT is "Repair"

//                           }
//                           else if (StatusReflowBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataReflowBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Reflow (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusAOIBot }}
//                         value={AOIBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusAOIBot === "Maintenance") {
//                             // set isOpenAOIBOT state to true if AOIBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataAOIBOT);
//                           } else if (StatusAOIBot === "Repair") {
//                             // set Quality state to true if AOIBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataAOIBOT);
//                           } else if (StatusAOIBot === "QA") {
//                             // set Quality state to true if AOIBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataAOIBOTQA);
//                           } else if (StatusAOIBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataAOIBOTQC);
//                             // set Quality state to true if AOIBOT is "Repair"

//                           } else if (StatusAOIBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataAOIBOTReturn);
//                             // set Quality state to true if AOIBOT is "Repair"

//                           }
//                           else if (StatusAOIBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataAOIBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             AOI (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusRVSBot }}
//                         value={RVSBot}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusRVSBot === "Maintenance") {
//                             // set isOpenRVSBOT state to true if RVSBOT is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataRVSBOT);
//                           } else if (StatusRVSBot === "Repair") {
//                             // set Quality state to true if RVSBOT is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataRVSBOT);
//                           } else if (StatusRVSBot === "QA") {
//                             // set Quality state to true if RVSBOT is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataRVSBOTQA);
//                           } else if (StatusRVSBot === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataRVSBOTQC);
//                             // set Quality state to true if RVSBOT is "Repair"

//                           } else if (StatusRVSBot === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataRVSBOTReturn);
//                             // set Quality state to true if RVSBOT is "Repair"

//                           }
//                           else if (StatusRVSBot === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataRVSBOTValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             RVS (BOT)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </>
//         ) : null}

//         <div
//           class="relative pt-4 sm:ml-5   text-2xl flex mb-4  text-white font-thin px-2 "
//           data-te-dropdown-ref
//         >
//           <button
//             class="flex items-center whitespace-nowrap rounded bg-primary bg-blue-800 px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
//             type="button"
//             onClick={() => setIsSMTBE((prevValue) => !prevValue)}
//             id="dropdownMenuSmallButton"
//             data-te-dropdown-toggle-ref
//             aria-expanded="false"
//             data-te-ripple-init
//             data-te-ripple-color="light"
//           >
//             SMT BE
//             <span class="ml-2 w-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//                 class="h-5 w-5"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
//                   clip-rule="evenodd"
//                 />
//               </svg>
//             </span>
//           </button>
//         </div>

//         {isSMTBE ? (
//           <>
//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusDropinBE }}
//                         value={DropinBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusDropinBE === "Maintenance") {
//                             // set isOpenDropinBE state to true if DropinBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataDropinBE);
//                           } else if (StatusDropinBE === "Repair") {
//                             // set Quality state to true if DropinBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataDropinBE);
//                           } else if (StatusDropinBE === "QA") {
//                             // set Quality state to true if DropinBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataDropinBEQA);
//                           } else if (StatusDropinBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataDropinBEQC);
//                             // set Quality state to true if DropinBE is "Repair"

//                           } else if (StatusDropinBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataDropinBEReturn);
//                             // set Quality state to true if DropinBE is "Repair"

//                           }
//                           else if (StatusDropinBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataDropinBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Drop In (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusFluxerBE }}
//                         value={FluxerBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusFluxerBE === "Maintenance") {
//                             // set isOpenFluxerBE state to true if FluxerBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataFluxerBE);
//                           } else if (StatusFluxerBE === "Repair") {
//                             // set Quality state to true if FluxerBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataFluxerBE);
//                           } else if (StatusFluxerBE === "QA") {
//                             // set Quality state to true if FluxerBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataFluxerBEQA);
//                           } else if (StatusFluxerBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataFluxerBEQC);
//                             // set Quality state to true if FluxerBE is "Repair"

//                           } else if (StatusFluxerBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataFluxerBEReturn);
//                             // set Quality state to true if FluxerBE is "Repair"

//                           }
//                           else if (StatusFluxerBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataFluxerBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Fluxer (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusPreheatBE }}
//                         value={PreheatBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusPreheatBE === "Maintenance") {
//                             // set isOpenPreheatBE state to true if PreheatBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataPreHeatBE);
//                           } else if (StatusPreheatBE === "Repair") {
//                             // set Quality state to true if PreheatBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataPreHeatBE);
//                           } else if (StatusPreheatBE === "QA") {
//                             // set Quality state to true if PreheatBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataPreHeatBEQA);
//                           } else if (StatusPreheatBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataPreHeatBEQC);
//                             // set Quality state to true if PreheatBE is "Repair"

//                           } else if (StatusPreheatBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataPreHeatBEReturn);
//                             // set Quality state to true if PreheatBE is "Repair"

//                           }
//                           else if (StatusPreheatBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataPreHeatBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             PreHeat (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusSeho1BE }}
//                         value={Seho1BE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusSeho1BE === "Maintenance") {
//                             // set isOpenSeho1BE state to true if Seho1BE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataSeho1BE);
//                           } else if (StatusSeho1BE === "Repair") {
//                             // set Quality state to true if Seho1BE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataSeho1BE);
//                           } else if (StatusSeho1BE === "QA") {
//                             // set Quality state to true if Seho1BE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataSeho1BEQA);
//                           } else if (StatusSeho1BE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataSeho1BEQC);
//                             // set Quality state to true if Seho1BE is "Repair"

//                           } else if (StatusSeho1BE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataSeho1BEReturn);
//                             // set Quality state to true if Seho1BE is "Repair"

//                           }
//                           else if (StatusSeho1BE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataSeho1BEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Seho 1 (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>

//             <div>
//               <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusSeho2BE }}
//                         value={Seho2BE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusSeho2BE === "Maintenance") {
//                             // set isOpenSeho2BE state to true if Seho2BE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataSeho2BE);
//                           } else if (StatusSeho2BE === "Repair") {
//                             // set Quality state to true if Seho2BE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataSeho2BE);
//                           } else if (StatusSeho2BE === "QA") {
//                             // set Quality state to true if Seho2BE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataSeho2BEQA);
//                           } else if (StatusSeho2BE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataSeho2BEQC);
//                             // set Quality state to true if Seho2BE is "Repair"

//                           } else if (StatusSeho2BE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataSeho2BEReturn);
//                             // set Quality state to true if Seho2BE is "Repair"

//                           }
//                           else if (StatusSeho2BE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataSeho2BEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Seho 2 (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusTouchupBE }}
//                         value={TouchupBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusTouchupBE === "Maintenance") {
//                             // set isOpenTouchupBE state to true if TouchupBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataTouchupBE);
//                           } else if (StatusTouchupBE === "Repair") {
//                             // set Quality state to true if TouchupBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataTouchupBE);
//                           } else if (StatusTouchupBE === "QA") {
//                             // set Quality state to true if TouchupBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataTouchupBEQA);
//                           } else if (StatusTouchupBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataTouchupBEQC);
//                             // set Quality state to true if TouchupBE is "Repair"

//                           } else if (StatusTouchupBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataTouchupBEReturn);
//                             // set Quality state to true if TouchupBE is "Repair"

//                           }
//                           else if (StatusTouchupBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataTouchupBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Touch Up (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusICTBE }}
//                         value={ICTBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusICTBE === "Maintenance") {
//                             // set isOpenICTBE state to true if ICTBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataICTBE);
//                           } else if (StatusICTBE === "Repair") {
//                             // set Quality state to true if ICTBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataICTBE);
//                           } else if (StatusICTBE === "QA") {
//                             // set Quality state to true if ICTBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataICTBEQA);
//                           } else if (StatusICTBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataICTBEQC);
//                             // set Quality state to true if ICTBE is "Repair"

//                           } else if (StatusICTBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataICTBEReturn);
//                             // set Quality state to true if ICTBE is "Repair"

//                           }
//                           else if (StatusICTBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataICTBEValQuality);
                   

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             ICT (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusFlashBE }}
//                         value={FlashBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusFlashBE === "Maintenance") {
//                             // set isOpenFlashBE state to true if FlashBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataFlashBE);
//                           } else if (StatusFlashBE === "Repair") {
//                             // set Quality state to true if FlashBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataFlashBE);
//                           } else if (StatusFlashBE === "QA") {
//                             // set Quality state to true if FlashBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataFlashBEQA);
//                           } else if (StatusFlashBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataFlashBEQC);
//                             // set Quality state to true if FlashBE is "Repair"

//                           } else if (StatusFlashBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataFlashBEReturn);
//                             // set Quality state to true if FlashBE is "Repair"

//                           }
//                           else if (StatusFlashBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataFlashBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Flash (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//                 <section class="antialiased  text-gray-600  px-2" x-data="app">
//                   <div class="flex flex-col ">
//                     {/* <!-- Table --> */}
//                     <div className=" pt-2 w-50 sm:w-50 lg:w-50">
//                       <button
//                         style={{ backgroundColor: backgroundColorStatusRouterBE }}
//                         value={RouterBE}
//                         class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
//                         onClick={() => {
//                           if (StatusRouterBE === "Maintenance") {
//                             // set isOpenRouterBE state to true if RouterBE is "Go"
//                             setIsRequestMaintenance(true);
//                             setOptionData(dataRouterBE);
//                           } else if (StatusRouterBE === "Repair") {
//                             // set Quality state to true if RouterBE is "Repair"
//                             setIsRepair(true);
//                             setOptionData(dataRouterBE);
//                           } else if (StatusRouterBE === "QA") {
//                             // set Quality state to true if RouterBE is "Repair"
//                             setIsRequestQA(true);
//                             setOptionData(dataRouterBEQA);
//                           } else if (StatusRouterBE === "QC") {
//                             setIsRequestQC(true);
//                             setOptionData(dataRouterBEQC);
//                             // set Quality state to true if RouterBE is "Repair"

//                           } else if (StatusRouterBE === "Return Maintenance") {
//                             setIsReturnMaintenance(true);
//                             setOptionData(dataRouterBEReturn);
//                             // set Quality state to true if RouterBE is "Repair"

//                           }
//                           else if (StatusRouterBE === "Go") {
//                             setIsValidation(true);
//                             setOptionData(dataRouterBEValQuality);
//                             // set Quality state to true if DestackerTop is "Repair"

//                           }

//                         }}
//                       >
//                         <svg
//                           width="50px"
//                           fill="#2e3436"
//                           fill-opacity="0.7000"
//                           className="justify-center items-center mx-auto mt-1"
//                           version="1.1"
//                           id="Layer_1"
//                           viewBox="0 0 512 512"
//                         >
//                           <g>
//                             <g>
//                               <g>
//                                 <path
//                                   d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                 />
//                                 <path
//                                   d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                 />
//                                 <path
//                                   d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                 />
//                                 <path
//                                   d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                 />
//                                 <path
//                                   d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                 />
//                                 <path
//                                   d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                 />
//                                 <path
//                                   d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                 />
//                                 <path
//                                   d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                 />
//                                 <path
//                                   d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                 />
//                                 <path
//                                   d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                 />
//                                 <path
//                                   d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                 />
//                                 <path
//                                   d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                 />
//                                 <path
//                                   d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                 />
//                                 <path
//                                   d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                 />
//                               </g>
//                             </g>
//                           </g>
//                         </svg>
//                         <header class="px-5 py-2  ">
//                           <div class="italic  text-center text-sm text-white">
//                             Router (BE)
//                           </div>
//                         </header>
//                       </button>
//                     </div>
//                   </div>
//                 </section>
//               </div>
//             </div>
//           </>
//         ) : null}

//         <div>
//           <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5"></div>
//         </div>
//       </main>

//       {/* ISA */}
//       <td class="">
//         {isOpen2 ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//                 {/* Set the width to the desired value, e.g., 'max-w-screen-md' */}

//                 <div
//                   className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-5xl sm:w-full max-w-screen-md"
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div
//                     onClick={() => setIsOpen2(false)}
//                     className="flex justify-end p-2"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-6 w-6 cursor-pointer"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     </svg>
//                   </div>
//                   <h2 className="text-lg italic font-bold  text-center">
//                     Production Area: SMT
//                   </h2>
//                   <div className="bg-white px-4 pt-1 pb-4 flex flex-col sm:p-6 sm:pb-4">
//                     <div className="bg-gray-100 px-4 w-[500px]  rounded-lg shadow-md">
//                       <h3 className="text-lg italic  mb-2">Production Time</h3>

//                       {data ? (
//                         <table>
//                           <h3 className="flex text-base font-semibold mb-2">
//                             Date:{" "}
//                             <h1 className="ml-2 font-normal">
//                               {formatDate(data.PDATE)}
//                             </h1>
//                           </h3>
//                           <tbody>
//                             <tr>
//                               <td className="font-semibold">
//                                 Shift: {data.SHIFT}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">
//                                 Production Time 1:
//                               </td>
//                               <span style={{ color: "green" }}>
//                                 {data.PT1_IN}
//                               </span>
//                               -
//                               <span style={{ color: "red" }}>
//                                 {data.PT1_OUT}
//                               </span>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">Break 1:</td>
//                               <td className="bg-orange-300 rounded-lg">
//                                 {data.BR1_IN}-{data.BR1_OUT}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">
//                                 Production Time 2:
//                               </td>
//                               <span style={{ color: "green" }}>
//                                 {data.PT2_IN}
//                               </span>
//                               -
//                               <span style={{ color: "red" }}>
//                                 {data.PT2_OUT}
//                               </span>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">Break 2:</td>
//                               <td className="bg-orange-300 rounded-lg">
//                                 {data.BR2_IN}-{data.BR2_OUT}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">Planned DT:</td>
//                               <span style={{ color: "green" }}>
//                                 {data.PD_IN}
//                               </span>
//                               -
//                               <span style={{ color: "red" }}>
//                                 {data.PD_OUT}
//                               </span>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">
//                                 Production Time 3:
//                               </td>
//                               <span style={{ color: "green" }}>
//                                 {data.PT3_IN}
//                               </span>
//                               -
//                               <span style={{ color: "red" }}>
//                                 {data.PT3_OUT}
//                               </span>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">Break 3:</td>
//                               <td className="bg-orange-300 rounded-lg">
//                                 {data.BR3_IN}-{data.BR3_OUT}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">
//                                 Production time 4:
//                               </td>
//                               <span style={{ color: "green" }}>
//                                 {data.PT4_IN}
//                               </span>
//                               -
//                               <span style={{ color: "red" }}>
//                                 {data.PT4_OUT}
//                               </span>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold ">Break 4:</td>
//                               <td className="bg-orange-300 rounded-lg">
//                                 {data.BR4_IN}-{data.BR4_OUT}
//                               </td>
//                             </tr>
//                             <tr>
//                               <td className="font-semibold">Over Time:</td>
//                               <span style={{ color: "green" }}>
//                                 {data.OT_IN}
//                               </span>{" "}
//                               -{" "}
//                               <span style={{ color: "red" }}>
//                                 {data.OT_OUT}
//                               </span>
//                             </tr>
//                           </tbody>
//                         </table>
//                       ) : (
//                         <p>Loading...</p>
//                       )}
//                     </div>
//                     <div className="pt-2">
//                       <div className="overflow-y-auto max-h-96 w-[500px]">
//                         {data ? (
//                           <div className="bg-gray-100 px-4 py-6 sm:p-6 rounded-lg shadow-md">
//                             <h3 className="text-lg italic mb-2">
//                               Real Production Time
//                             </h3>
//                             <table>
//                               <tr>
//                                 <td className="font-semibold">
//                                   Production time 1:
//                                 </td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealPT1}
//                                 </span>
//                               </tr>
//                               <tr>
//                                 <td className="font-semibold">
//                                   Production time 2:
//                                 </td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealPT2}
//                                 </span>
//                               </tr>

//                               <tr>
//                                 <td className="font-semibold">Planned DT:</td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealPD}
//                                 </span>
//                               </tr>
//                               <tr>
//                                 <td className="font-semibold">
//                                   Production time 3:
//                                 </td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealPT3}
//                                 </span>
//                               </tr>

//                               <tr>
//                                 <td className="font-semibold">
//                                   Production time 4:
//                                 </td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealPT4}
//                                 </span>
//                               </tr>
//                               <tr>
//                                 <td className="font-semibold">Over Time:</td>
//                                 <span className="px-4 text-lime-800">
//                                   {RealOT}
//                                 </span>
//                               </tr>
//                             </table>
//                             <div className="flex mt-2">
//                               <td className="font-semibold">Total:</td>
//                               <span className="ml-10 w-44 text-center text-white rounded-md bg-lime-700">
//                                 {Total}
//                               </span>
//                             </div>
//                             <div className="mt-5 bg-green-400 rounded-md ">
//                               <p className="font-semibold text-sm">
//                                 Change Model Allocation:
//                               </p>
//                               <p>{data.CMA} </p>
//                               <p className="text-sm text-black font-mono text-center mt-3 justify-center rounded-xl">
//                                 {ResultsCMA}{" "}
//                               </p>
//                             </div>
//                           </div>
//                         ) : (
//                           <p>Loading...</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>




//       {/* is RequestMaintenance */}
//       <td>
//         {isRequestMaintenance ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg
//                           aria-hidden="true"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           ></path>
//                         </svg>
//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Permintaan Bantuan Terhadap Team Maintenance Telah Di Lakukan Oleh:
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Name Operator :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Date Problem :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Permasalahan Yang Ditemukan
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsRequestMaintenance(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>


//       {/* is repair */}
//       <td>
//         {isRepair ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <form>
//                       <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                         <div class="p-6 text-center">
//                           <svg
//                             fill="#e28743"
//                             class="mx-auto mb-4 animate-bounce w-32 h-14 "
//                             viewBox="0 0 32 32"
//                             version="1.1"
//                             xmlns="http://www.w3.org/2000/svg"
//                           >
//                             <title>repair</title>
//                             <path d="M27.472 25.67l3.511 2.664c0.764-1.983 0.2-4.311-1.579-5.661-1.368-1.038-3.108-1.248-4.61-0.713l-0.532-0.403-0.070-0.132c0.37-0.526 0.691-1.076 0.961-1.644l2.417-0.067 0.495-1.58-1.953-1.438c0.095-0.591 0.142-1.189 0.143-1.786l2.167-1.1-0.229-1.64-2.392-0.468c-0.2-0.688-0.466-1.362-0.798-2.011l1.426-1.973-0.954-1.354-2.347 0.682c-0.029-0.031-0.058-0.062-0.088-0.093-0.375-0.388-0.771-0.743-1.184-1.066l0.451-2.321-1.435-0.827-1.781 1.551c-0.577-0.232-1.169-0.415-1.769-0.549l-0.584-2.291-1.651-0.135-0.951 2.172c-0.492 0.030-0.982 0.091-1.468 0.185l-1.454-1.877-1.568 0.533-0.008 2.39c-0.664 0.342-1.303 0.753-1.904 1.236l-2.215-0.998-1.134 1.207 1.134 2.151c-0.366 0.521-0.683 1.067-0.951 1.63l-2.433 0.067-0.495 1.58 1.966 1.448c-0.094 0.586-0.142 1.179-0.144 1.772l-2.18 1.106 0.229 1.64 2.394 0.468c0.143 0.498 0.319 0.989 0.531 1.468l-1.58 1.959 0.881 1.402 2.453-0.573c0.154 0.181 0.315 0.359 0.482 0.532 0.353 0.365 0.723 0.701 1.107 1.008l-0.477 2.459 1.435 0.827 1.873-1.632c0.538 0.216 1.089 0.389 1.649 0.519l0.612 2.401 1.651 0.135 0.991-2.263c0.686-0.041 1.369-0.144 2.041-0.308l1.576 1.825 1.538-0.616-0.083-1.685 0.974 0.739c-0.115 1.597 0.543 3.233 1.909 4.271 1.778 1.349 4.172 1.266 5.877-0.004l-3.51-2.663c-0.619-0.469-0.762-1.358-0.312-1.952s1.328-0.672 1.946-0.202zM13.845 23.736c-1.985-0.224-3.892-1.12-5.388-2.669-3.421-3.538-3.323-9.167 0.216-12.587s9.17-3.36 12.59 0.178c3.012 3.115 3.293 7.878 0.903 11.308l-5.822-4.417c0.11-1.589-0.561-3.21-1.928-4.247-1.778-1.349-4.172-1.266-5.877 0.004l3.51 2.663c0.618 0.469 0.78 1.334 0.33 1.929s-1.346 0.696-1.964 0.226l-3.51-2.663c-0.763 1.983-0.2 4.311 1.579 5.661 1.367 1.036 3.121 1.229 4.628 0.688l4.617 3.503c-1.254 0.428-2.582 0.569-3.883 0.422z"></path>
//                           </svg>
//                           <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-serif text-gray-500 dark:text-gray-400">
//                             Sedang Dalam Perbaikan Oleh Team Maintenance
//                           </h3>

//                           <div className="flex flex-col mt-2">
//                             <svg
//                               width="50px"
//                               fill="#950804"
//                               fill-opacity="0.7000"
//                               className="justify-center items-center mx-auto mt-1"
//                               version="1.1"
//                               id="Layer_1"
//                               viewBox="0 0 512 512"
//                             >
//                               <g>
//                                 <g>
//                                   <g>
//                                     <path
//                                       d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                     />
//                                     <path
//                                       d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                     />
//                                     <path
//                                       d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                     />
//                                     <path
//                                       d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                     />
//                                     <path
//                                       d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                     />
//                                     <path
//                                       d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                     />
//                                     <path
//                                       d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                     />
//                                     <path
//                                       d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                     />
//                                     <path
//                                       d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                     />
//                                     <path
//                                       d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                     />
//                                     <path
//                                       d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                     />
//                                     <path
//                                       d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                     />
//                                     <path
//                                       d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                     />
//                                     <path
//                                       d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                     />
//                                   </g>
//                                 </g>
//                               </g>
//                             </svg>
//                             <span className="font-mono mt-2 text-gray-500 ">Down Since :  {formatDateAPI(OptionData?.Date) || ""}</span>
//                           </div>

//                           <div class="flex justify-center mt-4">
//                             <button
//                               data-modal-hide="popup-modal"
//                               type="button"
//                               onClick={() => setIsRepair(false)}
//                               className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                             >
//                               Back
//                             </button>
//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>

//       {/* is RequestQA*/}
//       <td>
//         {isRequestQA ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg version="1.1" id="REPAIR"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" >
//                           <g>
//                             <g>
//                               <path fill="#e28743" d="M803.722,820.892l-247.878-247.87l71.705-71.702l247.875,247.871l40.808-40.802L655.949,448.104
// 			l74.925-74.921c0.596-0.596,1.147-1.216,1.682-1.86c0.592-0.499,1.175-1.006,1.735-1.562l135.512-135.512
// 			c11.126-11.12,11.292-29.106,0.366-40.43l-1.538-1.606c-1.284-1.349-2.572-2.693-3.893-4.018
// 			C796.995,120.454,709.056,80.01,629.497,80.01c-53.655,0-99.814,17.796-133.483,51.468c-0.733,0.73-1.409,1.503-2.053,2.3
// 			c-0.443,0.388-0.89,0.765-1.309,1.183L185.294,442.324c-11.267,11.271-11.267,29.539,0,40.81l45.403,45.399l-37.493,37.493
// 			l-45.403-45.408c-5.414-5.41-12.752-8.453-20.405-8.453c-7.652,0-14.99,3.043-20.404,8.453L12.869,614.75
// 			c-11.268,11.271-11.268,29.538,0,40.802l197.415,197.416c5.414,5.41,12.752,8.454,20.404,8.454c7.653,0,14.995-3.043,20.405-8.454
// 			l94.115-94.13c11.268-11.264,11.268-29.531,0-40.802l-45.395-45.399l37.493-37.493l45.395,45.399
// 			c5.636,5.636,13.019,8.446,20.405,8.446c7.383,0,14.77-2.818,20.401-8.446l79.124-79.124l260.285,260.285L803.722,820.892z
// 			 M629.497,137.719c58.812,0,124.33,28.287,178.733,76.497l-94.34,94.334L559.981,154.64
// 			C579.485,143.503,603.046,137.719,629.497,137.719z M230.688,791.756L74.079,635.15l53.317-53.321l156.602,156.605
// 			L230.688,791.756z M261.089,629.749l-24.999-24.999l35.408-35.408l24.998,24.998L261.089,629.749z M403.106,619.331
// 			L246.505,462.725L513.058,196.17l156.609,156.612L403.106,619.331z"/>
//                               <path fill="#e28743" d="M1763.996,1556.146l-593.695-593.688l-40.803,40.801l573.296,573.296l-71.701,71.709l-573.303-573.303
// 			l-40.803,40.81l593.704,593.705c5.41,5.408,12.752,8.452,20.401,8.452c7.657,0,14.999-3.044,20.409-8.452l112.502-112.521
// 			C1775.268,1585.686,1775.268,1567.418,1763.996,1556.146z"/>
//                             </g>
//                             <path fill="#e28743" d="M1780.444,264.271c-3.269-9.372-11.135-16.4-20.812-18.614c-9.67-2.206-19.806,0.708-26.825,7.729
// 		l-116.585,116.576l-109.307-109.315l116.585-116.57c7.02-7.021,9.942-17.156,7.729-26.833c-2.214-9.679-9.243-17.541-18.614-20.814
// 		c-29.071-10.149-59.48-15.298-90.379-15.298c-73.062,0-141.743,28.449-193.397,80.104c-51.671,51.66-80.123,120.344-80.123,193.406
// 		c0,35.343,6.723,69.648,19.442,101.514l-736.242,736.236c-31.861-12.721-66.158-19.435-101.497-19.435
// 		c-73.058,0-141.744,28.452-193.407,80.115c-73.802,73.801-99.243,185.193-64.809,283.775c3.272,9.372,11.134,16.4,20.812,18.614
// 		c9.673,2.206,19.809-0.7,26.833-7.72l116.581-116.586l109.315,109.299l-116.585,116.586c-7.021,7.02-9.938,17.155-7.729,26.833
// 		c2.214,9.677,9.242,17.534,18.613,20.812c29.064,10.152,59.468,15.296,90.372,15.304c0.008,0,0.008,0,0.016,0
// 		c73.042,0,141.728-28.46,193.39-80.122c79.559-79.566,99.726-196.352,60.563-294.822l736.347-736.333
// 		c31.865,12.728,66.162,19.443,101.506,19.443c0.008,0,0,0,0.008,0c73.046,0,141.736-28.444,193.391-80.106
// 		C1789.438,474.246,1814.878,362.854,1780.444,264.271z M583.011,1599.065c-40.762,40.763-94.948,63.216-152.58,63.216
// 		c0,0-0.012,0-0.016,0c-7.915-0.008-15.792-0.436-23.602-1.28l100.137-100.138c5.414-5.417,8.454-12.752,8.454-20.408
// 		c0-7.648-3.04-14.99-8.454-20.4L356.83,1369.946c-11.263-11.264-29.535-11.264-40.806,0l-100.072,100.072
// 		c-6.835-64.134,15.333-129.603,61.871-176.146c40.762-40.762,94.952-63.207,152.597-63.207c57.64,0,111.83,22.445,152.588,63.215
// 		C667.146,1378.013,667.146,1514.926,583.011,1599.065z M659.282,1288.535l-70.945-70.951l702.501-702.488l70.953,70.944
// 		L659.282,1288.535z M1674.832,507.246c-40.761,40.753-94.951,63.199-152.596,63.199S1410.394,548,1369.632,507.238
// 		c-40.753-40.762-63.207-94.953-63.207-152.597s22.454-111.834,63.216-152.598c40.753-40.758,94.951-63.204,152.596-63.204
// 		c7.922,0,15.796,0.429,23.605,1.28l-100.137,100.127c-5.411,5.41-8.453,12.752-8.453,20.4c0,7.657,3.042,14.991,8.453,20.401
// 		l150.108,150.117c11.271,11.271,29.547,11.271,40.81,0.008l100.072-100.073C1743.531,395.234,1721.367,460.704,1674.832,507.246z"
//                             />
//                           </g>
//                         </svg>

//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Perbaikan Telah Di Lakukan Oleh
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Name Maintenance :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Done Repair at :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Action :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Action || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Status : Menunggu Validation Quality
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsRequestQA(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>

//       <td>
//         {isRequestQC ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg version="1.1" id="REPAIR"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" >
//                           <g>
//                             <g>
//                               <path fill="#e28743" d="M803.722,820.892l-247.878-247.87l71.705-71.702l247.875,247.871l40.808-40.802L655.949,448.104
// 			l74.925-74.921c0.596-0.596,1.147-1.216,1.682-1.86c0.592-0.499,1.175-1.006,1.735-1.562l135.512-135.512
// 			c11.126-11.12,11.292-29.106,0.366-40.43l-1.538-1.606c-1.284-1.349-2.572-2.693-3.893-4.018
// 			C796.995,120.454,709.056,80.01,629.497,80.01c-53.655,0-99.814,17.796-133.483,51.468c-0.733,0.73-1.409,1.503-2.053,2.3
// 			c-0.443,0.388-0.89,0.765-1.309,1.183L185.294,442.324c-11.267,11.271-11.267,29.539,0,40.81l45.403,45.399l-37.493,37.493
// 			l-45.403-45.408c-5.414-5.41-12.752-8.453-20.405-8.453c-7.652,0-14.99,3.043-20.404,8.453L12.869,614.75
// 			c-11.268,11.271-11.268,29.538,0,40.802l197.415,197.416c5.414,5.41,12.752,8.454,20.404,8.454c7.653,0,14.995-3.043,20.405-8.454
// 			l94.115-94.13c11.268-11.264,11.268-29.531,0-40.802l-45.395-45.399l37.493-37.493l45.395,45.399
// 			c5.636,5.636,13.019,8.446,20.405,8.446c7.383,0,14.77-2.818,20.401-8.446l79.124-79.124l260.285,260.285L803.722,820.892z
// 			 M629.497,137.719c58.812,0,124.33,28.287,178.733,76.497l-94.34,94.334L559.981,154.64
// 			C579.485,143.503,603.046,137.719,629.497,137.719z M230.688,791.756L74.079,635.15l53.317-53.321l156.602,156.605
// 			L230.688,791.756z M261.089,629.749l-24.999-24.999l35.408-35.408l24.998,24.998L261.089,629.749z M403.106,619.331
// 			L246.505,462.725L513.058,196.17l156.609,156.612L403.106,619.331z"/>
//                               <path fill="#e28743" d="M1763.996,1556.146l-593.695-593.688l-40.803,40.801l573.296,573.296l-71.701,71.709l-573.303-573.303
// 			l-40.803,40.81l593.704,593.705c5.41,5.408,12.752,8.452,20.401,8.452c7.657,0,14.999-3.044,20.409-8.452l112.502-112.521
// 			C1775.268,1585.686,1775.268,1567.418,1763.996,1556.146z"/>
//                             </g>
//                             <path fill="#e28743" d="M1780.444,264.271c-3.269-9.372-11.135-16.4-20.812-18.614c-9.67-2.206-19.806,0.708-26.825,7.729
// 		l-116.585,116.576l-109.307-109.315l116.585-116.57c7.02-7.021,9.942-17.156,7.729-26.833c-2.214-9.679-9.243-17.541-18.614-20.814
// 		c-29.071-10.149-59.48-15.298-90.379-15.298c-73.062,0-141.743,28.449-193.397,80.104c-51.671,51.66-80.123,120.344-80.123,193.406
// 		c0,35.343,6.723,69.648,19.442,101.514l-736.242,736.236c-31.861-12.721-66.158-19.435-101.497-19.435
// 		c-73.058,0-141.744,28.452-193.407,80.115c-73.802,73.801-99.243,185.193-64.809,283.775c3.272,9.372,11.134,16.4,20.812,18.614
// 		c9.673,2.206,19.809-0.7,26.833-7.72l116.581-116.586l109.315,109.299l-116.585,116.586c-7.021,7.02-9.938,17.155-7.729,26.833
// 		c2.214,9.677,9.242,17.534,18.613,20.812c29.064,10.152,59.468,15.296,90.372,15.304c0.008,0,0.008,0,0.016,0
// 		c73.042,0,141.728-28.46,193.39-80.122c79.559-79.566,99.726-196.352,60.563-294.822l736.347-736.333
// 		c31.865,12.728,66.162,19.443,101.506,19.443c0.008,0,0,0,0.008,0c73.046,0,141.736-28.444,193.391-80.106
// 		C1789.438,474.246,1814.878,362.854,1780.444,264.271z M583.011,1599.065c-40.762,40.763-94.948,63.216-152.58,63.216
// 		c0,0-0.012,0-0.016,0c-7.915-0.008-15.792-0.436-23.602-1.28l100.137-100.138c5.414-5.417,8.454-12.752,8.454-20.408
// 		c0-7.648-3.04-14.99-8.454-20.4L356.83,1369.946c-11.263-11.264-29.535-11.264-40.806,0l-100.072,100.072
// 		c-6.835-64.134,15.333-129.603,61.871-176.146c40.762-40.762,94.952-63.207,152.597-63.207c57.64,0,111.83,22.445,152.588,63.215
// 		C667.146,1378.013,667.146,1514.926,583.011,1599.065z M659.282,1288.535l-70.945-70.951l702.501-702.488l70.953,70.944
// 		L659.282,1288.535z M1674.832,507.246c-40.761,40.753-94.951,63.199-152.596,63.199S1410.394,548,1369.632,507.238
// 		c-40.753-40.762-63.207-94.953-63.207-152.597s22.454-111.834,63.216-152.598c40.753-40.758,94.951-63.204,152.596-63.204
// 		c7.922,0,15.796,0.429,23.605,1.28l-100.137,100.127c-5.411,5.41-8.453,12.752-8.453,20.4c0,7.657,3.042,14.991,8.453,20.401
// 		l150.108,150.117c11.271,11.271,29.547,11.271,40.81,0.008l100.072-100.073C1743.531,395.234,1721.367,460.704,1674.832,507.246z"
//                             />
//                           </g>
//                         </svg>

//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Perbaikan Telah Di Lakukan Oleh
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Name Maintenance :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Done Repair at :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Action :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Action || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Status : Menunggu Validation Quality
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsRequestQC(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>



//       {/* is RequestMaintenance */}
//       <td>
//         {isReturnMaintenance ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg
//                           aria-hidden="true"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             fill="none"
//                             stroke="currentColor"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M6 18L18 6M6 6l12 12"
//                           />
//                         </svg>

//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Perbaikan Di Kembalikan Karena Tidak Lolos Quality
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Name Quality :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Date Return :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Permasalahan Yang Ditemukan
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsReturnMaintenance(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>


//       {/* is RequestGeneral */}
//       <td>
//         {isRequestGeneral ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg
//                           aria-hidden="true"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           ></path>
//                         </svg>
//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Permintaan Bantuan Terhadap Team Terkait Telah Di Lakukan Oleh:
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Name Operator :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Date Problem :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Permasalahan Yang Ditemukan
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsRequestGeneral(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>

//       {/* is RequestGeneral */}
//       <td>
//         {isRequestDepartment ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                       <div class="p-6 text-center">
//                         <svg
//                           aria-hidden="true"
//                           class="mx-auto mb-4 text-red-600 animate-pulse w-14 h-14 dark:text-gray-200"
//                           fill="none"
//                           stroke="currentColor"
//                           viewBox="0 0 24 24"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                           ></path>
//                         </svg>
//                         <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
//                           Permintaan Bantuan Terhadap Department Terkait Telah Di Lakukan Oleh:
//                         </h3>
//                         <div class="flex flex-wrap -mx-3 ">
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-1">
//                               Name Operator :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={OptionData?.Nama || ""}

//                             />
//                           </div>
//                           <div class="w-full  px-3">
//                             <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
//                               Date Problem :
//                             </label>
//                             <input
//                               type="text"
//                               class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                               name="NamaPIC"
//                               readOnly
//                               value={formatDateAPI(OptionData?.Date) || ""}
//                             />
//                           </div>
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Department Yang Di Tuju :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-blue-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Department || ""}

//                           />
//                         </div>
//                         <div class="w-full px-1">
//                           <label
//                             class="block  tracking-wide text-gray-700 text-xs font-bold mb-1"
//                             for="grid-password"
//                           >
//                             Problem :
//                           </label>
//                           <input
//                             class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
//                             type="text"
//                             placeholder=""
//                             name="Kerusakan"
//                             value={OptionData?.Problem || ""}

//                           />
//                           <p class="text-gray-600 text-xs  italic">
//                             Permasalahan Yang Ditemukan
//                           </p>
//                         </div>
//                       </div>

//                       <div class="flex justify-center">
//                         <button
//                           data-modal-hide="popup-modal"
//                           type="button"
//                           onClick={() => setIsRequestDepartment(false)}
//                           className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                         >
//                           Back
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>


//       {/* is Validation */}
//       <td>
//         {isValidation ? (
//           <>
//             <div className="fixed z-10 inset-0 overflow-y-auto">
//               <div className="flex items-start justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block sm:p-0">
//                 <div
//                   className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
//                   role="dialog"
//                   aria-modal="true"
//                   aria-labelledby="modal-headline"
//                 >
//                   <div className="sm:flex sm:items-start">
//                     <form>
//                       <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//                         <div class="p-6 text-center">
//                           <svg fill="#e28743"
//                             class="mx-auto mb-4 animate-bounce w-32 h-14 " viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                             <g fill="none" stroke="#27AE60" stroke-linecap="round" stroke-width="2">
//                               <path d="M8.5 14.5h7.657" />
//                               <path d="M8.5 10.5h7.657" />
//                               <path d="M8.5 6.5h7.657" />
//                               <path d="M5.5 14.5h0" />
//                               <path d="M5.5 10.5h0" />
//                               <path d="M5.5 6.5h0" />
//                             </g>
//                             <path fill="none" stroke="#27AE60" stroke-linecap="round" stroke-width="2" d="M9.128 20.197H3.444a2.22 2.22 0 01-2.229-2.153V3.152A2.153 2.153 0 013.367.997h15.48A2.153 2.153 0 0121 3.152v8.738" />
//                             <path fill="#27AE60" d="M16.5 23.499a1.464 1.464 0 01-1.094-.484l-2.963-2.969A1.479 1.479 0 0112 18.985a1.5 1.5 0 01.462-1.078 1.56 1.56 0 012.113.037l1.925 1.931 4.943-4.959a1.543 1.543 0 012.132.02 1.461 1.461 0 01.425 1.04 1.5 1.5 0 01-.45 1.068l-5.993 6.012a1.44 1.44 0 01-1.057.443z" />
//                           </svg>
//                           <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-serif text-gray-500 dark:text-gray-400">
//                             Mesin Telah Di Validasi Oleh Quality
//                           </h3>


//                           <button
//                             onClick={() => {
//                               if (OptionData?.Validation === null) {
//                                 window.open('http://10.14.81.43:3003/--', '_blank');
//                               } else {
//                                 window.open(`https://andonline.astra-visteon.com:3002/${OptionData?.Validation}`, '_blank');
//                               }
//                             }}
//                             className="flex gap-2 mt-2 justify-center items-center"
//                           >
//                             <svg
//                               width="50px"
//                               fill="#27AE60"
//                               fill-opacity="0.7000"
//                               className="justify-center items-center mx-auto mt-1"
//                               version="1.1"
//                               id="Layer_1"
//                               viewBox="0 0 512 512"
//                             >
//                               <g>
//                                 <g>
//                                   <g>
//                                     <path
//                                       d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
// 				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
// 				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
// 				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
// 				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
// 				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
// 				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
// 				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
// 				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
// 				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
//                                     />
//                                     <path
//                                       d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
// 				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
// 				z"
//                                     />
//                                     <path
//                                       d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C358.4,175.38,362.221,179.2,366.933,179.2z"
//                                     />
//                                     <path
//                                       d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C477.867,140.354,474.046,136.533,469.333,136.533z"
//                                     />
//                                     <path
//                                       d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
// 				C426.667,175.38,430.487,179.2,435.2,179.2z"
//                                     />
//                                     <path
//                                       d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
// 				C409.6,140.354,405.78,136.533,401.067,136.533z"
//                                     />
//                                     <path
//                                       d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
// 				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
// 				V213.333z"
//                                     />
//                                     <path
//                                       d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
// 				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
// 				V230.4z"
//                                     />
//                                     <path
//                                       d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
//                                     />
//                                     <path
//                                       d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
// 				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
// 				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
//                                     />
//                                     <path
//                                       d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
//                                     />
//                                     <path
//                                       d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
// 				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
// 				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
//                                     />
//                                     <path
//                                       d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
// 				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
//                                     />
//                                     <path
//                                       d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
// 				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
// 				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
//                                     />
//                                   </g>
//                                 </g>
//                               </g>
//                             </svg>
//                             <div className="flex flex-col">
//                               <span className="font-mono mt-2  text-black ">Validate By:  {OptionData?.Nama || ""}</span>
//                               <span className="font-mono mt-2 text-black ">{formatDateAPI(OptionData?.Date) || ""}</span>
//                             </div>
//                           </button>


//                           <div class="flex justify-center mt-4">
//                             <button
//                               data-modal-hide="popup-modal"
//                               type="button"
//                               onClick={() => setIsValidation(false)}
//                               className="text-white bg-red-600 mb-2 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
//                             >
//                               Back
//                             </button>

//                           </div>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
//           </>
//         ) : null}
//       </td>


//     </body>
//   );
// };

// export default UserMobile;
