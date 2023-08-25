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

const SmtTop = () => {


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
  const [Area, setArea] = useState("SMT TOP");

  // //////

  //  STATION Funtion

  // Destacker TOP
  const [DestackerTop, setDestackerTop] = useState("Destacker (TOP)");
  const [StatusDestackerTop, setStatusDestackerTop] = useState("");
  const [
    backgroundColorStatusDestackerTop,
    setBackgroundColorStatusDestackerTop,
  ] = useState("");
  const [startTimeDestackerTop, setStartTimeDestackerTop] = useState(null);
  const [isRunningDestackerTop, setIsRunningDestackerTop] = useState(false);
  const [TimeDestacker, setTimeDestacker] = useState(null);
  // ---------------------------

  // Label TOP
  const [StatusLabelTop, setStatusLabelTop] = useState("");
  const [LabelTop, setLabelTop] = useState("Label (TOP)");
  const [backgroundColorStatusLabelTop, setBackgroundColorStatusLabelTop] =
    useState("");
  const [startTimeLabelTop, setStartTimeLabelTop] = useState(null);
  const [isRunningLabelTop, setIsRunningLabelTop] = useState(false);
  const [TimeLabel, setTimeLabel] = useState(null);
  // ---------------------------

  // Printer TOP
  const [StatusPrinterTop, setStatusPrinterTop] = useState("");
  const [PrinterTop, setPrinterTop] = useState("Printer (TOP)");
  const [backgroundColorStatusPrinterTop, setBackgroundColorStatusPrinterTop] =
    useState("");
  const [startTimePrinterTop, setStartTimePrinterTop] = useState(null);
  const [isRunningPrinterTop, setIsRunningPrinterTop] = useState(false);
  const [TimePrinter, setTimePrinter] = useState(null);
  // ---------------------------


  // Spi TOP
  const [StatusSPITop, setStatusSPITop] = useState("");
  const [SPITop, setSPITop] = useState("SPI (TOP)");
  const [backgroundColorStatusSPITop, setBackgroundColorStatusSPITop] = useState("");
  const [startTimeSPITop, setStartTimeSPITop] = useState(null);
  const [isRunningSPITop, setIsRunningSPITop] = useState(false);
  const [TimeSPI, setTimeSPI] = useState(null);
  // ---------------------------

  // PickNPlace TOP
  const [StatusPickNPlaceTop, setStatusPickNPlaceTop] = useState("");
  const [PickNPlaceTop, setPickNPlaceTop] = useState("Pick&Place (TOP)");
  const [backgroundColorStatusPickNPlaceTop, setBackgroundColorStatusPickNPlaceTop] = useState("");
  const [startTimePickNPlaceTop, setStartTimePickNPlaceTop] = useState(null);
  const [isRunningPickNPlaceTop, setIsRunningPickNPlaceTop] = useState(false);
  const [TimePickNPlace, setTimePickNPlace] = useState(null);
  // ---------------------------


  // Reflow Top

  const [StatusReflowTop, setStatusReflowTop] = useState("");
  const [ReflowTop, setReflowTop] = useState("Reflow (TOP)");
  const [backgroundColorStatusReflowTop, setBackgroundColorStatusReflowTop] = useState("");
  const [startTimeReflowTop, setStartTimeReflowTop] = useState(null);
  const [isRunningReflowTop, setIsRunningReflowTop] = useState(false);
  const [TimeReflow, setTimeReflow] = useState(null);
  // ---------------------------


  // AOI Top
  const [StatusAOITop, setStatusAOITop] = useState("");
  const [AOITop, setAOITop] = useState("AOI (TOP)");
  const [backgroundColorStatusAOITop, setBackgroundColorStatusAOITop] = useState("");
  const [startTimeAOITop, setStartTimeAOITop] = useState(null);
  const [isRunningAOITop, setIsRunningAOITop] = useState(false);
  const [TimeAOI, setTimeAOI] = useState(null);
  // ---------------------------


  // RVS Top
  const [StatusRVSTop, setStatusRVSTop] = useState("");
  const [RVSTop, setRVSTop] = useState("RVS (TOP)");
  const [backgroundColorStatusRVSTop, setBackgroundColorStatusRVSTop] = useState("");
  const [startTimeRVSTop, setStartTimeRVSTop] = useState(null);
  const [isRunningRVSTop, setIsRunningRVSTop] = useState(false);
  const [TimeRVS, setTimeRVS] = useState(null);
  // ---------------------------



  // Tindakan / Kehadiran


  // POPUP




  // ----------------------



  // Production

  // fETCHING DATA SCHEDULE PLANING


  // .......................




  const audio = new Audio("Sound.mp3");
  // ..................................



  // Fetching Data By Station


  // ..............












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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Destacker (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Destacker (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Destacker (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 Destacker (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Destacker (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Destacker (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });



    const ref9 = firebase.database().ref("SMTLine1TOP/Label (TOP)");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusLabelTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Label (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Label (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Label (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 Label (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Label (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Label (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });


    const ref18 = firebase.database().ref("/SMTLine1TOP/Printer (TOP)");
    ref18.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Printer (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 Printer (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Printer (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });

    const ref19 = firebase.database().ref("/SMTLine1TOP/SPI (TOP)");
    ref19.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPITop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 SPI (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 SPI (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 SPI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 SPI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });

    const ref20 = firebase.database().ref("/SMTLine1TOP/Pick&Place (TOP)");
    ref20.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlace(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Pick&Place (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 Pick&Place (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Pick&Place (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Pick&Place (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });

    const ref21 = firebase.database().ref("/SMTLine1TOP/Reflow (TOP)");
    ref21.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 Reflow (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 Reflow (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 Reflow (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Reflow (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });

    const ref22 = firebase.database().ref("/SMTLine1TOP/AOI (TOP)");
    ref22.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOITop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 AOI (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 AOI (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 AOI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 AOI (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
        audio.pause();
      }
    });

    const ref23 = firebase.database().ref("/SMTLine1TOP/RVS (TOP)");
    ref23.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSTop(data);
      if (data === "Leader") {
        audio.currentTime = 0;
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Leader SMT LINE 1 RVS (TOP) Status: "Permintaan ACTION" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "HRGA & EHS" || data === "PURCHASING,PPIC,MP&L" || data === "PROCESS ENGINEERING" || data === "PRODUCT DEVELOPMENT" || data === "ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (TOP) Status: "Permintaan Perbaikan" - Please Check the Details In Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Production Leader") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `Notification Request Production Leader SMT LINE 1 RVS (TOP) Status: "Permintaan Validation" - Please Check the Details In Validation Department Side `;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Return HRGA & EHS" || data === "Return PURCHASING,PPIC,MP&L" || data === "Return PROCESS ENGINEERING" || data === "Return PRODUCT DEVELOPMENT" || data === "Return ADVANCED MANUFACTURING ENGINEERING") {
        audio.pause();
        audio.currentTime = 0;
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification ${data} SMT LINE 1 RVS (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
        audio.play()
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 RVS (TOP) Status: "Perbaikan Di Kembalikan" - Please Check the Details In Return Department Side`;

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${encodeURIComponent(
              message
            )}`
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
      } else if (data === "Go" || data === "Repair Maintenance" || data === "Repair Others" || data === "Return Repair Maintenance" || data === "Return Repair Others") {
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

  const updateStatusDestackerTop = (data) => {
    setStatusDestackerTop(data);
    setBackgroundColorStatusDestackerTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusLabelTop = (data) => {
    setStatusLabelTop(data);
    setBackgroundColorStatusLabelTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusPrinterTop = (data) => {
    setStatusPrinterTop(data);
    setBackgroundColorStatusPrinterTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusSPITop = (data) => {
    setStatusSPITop(data);
    setBackgroundColorStatusSPITop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusPickNPlace = (data) => {
    setStatusPickNPlaceTop(data);
    setBackgroundColorStatusPickNPlaceTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusReflowTop = (data) => {
    setStatusReflowTop(data);
    setBackgroundColorStatusReflowTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusAOITop = (data) => {
    setStatusAOITop(data);
    setBackgroundColorStatusAOITop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };

  const updateStatusRVSTop = (data) => {
    setStatusRVSTop(data);
    setBackgroundColorStatusRVSTop(
      data === "Go"
        ? "#32cd32"
        : data === "Return Repair Maintenance"
          ? "#E9CE08"
          : data === "Repair Maintenance"
            ? "#E9CE08"
            : data === "Repair Others"
              ? "#E9CE08"
              : data === "Return Repair Others"
                ? "#E9CE08"
                : data === "Leader"
                  ? "#C00000"
                  : data === "Return Leader"
                    ? "#C00000"
                    : data === "HRGA & EHS"
                      ? "#DB7093"
                      : data === "Return HRGA & EHS"
                        ? "#DB7093"
                        : data === "PURCHASING,PPIC,MP&L"
                          ? "#873e23"
                          : data === "Return PURCHASING,PPIC,MP&L"
                            ? "#873e23"
                            : data === "PROCESS ENGINEERING"
                              ? "#1e81b0"
                              : data === "Return PROCESS ENGINEERING"
                                ? "#1e81b0"
                                : data === "PRODUCT DEVELOPMENT"
                                  ? "#233087"
                                  : data === "Return PRODUCT DEVELOPMENT"
                                    ? "#233087"
                                    : data === "ADVANCED MANUFACTURING ENGINEERING"
                                      ? "#C5B602"
                                      : data === "Return ADVANCED MANUFACTURING ENGINEERING"
                                        ? "#C5B602"
                                        : data === "QA"
                                          ? "#93C2C4"
                                          : data === "QC"
                                            ? "#BDD0D1"
                                            : data === "Production Leader"
                                              ? "#8fbc8f"
                                              : data === "MAINTENANCE & IT"
                                                ? "#be4f62"
                                                : data === "Return MAINTENANCE & IT"
                                                  ? "#be4f62"
                                                  : "#565454"

    );
  };
  // ----


  // DownTime Result Time Function 

  // DestackerTOP
  useEffect(() => {
    let interval;

    const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusDestackerTop)) {
      setIsRunningDestackerTop(true);

      if (StatusDestackerTop === 'Leader') {
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
            .ref('/SMTLine1TOP/DestackerTopTime')
            .set(timeString);

          setTimeDestacker(timeString);
        }
      }, 1000);
    } else if (StatusDestackerTop === 'Go') {
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
    if (StatusDestackerTop === 'Go' && TimeDestacker !== null && TimeDestacker !== '') {
      const data = {
        TimeDestacker: TimeDestacker,
        Area: Area,
        DestackerTop: DestackerTop,
        StatusDestackerTop: StatusDestackerTop,
      };

      fetch(`http://192.168.101.236:3001/api/PutDownTimeDestackerTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeDestacker);
          console.log(Area);
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
    };
  }, [TimeDestacker, Area, DestackerTop, StatusDestackerTop]);

  // LabelTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusLabelTop)) {
      setIsRunningLabelTop(true);

      if (StatusLabelTop === 'Leader') {
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

          firebase
            .database()
            .ref('/SMTLine1TOP/LabelTopTime')
            .set(timeString);

          setTimeLabel(timeString);
        }
      }, 1000);
    } else if (StatusLabelTop === 'Go') {
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
    if (StatusLabelTop === 'Go' && TimeLabel !== null && TimeLabel !== '') {
      const data = {
        TimeLabel: TimeLabel,
        Area: Area,
        LabelTop: LabelTop,
        StatusLabelTop: StatusLabelTop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimeLabelTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeLabel);
          console.log(Area);
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
    };
  }, [TimeLabel, Area, LabelTop, StatusLabelTop]);



  // PrinterTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusPrinterTop)) {
      setIsRunningPrinterTop(true);

      if (StatusPrinterTop === 'Leader') {
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
            .ref('/SMTLine1TOP/PrinterTopTime')
            .set(timeString);

          setTimePrinter(timeString);
        }
      }, 1000);
    } else if (StatusPrinterTop === 'Go') {
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
    if (StatusPrinterTop === 'Go' && TimePrinter !== null && TimePrinter !== '') {
      const data = {
        TimePrinter: TimePrinter,
        Area: Area,
        PrinterTop: PrinterTop,
        StatusPrinterTop: StatusPrinterTop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimePrinterTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePrinter);
          console.log(Area);
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
    };
  }, [TimePrinter, Area, PrinterTop, StatusPrinterTop]);



  // SpiTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusSPITop)) {
      setIsRunningSPITop(true);

      if (StatusSPITop === 'Leader') {
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

          firebase
            .database()
            .ref('/SMTLine1TOP/SPITopTime')
            .set(timeString);

          setTimeSPI(timeString);
        }
      }, 1000);
    } else if (StatusSPITop === 'Go') {
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
    if (StatusSPITop === 'Go' && TimeSPI !== null && TimeSPI !== '') {
      const data = {
        TimeSPI: TimeSPI,
        Area: Area,
        SPITop: SPITop,
        StatusSPITop: StatusSPITop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimeSPITOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeSPI);
          console.log(Area);
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
    };
  }, [TimeSPI, Area, SPITop, StatusSPITop]);



  // PickNPlaceTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusPickNPlaceTop)) {
      setIsRunningPickNPlaceTop(true);

      if (StatusPickNPlaceTop === 'Leader') {
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
            .ref('/SMTLine1TOP/PickNPlaceTopTime')
            .set(timeString);

          setTimePickNPlace(timeString);
        }
      }, 1000);
    } else if (StatusPickNPlaceTop === 'Go') {
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
    if (StatusPickNPlaceTop === 'Go' && TimePickNPlace !== null && TimePickNPlace !== '') {
      const data = {
        TimePickNPlace: TimePickNPlace,
        Area: Area,
        PickNPlaceTop: PickNPlaceTop,
        StatusPickNPlaceTop: StatusPickNPlaceTop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimePickNPlaceTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimePickNPlace);
          console.log(Area);
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
    };
  }, [TimePickNPlace, Area, PickNPlaceTop, StatusPickNPlaceTop]);



  // ReflowTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusReflowTop)) {
      setIsRunningReflowTop(true);

      if (StatusReflowTop === 'Leader') {
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

          firebase
            .database()
            .ref('/SMTLine1TOP/ReflowTopTime')
            .set(timeString);

          setTimeReflow(timeString);
        }
      }, 1000);
    } else if (StatusReflowTop === 'Go') {
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
    if (StatusReflowTop === 'Go' && TimeReflow !== null && TimeReflow !== '') {
      const data = {
        TimeReflow: TimeReflow,
        Area: Area,
        ReflowTop: ReflowTop,
        StatusReflowTop: StatusReflowTop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimeReflowTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeReflow);
          console.log(Area);
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
    };
  }, [TimeReflow, Area, ReflowTop, StatusReflowTop]);




  // AOITOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusAOITop)) {
      setIsRunningAOITop(true);

      if (StatusAOITop === 'Leader') {
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

          firebase
            .database()
            .ref('/SMTLine1TOP/AOITopTime')
            .set(timeString);

          setTimeAOI(timeString);
        }
      }, 1000);
    } else if (StatusAOITop === 'Go') {
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
    if (StatusAOITop === 'Go' && TimeAOI !== null && TimeAOI !== '') {
      const data = {
        TimeAOI: TimeAOI,
        Area: Area,
        AOITop: AOITop,
        StatusAOITop: StatusAOITop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimeAOITOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeAOI);
          console.log(Area);
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
    };
  }, [TimeAOI, Area, AOITop, StatusAOITop]);



  // RVSTOP
  useEffect(() => {
    let interval;

     const validStatuses = [
      'Repair',
      'Leader',
      'Return Leader',
      'HRGA & EHS',
      'Return HRGA & EHS',
      'PURCHASING,PPIC,MP&L',
      'Return PURCHASING,PPIC,MP&L',
      'PROCESS ENGINEERING',
      'Return PROCESS ENGINEERING',
      'PRODUCT DEVELOPMENT',
      'Return PRODUCT DEVELOPMENT',
      'ADVANCED MANUFACTURING ENGINEERING',
      'Return ADVANCED MANUFACTURING ENGINEERING',
      'QA',
      'Return QA',
      'QC',
      'Return QC',
      'MAINTENANCE & IT',
      'Return MAINTENANCE & IT',
      'Production Leader',
      'Repair Maintenance',
      'Return Repair Maintenance',
      'Repair Others',
      'Return Repair Others'
    ];

    if (validStatuses.includes(StatusRVSTop)) {
      setIsRunningRVSTop(true);

      if (StatusRVSTop === 'Leader') {
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

          firebase
            .database()
            .ref('/SMTLine1TOP/RVSTopTime')
            .set(timeString);

          setTimeRVS(timeString);
        }
      }, 1000);
    } else if (StatusRVSTop === 'Go') {
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
    if (StatusRVSTop === 'Go' && TimeRVS !== null && TimeRVS !== '') {
      const data = {
        TimeRVS: TimeRVS,
        Area: Area,
        RVSTop: RVSTop,
        StatusRVSTop: StatusRVSTop,
      };


      fetch(`http://192.168.101.236:3001/api/PutDownTimeRVSTOP`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Response status:", response.status);
          console.log(TimeRVS);
          console.log(Area);
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
    };
  }, [TimeRVS, Area, RVSTop, StatusRVSTop]);

  // ...............................................




  // Background
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "0px",
    height: "700px", // Ubah tinggi (height) sesuai kebutuhan Anda
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
              <button >
                <h1 class="text-xl font-sans tracking-tight text-gray-900">
                  | SMT Line 1 - TOP  |
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
        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT TOP CONTROLLER
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

                    style={{ backgroundColor: backgroundColorStatusPickNPlaceTop }}
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
            <section class="antialiased  text-gray-600  px-2" x-data="app">
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
      </main>


    </body>
  );
};

export default SmtTop;
