import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL:
    "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const SmtTop = () => {
  const [Station, setStation] = useState("");
  const [NamaPIC, setNamaPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");

  // NAVBAR
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleString());
  // -----

  // FIREBASE
  const [showDrawer, setShowDrawer] = useState(false);
  //

  // SUBMIT FILE
  const [file, setFile] = useState(null);
  // -------

  // SMT TOP LINE 1
  // STATUS LINE

  const [StatusLine, setStatusLine] = useState("");
  const [Line, setLine] = useState("SMT LINE 1");
  const [Area, setArea] = useState("SMT TOP");

  // //////

  //  STATION
  const [DestackerTop, setDestackerTop] = useState("Destacker (TOP)");
  const [StatusdestackerTop, setStatusdestackerTop] = useState("");
  const [StatuslabelTop, setStatuslabelTop] = useState("");
  const [LabelTop, setLabelTop] = useState("Label (TOP)");
  const [StatusPrinterTop, setStatusPrinterTop] = useState("");
  const [PrinterTop, setPrinterTop] = useState("Printer (TOP)");
  const [StatusSpiTop, setStatusSpiTop] = useState("");
  const [SpiTop, setSpiTop] = useState("Spi (TOP)");
  const [StatusPickNPlace, setStatusPickNPlace] = useState("");
  const [PickNPlace, setPickNPlace] = useState("Pick&Place (TOP)");
  const [StatusReflowTop, setStatusReflowTop] = useState("");
  const [ReflowTop, setReflowTop] = useState("Reflow (TOP)");
  const [StatusAOITop, setStatusAOITop] = useState("");
  const [AOITop, setAOITop] = useState("AOI (TOP)");
  const [StatusRVSTop, setStatusRVSTop] = useState("");
  const [RVSTop, setRVSTop] = useState("RVS (TOP)");

  // Tindakan / Kehadiran
  const [DestackerTopPressed, setDestackerTopPressed] = useState(false);
  const timeoutRefDestackerTop = useRef(null);
  const [LabelTopPressed, setLabelTopPressed] = useState(false);
  const timeoutRefLabelTop = useRef(null);
  const [PrinterTopPressed, setPrinterTopPressed] = useState(false);
  const timeoutRefPrinterTop = useRef(null);
  const [SpiTopPressed, setSpiTopPressed] = useState(false);
  const timeoutRefSpiTop = useRef(null);
  const [PickNPlacePressed, setPickNPlacePressed] = useState(false);
  const timeoutRefPickNPlace = useRef(null);
  const [ReflowTopPressed, setReflowTopPressed] = useState(false);
  const timeoutRefReflowTop = useRef(null);
  const [AOITopPressed, setAOITopPressed] = useState(false);
  const timeoutRefAOITop = useRef(null);
  const [RVSTopPressed, setRVSTopPressed] = useState(false);
  const timeoutRefRVSTop = useRef(null);
  // ----

  //BACKGROUND / WARNA KOTAK
  const [backgroundColor, setBackgroundColor] = useState("");
  const [
    backgroundColorStatusdestackerTop,
    setBackgroundColorStatusdestackerTop,
  ] = useState("");
  const [backgroundColorStatuslabelTop, setBackgroundColorStatuslabelTop] =
    useState("");
  const [backgroundColorStatusPrinterTop, setBackgroundColorStatusPrinterTop] =
    useState("");
  const [backgroundColorStatusSpiTop, setBackgroundColorStatusSpiTop] =
    useState("");
  const [backgroundColorStatusPickNPlace, setBackgroundColorStatusPickNPlace] =
    useState("");
  const [backgroundColorStatusReflowTop, setBackgroundColorStatusReflowTop] =
    useState("");
  const [backgroundColorStatusAOITop, setBackgroundColorStatusAOITop] =
    useState("");
  const [backgroundColorStatusRVSTop, setBackgroundColorStatusRVSTop] =
    useState("");

  // ---------------------------

  // //////

  // POPUP
  const [isOpenMaintenance, setIsOpenMaintenance] = useState(false);
  const [QualityA, setQualityA] = useState(false);
  const [QualityC, setQualityC] = useState(false);
  const [QualityOption, setQualityOption] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenValQA, setIsOpenValQA] = useState(false);
  const [isOpenValQC, setIsOpenValQC] = useState(false);
  const [isOpenReturnMaintenance, setIsOpenReturnMaintenance] = useState(false);
  const [isOpenOperator, setIsOpenOperator] = useState(false);

  // OTHER
  const [selectedStatus, setSelectedStatus] = useState("");
  // ----------------------

  // fETCHING DATA SCHEDULE PLANING
  const [data, setData] = useState(null);

  // CMA

  const [ResultsCMA, setResultsCMA] = useState();

  /// DROPDOWN
  const namaList = ["CHRISNA"];
  const npkList = ["0601"];

  const [NpkPIC, setNpkPIC] = useState("");

  const [RealPT1, setRealPT1] = useState("");
  const [RealPT2, setRealPT2] = useState("");
  const [RealPT3, setRealPT3] = useState("");
  const [RealPT4, setRealPT4] = useState("");
  const [RealPD, setRealPD] = useState("");
  const [RealOT, setRealOT] = useState("");
  const [Total, setTotal] = useState("");

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

    const ref8 = firebase.database().ref("SMTLine1TOP/Destacker (TOP)");
    ref8.on("value", (snapshot) => {      const data = snapshot.val();
      updateStatusdestackerTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();
      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Destacker (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Destacker (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Request Quality Control SMT LINE 1 Destacker (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Request Quality Assurance SMT LINE 1 Destacker (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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

    const ref9 = firebase.database().ref("SMTLine1TOP/Label (TOP)");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatuslabelTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Label (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Label (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
     
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 Label (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
       
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 Label (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref18 = firebase.database().ref("/SMTLine1TOP/Printer (TOP)");
    ref18.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPrinterTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Printer (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Printer (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 Printer (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 Printer (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref19 = firebase.database().ref("/SMTLine1TOP/Spi (TOP)");
    ref19.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusSpiTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Spi (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Spi (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 Spi (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
       
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 Spi (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref20 = firebase.database().ref("/SMTLine1TOP/Pick&Place (TOP)");
    ref20.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusPickNPlace(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Pick&Place (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Pick&Place (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
      
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 Pick&Place (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
 
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 Pick&Place (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref21 = firebase.database().ref("/SMTLine1TOP/Reflow (TOP)");
    ref21.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusReflowTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 Reflow (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 Reflow (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
      
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 Reflow (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
    
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 Reflow (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref22 = firebase.database().ref("/SMTLine1TOP/AOI (TOP)");
    ref22.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusAOITop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 AOI (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 AOI (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 AOI (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
       
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 AOI (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    const ref23 = firebase.database().ref("/SMTLine1TOP/RVS (TOP)");
    ref23.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusRVSTop(data);
      if (data === "Maintenance") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

      
              const link = "http://10.14.81.43:3003/RequestMaintenance";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [-993707437];
              const message = `Notification Maintenance SMT LINE 1 RVS (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
              const message = `Notification Return Maintenance SMT LINE 1 RVS (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;

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
  
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQC";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Control SMT LINE 1 RVS (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
        } else if (data === "QA") {
          
          navigator.permissions
            .query({ name: "clipboard-write" })
            .then((permissionStatus) => {
              if (permissionStatus.state === "granted") {
                const link = "http://10.14.81.43:3003/RequestQA";
                const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
                const chatIds = [-912913885];
                const message = `Notification Request Quality Assurance SMT LINE 1 RVS (TOP) Status: DOWN - Please Click The Link:\n\n ${link}`;
  
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
              } else {
                // Izin ditolak
              }
            });
          }
      });

    return () => {};
  }, []);

  // ------------------------

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

  // --------------------

  // fungsi  schedule
  function formatDate(dateString) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  }

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

  // Fetching Data Schedule Planing
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://192.168.101.236:3001/api/ScheduleProduction"
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

  // FUNGSI UPDATE STATUS
  // fungsi mengubah warna status

  const updateStatusdestackerTop = (data) => {
    setStatusdestackerTop(data);
    setBackgroundColorStatusdestackerTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatuslabelTop = (data) => {
    setStatuslabelTop(data);
    setBackgroundColorStatuslabelTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusPrinterTop = (data) => {
    setStatusPrinterTop(data);
    setBackgroundColorStatusPrinterTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusSpiTop = (data) => {
    setStatusSpiTop(data);
    setBackgroundColorStatusSpiTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusPickNPlace = (data) => {
    setStatusPickNPlace(data);
    setBackgroundColorStatusPickNPlace(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusReflowTop = (data) => {
    setStatusReflowTop(data);
    setBackgroundColorStatusReflowTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusAOITop = (data) => {
    setStatusAOITop(data);
    setBackgroundColorStatusAOITop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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

  const updateStatusRVSTop = (data) => {
    setStatusRVSTop(data);
    setBackgroundColorStatusRVSTop(
      data === "Go"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Leader"
        ? "#C00000"
        : data === "Maintenance"
        ? "#be4f62"
        : data === "Return Maintenance"
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
  // ----

  // FUNGSI WAKTU
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  // -------

  const submitMaintenance = () => {
    if (!NamaPIC || !Line || !Kerusakan || !Area) {
      alert("Harap isi semua kolom!");
      return;
    }
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.236:3001/api/Maintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Laporan Telah Berhasil Di Kirim Ke Team Maintenance ");
          setIsOpenMaintenance(false);
          firebase.database().ref(`SMTLine1TOP/${Station}`).set("Maintenance");
          firebase.database().ref("StatusLine/SMTLine1").set("Down");
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitQualityA = () => {
    if (!NamaPIC || !Line || !Kerusakan || !Area) {
      alert("Harap isi semua kolom!");
      return;
    }
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    alert("Laporan Telah Berhasil Di Kirim Ke Quality Assurance");
    setQualityA(false);
    firebase.database().ref(`SMTLine1TOP/${Station}`).set("QA");
    window.location.reload();

    fetch(`http://192.168.101.236:3001/api/QA`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitQualityC = () => {
    if (!NamaPIC || !Line || !Kerusakan || !Area) {
      alert("Harap isi semua kolom!");
      return;
    }
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    alert("Laporan Telah Berhasil Di Kirim Ke Quality Control");
    setQualityC(false);
    firebase.database().ref(`SMTLine1TOP/${Station}`).set("QC");
    window.location.reload();

    fetch(`http://192.168.101.236:3001/api/QC`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitReturnMaintenance = () => {
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.236:3001/api/ReturnMaintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Laporan Terkait Pengembalian Ke Maintenance Sudah Berhasil");
          setIsOpenMaintenance(false);
          firebase
            .database()
            .ref(`SMTLine1TOP/${Station}`)
            .set("Return Maintenance");
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // --------------------------------------------

  //  Submit Validation Quality A
  const submitValQA = () => {
    const data = new FormData();
    data.append("NamaPIC", NamaPIC);
    data.append("NpkPIC", NpkPIC);
    data.append("Area", Area);
    data.append("Line", Line);
    data.append("Station", Station);
    data.append("validation", file);

    alert("File Validation Telah Berhasil Di Input");
    setIsOpen2(false);
    window.location.reload();

    fetch("http://192.168.101.236:3001/api/ValidationQA", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const submitValQC = () => {
    const data = new FormData();
    data.append("NamaPIC", NamaPIC);
    data.append("NpkPIC", NpkPIC);
    data.append("Area", Area);
    data.append("Line", Line);
    data.append("Station", Station);
    data.append("validation", file);

    alert("File Validation Telah Berhasil Di Input");
    setIsOpen2(false);
    window.location.reload();

    fetch("http://192.168.101.236:3001/api/ValidationQC", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // SUBMIT FILE
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Tindakan / Kehadiran

  const handleDestackerTopPress = () => {
    if (
      StatusdestackerTop === "Maintenance" ||
      StatusdestackerTop === "Return Maintenance"
    ) {
      setDestackerTopPressed(true);
      timeoutRefDestackerTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Destacker (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusdestackerTop === "QA" || StatusdestackerTop === "QC") {
      setDestackerTopPressed(true);
      timeoutRefDestackerTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Destacker (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleDestackerTopRelease = () => {
    setDestackerTopPressed(false);
    clearTimeout(timeoutRefDestackerTop.current);
  };

  const handleLabelTopPress = () => {
    if (
      StatuslabelTop === "Maintenance" ||
      StatuslabelTop === "Return Maintenance"
    ) {
      setLabelTopPressed(true);
      timeoutRefLabelTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Label (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatuslabelTop === "QA" || StatuslabelTop === "QC") {
      setLabelTopPressed(true);
      timeoutRefLabelTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Label (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleLabelTopRelease = () => {
    setLabelTopPressed(false);
    clearTimeout(timeoutRefLabelTop.current);
  };

  const handlePrinterTopPress = () => {
    if (
      StatusPrinterTop === "Maintenance" ||
      StatusPrinterTop === "Return Maintenance"
    ) {
      setPrinterTopPressed(true);
      timeoutRefPrinterTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Printer (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusPrinterTop === "QA" || StatusPrinterTop === "QC") {
      setPrinterTopPressed(true);
      timeoutRefPrinterTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Printer (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handlePrinterTopRelease = () => {
    setPrinterTopPressed(false);
    clearTimeout(timeoutRefPrinterTop.current);
  };

  const handleSpiTopPress = () => {
    if (
      StatusSpiTop === "Maintenance" ||
      StatusSpiTop === "Return Maintenance"
    ) {
      setSpiTopPressed(true);
      timeoutRefSpiTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Spi (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusSpiTop === "QA" || StatusSpiTop === "QC") {
      setSpiTopPressed(true);
      timeoutRefSpiTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Spi (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleSpiTopRelease = () => {
    setSpiTopPressed(false);
    clearTimeout(timeoutRefSpiTop.current);
  };

  const handlePickNPlacePress = () => {
    if (
      StatusPickNPlace === "Maintenance" ||
      StatusPickNPlace === "Return Maintenance"
    ) {
      setPickNPlacePressed(true);
      timeoutRefPickNPlace.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Pick&Place (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusPickNPlace === "QA" || StatusPickNPlace === "QC") {
      setPickNPlacePressed(true);
      timeoutRefPickNPlace.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Pick&Place (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handlePickNPlaceRelease = () => {
    setPickNPlacePressed(false);
    clearTimeout(timeoutRefPickNPlace.current);
  };

  const handleReflowTopPress = () => {
    if (
      StatusReflowTop === "Maintenance" ||
      StatusReflowTop === "Return Maintenance"
    ) {
      setReflowTopPressed(true);
      timeoutRefReflowTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Reflow (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusReflowTop === "QA" || StatusReflowTop === "QC") {
      setReflowTopPressed(true);
      timeoutRefReflowTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/Reflow (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleReflowTopRelease = () => {
    setReflowTopPressed(false);
    clearTimeout(timeoutRefReflowTop.current);
  };

  const handleAOITopPress = () => {
    if (
      StatusAOITop === "Maintenance" ||
      StatusAOITop === "Return Maintenance"
    ) {
      setAOITopPressed(true);
      timeoutRefAOITop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/AOI (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusAOITop === "QA" || StatusAOITop === "QC") {
      setAOITopPressed(true);
      timeoutRefAOITop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/AOI (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleAOITopRelease = () => {
    setAOITopPressed(false);
    clearTimeout(timeoutRefAOITop.current);
  };

  const handleRVSTopPress = () => {
    if (
      StatusRVSTop === "Maintenance" ||
      StatusRVSTop === "Return Maintenance"
    ) {
      setRVSTopPressed(true);
      timeoutRefRVSTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/RVS (TOP)").set("Repair");
        window.location.reload();
      }, 3000);
    } else if (StatusRVSTop === "QA" || StatusRVSTop === "QC") {
      setRVSTopPressed(true);
      timeoutRefRVSTop.current = setTimeout(() => {
        // Kode yang dijalankan setelah tombol ditekan selama 3 detik
        firebase.database().ref("SMTLine1TOP/RVS (TOP)").set("Go");
        firebase.database().ref("StatusLine/SMTLine1").set("Running");
        window.location.reload();
      }, 3000);
    }
  };
  const handleRVSTopRelease = () => {
    setRVSTopPressed(false);
    clearTimeout(timeoutRefRVSTop.current);
  };

  // ------

  const handleCall = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
  };

  const handleCall2 = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
  };

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
              <h1 class="text-xl font-sans tracking-tight text-gray-900">
                | SMT Line 1 - TOP |
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
              href="/Andonline1"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4  active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              SMT LINE 1
            </a>
          </button>

          <button  onClick={() => setIsOpen2(true)} class="w-60 sm:w-36 lg:w-32 bg-white">
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
              href="/Andonline1"
              class="inline-block w-full p-4 400 bg-slate-800 text-white rounded-r-lg hover:text-gray-700 hover:bg-slate-800 focus:ring-4 focus:outline-none  dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              BACK
            </a>
          </button>
        </ul>

        <div className=" pt-3">
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
                    onMouseDown={handleDestackerTopPress}
                    onMouseUp={handleDestackerTopRelease}
                    onMouseLeave={handleDestackerTopRelease}
                    onTouchStart={handleDestackerTopPress}
                    onTouchEnd={handleDestackerTopRelease}
                    style={{
                      backgroundColor: backgroundColorStatusdestackerTop,
                    }}
                    value={StatusdestackerTop}
                    onClick={() => {
                      if (StatusdestackerTop === "Go") {
                        // set isOpenDestackerTop state to true if StatusdestackerTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusdestackerTop === "Repair") {
                        // set Quality state to true if StatusdestackerTop is "Repair"
                        setQualityOption(true);
                      } else if (StatusdestackerTop === "QA") {
                        // set Quality state to true if StatusdestackerTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusdestackerTop === "QC") {
                        // set Quality state to true if StatusdestackerTop is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(DestackerTop);
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
                    onMouseDown={handleLabelTopPress}
                    onMouseUp={handleLabelTopRelease}
                    onMouseLeave={handleLabelTopRelease}
                    onTouchStart={handleLabelTopPress}
                    onTouchEnd={handleLabelTopRelease}
                    style={{ backgroundColor: backgroundColorStatuslabelTop }}
                    value={StatuslabelTop}
                    onClick={() => {
                      if (StatuslabelTop === "Go") {
                        // set isOpenDestacker state to true if StatuslabelTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatuslabelTop === "Repair") {
                        // set Quality state to true if StatuslabelTop is "Repair"
                        setQualityOption(true);
                      } else if (StatuslabelTop === "QA") {
                        // set Quality state to true if StatuslabelTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatuslabelTop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(LabelTop);
                    }}
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
                    onMouseDown={handlePrinterTopPress}
                    onMouseUp={handlePrinterTopRelease}
                    onMouseLeave={handlePrinterTopRelease}
                    onTouchStart={handlePrinterTopPress}
                    onTouchEnd={handlePrinterTopRelease}
                    style={{ backgroundColor: backgroundColorStatusPrinterTop }}
                    value={StatusPrinterTop}
                    onClick={() => {
                      if (StatusPrinterTop === "Go") {
                        // set isOpenDestacker state to true if StatusPrinterTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusPrinterTop === "Repair") {
                        // set Quality state to true if StatusPrinterTop is "Repair"
                        setQualityOption(true);
                      } else if (StatusPrinterTop === "QA") {
                        // set Quality state to true if StatusPrinterTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusPrinterTop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(PrinterTop);
                    }}
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
                    onMouseDown={handleSpiTopPress}
                    onMouseUp={handleSpiTopRelease}
                    onMouseLeave={handleSpiTopRelease}
                    onTouchStart={handleSpiTopPress}
                    onTouchEnd={handleSpiTopRelease}
                    style={{ backgroundColor: backgroundColorStatusSpiTop }}
                    value={StatusSpiTop}
                    onClick={() => {
                      if (StatusSpiTop === "Go") {
                        // set isOpenDestacker state to true if StatusSpiTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusSpiTop === "Repair") {
                        // set Quality state to true if StatusSpiTop is "Repair"
                        setQualityOption(true);
                      } else if (StatusSpiTop === "QA") {
                        // set Quality state to true if StatusSpiTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusSpiTop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(SpiTop);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        SPI TOP
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
                    onMouseDown={handlePickNPlacePress}
                    onMouseUp={handlePickNPlaceRelease}
                    onMouseLeave={handlePickNPlaceRelease}
                    onTouchStart={handlePickNPlacePress}
                    onTouchEnd={handlePickNPlaceRelease}
                    style={{ backgroundColor: backgroundColorStatusPickNPlace }}
                    value={StatusPickNPlace}
                    onClick={() => {
                      if (StatusPickNPlace === "Go") {
                        // set isOpenDestacker state to true if StatusPickNPlace is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusPickNPlace === "Repair") {
                        // set Quality state to true if StatusPickNPlace is "Repair"
                        setQualityOption(true);
                      } else if (StatusPickNPlace === "QA") {
                        // set Quality state to true if StatusPickNPlace is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusPickNPlace === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(PickNPlace);
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
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    onMouseDown={handleReflowTopPress}
                    onMouseUp={handleReflowTopRelease}
                    onMouseLeave={handleReflowTopRelease}
                    onTouchStart={handleReflowTopPress}
                    onTouchEnd={handleReflowTopRelease}
                    style={{ backgroundColor: backgroundColorStatusReflowTop }}
                    value={StatusReflowTop}
                    onClick={() => {
                      if (StatusReflowTop === "Go") {
                        // set isOpenDestacker state to true if StatusReflowTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusReflowTop === "Repair") {
                        // set Quality state to true if StatusReflowTop is "Repair"
                        setQualityOption(true);
                      } else if (StatusReflowTop === "QA") {
                        // set Quality state to true if StatusReflowTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusReflowTop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(ReflowTop);
                    }}
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
                    onMouseDown={handleAOITopPress}
                    onMouseUp={handleAOITopRelease}
                    onMouseLeave={handleAOITopRelease}
                    onTouchStart={handleAOITopPress}
                    onTouchEnd={handleAOITopRelease}
                    style={{ backgroundColor: backgroundColorStatusAOITop }}
                    value={StatusAOITop}
                    onClick={() => {
                      if (StatusAOITop === "Go") {
                        // set isOpenDestacker state to true if StatusAOITop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusAOITop === "Repair") {
                        // set Quality state to true if StatusAOITop is "Repair"
                        setQualityOption(true);
                      } else if (StatusAOITop === "QA") {
                        // set Quality state to true if StatusAOITop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusAOITop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(AOITop);
                    }}
                    class="w-full max-w-sm  bg-[#565454] shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="italic  text-center text-white">
                        AOI TOP
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
                    onMouseDown={handleRVSTopPress}
                    onMouseUp={handleRVSTopRelease}
                    onMouseLeave={handleRVSTopRelease}
                    onTouchStart={handleRVSTopPress}
                    onTouchEnd={handleRVSTopRelease}
                    style={{ backgroundColor: backgroundColorStatusRVSTop }}
                    value={StatusRVSTop}
                    onClick={() => {
                      if (StatusRVSTop === "Go") {
                        // set isOpenDestacker state to true if StatusRVSTop is "Go"
                        setIsOpenMaintenance(true);
                      } else if (StatusRVSTop === "Repair") {
                        // set Quality state to true if StatusRVSTop is "Repair"
                        setQualityOption(true);
                      } else if (StatusRVSTop === "QA") {
                        // set Quality state to true if StatusRVSTop is "Repair"
                        setIsOpenValQA(true);
                      } else if (StatusRVSTop === "QC") {
                        // set Quality state to true if Statusdestacker is "Repair"
                        setIsOpenValQC(true);
                      }
                      setStation(RVSTop);
                    }}
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

      {/* POP UP  Operator To Maintenance*/}
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
                              <td className="font-semibold">Production time 1:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT1}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-semibold">Production time 2:</td>
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
                              <td className="font-semibold">Production time 3:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT3}
                              </span>
                            </tr>

                            <tr>
                              <td className="font-semibold">Production time 4:</td>
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
                      <h3 className="text-lg italic  mb-2">
                        Production Time
                      </h3>

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
                              <td className="font-semibold">Shift: {data.SHIFT}</td>
                            </tr>
                            <tr>
                              <td className="font-semibold">Production Time 1:</td>
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
                              <td className="font-semibold">Production Time 2:</td>
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
                              <td className="font-semibold">Production Time 3:</td>
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
                              <td className="font-semibold">Production time 4:</td>
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

      {/*  */}
      {/* POP UP Maintenance to QC  */}
      <td class="">
        {isOpenMaintenance ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form
                        className="w-full max-w-lg"
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Request Maintenance</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full bg-white border-b-slate-900 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>

                        {/*Status*/}

                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Problem
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenMaintenance(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitMaintenance}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>

      {/* QualityOption */}
      <td class="">
        {QualityOption ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="flex justify-end">
                        <button
                          onClick={() => setQualityOption(false)}
                          className="absolute top-0 right-0 mt-2 mr-2"
                        >
                          <svg
                            className="h-6 w-6 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
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
                        </button>
                      </div>

                      <div className="w-full h-60 max-w-lg">
                        <div className="justify-center mb-20 items-center flex font-bold uppercase text-black">
                          <span>Quality</span>
                        </div>

                        <div className="flex justify-center">
                          <button
                            onClick={() => {
                              setQualityC(true);
                              setQualityOption(false);
                            }}
                            className="bg-lime-700 w-28 h-16 hover:bg-lime-400 text-white font-bold py-2 px-4  rounded"
                          >
                            QC
                          </button>
                          <button
                            onClick={() => {
                              setQualityA(true);
                              setQualityOption(false);
                            }}
                            className="bg-blue-900 w-28 h-16 hover:bg-blue-700  text-white font-bold py-2 px-4 ml-16 rounded mr-2"
                          >
                            QA
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

      {/* QualityA */}
      <td class="">
        {QualityA ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Depart To Quality Assurance</span>
                        </div>

                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full bg-white border-b-slate-900 text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>
                        {/*Status*/}
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="Depart To"
                          >
                            Depart To
                          </label>
                          <div className="relative">
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              Quality Assurance
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Name"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Name"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Name"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Problem
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 bg-white border-b-slate-900  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                              Jenis Problem Yang DI Temukan
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setQualityA(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitQualityA}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>

      {/* QualityC*/}
      <td class="">
        {QualityC ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Depart To Quality Control</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>
                        {/*Status*/}
                        <div className="mb-4">
                          <label
                            className="block text-gray-700 font-semibold mb-2"
                            htmlFor="Depart To"
                          >
                            Depart To
                          </label>
                          <div className="relative">
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              Quality Control
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Problem
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                              Jenis Problem Yang Di Temukan
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setQualityC(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitQualityC}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>

      {/* POP UP  RETURN Maintenance*/}
      <td class="">
        {isOpenReturnMaintenance ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Return To Maintenance</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full  text-gray-700 bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>

                        {/*Status*/}

                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>

                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Problem
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                              Laporkan Problem Yang Di temukan
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenReturnMaintenance(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitReturnMaintenance}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>

      {/* ------------- */}

      {/* ----- */}

      {/* Val QA */}
      <td class="">
        {isOpenValQA ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Validation Quality Assurance</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full bg-white border-b-slate-900 text-gray-700   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Area"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Line"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Station"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Input File Validation
                            </label>
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password"
                              type="file"
                              placeholder=""
                              name="validation"
                              onChange={handleFileChange}
                              required
                            />
                            <p class="text-gray-600 text-xs italic">
                              Input File Validation
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenValQA(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitValQA}
                          >
                            Submit
                          </button>
                        </div>
                        <button
                          className="bg-red-900 animate-bounce hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => {
                            setIsOpenValQA(false);
                            setIsOpenReturnMaintenance(true);
                          }}
                        >
                          Return To Maintenance
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>

      {/* Val QC */}
      <td class="">
        {isOpenValQC ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Validation Quality Control</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-first-name"
                            >
                              Masukan Nama Anda
                            </label>
                            <input
                              type="text"
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              name="NamaPIC"
                              required
                              onChange={(e) => {
                                setNamaPIC(e.target.value);
                              }}
                            ></input>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Area
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Area"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Line
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Line"
                            >
                              {Line}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="Station"
                            >
                              {Station}
                            </span>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div class="w-full px-1">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                              for="grid-password"
                            >
                              Validation File
                            </label>
                            <input
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password"
                              type="file"
                              placeholder=""
                              name="validation"
                              onChange={handleFileChange}
                              required
                            />
                            <p class="text-gray-600 text-xs italic">
                              Input File Validation
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenValQC(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitValQC}
                          >
                            Submit
                          </button>
                        </div>
                        <button
                          className="bg-red-900 animate-bounce hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => {
                            setIsOpenValQC(false);
                            setIsOpenReturnMaintenance(true);
                          }}
                        >
                          Return To Maintenance
                        </button>
                      </form>
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

export default SmtTop;
