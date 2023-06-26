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

const Andonline1 = () => {
  // Tindakan / Kehadiran
  const [NetworkPressed, setNetworkPressed] = useState(false);
  const timeoutRefNetwork = useRef(null);
  // ----

  const [mesin, setMesin] = useState("");
  const [nama, setNama] = useState("");
  const [timer, setTimer] = useState("");

  const [prevStatus, setPrevStatus] = useState("");

  // DATA
  const [NamaPIC, setNamaPIC] = useState("");
  const [NpkPIC, setNpkPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");

  // OTHERS
  const [selectedStatus, setSelectedStatus] = useState("");

  // NAVBAR
  const [currentTime, setCurrentTime] = useState(new Date());
  const [time, setTime] = useState(new Date().toLocaleString());

  // FIREBASE
  const [showDrawer, setShowDrawer] = useState(false);

  // SMT LINE 1
  const [StatusLine, setStatusLine] = useState("");
  //STATION

  // STATION DESTECKER
  const [Line, setLine] = useState("SMT LINE 1");
  const [Area, setArea] = useState("SMT TOP");
  const [Destacker, setDestecker] = useState("Destacker");
  const [Station, setStation] = useState("");

  // CMA
  const [CMATime, setCMATime] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [CMARunning, setCMARunning] = useState();
  const [ResultsCMA, setResultsCMA] = useState();

  // popup form 1
  // popup form 1
  const [isOpenOthers, setIsOpenOthers] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenOperator, setIsOpenOperator] = useState(false);
  const [isOpenGeneral, setIsOpenGeneral] = useState(false);

  //  SCHEDULE
  const [SHIFT, setSHIFT] = useState("");
  const [PT1_IN, setPT1_IN] = useState("");
  const [PT1_OUT, setPT1_OUT] = useState("");
  const [PT2_IN, setPT2_IN] = useState("");
  const [PT2_OUT, setPT2_OUT] = useState("");
  const [PT3_IN, setPT3_IN] = useState("");
  const [PT3_OUT, setPT3_OUT] = useState("");
  const [PT4_IN, setPT4_IN] = useState("");
  const [PT4_OUT, setPT4_OUT] = useState("");
  const [BR1_IN, setBR1_IN] = useState("");
  const [BR1_OUT, setBR1_OUT] = useState("");
  const [BR2_IN, setBR2_IN] = useState("");
  const [BR2_OUT, setBR2_OUT] = useState("");
  const [BR3_IN, setBR3_IN] = useState("");
  const [BR3_OUT, setBR3_OUT] = useState("");
  const [BR4_IN, setBR4_IN] = useState("");
  const [BR4_OUT, setBR4_OUT] = useState("");
  const [PD_IN, setPD_IN] = useState("");
  const [PD_OUT, setPD_OUT] = useState("");
  const [OT_IN, setOT_IN] = useState("");
  const [OT_OUT, setOT_OUT] = useState("");
  const [PP, setPP] = useState("");
  const [PD, setPD] = useState("");
  const [CMA, setCMA] = useState("");
  const [PDATE, setPDATE] = useState("");

  // DATA SCHEDULE PLANING
  const [data, setData] = useState(null);

  // ---------------------

  // Status
  const [status, setStatus] = useState("");
  const [network, setStatusNetwork] = useState("");
  const [electricity, setStatusElectricity] = useState("");
  const [aircomp, setStatusAircomp] = useState("");
  const [shorcomp, setStatusShorcomp] = useState("");
  const [shorbox, setStatusShorbox] = useState("");
  const [overtrial, setStatusOvertrial] = useState("");
  const [overchange, setStatusOverchange] = useState("");
  // ------------------------

  //BACKGROUND / WARNA KOTAK
  const [backgroundColor, setBackgroundColor] = useState("");
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

  // REAL PRODUCTION TIME

  const [RealPT1, setRealPT1] = useState("");
  const [RealPT2, setRealPT2] = useState("");
  const [RealPT3, setRealPT3] = useState("");
  const [RealPT4, setRealPT4] = useState("");
  const [RealPD, setRealPD] = useState("");
  const [RealOT, setRealOT] = useState("");
  const [Total, setTotal] = useState("");

  // ====

  /// Purchasing
  const namaList = ["CHRISNA FIRMAN"];
  const npkList = ["0301"];

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

  // FETCHING FIREBASE

  //  fungsi mengambil data dari firebase
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // Fetching FIrebase
  useEffect(() => {
    const ref = firebase.database().ref("Mesin/Mesin1");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatus(data);
      // if (data === "Damage") {
      //   const audio = new Audio("Sound.mp3");
      //   audio.autoplay = true;
      //   audio.play();

      //   navigator.permissions
      //     .query({ name: "clipboard-write" })
      //     .then((permissionStatus) => {
      //       if (permissionStatus.state === "granted") {
      //         const text =
      //           "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
      //         navigator.clipboard
      //           .writeText(text)
      //           .then(() => {
      //             const botToken =
      //               "6165170138:AAHGjjgGP88vnuGyDZ-6JTCkEPaZ_aGJLvc";
      //             const chatIds = [1563609464, 6019720343, -692863121];
      //             const message =
      //               "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakukan Perbaikan";
      //             chatIds.forEach((chatId) => {
      //               fetch(
      //                 `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //               )
      //                 .then((response) => {
      //                   if (!response.ok) {
      //                     throw new Error("Error sending telegram message");
      //                   }
      //                 })
      //                 .catch((error) => {
      //                   console.error(error);
      //                 });
      //             });
      //           })
      //           .catch((error) => {
      //             console.error(error);
      //           });
      //       } else if (permissionStatus.state === "prompt") {
      //         permissionStatus.onchange = () => {
      //           if (permissionStatus.state === "granted") {
      //             const text =
      //               "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
      //             navigator.clipboard
      //               .writeText(text)
      //               .then(() => {
      //                 const botToken =
      //                   "6165170138:AAHGjjgGP88vnuGyDZ-6JTCkEPaZ_aGJLvc";
      //                 const chatIds = [1563609464, 6019720343, -692863121];
      //                 const message =
      //                   "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
      //                 chatIds.forEach((chatId) => {
      //                   fetch(
      //                     `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
      //                   )
      //                     .then((response) => {
      //                       if (!response.ok) {
      //                         throw new Error("Error sending telegram message");
      //                       }
      //                     })
      //                     .catch((error) => {
      //                       console.error(error);
      //                     });
      //                 });
      //               })
      //               .catch((error) => {
      //                 console.error(error);
      //               });
      //           }
      //         };
      //       } else {
      //         // Izin ditolak
      //       }
      //     });
      // }
    });

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

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const link = "http://10.14.81.43:3003/RequestGeneral";
              const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
              const chatIds = [1563609464];
              const message = `Notification General SMT LINE 1 ${Station} (TOP) Status = DOWN - Please Click The Link:\n\n ${link}`;

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

    const ref4 = firebase.database().ref("SMTLine1/Electricity");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      updateElectricity(data);
    });

    const ref5 = firebase.database().ref("SMTLine1/Aircomp");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      updateAircomp(data);
    });

    const ref6 = firebase.database().ref("SMTLine1/Shorcomp");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      updateShorcomp(data);
    });

    const ref7 = firebase.database().ref("SMTLine1/Shorbox");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      updateShorbox(data);
    });

    const ref8 = firebase.database().ref("SMTLine1/Overtrial");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateOvertrial(data);
    });

    const ref9 = firebase.database().ref("SMTLine1/Overchangemodel");
    ref9.on("value", (snapshot) => {
      const data = snapshot.val();
      updateOverchange(data);
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

    return () => {};
  }, []);

  // ---------------------


  let CMAInterval;

  useEffect(() => {
    const loadCMARunningStatus = localStorage.getItem("CMARunning");
    if (loadCMARunningStatus) {
      setCMARunning(JSON.parse(loadCMARunningStatus));
    }

    const loadCMATime = localStorage.getItem("CMATime");
    if (loadCMATime) {
      setCMATime(JSON.parse(loadCMATime));
    }

    // Load data dari Firebase saat komponen pertama kali dirender
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
  }, []);

  useEffect(() => {
    // Simpan status CMARunning pada local storage setiap kali berubah
    localStorage.setItem("CMARunning", JSON.stringify(CMARunning));
  }, [CMARunning]);

  useEffect(() => {
    // Simpan CMATime pada local storage setiap kali berubah
    localStorage.setItem("CMATime", JSON.stringify(CMATime));
  }, [CMATime]);

  const startCMA = () => {
    setCMATime({ hours: 0, minutes: 0, seconds: 0 });
    firebase
      .database()
      .ref("/StatusLine/SMTLine1CMAOnGoing")
      .set("0 detik");
    firebase.database().ref("/StatusLine/SMTLine1CMALastTime").set({
      hours: 0,
      minutes: 0,
      seconds: 0,
    });
    setCMARunning(true);
  };

  const stopCMA = (event) => {
    const data = {
      ResultsCMA: ResultsCMA,
    };
    fetch("http://192.168.101.236:3001/api/put/ResultsCMA", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Change Model Telah Selesai Data Sudah Terinput");
          firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing").set("Waiting...");
          firebase.database().ref("/StatusLine/SMTLine1CMALastTime/hours").set("0");
          firebase.database().ref("/StatusLine/SMTLine1CMALastTime/minutes").set("0");
          firebase.database().ref("/StatusLine/SMTLine1CMALastTime/seconds").set("0");
          setCMARunning(false);
          window.location.reload();
          event.preventDefault();
        } else {
          throw new Error("Error updating data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (CMARunning) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      CMAInterval = setInterval(() => {
        setCMATime((prevTime) => {
          const newSeconds = prevTime.seconds + 1;
          const newMinutes = prevTime.minutes + Math.floor(newSeconds / 60);
          const newHours = prevTime.hours + Math.floor(newMinutes / 60);
          const seconds = newSeconds % 60;
          const minutes = newMinutes % 60;
          const hours = newHours;

          const newTime = {
            hours,
            minutes,
            seconds,
          };

          // Simpan newTime ke Firebase
          firebase
            .database()
            .ref("StatusLine/SMTLine1CMALastTime")
            .set(newTime);

          let formattedTime = "";
          if (hours > 0) {
            formattedTime += `${hours} jam ${minutes} menit`;
          } else if (minutes > 0) {
            formattedTime += `${minutes} menit`;
          } else {
            formattedTime += `${seconds} detik`;
          }

          // Simpan formattedTime ke Firebase
          firebase
            .database()
            .ref("/StatusLine/SMTLine1CMAOnGoing")
            .set(formattedTime.trim());

          return newTime;
        });
      }, 1000); // 1 detik = 1000 ms
    }

    return () => clearInterval(CMAInterval);
  }, [CMARunning]);
  

  // ----


  // FETCHING SCHEDULE
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
          "http://192.168.101.236:3001/api/get/Inputsche"
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
  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
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
  // fungsi mengubah warna status
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

  // UPDATE Electricity
  const updateElectricity = (data) => {
    setStatusElectricity(data);
    setBackgroundColorElectricity(
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

  // UPDATE Aircomp
  const updateAircomp = (data) => {
    setStatusAircomp(data);
    setBackgroundColorAircomp(
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

  // UPDATE Shorcomp
  const updateShorcomp = (data) => {
    setStatusShorcomp(data);
    setBackgroundColorShorcomp(
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

  // UPDATE Shorbox
  const updateShorbox = (data) => {
    setStatusShorbox(data);
    setBackgroundColorShorbox(
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

  // UPDATE OverTrial
  const updateOvertrial = (data) => {
    setStatusOvertrial(data);
    setBackgroundColorOvertrial(
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

  // UPDATE Overchangemodel
  const updateOverchange = (data) => {
    setStatusOverchange(data);
    setBackgroundColorOverchange(
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

    fetch(`http://192.168.101.236:3001/api/post/${department}`, {
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

    fetch(`http://192.168.101.236:3001/api/post/general`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Permintaan Bantuan Network Segera Diproses");
          firebase.database().ref("SMTLine1/Network").set("Down");
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

  // Tindakan / Kehadiran

  const handleNetworkPress = () => {
    if (network === "Down") {
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

  // ------

  const handleCall = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
  };

  const handleCall2 = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/S.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "500px",
    height: "700px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  return (
    <body style={styles}>
      <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <a href="/RequestNetwork">
              <div class="flex-shrink-0">
                <img
                  src={process.env.PUBLIC_URL + "/smt.jpeg"}
                  alt="Logo"
                  class="h-6 ml-4 sm:h-9 bg-white rounded-md"
                />
              </div>
            </a>
          </div>
          <p class="text-gray-500 text-sm">{formattedTime}</p>
        </div>
      </nav>

      <header class="bg-white shadow mb-3">
        <div class="mx-auto max-w-7xl px-4 ">
          <header class="bg-white shadow mb-3">
            <div class="mx-auto max-w-7xl px-4">
              <marquee behavior="scroll" direction="right">
                <div class="flex items-center">
                  <h1 class="text-xl font-bold tracking-tight text-gray-900">
                    | Andon SMT |
                  </h1>
                  <h1 class="text-xl font-bold tracking-tight ml-4">
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
                  <h1 class="text-xl font-bold tracking-tight ml-4">
                    <span class="text-black">SMT LINE 2:</span>
                    <span class="ml-4 text-green-500">RUNNING </span>|
                  </h1>
                </div>
              </marquee>
            </div>
          </header>
        </div>
      </header>

      {/*  */}
      <main>
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
          <li class="w-60 sm:w-36 lg:w-32">
            <a
              href="/Andonline1"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              SMT Line 1
            </a>
          </li>
          <li class="w-60 sm:w-36 lg:w-32">
            <a
              href="Inputsche"
              class="inline-block  w-full p-1.5 text-gray-900 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Schedule Production
            </a>
          </li>
          <button onClick={() => setIsOpen2(true)} class="w-60 sm:w-36 lg:w-32">
            <span class="inline-block w-full  p-4 text-orange-700  bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">
              <header className="animate-bounce">
                <div>ISA</div>
              </header>
            </span>
          </button>
        </ul>

        <div className="pt-7">
          <div class="pt-2 flex   flex-col md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <a href="SmtTop">
                    <div
                      // style={{ backgroundColor: backgroundColorDesteckerTop }}
                      // value={desteckerTop}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl "
                      // onClick={
                      //   desteckerTop === "Leader" ? () => setIsOpen(true) : null
                      // }
                    >
                      <header class="px-5 py-4  ">
                        <div class="font-semibold text-center text-white">
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
                  <a href="/SmtBot">
                    <div
                      // style={{ backgroundColor: backgroundColor }}
                      // value={status}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                    >
                      <header class="px-5 py-4  ">
                        <div class="font-semibold text-center text-white">
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
                  <a href="/SmtBE">
                    <div
                      // style={{ backgroundColor: backgroundColor }}
                      // value={status}
                      class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                    >
                      <header class="px-5 py-4  ">
                        <div class="font-semibold text-center text-white">
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
                  <div
                    style={{ backgroundColor: backgroundColorElectricity }}
                    value={electricity}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        ELECTRICITY
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={network}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                    onClick={() => {
                      setStation("Network");
                      if (network === "Go") {
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
                      <div class="font-semibold text-center text-white">
                        NETWORK
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
                  <div
                    style={{ backgroundColor: backgroundColorAircomp }}
                    value={aircomp}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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

                <button
                  onClick={() => setIsOpenOthers(true)}
                  className="animate-pulse w-72 pt-2 sm:w-48 lg:w-72"
                >
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    value={status}
                    class="w-full max-w-sm  bg-lime-900 shadow-lg rounded-full "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center  text-white">
                        OTHERS
                      </div>
                    </header>
                  </div>
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
                  <div
                    style={{ backgroundColor: backgroundColorShorcomp }}
                    value={shorcomp}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        SHORTAGE COMP.
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    style={{ backgroundColor: backgroundColorShorbox }}
                    value={shorbox}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        SHORTAGE BOX FG
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    style={{ backgroundColor: backgroundColorOvertrial }}
                    value={overtrial}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        OVER TRIAL
                      </div>
                    </header>
                  </div>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className="w-72 pt-2 sm:w-48 lg:w-72">
                  <div
                    style={{ backgroundColor: backgroundColorOverchange }}
                    value={overchange}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-sm text-center text-white">
                        OVER CHANGE MODEL
                      </div>
                    </header>
                  </div>
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
                <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <form
                      className="w-full max-w-lg"
                      onSubmit={(e) => {
                        e.preventDefault();
                        database.ref("Mesin/Mesin1").set(selectedStatus);
                      }}
                    >
                      <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                        <span>Request</span>
                      </div>
                      <div class="flex flex-wrap -mx-3 ">
                        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-first-name"
                          >
                            Masukan Nama Anda
                          </label>
                          <select
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            name="NamaPIC"
                            required
                            onChange={(e) => {
                              setNamaPIC(e.target.value);
                              setNpkPIC(
                                npkList[namaList.indexOf(e.target.value)]
                              );
                            }}
                          >
                            <option value="">- -Pilih Nama Anda- -</option>
                            {namaList.map((nama, index) => (
                              <option value={nama} key={index}>
                                {nama}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            NPK
                          </label>
                          <input
                            class="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            type="number"
                            placeholder="0000"
                            name="NpkPIC"
                            value={NpkPIC}
                            readOnly
                          />
                        </div>
                      </div>

                      {/*Status*/}
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 font-bold mb-2"
                          htmlFor="Depart To"
                        >
                          Depart To
                        </label>
                        <div className="relative">
                          <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="Depart To"
                            name="Depart To"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            required
                            defaultValue={""}
                          >
                            <option value="">-- Pilih Depart --</option>
                            <option value="PPIC">PPIC</option>
                            <option value="Purchasing">Purchasing</option>
                            <option value="MP&L">MP&L</option>
                            <option value="Accounting">Accounting</option>
                            <option value="Engineering & RND">
                              Engineering & RND
                            </option>
                            <option value="Maintenance & IT">
                              Maintenance & IT
                            </option>
                            <option value="QA">QA</option>
                            <option value="QC">QC</option>
                            <option value="Opex">Opex</option>
                            <option value="HRGA & EHS">HRGA & EHS</option>
                          </select>
                        </div>
                      </div>
                      <div class="flex flex-wrap -mx-3 mb-6">
                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="grid-city"
                          >
                            Machine Line
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
                      </div>
                      <div class="flex flex-wrap -mx-3 ">
                        <div class="w-full px-1">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                            for="grid-password"
                          >
                            Kerusakan
                          </label>
                          <input
                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                          onClick={() => setIsOpenOthers(false)}
                        >
                          Batal
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                          onClick={submit}
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
                  <h2 className="text-lg font-bold   text-center">
                    Production Area: SMT
                  </h2>
                  <div className="bg-white px-4 pt-1 pb-4 flex sm:p-6 sm:pb-4">
                    <div className="overflow-y-auto max-h-96 w-[700px]">
                      {data ? (
                        <div className="bg-white px-4 py-6 sm:p-6 rounded-lg shadow-md">
                          <h3 className="text-lg font-bold mb-2">
                            Production Time
                          </h3>
                          <table>
                            <tr>
                              <td className="font-bold">Production time 1:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT1}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Production time 2:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT2}
                              </span>
                            </tr>

                            <tr>
                              <td className="font-bold">Planned DT:</td>
                              <span className="px-4 text-lime-800">
                                {RealPD}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Production time 3:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT3}
                              </span>
                            </tr>

                            <tr>
                              <td className="font-bold">Production time 4:</td>
                              <span className="px-4 text-lime-800">
                                {RealPT4}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Over Time:</td>
                              <span className="px-4 text-lime-800">
                                {RealOT}
                              </span>
                            </tr>
                          </table>
                          <div className="flex mt-2">
                            <td className="font-bold">Total:</td>
                            <span className="ml-10 w-44 text-center text-white rounded-md bg-lime-700">
                              {Total}
                            </span>
                          </div>
                          <div className="mt-2">
                            <p className="font-bold text-sm">
                              Change Model Allocation:
                            </p>
                            <p>{data.CMA} </p>
                            <p className="text-sm text-white bg-amber-500 text-center justify-center rounded-xl">
                              ON GOING : {ResultsCMA}{" "}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <p>Loading...</p>
                      )}
                    </div>

                    <div className="bg-white px-4 w-[700px] ml-3  rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-2">
                        Production Time
                      </h3>

                      {data ? (
                        <table>
                          <h3 className="flex text-base font-bold mb-2">
                            Date:{" "}
                            <h1 className="ml-2 font-normal">
                              {formatDate(data.PDATE)}
                            </h1>
                          </h3>
                          <tbody>
                            <tr>
                              <td className="font-bold">Shift: {data.SHIFT}</td>
                            </tr>
                            <tr>
                              <td className="font-bold">Prod time 1:</td>
                              <span style={{ color: "green" }}>
                                {data.PT1_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.PT1_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Break 1:</td>
                              <td className="bg-orange-500 rounded-lg">
                                {data.BR1_IN} - {data.BR1_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold">Prod time 2:</td>
                              <span style={{ color: "green" }}>
                                {data.PT2_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.PT2_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Break 2:</td>
                              <td className="bg-orange-500 rounded-lg">
                                {data.BR2_IN} - {data.BR2_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold">Planned DT:</td>
                              <span style={{ color: "green" }}>
                                {data.PD_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.PD_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Prod time 3:</td>
                              <span style={{ color: "green" }}>
                                {data.PT3_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.PT3_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold">Break 3:</td>
                              <td className="bg-orange-500 rounded-lg">
                                {data.BR3_IN} - {data.BR3_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold">Prod time 4:</td>
                              <span style={{ color: "green" }}>
                                {data.PT4_IN}
                              </span>{" "}
                              -{" "}
                              <span style={{ color: "red" }}>
                                {data.PT4_OUT}
                              </span>
                            </tr>
                            <tr>
                              <td className="font-bold ">Break 4:</td>
                              <td className="bg-orange-500 rounded-lg">
                                {data.BR4_IN} - {data.BR4_OUT}
                              </td>
                            </tr>
                            <tr>
                              <td className="font-bold">Over Time:</td>
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
                      <h3 className="text-lg font-bold mb-1">Facturing</h3>
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
                            Apakah Anda Yakin Akan Meminta Bantuan Team{" "}
                            {Station}?
                          </h3>
                          <div class="flex flex-wrap -mx-3 ">
                            <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-first-name"
                              >
                                Masukan Nama Anda
                              </label>
                              <input
                                type="text"
                                class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                name="NamaPIC"
                                required
                                onChange={(e) => {
                                  setNamaPIC(e.target.value);
                                }}
                              ></input>
                            </div>
                            <div class="w-full md:w-1/2 px-3">
                              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Line
                              </label>
                              <input
                                type="text"
                                class="appearance-none block w-full text-center  font-bold bg-gray-200 text-orange-400 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                              Problem
                            </p>
                          </div>
                          <div class="flex justify-center">
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              onClick={SubmitGeneral}
                              class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            >
                              Yes, I'm sure
                            </button>
                            <button
                              data-modal-hide="popup-modal"
                              type="button"
                              onClick={() => setIsOpenGeneral(false)}
                              class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
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
    </body>
  );
};

export default Andonline1;
