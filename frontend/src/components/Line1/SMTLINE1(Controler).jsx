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
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Destacker (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Destacker (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Destacker (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Destacker (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Destacker (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Destacker (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Destacker (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref9 = firebase.database().ref("SMTLine1TOP/Label (TOP)");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusLabelTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Label (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Label (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Label (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Label (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Label (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Label (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Label (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref18 = firebase.database().ref("/SMTLine1TOP/Printer (TOP)");
    ref18.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Printer (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Printer (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Printer (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref19 = firebase.database().ref("/SMTLine1TOP/SPI (TOP)");
    ref19.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPITop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 SPI (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 SPI (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 SPI (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref20 = firebase.database().ref("/SMTLine1TOP/Pick&Place (TOP)");
    ref20.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlaceTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Pick&Place (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.play();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref21 = firebase.database().ref("/SMTLine1TOP/Reflow (TOP)");
    ref21.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Reflow (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Reflow (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Reflow (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref22 = firebase.database().ref("/SMTLine1TOP/AOI (TOP)");
    ref22.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOITop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 AOI (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 AOI (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 AOI (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref23 = firebase.database().ref("/SMTLine1TOP/RVS (TOP)");
    ref23.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 RVS (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 RVS (TOP) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 RVS (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });


    // SMT BOT
    const ref24 = firebase.database().ref("SMTLine1BOT/Printer (BOT)");
    ref24.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Printer (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Printer (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Printer (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref25 = firebase.database().ref("SMTLine1BOT/SPI (BOT)");
    ref25.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPIBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 SPI (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 SPI (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 SPI (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref26 = firebase.database().ref("SMTLine1BOT/Pick&Place (BOT)");
    ref26.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlaceBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Pick&Place (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Pick&Place (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Pick&Place (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref27 = firebase.database().ref("SMTLine1BOT/Reflow (BOT)");
    ref27.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Reflow (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Reflow (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Reflow (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref28 = firebase.database().ref("SMTLine1BOT/AOI (BOT)");
    ref28.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOIBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 AOI (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 AOI (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 AOI (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref29 = firebase.database().ref("SMTLine1BOT/RVS (BOT)");
    ref29.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSBot(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 RVS (BOT) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (BOT) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 RVS (BOT) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 RVS (BOT) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (BOT) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });



    // SMT BE
    const ref30 = firebase.database().ref("SMTLine1BE/Drop in (BE)");
    ref30.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusDropinBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Drop in (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Drop in (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Drop in (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Drop in (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Drop in (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Drop in (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Drop in (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });


    const ref31 = firebase.database().ref("SMTLine1BE/Fluxer (BE)");
    ref31.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFluxerBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Fluxer (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Fluxer (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Fluxer (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Fluxer (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Fluxer (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Fluxer (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Fluxer (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref32 = firebase.database().ref("SMTLine1BE/PreHeat (BE)");
    ref32.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPreheatBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 PreHeat (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 PreHeat (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 PreHeat (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 PreHeat (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 PreHeat (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 PreHeat (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 PreHeat (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref33 = firebase.database().ref("SMTLine1BE/Seho1 (BE)");
    ref33.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSeho1Be(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Seho1 (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Seho1 (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Seho1 (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Seho1 (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Seho1 (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Seho1 (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Seho1 (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });


    const ref34 = firebase.database().ref("SMTLine1BE/Seho2 (BE)");
    ref34.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSeho2Be(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Seho2 (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Seho2 (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Seho2 (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Seho2 (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Seho2 (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Seho2 (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Seho2 (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref35 = firebase.database().ref("SMTLine1BE/Touch UP (BE)");
    ref35.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusTouchupBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Touch UP (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Touch UP (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Touch UP (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Touch UP (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Touch UP (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Touch UP (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Touch UP (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref36 = firebase.database().ref("SMTLine1BE/ICT (BE)");
    ref36.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusICTBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 ICT (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 ICT (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 ICT (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 ICT (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 ICT (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 ICT (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 ICT (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });


    const ref37 = firebase.database().ref("SMTLine1BE/Flash (BE)");
    ref37.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusFlashBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Flash (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Flash (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Flash (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Flash (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Flash (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Flash (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Flash (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
    });

    const ref38 = firebase.database().ref("SMTLine1BE/Router (BE)");
    ref38.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRouterBe(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Router (BE) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Router (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "HRGA & EHS" ||
        data === "PURCHASING,PPIC,MP&L" ||
        data === "PROCESS ENGINEERING" ||
        data === "PRODUCT DEVELOPMENT" ||
        data === "ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Router (BE) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "QC" || data === "QA") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request ${data} SMT LINE 1 Router (BE) Status: "Permintaan Validation" - Please Check the Details In Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Production Leader" || data === "Sub Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request ${data} SMT LINE 1 Router (BE) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Return HRGA & EHS" ||
        data === "Return PURCHASING,PPIC,MP&L" ||
        data === "Return PROCESS ENGINEERING" ||
        data === "Return PRODUCT DEVELOPMENT" ||
        data === "Return ADVANCED MANUFACTURING ENGINEERING"
      ) {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Router (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (data === "Return MAINTENANCE & IT") {
        audio.currentTime = 0;
        audio.play();
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Router (BE) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${message}`
          )
            .then((response) => {
              if (!response.ok) {
                throw new Error("Error sending telegram message");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        });
      } else if (
        data === "Go" ||
        data === "Repair"
      ) {
        audio.pause();
      }
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
                                        : data === "Production Leader"
                                          ? "#93c2c4"
                                          : data === "Sub Leader"
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
  // DestackerTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeDestackerTOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1TOP/LabelTopTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeLabelTOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimePrinterTOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1TOP/SPITopTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeSPITOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimePickNPlaceTOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1TOP/ReflowTopTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeReflowTOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1TOP/AOITopTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeAOITOP";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1TOP/RVSTopTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeRVSTOP";


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







  // Line1 SMT BOT
  // PrinterBot
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimePrinterBOT";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1BOT/SPIBotTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeSPIBOT";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimePickNPlaceBOT";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1BOT/ReflowBotTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeReflowBOT";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1BOT/AOIBotTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeAOIBOT";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase.database().ref("/SMTLine1BOT/RVSBotTime").set(timeString);

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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeRVSBOT";


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


  // Line1 SMT BE
  // DropinBe
  useEffect(() => {
    let interval;

    const validStatuses = [
      "Repair",
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeDropinBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeFluxerBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimePreheatBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeSeho1BE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeSeho2BE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeTouchupBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeICTBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeFlashBE";


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
      "Return Repair",
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
      "Production Leader",
      "Sub Leader",
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

          firebase
            .database()
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

      apiUrl = "http://192.168.101.12:3001/api/PutDownTimeRouterBE";


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

  // Background
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "0px",
    height: "900px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  return (
    <body style={styles}>
      <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                src={process.env.PUBLIC_URL + "/smt.jpeg"}
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
            <div class="flex items-center">
              <button>
                <h1 class="text-xl font-sans tracking-tight text-gray-900">
                  | SMT Line 1 - TOP |
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
            SMT BOT
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
            SMT BE
          </span>
        </div>

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
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

      </main>
    </body>
  );
};

export default SMTLINE1CONTROLLER;
