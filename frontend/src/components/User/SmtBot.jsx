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

const SmtBot = () => {
  // NAVBAR
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleString());

  const [file, setFile] = useState(null);

  // Data2
  const [StatusLine, setStatusLine] = useState("");
  const [Station, setStation] = useState("");


  //  Pemilihan Data Timer Realtime
  const [Button, setButton] = useState("");




  //  STATION Function
  // Printer Bot
  const [PrinterBot, setPrinterBot] = useState("Printer (BOT)");
  const [StatusPrinterBot, setStatusPrinterBot] = useState("");
  const [backgroundColorStatusPrinterBot, setBackgroundColorStatusPrinterBot] =
    useState("");
  const [TimePrinterBot, setTimePrinterBot] = useState(null);
  // ..........................

  // SPI Bot
  const [StatusSPIBot, setStatusSPIBot] = useState("");
  const [SPIBot, setSPIBot] = useState("SPI (BOT)");
  const [backgroundColorStatusSPIBot, setBackgroundColorStatusSPIBot] =
    useState("");
  const [TimeSPIBot, setTimeSPIBot] = useState(null);
  // ..........................


  // PickNPlace Bot
  const [StatusPickNPlaceBot, setStatusPickNPlaceBot] = useState("");
  const [PickNPlaceBot, setPickNPlaceBot] = useState("Pick&Place (BOT)");
  const [backgroundColorStatusPickNPlaceBot, setBackgroundColorStatusPickNPlaceBot] =
    useState("");
  const [TimePickNPlaceBot, setTimePickNPlaceBot] = useState(null);
  // ..........................

  // Reflow Bot
  const [StatusReflowBot, setStatusReflowBot] = useState("");
  const [ReflowBot, setReflowBot] = useState("Reflow (BOT)");
  const [backgroundColorStatusReflowBot, setBackgroundColorStatusReflowBot] =
    useState("");
  const [TimeReflowBot, setTimeReflowBot] = useState(null);
  // ..........................

  // AOI Bot
  const [StatusAOIBot, setStatusAOIBot] = useState("");
  const [AOIBot, setAOIBot] = useState("AOI (BOT)");
  const [backgroundColorStatusAOIBot, setBackgroundColorStatusAOIBot] =
    useState("");
  const [TimeAOIBot, setTimeAOIBot] = useState(null);
  // ..........................



  // RVS Bot
  const [StatusRVSBot, setStatusRVSBot] = useState("");
  const [RVSBot, setRVSBot] = useState("RVS (BOT)");
  const [backgroundColorStatusRVSBot, setBackgroundColorStatusRVSBot] =
    useState("");
  const [TimeRVSBot, setTimeRVSBot] = useState(null);
  // ..........................

  // ---------------------------


  // POPUP
  // ISA
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenOperator, setIsOpenOperator] = useState(false);


  // Poroblem
  const [isOpenLeader, setIsOpenLeader] = useState(false);
  const [isOpenRequest, setIsOpenRequest] = useState(false);
  const [isOpenReturn, setIsOpenReturn] = useState(false);
  const [isOpenReturnRepair, setIsOpenReturnRepair] = useState(false);
  const [isOpenRepair, setIsOpenRepair] = useState(false);
  const [isOpenRequestValidation, setIsOpenRequestValidation] = useState(false);
  const [isOpenRequestValidationReturn, setIsOpenRequestValidationReturn] = useState(false);
  const [isOpenValidation, setIsOpenValidation] = useState(false);
  const [isOpenValidationReturn, setIsOpenValidationReturn] = useState(false);

  // ----------------------


  // fETCHING DATA SCHEDULE PLANING
  const [data, setData] = useState(null);

  const [RealPT1, setRealPT1] = useState("");
  const [RealPT2, setRealPT2] = useState("");
  const [RealPT3, setRealPT3] = useState("");
  const [RealPT4, setRealPT4] = useState("");
  const [RealPD, setRealPD] = useState("");
  const [RealOT, setRealOT] = useState("");
  const [Total, setTotal] = useState("");
  const [ResultsCMA, setResultsCMA] = useState();
  // .......................




  // Fetching Data By Station

  const [OptionData, setOptionData] = useState(null);

  const [dataPrinterBOTLeader, setDataPrinterBOTLeader] = useState(null);
  const [dataPrinterBOTRepair, setDataPrinterBOTRepair] = useState(null);
  const [dataPrinterBOTValidation, setDataPrinterBOTValidation] = useState(null);
  const [dataPrinterBOTValidationReturn, setDataPrinterBOTValidationReturn] = useState(null);
  const [dataPrinterBOTReturnRepair, setDataPrinterBOTReturnRepair] = useState(null);

  const [dataSPIBOTLeader, setDataSPIBOTLeader] = useState(null);
  const [dataSPIBOTRepair, setDataSPIBOTRepair] = useState(null);
  const [dataSPIBOTValidation, setDataSPIBOTValidation] = useState(null);
  const [dataSPIBOTValidationReturn, setDataSPIBOTValidationReturn] = useState(null);
  const [dataSPIBOTReturnRepair, setDataSPIBOTReturnRepair] = useState(null);


  const [dataPickNPlaceBOTLeader, setDataPickNPlaceBOTLeader] = useState(null);
  const [dataPickNPlaceBOTRepair, setDataPickNPlaceBOTRepair] = useState(null);
  const [dataPickNPlaceBOTValidation, setDataPickNPlaceBOTValidation] = useState(null);
  const [dataPickNPlaceBOTValidationReturn, setDataPickNPlaceBOTValidationReturn] = useState(null);
  const [dataPickNPlaceBOTReturnRepair, setDataPickNPlaceBOTReturnRepair] = useState(null);


  const [dataReflowBOTLeader, setDataReflowBOTLeader] = useState(null);
  const [dataReflowBOTRepair, setDataReflowBOTRepair] = useState(null);
  const [dataReflowBOTValidation, setDataReflowBOTValidation] = useState(null);
  const [dataReflowBOTValidationReturn, setDataReflowBOTValidationReturn] = useState(null);
  const [dataReflowBOTReturnRepair, setDataReflowBOTReturnRepair] = useState(null);

  const [dataAOIBOTLeader, setDataAOIBOTLeader] = useState(null);
  const [dataAOIBOTRepair, setDataAOIBOTRepair] = useState(null);
  const [dataAOIBOTValidation, setDataAOIBOTValidation] = useState(null);
  const [dataAOIBOTValidationReturn, setDataAOIBOTValidationReturn] = useState(null);
  const [dataAOIBOTReturnRepair, setDataAOIBOTReturnRepair] = useState(null);


  const [dataRVSBOTLeader, setDataRVSBOTLeader] = useState(null);
  const [dataRVSBOTRepair, setDataRVSBOTRepair] = useState(null);
  const [dataRVSBOTValidation, setDataRVSBOTValidation] = useState(null);
  const [dataRVSBOTValidationReturn, setDataRVSBOTValidationReturn] = useState(null);
  const [dataRVSBOTReturnRepair, setDataRVSBOTReturnRepair] = useState(null);
  // -----------------













  //  fungsi mengambil data dari firebase


  useEffect(() => {
    const ref3 = firebase.database().ref("StatusLine/SMTLine1");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setStatusLine(data);
    });

    const ref10 = firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing");
    ref10.on("value", (snapshot) => {
      const data = snapshot.val();
      setResultsCMA(data);
    });

    const ref11 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1");
    ref11.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT1(data);
    });

    const ref12 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime2");
    ref12.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT2(data);
    });

    const ref13 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime3");
    ref13.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT3(data);
    });

    const ref14 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime4");
    ref14.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT4(data);
    });

    const ref15 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/DownTime");
    ref15.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPD(data);
    });

    const ref16 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/OverTime");
    ref16.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealOT(data);
    });

    const ref17 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/Total");
    ref17.on("value", (snapshot) => {
      const data = snapshot.val();
      setTotal(data);
    });

    const ref8 = firebase.database().ref("SMTLine1BOT/Printer (BOT)");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterBot(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();
        const link = "http://10.14.81.43:3003/RequestMaintenance";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Maintenance SMT LINE 1 Printer (BOT) Status: DOWN - Please Check the Details In Department Side`;

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
      } else if (data === "Return Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/ReturnMaintenance";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `Notification Return Maintenance SMT LINE 1 Printer (BOT) Status: DOWN - Please Check the Details In Department Side`;

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
      } else if (data === "QC") {

        const link = "http://10.14.81.43:3003/RequestQC";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request Quality Control SMT LINE 1 Printer (BOT) Status: DOWN - Please Check the Details In Department Side`;

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
      } else if (data === "QA") {

        const link = "http://10.14.81.43:3003/RequestQA";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-912913885];
        const message = `Notification Request Quality Assurance SMT LINE 1 Printer (BOT) Status: DOWN - Please Check the Details In Department Side`;

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
      }
    });

    const ref9 = firebase.database().ref("SMTLine1BOT/SPI (BOT)");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSPIBot(data);
    });

    const ref18 = firebase.database().ref("/SMTLine1BOT/Pick&Place (BOT)");
    ref18.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlaceBot(data);
    });

    const ref19 = firebase.database().ref("/SMTLine1BOT/Reflow (BOT)");
    ref19.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowBot(data);
    });

    const ref22 = firebase.database().ref("/SMTLine1BOT/AOI (BOT)");
    ref22.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOIBot(data);
    });

    const ref23 = firebase.database().ref("/SMTLine1BOT/RVS (BOT)");
    ref23.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSBot(data);
    });

    // RealTime

    const ref24 = firebase.database().ref("/SMTLine1BOT/PrinterBotTime");
    ref24.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimePrinterBot(data);
    });

    const ref25 = firebase.database().ref("/SMTLine1BOT/SPIBotTime");
    ref25.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimeSPIBot(data);
    });

    const ref26 = firebase.database().ref("/SMTLine1BOT/PickNPlaceBotTime");
    ref26.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimePickNPlaceBot(data);
    });

    const ref27 = firebase.database().ref("/SMTLine1BOT/ReflowBotTime");
    ref27.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimeReflowBot(data);
    });

    const ref28 = firebase.database().ref("/SMTLine1BOT/AOIBotTime");
    ref28.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimeAOIBot(data);
    });

    const ref29 = firebase.database().ref("/SMTLine1BOT/RVSBotTime");
    ref29.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimeRVSBot(data);
    });



    return () => { };
  }, []);

  // ------------------------


  // PRODUCTION FUNTION

  // Realtime Production
  useEffect(() => {
    const startCountdown = (startTime, endTime, productionTimeKey) => {
      const targetTime = new Date();
      const [hours, minutes] = startTime.split(":");
      targetTime.setHours(parseInt(hours, 10));
      targetTime.setMinutes(parseInt(minutes, 10));
      targetTime.setSeconds(0);

      const outTime = new Date();
      const [outHours, outMinutes] = endTime.split(":");
      outTime.setHours(parseInt(outHours, 10));
      outTime.setMinutes(parseInt(outMinutes, 10));
      outTime.setSeconds(0);

      const interval = setInterval(() => {
        const currentTime = new Date();
        let remainingTime = 0;

        if (currentTime >= targetTime && currentTime < outTime) {
          // Start counting only when the current time is within the range
          remainingTime = targetTime.getTime() - currentTime.getTime();

          // Start counting from 0 seconds after the target time is reached
          if (remainingTime <= 0) {
            remainingTime = Math.abs(remainingTime) + 1000; // Add 1 second
          }

          // Send the countdown value to Firebase
          firebase
            .database()
            .ref(`/StatusLine/SMTLine1ProductionTime/${productionTimeKey}`)
            .set(formatTime(remainingTime));
        } else if (currentTime >= outTime) {
          // Stop the countdown if the current time exceeds the end time
          clearInterval(interval);
        }
      }, 1000); // Update every second

      return interval; // Return the interval ID for cleanup
    };

    const formatTime = (time) => {
      const totalSeconds = Math.floor(time / 1000);
      const minutes = Math.floor(totalSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;

      if (hours >= 1) {
        if (remainingMinutes >= 1) {
          return `${hours} jam ${remainingMinutes} menit`;
        } else {
          return `${hours} jam`;
        }
      } else if (minutes >= 1) {
        return `${minutes} menit`;
      } else {
        return `${totalSeconds} detik`;
      }
    };

    let intervals = [];

    const startCountdownForData = (
      startTimeKey,
      endTimeKey,
      productionTimeKey
    ) => {
      if (data && data[startTimeKey] && data[endTimeKey]) {
        const interval = startCountdown(
          data[startTimeKey],
          data[endTimeKey],
          productionTimeKey
        );
        intervals.push(interval);
      }
    };

    startCountdownForData("PT1_IN", "PT1_OUT", "ProductionTime1");
    startCountdownForData("PT2_IN", "PT2_OUT", "ProductionTime2");
    startCountdownForData("PT3_IN", "PT3_OUT", "ProductionTime3");
    startCountdownForData("PT4_IN", "PT4_OUT", "ProductionTime4");
    startCountdownForData("PD_IN", "PD_OUT", "DownTime");
    startCountdownForData("OT_IN", "OT_OUT", "OverTime");

    return () => {
      intervals.forEach((interval) => {
        clearInterval(interval);
      });
    };
  }, [data]);

  // fungsi  schedule
  function formatDate(dateString) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  }

  // Fetching Data Schedule Planing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.101.12:3001/api/ScheduleProduction"
        );
        const jsonData = await response.json();
        const latestData = jsonData[jsonData.length - 1]; // Ambil data terakhir

        setData(latestData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Realtime Total production
  const calculateTotalTime = () => {
    let totalJam = 0;
    let totalMenit = 0;

    // Mengambil nilai dari state
    const waktuPT1 = RealPT1.split(" ");
    const waktuPT2 = RealPT2.split(" ");
    const waktuPT3 = RealPT3.split(" ");
    const waktuPT4 = RealPT4.split(" ");
    const waktuPD = RealPD.split(" ");
    const waktuOT = RealOT.split(" ");

    // Menambahkan waktu PT1
    if (waktuPT1[0] !== "waiting...") {
      if (waktuPT1.length === 4) {
        totalJam += parseInt(waktuPT1[0]);
        totalMenit += parseInt(waktuPT1[2]);
      } else if (waktuPT1.length === 2) {
        totalMenit += parseInt(waktuPT1[0]);
      }
    }

    // Menambahkan waktu PT2
    if (waktuPT2[0] !== "waiting...") {
      if (waktuPT2.length === 4) {
        totalJam += parseInt(waktuPT2[0]);
        totalMenit += parseInt(waktuPT2[2]);
      } else if (waktuPT2.length === 2) {
        totalMenit += parseInt(waktuPT2[0]);
      }
    }

    // Menambahkan waktu PT3
    if (waktuPT3[0] !== "waiting...") {
      if (waktuPT3.length === 4) {
        totalJam += parseInt(waktuPT3[0]);
        totalMenit += parseInt(waktuPT3[2]);
      } else if (waktuPT3.length === 2) {
        totalMenit += parseInt(waktuPT3[0]);
      }
    }

    // Menambahkan waktu PT4
    if (waktuPT4[0] !== "waiting...") {
      if (waktuPT4.length === 4) {
        totalJam += parseInt(waktuPT4[0]);
        totalMenit += parseInt(waktuPT4[2]);
      } else if (waktuPT4.length === 2) {
        totalMenit += parseInt(waktuPT4[0]);
      }
    }

    // Menambahkan waktu PD jika bukan "waiting..."
    if (waktuPD[0] !== "waiting...") {
      if (waktuPD.length === 4) {
        totalJam += parseInt(waktuPD[0]);
        totalMenit += parseInt(waktuPD[2]);
      } else if (waktuPD.length === 2) {
        totalMenit += parseInt(waktuPD[0]);
      }
    }

    // Menambahkan waktu OT jika bukan "waiting..."
    if (waktuOT[0] !== "waiting...") {
      if (waktuOT.length === 4) {
        totalJam += parseInt(waktuOT[0]);
        totalMenit += parseInt(waktuOT[2]);
      } else if (waktuOT.length === 2) {
        totalMenit += parseInt(waktuOT[0]);
      }
    }

    // Mengubah menit menjadi jam jika lebih dari 60
    if (totalMenit >= 60) {
      const tambahanJam = Math.floor(totalMenit / 60);
      totalJam += tambahanJam;
      totalMenit -= tambahanJam * 60;
    }

    // Mengatur nilai hasil penjumlahan ke state Total
    const output = `${totalJam} jam ${totalMenit} menit`;
    setTotal(output);
  };

  useEffect(() => {
    calculateTotalTime();
  }, [RealPT1, RealPT2, RealPT3, RealPT4, RealPD, RealOT]);

  // ------------------------------







  // FUNGSI UPDATE STATUS
  // fungsi mengubah warna status

  const updateStatusPrinterBot = (data) => {
    setStatusPrinterBot(data);
    setBackgroundColorStatusPrinterBot(
       data === "Go"
        ? "#32cd32"
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
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
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
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
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
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
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
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
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
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
        : data === "Go (Return)"
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
                                              : data === "Return QA"
                                                ? "#93c2c4"
                                                : data === "Return QC"
                                                  ? "#93c2c4"
                                                  : data === "Return Production Leader"
                                                    ? "#93c2c4"
                                                    : data === "Return Sub Leader"
                                                      ? "#93c2c4"
                                                      : data === "MAINTENANCE & IT"
                                                        ? "#C00000"
                                                        : data === "Return MAINTENANCE & IT"
                                                          ? "#C00000"
                                                          : "#565454"
    );
  };
  // ---------------------------------------

  // FUNGSI WAKTU

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




  // ------

  const handleCall = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
  };

  const handleCall2 = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
  };




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


  // Printer
  const fetchPrinterBOTLeader = () => fetchData("/getPrinterBOTLeader", setDataPrinterBOTLeader);
  const fetchPrinterBOTRepair = () => fetchData("/getPrinterBOTRepair", setDataPrinterBOTRepair);
  const fetchPrinterBOTValidation = () => fetchData("/getPrinterBOTValidation", setDataPrinterBOTValidation);
  const fetchPrinterBOTValidationReturn = () => fetchData("/getPrinterBOTValidationReturn", setDataPrinterBOTValidationReturn);
  const fetchPrinterBOTReturnRepair = () => fetchData("/getPrinterBOTReturnRepair", setDataPrinterBOTReturnRepair);


  // SPI
  const fetchSPIBOTLeader = () => fetchData("/getSPIBOTLeader", setDataSPIBOTLeader);
  const fetchSPIBOTRepair = () => fetchData("/getSPIBOTRepair", setDataSPIBOTRepair);
  const fetchSPIBOTValidation = () => fetchData("/getSPIBOTValidation", setDataSPIBOTValidation);
  const fetchSPIBOTValidationReturn = () => fetchData("/getSPIBOTValidationReturn", setDataSPIBOTValidationReturn);
  const fetchSPIBOTReturnRepair = () => fetchData("/getSPIBOTReturnRepair", setDataSPIBOTReturnRepair);

  // PickNPlace
  const fetchPickNPlaceBOTLeader = () => fetchData("/getPickNPlaceBOTLeader", setDataPickNPlaceBOTLeader);
  const fetchPickNPlaceBOTRepair = () => fetchData("/getPickNPlaceBOTRepair", setDataPickNPlaceBOTRepair);
  const fetchPickNPlaceBOTValidation = () => fetchData("/getPickNPlaceBOTValidation", setDataPickNPlaceBOTValidation);
  const fetchPickNPlaceBOTValidationReturn = () => fetchData("/getPickNPlaceBOTValidationReturn", setDataPickNPlaceBOTValidationReturn);
  const fetchPickNPlaceBOTReturnRepair = () => fetchData("/getPickNPlaceBOTReturnRepair", setDataPickNPlaceBOTReturnRepair);

  // Reflow
  const fetchReflowBOTLeader = () => fetchData("/getReflowBOTLeader", setDataReflowBOTLeader);
  const fetchReflowBOTRepair = () => fetchData("/getReflowBOTRepair", setDataReflowBOTRepair);
  const fetchReflowBOTValidation = () => fetchData("/getReflowBOTValidation", setDataReflowBOTValidation);
  const fetchReflowBOTValidationReturn = () => fetchData("/getReflowBOTValidationReturn", setDataReflowBOTValidationReturn);
  const fetchReflowBOTReturnRepair = () => fetchData("/getReflowBOTReturnRepair", setDataReflowBOTReturnRepair);

  // AOI
  const fetchAOIBOTLeader = () => fetchData("/getAOIBOTLeader", setDataAOIBOTLeader);
  const fetchAOIBOTRepair = () => fetchData("/getAOIBOTRepair", setDataAOIBOTRepair);
  const fetchAOIBOTValidation = () => fetchData("/getAOIBOTValidation", setDataAOIBOTValidation);
  const fetchAOIBOTValidationReturn = () => fetchData("/getAOIBOTValidationReturn", setDataAOIBOTValidationReturn);
  const fetchAOIBOTReturnRepair = () => fetchData("/getAOIBOTReturnRepair", setDataAOIBOTReturnRepair);

  // RVS
  const fetchRVSBOTLeader = () => fetchData("/getRVSBOTLeader", setDataRVSBOTLeader);
  const fetchRVSBOTRepair = () => fetchData("/getRVSBOTRepair", setDataRVSBOTRepair);
  const fetchRVSBOTValidation = () => fetchData("/getRVSBOTValidation", setDataRVSBOTValidation);
  const fetchRVSBOTValidationReturn = () => fetchData("/getRVSBOTValidationReturn", setDataRVSBOTValidationReturn);
  const fetchRVSBOTReturnRepair = () => fetchData("/getRVSBOTReturnRepair", setDataRVSBOTReturnRepair);




  const fetchData = (endpoint, setDataFunction) => {
    fetch(`http://192.168.101.12:3001/api/${endpoint}`)
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
      fetchPrinterBOTLeader,
      fetchPrinterBOTRepair,
      fetchPrinterBOTValidation,
      fetchPrinterBOTValidationReturn,
      fetchPrinterBOTReturnRepair,

      fetchSPIBOTLeader,
      fetchSPIBOTRepair,
      fetchSPIBOTValidation,
      fetchSPIBOTValidationReturn,
      fetchSPIBOTReturnRepair,

      fetchPickNPlaceBOTLeader,
      fetchPickNPlaceBOTRepair,
      fetchPickNPlaceBOTValidation,
      fetchPickNPlaceBOTValidationReturn,
      fetchPickNPlaceBOTReturnRepair,

      fetchReflowBOTLeader,
      fetchReflowBOTRepair,
      fetchReflowBOTValidation,
      fetchReflowBOTValidationReturn,
      fetchReflowBOTReturnRepair,

      fetchAOIBOTLeader,
      fetchAOIBOTRepair,
      fetchAOIBOTValidation,
      fetchAOIBOTValidationReturn,
      fetchAOIBOTReturnRepair,

      fetchRVSBOTLeader,
      fetchRVSBOTRepair,
      fetchRVSBOTValidation,
      fetchRVSBOTValidationReturn,
      fetchRVSBOTReturnRepair,

    ];

    const intervalIds = fetchDataFunctions.map((func) => setInterval(func, 3000));

    return () => {
      intervalIds.forEach((intervalId) => clearInterval(intervalId));
    };
  }, []);



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
          <div >
            <div class="flex items-center">
              <h1 class="text-xl font-sans tracking-tight text-gray-900">
                | SMT Line 1 - BOT |
              </h1>
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
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
          <button class="w-60 sm:w-36 lg:w-32">
            <a
              href="/UserHome"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              SMT LINE 1
            </a>
          </button>

          <button
            onClick={() => setIsOpen2(true)}
            class="w-60 sm:w-36 lg:w-32 bg-white"
          >
            <svg
              fill="#ff7f50"
              width="23px"
              version="1.1"
              className="justify-center items-center mx-auto animate-bounce"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <g>
                <g>
                  <path
                    d="M256,0C120.477,0,10.224,110.255,10.224,245.778c0,62.171,23.12,121.186,65.206,166.725l-13.707,88.342
			c-0.558,3.601,0.953,7.208,3.91,9.336c1.677,1.207,3.657,1.82,5.647,1.82c1.52,0,3.046-0.357,4.447-1.083l79.241-41.036
			c31.825,14.386,65.788,21.675,101.032,21.675c135.521,0,245.778-110.255,245.778-245.778C501.778,110.255,391.523,0,256,0z
			 M256,472.211c-33.973,0-66.646-7.347-97.114-21.835c-2.731-1.3-5.914-1.245-8.601,0.146l-66.524,34.45l11.51-74.177
			c0.463-2.982-0.493-6.007-2.582-8.184c-40.704-42.373-63.121-98.072-63.121-156.835C29.568,120.922,131.145,19.344,256,19.344
			s226.433,101.577,226.433,226.433S380.856,472.211,256,472.211z"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M256,70.708c-28.236,0-51.208,22.972-51.208,51.208c0,28.236,22.972,51.208,51.208,51.208
			c28.238,0,51.208-22.972,51.208-51.208C307.208,93.678,284.236,70.708,256,70.708z M256,153.78
			c-17.57,0-31.864-14.294-31.864-31.864S238.43,90.052,256,90.052c17.571,0,31.864,14.294,31.864,31.864S273.57,153.78,256,153.78z
			"
                  />
                </g>
              </g>
              <g>
                <g>
                  <path
                    d="M312.758,357.74h-11.013V199.148c0-5.342-4.331-9.672-9.672-9.672h-92.828c-5.342,0-9.672,4.331-9.672,9.672v32.143
			c0,5.342,4.331,9.672,9.672,9.672h11.013v116.777h-11.013c-5.342,0-9.672,4.331-9.672,9.672v32.143
			c0,5.343,4.331,9.673,9.672,9.673h113.514c5.342,0,9.672-4.331,9.672-9.672v-32.143C322.43,362.071,318.099,357.74,312.758,357.74
			z M303.085,389.884h-94.17v-12.8h11.013c5.342,0,9.672-4.331,9.672-9.672V231.291c0-5.342-4.331-9.672-9.672-9.672h-11.013
			v-12.798H282.4v158.593c0,5.342,4.331,9.672,9.672,9.672h11.013V389.884z"
                  />
                </g>
              </g>
            </svg>
          </button>

          <button class="w-60 sm:w-36 lg:w-32">
            <a
              href="/UserHome"
              class="inline-block w-full p-4 400 bg-slate-800 text-white rounded-r-lg hover:text-gray-700 hover:bg-slate-800focus:ring-4 focus:outline-none  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              BACK
            </a>
          </button>
        </ul>

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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusPrinterBot === "QA" || StatusPrinterBot === "QC" || StatusPrinterBot === "Production Leader" || StatusPrinterBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataPrinterBOTValidation);
                        setButton("PrinterBot");
                      } else if (StatusPrinterBot === "Return QA" || StatusPrinterBot === "Return QC" || StatusPrinterBot === "Return Production Leader" || StatusPrinterBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataPrinterBOTValidationReturn);
                        setButton("PrinterBot");
                      } else if (StatusPrinterBot === "Return MAINTENANCE & IT" || StatusPrinterBot === "Return HRGA & EHS" || StatusPrinterBot === "Return PURCHASING,PPIC,MP&L" || StatusPrinterBot === "Return PROCESS ENGINEERING" || StatusPrinterBot === "Return PRODUCT DEVELOPMENT" || StatusPrinterBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataPrinterBOTReturnRepair);
                        setButton("PrinterBot");
                      } else if (StatusPrinterBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataPrinterBOTReturnRepair);
                        setButton("PrinterBot");
                      } else if (StatusPrinterBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataPrinterBOTValidation);
                        setButton("PrinterBot");
                      } else if (StatusPrinterBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataPrinterBOTValidationReturn);
                        setButton("PrinterBot");
                      }
                      setStation(PrinterBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusSPIBot === "QA" || StatusSPIBot === "QC" || StatusSPIBot === "Production Leader" || StatusSPIBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataSPIBOTValidation);
                        setButton("SPIBot");
                      } else if (StatusSPIBot === "Return QA" || StatusSPIBot === "Return QC" || StatusSPIBot === "Return Production Leader" || StatusSPIBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataSPIBOTValidationReturn);
                        setButton("SPIBot");
                      } else if (StatusSPIBot === "Return MAINTENANCE & IT" || StatusSPIBot === "Return HRGA & EHS" || StatusSPIBot === "Return PURCHASING,PPIC,MP&L" || StatusSPIBot === "Return PROCESS ENGINEERING" || StatusSPIBot === "Return PRODUCT DEVELOPMENT" || StatusSPIBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataSPIBOTReturnRepair);
                        setButton("SPIBot");
                      } else if (StatusSPIBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataSPIBOTReturnRepair);
                        setButton("SPIBot");
                      } else if (StatusSPIBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataSPIBOTValidation);
                        setButton("SPIBot");
                      } else if (StatusSPIBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataSPIBOTValidationReturn);
                        setButton("SPIBot");
                      }
                      setStation(SPIBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusPickNPlaceBot === "QA" || StatusPickNPlaceBot === "QC" || StatusPickNPlaceBot === "Production Leader" || StatusPickNPlaceBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataPickNPlaceBOTValidation);
                        setButton("PickNPlaceBot");
                      } else if (StatusPickNPlaceBot === "Return QA" || StatusPickNPlaceBot === "Return QC" || StatusPickNPlaceBot === "Return Production Leader" || StatusPickNPlaceBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataPickNPlaceBOTValidationReturn);
                        setButton("PickNPlaceBot");
                      } else if (StatusPickNPlaceBot === "Return MAINTENANCE & IT" || StatusPickNPlaceBot === "Return HRGA & EHS" || StatusPickNPlaceBot === "Return PURCHASING,PPIC,MP&L" || StatusPickNPlaceBot === "Return PROCESS ENGINEERING" || StatusPickNPlaceBot === "Return PRODUCT DEVELOPMENT" || StatusPickNPlaceBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataPickNPlaceBOTReturnRepair);
                        setButton("PickNPlaceBot");
                      } else if (StatusPickNPlaceBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataPickNPlaceBOTReturnRepair);
                        setButton("PickNPlaceBot");
                      } else if (StatusPickNPlaceBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataPickNPlaceBOTValidation);
                        setButton("PickNPlaceBot");
                      } else if (StatusPickNPlaceBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataPickNPlaceBOTValidationReturn);
                        setButton("PickNPlaceBot");
                      }
                      setStation(PickNPlaceBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusReflowBot === "QA" || StatusReflowBot === "QC" || StatusReflowBot === "Production Leader" || StatusReflowBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataReflowBOTValidation);
                        setButton("ReflowBot");
                      } else if (StatusReflowBot === "Return QA" || StatusReflowBot === "Return QC" || StatusReflowBot === "Return Production Leader" || StatusReflowBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataReflowBOTValidationReturn);
                        setButton("ReflowBot");
                      } else if (StatusReflowBot === "Return MAINTENANCE & IT" || StatusReflowBot === "Return HRGA & EHS" || StatusReflowBot === "Return PURCHASING,PPIC,MP&L" || StatusReflowBot === "Return PROCESS ENGINEERING" || StatusReflowBot === "Return PRODUCT DEVELOPMENT" || StatusReflowBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataReflowBOTReturnRepair);
                        setButton("ReflowBot");
                      } else if (StatusReflowBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataReflowBOTReturnRepair);
                        setButton("ReflowBot");
                      } else if (StatusReflowBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataReflowBOTValidation);
                        setButton("ReflowBot");
                      } else if (StatusReflowBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataReflowBOTValidationReturn);
                        setButton("ReflowBot");
                      }
                      setStation(ReflowBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusAOIBot === "QA" || StatusAOIBot === "QC" || StatusAOIBot === "Production Leader" || StatusAOIBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataAOIBOTValidation);
                        setButton("AOIBot");
                      } else if (StatusAOIBot === "Return QA" || StatusAOIBot === "Return QC" || StatusAOIBot === "Return Production Leader" || StatusAOIBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataAOIBOTValidationReturn);
                        setButton("AOIBot");
                      } else if (StatusAOIBot === "Return MAINTENANCE & IT" || StatusAOIBot === "Return HRGA & EHS" || StatusAOIBot === "Return PURCHASING,PPIC,MP&L" || StatusAOIBot === "Return PROCESS ENGINEERING" || StatusAOIBot === "Return PRODUCT DEVELOPMENT" || StatusAOIBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataAOIBOTReturnRepair);
                        setButton("AOIBot");
                      } else if (StatusAOIBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataAOIBOTReturnRepair);
                        setButton("AOIBot");
                      } else if (StatusAOIBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataAOIBOTValidation);
                        setButton("AOIBot");
                      } else if (StatusAOIBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataAOIBOTValidationReturn);
                        setButton("AOIBot");
                      }
                      setStation(AOIBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
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
                <div className="w-72 pt-2 sm:w-48 lg:w-72 2xl:w-96">
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
                      } else if (StatusRVSBot === "QA" || StatusRVSBot === "QC" || StatusRVSBot === "Production Leader" || StatusRVSBot === "Sub Leader") {
                        setIsOpenRequestValidation(true);
                        setOptionData(dataRVSBOTValidation);
                        setButton("RVSBot");
                      } else if (StatusRVSBot === "Return QA" || StatusRVSBot === "Return QC" || StatusRVSBot === "Return Production Leader" || StatusRVSBot === "Return Sub Leader") {
                        setIsOpenRequestValidationReturn(true);
                        setOptionData(dataRVSBOTValidationReturn);
                        setButton("RVSBot");
                      } else if (StatusRVSBot === "Return MAINTENANCE & IT" || StatusRVSBot === "Return HRGA & EHS" || StatusRVSBot === "Return PURCHASING,PPIC,MP&L" || StatusRVSBot === "Return PROCESS ENGINEERING" || StatusRVSBot === "Return PRODUCT DEVELOPMENT" || StatusRVSBot === "Return ADVANCED MANUFACTURING ENGINEERING") {
                        setIsOpenReturn(true);
                        setOptionData(dataRVSBOTReturnRepair);
                        setButton("RVSBot");
                      } else if (StatusRVSBot === "Return Repair") {
                        setIsOpenReturnRepair(true);
                        setOptionData(dataRVSBOTReturnRepair);
                        setButton("RVSBot");
                      } else if (StatusRVSBot === "Go") {
                        setIsOpenValidation(true);
                        setOptionData(dataRVSBOTValidation);
                        setButton("RVSBot");
                      } else if (StatusRVSBot === "Go (Return)") {
                        setIsOpenValidationReturn(true);
                        setOptionData(dataRVSBOTValidationReturn);
                        setButton("RVSBot");
                      }
                      setStation(RVSBot);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">RVS BOT</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
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
                            {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                              <input
                                type="text"
                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={
                                  Button === "PrinterBot" ? TimePrinterBot :
                                    Button === "SPIBot" ? TimeSPIBot :
                                      Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                        Button === "ReflowBot" ? TimeReflowBot :
                                          Button === "AOIBot" ? TimeAOIBot :
                                            Button === "RVSBot" ? TimeRVSBot :
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
                                {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                                  <input
                                    type="text"
                                    className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                    name="NamaPIC"
                                    readOnly
                                    value={
                                      Button === "PrinterBot" ? TimePrinterBot :
                                        Button === "SPIBot" ? TimeSPIBot :
                                          Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                            Button === "ReflowBot" ? TimeReflowBot :
                                              Button === "AOIBot" ? TimeAOIBot :
                                                Button === "RVSBot" ? TimeRVSBot :
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

      {/*Pop up ReturnRepair  */}
      <td>
        {isOpenReturnRepair ? (
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

                            setIsOpenReturnRepair(false);
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
                            <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong>  Sedang Dalam Return Perbaikan Oleh Team : {OptionData?.Department || ""}
                          </h3>

                          <div className="flex flex-col mt-2">
                            <div class="w-full px-3">
                              <label class="block tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Down Time:
                              </label>
                              {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                                <input
                                  type="text"
                                  className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                  name="NamaPIC"
                                  readOnly
                                  value={
                                    Button === "PrinterBot" ? TimePrinterBot :
                                      Button === "SPIBot" ? TimeSPIBot :
                                        Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                          Button === "ReflowBot" ? TimeReflowBot :
                                            Button === "AOIBot" ? TimeAOIBot :
                                              Button === "RVSBot" ? TimeRVSBot :
                                                ""
                                  }
                                />
                              )}
                            </div>
                            <span className="font-mono mt-2 text-gray-500 ">PIC Repairment :  {OptionData?.ResponseName || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Start AT :  {formatDateAPI(OptionData?.ResponseTime) || ""} </span>
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
{/* ---------------------- */}




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
                          <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Validation Telah Di Tolak / Di kembalikan Oleh : {OptionData?.Requestor || ""} <br /> <span className="text-green-500"> Department : {OptionData?.Department || ""}</span>
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
                            {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                              <input
                                type="text"
                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={
                                  Button === "PrinterBot" ? TimePrinterBot :
                                    Button === "SPIBot" ? TimeSPIBot :
                                      Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                        Button === "ReflowBot" ? TimeReflowBot :
                                          Button === "AOIBot" ? TimeAOIBot :
                                            Button === "RVSBot" ? TimeRVSBot :
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
                          Permintaan Untuk Validation {OptionData?.DepartTo || ""}  :
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
                            {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                              <input
                                type="text"
                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={
                                  Button === "PrinterBot" ? TimePrinterBot :
                                    Button === "SPIBot" ? TimeSPIBot :
                                      Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                        Button === "ReflowBot" ? TimeReflowBot :
                                          Button === "AOIBot" ? TimeAOIBot :
                                            Button === "RVSBot" ? TimeRVSBot :
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


      {/*Pop up Request Return Validation  */}
      <td>
        {isOpenRequestValidationReturn ? (
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

                          setIsOpenRequestValidationReturn(false);
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
                          <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong> Permintaan Untuk Return Validation {OptionData?.DepartTo || ""}  Oleh :
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
                            {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                              <input
                                type="text"
                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={
                                  Button === "PrinterBot" ? TimePrinterBot :
                                    Button === "SPIBot" ? TimeSPIBot :
                                      Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                        Button === "ReflowBot" ? TimeReflowBot :
                                          Button === "AOIBot" ? TimeAOIBot :
                                            Button === "RVSBot" ? TimeRVSBot :
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
                            {(Button === "PrinterBot" || Button === "SPIBot" || Button === "PickNPlaceBot" || Button === "ReflowBot" || Button === "PickNPlaceBotTop" || Button === "ReflowTop" || Button === "AOIBot" || Button === "RVSBot") && (
                              <input
                                type="text"
                                className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-4 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={
                                  Button === "PrinterBot" ? TimePrinterBot :
                                    Button === "SPIBot" ? TimeSPIBot :
                                      Button === "PickNPlaceBot" ? TimePickNPlaceBot :
                                        Button === "ReflowBot" ? TimeReflowBot :
                                          Button === "AOIBot" ? TimeAOIBot :
                                            Button === "RVSBot" ? TimeRVSBot :
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





{/* Status GO Atau Valid */}

      {/*Pop up Validation Return  */}
      <td>
        {isOpenValidationReturn ? (
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

                            setIsOpenValidationReturn(false);
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
                            <strong className="font-bold text-sm ">[{OptionData?.Uid || ""}]</strong>  Return Validation Telah di lakukan
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
                            <span className="font-mono mt-2 text-gray-500 ">PIC Validation :  {OptionData?.ValidationName || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Department :  {OptionData?.DepartTo || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Requestor Validation :  {OptionData?.Requestor || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Validation AT :  {formatDateAPI(OptionData?.ValidationDate) || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Validation Desc :  {OptionData?.ValidationDescription || ""} </span>
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
                            <span className="font-mono mt-2 text-gray-500 ">PIC Validation :  {OptionData?.ValidationName || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Department :  {OptionData?.DepartTo || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Requestor Validation :  {OptionData?.Requestor || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Validation AT :  {formatDateAPI(OptionData?.ValidationDate) || ""} </span>
                            <span className="font-mono mt-2 text-gray-500 ">Validation Desc :  {OptionData?.ValidationDescription || ""} </span>
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








      {/* ISA */}
      <td class="">
        {isOpen2 ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div
                    onClick={() => setIsOpen2(false)}
                    className="flex justify-end p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg italic font-bold  text-center">
                    Production Area: SMT
                  </h2>
                  <div className="bg-white px-4 pt-1 pb-4 flex sm:p-6 sm:pb-4">
                    <div className="overflow-y-auto max-h-96 w-[700px]">
                      {data ? (
                        <div className="bg-white px-4 py-6 sm:p-6 rounded-lg shadow-md">
                          <h3 className="text-lg italic mb-2">
                            Real Production Time
                          </h3>
                          <table>
                            <tr>
                              <td className="font-semibold">
                                Production time 1:
                              </td>
                              <span className="px-4 text-lime-800">
                                {RealPT1}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production time 2:
                              </td>
                              <span className="px-4 text-lime-800">
                                {RealPT2}
                              </span>
                            </tr>

                            <tr>
                              <td className="font-semibold">Planned DT:</td>
                              <span className="px-4 text-lime-800">
                                {RealPD}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production time 3:
                              </td>
                              <span className="px-4 text-lime-800">
                                {RealPT3}
                              </span>
                            </tr>

                            <tr>
                              <td className="font-semibold">
                                Production time 4:
                              </td>
                              <span className="px-4 text-lime-800">
                                {RealPT4}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">Over Time:</td>
                              <span className="px-4 text-lime-800">
                                {RealOT}
                              </span>
                            </tr>
                          </table>
                          <div className="flex mt-2">
                            <td className="font-semibold">Total:</td>
                            <span className="ml-10 w-44 text-center text-white rounded-md bg-lime-700">
                              {Total}
                            </span>
                          </div>
                          <div className="mt-5 bg-green-400 rounded-md ">
                            <p className="font-semibold text-sm">
                              Change Model Allocation:
                            </p>
                            <p>{data.CMA} </p>
                            <p className="text-sm text-black font-mono text-center mt-3 justify-center rounded-xl">
                              {ResultsCMA}{" "}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>

                    <div className="bg-white px-4 w-[700px] ml-3  rounded-lg shadow-md">
                      <h3 className="text-lg italic  mb-2">Production Time</h3>

                      {data ? (
                        <table>
                          <h3 className="flex text-base font-semibold mb-2">
                            Date:{" "}
                            <h1 className="ml-2 font-normal">
                              {formatDate(data.PDATE)}
                            </h1>
                          </h3>
                          <tbody>
                            <tr>
                              <td className="font-semibold">
                                Shift: {data.SHIFT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production Time 1:
                              </td>
                              <span style={{ color: "green" }}>
                                {data.PT1_IN}
                              </span>
                              -
                              <span style={{ color: "red" }}>
                                {data.PT1_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">Break 1:</td>
                              <td className="bg-orange-300 rounded-lg">
                                {data.BR1_IN}-{data.BR1_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production Time 2:
                              </td>
                              <span style={{ color: "green" }}>
                                {data.PT2_IN}
                              </span>
                              -
                              <span style={{ color: "red" }}>
                                {data.PT2_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">Break 2:</td>
                              <td className="bg-orange-300 rounded-lg">
                                {data.BR2_IN}-{data.BR2_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Planned DT:</td>
                              <span style={{ color: "green" }}>
                                {data.PD_IN}
                              </span>
                              -
                              <span style={{ color: "red" }}>
                                {data.PD_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production Time 3:
                              </td>
                              <span style={{ color: "green" }}>
                                {data.PT3_IN}
                              </span>
                              -
                              <span style={{ color: "red" }}>
                                {data.PT3_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">Break 3:</td>
                              <td className="bg-orange-300 rounded-lg">
                                {data.BR3_IN}-{data.BR3_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold">
                                Production time 4:
                              </td>
                              <span style={{ color: "green" }}>
                                {data.PT4_IN}
                              </span>
                              -
                              <span style={{ color: "red" }}>
                                {data.PT4_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold ">Break 4:</td>
                              <td className="bg-orange-300 rounded-lg">
                                {data.BR4_IN}-{data.BR4_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Over Time:</td>
                              <span style={{ color: "green" }}>
                                {data.OT_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.OT_OUT}
                              </span>
                            </tr>
                          </tbody>
                        </table>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>

                    <div className="bg-white px-4 py-6 sm:p-6 ml-3 rounded-lg shadow-md">
                      <h3 className="text-lg  italic mb-1">Action Button</h3>
                      <div className="flex flex-col justify-between">
                        {data.SHIFT == 1 ? (
                          <div>
                            <button
                              onClick={handleCall}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              CALL LEADER
                            </button>
                          </div>
                        ) : (
                          <div>
                            <button
                              onClick={handleCall2}
                              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              CALL LEADER
                            </button>
                          </div>
                        )}
                        <div className="pt-2">
                          <button className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            START CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="pt-2">
                          <button className="bg-red-500 hover:bg-red-700 text-xs  text-white font-bold py-2 px-4 rounded">
                            END CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="pt-2">
                          <button
                            onClick={() => {
                              setIsOpenOperator(true);
                              setIsOpen2(false);
                            }}
                            className="bg-blue-500 hover:bg-blue-700 flex w-40 text-white font-bold py-2 px-4 rounded"
                          >
                            <svg
                              fill="#000000"
                              width="30px"
                              className="flex "
                              height="30px"
                              viewBox="0 0 32 32"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title>contacts</title>
                              <path d="M2.016 28v2.016q0 0.832 0.576 1.408t1.408 0.576v-4h-1.984zM2.016 25.024q0 0.384 0.288 0.704t0.704 0.288h1.984q0.416 0 0.704-0.288t0.32-0.704-0.32-0.704-0.704-0.32h-1.984q-0.416 0-0.704 0.32t-0.288 0.704zM2.016 22.016h1.984v-12h-1.984v12zM2.016 7.008q0 0.416 0.288 0.704t0.704 0.288h1.984q0.416 0 0.704-0.288t0.32-0.704-0.32-0.704-0.704-0.288h-1.984q-0.416 0-0.704 0.288t-0.288 0.704zM2.016 4h1.984v-4q-0.832 0-1.408 0.608t-0.576 1.408v1.984zM6.016 28v2.016q0 0.832 0.576 1.408t1.408 0.576h20q0.832 0 1.408-0.576t0.608-1.408v-28q0-0.832-0.608-1.408t-1.408-0.608h-20q-0.832 0-1.408 0.608t-0.576 1.408v1.984q0.8 0 1.408 0.608t0.576 1.408v1.984q0 0.832-0.576 1.44t-1.408 0.576v12q0.8 0 1.408 0.576t0.576 1.408v2.016q0 0.832-0.576 1.408t-1.408 0.576zM12 21.024q0.224-1.344 1.056-2.464t2.048-1.792q-1.088-1.152-1.088-2.752v-2.016q0-1.632 1.152-2.816t2.848-1.184 2.816 1.184 1.184 2.816v2.016q0 1.6-1.12 2.752 1.184 0.672 2.048 1.792t1.056 2.464q0 1.248-0.864 2.112t-2.144 0.864h-5.984q-1.248 0-2.144-0.864t-0.864-2.112z"></path>
                            </svg>
                            <span className="ml-3">Operator</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>
      <td class="">
        {isOpenOperator ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div
                    onClick={() => {
                      setIsOpenOperator(false);
                      setIsOpen2(true);
                    }}
                    className="flex justify-end p-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold   text-center">
                    Operator Area: SMT Line 1
                  </h2>
                  <div className="bg-white px-4 pt-1 pb-4 flex sm:p-6 sm:pb-4">
                    <div className="bg-white px-4 w-96 py-6 sm:p-6 ml-10 rounded-lg shadow-md">
                      <div className="overflow-y-auto max-h-96 w-[400px]">
                        <div className="bg-white px-4 py-6 sm:p-6 rounded-lg shadow-md">
                          <h3 className="text-lg font-bold mb-4">
                            Today's Login
                          </h3>
                          <div className="ml-6">
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">Leader:</span>
                              <span className="font-bold ml-4">Chrisna </span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                SMT Top Operator:
                              </span>
                              <span className="font-bold ml-4">Adi </span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                SMT Bot Operator:
                              </span>
                              <span className="font-bold ml-4">Rudi</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Drop In Operator:
                              </span>
                              <span className="font-bold ml-4">Budi</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Touch Up Operator:
                              </span>
                              <span className="font-bold ml-4">Angga</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Router Operator:
                              </span>
                              <span className="font-bold ml-4">Nando</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                FCT Operator:
                              </span>
                              <span className="font-bold ml-4">Supardi</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Coating Operator:
                              </span>
                              <span className="font-bold ml-4">Yusuf</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>


    </body>
  );
};

export default SmtBot;
