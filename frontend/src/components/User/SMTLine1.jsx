import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";

const firebaseConfig = {
    apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
    databaseURL:
        "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
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

    // SMT TOP LINE 1
    const [StatusLine, setStatusLine] = useState("");
    const [Line, setLine] = useState("SMT LINE 1");
    // //////

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

    // Production

    // Audio

    const audio = new Audio("Sound.mp3");
    // ..................................

    // refresh

    useEffect(() => {
        const onBeforeUnload = (ev) => {
            ev.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", onBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", onBeforeUnload);
        };
    }, []);

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

    // DownTime Result Time Function

    // Line1 SMT TOP



    // ...............................................

    // Background
    const styles = {
        backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`,
        backgroundSize: "1900px",
        backgroundPosition: "0px",
        height: "1080px", // Ubah tinggi (height) sesuai kebutuhan Anda
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
                <div className=" pt-3  justify-center items-center mx-auto text-center">
                    <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
                        SMT LINE 1
                    </span>
                </div>
                <div>


                </div>

                <div className="">
                    <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
                        SMT TOP
                    </span>
                </div>

                <div>
                    <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
                        <section class="antialiased  text-gray-600  px-2" x-data="app">
                            <div class="flex flex-col ">
                                {/* <!-- Table --> */}
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96 ">
                                    <button
                                        style={{
                                            backgroundColor: backgroundColorStatusDestackerTop,
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusLabelTop }}

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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusPrinterTop }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusSPITop }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{
                                            backgroundColor: backgroundColorStatusPickNPlaceTop,
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusReflowTop }}
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
                    </div>
                </div>

                <div>
                    <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">


                        <section class="antialiased  text-gray-600  px-2" x-data="app">
                            <div class="flex flex-col ">
                                {/* <!-- Table --> */}
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusAOITop }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusRVSTop }}
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

                <div className=" pt-3">
                    <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
                        SMT BOT
                    </span>
                </div>

                <div>
                    <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
                        <section class="antialiased  text-gray-600  px-2" x-data="app">
                            <div class="flex flex-col ">
                                {/* <!-- Table --> */}
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusPrinterBot }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusSPIBot }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusPickNPlaceBot }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusReflowBot }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusAOIBot }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusRVSBot }}
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



                <div className=" pt-3">
                    <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
                        SMT BE
                    </span>
                </div>

                <div>
                    <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
                        <section class="antialiased  text-gray-600  px-2" x-data="app">
                            <div class="flex flex-col ">
                                {/* <!-- Table --> */}
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusDropinBe }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusFluxerBe }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusPreheatBe }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusSeho1Be }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusSeho2Be }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusTouchupBe }}
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
                    </div>
                </div>

                <div>
                    <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
                        <section class="antialiased  text-gray-600  px-2" x-data="app">
                            <div class="flex flex-col ">
                                {/* <!-- Table --> */}
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusICTBe }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusFlashBe }}
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
                                <div className="w-72 pt-2 sm:w-48 lg:w-40 xl:w-96 2xl:w-96">
                                    <button
                                        style={{ backgroundColor: backgroundColorStatusRouterBe }}
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
            </main>
        </body>
    );
};

export default SMTLINE1CONTROLLER;
