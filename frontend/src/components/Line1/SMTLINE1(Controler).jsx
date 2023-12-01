import React, { useState, useEffect, useRef } from "react";
import { db } from "./../../Firebase.js";
import Select from "react-select";
import Navbar from "../ComponentsStyle/Navbar.jsx";
import HeaderStatus from "../ComponentsStyle/HeaderStatus.jsx";


const audio = new Audio("Sound.mp3");

const SMTLINE1CONTROLLER = () => {
  // NAVBAR
  const [time, setTime] = useState(new Date().toLocaleString());
  // -----

  // FIREBASE
  const [showDrawer, setShowDrawer] = useState(false);

  // SUBMIT FILE
  const [file, setFile] = useState(null);
  // -------

  // SMT TOP LINE 1
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

  // LINE 2 SMT 
  // Destacker 
  const [Destacker, setDestacker] = useState("Destacker");
  const [StatusDestacker, setStatusDestacker] = useState("");
  const [
    backgroundColorStatusDestacker,
    setBackgroundColorStatusDestacker,
  ] = useState("");
  const [startTimeDestacker, setStartTimeDestacker] = useState(null);
  const [isRunningDestacker, setIsRunningDestacker] = useState(false);
  const [TimeDestacker, setTimeDestacker] = useState(null);
  // ---------------------------

  // Label 
  const [StatusLabel, setStatusLabel] = useState("");
  const [Label, setLabel] = useState("Label");
  const [backgroundColorStatusLabel, setBackgroundColorStatusLabel] =
    useState("");
  const [startTimeLabel, setStartTimeLabel] = useState(null);
  const [isRunningLabel, setIsRunningLabel] = useState(false);
  const [TimeLabel, setTimeLabel] = useState(null);
  // ---------------------------

  // Printer 
  const [StatusPrinter, setStatusPrinter] = useState("");
  const [Printer, setPrinter] = useState("Printer");
  const [backgroundColorStatusPrinter, setBackgroundColorStatusPrinter] =
    useState("");
  const [startTimePrinter, setStartTimePrinter] = useState(null);
  const [isRunningPrinter, setIsRunningPrinter] = useState(false);
  const [TimePrinter, setTimePrinter] = useState(null);
  // ---------------------------

  // Spi 
  const [StatusSPI, setStatusSPI] = useState("");
  const [SPI, setSPI] = useState("SPI");
  const [backgroundColorStatusSPI, setBackgroundColorStatusSPI] =
    useState("");
  const [startTimeSPI, setStartTimeSPI] = useState(null);
  const [isRunningSPI, setIsRunningSPI] = useState(false);
  const [TimeSPI, setTimeSPI] = useState(null);
  // ---------------------------

  // PickNPlace 
  const [StatusPickNPlace, setStatusPickNPlace] = useState("");
  const [PickNPlace, setPickNPlace] = useState("Pick&Place");
  const [
    backgroundColorStatusPickNPlace,
    setBackgroundColorStatusPickNPlace,
  ] = useState("");
  const [startTimePickNPlace, setStartTimePickNPlace] = useState(null);
  const [isRunningPickNPlace, setIsRunningPickNPlace] = useState(false);
  const [TimePickNPlace, setTimePickNPlace] = useState(null);
  // ---------------------------

  // Reflow 

  const [StatusReflow, setStatusReflow] = useState("");
  const [Reflow, setReflow] = useState("Reflow");
  const [backgroundColorStatusReflow, setBackgroundColorStatusReflow] =
    useState("");
  const [startTimeReflow, setStartTimeReflow] = useState(null);
  const [isRunningReflow, setIsRunningReflow] = useState(false);
  const [TimeReflow, setTimeReflow] = useState(null);
  // ---------------------------

  // AOI 
  const [StatusAOI, setStatusAOI] = useState("");
  const [AOI, setAOI] = useState("AOI");
  const [backgroundColorStatusAOI, setBackgroundColorStatusAOI] =
    useState("");
  const [startTimeAOI, setStartTimeAOI] = useState(null);
  const [isRunningAOI, setIsRunningAOI] = useState(false);
  const [TimeAOI, setTimeAOI] = useState(null);
  // ---------------------------

  // RVS 
  const [StatusRVS, setStatusRVS] = useState("");
  const [RVS, setRVS] = useState("RVS");
  const [backgroundColorStatusRVS, setBackgroundColorStatusRVS] =
    useState("");
  const [startTimeRVS, setStartTimeRVS] = useState(null);
  const [isRunningRVS, setIsRunningRVS] = useState(false);
  const [TimeRVS, setTimeRVS] = useState(null);
  // ---------------------------

  // Dropin 
  const [Dropin, setDropin] = useState("Drop in");
  const [StatusDropin, setStatusDropin] = useState("");
  const [
    backgroundColorStatusDropin,
    setBackgroundColorStatusDropin,
  ] = useState("");
  const [startTimeDropin, setStartTimeDropin] = useState(null);
  const [isRunningDropin, setIsRunningDropin] = useState(false);
  const [TimeDropin, setTimeDropin] = useState(null);
  // ---------------------------

  // Fluxer 
  const [StatusFluxer, setStatusFluxer] = useState("");
  const [Fluxer, setFluxer] = useState("Fluxer");
  const [backgroundColorStatusFluxer, setBackgroundColorStatusFluxer] =
    useState("");
  const [startTimeFluxer, setStartTimeFluxer] = useState(null);
  const [isRunningFluxer, setIsRunningFluxer] = useState(false);
  const [TimeFluxer, setTimeFluxer] = useState(null);
  // ---------------------------

  // Preheat 
  const [StatusPreheat, setStatusPreheat] = useState("");
  const [Preheat, setPreheat] = useState("PreHeat");
  const [backgroundColorStatusPreheat, setBackgroundColorStatusPreheat] =
    useState("");
  const [startTimePreheat, setStartTimePreheat] = useState(null);
  const [isRunningPreheat, setIsRunningPreheat] = useState(false);
  const [TimePreheat, setTimePreheat] = useState(null);
  // ---------------------------

  // Selective 
  const [StatusSelective, setStatusSelective] = useState("");
  const [Selective, setSelective] = useState("Selective");
  const [backgroundColorStatusSelective, setBackgroundColorStatusSelective] =
    useState("");
  const [startTimeSelective, setStartTimeSelective] = useState(null);
  const [isRunningSelective, setIsRunningSelective] = useState(false);
  const [TimeSelective, setTimeSelective] = useState(null);
  // ---------------------------

  // Touchup 

  const [StatusTouchup, setStatusTouchup] = useState("");
  const [Touchup, setTouchup] = useState("Touch UP");
  const [backgroundColorStatusTouchup, setBackgroundColorStatusTouchup] =
    useState("");
  const [startTimeTouchup, setStartTimeTouchup] = useState(null);
  const [isRunningTouchup, setIsRunningTouchup] = useState(false);
  const [TimeTouchup, setTimeTouchup] = useState(null);
  // ---------------------------

  // ICT 
  const [StatusICT, setStatusICT] = useState("");
  const [ICT, setICT] = useState("ICT");
  const [backgroundColorStatusICT, setBackgroundColorStatusICT] =
    useState("");
  const [startTimeICT, setStartTimeICT] = useState(null);
  const [isRunningICT, setIsRunningICT] = useState(false);
  const [TimeICT, setTimeICT] = useState(null);
  // ---------------------------

  // Flash 
  const [StatusFlash, setStatusFlash] = useState("");
  const [Flash, setFlash] = useState("Flash");
  const [backgroundColorStatusFlash, setBackgroundColorStatusFlash] =
    useState("");
  const [startTimeFlash, setStartTimeFlash] = useState(null);
  const [isRunningFlash, setIsRunningFlash] = useState(false);
  const [TimeFlash, setTimeFlash] = useState(null);


  // Router 
  const [StatusRouter, setStatusRouter] = useState("");
  const [Router, setRouter] = useState("Router");
  const [backgroundColorStatusRouter, setBackgroundColorStatusRouter] =
    useState("");
  const [startTimeRouter, setStartTimeRouter] = useState(null);
  const [isRunningRouter, setIsRunningRouter] = useState(false);
  const [TimeRouter, setTimeRouter] = useState(null);

  // ..................................

  // Fungsi Pencegahan Refresh
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

    const ref8 = db.ref("SMTLine1TOP/Destacker (TOP)");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusDestackerTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref9 = db.ref("SMTLine1TOP/Label (TOP)");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusLabelTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref18 = db.ref("/SMTLine1TOP/Printer (TOP)");
    ref18.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref19 = db.ref("/SMTLine1TOP/SPI (TOP)");
    ref19.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPITop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref20 = db.ref("/SMTLine1TOP/Pick&Place (TOP)");
    ref20.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlaceTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref21 = db.ref("/SMTLine1TOP/Reflow (TOP)");
    ref21.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref22 = db.ref("/SMTLine1TOP/AOI (TOP)");
    ref22.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOITop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref23 = db.ref("/SMTLine1TOP/RVS (TOP)");
    ref23.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSTop(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    // SMT BOT
    const ref24 = db.ref("SMTLine1BOT/Printer (BOT)");
    ref24.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref25 = db.ref("SMTLine1BOT/SPI (BOT)");
    ref25.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPIBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref26 = db.ref("SMTLine1BOT/Pick&Place (BOT)");
    ref26.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlaceBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref27 = db.ref("SMTLine1BOT/Reflow (BOT)");
    ref27.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref28 = db.ref("SMTLine1BOT/AOI (BOT)");
    ref28.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOIBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref29 = db.ref("SMTLine1BOT/RVS (BOT)");
    ref29.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSBot(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    // SMT BE
    const ref30 = db.ref("SMTLine1BE/Drop in (BE)");
    ref30.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusDropinBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    const ref31 = db.ref("SMTLine1BE/Fluxer (BE)");
    ref31.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFluxerBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref32 = db.ref("SMTLine1BE/PreHeat (BE)");
    ref32.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPreheatBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref33 = db.ref("SMTLine1BE/Seho1 (BE)");
    ref33.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSeho1Be(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    const ref34 = db.ref("SMTLine1BE/Seho2 (BE)");
    ref34.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSeho2Be(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref35 = db.ref("SMTLine1BE/Touch UP (BE)");
    ref35.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusTouchupBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref36 = db.ref("SMTLine1BE/ICT (BE)");
    ref36.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusICTBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    const ref37 = db.ref("SMTLine1BE/Flash (BE)");
    ref37.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFlashBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref38 = db.ref("SMTLine1BE/Router (BE)");
    ref38.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRouterBe(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });



    // SMT LINE 2
    const ref39 = db.ref("SMTLine2/Destacker");
    ref39.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusDestacker(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref40 = db.ref("SMTLine2/Label");
    ref40.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusLabel(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref41 = db.ref("/SMTLine2/Printer");
    ref41.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinter(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref42 = db.ref("/SMTLine2/SPI");
    ref42.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPI(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref43 = db.ref("/SMTLine2/Pick&Place");
    ref43.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlace(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref44 = db.ref("/SMTLine2/Reflow");
    ref44.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflow(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref45 = db.ref("/SMTLine2/AOI");
    ref45.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOI(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref46 = db.ref("/SMTLine2/RVS");
    ref46.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVS(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref47 = db.ref("SMTLine2/Drop in");
    ref47.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusDropin(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    const ref48 = db.ref("SMTLine2/Fluxer");
    ref48.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFluxer(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref49 = db.ref("SMTLine2/PreHeat");
    ref49.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPreheat(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref50 = db.ref("SMTLine2/Selective");
    ref50.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSelective(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref52 = db.ref("SMTLine2/Touch UP");
    ref52.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusTouchup(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref53 = db.ref("SMTLine2/ICT");
    ref53.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusICT(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });


    const ref54 = db.ref("SMTLine2/Flash");
    ref54.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFlash(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    const ref55 = db.ref("SMTLine2/Router");
    ref55.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRouter(data);
      if (data === "Leader" || data === "MAINTENANCE & IT" || data === "Return MAINTENANCE & IT") {
        audio.play();
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING" ||
        data === "QC" ||
        data === "QA" ||
        data === "Production"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
      } else if (data === "Go" || data === "Repair" || data === "In Validation") {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    return () => {
      // Clean up the audio element
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);
  // ------------------------


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

  // FUNGSI UPDATE STATUS
  // fungsi mengubah warna status
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

  // FUNGSI UPDATE STATUS
  // fungsi mengubah warna status
  // LINE 1 SMT BE
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


  // FUNGSI UPDATE STATUS
  // fungsi mengubah warna status
  // LINE 2 SMT 
  const updateStatusDestacker = (data) => {
    setStatusDestacker(data);
    setBackgroundColorStatusDestacker(
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

  const updateStatusLabel = (data) => {
    setStatusLabel(data);
    setBackgroundColorStatusLabel(
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

  const updateStatusPrinter = (data) => {
    setStatusPrinter(data);
    setBackgroundColorStatusPrinter(
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

  const updateStatusSPI = (data) => {
    setStatusSPI(data);
    setBackgroundColorStatusSPI(
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

  const updateStatusPickNPlace = (data) => {
    setStatusPickNPlace(data);
    setBackgroundColorStatusPickNPlace(
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

  const updateStatusReflow = (data) => {
    setStatusReflow(data);
    setBackgroundColorStatusReflow(
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

  const updateStatusAOI = (data) => {
    setStatusAOI(data);
    setBackgroundColorStatusAOI(
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

  const updateStatusRVS = (data) => {
    setStatusRVS(data);
    setBackgroundColorStatusRVS(
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

  const updateStatusDropin = (data) => {
    setStatusDropin(data);
    setBackgroundColorStatusDropin(
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

  const updateStatusFluxer = (data) => {
    setStatusFluxer(data);
    setBackgroundColorStatusFluxer(
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

  const updateStatusPreheat = (data) => {
    setStatusPreheat(data);
    setBackgroundColorStatusPreheat(
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

  const updateStatusSelective = (data) => {
    setStatusSelective(data);
    setBackgroundColorStatusSelective(
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



  const updateStatusTouchup = (data) => {
    setStatusTouchup(data);
    setBackgroundColorStatusTouchup(
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

  const updateStatusICT = (data) => {
    setStatusICT(data);
    setBackgroundColorStatusICT(
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

  const updateStatusFlash = (data) => {
    setStatusFlash(data);
    setBackgroundColorStatusFlash(
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

  const updateStatusRouter = (data) => {
    setStatusRouter(data);
    setBackgroundColorStatusRouter(
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





  // ---------------------------------------------------

  // Realtime Function + Downtime Function
  // Line1 SMT TOP
  // Destacker Top
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusDestackerTop)) {
      setIsRunningDestackerTop(true);

      if (StatusDestackerTop === "Leader") {
        setStartTimeDestackerTop(Date.now());
      } else if (
        StatusDestackerTop === "MAINTENANCE & IT" &&
        startTimeDestackerTop === null
      ) {
        setStartTimeDestackerTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeDestackerTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeDestackerTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1TOP/DestackerTopTime")
            .set(timeString);

          setTimeDestackerTop(timeString);
        }
      }, 1000);
    } else if (StatusDestackerTop === "Go") {
      setIsRunningDestackerTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeDestackerTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusDestackerTop, startTimeDestackerTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusDestackerTop === "Go") &&
      TimeDestackerTop !== null &&
      TimeDestackerTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeDestackerTOP";


      const data = {
        TimeDestackerTop: TimeDestackerTop,
        DestackerTop: DestackerTop,
        StatusDestackerTop: StatusDestackerTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeDestackerTop);
          console.log(DestackerTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeDestackerTop, DestackerTop, StatusDestackerTop]);


  // LabelTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusLabelTop)) {
      setIsRunningLabelTop(true);

      if (StatusLabelTop === "Leader") {
        setStartTimeLabelTop(Date.now());
      } else if (
        StatusLabelTop === "MAINTENANCE & IT" &&
        startTimeLabelTop === null
      ) {
        setStartTimeLabelTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeLabelTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeLabelTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1TOP/LabelTopTime").set(timeString);

          setTimeLabelTop(timeString);
        }
      }, 1000);
    } else if (StatusLabelTop === "Go") {
      setIsRunningLabelTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeLabelTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusLabelTop, startTimeLabelTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusLabelTop === "Go") &&
      TimeLabelTop !== null &&
      TimeLabelTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeLabelTOP";


      const data = {
        TimeLabelTop: TimeLabelTop,
        LabelTop: LabelTop,
        StatusLabelTop: StatusLabelTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeLabelTop);
          console.log(LabelTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeLabelTop, LabelTop, StatusLabelTop]);


  // PrinterTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPrinterTop)) {
      setIsRunningPrinterTop(true);

      if (StatusPrinterTop === "Leader") {
        setStartTimePrinterTop(Date.now());
      } else if (
        StatusPrinterTop === "MAINTENANCE & IT" &&
        startTimePrinterTop === null
      ) {
        setStartTimePrinterTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePrinterTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePrinterTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1TOP/PrinterTopTime")
            .set(timeString);

          setTimePrinterTop(timeString);
        }
      }, 1000);
    } else if (StatusPrinterTop === "Go") {
      setIsRunningPrinterTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePrinterTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPrinterTop, startTimePrinterTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPrinterTop === "Go") &&
      TimePrinterTop !== null &&
      TimePrinterTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePrinterTOP";


      const data = {
        TimePrinterTop: TimePrinterTop,
        PrinterTop: PrinterTop,
        StatusPrinterTop: StatusPrinterTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePrinterTop);
          console.log(PrinterTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePrinterTop, PrinterTop, StatusPrinterTop]);


  // SpiTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSPITop)) {
      setIsRunningSPITop(true);

      if (StatusSPITop === "Leader") {
        setStartTimeSPITop(Date.now());
      } else if (
        StatusSPITop === "MAINTENANCE & IT" &&
        startTimeSPITop === null
      ) {
        setStartTimeSPITop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSPITop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSPITop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1TOP/SPITopTime").set(timeString);

          setTimeSPITop(timeString);
        }
      }, 1000);
    } else if (StatusSPITop === "Go") {
      setIsRunningSPITop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSPITop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSPITop, startTimeSPITop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSPITop === "Go") &&
      TimeSPITop !== null &&
      TimeSPITop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSPITOP";


      const data = {
        TimeSPITop: TimeSPITop,
        SPITop: SPITop,
        StatusSPITop: StatusSPITop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSPITop);
          console.log(SPITop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSPITop, SPITop, StatusSPITop]);


  // PickNPlaceTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPickNPlaceTop)) {
      setIsRunningPickNPlaceTop(true);

      if (StatusPickNPlaceTop === "Leader") {
        setStartTimePickNPlaceTop(Date.now());
      } else if (
        StatusPickNPlaceTop === "MAINTENANCE & IT" &&
        startTimePickNPlaceTop === null
      ) {
        setStartTimePickNPlaceTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePickNPlaceTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePickNPlaceTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1TOP/PickNPlaceTopTime")
            .set(timeString);

          setTimePickNPlaceTop(timeString);
        }
      }, 1000);
    } else if (StatusPickNPlaceTop === "Go") {
      setIsRunningPickNPlaceTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePickNPlaceTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPickNPlaceTop, startTimePickNPlaceTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPickNPlaceTop === "Go") &&
      TimePickNPlaceTop !== null &&
      TimePickNPlaceTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePickNPlaceTOP";


      const data = {
        TimePickNPlaceTop: TimePickNPlaceTop,
        PickNPlaceTop: PickNPlaceTop,
        StatusPickNPlaceTop: StatusPickNPlaceTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePickNPlaceTop);
          console.log(PickNPlaceTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePickNPlaceTop, PickNPlaceTop, StatusPickNPlaceTop]);


  // ReflowTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusReflowTop)) {
      setIsRunningReflowTop(true);

      if (StatusReflowTop === "Leader") {
        setStartTimeReflowTop(Date.now());
      } else if (
        StatusReflowTop === "MAINTENANCE & IT" &&
        startTimeReflowTop === null
      ) {
        setStartTimeReflowTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeReflowTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeReflowTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1TOP/ReflowTopTime").set(timeString);

          setTimeReflowTop(timeString);
        }
      }, 1000);
    } else if (StatusReflowTop === "Go") {
      setIsRunningReflowTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeReflowTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusReflowTop, startTimeReflowTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusReflowTop === "Go") &&
      TimeReflowTop !== null &&
      TimeReflowTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeReflowTOP";


      const data = {
        TimeReflowTop: TimeReflowTop,
        ReflowTop: ReflowTop,
        StatusReflowTop: StatusReflowTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeReflowTop);
          console.log(ReflowTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeReflowTop, ReflowTop, StatusReflowTop]);

  // AOITOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusAOITop)) {
      setIsRunningAOITop(true);

      if (StatusAOITop === "Leader") {
        setStartTimeAOITop(Date.now());
      } else if (
        StatusAOITop === "MAINTENANCE & IT" &&
        startTimeAOITop === null
      ) {
        setStartTimeAOITop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeAOITop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeAOITop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1TOP/AOITopTime").set(timeString);

          setTimeAOITop(timeString);
        }
      }, 1000);
    } else if (StatusAOITop === "Go") {
      setIsRunningAOITop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeAOITop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusAOITop, startTimeAOITop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusAOITop === "Go") &&
      TimeAOITop !== null &&
      TimeAOITop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeAOITOP";


      const data = {
        TimeAOITop: TimeAOITop,
        AOITop: AOITop,
        StatusAOITop: StatusAOITop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeAOITop);
          console.log(AOITop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeAOITop, AOITop, StatusAOITop]);


  // RVSTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusRVSTop)) {
      setIsRunningRVSTop(true);

      if (StatusRVSTop === "Leader") {
        setStartTimeRVSTop(Date.now());
      } else if (
        StatusRVSTop === "MAINTENANCE & IT" &&
        startTimeRVSTop === null
      ) {
        setStartTimeRVSTop(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeRVSTop) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeRVSTop;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1TOP/RVSTopTime").set(timeString);

          setTimeRVSTop(timeString);
        }
      }, 1000);
    } else if (StatusRVSTop === "Go") {
      setIsRunningRVSTop(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeRVSTop(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusRVSTop, startTimeRVSTop]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusRVSTop === "Go") &&
      TimeRVSTop !== null &&
      TimeRVSTop !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeRVSTOP";


      const data = {
        TimeRVSTop: TimeRVSTop,
        RVSTop: RVSTop,
        StatusRVSTop: StatusRVSTop,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRVSTop);
          console.log(RVSTop);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeRVSTop, RVSTop, StatusRVSTop]);







  // Realtime Function + Downtime Function
  // Line1 SMT BOT
  // PrinterBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPrinterBot)) {
      setIsRunningPrinterBot(true);

      if (StatusPrinterBot === "Leader") {
        setStartTimePrinterBot(Date.now());
      } else if (
        StatusPrinterBot === "MAINTENANCE & IT" &&
        startTimePrinterBot === null
      ) {
        setStartTimePrinterBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePrinterBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePrinterBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BOT/PrinterBotTime")
            .set(timeString);

          setTimePrinterBot(timeString);
        }
      }, 1000);
    } else if (StatusPrinterBot === "Go") {
      setIsRunningPrinterBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePrinterBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPrinterBot, startTimePrinterBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPrinterBot === "Go") &&
      TimePrinterBot !== null &&
      TimePrinterBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePrinterBOT";


      const data = {
        TimePrinterBot: TimePrinterBot,
        PrinterBot: PrinterBot,
        StatusPrinterBot: StatusPrinterBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePrinterBot);
          console.log(PrinterBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePrinterBot, PrinterBot, StatusPrinterBot]);

  // SPIBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSPIBot)) {
      setIsRunningSPIBot(true);

      if (StatusSPIBot === "Leader") {
        setStartTimeSPIBot(Date.now());
      } else if (
        StatusSPIBot === "MAINTENANCE & IT" &&
        startTimeSPIBot === null
      ) {
        setStartTimeSPIBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSPIBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSPIBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1BOT/SPIBotTime").set(timeString);

          setTimeSPIBot(timeString);
        }
      }, 1000);
    } else if (StatusSPIBot === "Go") {
      setIsRunningSPIBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSPIBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSPIBot, startTimeSPIBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSPIBot === "Go") &&
      TimeSPIBot !== null &&
      TimeSPIBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSPIBOT";


      const data = {
        TimeSPIBot: TimeSPIBot,
        SPIBot: SPIBot,
        StatusSPIBot: StatusSPIBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSPIBot);
          console.log(SPIBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSPIBot, SPIBot, StatusSPIBot]);

  // PickNPlaceBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPickNPlaceBot)) {
      setIsRunningPickNPlaceBot(true);

      if (StatusPickNPlaceBot === "Leader") {
        setStartTimePickNPlaceBot(Date.now());
      } else if (
        StatusPickNPlaceBot === "MAINTENANCE & IT" &&
        startTimePickNPlaceBot === null
      ) {
        setStartTimePickNPlaceBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePickNPlaceBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePickNPlaceBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BOT/PickNPlaceBotTime")
            .set(timeString);

          setTimePickNPlaceBot(timeString);
        }
      }, 1000);
    } else if (StatusPickNPlaceBot === "Go") {
      setIsRunningPickNPlaceBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePickNPlaceBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPickNPlaceBot, startTimePickNPlaceBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPickNPlaceBot === "Go") &&
      TimePickNPlaceBot !== null &&
      TimePickNPlaceBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePickNPlaceBOT";


      const data = {
        TimePickNPlaceBot: TimePickNPlaceBot,
        PickNPlaceBot: PickNPlaceBot,
        StatusPickNPlaceBot: StatusPickNPlaceBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePickNPlaceBot);
          console.log(PickNPlaceBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePickNPlaceBot, PickNPlaceBot, StatusPickNPlaceBot]);

  // ReflowBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusReflowBot)) {
      setIsRunningReflowBot(true);

      if (StatusReflowBot === "Leader") {
        setStartTimeReflowBot(Date.now());
      } else if (
        StatusReflowBot === "MAINTENANCE & IT" &&
        startTimeReflowBot === null
      ) {
        setStartTimeReflowBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeReflowBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeReflowBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1BOT/ReflowBotTime").set(timeString);

          setTimeReflowBot(timeString);
        }
      }, 1000);
    } else if (StatusReflowBot === "Go") {
      setIsRunningReflowBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeReflowBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusReflowBot, startTimeReflowBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusReflowBot === "Go") &&
      TimeReflowBot !== null &&
      TimeReflowBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeReflowBOT";


      const data = {
        TimeReflowBot: TimeReflowBot,
        ReflowBot: ReflowBot,
        StatusReflowBot: StatusReflowBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeReflowBot);
          console.log(ReflowBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeReflowBot, ReflowBot, StatusReflowBot]);


  // AOIBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusAOIBot)) {
      setIsRunningAOIBot(true);

      if (StatusAOIBot === "Leader") {
        setStartTimeAOIBot(Date.now());
      } else if (
        StatusAOIBot === "MAINTENANCE & IT" &&
        startTimeAOIBot === null
      ) {
        setStartTimeAOIBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeAOIBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeAOIBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1BOT/AOIBotTime").set(timeString);

          setTimeAOIBot(timeString);
        }
      }, 1000);
    } else if (StatusAOIBot === "Go") {
      setIsRunningAOIBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeAOIBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusAOIBot, startTimeAOIBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusAOIBot === "Go") &&
      TimeAOIBot !== null &&
      TimeAOIBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeAOIBOT";


      const data = {
        TimeAOIBot: TimeAOIBot,
        AOIBot: AOIBot,
        StatusAOIBot: StatusAOIBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeAOIBot);
          console.log(AOIBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeAOIBot, AOIBot, StatusAOIBot]);

  // RVSBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusRVSBot)) {
      setIsRunningRVSBot(true);

      if (StatusRVSBot === "Leader") {
        setStartTimeRVSBot(Date.now());
      } else if (
        StatusRVSBot === "MAINTENANCE & IT" &&
        startTimeRVSBot === null
      ) {
        setStartTimeRVSBot(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeRVSBot) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeRVSBot;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine1BOT/RVSBotTime").set(timeString);

          setTimeRVSBot(timeString);
        }
      }, 1000);
    } else if (StatusRVSBot === "Go") {
      setIsRunningRVSBot(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeRVSBot(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusRVSBot, startTimeRVSBot]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusRVSBot === "Go") &&
      TimeRVSBot !== null &&
      TimeRVSBot !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeRVSBOT";


      const data = {
        TimeRVSBot: TimeRVSBot,
        RVSBot: RVSBot,
        StatusRVSBot: StatusRVSBot,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRVSBot);
          console.log(RVSBot);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeRVSBot, RVSBot, StatusRVSBot]);


  // Realtime Function + Downtime Function
  // Line1 SMT BE
  // DropinBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusDropinBe)) {
      setIsRunningDropinBe(true);

      if (StatusDropinBe === "Leader") {
        setStartTimeDropinBe(Date.now());
      } else if (
        StatusDropinBe === "MAINTENANCE & IT" &&
        startTimeDropinBe === null
      ) {
        setStartTimeDropinBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeDropinBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeDropinBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/DropinBeTime")
            .set(timeString);

          setTimeDropinBe(timeString);
        }
      }, 1000);
    } else if (StatusDropinBe === "Go") {
      setIsRunningDropinBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeDropinBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusDropinBe, startTimeDropinBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusDropinBe === "Go") &&
      TimeDropinBe !== null &&
      TimeDropinBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeDropinBE";


      const data = {
        TimeDropinBe: TimeDropinBe,
        DropinBe: DropinBe,
        StatusDropinBe: StatusDropinBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeDropinBe);
          console.log(DropinBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeDropinBe, DropinBe, StatusDropinBe]);


  // FluxerBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusFluxerBe)) {
      setIsRunningFluxerBe(true);

      if (StatusFluxerBe === "Leader") {
        setStartTimeFluxerBe(Date.now());
      } else if (
        StatusFluxerBe === "MAINTENANCE & IT" &&
        startTimeFluxerBe === null
      ) {
        setStartTimeFluxerBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeFluxerBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeFluxerBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/FluxerBeTime")
            .set(timeString);

          setTimeFluxerBe(timeString);
        }
      }, 1000);
    } else if (StatusFluxerBe === "Go") {
      setIsRunningFluxerBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeFluxerBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusFluxerBe, startTimeFluxerBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusFluxerBe === "Go") &&
      TimeFluxerBe !== null &&
      TimeFluxerBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeFluxerBE";


      const data = {
        TimeFluxerBe: TimeFluxerBe,
        FluxerBe: FluxerBe,
        StatusFluxerBe: StatusFluxerBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeFluxerBe);
          console.log(FluxerBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeFluxerBe, FluxerBe, StatusFluxerBe]);

  // PreheatBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPreheatBe)) {
      setIsRunningPreheatBe(true);

      if (StatusPreheatBe === "Leader") {
        setStartTimePreheatBe(Date.now());
      } else if (
        StatusPreheatBe === "MAINTENANCE & IT" &&
        startTimePreheatBe === null
      ) {
        setStartTimePreheatBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePreheatBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePreheatBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/PreheatBeTime")
            .set(timeString);

          setTimePreheatBe(timeString);
        }
      }, 1000);
    } else if (StatusPreheatBe === "Go") {
      setIsRunningPreheatBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePreheatBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPreheatBe, startTimePreheatBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPreheatBe === "Go") &&
      TimePreheatBe !== null &&
      TimePreheatBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePreheatBE";


      const data = {
        TimePreheatBe: TimePreheatBe,
        PreheatBe: PreheatBe,
        StatusPreheatBe: StatusPreheatBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePreheatBe);
          console.log(PreheatBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePreheatBe, PreheatBe, StatusPreheatBe]);

  // Seho1Be
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSeho1Be)) {
      setIsRunningSeho1Be(true);

      if (StatusSeho1Be === "Leader") {
        setStartTimeSeho1Be(Date.now());
      } else if (
        StatusSeho1Be === "MAINTENANCE & IT" &&
        startTimeSeho1Be === null
      ) {
        setStartTimeSeho1Be(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSeho1Be) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSeho1Be;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/Seho1BeTime")
            .set(timeString);

          setTimeSeho1Be(timeString);
        }
      }, 1000);
    } else if (StatusSeho1Be === "Go") {
      setIsRunningSeho1Be(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSeho1Be(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSeho1Be, startTimeSeho1Be]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSeho1Be === "Go") &&
      TimeSeho1Be !== null &&
      TimeSeho1Be !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSeho1BE";


      const data = {
        TimeSeho1Be: TimeSeho1Be,
        Seho1Be: Seho1Be,
        StatusSeho1Be: StatusSeho1Be,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSeho1Be);
          console.log(Seho1Be);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSeho1Be, Seho1Be, StatusSeho1Be]);

  // Seho2Be
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSeho2Be)) {
      setIsRunningSeho2Be(true);

      if (StatusSeho2Be === "Leader") {
        setStartTimeSeho2Be(Date.now());
      } else if (
        StatusSeho2Be === "MAINTENANCE & IT" &&
        startTimeSeho2Be === null
      ) {
        setStartTimeSeho2Be(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSeho2Be) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSeho2Be;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/Seho2BeTime")
            .set(timeString);

          setTimeSeho2Be(timeString);
        }
      }, 1000);
    } else if (StatusSeho2Be === "Go") {
      setIsRunningSeho2Be(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSeho2Be(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSeho2Be, startTimeSeho2Be]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSeho2Be === "Go") &&
      TimeSeho2Be !== null &&
      TimeSeho2Be !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSeho2BE";


      const data = {
        TimeSeho2Be: TimeSeho2Be,
        Seho2Be: Seho2Be,
        StatusSeho2Be: StatusSeho2Be,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSeho2Be);
          console.log(Seho2Be);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSeho2Be, Seho2Be, StatusSeho2Be]);

  // TouchupBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusTouchupBe)) {
      setIsRunningTouchupBe(true);

      if (StatusTouchupBe === "Leader") {
        setStartTimeTouchupBe(Date.now());
      } else if (
        StatusTouchupBe === "MAINTENANCE & IT" &&
        startTimeTouchupBe === null
      ) {
        setStartTimeTouchupBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeTouchupBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeTouchupBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/TouchupBeTime")
            .set(timeString);

          setTimeTouchupBe(timeString);
        }
      }, 1000);
    } else if (StatusTouchupBe === "Go") {
      setIsRunningTouchupBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeTouchupBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusTouchupBe, startTimeTouchupBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusTouchupBe === "Go") &&
      TimeTouchupBe !== null &&
      TimeTouchupBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeTouchupBE";


      const data = {
        TimeTouchupBe: TimeTouchupBe,
        TouchupBe: TouchupBe,
        StatusTouchupBe: StatusTouchupBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeTouchupBe);
          console.log(TouchupBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeTouchupBe, TouchupBe, StatusTouchupBe]);


  // ICTBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusICTBe)) {
      setIsRunningICTBe(true);

      if (StatusICTBe === "Leader") {
        setStartTimeICTBe(Date.now());
      } else if (
        StatusICTBe === "MAINTENANCE & IT" &&
        startTimeICTBe === null
      ) {
        setStartTimeICTBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeICTBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeICTBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/ICTBeTime")
            .set(timeString);

          setTimeICTBe(timeString);
        }
      }, 1000);
    } else if (StatusICTBe === "Go") {
      setIsRunningICTBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeICTBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusICTBe, startTimeICTBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusICTBe === "Go") &&
      TimeICTBe !== null &&
      TimeICTBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeICTBE";


      const data = {
        TimeICTBe: TimeICTBe,
        ICTBe: ICTBe,
        StatusICTBe: StatusICTBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeICTBe);
          console.log(ICTBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeICTBe, ICTBe, StatusICTBe]);


  // FlashBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusFlashBe)) {
      setIsRunningFlashBe(true);

      if (StatusFlashBe === "Leader") {
        setStartTimeFlashBe(Date.now());
      } else if (
        StatusFlashBe === "MAINTENANCE & IT" &&
        startTimeFlashBe === null
      ) {
        setStartTimeFlashBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeFlashBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeFlashBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/FlashBeTime")
            .set(timeString);

          setTimeFlashBe(timeString);
        }
      }, 1000);
    } else if (StatusFlashBe === "Go") {
      setIsRunningFlashBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeFlashBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusFlashBe, startTimeFlashBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusFlashBe === "Go") &&
      TimeFlashBe !== null &&
      TimeFlashBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeFlashBE";


      const data = {
        TimeFlashBe: TimeFlashBe,
        FlashBe: FlashBe,
        StatusFlashBe: StatusFlashBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeFlashBe);
          console.log(FlashBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeFlashBe, FlashBe, StatusFlashBe]);



  // RouterBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusRouterBe)) {
      setIsRunningRouterBe(true);

      if (StatusRouterBe === "Leader") {
        setStartTimeRouterBe(Date.now());
      } else if (
        StatusRouterBe === "MAINTENANCE & IT" &&
        startTimeRouterBe === null
      ) {
        setStartTimeRouterBe(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeRouterBe) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeRouterBe;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine1BE/RouterBeTime")
            .set(timeString);

          setTimeRouterBe(timeString);
        }
      }, 1000);
    } else if (StatusRouterBe === "Go") {
      setIsRunningRouterBe(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeRouterBe(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusRouterBe, startTimeRouterBe]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusRouterBe === "Go") &&
      TimeRouterBe !== null &&
      TimeRouterBe !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeRouterBE";


      const data = {
        TimeRouterBe: TimeRouterBe,
        RouterBe: RouterBe,
        StatusRouterBe: StatusRouterBe,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRouterBe);
          console.log(RouterBe);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeRouterBe, RouterBe, StatusRouterBe]);


  // ...............................................


  // SMT LINE 2
  // Realtime Function + Downtime Function
  // Line1 SMT TOP
  // Destacker Top
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusDestacker)) {
      setIsRunningDestacker(true);

      if (StatusDestacker === "Leader") {
        setStartTimeDestacker(Date.now());
      } else if (
        StatusDestacker === "MAINTENANCE & IT" &&
        startTimeDestacker === null
      ) {
        setStartTimeDestacker(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeDestacker) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeDestacker;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/DestackerTime")
            .set(timeString);

          setTimeDestacker(timeString);
        }
      }, 1000);
    } else if (StatusDestacker === "Go") {
      setIsRunningDestacker(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeDestacker(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusDestacker, startTimeDestacker]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusDestacker === "Go") &&
      TimeDestacker !== null &&
      TimeDestacker !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeDestacker";


      const data = {
        TimeDestacker: TimeDestacker,
        Destacker: Destacker,
        StatusDestacker: StatusDestacker,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeDestacker);
          console.log(Destacker);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeDestacker, Destacker, StatusDestacker]);


  // Label
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusLabel)) {
      setIsRunningLabel(true);

      if (StatusLabel === "Leader") {
        setStartTimeLabel(Date.now());
      } else if (
        StatusLabel === "MAINTENANCE & IT" &&
        startTimeLabel === null
      ) {
        setStartTimeLabel(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeLabel) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeLabel;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine2/LabelTime").set(timeString);

          setTimeLabel(timeString);
        }
      }, 1000);
    } else if (StatusLabel === "Go") {
      setIsRunningLabel(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeLabel(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusLabel, startTimeLabel]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusLabel === "Go") &&
      TimeLabel !== null &&
      TimeLabel !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeLabel";


      const data = {
        TimeLabel: TimeLabel,
        Label: Label,
        StatusLabel: StatusLabel,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeLabel);
          console.log(Label);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeLabel, Label, StatusLabel]);


  // Printer
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPrinter)) {
      setIsRunningPrinter(true);

      if (StatusPrinter === "Leader") {
        setStartTimePrinter(Date.now());
      } else if (
        StatusPrinter === "MAINTENANCE & IT" &&
        startTimePrinter === null
      ) {
        setStartTimePrinter(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePrinter) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePrinter;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/PrinterTime")
            .set(timeString);

          setTimePrinter(timeString);
        }
      }, 1000);
    } else if (StatusPrinter === "Go") {
      setIsRunningPrinter(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePrinter(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPrinter, startTimePrinter]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPrinter === "Go") &&
      TimePrinter !== null &&
      TimePrinter !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePrinter";


      const data = {
        TimePrinter: TimePrinter,
        Printer: Printer,
        StatusPrinter: StatusPrinter,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePrinter);
          console.log(Printer);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePrinter, Printer, StatusPrinter]);


  // Spi
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSPI)) {
      setIsRunningSPI(true);

      if (StatusSPI === "Leader") {
        setStartTimeSPI(Date.now());
      } else if (
        StatusSPI === "MAINTENANCE & IT" &&
        startTimeSPI === null
      ) {
        setStartTimeSPI(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSPI) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSPI;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine2/SPITime").set(timeString);

          setTimeSPI(timeString);
        }
      }, 1000);
    } else if (StatusSPI === "Go") {
      setIsRunningSPI(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSPI(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSPI, startTimeSPI]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSPI === "Go") &&
      TimeSPI !== null &&
      TimeSPI !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSPI";


      const data = {
        TimeSPI: TimeSPI,
        SPI: SPI,
        StatusSPI: StatusSPI,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSPI);
          console.log(SPI);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSPI, SPI, StatusSPI]);


  // PickNPlace
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPickNPlace)) {
      setIsRunningPickNPlace(true);

      if (StatusPickNPlace === "Leader") {
        setStartTimePickNPlace(Date.now());
      } else if (
        StatusPickNPlace === "MAINTENANCE & IT" &&
        startTimePickNPlace === null
      ) {
        setStartTimePickNPlace(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePickNPlace) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePickNPlace;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/PickNPlaceTime")
            .set(timeString);

          setTimePickNPlace(timeString);
        }
      }, 1000);
    } else if (StatusPickNPlace === "Go") {
      setIsRunningPickNPlace(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePickNPlace(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPickNPlace, startTimePickNPlace]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPickNPlace === "Go") &&
      TimePickNPlace !== null &&
      TimePickNPlace !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePickNPlace";


      const data = {
        TimePickNPlace: TimePickNPlace,
        PickNPlace: PickNPlace,
        StatusPickNPlace: StatusPickNPlace,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePickNPlace);
          console.log(PickNPlace);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePickNPlace, PickNPlace, StatusPickNPlace]);


  // Reflow
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusReflow)) {
      setIsRunningReflow(true);

      if (StatusReflow === "Leader") {
        setStartTimeReflow(Date.now());
      } else if (
        StatusReflow === "MAINTENANCE & IT" &&
        startTimeReflow === null
      ) {
        setStartTimeReflow(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeReflow) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeReflow;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine2/ReflowTime").set(timeString);

          setTimeReflow(timeString);
        }
      }, 1000);
    } else if (StatusReflow === "Go") {
      setIsRunningReflow(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeReflow(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusReflow, startTimeReflow]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusReflow === "Go") &&
      TimeReflow !== null &&
      TimeReflow !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeReflow";


      const data = {
        TimeReflow: TimeReflow,
        Reflow: Reflow,
        StatusReflow: StatusReflow,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeReflow);
          console.log(Reflow);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeReflow, Reflow, StatusReflow]);

  // AOI
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusAOI)) {
      setIsRunningAOI(true);

      if (StatusAOI === "Leader") {
        setStartTimeAOI(Date.now());
      } else if (
        StatusAOI === "MAINTENANCE & IT" &&
        startTimeAOI === null
      ) {
        setStartTimeAOI(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeAOI) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeAOI;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine2/AOITime").set(timeString);

          setTimeAOI(timeString);
        }
      }, 1000);
    } else if (StatusAOI === "Go") {
      setIsRunningAOI(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeAOI(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusAOI, startTimeAOI]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusAOI === "Go") &&
      TimeAOI !== null &&
      TimeAOI !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeAOI";


      const data = {
        TimeAOI: TimeAOI,
        AOI: AOI,
        StatusAOI: StatusAOI,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeAOI);
          console.log(AOI);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeAOI, AOI, StatusAOI]);


  // RVS
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusRVS)) {
      setIsRunningRVS(true);

      if (StatusRVS === "Leader") {
        setStartTimeRVS(Date.now());
      } else if (
        StatusRVS === "MAINTENANCE & IT" &&
        startTimeRVS === null
      ) {
        setStartTimeRVS(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeRVS) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeRVS;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db.ref("/SMTLine2/RVSTime").set(timeString);

          setTimeRVS(timeString);
        }
      }, 1000);
    } else if (StatusRVS === "Go") {
      setIsRunningRVS(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeRVS(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusRVS, startTimeRVS]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusRVS === "Go") &&
      TimeRVS !== null &&
      TimeRVS !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeRVS";


      const data = {
        TimeRVS: TimeRVS,
        RVS: RVS,
        StatusRVS: StatusRVS,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRVS);
          console.log(RVS);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeRVS, RVS, StatusRVS]);


  // DropinBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusDropin)) {
      setIsRunningDropin(true);

      if (StatusDropin === "Leader") {
        setStartTimeDropin(Date.now());
      } else if (
        StatusDropin === "MAINTENANCE & IT" &&
        startTimeDropin === null
      ) {
        setStartTimeDropin(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeDropin) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeDropin;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/DropinTime")
            .set(timeString);

          setTimeDropin(timeString);
        }
      }, 1000);
    } else if (StatusDropin === "Go") {
      setIsRunningDropin(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeDropin(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusDropin, startTimeDropin]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusDropin === "Go") &&
      TimeDropin !== null &&
      TimeDropin !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeDropin";


      const data = {
        TimeDropin: TimeDropin,
        Dropin: Dropin,
        StatusDropin: StatusDropin,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeDropin);
          console.log(Dropin);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeDropin, Dropin, StatusDropin]);


  // Fluxer
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusFluxer)) {
      setIsRunningFluxer(true);

      if (StatusFluxer === "Leader") {
        setStartTimeFluxer(Date.now());
      } else if (
        StatusFluxer === "MAINTENANCE & IT" &&
        startTimeFluxer === null
      ) {
        setStartTimeFluxer(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeFluxer) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeFluxer;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/FluxerTime")
            .set(timeString);

          setTimeFluxer(timeString);
        }
      }, 1000);
    } else if (StatusFluxer === "Go") {
      setIsRunningFluxer(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeFluxer(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusFluxer, startTimeFluxer]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusFluxer === "Go") &&
      TimeFluxer !== null &&
      TimeFluxer !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeFluxer";


      const data = {
        TimeFluxer: TimeFluxer,
        Fluxer: Fluxer,
        StatusFluxer: StatusFluxer,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeFluxer);
          console.log(Fluxer);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeFluxer, Fluxer, StatusFluxer]);

  // Preheat
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusPreheat)) {
      setIsRunningPreheat(true);

      if (StatusPreheat === "Leader") {
        setStartTimePreheat(Date.now());
      } else if (
        StatusPreheat === "MAINTENANCE & IT" &&
        startTimePreheat === null
      ) {
        setStartTimePreheat(Date.now());
      }

      interval = setInterval(() => {
        if (startTimePreheat) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimePreheat;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/PreheatTime")
            .set(timeString);

          setTimePreheat(timeString);
        }
      }, 1000);
    } else if (StatusPreheat === "Go") {
      setIsRunningPreheat(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimePreheat(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusPreheat, startTimePreheat]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusPreheat === "Go") &&
      TimePreheat !== null &&
      TimePreheat !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimePreheat";


      const data = {
        TimePreheat: TimePreheat,
        Preheat: Preheat,
        StatusPreheat: StatusPreheat,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePreheat);
          console.log(Preheat);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimePreheat, Preheat, StatusPreheat]);

  // Selective
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusSelective)) {
      setIsRunningSelective(true);

      if (StatusSelective === "Leader") {
        setStartTimeSelective(Date.now());
      } else if (
        StatusSelective === "MAINTENANCE & IT" &&
        startTimeSelective === null
      ) {
        setStartTimeSelective(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeSelective) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeSelective;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/SelectiveTime")
            .set(timeString);

          setTimeSelective(timeString);
        }
      }, 1000);
    } else if (StatusSelective === "Go") {
      setIsRunningSelective(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeSelective(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusSelective, startTimeSelective]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusSelective === "Go") &&
      TimeSelective !== null &&
      TimeSelective !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeSelective";


      const data = {
        TimeSelective: TimeSelective,
        Selective: Selective,
        StatusSelective: StatusSelective,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSelective);
          console.log(Selective);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeSelective, Selective, StatusSelective]);


  // Touchup
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusTouchup)) {
      setIsRunningTouchup(true);

      if (StatusTouchup === "Leader") {
        setStartTimeTouchup(Date.now());
      } else if (
        StatusTouchup === "MAINTENANCE & IT" &&
        startTimeTouchup === null
      ) {
        setStartTimeTouchup(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeTouchup) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeTouchup;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/TouchupTime")
            .set(timeString);

          setTimeTouchup(timeString);
        }
      }, 1000);
    } else if (StatusTouchup === "Go") {
      setIsRunningTouchup(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeTouchup(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusTouchup, startTimeTouchup]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusTouchup === "Go") &&
      TimeTouchup !== null &&
      TimeTouchup !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeTouchup";


      const data = {
        TimeTouchup: TimeTouchup,
        Touchup: Touchup,
        StatusTouchup: StatusTouchup,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeTouchup);
          console.log(Touchup);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeTouchup, Touchup, StatusTouchup]);


  // ICT
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusICT)) {
      setIsRunningICT(true);

      if (StatusICT === "Leader") {
        setStartTimeICT(Date.now());
      } else if (
        StatusICT === "MAINTENANCE & IT" &&
        startTimeICT === null
      ) {
        setStartTimeICT(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeICT) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeICT;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/ICTTime")
            .set(timeString);

          setTimeICT(timeString);
        }
      }, 1000);
    } else if (StatusICT === "Go") {
      setIsRunningICT(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeICT(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusICT, startTimeICT]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusICT === "Go") &&
      TimeICT !== null &&
      TimeICT !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeICT";


      const data = {
        TimeICT: TimeICT,
        ICT: ICT,
        StatusICT: StatusICT,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeICT);
          console.log(ICT);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeICT, ICT, StatusICT]);


  // Flash
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusFlash)) {
      setIsRunningFlash(true);

      if (StatusFlash === "Leader") {
        setStartTimeFlash(Date.now());
      } else if (
        StatusFlash === "MAINTENANCE & IT" &&
        startTimeFlash === null
      ) {
        setStartTimeFlash(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeFlash) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeFlash;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/FlashTime")
            .set(timeString);

          setTimeFlash(timeString);
        }
      }, 1000);
    } else if (StatusFlash === "Go") {
      setIsRunningFlash(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeFlash(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusFlash, startTimeFlash]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusFlash === "Go") &&
      TimeFlash !== null &&
      TimeFlash !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeFlash";


      const data = {
        TimeFlash: TimeFlash,
        Flash: Flash,
        StatusFlash: StatusFlash,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeFlash);
          console.log(Flash);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeFlash, Flash, StatusFlash]);



  // Router
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "In Validation",
      "Leader",
      "Return Leader",
      "HRGA & EHS",
      "Return HRGA & EHS",
      "PURCHASING,PPIC,MP&L",
      "Return PURCHASING,PPIC,MP&L",
      "PROCESS ENGINEERING",
      "Return PROCESS ENGINEERING",
      "PRODUCT DEVELOPMENT",
      "Return PRODUCT DEVELOPMENT",
      "ADVANCED MANUFACTURING ENGINEERING",
      "Return ADVANCED MANUFACTURING ENGINEERING",
      "MAINTENANCE & IT",
      "Return MAINTENANCE & IT",
      "Production",
      "QA",
      "QC",
    ];

    if (validStatuses.includes(StatusRouter)) {
      setIsRunningRouter(true);

      if (StatusRouter === "Leader") {
        setStartTimeRouter(Date.now());
      } else if (
        StatusRouter === "MAINTENANCE & IT" &&
        startTimeRouter === null
      ) {
        setStartTimeRouter(Date.now());
      }

      interval = setInterval(() => {
        if (startTimeRouter) {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTimeRouter;

          const hours = Math.floor(elapsedTime / 3600000);
          const minutes = Math.floor((elapsedTime % 3600000) / 60000);
          const seconds = Math.floor((elapsedTime % 60000) / 1000);

          const timeString = `${hours} Hours : ${minutes} Minutes : ${seconds} Seconds `;

          db
            .ref("/SMTLine2/RouterTime")
            .set(timeString);

          setTimeRouter(timeString);
        }
      }, 1000);
    } else if (StatusRouter === "Go") {
      setIsRunningRouter(false);
      clearInterval(interval);

      // Clear startTime when status changes to 'Go'
      setStartTimeRouter(null);
    }

    return () => {
      clearInterval(interval);
    };
  }, [StatusRouter, startTimeRouter]);

  useEffect(() => {
    let apiUrl = "";

    if (
      (StatusRouter === "Go") &&
      TimeRouter !== null &&
      TimeRouter !== ""
    ) {

      apiUrl = "https://andonline.astra-visteon.com:3000/api/PutDownTimeRouter";


      const data = {
        TimeRouter: TimeRouter,
        Router: Router,
        StatusRouter: StatusRouter,
      };

      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRouter);
          console.log(Router);
          if (response.status === 200) {
            console.log("Mantap");
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log("Error:", err);
        });
    }
  }, [TimeRouter, Router, StatusRouter]);

  // -------------------------------
   const navHref = "/SMTLine1controller"; 


  return (
    <body className="bg-slate-700 w-full h-full" >
      <Navbar navHref={navHref} />
      <HeaderStatus />

      {/*  */}
      <main>
        <div className=" pt-3  justify-center items-center mx-auto text-center">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            CONTROLLER
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{
                      backgroundColor: backgroundColorStatusDestackerTop,
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusLabelTop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPrinterTop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSPITop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">SPI TOP </div>
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{
                      backgroundColor: backgroundColorStatusPickNPlaceTop,
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusReflowTop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusAOITop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">AOI TOP</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusRVSTop }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
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
            SMT BOTTOM
          </span>
        </div>

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPrinterBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSPIBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">SPI BOT</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPickNPlaceBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusReflowBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        REFLOW BOT
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusAOIBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">AOI BOT</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusRVSBot }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl ">
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">RVS BOT</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT BACKEND
          </span>
        </div>

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusDropinBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusFluxerBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPreheatBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSeho1Be }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        SEHO 1 (BE)
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSeho2Be }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusTouchupBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusICTBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">ICT (BE)</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusFlashBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        FLASH (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusRouterBe }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        ROUTER (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>


        {/* SMT LINE 2 */}
        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT BOTTOM
          </span>
        </div>
        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{
                      backgroundColor: backgroundColorStatusDestacker,
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        DESTACKER
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusLabel }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        LABEL
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPrinter }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        PRINTER
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSPI }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">SPI  </div>
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{
                      backgroundColor: backgroundColorStatusPickNPlace,
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        PICK & PLACE
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusReflow }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        REFLOW
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusAOI }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">AOI </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusRVS }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        RVS
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusDropin }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        DROP IN
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusFluxer }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        FLUXER
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusPreheat }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        PREHEAT
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusSelective }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        Selective
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusTouchup }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        TOUCH UP
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusICT }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">ICT </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusFlash }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        FLASH
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorStatusRouter }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        ROUTER
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
