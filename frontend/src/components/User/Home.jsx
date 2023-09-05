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

const Andonline1 = () => {
  // FIREBASE
  const [showDrawer, setShowDrawer] = useState(false);
  //---------------

  // NAVBAR
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleString());
  // -------------------

  // popup form 1
  const [isOpenOthers, setIsOpenOthers] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenOperator, setIsOpenOperator] = useState(false);
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);
  const [isOpenGeneral2, setIsOpenGeneral2] = useState(false);

  // Data lama
  const [mesin, setMesin] = useState("");
  const [prevStatus, setPrevStatus] = useState("");
  // -------------

  // OTHERS
  const [selectedStatus, setSelectedStatus] = useState("");
  // -------------

  // DATA
  const [NamaPIC, setNamaPIC] = useState("");
  const [NpkPIC, setNpkPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");
  // -------------
  // Data STATION
  const [Line, setLine] = useState("SMT LINE 1");
  const [Area, setArea] = useState("SMT TOP");
  const [Destacker, setDestecker] = useState("Destacker");
  const [Station, setStation] = useState("");
  const [Department, setDepartment] = useState("");
  // -------------
  // SMT LINE 1
  const [StatusLine, setStatusLine] = useState("");
  // -------------

  /// Dropdown
  const namaList = ["CHRISNA FIRMAN"];
  const npkList = ["0301"];
  // -------------



  // DATA SCHEDULE PLANING
  const [data, setData] = useState(null);

  // ---------------------

  // REAL PRODUCTION TIME

  const [RealPT1, setRealPT1] = useState("");
  const [RealPT2, setRealPT2] = useState("");
  const [RealPT3, setRealPT3] = useState("");
  const [RealPT4, setRealPT4] = useState("");
  const [RealPD, setRealPD] = useState("");
  const [RealOT, setRealOT] = useState("");
  const [Total, setTotal] = useState("");

  // -------------

  // CMA
  const [CMATime, setCMATime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [CMARunning, setCMARunning] = useState();
  const [ResultsCMA, setResultsCMA] = useState();

  // -------------

  // Status
  const [Others, setStatusOthers] = useState("");
  const [status, setStatus] = useState("");
  const [Network, setStatusNetwork] = useState("");
  const [Electricity, setStatusElectricity] = useState("");
  const [Aircomp, setStatusAircomp] = useState("");
  const [Shorcomp, setStatusShorcomp] = useState("");
  const [Shorbox, setStatusShorbox] = useState("");
  const [Overtrial, setStatusOvertrial] = useState("");
  const [Overchange, setStatusOverchange] = useState("");
  // ------------------------

  //BACKGROUND / WARNA KOTAK
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundColorOthers, setBackgroundColorOthers] = useState("");
  const [backgroundColorNetwork, setBackgroundColorNetwork] = useState("");
  const [backgroundColorElectricity, setBackgroundColorElectricity] =
    useState("");
  const [backgroundColorAircomp, setBackgroundColorAircomp] = useState("");
  const [backgroundColorShorcomp, setBackgroundColorShorcomp] = useState("");
  const [backgroundColorShorbox, setBackgroundColorShorbox] = useState("");
  const [backgroundColorOvertrial, setBackgroundColorOvertrial] = useState("");
  const [backgroundColorOverchange, setBackgroundColorOverchange] =
    useState("");
  // ------------------

  // Tindakan / Kehadiran
  const [OthersPressed, setOthersPressed] = useState(false);
  const timeoutRefOthers = useRef(null);

  const [NetworkPressed, setNetworkPressed] = useState(false);
  const timeoutRefNetwork = useRef(null);

  const [ElectricityPressed, setElectricityPressed] = useState(false);
  const timeoutRefElectricity = useRef(null);

  const [AircompPressed, setAircompPressed] = useState(false);
  const timeoutRefAircomp = useRef(null);

  const [ShorcompPressed, setShorcompPressed] = useState(false);
  const timeoutRefShorcomp = useRef(null);

  const [ShorboxPressed, setShorboxPressed] = useState(false);
  const timeoutRefShorbox = useRef(null);

  const [OvertrialPressed, setOvertrialPressed] = useState(false);
  const timeoutRefOvertrial = useRef(null);

  const [OverchangePressed, setOverchangePressed] = useState(false);
  const timeoutRefOverchange = useRef(null);
  // ----

  // Selceted Name

  // Tanpa database
  const [selectedOptionDepartment, setSelectedOptionDepartment] =
    useState(null);
  // ....



  const [optionsOperator, setOptionsOperator] = useState([]);
  const [selectedOptionOperator, setSelectedOptionOperator] = useState(null);

  // select operator manufacturing
  const [optionsOperatorManufacturing, setOptionsOperatorManufacturing] =
    useState([]);
  const [
    selectedOptionOperatorManufacturing,
    setSelectedOptionOperatorManufacturing,
  ] = useState(null);
  // .......................


  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

  //  fungsi mengambil data dari firebase
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // Fetching FIrebase
  useEffect(() => {
    const ref2 = firebase.database().ref("StatusLine/SMTLine1");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      setStatusLine(data);
    });

    const ref3 = firebase.database().ref("SMTLine1/Network");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      updateNetwork(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Network) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref4 = firebase.database().ref("SMTLine1/Electricity");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      updateElectricity(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Electricity) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref5 = firebase.database().ref("SMTLine1/Air Compressor");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      updateAircomp(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Air Compressor) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref6 = firebase.database().ref("SMTLine1/Shortage Comp");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      updateShorcomp(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Shortage Comp) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref7 = firebase.database().ref("SMTLine1/Shortage Box FG");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      updateShorbox(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Shortage Box FG) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref8 = firebase.database().ref("SMTLine1/Over Trial");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateOvertrial(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Over Trial) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref9 = firebase.database().ref("SMTLine1/Over Change Model");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateOverchange(data);
      if (data === "Down") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();
        const link = "http://10.14.81.43:3003/RequestGeneral";
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-921205810];
        const message = `Notification SMT LINE 1 Down  (Problem : Over Change Model) - Please Click The Link To See The Poblem:\n\n ${link}`;

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

    const ref17 = firebase.database().ref("SMTLine1/Others");
    ref17.on("value", (snapshot) => {
      const data = snapshot.val();
      updateOthers(data);
      if (data === "HRGA & EHS") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : HRGA & EHS] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "MAINTENANCE & IT") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : MAINTENANCE & IT] - Please Click The Link To See The Poblem:\n\n ${link}`;
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
      } else if (data === "PURCHASING,PPIC,MP&L") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();
        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : PURCHASING,PPIC,MP&L] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "PROCESS ENGINEERING") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : PROCESS ENGINEERING] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "ADVANCED MANUFACTURING ENGINEERING") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : ADVANCED MANUFACTURING ENGINEERING] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "PRODUCT DEVELOPMENT") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : PRODUCT DEVELOPMENT] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "QA") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : QA] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      } else if (data === "QC") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestOthers";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-921205810];
              const message = `Notification SMT LINE 1 Down  [Department Call : QC] - Please Click The Link To See The Poblem:\n\n ${link}`;

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
      }
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

    return () => { };
  }, []);

  // ---------------------

  // Realtime production
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

  // CMA WAKTU / FIREBASE

  let CMAInterval;
  useEffect(() => {
    if (CMARunning) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      CMAInterval = setInterval(() => {
        setCMATime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);
          const newTime = {
            hours: newHours,
            minutes: newMinutes % 60,
            seconds: newSeconds % 60,
          };
          firebase
            .database()
            .ref("StatusLine/SMTLine1CMALastTime")
            .set(newTime);
          firebase
            .database()
            .ref("/StatusLine/SMTLine1CMAOnGoing")
            .set(
              `${newTime.hours} Jam ${newTime.minutes} Menit ${newTime.seconds} Detik`
            );
          return newTime;
        });
      }, 1000); // 1 detik = 1000 ms
    }

    // Mengambil waktu terakhir yang dihitung dari Firebase saat halaman dimuat ulang
    firebase
      .database()
      .ref("StatusLine/SMTLine1CMALastTime")
      .once("value")
      .then((snapshot) => {
        const lastTime = snapshot.val();
        if (lastTime) {
          setCMATime(lastTime);
        }
      });

    return () => clearInterval(CMAInterval);
  }, [CMARunning]);

  // start stop CMA
  const startCMA = () => {
    setCMATime({ hours: 0, minutes: 0, seconds: 0 });
    firebase
      .database()
      .ref("/StatusLine/SMTLine1CMAOnGoing")
      .set("0 Jam 0 Menit 0 Detik");
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/hours").set(0);
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/minutes").set(0);
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/seconds").set(0);
    setCMARunning(true);
  };

  const stopCMA = (event) => {
    const data = {
      ResultsCMA: ResultsCMA,
    };

    firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing").set("Waiting...");
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/hours").set("0");
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/minutes").set("0");
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime/seconds").set("0");
    setCMARunning(false);
    alert("Change Model Telah Selesai Data Sudah Terinput");
    window.location.reload();


    fetch("http://192.168.101.12:3001/api/UpdateCMA", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error updating data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // ----

  // FETCHING SCHEDULE
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

  // ----

  //  FUNGSI WAKTU
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
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  // ----

  // FUNGSI UPDATE STATUS
  const updateStatus = (data) => {
    setStatus(data);
    setBackgroundColor(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Leader"
            ? "#C00000"
            : data === "Maintenance"
              ? "#be4f62"
              : data === "PPIC"
                ? "#7A6544"
                : data === "QA"
                  ? "#93C2C4"
                  : data === "QC"
                    ? "#BDD0D1"
                    : "#565454"
    );
  };

  // UPDATE Others
  const updateOthers = (data) => {
    setStatusOthers(data);
    setBackgroundColorOthers(
      data === "Go"
        ? "rgb(54, 83, 20)"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Leader"
          ? "#C00000"
          : data === "Return Leader"
          ? "#C00000"
          : data === "HRGA & EHS"
            ? "#A61D00"
            : data === "Return HRGA & EHS"
            ? "#A61D00"
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
                      : data === "Return QA"
                      ? "#93C2C4"
                      : data === "QC"
                        ? "#BDD0D1"
                        : data === "Return QC"
                        ? "#BDD0D1"
                        : data === "MAINTENANCE & IT"
                          ? "#be4f62"
                          : data === "Return MAINTENANCE & IT"
                          ? "#be4f62"
                          : "#565454"
    );
  };

  



  // UPDATE Network
  const updateNetwork = (data) => {
    setStatusNetwork(data);
    setBackgroundColorNetwork(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE Electricity
  const updateElectricity = (data) => {
    setStatusElectricity(data);
    setBackgroundColorElectricity(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE Aircomp
  const updateAircomp = (data) => {
    setStatusAircomp(data);
    setBackgroundColorAircomp(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE Shorcomp
  const updateShorcomp = (data) => {
    setStatusShorcomp(data);
    setBackgroundColorShorcomp(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE Shorbox
  const updateShorbox = (data) => {
    setStatusShorbox(data);
    setBackgroundColorShorbox(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE OverTrial
  const updateOvertrial = (data) => {
    setStatusOvertrial(data);
    setBackgroundColorOvertrial(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // UPDATE Overchangemodel
  const updateOverchange = (data) => {
    setStatusOverchange(data);
    setBackgroundColorOverchange(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
          ? "#E9CE08"
          : data === "Down"
            ? "#C00000"
            : "#565454"
    );
  };

  // ----

  // Submit
  const submit = () => {
    const data = {
      NamaPIC: NamaPIC,
      NpkPIC: NpkPIC,
      MachineName: mesin,
      MachineArea: Area,
      MachineLine: Line,
      MachineStation: Destacker,
      Kerusakan: Kerusakan,
    };

    let department;
    switch (selectedStatus) {
      case "QC":
        department = "QC";
        break;
      case "QA":
        department = "QA";
        break;
      default:
        department = "";
    }

    fetch(`http://192.168.101.12:3001/api/${department}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          setIsOpenOthers(false);
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Submit General
  const SubmitGeneral = (event) => {
    if (!NamaPIC || !Line || !Kerusakan) {
      alert("Harap isi semua kolom!");
      return;
    }

    const data = {
      NamaPIC: NamaPIC,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.12:3001/api/General`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert(`Permintaan Bantuan ${Station} Segera Diproses`);
          firebase.database().ref(`SMTLine1/${Station}`).set("Down");
          firebase.database().ref("StatusLine/SMTLine1").set("Down");
          setIsOpenGeneral(false);
          window.location.reload();
          event.preventDefault();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ------

  // Submit Others
  const SubmitOthers = (event) => {
    if (!NamaPIC || !Line || !Kerusakan || !Department) {
      alert("Harap isi semua kolom!");
      return;
    }

    const data = {
      NamaPIC: NamaPIC,
      Line: Line,
      Department: Department,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.12:3001/api/Others`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Permintaan Bantuan Department Terkait Segera Di Proses");
          console.log();
          firebase.database().ref("SMTLine1/Others").set(`${Department}`);
          firebase.database().ref("StatusLine/SMTLine1").set("Down");
          setIsOpenOthers(false);
          window.location.reload();
          event.preventDefault();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // ------

  // Tindakan / Kehadiran
  const handleNetworkPress = () => {
    if (Network === "Down") {
      setNetworkPressed(true);
      timeoutRefNetwork.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Network").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleNetworkRelease = () => {
    setNetworkPressed(false);
    clearTimeout(timeoutRefNetwork.current);
  };

  const handleElectricityPress = () => {
    if (Electricity === "Down") {
      setElectricityPressed(true);
      timeoutRefElectricity.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Electricity").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleElectricityRelease = () => {
    setElectricityPressed(false);
    clearTimeout(timeoutRefElectricity.current);
  };

  const handleOthersPress = () => {
    if (
      Others === "HRGA & EHS" ||
      Others === "PURCHASING,PPIC,MP&L" ||
      Others === "PROCESS ENGINEERING" ||
      Others === "PRODUCT DEVELOPMENT" ||
      Others === "ADVANCED MANUFACTURING ENGINEERING" ||
      Others === "QA" ||
      Others === "QC" ||
      Others === "MAINTENANCE & IT"
    ) {
      setOthersPressed(true);
      timeoutRefOthers.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Others").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleOthersRelease = () => {
    setOthersPressed(false);
    clearTimeout(timeoutRefOthers.current);
  };

  const handleAircompPress = () => {
    if (Aircomp === "Down") {
      setAircompPressed(true);
      timeoutRefAircomp.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Air Compressor").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleAircompRelease = () => {
    setAircompPressed(false);
    clearTimeout(timeoutRefAircomp.current);
  };

  const handleShorcompPress = () => {
    if (Shorcomp === "Down") {
      setShorcompPressed(true);
      timeoutRefShorcomp.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Shortage Comp").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleShorcompRelease = () => {
    setShorcompPressed(false);
    clearTimeout(timeoutRefShorcomp.current);
  };

  const handleShorboxPress = () => {
    if (Shorbox === "Down") {
      setShorboxPressed(true);
      timeoutRefShorbox.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Shortage Box FG").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleShorboxRelease = () => {
    setShorboxPressed(false);
    clearTimeout(timeoutRefShorbox.current);
  };

  const handleOvertrialPress = () => {
    if (Overtrial === "Down") {
      setOvertrialPressed(true);
      timeoutRefOvertrial.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Over Trial").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleOvertrialRelease = () => {
    setOvertrialPressed(false);
    clearTimeout(timeoutRefOvertrial.current);
  };

  const handleOverchangePress = () => {
    if (Overchange === "Down") {
      setOverchangePressed(true);
      timeoutRefOverchange.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        firebase.database().ref("SMTLine1/Over Change Model").set("Go");
        window.location.reload();
      }, 3000);
    }
  };
  const handleOverchangeRelease = () => {
    setOverchangePressed(false);
    clearTimeout(timeoutRefOverchange.current);
  };

  // ------

  // Function Call Leader
  const handleCall = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
  };

  const handleCall2 = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
  };
  // ------



  //  Select Nama Operator
  const handleSelectChangeOperatorManufacturing = (
    selectedOptionOperatorManufacturing
  ) => {
    setSelectedOptionOperatorManufacturing(selectedOptionOperatorManufacturing);
    setNamaPIC(selectedOptionOperatorManufacturing.value);
  };

  useEffect(() => {
    fetch("http://192.168.101.12:3001/api/Employee_Operator_Manufacturing")
      .then((response) => response.json())
      .then((data) => {
        const transformedOptions = data.map((item) => ({
          value: item.nama_emp,
          label: item.nama_emp,
        }));
        setOptionsOperatorManufacturing(transformedOptions);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  // ...............................................





  //  Select Nama Operator
  const handleSelectChangeOperator = (selectedOptionOperator) => {
    setSelectedOptionOperator(selectedOptionOperator);
    setNamaPIC(selectedOptionOperator.value);
  };


  useEffect(() => {
    fetch("http://192.168.101.12:3001/api/Employee_Operator")
      .then((response) => response.json())
      .then((data) => {
        const transformedOptions = data.map((item) => ({
          value: item.nama_emp,
          label: item.nama_emp,
        }));
        setOptionsOperator(transformedOptions);
      })
      .catch((error) => {
        // Tangani error jika permintaan gagal
        console.error("Error fetching data:", error);
      });
  }, []);

  // ...............................................

  // Tanpa Database Select Department

  const OptionsDepartment = [
    { value: "", label: "-- Pilih Depart --" },
    { value: "PURCHASING,PPIC,MP&L", label: "PURCHASING,PPIC,MP&L" },
    { value: "PROCESS ENGINEERING", label: "PROCESS ENGINEERING" },
    { value: "PRODUCT DEVELOPMENT", label: "PRODUCT DEVELOPMENT" },
    {
      value: "ADVANCED MANUFACTURING ENGINEERING",
      label: "ADVANCED MANUFACTURING ENGINEERING",
    },
    { value: "QA", label: "QA" },
    { value: "QC", label: "QC" },
    { value: "HRGA & EHS", label: "HRGA & EHS" },
    { value: "MAINTENANCE & IT", label: "MAINTENANCE & IT" },
  ];

  const handleSelectDepartment = (selectedOptionDepartment) => {
    setSelectedOptionDepartment(selectedOptionDepartment);
    setDepartment(selectedOptionDepartment.value);
  };

  // ...............................................

  // redresfh from other page
  // Check if the "refresh" parameter is present in the URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('refresh') === 'true') {
  // Refresh the page
  window.location.reload();
}




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
            <a href="/Andonline1">
              <div class="flex-shrink-0">
                <img
                  src={process.env.PUBLIC_URL + "/smt.jpeg"}
                  alt="Logo"
                  class="h-6 ml-4 sm:h-9 bg-white rounded-md"
                />
              </div>
            </a>
          </div>
          <div className="flex">
            <p class="text-gray-500 text-sm">{formattedTime}</p>
          </div>
        </div>
      </nav>

      <header class="bg-white shadow mb-3">
        <div class="mx-auto max-w-7xl px-4 ">
          <header class="bg-white shadow mb-3">
            <div class="mx-auto max-w-7xl px-4">
              <div>
                <div class="flex items-center">
                  <h1 class="text-xl font-sans tracking-tight text-gray-900">
                    | Andon 2.0 |
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
                    <span class="ml-4 text-green-500">Running </span>|
                    {/* <a href="Tickets">
                    <span class="ml-4 mr-2 text-slate-900">Tickets </span>
                    </a> */}
                  </h1>{" "}
                  {/* <a href="Tickets">
                    <svg
                      width="26px"
                      viewBox="0 0 24 24"
                      className="mt-1"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 15L15 9"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                      <path
                        d="M15.5 14.5C15.5 15.0523 15.0523 15.5 14.5 15.5C13.9477 15.5 13.5 15.0523 13.5 14.5C13.5 13.9477 13.9477 13.5 14.5 13.5C15.0523 13.5 15.5 13.9477 15.5 14.5Z"
                        fill="#1C274C"
                      />
                      <path
                        d="M10.5 9.5C10.5 10.0523 10.0523 10.5 9.5 10.5C8.94772 10.5 8.5 10.0523 8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5C10.0523 8.5 10.5 8.94772 10.5 9.5Z"
                        fill="#1C274C"
                      />
                      <path
                        d="M14.0037 4H9.9963C6.21809 4 4.32899 4 3.15525 5.17157C2.27661 6.04858 2.0557 7.32572 2.00016 9.49444C1.99304 9.77248 2.22121 9.99467 2.49076 10.0652C3.35074 10.2901 3.98521 11.0711 3.98521 12C3.98521 12.9289 3.35074 13.7099 2.49076 13.9348C2.22121 14.0053 1.99304 14.2275 2.00016 14.5056C2.0557 16.6743 2.27661 17.9514 3.15525 18.8284M18 4.10041C19.3086 4.22774 20.1885 4.51654 20.8448 5.17157C21.7234 6.04858 21.9443 7.32572 21.9998 9.49444C22.007 9.77248 21.7788 9.99467 21.5092 10.0652C20.6493 10.2901 20.0148 11.0711 20.0148 12C20.0148 12.9289 20.6493 13.7099 21.5092 13.9348C21.7788 14.0053 22.007 14.2275 21.9998 14.5056C21.9443 16.6743 21.7234 17.9514 20.8448 18.8284C19.671 20 17.7819 20 14.0037 20H9.9963C8.82865 20 7.84143 20 7 19.9654"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>{" "}
                  </a> */}
                </div>
              </div>
            </div>
          </header>
        </div>
      </header>

      {/*  */}
      <main>
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
          <button class="w-60 sm:w-36 lg:w-32">
            <a
              href="/Andonline1"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4  active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              SMT Line 1
            </a>
          </button>

          <button class="w-60 sm:w-36 lg:w-32 bg-white">
            <a href="Inputsche">
              <svg
                width="20px"
                className="justify-center items-center mx-auto"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 20H6C3.79086 20 2 18.2091 2 16V7C2 4.79086 3.79086 3 6 3H17C19.2091 3 21 4.79086 21 7V10"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 2V4"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15 2V4"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2 8H21"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.5 15.6429L17 17.1429"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="17"
                  cy="17"
                  r="5"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </button>
          <button
            onClick={() => setIsOpen2(true)}
            class="w-60 sm:w-36 lg:w-32 bg-white rounded-r-lg"
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
        </ul>

        <div className="pt-7">
          <div class="pt-2 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <a href="UserSMTTop">
                    <div
                      // style={{ backgroundColor: backgroundColorDesteckerTop }}
                      // value={desteckerTop}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl "
                    // onClick={
                    //   desteckerTop === "Leader" ? () => setIsOpen(true) : null
                    // }
                    >
                      <header class="px-5 py-4  ">
                        <div class="italic  text-center text-white">
                          SMT TOP
                        </div>
                      </header>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <a href="UserSMTBot">
                    <div
                      // style={{ backgroundColor: backgroundColor }}
                      // value={status}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                    >
                      <header class="px-5 py-4  ">
                        <div class="italic  text-center text-white">
                          SMT BOT
                        </div>
                      </header>
                    </div>
                  </a>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <a href="UserSMTBe">
                    <div
                      // style={{ backgroundColor: backgroundColor }}
                      // value={status}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                    >
                      <header class="px-5 py-4  ">
                        <div class="italic  text-center text-white">
                          SMT BACKEND
                        </div>
                      </header>
                    </div>
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            General
          </span>
        </div>

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    onClick={() => {
                      setStation("Electricity");
                      if (Electricity === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleElectricityPress}
                    onMouseUp={handleElectricityRelease}
                    onMouseLeave={handleElectricityRelease}
                    onTouchStart={handleElectricityPress}
                    onTouchEnd={handleElectricityRelease}
                    style={{ backgroundColor: backgroundColorElectricity }}
                    value={Electricity}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        ELECTRICITY
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
                    
                    value={Network}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                    onClick={() => {
                      setStation("Network");
                      if (Network === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleNetworkPress}
                    onMouseUp={handleNetworkRelease}
                    onMouseLeave={handleNetworkRelease}
                    onTouchStart={handleNetworkPress}
                    onTouchEnd={handleNetworkRelease}
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">NETWORK (Close)</div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    onClick={() => {
                      setStation("Air Compressor");
                      if (Aircomp === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleAircompPress}
                    onMouseUp={handleAircompRelease}
                    onMouseLeave={handleAircompRelease}
                    onTouchStart={handleAircompPress}
                    onTouchEnd={handleAircompRelease}
                    style={{ backgroundColor: backgroundColorAircomp }}
                    value={Aircomp}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        AIR COMPRESSOR
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}

                <button className="animate-pulse w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    onClick={() => {
                      if (Others === "Go") {
                        setIsOpenOthers(true);
                      }
                    }}
                    style={{ backgroundColor: backgroundColorOthers }}
                    value={Others}
                    onMouseDown={handleOthersPress}
                    onMouseUp={handleOthersRelease}
                    onMouseLeave={handleOthersRelease}
                    onTouchStart={handleOthersPress}
                    onTouchEnd={handleOthersRelease}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-full "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center  text-white">OTHERS</div>
                    </header>
                  </button>
                </button>
              </div>
            </section>
          </div>
        </div>

        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            Other
          </span>
        </div>

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    onClick={() => {
                      setStation("Shortage Comp");
                      if (Shorcomp === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleShorcompPress}
                    onMouseUp={handleShorcompRelease}
                    onMouseLeave={handleShorcompRelease}
                    onTouchStart={handleShorcompPress}
                    onTouchEnd={handleShorcompRelease}
                    style={{ backgroundColor: backgroundColorShorcomp }}
                    value={Shorcomp}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        SHORTAGE COMP.
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <button className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    onClick={() => {
                      setStation("Shortage Box FG");
                      if (Shorbox === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleShorboxPress}
                    onMouseUp={handleShorboxRelease}
                    onMouseLeave={handleShorboxRelease}
                    onTouchStart={handleShorboxPress}
                    onTouchEnd={handleShorboxRelease}
                    style={{ backgroundColor: backgroundColorShorbox }}
                    value={Shorbox}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        SHORTAGE BOX FG
                      </div>
                    </header>
                  </div>
                </button>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <button className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    onClick={() => {
                      setStation("Over Trial");
                      if (Overtrial === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleOvertrialPress}
                    onMouseUp={handleOvertrialRelease}
                    onMouseLeave={handleOvertrialRelease}
                    onTouchStart={handleOvertrialPress}
                    onTouchEnd={handleOvertrialRelease}
                    style={{ backgroundColor: backgroundColorOvertrial }}
                    value={Overtrial}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        OVER TRIAL
                      </div>
                    </header>
                  </div>
                </button>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <button className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    onClick={() => {
                      setStation("Over Change Model");
                      if (Overchange === "Go") {
                        setIsOpenGeneral(true);
                      }
                    }}
                    onMouseDown={handleOverchangePress}
                    onMouseUp={handleOverchangeRelease}
                    onMouseLeave={handleOverchangeRelease}
                    onTouchStart={handleOverchangePress}
                    onTouchEnd={handleOverchangeRelease}
                    style={{ backgroundColor: backgroundColorOverchange }}
                    value={Overchange}
                    class="w-full max-w-sm   bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-sm text-center text-white">
                        OVER CHANGE MODEL
                      </div>
                    </header>
                  </div>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
      {/* <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <td class="p-1   ">
                      {status === "Go" || status === "Leader" || status === "Maintenance" ? (
                        <>
                          <span className="text-xs uppercase text-black font-bold">
                            TIME
                          </span>
                          <div id="timer" class="font-medium  text-white">
                            {timer}
                          </div>
                        </>
                      ) : null}
                    </td>
                  </table>
                </div> */}

      {/* POP UP  1*/}
      {isOpenOthers ? (
        <>
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

              <div
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white h-[490px]  px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <form
                      className="w-full max-w-lg"
                      onSubmit={(e) => {
                        e.preventDefault();
                        database.ref("Mesin/Mesin1").set(selectedStatus);
                      }}
                    >
                      <div className="justify-center  mb-2 items-center flex font-bold uppercase text-black ">
                        <span>Request</span>
                      </div>
                      <div className="flex flex-wrap -mx-3">
                        <div className="w-full px-1">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-first-name"
                          >
                            Masukan Nama Anda
                          </label>
                          <Select
                            value={selectedOptionOperator}
                            onChange={handleSelectChangeOperator}
                            options={optionsOperator}
                            isSearchable
                            placeholder="Pilih Nama"
                          />
                        </div>
                      </div>

                      {/*Status*/}
                      <div className="mb-4 mt-2">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-city"
                        >
                          Depart To
                        </label>
                        <Select
                          value={selectedOptionDepartment}
                          onChange={handleSelectDepartment}
                          options={OptionsDepartment}
                          isSearchable
                          placeholder="Pilih Department"
                        />
                      </div>
                      <div class="flex flex-wrap -mx-3 ">
                        <div class="w-full px-1 mb-2">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-city"
                          >
                            Line
                          </label>
                          <span
                            class="appearance-none block w-full bg-gray-200  text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="ICT"
                            name="MachineName"
                          >
                            {Line}
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mt-3 ">
                        <div class="w-full px-1">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                            for="grid-password"
                          >
                            Problem
                          </label>
                          <input
                            class="appearance-none block w-full bg-white border-b-slate-900 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder=""
                            name="Kerusakan"
                            onChange={(e) => {
                              setKerusakan(e.target.value);
                            }}
                            required
                          />
                          <p class="text-gray-600 text-xs italic">
                            Laporkan Permasalahan Yang Ditemukan
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-end mt-7">

                        <button
                          class="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                          type="submit"
                          onClick={SubmitOthers}
                        >
                          Yes, I'm sure
                        </button>
                        <button
                          class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                          onClick={() => setIsOpenOthers(false)}
                        >
                          No, cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
        </>
      ) : null}

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
                          <button
                            onClick={startCMA}
                            className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          >
                            START CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="pt-2">
                          <button
                            onClick={stopCMA}
                            className="bg-red-500 hover:bg-red-700 text-xs  text-white font-bold py-2 px-4 rounded"
                          >
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

            <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
          </>
        ) : null}
      </td>

      {/* isOpenOperator */}
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
                    Operator Area: SMT
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
                              <span className="font-bold ml-4">Chrisna </span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                SMT Bot Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Drop In Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Touch Up Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Router Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                FCT Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
                            <p className="mb-2 flex">
                              <span className="font-bold w-40">
                                Coating Operator:
                              </span>
                              <span className="font-bold ml-4">Chrisna</span>
                            </p>
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

      <td>
        {isOpenGeneral ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="sm:flex sm:items-start">
                    <form>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="p-6 text-center">
                          <svg
                            aria-hidden="true"
                            class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                          <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-normal text-gray-500 dark:text-gray-400">
                            Apakah Anda Yakin Akan Meminta Bantuan {Station}?
                          </h3>
                          <div class="flex flex-wrap -mx-3 ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                              >
                                Masukan Nama Anda
                              </label>
                              <Select
                                value={selectedOptionOperatorManufacturing}
                                onChange={handleSelectChangeOperatorManufacturing}
                                options={optionsOperatorManufacturing}
                                isSearchable
                                placeholder="Pilih Nama"
                              />
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Line
                              </label>
                              <input
                                type="text"
                                class="appearance-none block w-full text-center  font-semibold bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                readOnly
                                value={Line}
                              />
                            </div>
                          </div>
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Problem
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 border  border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password"
                              type="text"
                              placeholder=""
                              name="Kerusakan"
                              onChange={(e) => {
                                setKerusakan(e.target.value);
                              }}
                              required
                            />
                            <p class="text-gray-600 text-xs mb-2 italic">
                              Laporkan Permasalahan Yang Ditemukan
                            </p>
                          </div>
                          <div class="flex justify-center">
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              onClick={SubmitGeneral}
                              class="text-white bg-emerald-600 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Yes, I'm sure
                            </button>
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              onClick={() => setIsOpenGeneral(false)}
                              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              No, cancel
                            </button>
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

      <td>
        {isOpenGeneral2 ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block align-bottom  rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg "
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="sm:flex sm:items-start">
                    <form>
                      <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="p-6 text-center">
                          <svg
                            fill="#808080"
                            class="mx-auto mb-4 text-gray-400 w-32 h-14 dark:text-gray-200"
                            viewBox="0 0 32 32"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <title>repair</title>
                            <path d="M27.472 25.67l3.511 2.664c0.764-1.983 0.2-4.311-1.579-5.661-1.368-1.038-3.108-1.248-4.61-0.713l-0.532-0.403-0.070-0.132c0.37-0.526 0.691-1.076 0.961-1.644l2.417-0.067 0.495-1.58-1.953-1.438c0.095-0.591 0.142-1.189 0.143-1.786l2.167-1.1-0.229-1.64-2.392-0.468c-0.2-0.688-0.466-1.362-0.798-2.011l1.426-1.973-0.954-1.354-2.347 0.682c-0.029-0.031-0.058-0.062-0.088-0.093-0.375-0.388-0.771-0.743-1.184-1.066l0.451-2.321-1.435-0.827-1.781 1.551c-0.577-0.232-1.169-0.415-1.769-0.549l-0.584-2.291-1.651-0.135-0.951 2.172c-0.492 0.030-0.982 0.091-1.468 0.185l-1.454-1.877-1.568 0.533-0.008 2.39c-0.664 0.342-1.303 0.753-1.904 1.236l-2.215-0.998-1.134 1.207 1.134 2.151c-0.366 0.521-0.683 1.067-0.951 1.63l-2.433 0.067-0.495 1.58 1.966 1.448c-0.094 0.586-0.142 1.179-0.144 1.772l-2.18 1.106 0.229 1.64 2.394 0.468c0.143 0.498 0.319 0.989 0.531 1.468l-1.58 1.959 0.881 1.402 2.453-0.573c0.154 0.181 0.315 0.359 0.482 0.532 0.353 0.365 0.723 0.701 1.107 1.008l-0.477 2.459 1.435 0.827 1.873-1.632c0.538 0.216 1.089 0.389 1.649 0.519l0.612 2.401 1.651 0.135 0.991-2.263c0.686-0.041 1.369-0.144 2.041-0.308l1.576 1.825 1.538-0.616-0.083-1.685 0.974 0.739c-0.115 1.597 0.543 3.233 1.909 4.271 1.778 1.349 4.172 1.266 5.877-0.004l-3.51-2.663c-0.619-0.469-0.762-1.358-0.312-1.952s1.328-0.672 1.946-0.202zM13.845 23.736c-1.985-0.224-3.892-1.12-5.388-2.669-3.421-3.538-3.323-9.167 0.216-12.587s9.17-3.36 12.59 0.178c3.012 3.115 3.293 7.878 0.903 11.308l-5.822-4.417c0.11-1.589-0.561-3.21-1.928-4.247-1.778-1.349-4.172-1.266-5.877 0.004l3.51 2.663c0.618 0.469 0.78 1.334 0.33 1.929s-1.346 0.696-1.964 0.226l-3.51-2.663c-0.763 1.983-0.2 4.311 1.579 5.661 1.367 1.036 3.121 1.229 4.628 0.688l4.617 3.503c-1.254 0.428-2.582 0.569-3.883 0.422z"></path>
                          </svg>
                          <h3 class="mb-5 text-lg sm:text-sm lg:text-lg font-normal text-gray-500 dark:text-gray-400">
                            Fitur Ini Sedang Di Kembangkan Silakhan Kembali Lagi
                            Nanti !!{" "}
                          </h3>

                          <div class="flex justify-center">
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              onClick={() => setIsOpenGeneral2(false)}
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                            >
                              Back
                            </button>
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
    </body>
  );
};

export default Andonline1;
