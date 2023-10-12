import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";

const firebaseConfig = {
    apiKey: "AIzaSyAuJMa_ODFS06DHoK25kxkbY46wajkTuT4",
    databaseURL:
        "https://andon-73506-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const SMTLINE1CONTROLLER = () => {
    // NAVBAR
    const [currentTime, setCurrentTime] = useState(new Date());
    const [time, setTime] = useState(new Date().toLocaleString());
    // -----

    // FIREBASE
    const [showDrawer, setShowDrawer] = useState(false);

    // SUBMIT FILE
    const [file, setFile] = useState(null);
    // -------
    const [StatusLine, setStatusLine] = useState("");
    const [Station, setStation] = useState("");
    const [Button, setButton] = useState("");
    // SMT TOP LINE 1

    const [Line, setLine] = useState("SMT LINE 1");
    // //////
    const [isSMTTOP, setIsSMTTOP] = useState(true);
    const [isSMTBOT, setIsSMTBOT] = useState(true);
    const [isSMTBE, setIsSMTBE] = useState(true);

    //  STATION Funtion

    // LINE 1 SMT TOP

    // Destacker TOP
    const [DestackerTop, setDestackerTop] = useState("Destacker (TOP)");
    const [StatusDestackerTop, setStatusDestackerTop] = useState("");
    const [
        backgroundColorStatusDestackerTop,
        setBackgroundColorStatusDestackerTop,
    ] = useState("");
    const [startTimeDestackerTop, setStartTimeDestackerTop] = useState(null);
    const [isRunningDestackerTop, setIsRunningDestackerTop] = useState(false);
    const [TimeDestackerTop, setTimeDestackerTop] = useState(null);
    // ---------------------------

    // Label TOP
    const [StatusLabelTop, setStatusLabelTop] = useState("");
    const [LabelTop, setLabelTop] = useState("Label (TOP)");
    const [backgroundColorStatusLabelTop, setBackgroundColorStatusLabelTop] =
        useState("");
    const [startTimeLabelTop, setStartTimeLabelTop] = useState(null);
    const [isRunningLabelTop, setIsRunningLabelTop] = useState(false);
    const [TimeLabelTop, setTimeLabelTop] = useState(null);
    // ---------------------------

    // Printer TOP
    const [StatusPrinterTop, setStatusPrinterTop] = useState("");
    const [PrinterTop, setPrinterTop] = useState("Printer (TOP)");
    const [backgroundColorStatusPrinterTop, setBackgroundColorStatusPrinterTop] =
        useState("");
    const [startTimePrinterTop, setStartTimePrinterTop] = useState(null);
    const [isRunningPrinterTop, setIsRunningPrinterTop] = useState(false);
    const [TimePrinterTop, setTimePrinterTop] = useState(null);
    // ---------------------------

    // Spi TOP
    const [StatusSPITop, setStatusSPITop] = useState("");
    const [SPITop, setSPITop] = useState("SPI (TOP)");
    const [backgroundColorStatusSPITop, setBackgroundColorStatusSPITop] =
        useState("");
    const [startTimeSPITop, setStartTimeSPITop] = useState(null);
    const [isRunningSPITop, setIsRunningSPITop] = useState(false);
    const [TimeSPITop, setTimeSPITop] = useState(null);
    // ---------------------------

    // PickNPlace TOP
    const [StatusPickNPlaceTop, setStatusPickNPlaceTop] = useState("");
    const [PickNPlaceTop, setPickNPlaceTop] = useState("Pick&Place (TOP)");
    const [
        backgroundColorStatusPickNPlaceTop,
        setBackgroundColorStatusPickNPlaceTop,
    ] = useState("");
    const [startTimePickNPlaceTop, setStartTimePickNPlaceTop] = useState(null);
    const [isRunningPickNPlaceTop, setIsRunningPickNPlaceTop] = useState(false);
    const [TimePickNPlaceTop, setTimePickNPlaceTop] = useState(null);
    // ---------------------------

    // Reflow Top

    const [StatusReflowTop, setStatusReflowTop] = useState("");
    const [ReflowTop, setReflowTop] = useState("Reflow (TOP)");
    const [backgroundColorStatusReflowTop, setBackgroundColorStatusReflowTop] =
        useState("");
    const [startTimeReflowTop, setStartTimeReflowTop] = useState(null);
    const [isRunningReflowTop, setIsRunningReflowTop] = useState(false);
    const [TimeReflowTop, setTimeReflowTop] = useState(null);
    // ---------------------------

    // AOI Top
    const [StatusAOITop, setStatusAOITop] = useState("");
    const [AOITop, setAOITop] = useState("AOI (TOP)");
    const [backgroundColorStatusAOITop, setBackgroundColorStatusAOITop] =
        useState("");
    const [startTimeAOITop, setStartTimeAOITop] = useState(null);
    const [isRunningAOITop, setIsRunningAOITop] = useState(false);
    const [TimeAOITop, setTimeAOITop] = useState(null);
    // ---------------------------

    // RVS Top
    const [StatusRVSTop, setStatusRVSTop] = useState("");
    const [RVSTop, setRVSTop] = useState("RVS (TOP)");
    const [backgroundColorStatusRVSTop, setBackgroundColorStatusRVSTop] =
        useState("");
    const [startTimeRVSTop, setStartTimeRVSTop] = useState(null);
    const [isRunningRVSTop, setIsRunningRVSTop] = useState(false);
    const [TimeRVSTop, setTimeRVSTop] = useState(null);
    // ---------------------------

    // LINE 1 SMT BOT
    // Printer Bot
    const [StatusPrinterBot, setStatusPrinterBot] = useState("");
    const [PrinterBot, setPrinterBot] = useState("Printer (BOT)");
    const [backgroundColorStatusPrinterBot, setBackgroundColorStatusPrinterBot] =
        useState("");
    const [startTimePrinterBot, setStartTimePrinterBot] = useState(null);
    const [isRunningPrinterBot, setIsRunningPrinterBot] = useState(false);
    const [TimePrinterBot, setTimePrinterBot] = useState(null);

    // SPI Bot
    const [StatusSPIBot, setStatusSPIBot] = useState("");
    const [SPIBot, setSPIBot] = useState("SPI (BOT)");
    const [backgroundColorStatusSPIBot, setBackgroundColorStatusSPIBot] =
        useState("");
    const [startTimeSPIBot, setStartTimeSPIBot] = useState(null);
    const [isRunningSPIBot, setIsRunningSPIBot] = useState(false);
    const [TimeSPIBot, setTimeSPIBot] = useState(null);

    // PickNPlace Bot
    const [StatusPickNPlaceBot, setStatusPickNPlaceBot] = useState("");
    const [PickNPlaceBot, setPickNPlaceBot] = useState("Pick&Place (BOT)");
    const [
        backgroundColorStatusPickNPlaceBot,
        setBackgroundColorStatusPickNPlaceBot,
    ] = useState("");
    const [startTimePickNPlaceBot, setStartTimePickNPlaceBot] = useState(null);
    const [isRunningPickNPlaceBot, setIsRunningPickNPlaceBot] = useState(false);
    const [TimePickNPlaceBot, setTimePickNPlaceBot] = useState(null);

    // Reflow Bot
    const [StatusReflowBot, setStatusReflowBot] = useState("");
    const [ReflowBot, setReflowBot] = useState("Reflow (BOT)");
    const [backgroundColorStatusReflowBot, setBackgroundColorStatusReflowBot] =
        useState("");
    const [startTimeReflowBot, setStartTimeReflowBot] = useState(null);
    const [isRunningReflowBot, setIsRunningReflowBot] = useState(false);
    const [TimeReflowBot, setTimeReflowBot] = useState(null);

    // AOI Bot
    const [StatusAOIBot, setStatusAOIBot] = useState("");
    const [AOIBot, setAOIBot] = useState("AOI (BOT)");
    const [backgroundColorStatusAOIBot, setBackgroundColorStatusAOIBot] =
        useState("");
    const [startTimeAOIBot, setStartTimeAOIBot] = useState(null);
    const [isRunningAOIBot, setIsRunningAOIBot] = useState(false);
    const [TimeAOIBot, setTimeAOIBot] = useState(null);

    // RVS Bot
    const [StatusRVSBot, setStatusRVSBot] = useState("");
    const [RVSBot, setRVSBot] = useState("RVS (BOT)");
    const [backgroundColorStatusRVSBot, setBackgroundColorStatusRVSBot] =
        useState("");
    const [startTimeRVSBot, setStartTimeRVSBot] = useState(null);
    const [isRunningRVSBot, setIsRunningRVSBot] = useState(false);
    const [TimeRVSBot, setTimeRVSBot] = useState(null);

    // ----------------------


    // LINE 1 SMT BE

    // Dropin BE
    const [DropinBe, setDropinBe] = useState("Drop in (BE)");
    const [StatusDropinBe, setStatusDropinBe] = useState("");
    const [
        backgroundColorStatusDropinBe,
        setBackgroundColorStatusDropinBe,
    ] = useState("");
    const [startTimeDropinBe, setStartTimeDropinBe] = useState(null);
    const [isRunningDropinBe, setIsRunningDropinBe] = useState(false);
    const [TimeDropinBe, setTimeDropinBe] = useState(null);
    // ---------------------------

    // Fluxer BE
    const [StatusFluxerBe, setStatusFluxerBe] = useState("");
    const [FluxerBe, setFluxerBe] = useState("Fluxer (BE)");
    const [backgroundColorStatusFluxerBe, setBackgroundColorStatusFluxerBe] =
        useState("");
    const [startTimeFluxerBe, setStartTimeFluxerBe] = useState(null);
    const [isRunningFluxerBe, setIsRunningFluxerBe] = useState(false);
    const [TimeFluxerBe, setTimeFluxerBe] = useState(null);
    // ---------------------------

    // Preheat BE
    const [StatusPreheatBe, setStatusPreheatBe] = useState("");
    const [PreheatBe, setPreheatBe] = useState("PreHeat (BE)");
    const [backgroundColorStatusPreheatBe, setBackgroundColorStatusPreheatBe] =
        useState("");
    const [startTimePreheatBe, setStartTimePreheatBe] = useState(null);
    const [isRunningPreheatBe, setIsRunningPreheatBe] = useState(false);
    const [TimePreheatBe, setTimePreheatBe] = useState(null);
    // ---------------------------

    // Seho1 BE
    const [StatusSeho1Be, setStatusSeho1Be] = useState("");
    const [Seho1Be, setSeho1Be] = useState("Seho1 (BE)");
    const [backgroundColorStatusSeho1Be, setBackgroundColorStatusSeho1Be] =
        useState("");
    const [startTimeSeho1Be, setStartTimeSeho1Be] = useState(null);
    const [isRunningSeho1Be, setIsRunningSeho1Be] = useState(false);
    const [TimeSeho1Be, setTimeSeho1Be] = useState(null);
    // ---------------------------

    // Seho2 BE
    const [StatusSeho2Be, setStatusSeho2Be] = useState("");
    const [Seho2Be, setSeho2Be] = useState("Seho2 (BE)");
    const [
        backgroundColorStatusSeho2Be,
        setBackgroundColorStatusSeho2Be,
    ] = useState("");
    const [startTimeSeho2Be, setStartTimeSeho2Be] = useState(null);
    const [isRunningSeho2Be, setIsRunningSeho2Be] = useState(false);
    const [TimeSeho2Be, setTimeSeho2Be] = useState(null);
    // ---------------------------

    // Touchup Be

    const [StatusTouchupBe, setStatusTouchupBe] = useState("");
    const [TouchupBe, setTouchupBe] = useState("Touch UP (BE)");
    const [backgroundColorStatusTouchupBe, setBackgroundColorStatusTouchupBe] =
        useState("");
    const [startTimeTouchupBe, setStartTimeTouchupBe] = useState(null);
    const [isRunningTouchupBe, setIsRunningTouchupBe] = useState(false);
    const [TimeTouchupBe, setTimeTouchupBe] = useState(null);
    // ---------------------------

    // ICT Be
    const [StatusICTBe, setStatusICTBe] = useState("");
    const [ICTBe, setICTBe] = useState("ICT (BE)");
    const [backgroundColorStatusICTBe, setBackgroundColorStatusICTBe] =
        useState("");
    const [startTimeICTBe, setStartTimeICTBe] = useState(null);
    const [isRunningICTBe, setIsRunningICTBe] = useState(false);
    const [TimeICTBe, setTimeICTBe] = useState(null);
    // ---------------------------

    // Flash Be
    const [StatusFlashBe, setStatusFlashBe] = useState("");
    const [FlashBe, setFlashBe] = useState("Flash (BE)");
    const [backgroundColorStatusFlashBe, setBackgroundColorStatusFlashBe] =
        useState("");
    const [startTimeFlashBe, setStartTimeFlashBe] = useState(null);
    const [isRunningFlashBe, setIsRunningFlashBe] = useState(false);
    const [TimeFlashBe, setTimeFlashBe] = useState(null);


    // Router Be
    const [StatusRouterBe, setStatusRouterBe] = useState("");
    const [RouterBe, setRouterBe] = useState("Router (BE)");
    const [backgroundColorStatusRouterBe, setBackgroundColorStatusRouterBe] =
        useState("");
    const [startTimeRouterBe, setStartTimeRouterBe] = useState(null);
    const [isRunningRouterBe, setIsRunningRouterBe] = useState(false);
    const [TimeRouterBe, setTimeRouterBe] = useState(null);
    // ---------------------------

    // POPUP
    // ISA
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenOperator, setIsOpenOperator] = useState(false);


    // Poroblem
    const [isOpenLeader, setIsOpenLeader] = useState(false);
    const [isOpenRequest, setIsOpenRequest] = useState(false);
    const [isOpenReturn, setIsOpenReturn] = useState(false);
    const [isOpenRepair, setIsOpenRepair] = useState(false);
    const [isOpenInValidation, setIsOpenInValidation] = useState(false);
    const [isOpenRequestValidation, setIsOpenRequestValidation] = useState(false);
    const [isOpenValidation, setIsOpenValidation] = useState(false);



    // ..................................

    // Fetching Data By Station

    const [OptionData, setOptionData] = useState(null);

    const [dataDestackerTOPLeader, setDataDestackerTOPLeader] = useState(null);
    const [dataDestackerTOPRepair, setDataDestackerTOPRepair] = useState(null);
    const [dataDestackerTOPValidation, setDataDestackerTOPValidation] = useState(null);



    const [dataLabelTOPLeader, setDataLabelTOPLeader] = useState(null);
    const [dataLabelTOPRepair, setDataLabelTOPRepair] = useState(null);
    const [dataLabelTOPValidation, setDataLabelTOPValidation] = useState(null);



    const [dataPrinterTOPLeader, setDataPrinterTOPLeader] = useState(null);
    const [dataPrinterTOPRepair, setDataPrinterTOPRepair] = useState(null);
    const [dataPrinterTOPValidation, setDataPrinterTOPValidation] = useState(null);


    const [dataSPITOPLeader, setDataSPITOPLeader] = useState(null);
    const [dataSPITOPRepair, setDataSPITOPRepair] = useState(null);
    const [dataSPITOPValidation, setDataSPITOPValidation] = useState(null);


    const [dataPickNPlaceTOPLeader, setDataPickNPlaceTOPLeader] = useState(null);
    const [dataPickNPlaceTOPRepair, setDataPickNPlaceTOPRepair] = useState(null);
    const [dataPickNPlaceTOPValidation, setDataPickNPlaceTOPValidation] = useState(null);


    const [dataReflowTOPLeader, setDataReflowTOPLeader] = useState(null);
    const [dataReflowTOPRepair, setDataReflowTOPRepair] = useState(null);
    const [dataReflowTOPValidation, setDataReflowTOPValidation] = useState(null);



    const [dataAOITOPLeader, setDataAOITOPLeader] = useState(null);
    const [dataAOITOPRepair, setDataAOITOPRepair] = useState(null);
    const [dataAOITOPValidation, setDataAOITOPValidation] = useState(null);


    const [dataRVSTOPLeader, setDataRVSTOPLeader] = useState(null);
    const [dataRVSTOPRepair, setDataRVSTOPRepair] = useState(null);
    const [dataRVSTOPValidation, setDataRVSTOPValidation] = useState(null);

    const [dataPrinterBOTLeader, setDataPrinterBOTLeader] = useState(null);
    const [dataPrinterBOTRepair, setDataPrinterBOTRepair] = useState(null);
    const [dataPrinterBOTValidation, setDataPrinterBOTValidation] = useState(null);


    const [dataSPIBOTLeader, setDataSPIBOTLeader] = useState(null);
    const [dataSPIBOTRepair, setDataSPIBOTRepair] = useState(null);
    const [dataSPIBOTValidation, setDataSPIBOTValidation] = useState(null);



    const [dataPickNPlaceBOTLeader, setDataPickNPlaceBOTLeader] = useState(null);
    const [dataPickNPlaceBOTRepair, setDataPickNPlaceBOTRepair] = useState(null);
    const [dataPickNPlaceBOTValidation, setDataPickNPlaceBOTValidation] = useState(null);



    const [dataReflowBOTLeader, setDataReflowBOTLeader] = useState(null);
    const [dataReflowBOTRepair, setDataReflowBOTRepair] = useState(null);
    const [dataReflowBOTValidation, setDataReflowBOTValidation] = useState(null);


    const [dataAOIBOTLeader, setDataAOIBOTLeader] = useState(null);
    const [dataAOIBOTRepair, setDataAOIBOTRepair] = useState(null);
    const [dataAOIBOTValidation, setDataAOIBOTValidation] = useState(null);



    const [dataRVSBOTLeader, setDataRVSBOTLeader] = useState(null);
    const [dataRVSBOTRepair, setDataRVSBOTRepair] = useState(null);
    const [dataRVSBOTValidation, setDataRVSBOTValidation] = useState(null);


    const [dataDropinBELeader, setDataDropinBELeader] = useState(null);
    const [dataDropinBERepair, setDataDropinBERepair] = useState(null);
    const [dataDropinBEValidation, setDataDropinBEValidation] = useState(null);



    const [dataFluxerBELeader, setDataFluxerBELeader] = useState(null);
    const [dataFluxerBERepair, setDataFluxerBERepair] = useState(null);
    const [dataFluxerBEValidation, setDataFluxerBEValidation] = useState(null);



    const [dataPreheatBELeader, setDataPreheatBELeader] = useState(null);
    const [dataPreheatBERepair, setDataPreheatBERepair] = useState(null);
    const [dataPreheatBEValidation, setDataPreheatBEValidation] = useState(null);


    const [dataSeho1BELeader, setDataSeho1BELeader] = useState(null);
    const [dataSeho1BERepair, setDataSeho1BERepair] = useState(null);
    const [dataSeho1BEValidation, setDataSeho1BEValidation] = useState(null);


    const [dataSeho2BELeader, setDataSeho2BELeader] = useState(null);
    const [dataSeho2BERepair, setDataSeho2BERepair] = useState(null);
    const [dataSeho2BEValidation, setDataSeho2BEValidation] = useState(null);


    const [dataTouchupBELeader, setDataTouchupBELeader] = useState(null);
    const [dataTouchupBERepair, setDataTouchupBERepair] = useState(null);
    const [dataTouchupBEValidation, setDataTouchupBEValidation] = useState(null);



    const [dataICTBELeader, setDataICTBELeader] = useState(null);
    const [dataICTBERepair, setDataICTBERepair] = useState(null);
    const [dataICTBEValidation, setDataICTBEValidation] = useState(null);


    const [dataFlashBELeader, setDataFlashBELeader] = useState(null);
    const [dataFlashBERepair, setDataFlashBERepair] = useState(null);
    const [dataFlashBEValidation, setDataFlashBEValidation] = useState(null);

    const [dataRouterBELeader, setDataRouterBELeader] = useState(null);
    const [dataRouterBERepair, setDataRouterBERepair] = useState(null);
    const [dataRouterBEValidation, setDataRouterBEValidation] = useState(null);

    //   ------------------




    // refresh

    // useEffect(() => {
    //     const onBeforeUnload = (ev) => {
    //         ev.returnValue = "";
    //         return "";
    //     };

    //     window.addEventListener("beforeunload", onBeforeUnload);

    //     return () => {
    //         window.removeEventListener("beforeunload", onBeforeUnload);
    //     };
    // }, []);

    //  fungsi mengambil data dari firebase
    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };
    useEffect(() => {
        const ref3 = firebase.database().ref("StatusLine/SMTLine1");
        ref3.on("value", (snapshot) => {
            const data = snapshot.val();
            setStatusLine(data);
        });

        const ref8 = firebase.database().ref("SMTLine1TOP/Destacker (TOP)");
        ref8.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusDestackerTop(data);

        });

        const ref9 = firebase.database().ref("SMTLine1TOP/Label (TOP)");
        ref9.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusLabelTop(data);

        });

        const ref18 = firebase.database().ref("/SMTLine1TOP/Printer (TOP)");
        ref18.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusPrinterTop(data);

        });

        const ref19 = firebase.database().ref("/SMTLine1TOP/SPI (TOP)");
        ref19.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusSPITop(data);

        });

        const ref20 = firebase.database().ref("/SMTLine1TOP/Pick&Place (TOP)");
        ref20.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusPickNPlaceTop(data);

        });

        const ref21 = firebase.database().ref("/SMTLine1TOP/Reflow (TOP)");
        ref21.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusReflowTop(data);

        });

        const ref22 = firebase.database().ref("/SMTLine1TOP/AOI (TOP)");
        ref22.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusAOITop(data);

        });

        const ref23 = firebase.database().ref("/SMTLine1TOP/RVS (TOP)");
        ref23.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusRVSTop(data);

        });


        // SMT BOT
        const ref24 = firebase.database().ref("SMTLine1BOT/Printer (BOT)");
        ref24.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusPrinterBot(data);

        });

        const ref25 = firebase.database().ref("SMTLine1BOT/SPI (BOT)");
        ref25.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusSPIBot(data);
        });

        const ref26 = firebase.database().ref("SMTLine1BOT/Pick&Place (BOT)");
        ref26.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusPickNPlaceBot(data);

        });

        const ref27 = firebase.database().ref("SMTLine1BOT/Reflow (BOT)");
        ref27.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusReflowBot(data);

        });

        const ref28 = firebase.database().ref("SMTLine1BOT/AOI (BOT)");
        ref28.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusAOIBot(data);

        });

        const ref29 = firebase.database().ref("SMTLine1BOT/RVS (BOT)");
        ref29.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusRVSBot(data);

        });



        // SMT BE
        const ref30 = firebase.database().ref("SMTLine1BE/Drop in (BE)");
        ref30.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusDropinBe(data);

        });


        const ref31 = firebase.database().ref("SMTLine1BE/Fluxer (BE)");
        ref31.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusFluxerBe(data);
        });

        const ref32 = firebase.database().ref("SMTLine1BE/PreHeat (BE)");
        ref32.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusPreheatBe(data);

        });

        const ref33 = firebase.database().ref("SMTLine1BE/Seho1 (BE)");
        ref33.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusSeho1Be(data);
        });


        const ref34 = firebase.database().ref("SMTLine1BE/Seho2 (BE)");
        ref34.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusSeho2Be(data);

        });

        const ref35 = firebase.database().ref("SMTLine1BE/Touch UP (BE)");
        ref35.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusTouchupBe(data);

        });

        const ref36 = firebase.database().ref("SMTLine1BE/ICT (BE)");
        ref36.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusICTBe(data);

        });


        const ref37 = firebase.database().ref("SMTLine1BE/Flash (BE)");
        ref37.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusFlashBe(data);

        });

        const ref38 = firebase.database().ref("SMTLine1BE/Router (BE)");
        ref38.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusRouterBe(data);

        });

        // RealTime

        const ref74 = firebase.database().ref("/SMTLine1TOP/DestackerTopTime");
        ref74.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeDestackerTop(data);
        });

        const ref75 = firebase.database().ref("/SMTLine1TOP/LabelTopTime");
        ref75.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeLabelTop(data);
        });

        const ref76 = firebase.database().ref("/SMTLine1TOP/PrinterTopTime");
        ref76.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimePrinterTop(data);
        });

        const ref77 = firebase.database().ref("/SMTLine1TOP/SPITopTime");
        ref77.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeSPITop(data);
        });

        const ref78 = firebase.database().ref("/SMTLine1TOP/PickNPlaceTopTime");
        ref78.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimePickNPlaceTop(data);
        });

        const ref79 = firebase.database().ref("/SMTLine1TOP/ReflowTopTime");
        ref79.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeReflowTop(data);
        });


        const ref71 = firebase.database().ref("/SMTLine1TOP/AOITopTime");
        ref71.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeAOITop(data);
        });

        const ref72 = firebase.database().ref("/SMTLine1TOP/RVSTopTime");
        ref72.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeRVSTop(data);
        });

        const ref84 = firebase.database().ref("/SMTLine1BOT/PrinterBotTime");
        ref84.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimePrinterBot(data);
        });

        const ref85 = firebase.database().ref("/SMTLine1BOT/SPIBotTime");
        ref85.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeSPIBot(data);
        });

        const ref86 = firebase.database().ref("/SMTLine1BOT/PickNPlaceBotTime");
        ref86.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimePickNPlaceBot(data);
        });

        const ref87 = firebase.database().ref("/SMTLine1BOT/ReflowBotTime");
        ref87.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeReflowBot(data);
        });

        const ref88 = firebase.database().ref("/SMTLine1BOT/AOIBotTime");
        ref88.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeAOIBot(data);
        });

        const ref89 = firebase.database().ref("/SMTLine1BOT/RVSBotTime");
        ref89.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeRVSBot(data);
        });

        const ref54 = firebase.database().ref("/SMTLine1BE/DropinBeTime");
        ref54.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeDropinBe(data);
        });

        const ref55 = firebase.database().ref("/SMTLine1BE/FluxerBeTime");
        ref55.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeFluxerBe(data);
        });

        const ref56 = firebase.database().ref("/SMTLine1BE/PreheatBeTime");
        ref56.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimePreheatBe(data);
        });

        const ref57 = firebase.database().ref("/SMTLine1BE/Seho1BeTime");
        ref57.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeSeho1Be(data);
        });

        const ref58 = firebase.database().ref("/SMTLine1BE/Seho5BeTime");
        ref58.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeSeho2Be(data);
        });

        const ref59 = firebase.database().ref("/SMTLine1BE/TouchupBeTime");
        ref59.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeTouchupBe(data);
        });


        const ref60 = firebase.database().ref("/SMTLine1BE/ICTBeTime");
        ref60.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeICTBe(data);
        });

        const ref61 = firebase.database().ref("/SMTLine1BE/FlashBeTime");
        ref61.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeFlashBe(data);
        });

        const ref62 = firebase.database().ref("/SMTLine1BE/RouterBeTime");
        ref62.on("value", (snapshot) => {
            const data = snapshot.val();
            setTimeRouterBe(data);
        });


        return () => { };
    }, []);
    // ------------------------

    // PRODUCTION FUNTION

    // .................................

    // FUNGSI WAKTU

    // Mengubah Format Waktu
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1
        }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

    // fungsi time di navbar
    function updateTime() {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }
    useEffect(() => {
        updateTime();
    }, []);

    // ...................

    // FUNGSI UPDATE STATUS
    // fungsi mengubah warna status

    // LINE 1 SMT TOP
    const updateStatusDestackerTop = (data) => {
        setStatusDestackerTop(data);
        setBackgroundColorStatusDestackerTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusLabelTop = (data) => {
        setStatusLabelTop(data);
        setBackgroundColorStatusLabelTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusPrinterTop = (data) => {
        setStatusPrinterTop(data);
        setBackgroundColorStatusPrinterTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusSPITop = (data) => {
        setStatusSPITop(data);
        setBackgroundColorStatusSPITop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusPickNPlaceTop = (data) => {
        setStatusPickNPlaceTop(data);
        setBackgroundColorStatusPickNPlaceTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusReflowTop = (data) => {
        setStatusReflowTop(data);
        setBackgroundColorStatusReflowTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusAOITop = (data) => {
        setStatusAOITop(data);
        setBackgroundColorStatusAOITop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusRVSTop = (data) => {
        setStatusRVSTop(data);
        setBackgroundColorStatusRVSTop(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };
    // ------------------------------------

    // LINE 1 SMT BOT
    const updateStatusPrinterBot = (data) => {
        setStatusPrinterBot(data);
        setBackgroundColorStatusPrinterBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };
    const updateStatusSPIBot = (data) => {
        setStatusSPIBot(data);
        setBackgroundColorStatusSPIBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusPickNPlaceBot = (data) => {
        setStatusPickNPlaceBot(data);
        setBackgroundColorStatusPickNPlaceBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusReflowBot = (data) => {
        setStatusReflowBot(data);
        setBackgroundColorStatusReflowBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusAOIBot = (data) => {
        setStatusAOIBot(data);
        setBackgroundColorStatusAOIBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusRVSBot = (data) => {
        setStatusRVSBot(data);
        setBackgroundColorStatusRVSBot(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };
    // --------------------------------

    // LINE 1 SMT TOP
    const updateStatusDropinBe = (data) => {
        setStatusDropinBe(data);
        setBackgroundColorStatusDropinBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusFluxerBe = (data) => {
        setStatusFluxerBe(data);
        setBackgroundColorStatusFluxerBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusPreheatBe = (data) => {
        setStatusPreheatBe(data);
        setBackgroundColorStatusPreheatBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusSeho1Be = (data) => {
        setStatusSeho1Be(data);
        setBackgroundColorStatusSeho1Be(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusSeho2Be = (data) => {
        setStatusSeho2Be(data);
        setBackgroundColorStatusSeho2Be(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusTouchupBe = (data) => {
        setStatusTouchupBe(data);
        setBackgroundColorStatusTouchupBe(
            data === "Go"
                ? "#32cd32"
                : data === "Repair"
                    ? "#E9CE08"
                    : data === "Leader"
                        ? "#C00000"
                        : data === "Return Leader"
                            ? "#C00000"
                            : data === "HRGA & EHS"
                                ? "#C00000"
                                : data === "Return HRGA & EHS"
                                    ? "#C00000"
                                    : data === "PURCHASING,PPIC,MP&L"
                                        ? "#C00000"
                                        : data === "Return PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "PROCESS ENGINEERING"
                                                ? "#C00000"
                                                : data === "Return PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "PRODUCT DEVELOPMENT"
                                                        ? "#C00000"
                                                        : data === "Return PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                ? "#C00000"
                                                                : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "QA"
                                                                        ? "#93c2c4"
                                                                        : data === "In Validation"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "MAINTENANCE & IT"
                                                                                        ? "#C00000"
                                                                                        : data === "Return MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : "#565454"
        );
    };

    const updateStatusICTBe = (data) => {
        setStatusICTBe(data);
        setBackgroundColorStatusICTBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusFlashBe = (data) => {
        setStatusFlashBe(data);
        setBackgroundColorStatusFlashBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };

    const updateStatusRouterBe = (data) => {
        setStatusRouterBe(data);
        setBackgroundColorStatusRouterBe(
            data === "Go"
                ? "#32cd32"
                : data === "Return Repair"
                    ? "#E9CE08"
                    : data === "Repair"
                        ? "#E9CE08"
                        : data === "Leader"
                            ? "#C00000"
                            : data === "Return Leader"
                                ? "#C00000"
                                : data === "HRGA & EHS"
                                    ? "#C00000"
                                    : data === "Return HRGA & EHS"
                                        ? "#C00000"
                                        : data === "PURCHASING,PPIC,MP&L"
                                            ? "#C00000"
                                            : data === "Return PURCHASING,PPIC,MP&L"
                                                ? "#C00000"
                                                : data === "PROCESS ENGINEERING"
                                                    ? "#C00000"
                                                    : data === "Return PROCESS ENGINEERING"
                                                        ? "#C00000"
                                                        : data === "PRODUCT DEVELOPMENT"
                                                            ? "#C00000"
                                                            : data === "Return PRODUCT DEVELOPMENT"
                                                                ? "#C00000"
                                                                : data === "ADVANCED MANUFACTURING ENGINEERING"
                                                                    ? "#C00000"
                                                                    : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                                                        ? "#C00000"
                                                                        : data === "QA"
                                                                            ? "#93c2c4"
                                                                            : data === "QC"
                                                                                ? "#93c2c4"
                                                                                : data === "Production"
                                                                                    ? "#93c2c4"
                                                                                    : data === "In Validation"
                                                                                        ? "#93c2c4"
                                                                                        : data === "MAINTENANCE & IT"
                                                                                            ? "#C00000"
                                                                                            : data === "Return MAINTENANCE & IT"
                                                                                                ? "#C00000"
                                                                                                : "#565454"
        );
    };
    // ------------------------------------

    // Fetch Data By Station
    const formatDateAPI = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0'); // Add leading zeros to hours
        const minutes = date.getMinutes().toString().padStart(2, '0'); // Add leading zeros to minutes

        return `${day}/${month}/${year} ~~ ${hours}:${minutes} WIB`;
    };


    // Destacker
    const fetchDestackerTOPLeader = () => fetchData("/getDestackerTOPLeader", setDataDestackerTOPLeader);
    const fetchDestackerTOPRepair = () => fetchData("/getDestackerTOPRepair", setDataDestackerTOPRepair);
    const fetchDestackerTOPValidation = () => fetchData("/getDestackerTOPValidation", setDataDestackerTOPValidation);


    // Label
    const fetchLabelTOPLeader = () => fetchData("/getLabelTOPLeader", setDataLabelTOPLeader);
    const fetchLabelTOPRepair = () => fetchData("/getLabelTOPRepair", setDataLabelTOPRepair);
    const fetchLabelTOPValidation = () => fetchData("/getLabelTOPValidation", setDataLabelTOPValidation);


    // Printer
    const fetchPrinterTOPLeader = () => fetchData("/getPrinterTOPLeader", setDataPrinterTOPLeader);
    const fetchPrinterTOPRepair = () => fetchData("/getPrinterTOPRepair", setDataPrinterTOPRepair);
    const fetchPrinterTOPValidation = () => fetchData("/getPrinterTOPValidation", setDataPrinterTOPValidation);


    // SPI
    const fetchSPITOPLeader = () => fetchData("/getSPITOPLeader", setDataSPITOPLeader);
    const fetchSPITOPRepair = () => fetchData("/getSPITOPRepair", setDataSPITOPRepair);
    const fetchSPITOPValidation = () => fetchData("/getSPITOPValidation", setDataSPITOPValidation);


    // PickNPlace
    const fetchPickNPlaceTOPLeader = () => fetchData("/getPickNPlaceTOPLeader", setDataPickNPlaceTOPLeader);
    const fetchPickNPlaceTOPRepair = () => fetchData("/getPickNPlaceTOPRepair", setDataPickNPlaceTOPRepair);
    const fetchPickNPlaceTOPValidation = () => fetchData("/getPickNPlaceTOPValidation", setDataPickNPlaceTOPValidation);


    // Reflow
    const fetchReflowTOPLeader = () => fetchData("/getReflowTOPLeader", setDataReflowTOPLeader);
    const fetchReflowTOPRepair = () => fetchData("/getReflowTOPRepair", setDataReflowTOPRepair);
    const fetchReflowTOPValidation = () => fetchData("/getReflowTOPValidation", setDataReflowTOPValidation);


    // SPI
    const fetchAOITOPLeader = () => fetchData("/getAOITOPLeader", setDataAOITOPLeader);
    const fetchAOITOPRepair = () => fetchData("/getAOITOPRepair", setDataAOITOPRepair);
    const fetchAOITOPValidation = () => fetchData("/getAOITOPValidation", setDataAOITOPValidation);


    // RVS
    const fetchRVSTOPLeader = () => fetchData("/getRVSTOPLeader", setDataRVSTOPLeader);
    const fetchRVSTOPRepair = () => fetchData("/getRVSTOPRepair", setDataRVSTOPRepair);
    const fetchRVSTOPValidation = () => fetchData("/getRVSTOPValidation", setDataRVSTOPValidation);


    // SMT BOT
    // Printer
    const fetchPrinterBOTLeader = () => fetchData("/getPrinterBOTLeader", setDataPrinterBOTLeader);
    const fetchPrinterBOTRepair = () => fetchData("/getPrinterBOTRepair", setDataPrinterBOTRepair);
    const fetchPrinterBOTValidation = () => fetchData("/getPrinterBOTValidation", setDataPrinterBOTValidation);



    // SPI
    const fetchSPIBOTLeader = () => fetchData("/getSPIBOTLeader", setDataSPIBOTLeader);
    const fetchSPIBOTRepair = () => fetchData("/getSPIBOTRepair", setDataSPIBOTRepair);
    const fetchSPIBOTValidation = () => fetchData("/getSPIBOTValidation", setDataSPIBOTValidation);


    // PickNPlace
    const fetchPickNPlaceBOTLeader = () => fetchData("/getPickNPlaceBOTLeader", setDataPickNPlaceBOTLeader);
    const fetchPickNPlaceBOTRepair = () => fetchData("/getPickNPlaceBOTRepair", setDataPickNPlaceBOTRepair);
    const fetchPickNPlaceBOTValidation = () => fetchData("/getPickNPlaceBOTValidation", setDataPickNPlaceBOTValidation);


    // Reflow
    const fetchReflowBOTLeader = () => fetchData("/getReflowBOTLeader", setDataReflowBOTLeader);
    const fetchReflowBOTRepair = () => fetchData("/getReflowBOTRepair", setDataReflowBOTRepair);
    const fetchReflowBOTValidation = () => fetchData("/getReflowBOTValidation", setDataReflowBOTValidation);


    // AOI
    const fetchAOIBOTLeader = () => fetchData("/getAOIBOTLeader", setDataAOIBOTLeader);
    const fetchAOIBOTRepair = () => fetchData("/getAOIBOTRepair", setDataAOIBOTRepair);
    const fetchAOIBOTValidation = () => fetchData("/getAOIBOTValidation", setDataAOIBOTValidation);

    // RVS
    const fetchRVSBOTLeader = () => fetchData("/getRVSBOTLeader", setDataRVSBOTLeader);
    const fetchRVSBOTRepair = () => fetchData("/getRVSBOTRepair", setDataRVSBOTRepair);
    const fetchRVSBOTValidation = () => fetchData("/getRVSBOTValidation", setDataRVSBOTValidation);

    //   SMT BE
    // Destacker
    const fetchDropinBELeader = () => fetchData("/getDropinBELeader", setDataDropinBELeader);
    const fetchDropinBERepair = () => fetchData("/getDropinBERepair", setDataDropinBERepair);
    const fetchDropinBEValidation = () => fetchData("/getDropinBEValidation", setDataDropinBEValidation);


    // Label
    const fetchFluxerBELeader = () => fetchData("/getFluxerBELeader", setDataFluxerBELeader);
    const fetchFluxerBERepair = () => fetchData("/getFluxerBERepair", setDataFluxerBERepair);
    const fetchFluxerBEValidation = () => fetchData("/getFluxerBEValidation", setDataFluxerBEValidation);


    // Printer
    const fetchPreheatBELeader = () => fetchData("/getPreheatBELeader", setDataPreheatBELeader);
    const fetchPreheatBERepair = () => fetchData("/getPreheatBERepair", setDataPreheatBERepair);
    const fetchPreheatBEValidation = () => fetchData("/getPreheatBEValidation", setDataPreheatBEValidation);


    // SPI
    const fetchSeho1BELeader = () => fetchData("/getSeho1BELeader", setDataSeho1BELeader);
    const fetchSeho1BERepair = () => fetchData("/getSeho1BERepair", setDataSeho1BERepair);
    const fetchSeho1BEValidation = () => fetchData("/getSeho1BEValidation", setDataSeho1BEValidation);


    // PickNPlace
    const fetchSeho2BELeader = () => fetchData("/getSeho2BELeader", setDataSeho2BELeader);
    const fetchSeho2BERepair = () => fetchData("/getSeho2BERepair", setDataSeho2BERepair);
    const fetchSeho2BEValidation = () => fetchData("/getSeho2BEValidation", setDataSeho2BEValidation);


    // Reflow
    const fetchTouchupBELeader = () => fetchData("/getTouchupBELeader", setDataTouchupBELeader);
    const fetchTouchupBERepair = () => fetchData("/getTouchupBERepair", setDataTouchupBERepair);
    const fetchTouchupBEValidation = () => fetchData("/getTouchupBEValidation", setDataTouchupBEValidation);


    // SPI
    const fetchICTBELeader = () => fetchData("/getICTBELeader", setDataICTBELeader);
    const fetchICTBERepair = () => fetchData("/getICTBERepair", setDataICTBERepair);
    const fetchICTBEValidation = () => fetchData("/getICTBEValidation", setDataICTBEValidation);


    // RVS
    const fetchFlashBELeader = () => fetchData("/getFlashBELeader", setDataFlashBELeader);
    const fetchFlashBERepair = () => fetchData("/getFlashBERepair", setDataFlashBERepair);
    const fetchFlashBEValidation = () => fetchData("/getFlashBEValidation", setDataFlashBEValidation);


    const fetchRouterBELeader = () => fetchData("/getRouterBELeader", setDataRouterBELeader);
    const fetchRouterBERepair = () => fetchData("/getRouterBERepair", setDataRouterBERepair);
    const fetchRouterBEValidation = () => fetchData("/getRouterBEValidation", setDataRouterBEValidation);





    const fetchData = (endpoint, setDataFunction) => {
        fetch(`https://andonline.astra-visteon.com:3002/api/${endpoint}`)
            .then((response) => response.json())
            .then((data) => {
                setDataFunction(data);
            })
            .catch((error) => {
                // Handle error if the request fails
                console.error("Error fetching data:", error);
            });
    };

    useEffect(() => {
        const fetchDataFunctions = [
            fetchDestackerTOPLeader,
            fetchDestackerTOPRepair,
            fetchDestackerTOPValidation,


            fetchLabelTOPLeader,
            fetchLabelTOPRepair,
            fetchLabelTOPValidation,


            fetchPrinterTOPLeader,
            fetchPrinterTOPRepair,
            fetchPrinterTOPValidation,


            fetchSPITOPLeader,
            fetchSPITOPRepair,
            fetchSPITOPValidation,


            fetchPickNPlaceTOPLeader,
            fetchPickNPlaceTOPRepair,
            fetchPickNPlaceTOPValidation,


            fetchReflowTOPLeader,
            fetchReflowTOPRepair,
            fetchReflowTOPValidation,


            fetchAOITOPLeader,
            fetchAOITOPRepair,
            fetchAOITOPValidation,


            fetchRVSTOPLeader,
            fetchRVSTOPRepair,
            fetchRVSTOPValidation,

            fetchPrinterBOTLeader,
            fetchPrinterBOTRepair,
            fetchPrinterBOTValidation,


            fetchSPIBOTLeader,
            fetchSPIBOTRepair,
            fetchSPIBOTValidation,


            fetchPickNPlaceBOTLeader,
            fetchPickNPlaceBOTRepair,
            fetchPickNPlaceBOTValidation,


            fetchReflowBOTLeader,
            fetchReflowBOTRepair,
            fetchReflowBOTValidation,


            fetchAOIBOTLeader,
            fetchAOIBOTRepair,
            fetchAOIBOTValidation,


            fetchRVSBOTLeader,
            fetchRVSBOTRepair,
            fetchRVSBOTValidation,

            fetchDropinBELeader,
            fetchDropinBERepair,
            fetchDropinBEValidation,


            fetchFluxerBELeader,
            fetchFluxerBERepair,
            fetchFluxerBEValidation,


            fetchPreheatBELeader,
            fetchPreheatBERepair,
            fetchPreheatBEValidation,


            fetchSeho1BELeader,
            fetchSeho1BERepair,
            fetchSeho1BEValidation,


            fetchSeho2BELeader,
            fetchSeho2BERepair,
            fetchSeho2BEValidation,


            fetchTouchupBELeader,
            fetchTouchupBERepair,
            fetchTouchupBEValidation,


            fetchICTBELeader,
            fetchICTBERepair,
            fetchICTBEValidation,


            fetchFlashBELeader,
            fetchFlashBERepair,
            fetchFlashBEValidation,

            fetchRouterBELeader,
            fetchRouterBERepair,
            fetchRouterBEValidation,


        ];

        const intervalIds = fetchDataFunctions.map((func) => setInterval(func, 3000));

        return () => {
            intervalIds.forEach((intervalId) => clearInterval(intervalId));
        };
    }, []);
    // 
    // ...............................................

    // Background
    const styles = {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${process.env.PUBLIC_URL}/Line.jpg)`,
        backgroundSize: "1600px",
        height: "730px",
    };
    

    return (
        <body style={styles}>
            <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
                <div class="flex h-14 items-center justify-between">
                    <div class="flex items-center">
                        <div class="flex-shrink-0">
                            <img
                                src={process.env.PUBLIC_URL + "/avi.png"}
                                alt="Logo"
                                class="h-6 ml-4 sm:h-9 bg-white rounded-md"
                            />
                        </div>
                    </div>
                    <p class="text-gray-500 text-sm">{formattedTime}</p>
                </div>
            </nav>

            <header class="bg-white shadow mb-3">
                <div class="mx-auto max-w-7xl px-4">
                    <div>
                        <div class="flex ">
                            <button>
                                <h1 class="text-xl font-sans tracking-tight text-gray-900">
                                    | SMT Line 1 |
                                </h1>
                            </button>
                            <h1 class="text-xl font-sans tracking-tight ml-4">
                                <span class="text-black">SMT LINE 1:</span>
                                <span
                                    class="ml-4"
                                    style={{
                                        color: StatusLine === "Running" ? "green" : "red",
                                    }}
                                >
                                    {StatusLine}
                                </span>
                                <span className="ml-4">|</span>
                            </h1>
                            <h1 class="text-xl font-sans tracking-tight ml-4">
                                <span class="text-black">SMT LINE 2:</span>
                                <span class="ml-4 text-green-500">RUNNING </span>|
                            </h1>
                        </div>
                    </div>
                </div>
            </header>

            {/*  */}
            <main>
                <div className=" justify-center items-center mx-auto text-center">
                    <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
                        SMT LINE 1
                    </span>
                </div>
                <div>


                </div>

                <button onClick={() => setIsSMTTOP((prevValue) => !prevValue)} className="flex">
                    <div className=" pt-2 sm:ml-5 text-2xl text-white font-thin px-2"
                    >
                        SMT TOP
                    </div>
                    <div className="mt-3">
                        <svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24" /> <g> <path d="M7 10l5 5 5-5" /> </g> </g>

                        </svg>
                    </div>
                </button>

                {isSMTTOP ? (
                    <>
                        <div>
                            <div class=" flex    p-4 sm:ml-5">
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}

                                        <div className="  w-50 sm:w-50 lg:w-50">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusDestackerTop,
                                                }}
                                                value={DestackerTop}
                                                onClick={() => {
                                                    if (StatusDestackerTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataDestackerTOPLeader);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "MAINTENANCE & IT" || StatusDestackerTop === "HRGA & EHS" || StatusDestackerTop === "PURCHASING,PPIC,MP&L" || StatusDestackerTop === "PROCESS ENGINEERING" || StatusDestackerTop === "PRODUCT DEVELOPMENT" || StatusDestackerTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataDestackerTOPRepair);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataDestackerTOPRepair);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "QA" || StatusDestackerTop === "QC" || StatusDestackerTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataDestackerTOPValidation);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "Return MAINTENANCE & IT" || StatusDestackerTop === "Return HRGA & EHS" || StatusDestackerTop === "Return PURCHASING,PPIC,MP&L" || StatusDestackerTop === "Return PROCESS ENGINEERING" || StatusDestackerTop === "Return PRODUCT DEVELOPMENT" || StatusDestackerTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataDestackerTOPRepair);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataDestackerTOPValidation);
                                                        setButton("DestackerTop");
                                                    } else if (StatusDestackerTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataDestackerTOPValidation);
                                                        setButton("DestackerTop");
                                                    }
                                                    setStation(DestackerTop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
				z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
				C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
				C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
				C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
				C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
				V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
				V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        DESTACKER TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusLabelTop,
                                                }}
                                                value={LabelTop}
                                                onClick={() => {
                                                    if (StatusLabelTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataLabelTOPLeader);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "MAINTENANCE & IT" || StatusLabelTop === "HRGA & EHS" || StatusLabelTop === "PURCHASING,PPIC,MP&L" || StatusLabelTop === "PROCESS ENGINEERING" || StatusLabelTop === "PRODUCT DEVELOPMENT" || StatusLabelTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataLabelTOPRepair);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataLabelTOPRepair);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "QA" || StatusLabelTop === "QC" || StatusLabelTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataLabelTOPValidation);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "Return MAINTENANCE & IT" || StatusLabelTop === "Return HRGA & EHS" || StatusLabelTop === "Return PURCHASING,PPIC,MP&L" || StatusLabelTop === "Return PROCESS ENGINEERING" || StatusLabelTop === "Return PRODUCT DEVELOPMENT" || StatusLabelTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataLabelTOPRepair);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataLabelTOPValidation);
                                                        setButton("LabelTop");
                                                    } else if (StatusLabelTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataLabelTOPValidation);
                                                        setButton("LabelTop");
                                                    }
                                                    setStation(LabelTop);
                                                }}

                                                class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "

                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
				c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
				s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
				 M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
				H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
				c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
				c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
				 M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
				v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
				h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
				c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
				z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
				C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
				C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
				C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
				C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
				c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
				V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
				c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
				V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
				C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
				c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
				C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
				c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
				C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
				c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
				C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
				c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
				C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
				s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
				C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
				c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        LABEL TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusPrinterTop,
                                                }}
                                                value={PrinterTop}
                                                onClick={() => {
                                                    if (StatusPrinterTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataPrinterTOPLeader);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "MAINTENANCE & IT" || StatusPrinterTop === "HRGA & EHS" || StatusPrinterTop === "PURCHASING,PPIC,MP&L" || StatusPrinterTop === "PROCESS ENGINEERING" || StatusPrinterTop === "PRODUCT DEVELOPMENT" || StatusPrinterTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataPrinterTOPRepair);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataPrinterTOPRepair);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "QA" || StatusPrinterTop === "QC" || StatusPrinterTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataPrinterTOPValidation);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "Return MAINTENANCE & IT" || StatusPrinterTop === "Return HRGA & EHS" || StatusPrinterTop === "Return PURCHASING,PPIC,MP&L" || StatusPrinterTop === "Return PROCESS ENGINEERING" || StatusPrinterTop === "Return PRODUCT DEVELOPMENT" || StatusPrinterTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataPrinterTOPRepair);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataPrinterTOPValidation);
                                                        setButton("PrinterTop");
                                                    } else if (StatusPrinterTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataPrinterTOPValidation);
                                                        setButton("PrinterTop");
                                                    }
                                                    setStation(PrinterTop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            ><svg
                                                width="50px"
                                                fill="#2e3436"
                                                fill-opacity="0.7000"
                                                className="justify-center items-center mx-auto mt-1"
                                                version="1.1"
                                                id="Layer_1"
                                                viewBox="0 0 512 512"
                                            >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        PRINTER TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusSPITop,
                                                }}
                                                value={SPITop}
                                                onClick={() => {
                                                    if (StatusSPITop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataSPITOPLeader);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "MAINTENANCE & IT" || StatusSPITop === "HRGA & EHS" || StatusSPITop === "PURCHASING,PPIC,MP&L" || StatusSPITop === "PROCESS ENGINEERING" || StatusSPITop === "PRODUCT DEVELOPMENT" || StatusSPITop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataSPITOPRepair);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataSPITOPRepair);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "QA" || StatusSPITop === "QC" || StatusSPITop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataSPITOPValidation);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "Return MAINTENANCE & IT" || StatusSPITop === "Return HRGA & EHS" || StatusSPITop === "Return PURCHASING,PPIC,MP&L" || StatusSPITop === "Return PROCESS ENGINEERING" || StatusSPITop === "Return PRODUCT DEVELOPMENT" || StatusSPITop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataSPITOPRepair);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataSPITOPValidation);
                                                        setButton("SPITop");
                                                    } else if (StatusSPITop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataSPITOPValidation);
                                                        setButton("SPITop");
                                                    }
                                                    setStation(SPITop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            ><svg
                                                width="50px"
                                                fill="#2e3436"
                                                fill-opacity="0.7000"
                                                className="justify-center items-center mx-auto mt-1"
                                                version="1.1"
                                                id="Layer_1"
                                                viewBox="0 0 512 512"
                                            >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">SPI TOP </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusPickNPlaceTop,
                                                }}
                                                value={PickNPlaceTop}
                                                onClick={() => {
                                                    if (StatusPickNPlaceTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataPickNPlaceTOPLeader);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "MAINTENANCE & IT" || StatusPickNPlaceTop === "HRGA & EHS" || StatusPickNPlaceTop === "PURCHASING,PPIC,MP&L" || StatusPickNPlaceTop === "PROCESS ENGINEERING" || StatusPickNPlaceTop === "PRODUCT DEVELOPMENT" || StatusPickNPlaceTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataPickNPlaceTOPRepair);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataPickNPlaceTOPRepair);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "QA" || StatusPickNPlaceTop === "QC" || StatusPickNPlaceTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataPickNPlaceTOPValidation);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "Return MAINTENANCE & IT" || StatusPickNPlaceTop === "Return HRGA & EHS" || StatusPickNPlaceTop === "Return PURCHASING,PPIC,MP&L" || StatusPickNPlaceTop === "Return PROCESS ENGINEERING" || StatusPickNPlaceTop === "Return PRODUCT DEVELOPMENT" || StatusPickNPlaceTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataPickNPlaceTOPRepair);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataPickNPlaceTOPValidation);
                                                        setButton("PickNPlaceTop");
                                                    } else if (StatusPickNPlaceTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataPickNPlaceTOPValidation);
                                                        setButton("PickNPlaceTop");
                                                    }
                                                    setStation(PickNPlaceTop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            ><svg
                                                width="50px"
                                                fill="#2e3436"
                                                fill-opacity="0.7000"
                                                className="justify-center items-center mx-auto mt-1"
                                                version="1.1"
                                                id="Layer_1"
                                                viewBox="0 0 512 512"
                                            >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        PICK & PLACE TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section
                                    class="antialiased 
          text-gray-600  px-2"
                                    x-data="app"
                                >
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusReflowTop,
                                                }}
                                                value={ReflowTop}
                                                onClick={() => {
                                                    if (StatusReflowTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataReflowTOPLeader);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "MAINTENANCE & IT" || StatusReflowTop === "HRGA & EHS" || StatusReflowTop === "PURCHASING,PPIC,MP&L" || StatusReflowTop === "PROCESS ENGINEERING" || StatusReflowTop === "PRODUCT DEVELOPMENT" || StatusReflowTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataReflowTOPRepair);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataReflowTOPRepair);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "QA" || StatusReflowTop === "QC" || StatusReflowTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataReflowTOPValidation);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "Return MAINTENANCE & IT" || StatusReflowTop === "Return HRGA & EHS" || StatusReflowTop === "Return PURCHASING,PPIC,MP&L" || StatusReflowTop === "Return PROCESS ENGINEERING" || StatusReflowTop === "Return PRODUCT DEVELOPMENT" || StatusReflowTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataReflowTOPRepair);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataReflowTOPValidation);
                                                        setButton("ReflowTop");
                                                    } else if (StatusReflowTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataReflowTOPValidation);
                                                        setButton("ReflowTop");
                                                    }
                                                    setStation(ReflowTop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        REFLOW TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusAOITop,
                                                }}
                                                value={AOITop}
                                                onClick={() => {
                                                    if (StatusAOITop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataAOITOPLeader);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "MAINTENANCE & IT" || StatusAOITop === "HRGA & EHS" || StatusAOITop === "PURCHASING,PPIC,MP&L" || StatusAOITop === "PROCESS ENGINEERING" || StatusAOITop === "PRODUCT DEVELOPMENT" || StatusAOITop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataAOITOPRepair);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataAOITOPRepair);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "QA" || StatusAOITop === "QC" || StatusAOITop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataAOITOPValidation);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "Return MAINTENANCE & IT" || StatusAOITop === "Return HRGA & EHS" || StatusAOITop === "Return PURCHASING,PPIC,MP&L" || StatusAOITop === "Return PROCESS ENGINEERING" || StatusAOITop === "Return PRODUCT DEVELOPMENT" || StatusAOITop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataAOITOPRepair);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataAOITOPValidation);
                                                        setButton("AOITop");
                                                    } else if (StatusAOITop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataAOITOPValidation);
                                                        setButton("AOITop");
                                                    }
                                                    setStation(AOITop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">AOI TOP</div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusRVSTop,
                                                }}
                                                value={RVSTop}
                                                onClick={() => {
                                                    if (StatusRVSTop === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataRVSTOPLeader);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "MAINTENANCE & IT" || StatusRVSTop === "HRGA & EHS" || StatusRVSTop === "PURCHASING,PPIC,MP&L" || StatusRVSTop === "PROCESS ENGINEERING" || StatusRVSTop === "PRODUCT DEVELOPMENT" || StatusRVSTop === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataRVSTOPRepair);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataRVSTOPRepair);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "QA" || StatusRVSTop === "QC" || StatusRVSTop === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataRVSTOPValidation);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "Return MAINTENANCE & IT" || StatusRVSTop === "Return HRGA & EHS" || StatusRVSTop === "Return PURCHASING,PPIC,MP&L" || StatusRVSTop === "Return PROCESS ENGINEERING" || StatusRVSTop === "Return PRODUCT DEVELOPMENT" || StatusRVSTop === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataRVSTOPRepair);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataRVSTOPValidation);
                                                        setButton("RVSTop");
                                                    } else if (StatusRVSTop === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataRVSTOPValidation);
                                                        setButton("RVSTop");
                                                    }
                                                    setStation(RVSTop);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        RVS TOP
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>

                       
                    </>
                ) : null}


                <button onClick={() => setIsSMTBOT((prevValue) => !prevValue)} className="flex">
                    <div className=" pt-2 sm:ml-5 text-2xl text-white font-thin px-2"
                    >
                        SMT BOTTOM
                    </div>
                    <div className="mt-3">
                        <svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24" /> <g> <path d="M7 10l5 5 5-5" /> </g> </g>

                        </svg>
                    </div>
                </button>


                {isSMTBOT ? (
                    <>
                        <div>
                            <div class="pt-4 flex    p-4 sm:ml-5">
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusPrinterBot,
                                                }}
                                                value={PrinterBot}
                                                onClick={() => {
                                                    if (StatusPrinterBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataPrinterBOTLeader);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "MAINTENANCE & IT" || StatusPrinterBot === "HRGA & EHS" || StatusPrinterBot === "PURCHASING,PPIC,MP&L" || StatusPrinterBot === "PROCESS ENGINEERING" || StatusPrinterBot === "PRODUCT DEVELOPMENT" || StatusPrinterBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataPrinterBOTRepair);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataPrinterBOTRepair);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "QA" || StatusPrinterBot === "QC" || StatusPrinterBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataPrinterBOTValidation);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "Return MAINTENANCE & IT" || StatusPrinterBot === "Return HRGA & EHS" || StatusPrinterBot === "Return PURCHASING,PPIC,MP&L" || StatusPrinterBot === "Return PROCESS ENGINEERING" || StatusPrinterBot === "Return PRODUCT DEVELOPMENT" || StatusPrinterBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataPrinterBOTRepair);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataPrinterBOTValidation);
                                                        setButton("PrinterBot");
                                                    } else if (StatusPrinterBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataPrinterBOTValidation);
                                                        setButton("PrinterBot");
                                                    }
                                                    setStation(PrinterBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        PRINTER BOT
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusSPIBot,
                                                }}
                                                value={SPIBot}
                                                onClick={() => {
                                                    if (StatusSPIBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataSPIBOTLeader);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "MAINTENANCE & IT" || StatusSPIBot === "HRGA & EHS" || StatusSPIBot === "PURCHASING,PPIC,MP&L" || StatusSPIBot === "PROCESS ENGINEERING" || StatusSPIBot === "PRODUCT DEVELOPMENT" || StatusSPIBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataSPIBOTRepair);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataSPIBOTRepair);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "QA" || StatusSPIBot === "QC" || StatusSPIBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataSPIBOTValidation);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "Return MAINTENANCE & IT" || StatusSPIBot === "Return HRGA & EHS" || StatusSPIBot === "Return PURCHASING,PPIC,MP&L" || StatusSPIBot === "Return PROCESS ENGINEERING" || StatusSPIBot === "Return PRODUCT DEVELOPMENT" || StatusSPIBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataSPIBOTRepair);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataSPIBOTValidation);
                                                        setButton("SPIBot");
                                                    } else if (StatusSPIBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataSPIBOTValidation);
                                                        setButton("SPIBot");
                                                    }
                                                    setStation(SPIBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">SPI BOT</div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusPickNPlaceBot,
                                                }}
                                                value={PickNPlaceBot}
                                                onClick={() => {
                                                    if (StatusPickNPlaceBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataPickNPlaceBOTLeader);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "MAINTENANCE & IT" || StatusPickNPlaceBot === "HRGA & EHS" || StatusPickNPlaceBot === "PURCHASING,PPIC,MP&L" || StatusPickNPlaceBot === "PROCESS ENGINEERING" || StatusPickNPlaceBot === "PRODUCT DEVELOPMENT" || StatusPickNPlaceBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataPickNPlaceBOTRepair);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataPickNPlaceBOTRepair);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "QA" || StatusPickNPlaceBot === "QC" || StatusPickNPlaceBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataPickNPlaceBOTValidation);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "Return MAINTENANCE & IT" || StatusPickNPlaceBot === "Return HRGA & EHS" || StatusPickNPlaceBot === "Return PURCHASING,PPIC,MP&L" || StatusPickNPlaceBot === "Return PROCESS ENGINEERING" || StatusPickNPlaceBot === "Return PRODUCT DEVELOPMENT" || StatusPickNPlaceBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataPickNPlaceBOTRepair);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataPickNPlaceBOTValidation);
                                                        setButton("PickNPlaceBot");
                                                    } else if (StatusPickNPlaceBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataPickNPlaceBOTValidation);
                                                        setButton("PickNPlaceBot");
                                                    }
                                                    setStation(PickNPlaceBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        PICK & PLACE BOT
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusReflowBot,
                                                }}
                                                value={ReflowBot}
                                                onClick={() => {
                                                    if (StatusReflowBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataReflowBOTLeader);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "MAINTENANCE & IT" || StatusReflowBot === "HRGA & EHS" || StatusReflowBot === "PURCHASING,PPIC,MP&L" || StatusReflowBot === "PROCESS ENGINEERING" || StatusReflowBot === "PRODUCT DEVELOPMENT" || StatusReflowBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataReflowBOTRepair);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataReflowBOTRepair);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "QA" || StatusReflowBot === "QC" || StatusReflowBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataReflowBOTValidation);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "Return MAINTENANCE & IT" || StatusReflowBot === "Return HRGA & EHS" || StatusReflowBot === "Return PURCHASING,PPIC,MP&L" || StatusReflowBot === "Return PROCESS ENGINEERING" || StatusReflowBot === "Return PRODUCT DEVELOPMENT" || StatusReflowBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataReflowBOTRepair);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataReflowBOTValidation);
                                                        setButton("ReflowBot");
                                                    } else if (StatusReflowBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataReflowBOTValidation);
                                                        setButton("ReflowBot");
                                                    }
                                                    setStation(ReflowBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        REFLOW BOT
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusAOIBot,
                                                }}
                                                value={AOIBot}
                                                onClick={() => {
                                                    if (StatusAOIBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataAOIBOTLeader);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "MAINTENANCE & IT" || StatusAOIBot === "HRGA & EHS" || StatusAOIBot === "PURCHASING,PPIC,MP&L" || StatusAOIBot === "PROCESS ENGINEERING" || StatusAOIBot === "PRODUCT DEVELOPMENT" || StatusAOIBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataAOIBOTRepair);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataAOIBOTRepair);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "QA" || StatusAOIBot === "QC" || StatusAOIBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataAOIBOTValidation);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "Return MAINTENANCE & IT" || StatusAOIBot === "Return HRGA & EHS" || StatusAOIBot === "Return PURCHASING,PPIC,MP&L" || StatusAOIBot === "Return PROCESS ENGINEERING" || StatusAOIBot === "Return PRODUCT DEVELOPMENT" || StatusAOIBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataAOIBOTRepair);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataAOIBOTValidation);
                                                        setButton("AOIBot");
                                                    } else if (StatusAOIBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataAOIBOTValidation);
                                                        setButton("AOIBot");
                                                    }
                                                    setStation(AOIBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">AOI BOT</div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{
                                                    backgroundColor: backgroundColorStatusRVSBot,
                                                }}
                                                value={RVSBot}
                                                onClick={() => {
                                                    if (StatusRVSBot === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataRVSBOTLeader);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "MAINTENANCE & IT" || StatusRVSBot === "HRGA & EHS" || StatusRVSBot === "PURCHASING,PPIC,MP&L" || StatusRVSBot === "PROCESS ENGINEERING" || StatusRVSBot === "PRODUCT DEVELOPMENT" || StatusRVSBot === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataRVSBOTRepair);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataRVSBOTRepair);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "QA" || StatusRVSBot === "QC" || StatusRVSBot === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataRVSBOTValidation);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "Return MAINTENANCE & IT" || StatusRVSBot === "Return HRGA & EHS" || StatusRVSBot === "Return PURCHASING,PPIC,MP&L" || StatusRVSBot === "Return PROCESS ENGINEERING" || StatusRVSBot === "Return PRODUCT DEVELOPMENT" || StatusRVSBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataRVSBOTRepair);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataRVSBOTValidation);
                                                        setButton("RVSBot");
                                                    } else if (StatusRVSBot === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataRVSBOTValidation);
                                                        setButton("RVSBot");
                                                    }
                                                    setStation(RVSBot);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">RVS BOT</div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </>
                ) : null}


                <button onClick={() => setIsSMTBE((prevValue) => !prevValue)} className="flex">
                    <div className=" pt-2 sm:ml-5 text-2xl text-white font-thin px-2"
                    >
                        SMT BACKEND
                    </div>
                    <div className="mt-3">
                        <svg width="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">

                            <g id="SVGRepo_bgCarrier" stroke-width="0" />

                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                            <g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="24" height="24" /> <g> <path d="M7 10l5 5 5-5" /> </g> </g>

                        </svg>
                    </div>
                </button>

                {isSMTBE ? (
                    <>
                        <div>
                            <div class="pt-4 flex    p-4 sm:ml-5">
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusDropinBe }}
                                                value={DropinBe}
                                                onClick={() => {
                                                    if (StatusDropinBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataDropinBELeader);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "MAINTENANCE & IT" || StatusDropinBe === "HRGA & EHS" || StatusDropinBe === "PURCHASING,PPIC,MP&L" || StatusDropinBe === "PROCESS ENGINEERING" || StatusDropinBe === "PRODUCT DEVELOPMENT" || StatusDropinBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataDropinBERepair);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataDropinBERepair);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "QA" || StatusDropinBe === "QC" || StatusDropinBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataDropinBEValidation);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "Return MAINTENANCE & IT" || StatusDropinBe === "Return HRGA & EHS" || StatusDropinBe === "Return PURCHASING,PPIC,MP&L" || StatusDropinBe === "Return PROCESS ENGINEERING" || StatusDropinBe === "Return PRODUCT DEVELOPMENT" || StatusDropinBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataDropinBERepair);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataDropinBEValidation);
                                                        setButton("DropinBe");
                                                    } else if (StatusDropinBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataDropinBEValidation);
                                                        setButton("DropinBe");
                                                    }
                                                    setStation(DropinBe);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        DROP IN (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusFluxerBe }}

                                                value={FluxerBe}
                                                onClick={() => {
                                                    if (StatusFluxerBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataFluxerBELeader);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "MAINTENANCE & IT" || StatusFluxerBe === "HRGA & EHS" || StatusFluxerBe === "PURCHASING,PPIC,MP&L" || StatusFluxerBe === "PROCESS ENGINEERING" || StatusFluxerBe === "PRODUCT DEVELOPMENT" || StatusFluxerBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataFluxerBERepair);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataFluxerBERepair);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "QA" || StatusFluxerBe === "QC" || StatusFluxerBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataFluxerBEValidation);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "Return MAINTENANCE & IT" || StatusFluxerBe === "Return HRGA & EHS" || StatusFluxerBe === "Return PURCHASING,PPIC,MP&L" || StatusFluxerBe === "Return PROCESS ENGINEERING" || StatusFluxerBe === "Return PRODUCT DEVELOPMENT" || StatusFluxerBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataFluxerBERepair);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataFluxerBEValidation);
                                                        setButton("FluxerBe");
                                                    } else if (StatusFluxerBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataFluxerBEValidation);
                                                        setButton("FluxerBe");
                                                    }
                                                    setStation(FluxerBe);
                                                }}

                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        FLUXER (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusPreheatBe }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                                value={PreheatBe}
                                                onClick={() => {
                                                    if (StatusPreheatBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataPreheatBELeader);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "MAINTENANCE & IT" || StatusPreheatBe === "HRGA & EHS" || StatusPreheatBe === "PURCHASING,PPIC,MP&L" || StatusPreheatBe === "PROCESS ENGINEERING" || StatusPreheatBe === "PRODUCT DEVELOPMENT" || StatusPreheatBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataPreheatBERepair);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataPreheatBERepair);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "QA" || StatusPreheatBe === "QC" || StatusPreheatBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataPreheatBEValidation);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "Return MAINTENANCE & IT" || StatusPreheatBe === "Return HRGA & EHS" || StatusPreheatBe === "Return PURCHASING,PPIC,MP&L" || StatusPreheatBe === "Return PROCESS ENGINEERING" || StatusPreheatBe === "Return PRODUCT DEVELOPMENT" || StatusPreheatBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataPreheatBERepair);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataPreheatBEValidation);
                                                        setButton("PreheatBe");
                                                    } else if (StatusPreheatBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataPreheatBEValidation);
                                                        setButton("PreheatBe");
                                                    }
                                                    setStation(PreheatBe);
                                                }}

                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        PREHEAT (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusSeho1Be }}

                                                value={Seho1Be}
                                                onClick={() => {
                                                    if (StatusSeho1Be === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataSeho1BELeader);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "MAINTENANCE & IT" || StatusSeho1Be === "HRGA & EHS" || StatusSeho1Be === "PURCHASING,PPIC,MP&L" || StatusSeho1Be === "PROCESS ENGINEERING" || StatusSeho1Be === "PRODUCT DEVELOPMENT" || StatusSeho1Be === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataSeho1BERepair);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataSeho1BERepair);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "QA" || StatusSeho1Be === "QC" || StatusSeho1Be === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataSeho1BEValidation);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "Return MAINTENANCE & IT" || StatusSeho1Be === "Return HRGA & EHS" || StatusSeho1Be === "Return PURCHASING,PPIC,MP&L" || StatusSeho1Be === "Return PROCESS ENGINEERING" || StatusSeho1Be === "Return PRODUCT DEVELOPMENT" || StatusSeho1Be === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataSeho1BERepair);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataSeho1BEValidation);
                                                        setButton("Seho1Be");
                                                    } else if (StatusSeho1Be === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataSeho1BEValidation);
                                                        setButton("Seho1Be");
                                                    }
                                                    setStation(Seho1Be);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        SEHO 1 (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusSeho2Be }}

                                                value={Seho2Be}
                                                onClick={() => {
                                                    if (StatusSeho2Be === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataSeho2BELeader);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "MAINTENANCE & IT" || StatusSeho2Be === "HRGA & EHS" || StatusSeho2Be === "PURCHASING,PPIC,MP&L" || StatusSeho2Be === "PROCESS ENGINEERING" || StatusSeho2Be === "PRODUCT DEVELOPMENT" || StatusSeho2Be === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataSeho2BERepair);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataSeho2BERepair);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "QA" || StatusSeho2Be === "QC" || StatusSeho2Be === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataSeho2BEValidation);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "Return MAINTENANCE & IT" || StatusSeho2Be === "Return HRGA & EHS" || StatusSeho2Be === "Return PURCHASING,PPIC,MP&L" || StatusSeho2Be === "Return PROCESS ENGINEERING" || StatusSeho2Be === "Return PRODUCT DEVELOPMENT" || StatusSeho2Be === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataSeho2BERepair);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataSeho2BEValidation);
                                                        setButton("Seho2Be");
                                                    } else if (StatusSeho2Be === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataSeho2BEValidation);
                                                        setButton("Seho2Be");
                                                    }
                                                    setStation(Seho2Be);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        SEHO2 (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusTouchupBe }}

                                                value={TouchupBe}
                                                onClick={() => {
                                                    if (StatusTouchupBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataTouchupBELeader);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "MAINTENANCE & IT" || StatusTouchupBe === "HRGA & EHS" || StatusTouchupBe === "PURCHASING,PPIC,MP&L" || StatusTouchupBe === "PROCESS ENGINEERING" || StatusTouchupBe === "PRODUCT DEVELOPMENT" || StatusTouchupBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataTouchupBERepair);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataTouchupBERepair);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "QA" || StatusTouchupBe === "QC" || StatusTouchupBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataTouchupBEValidation);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "Return MAINTENANCE & IT" || StatusTouchupBe === "Return HRGA & EHS" || StatusTouchupBe === "Return PURCHASING,PPIC,MP&L" || StatusTouchupBe === "Return PROCESS ENGINEERING" || StatusTouchupBe === "Return PRODUCT DEVELOPMENT" || StatusTouchupBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataTouchupBERepair);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataTouchupBEValidation);
                                                        setButton("TouchupBe");
                                                    } else if (StatusTouchupBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataTouchupBEValidation);
                                                        setButton("TouchupBe");
                                                    }
                                                    setStation(TouchupBe);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        TOUCH UP (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusICTBe }}

                                                value={ICTBe}
                                                onClick={() => {
                                                    if (StatusICTBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataICTBELeader);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "MAINTENANCE & IT" || StatusICTBe === "HRGA & EHS" || StatusICTBe === "PURCHASING,PPIC,MP&L" || StatusICTBe === "PROCESS ENGINEERING" || StatusICTBe === "PRODUCT DEVELOPMENT" || StatusICTBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataICTBERepair);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataICTBERepair);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "QA" || StatusICTBe === "QC" || StatusICTBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataICTBEValidation);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "Return MAINTENANCE & IT" || StatusICTBe === "Return HRGA & EHS" || StatusICTBe === "Return PURCHASING,PPIC,MP&L" || StatusICTBe === "Return PROCESS ENGINEERING" || StatusICTBe === "Return PRODUCT DEVELOPMENT" || StatusICTBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataICTBERepair);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataICTBEValidation);
                                                        setButton("ICTBe");
                                                    } else if (StatusICTBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataICTBEValidation);
                                                        setButton("ICTBe");
                                                    }
                                                    setStation(ICTBe);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">ICT (BE)</div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusFlashBe }}

                                                value={FlashBe}
                                                onClick={() => {
                                                    if (StatusFlashBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataFlashBELeader);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "MAINTENANCE & IT" || StatusFlashBe === "HRGA & EHS" || StatusFlashBe === "PURCHASING,PPIC,MP&L" || StatusFlashBe === "PROCESS ENGINEERING" || StatusFlashBe === "PRODUCT DEVELOPMENT" || StatusFlashBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataFlashBERepair);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataFlashBERepair);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "QA" || StatusFlashBe === "QC" || StatusFlashBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataFlashBEValidation);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "Return MAINTENANCE & IT" || StatusFlashBe === "Return HRGA & EHS" || StatusFlashBe === "Return PURCHASING,PPIC,MP&L" || StatusFlashBe === "Return PROCESS ENGINEERING" || StatusFlashBe === "Return PRODUCT DEVELOPMENT" || StatusFlashBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataFlashBERepair);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataFlashBEValidation);
                                                        setButton("FlashBe");
                                                    } else if (StatusFlashBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataFlashBEValidation);
                                                        setButton("FlashBe");
                                                    }
                                                    setStation(FlashBe);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        FLASH (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>
                                </section>
                                <section class="antialiased  text-gray-600  px-2" x-data="app">
                                    <div class="flex flex-col ">
                                        {/* <!-- Table --> */}
                                        <div className=" w-50 sm:w-50 lg:w-50 ">
                                            <button
                                                style={{ backgroundColor: backgroundColorStatusRouterBe }}

                                                value={RouterBe}
                                                onClick={() => {
                                                    if (StatusRouterBe === "Leader") {

                                                        setIsOpenLeader(true);
                                                        setOptionData(dataRouterBELeader);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "MAINTENANCE & IT" || StatusRouterBe === "HRGA & EHS" || StatusRouterBe === "PURCHASING,PPIC,MP&L" || StatusRouterBe === "PROCESS ENGINEERING" || StatusRouterBe === "PRODUCT DEVELOPMENT" || StatusRouterBe === "ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenRequest(true);
                                                        setOptionData(dataRouterBERepair);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "Repair") {
                                                        setIsOpenRepair(true);
                                                        setOptionData(dataRouterBERepair);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "QA" || StatusRouterBe === "QC" || StatusRouterBe === "Production") {
                                                        setIsOpenRequestValidation(true);
                                                        setOptionData(dataRouterBEValidation);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "Return MAINTENANCE & IT" || StatusRouterBe === "Return HRGA & EHS" || StatusRouterBe === "Return PURCHASING,PPIC,MP&L" || StatusRouterBe === "Return PROCESS ENGINEERING" || StatusRouterBe === "Return PRODUCT DEVELOPMENT" || StatusRouterBe === "Return ADVANCED MANUFACTURING ENGINEERING") {
                                                        setIsOpenReturn(true);
                                                        setOptionData(dataRouterBERepair);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "In Validation") {
                                                        setIsOpenInValidation(true);
                                                        setOptionData(dataRouterBEValidation);
                                                        setButton("RouterBe");
                                                    } else if (StatusRouterBe === "Go") {
                                                        setIsOpenValidation(true);
                                                        setOptionData(dataRouterBEValidation);
                                                        setButton("RouterBe");
                                                    }
                                                    setStation(RouterBe);
                                                }}
                                                class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                                            >
                                                <svg
                                                    width="50px"
                                                    fill="#2e3436"
                                                    fill-opacity="0.7000"
                                                    className="justify-center items-center mx-auto mt-1"
                                                    version="1.1"
                                                    id="Layer_1"
                                                    viewBox="0 0 512 512"
                                                >
                                                    <g>
                                                        <g>
                                                            <g>
                                                                <path
                                                                    d="M503.467,0H332.8H59.733h-51.2C3.82,0,0,3.82,0,8.533V281.6V384c0,4.713,3.82,8.533,8.533,8.533H25.6v102.4H8.533
        c-4.713,0-8.533,3.82-8.533,8.533S3.82,512,8.533,512h25.6h51.2h341.333h51.2h25.6c4.713,0,8.533-3.82,8.533-8.533
        s-3.82-8.533-8.533-8.533H486.4v-102.4h17.067c4.713,0,8.533-3.82,8.533-8.533V281.6V8.533C512,3.82,508.18,0,503.467,0z
         M494.933,273.067h-153.6v-102.4v-51.2v-102.4h153.6V273.067z M324.267,162.133h-34.133V128h34.133V162.133z M324.267,110.933
        H281.6c-4.713,0-8.533,3.82-8.533,8.533v51.2c0,4.713,3.82,8.533,8.533,8.533h42.667v93.867h-256v-76.8h51.2v8.533
        c0,4.713,3.82,8.533,8.533,8.533h68.267c4.713,0,8.533-3.821,8.533-8.533V85.333c0-4.713-3.82-8.533-8.533-8.533H128
        c-4.713,0-8.533,3.82-8.533,8.533v8.533h-51.2v-76.8h256V110.933z M136.533,187.733V102.4v-8.533h51.2v102.4h-51.2V187.733z
         M119.467,179.2h-51.2v-68.267h51.2V179.2z M17.067,17.067H51.2V102.4v85.333v85.333H17.067V17.067z M42.667,494.933v-102.4H76.8
        v102.4H42.667z M418.133,392.533v102.4H93.867v-102.4H418.133z M469.333,494.933H435.2v-102.4h34.133V494.933z M494.933,375.467
        h-17.067h-51.2H85.333h-51.2H17.067v-85.333h42.667H332.8h162.133V375.467z"
                                                                />
                                                                <path
                                                                    d="M366.933,119.467h102.4c4.713,0,8.533-3.82,8.533-8.533V42.667c0-4.713-3.82-8.533-8.533-8.533h-102.4
        c-4.713,0-8.533,3.82-8.533,8.533v68.267C358.4,115.646,362.221,119.467,366.933,119.467z M375.467,51.2H460.8v51.2h-85.333V51.2
        z"
                                                                />
                                                                <path
                                                                    d="M366.933,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C358.4,175.38,362.221,179.2,366.933,179.2z"
                                                                />
                                                                <path
                                                                    d="M469.333,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.82,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C477.867,140.354,474.046,136.533,469.333,136.533z"
                                                                />
                                                                <path
                                                                    d="M435.2,179.2c4.713,0,8.533-3.82,8.533-8.533v-25.6c0-4.713-3.82-8.533-8.533-8.533s-8.533,3.82-8.533,8.533v25.6
        C426.667,175.38,430.487,179.2,435.2,179.2z"
                                                                />
                                                                <path
                                                                    d="M401.067,136.533c-4.713,0-8.533,3.82-8.533,8.533v25.6c0,4.713,3.821,8.533,8.533,8.533s8.533-3.82,8.533-8.533v-25.6
        C409.6,140.354,405.78,136.533,401.067,136.533z"
                                                                />
                                                                <path
                                                                    d="M366.933,247.467h34.133c4.713,0,8.533-3.82,8.533-8.533V204.8c0-4.713-3.82-8.533-8.533-8.533h-34.133
        c-4.713,0-8.533,3.82-8.533,8.533v34.133C358.4,243.646,362.221,247.467,366.933,247.467z M375.467,213.333h17.067V230.4h-17.067
        V213.333z"
                                                                />
                                                                <path
                                                                    d="M469.333,196.267H435.2c-4.713,0-8.533,3.82-8.533,8.533v34.133c0,4.713,3.82,8.533,8.533,8.533h34.133
        c4.713,0,8.533-3.82,8.533-8.533V204.8C477.867,200.087,474.046,196.267,469.333,196.267z M460.8,230.4h-17.067v-17.067H460.8
        V230.4z"
                                                                />
                                                                <path
                                                                    d="M85.333,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C110.933,318.658,99.476,307.2,85.333,307.2z M85.333,341.333c-4.716,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.717,0,8.533,3.817,8.533,8.533C93.867,337.517,90.05,341.333,85.333,341.333z"
                                                                />
                                                                <path
                                                                    d="M153.6,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6c14.142,0,25.6-11.458,25.6-25.6
        C179.2,318.658,167.742,307.2,153.6,307.2z M153.6,341.333c-4.717,0-8.533-3.817-8.533-8.533c0-4.716,3.817-8.533,8.533-8.533
        c4.716,0,8.533,3.817,8.533,8.533C162.133,337.517,158.317,341.333,153.6,341.333z"
                                                                />
                                                                <path
                                                                    d="M221.867,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C247.467,318.658,236.009,307.2,221.867,307.2z M221.867,341.333c-4.717,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533c4.716,0,8.533,3.817,8.533,8.533C230.4,337.517,226.583,341.333,221.867,341.333z"
                                                                />
                                                                <path
                                                                    d="M290.133,307.2c-14.142,0-25.6,11.458-25.6,25.6c0,14.142,11.458,25.6,25.6,25.6s25.6-11.458,25.6-25.6
        C315.733,318.658,304.276,307.2,290.133,307.2z M290.133,341.333c-4.716,0-8.533-3.817-8.533-8.533
        c0-4.716,3.817-8.533,8.533-8.533s8.533,3.817,8.533,8.533C298.667,337.517,294.85,341.333,290.133,341.333z"
                                                                />
                                                                <path
                                                                    d="M358.4,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C332.8,346.942,344.258,358.4,358.4,358.4z M358.4,324.267c4.716,0,8.533,3.817,8.533,8.533c0,4.717-3.817,8.533-8.533,8.533
        s-8.533-3.817-8.533-8.533C349.867,328.083,353.684,324.267,358.4,324.267z"
                                                                />
                                                                <path
                                                                    d="M426.667,358.4c14.142,0,25.6-11.458,25.6-25.6c0-14.142-11.458-25.6-25.6-25.6s-25.6,11.458-25.6,25.6
        C401.067,346.942,412.525,358.4,426.667,358.4z M426.667,324.267c4.716,0,8.533,3.817,8.533,8.533
        c0,4.717-3.817,8.533-8.533,8.533s-8.533-3.817-8.533-8.533C418.133,328.083,421.95,324.267,426.667,324.267z"
                                                                />
                                                            </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                                <header class="px-5 py-2  ">
                                                    <div class="italic  text-center text-sm text-white">
                                                        ROUTER (BE)
                                                    </div>
                                                </header>
                                            </button>
                                        </div>
                                    </div>

                                </section>
                            </div>
                        </div>

                     
                    </>
                ) : null}
            </main>



            {/* Status Request Perbaikan  */}
            {/*Pop up Request */}
            <td>
                {isOpenRequest ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button
                                                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => {

                                                    setIsOpenRequest(false);
                                                }}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                            <div class="p-6 text-center">
                                                <svg fill="#B48900" class="mx-auto mb-4  animate-pulse w-14 h-14 dark:text-gray-200" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M187.698 120.105c41.846-15.492 89.309-5.554 121.432 26.561 44.941 44.941 44.941 117.826-.002 162.769-44.953 44.953-117.828 44.953-162.781 0-32.25-32.25-42.125-79.975-26.367-121.934 3.977-10.589-1.383-22.396-11.972-26.373s-22.396 1.383-26.373 11.972c-21.357 56.869-7.968 121.581 35.749 165.298 60.949 60.949 159.758 60.949 220.707 0 60.939-60.939 60.939-159.758 0-220.697-43.541-43.53-107.898-57.005-164.614-36.008-10.607 3.927-16.023 15.709-12.096 26.316s15.709 16.023 26.316 12.096z" /><path d="M161.408 118.082l52.879 52.869c4.331 4.334 4.331 11.381-.001 15.713l-27.924 27.924c-4.341 4.341-11.373 4.341-15.714 0l-52.594-52.584c-7.999-7.997-20.966-7.996-28.963.003s-7.996 20.966.003 28.963l52.593 52.582c20.336 20.336 53.302 20.336 73.639-.001l27.924-27.924c20.326-20.326 20.326-53.297.006-73.634l-52.887-52.877c-7.999-7.997-20.966-7.996-28.963.003s-7.996 20.966.003 28.963zM836.42 904.635c-41.846 15.492-89.309 5.554-121.432-26.561-44.941-44.941-44.941-117.826.002-162.769 44.953-44.953 117.828-44.953 162.781 0 32.25 32.25 42.125 79.975 26.367 121.934-3.977 10.589 1.383 22.396 11.972 26.373s22.396-1.383 26.373-11.972c21.357-56.869 7.968-121.581-35.749-165.298-60.949-60.949-159.758-60.949-220.707 0-60.939 60.939-60.939 159.758 0 220.697 43.541 43.53 107.898 57.005 164.614 36.008 10.607-3.927 16.023-15.709 12.096-26.316s-15.709-16.023-26.316-12.096z" /><path d="M862.712 906.659l-52.869-52.869c-4.34-4.34-4.34-11.377-.006-15.708l27.923-27.933c4.339-4.339 11.37-4.339 15.711.003l52.594 52.584c7.999 7.997 20.966 7.996 28.963-.003s7.996-20.966-.003-28.963l-52.593-52.582c-20.336-20.336-53.302-20.336-73.639.001l-27.917 27.927c-20.335 20.319-20.335 53.299.003 73.638l52.869 52.869c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM674.469 738.186l-391.26-391.26c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963l391.26 391.26c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM343.768 279.258l400.374 400.374c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963L372.731 250.295c-7.998-7.998-20.965-7.998-28.963 0s-7.998 20.965 0 28.963zm255.917 112.52l176.732-176.732c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0L570.722 362.815c-7.998 7.998-7.998 20.965 0 28.963s20.965 7.998 28.963 0zm214.393-149.914L631.53 422.641c-8.037 7.959-8.1 20.926-.141 28.963s20.926 8.1 28.963.141L842.9 270.968c8.037-7.959 8.1-20.926.141-28.963s-20.926-8.1-28.963-.141z" /><path d="M945.721 131.005a20.48 20.48 0 014.873 21.176l-28.201 81.531a20.481 20.481 0 01-12.659 12.66l-81.541 28.211a20.48 20.48 0 01-21.179-4.874l-53.32-53.33a20.48 20.48 0 01-4.872-21.175l28.201-81.531a20.478 20.478 0 0112.658-12.659l81.531-28.211a20.478 20.478 0 0121.178 4.873l53.33 53.33zm-73.228-15.302l-60.012 20.765-20.758 60.014 35.194 35.201 60.021-20.766 20.758-60.012-35.202-35.202zm-421.165 544.57L208.763 902.838c-7.497 7.497-16.502 8.466-19.734 5.237l-74.541-74.541c-3.223-3.226-2.254-12.226 5.248-19.733l242.089-242.079c7.998-7.998 7.998-20.965.001-28.963s-20.965-7.998-28.963-.001L90.769 784.842c-22.28 22.295-26.003 56.877-5.249 77.648l74.553 74.553c20.778 20.76 55.375 17.036 77.654-5.243l242.565-242.565c7.998-7.998 7.998-20.965 0-28.963s-20.965-7.998-28.963 0z" /></svg>

                                                <h3 class=" text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
                                                    <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Permintaan Bantuan Perbaikan Oleh : {OptionData?.Requestor || ""} <br /> <span className="text-green-500"> To Department : {OptionData?.Department || ""}</span>
                                                </h3>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Nama {OptionData?.Requestor || ""} :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Nama || ""}

                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Request at  :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={formatDateAPI(OptionData?.Date) || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Problem :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Problem || ""}
                                                        />
                                                    </div>
                                                    <div className="w-full px-3">
                                                        <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Down Time:
                                                        </label>
                                                        {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                            <input
                                                                type="text"
                                                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                name="NamaPIC"
                                                                readOnly
                                                                value={
                                                                    Button === "DestackerTop" ? TimeDestackerTop :
                                                                        Button === "LabelTop" ? TimeLabelTop :
                                                                            Button === "PrinterTop" ? TimePrinterTop :
                                                                                Button === "SPITop" ? TimeSPITop :
                                                                                    Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                        Button === "ReflowTop" ? TimeReflowTop :
                                                                                            Button === "AOITop" ? TimeAOITop :
                                                                                                Button === "RVSTop" ? TimeRVSTop :
                                                                                                    Button === "PrinterBot" ? TimePrinterBot :
                                                                                                        Button === "SPIBot" ? TimeSPIBot :
                                                                                                            Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                    Button === "AOIBot" ? TimeAOIBot :
                                                                                                                        Button === "RVSBot" ? TimeRVSBot :
                                                                                                                            Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                    Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                        Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                            Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                    Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                        Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                            Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                ""
                                                                }
                                                            />
                                                        )}
                                                    </div>


                                                </div>

                                            </div>

                                            <div class="flex justify-center">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>

            {/* ---------------------- */}

            {/* Status Repair  */}
            {/*Pop up Repair  */}
            <td>
                {isOpenRepair ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <form>
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <button
                                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                    onClick={() => {

                                                        setIsOpenRepair(false);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                <div class="p-6 text-center">
                                                    <svg
                                                        fill="#e28743"
                                                        class="mx-auto mb-4 animate-bounce w-32 h-14 "
                                                        viewBox="0 0 32 32"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <title>repair</title>
                                                        <path d="M27.472 25.67l3.511 2.664c0.764-1.983 0.2-4.311-1.579-5.661-1.368-1.038-3.108-1.248-4.61-0.713l-0.532-0.403-0.070-0.132c0.37-0.526 0.691-1.076 0.961-1.644l2.417-0.067 0.495-1.58-1.953-1.438c0.095-0.591 0.142-1.189 0.143-1.786l2.167-1.1-0.229-1.64-2.392-0.468c-0.2-0.688-0.466-1.362-0.798-2.011l1.426-1.973-0.954-1.354-2.347 0.682c-0.029-0.031-0.058-0.062-0.088-0.093-0.375-0.388-0.771-0.743-1.184-1.066l0.451-2.321-1.435-0.827-1.781 1.551c-0.577-0.232-1.169-0.415-1.769-0.549l-0.584-2.291-1.651-0.135-0.951 2.172c-0.492 0.030-0.982 0.091-1.468 0.185l-1.454-1.877-1.568 0.533-0.008 2.39c-0.664 0.342-1.303 0.753-1.904 1.236l-2.215-0.998-1.134 1.207 1.134 2.151c-0.366 0.521-0.683 1.067-0.951 1.63l-2.433 0.067-0.495 1.58 1.966 1.448c-0.094 0.586-0.142 1.179-0.144 1.772l-2.18 1.106 0.229 1.64 2.394 0.468c0.143 0.498 0.319 0.989 0.531 1.468l-1.58 1.959 0.881 1.402 2.453-0.573c0.154 0.181 0.315 0.359 0.482 0.532 0.353 0.365 0.723 0.701 1.107 1.008l-0.477 2.459 1.435 0.827 1.873-1.632c0.538 0.216 1.089 0.389 1.649 0.519l0.612 2.401 1.651 0.135 0.991-2.263c0.686-0.041 1.369-0.144 2.041-0.308l1.576 1.825 1.538-0.616-0.083-1.685 0.974 0.739c-0.115 1.597 0.543 3.233 1.909 4.271 1.778 1.349 4.172 1.266 5.877-0.004l-3.51-2.663c-0.619-0.469-0.762-1.358-0.312-1.952s1.328-0.672 1.946-0.202zM13.845 23.736c-1.985-0.224-3.892-1.12-5.388-2.669-3.421-3.538-3.323-9.167 0.216-12.587s9.17-3.36 12.59 0.178c3.012 3.115 3.293 7.878 0.903 11.308l-5.822-4.417c0.11-1.589-0.561-3.21-1.928-4.247-1.778-1.349-4.172-1.266-5.877 0.004l3.51 2.663c0.618 0.469 0.78 1.334 0.33 1.929s-1.346 0.696-1.964 0.226l-3.51-2.663c-0.763 1.983-0.2 4.311 1.579 5.661 1.367 1.036 3.121 1.229 4.628 0.688l4.617 3.503c-1.254 0.428-2.582 0.569-3.883 0.422z"></path>
                                                    </svg>
                                                    <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-serif text-gray-500 dark:text-gray-400">
                                                        <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Sedang Dalam Perbaikan Oleh Team  {OptionData?.Department || ""}
                                                    </h3>

                                                    <div className="flex flex-col mt-2">
                                                        <div class="w-full px-3">
                                                            <div className="w-full px-3">
                                                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                    Down Time:
                                                                </label>
                                                                {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                                    <input
                                                                        type="text"
                                                                        className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                        name="NamaPIC"
                                                                        readOnly
                                                                        value={
                                                                            Button === "DestackerTop" ? TimeDestackerTop :
                                                                                Button === "LabelTop" ? TimeLabelTop :
                                                                                    Button === "PrinterTop" ? TimePrinterTop :
                                                                                        Button === "SPITop" ? TimeSPITop :
                                                                                            Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                                Button === "ReflowTop" ? TimeReflowTop :
                                                                                                    Button === "AOITop" ? TimeAOITop :
                                                                                                        Button === "RVSTop" ? TimeRVSTop :
                                                                                                            Button === "PrinterBot" ? TimePrinterBot :
                                                                                                                Button === "SPIBot" ? TimeSPIBot :
                                                                                                                    Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                        Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                            Button === "AOIBot" ? TimeAOIBot :
                                                                                                                                Button === "RVSBot" ? TimeRVSBot :
                                                                                                                                    Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                        Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                            Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                                Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                                    Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                        Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                            Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                                Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                                    Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                        ""
                                                                        }
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className="font-mono mt-2 text-gray-500 ">PIC Repairment :  {OptionData?.ResponseName || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Request at :  {formatDateAPI(OptionData?.Date) || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Start at :  {formatDateAPI(OptionData?.ResponseTime) || ""} </span>
                                                    </div>
                                                    <div class="flex justify-center mt-4">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>





            {/* Status Return  */}
            {/*Pop up Return */}
            <td>
                {isOpenReturn ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">


                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <div class="p-6 text-center">
                                                <button
                                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                    onClick={() => {

                                                        setIsOpenReturn(false);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                <svg fill="#801818" class="mx-auto mb-4  animate-pulse w-14 h-14 dark:text-gray-200" viewBox="0 0 24 24" id="Layer_1" version="1.1" ><path d="M18,18c-0.55,0-1,0.45-1,1v1H6V4h6v5c0,0.55,0.45,1,1,1h4v1c0,0.55,0.45,1,1,1s1-0.45,1-1V9c0-0.13-0.03-0.25-0.07-0.37  c-0.02-0.04-0.04-0.08-0.07-0.11c-0.03-0.05-0.05-0.11-0.09-0.16l-5-6c-0.01-0.01-0.02-0.02-0.03-0.03  c-0.07-0.07-0.15-0.13-0.23-0.18c-0.03-0.02-0.06-0.05-0.1-0.06C13.28,2.03,13.15,2,13,2H5C4.45,2,4,2.45,4,3v18c0,0.55,0.45,1,1,1  h13c0.55,0,1-0.45,1-1v-2C19,18.45,18.55,18,18,18z M14,5.76L15.86,8H14V5.76z" /><path d="M8,10h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H8C7.45,8,7,8.45,7,9S7.45,10,8,10z" /><path d="M13,11H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,11,13,11z" /><path d="M13,14H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,14,13,14z" /><path d="M13,17H8c-0.55,0-1,0.45-1,1s0.45,1,1,1h5c0.55,0,1-0.45,1-1S13.55,17,13,17z" /><path d="M20.71,12.29c-0.39-0.39-1.02-0.39-1.41,0L18,13.59l-1.29-1.29c-0.39-0.39-1.02-0.39-1.41,0s-0.39,1.02,0,1.41L16.59,15  l-1.29,1.29c-0.39,0.39-0.39,1.02,0,1.41s1.02,0.39,1.41,0L18,16.41l1.29,1.29C19.49,17.9,19.74,18,20,18s0.51-0.1,0.71-0.29  c0.39-0.39,0.39-1.02,0-1.41L19.41,15l1.29-1.29C21.1,13.32,21.1,12.68,20.71,12.29z" /></svg>

                                                <h3 class=" text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
                                                    <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Validation Telah Di Tolak / Di kembalikan Oleh : {OptionData?.Requestor || ""} <br /> <span className="text-green-500"> To Department : {OptionData?.Department || ""}</span>
                                                </h3>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Nama {OptionData?.Requestor || ""} :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Nama || ""}

                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Date  :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={formatDateAPI(OptionData?.Date) || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Problem :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Problem || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full px-3">
                                                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Down Time:
                                                        </label>
                                                        {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                            <input
                                                                type="text"
                                                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                name="NamaPIC"
                                                                readOnly
                                                                value={
                                                                    Button === "DestackerTop" ? TimeDestackerTop :
                                                                        Button === "LabelTop" ? TimeLabelTop :
                                                                            Button === "PrinterTop" ? TimePrinterTop :
                                                                                Button === "SPITop" ? TimeSPITop :
                                                                                    Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                        Button === "ReflowTop" ? TimeReflowTop :
                                                                                            Button === "AOITop" ? TimeAOITop :
                                                                                                Button === "RVSTop" ? TimeRVSTop :
                                                                                                    Button === "PrinterBot" ? TimePrinterBot :
                                                                                                        Button === "SPIBot" ? TimeSPIBot :
                                                                                                            Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                    Button === "AOIBot" ? TimeAOIBot :
                                                                                                                        Button === "RVSBot" ? TimeRVSBot :
                                                                                                                            Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                    Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                        Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                            Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                    Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                        Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                            Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                ""
                                                                }
                                                            />
                                                        )}
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>
            {/* ---------------------- */}



            {/* Status Request Validation */}
            {/*Pop up Request Validation  */}
            <td>
                {isOpenRequestValidation ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen  px-4 pb-96 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button
                                                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => {

                                                    setIsOpenRequestValidation(false);
                                                }}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                            <div class="p-6 text-center">
                                                <svg class="mx-auto mb-4  animate-pulse w-14 h-14 dark:text-gray-200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M8.0001 10.1308C9.61344 8.97671 11.4547 8.57075 13 8.57075V6.22616C13 5.26817 13 4.78917 13.2952 4.65662C13.5903 4.52407 13.9484 4.8423 14.6644 5.47875L18.6367 9.00968C20.2053 10.404 20.9896 11.1012 20.9896 11.9993C20.9896 12.8975 20.2053 13.5946 18.6367 14.989L14.6644 18.5199C13.9484 19.1563 13.5903 19.4746 13.2952 19.342C13 19.2095 13 18.7305 13 17.7725V15.4279C9.4 15.4279 5.5 17.1422 4 19.9993C4 17.5676 4.37726 15.621 5.0001 14.0735" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                                <h3 class="mb-3 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
                                                    <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Permintaan Untuk Validation {OptionData?.DepartTo || ""}  :
                                                </h3>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold ">
                                                            PIC {OptionData?.Requestor || ""} :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Nama || ""}

                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold ">
                                                            Request at  :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={formatDateAPI(OptionData?.Date) || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold ">
                                                            Problem :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Problem || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold ">
                                                            Action :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Action || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full px-3">
                                                        <label class="block tracking-wide text-gray-700 text-xs font-bold ">
                                                            Down Time:
                                                        </label>
                                                        {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                            <input
                                                                type="text"
                                                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                name="NamaPIC"
                                                                readOnly
                                                                value={
                                                                    Button === "DestackerTop" ? TimeDestackerTop :
                                                                        Button === "LabelTop" ? TimeLabelTop :
                                                                            Button === "PrinterTop" ? TimePrinterTop :
                                                                                Button === "SPITop" ? TimeSPITop :
                                                                                    Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                        Button === "ReflowTop" ? TimeReflowTop :
                                                                                            Button === "AOITop" ? TimeAOITop :
                                                                                                Button === "RVSTop" ? TimeRVSTop :
                                                                                                    Button === "PrinterBot" ? TimePrinterBot :
                                                                                                        Button === "SPIBot" ? TimeSPIBot :
                                                                                                            Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                    Button === "AOIBot" ? TimeAOIBot :
                                                                                                                        Button === "RVSBot" ? TimeRVSBot :
                                                                                                                            Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                    Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                        Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                            Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                    Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                        Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                            Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                ""
                                                                }
                                                            />
                                                        )}
                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>


            {/* ------------------------------------- */}

            {/* Status Request Leader */}

            {/*Pop up leader  */}
            <td>
                {isOpenLeader ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-24 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <div class="relative bg-white  rounded-lg shadow dark:bg-gray-700">

                                            <button
                                                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => {

                                                    setIsOpenLeader(false);
                                                }}
                                            >
                                                <svg
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                            <div class="p-6 text-center">
                                                <svg fill="#000000" class="mx-auto mb-4  animate-pulse w-14 h-14 dark:text-gray-200" version="1.1" id="Layer_1"
                                                    viewBox="0 0 512 512">
                                                    <g>
                                                        <g>
                                                            <path d="M349.997,307.332c6.647-6.454,12.318-13.873,16.803-22.026h4.878c23.522,0,42.659-19.136,42.659-42.659V133.605
			c0-16.623-3.018-32.845-8.971-48.213c-9.626-24.869-26.317-46.11-48.266-61.427C334.629,8.288,308.218,0,280.719,0h-49.451
			c-27.499,0-53.912,8.29-76.385,23.972c-21.823,15.231-38.444,36.313-48.09,60.993c-0.065,0.146-0.127,0.294-0.186,0.444
			c-5.943,15.379-8.957,31.593-8.957,48.196v91.549c0,13.239,10.77,24.009,24.009,24.009h5.793c2.255,0,4.429-0.335,6.501-0.918
			c1.924,22.564,11.919,43.492,28.018,59.096c-42.434,17.897-70.868,59.737-70.868,106.906v88.823c0,4.931,3.998,8.929,8.929,8.929
			h311.934c4.933,0,8.929-3.998,8.929-8.929v-88.823C420.896,367.069,392.446,325.223,349.997,307.332z M374.393,267.292
			c1.879-6.196,3.102-12.556,3.65-19.043c2.068,0.582,4.238,0.916,6.49,0.916h5.793c1.866,0,3.673-0.235,5.417-0.639
			C393.304,258.512,384.823,266.15,374.393,267.292z M396.477,175.189v49.965c0,3.392-2.759,6.151-6.151,6.151h-5.793
			c-3.392,0-6.151-2.76-6.151-6.151v-52.856c0-3.392,2.759-6.151,6.151-6.151h5.793c3.392,0,6.151,2.759,6.151,6.151V175.189z
			 M133.605,225.154c0,3.392-2.76,6.151-6.152,6.151h-5.793c-3.392,0-6.151-2.76-6.151-6.151v-49.965v-2.891
			c0-3.392,2.759-6.151,6.151-6.151h5.793c3.392,0,6.152,2.759,6.152,6.151V225.154z M133.605,137.451v11.667
			c-1.967-0.523-4.022-0.829-6.152-0.829h-5.793c-2.129,0-4.184,0.306-6.151,0.829v-15.512c0-14.244,2.556-28.151,7.598-41.346
			c0.06-0.135,0.117-0.271,0.17-0.41c8.333-21.544,22.796-39.951,41.825-53.231c19.461-13.582,42.34-20.76,66.164-20.76h49.451
			c23.825,0,46.703,7.177,66.16,20.753c19.027,13.277,33.492,31.683,41.832,53.229c5.154,13.305,7.766,27.356,7.766,41.765v15.512
			c-1.967-0.523-4.022-0.829-6.151-0.829h-5.793c-2.129,0-4.184,0.306-6.151,0.829v-11.667c0-57.212-46.546-103.758-103.758-103.758
			h-37.261C180.151,33.692,133.605,80.238,133.605,137.451z M151.464,137.452c0-47.365,38.535-85.9,85.9-85.9h37.261
			c47.365,0,85.9,38.535,85.9,85.9V165.3l-39.979-55.961c-1.906-2.668-5.121-4.079-8.377-3.669
			c-3.254,0.408-6.024,2.568-7.211,5.625c-7.984,20.542-21.819,37.977-40.008,50.423c-18.189,12.443-39.451,19.021-61.49,19.021
			h-51.994V137.452z M151.464,240.235v-15.08v-26.56h51.994c25.652,0,50.402-7.656,71.575-22.139
			c16.767-11.47,30.355-26.586,39.9-44.253l45.592,63.819v29.134v15.08c0,9.409-1.724,18.535-5.081,27.213h-64.771
			c-4.933,0-8.929,3.998-8.929,8.929s3.997,8.929,8.929,8.929h54.959c-5.153,6.948-11.476,12.996-18.724,17.84
			c-5.467,3.651-11.409,6.584-17.669,8.716c-0.075,0.024-0.151,0.048-0.225,0.073l-41.473,13.962
			c-7.415,2.498-15.655,2.498-23.091,0l-41.469-13.962c-6.353-2.139-12.374-5.097-17.898-8.79
			C164.031,289.086,151.464,265.568,151.464,240.235z M312.999,379.229l-48.07-25.874v-8.457c2.817-0.47,5.593-1.161,8.309-2.076
			l31.612-10.643L312.999,379.229z M247.069,344.9v8.456l-48.078,25.874l8.156-47.045l31.607,10.641
			C241.474,343.74,244.252,344.43,247.069,344.9z M247.069,494.142H108.961v-79.893c0.001-43.449,28.498-81.567,69.756-94.004
			c3.642,2.203,7.438,4.154,11.361,5.845l-11.819,68.172c-0.583,3.367,0.805,6.772,3.578,8.77c1.55,1.118,3.381,1.686,5.222,1.686
			c1.449,0,2.903-0.352,4.229-1.066l22.978-12.364l32.803,32.794V494.142z M230.688,382.451L256,368.831l25.304,13.619
			l-25.305,25.305L230.688,382.451z M403.037,494.141H264.929V424.08l32.794-32.795l22.976,12.365
			c1.325,0.713,2.78,1.066,4.229,1.066c1.839,0,3.671-0.568,5.222-1.685c2.772-1.998,4.161-5.402,3.578-8.769l-11.808-68.177
			c3.916-1.689,7.708-3.641,11.35-5.842c41.266,12.436,69.768,50.554,69.768,94.004V494.141z"/>
                                                        </g>
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path d="M362.291,425.791h-45.24c-4.933,0-8.929,3.998-8.929,8.929s3.997,8.929,8.929,8.929h45.24
			c4.933,0,8.929-3.998,8.929-8.929S367.223,425.791,362.291,425.791z"/>
                                                        </g>
                                                    </g>
                                                </svg>

                                                <h3 class="mb-5 text-base sm:text-base lg:text-base font-serif text-gray-500 dark:text-gray-400">
                                                    Permintaan Bantuan Leader Oleh :
                                                </h3>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Nama Operator :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={OptionData?.Nama || ""}

                                                        />
                                                    </div>
                                                    <div class="w-full  px-3">
                                                        <label class="block  tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Request at :
                                                        </label>
                                                        <input
                                                            type="text"
                                                            class="appearance-none block w-full text-center  font-semibold bg-gray-100 text-slate-900 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                            name="NamaPIC"
                                                            readOnly
                                                            value={formatDateAPI(OptionData?.Date) || ""}
                                                        />
                                                    </div>
                                                    <div class="w-full px-3">
                                                        <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                            Down Time:
                                                        </label>
                                                        {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                            <input
                                                                type="text"
                                                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                name="NamaPIC"
                                                                readOnly
                                                                value={
                                                                    Button === "DestackerTop" ? TimeDestackerTop :
                                                                        Button === "LabelTop" ? TimeLabelTop :
                                                                            Button === "PrinterTop" ? TimePrinterTop :
                                                                                Button === "SPITop" ? TimeSPITop :
                                                                                    Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                        Button === "ReflowTop" ? TimeReflowTop :
                                                                                            Button === "AOITop" ? TimeAOITop :
                                                                                                Button === "RVSTop" ? TimeRVSTop :
                                                                                                    Button === "PrinterBot" ? TimePrinterBot :
                                                                                                        Button === "SPIBot" ? TimeSPIBot :
                                                                                                            Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                    Button === "AOIBot" ? TimeAOIBot :
                                                                                                                        Button === "RVSBot" ? TimeRVSBot :
                                                                                                                            Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                    Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                        Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                            Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                    Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                        Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                            Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                ""
                                                                }
                                                            />
                                                        )}
                                                    </div>

                                                </div>

                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>

            {/* -------------- */}


            {/* In Validation */}
            <td>
                {isOpenInValidation ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <form>
                                            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                                <button
                                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                    onClick={() => {

                                                        setIsOpenInValidation(false);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                <div class="p-6 text-center">
                                                    <svg
                                                        class="mx-auto mb-4 animate-pulse w-32 h-14 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12 1V5" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M19.4246 18.9246L16.5961 16.0962" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M22.5 11.5L18.5 11.5" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M12 18V22" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M7.40381 6.90381L4.57538 4.07538" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M5.5 11.5L1.5 11.5" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                        <path d="M7.40381 16.0962L4.57538 18.9246" stroke="#A7C7E7" stroke-width="1.7" stroke-linecap="round" />
                                                    </svg>

                                                    <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-serif text-gray-500 dark:text-gray-400">
                                                        <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Sedang Dalam Proses Validation Oleh Team  {OptionData?.DepartTo || ""}
                                                    </h3>

                                                    <div className="flex flex-col mt-2">
                                                        <div class="w-full px-3">
                                                            <div className="w-full px-3">
                                                                <label className="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                    Down Time:
                                                                </label>
                                                                {(Button === "DestackerTop" || Button === "LabelTop" || Button === "PrinterTop" || Button === "SPITop" || Button === "PickNPlaceTop" || Button === "ReflowTop" || Button === "AOITop" || Button === "RVSTop" || Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "AOIBot" || Button === "RVSBot" || Button === "DropinBe" || Button === "FluxerBe" || Button === "PreheatBe" || Button === "Seho1Be" || Button === "Seho2Be" || Button === "TouchupBe" || Button === "ICTBe" || Button === "FlashBe" || Button === "RouterBe") && (
                                                                    <input
                                                                        type="text"
                                                                        className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                                                        name="NamaPIC"
                                                                        readOnly
                                                                        value={
                                                                            Button === "DestackerTop" ? TimeDestackerTop :
                                                                                Button === "LabelTop" ? TimeLabelTop :
                                                                                    Button === "PrinterTop" ? TimePrinterTop :
                                                                                        Button === "SPITop" ? TimeSPITop :
                                                                                            Button === "PickNPlaceTop" ? TimePickNPlaceTop :
                                                                                                Button === "ReflowTop" ? TimeReflowTop :
                                                                                                    Button === "AOITop" ? TimeAOITop :
                                                                                                        Button === "RVSTop" ? TimeRVSTop :
                                                                                                            Button === "PrinterBot" ? TimePrinterBot :
                                                                                                                Button === "SPIBot" ? TimeSPIBot :
                                                                                                                    Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                                                                                                        Button === "ReflowBot" ? TimeReflowBot :
                                                                                                                            Button === "AOIBot" ? TimeAOIBot :
                                                                                                                                Button === "RVSBot" ? TimeRVSBot :
                                                                                                                                    Button === "DropinBe" ? TimeDropinBe :
                                                                                                                                        Button === "FluxerBe" ? TimeFluxerBe :
                                                                                                                                            Button === "PreheatBe" ? TimePreheatBe :
                                                                                                                                                Button === "Seho1Be" ? TimeSeho1Be :
                                                                                                                                                    Button === "Seho2Be" ? TimeSeho2Be :
                                                                                                                                                        Button === "TouchupBe" ? TimeTouchupBe :
                                                                                                                                                            Button === "ICTBe" ? TimeICTBe :
                                                                                                                                                                Button === "FlashBe" ? TimeFlashBe :
                                                                                                                                                                    Button === "RouterBe" ? TimeRouterBe :
                                                                                                                                                                        ""
                                                                        }
                                                                    />
                                                                )}
                                                            </div>
                                                        </div>
                                                        <span className="font-mono mt-2 text-gray-500 ">PIC Validation :  {OptionData?.ValidationName || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Request at :  {formatDateAPI(OptionData?.Date) || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Start at :  {formatDateAPI(OptionData?.ResponseValidation) || ""} </span>
                                                    </div>
                                                    <div class="flex justify-center mt-4">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>


            {/*Pop up Validation  */}
            <td>
                {isOpenValidation ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-32 px-4 pb-20 text-center sm:block sm:p-0">
                                <div
                                    className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg  "
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="modal-headline"
                                >
                                    <div className="sm:flex sm:items-start">
                                        <form>
                                            <div class="relative bg-white 2xl:w-[500px] rounded-lg shadow dark:bg-gray-700">
                                                <button
                                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                    onClick={() => {

                                                        setIsOpenValidation(false);
                                                    }}
                                                >
                                                    <svg
                                                        className="w-6 h-6"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M6 18L18 6M6 6l12 12"
                                                        />
                                                    </svg>
                                                </button>
                                                <div class="p-6 text-center">
                                                    <svg fill="#27AE60" class="mx-auto mb-4 animate-bounce w-32 h-14 " viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><defs></defs><title /><path class="cls-1" d="M24.64,52.06a5.55,5.55,0,0,1-3.94-1.63L6.43,36.16a5.57,5.57,0,0,1,0-7.87,5.58,5.58,0,0,1,7.88,0L24.64,38.62l1.85-1.85a2,2,0,1,1,2.83,2.83l-3.26,3.26a2,2,0,0,1-2.83,0L11.48,31.11a1.57,1.57,0,0,0-2.22,2.22L23.53,47.6a1.59,1.59,0,0,0,2.22,0l29-29a1.57,1.57,0,0,0-2.22-2.21L36.63,32.29a2,2,0,0,1-2.83-2.83L49.69,13.57a5.57,5.57,0,0,1,7.88,7.87l-29,29A5.54,5.54,0,0,1,24.64,52.06Z" fill /></svg>
                                                    <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-serif text-gray-500 dark:text-gray-400">
                                                        <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong>  Validation Telah di lakukan
                                                    </h3>

                                                    <div className="flex flex-col mt-2">
                                                        <div class="w-full px-3">
                                                            <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                                                Last Down Time Total:
                                                            </label>

                                                            <input
                                                                type="text"
                                                                class="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                                name="NamaPIC"
                                                                readOnly
                                                                value={OptionData?.DownTime || ""}
                                                            />

                                                        </div>
                                                        <span className="font-mono mt-2 text-gray-500 ">Validation :  {OptionData?.ValidationName || ""} / {OptionData?.DepartTo || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Validation AT :  {formatDateAPI(OptionData?.ValidationDate) || ""} </span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Validation Desc :  {OptionData?.ValidationDescription || ""} </span>
                                                        <br />
                                                        <span className="font-mono mt-2 text-gray-500 ">Repair PIC:  {OptionData?.Requestor || ""}</span>
                                                        <span className="font-mono mt-2 text-gray-500 ">Problem Desc :  {OptionData?.Problem || ""} </span>

                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
                    </>
                ) : null}
            </td>

            {/* -------- */}





        </body>
    );
};

export default SMTLINE1CONTROLLER;
