import React, { useState, useEffect } from "react";
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
  const [InputSchedule, setInputSchedule] = useState(false);
  const [RealProduction, setRealProduction] = useState(true);

  const [time, setTime] = useState(new Date().toLocaleString());

  const [showDrawer, setShowDrawer] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const [data, setData] = useState(null);

  const [IsAddOvertime, setIsAddOvertime] = useState(false);


  // SCHE PRODUCTION
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

  const [ResultsCMA, setResultsCMA] = useState("");
  const [RealPT1, setRealPT1] = useState("");
  const [RealPT2, setRealPT2] = useState("");
  const [RealPT3, setRealPT3] = useState("");
  const [RealPT4, setRealPT4] = useState("");
  const [RealPD, setRealPD] = useState("");
  const [RealOT, setRealOT] = useState("");
  const [Total, setTotal] = useState("");

  useEffect(() => {
    const ref1 = firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing");
    ref1.on("value", (snapshot) => {
      const data = snapshot.val();
      setResultsCMA(data);
    });

    const ref2 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT1(data);
    });

    const ref3 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime2");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT2(data);
    });

    const ref4 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime3");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT3(data);
    });

    const ref5 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime4");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPT4(data);
    });

    const ref6 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/DownTime");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealPD(data);
    });

    const ref7 = firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/OverTime");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      setRealOT(data);
    });

    return () => { };
  }, []);

  const submit = () => {
    const data = {
      SHIFT: SHIFT,
      PT1_IN: PT1_IN,
      PT1_OUT: PT1_OUT,
      PT2_IN: PT2_IN,
      PT2_OUT: PT2_OUT,
      PT3_IN: PT3_IN,
      PT3_OUT: PT3_OUT,
      PT4_IN: PT4_IN,
      PT4_OUT: PT4_OUT,
      BR1_IN: BR1_IN,
      BR1_OUT: BR1_OUT,
      BR2_IN: BR2_IN,
      BR2_OUT: BR2_OUT,
      BR3_IN: BR3_IN,
      BR3_OUT: BR3_OUT,
      BR4_IN: BR4_IN,
      BR4_OUT: BR4_OUT,
      PD_IN: PD_IN,
      PD_OUT: PD_OUT,
      OT_IN: OT_IN,
      OT_OUT: OT_OUT,
      PP: PP,
      PD: PD,
      CMA: CMA,
      PDATE: PDATE,
    };

    alert("Sucsess");
    window.location.reload();

    fetch("http://192.168.101.12:3001/api/ScheduleProduction", {
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

  //
  const stop = (value) => {
    const data = {
      SHIFT: SHIFT,
      PT1_IN: PT1_IN,
      PT1_OUT: PT1_OUT,
      PT2_IN: PT2_IN,
      PT2_OUT: PT2_OUT,
      PT3_IN: PT3_IN,
      PT3_OUT: PT3_OUT,
      PT4_IN: PT4_IN,
      PT4_OUT: PT4_OUT,
      BR1_IN: BR1_IN,
      BR1_OUT: BR1_OUT,
      BR2_IN: BR2_IN,
      BR2_OUT: BR2_OUT,
      BR3_IN: BR3_IN,
      BR3_OUT: BR3_OUT,
      BR4_IN: BR4_IN,
      BR4_OUT: BR4_OUT,
      PD_IN: PD_IN,
      PD_OUT: PD_OUT,
      OT_IN: OT_IN,
      OT_OUT: OT_OUT,
      PP: PP,
      PD: PD,
      CMA: CMA,
      PDATE: PDATE,
      RealPT1: RealPT1,
      RealPT2: RealPT2,
      RealPT3: RealPT3,
      RealPT4: RealPT4,
      RealPD: RealPD,
      RealOT: RealOT,
      Total: Total,
      VALUE: value,
    };

    const UpdateReal = (event) => {
      fetch(`http://192.168.101.12:3001/api/UpdateRealProduction`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.status === 200) {
            fetch(`http://192.168.101.12:3001/api/ScheduleProduction`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            })
              .then((response) => {
                if (response.status === 200) {
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1")
                    .set("Waiting...");
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime2")
                    .set("Waiting...");
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime3")
                    .set("Waiting...");
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime4")
                    .set("Waiting...");
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/DownTime")
                    .set("Waiting...");
                  firebase
                    .database()
                    .ref("/StatusLine/SMTLine1ProductionTime/OverTime")
                    .set("Waiting...");
                  alert("Production Berhasil Di Reset");
                  window.location.reload();
                } else {
                  throw new Error("Error adding data");
                }
              })
              .catch((err) => {
                console.log(err);
              });

            // Berhasil mengirim data
          } else {
            throw new Error("Error updating data");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    UpdateReal();
  };

  const Input = () => {
    setRealProduction(false);
    setInputSchedule(true);
  };

  function formatDate(dateString) {
    const options = { day: "numeric", month: "numeric", year: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "id-ID",
      options
    );
    return formattedDate;
  }

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

  //  fungsi mengambil data dari firebase
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  function updateTime() {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Background.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "500px",
    height: "2000px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1
    }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        return `${hours} jam ${remainingMinutes} menit`;
      } else if (minutes >= 1) {
        return `${minutes} menit`;
      } else if (totalSeconds < 60) {
        return "Running";
      } else {
        return "Invalid time";
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

  // realtime prod send firebase

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

    // Helper function untuk mengonversi waktu dalam bentuk jam-menit ke menit
    const convertToMinutes = (waktu) => {
      if (waktu.length === 4) {
        const jam = parseInt(waktu[0]);
        const menit = parseInt(waktu[2]);
        return jam * 60 + menit;
      } else if (waktu.length === 2) {
        const menit = parseInt(waktu[0]);
        return menit;
      }
      return 0;
    };

    // Menambahkan waktu PT1
    if (waktuPT1[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuPT1);
    }

    // Menambahkan waktu PT2
    if (waktuPT2[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuPT2);
    }

    // Menambahkan waktu PT3
    if (waktuPT3[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuPT3);
    }

    // Menambahkan waktu PT4
    if (waktuPT4[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuPT4);
    }

    // Menambahkan waktu PD jika bukan "Waiting..."
    if (waktuPD[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuPD);
    }

    // Menambahkan waktu OT jika bukan "Waiting..."
    if (waktuOT[0] !== "Waiting...") {
      totalMenit += convertToMinutes(waktuOT);
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

    // Mengirim hasil total ke Firebase
    firebase
      .database()
      .ref("/StatusLine/SMTLine1ProductionTime/Total")
      .set(output)
      .then(() => {
        console.log("Total waktu berhasil dikirim ke Firebase.");
      })
      .catch((error) => {
        console.error("Error mengirim total waktu ke Firebase:", error);
      });
  };

  useEffect(() => {
    calculateTotalTime();
  }, [RealPT1, RealPT2, RealPT3, RealPT4, RealPD, RealOT]);



  //

  const defaultshift2 = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    setPDATE(formattedDate);
    setRealProduction(false);

    setSHIFT("2");
    setPT1_IN("07:00");
    setPT1_OUT("09:45");
    setPT2_IN("10:00");
    setPT2_OUT("12:00");
    setPT3_IN("14:00");
    setPT3_OUT("15:45");
    setPT4_IN("16:00");
    setPT4_OUT("16:30");
    setBR1_IN("09:45");
    setBR1_OUT("10:00");
    setBR2_IN("12:00");
    setBR2_OUT("13:00");
    setBR3_IN("15:45");
    setBR3_OUT("16:00");
    setBR4_IN("16:30");
    setBR4_OUT("16:40");
    setPD_IN("Null");
    setPD_OUT("Null");
    setOT_IN("Null");
    setOT_OUT("Null");
    setPD_IN("Null");
    setPD_OUT("Null");
    setPP("8 Hours : 0 Minutes");
  };

  const defaultshift1 = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    setPDATE(formattedDate);
    setRealProduction(false);

    setSHIFT("1");
    setPT1_IN("21:00");
    setPT1_OUT("00:00");
    setPT2_IN("00:40");
    setPT2_OUT("03:00");
    setPT3_IN("03:15");
    setPT3_OUT("04:40");
    setPT4_IN("05:00");
    setPT4_OUT("06:15");
    setBR1_IN("00:00");
    setBR1_OUT("00:40");
    setBR2_IN("03:00");
    setBR2_OUT("03:15");
    setBR3_IN("04:00");
    setBR3_OUT("05:00");
    setBR4_IN("Null");
    setBR4_OUT("Null");
    setPD_IN("NULL");
    setPD_OUT("Null");
    setOT_IN("Null");
    setOT_OUT("Null");
    setPD_IN("Null");
    setPD_OUT("Null");
    setPP("8 Hours : 0 Minutes");
  };


   // UPDATE WIP PPIC
   const UpdateOverTime = (event) => {
    const data = {
      OT_IN: OT_IN,
      OT_OUT: OT_OUT,
    };
    fetch(
      `http://192.168.101.12:3001/api/UpdateOverTime`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (response.status === 200) {
          alert("Overtime Teelah Berhasil Di Update");
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

      <sidebar>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64  p-4 overflow-y-auto transition-transform ${showDrawer ? "" : "-translate-x-full"
            } bg-[#1b1c27] dark:bg-gray-800`}
          tabIndex="-1"
          aria-labelledby="drawer-navigation-label"
        >
          <h5
            id="drawer-navigation-label"
            className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
          >
            Menu
          </h5>
          <button
            type="button"
            data-drawer-hide="drawer-navigation"
            onClick={toggleDrawer}
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
          <div className="py-4 overflow-y-auto">
            <ul className="space-y-2">
              <li>
                <a
                  href="/Home"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6  h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  <span class="ml-3 text-white">Realtime Report</span>
                </a>
              </li>
              <li>
                <a
                  href="/DamageReport"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 text-white">Report Damage Machine</span>
                </a>
              </li>
              <li>
                <a
                  href="/AllReport"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 text-white">Report All </span>
                </a>
              </li>
              <li>
                <a
                  href="/LoginMaintenance"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-3 text-red-700 ">Maintenance Page</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </sidebar>

      {/*  */}
      <main>
        <ul class="hidden mb-4 mt-2 text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
          <button
            onClick={() => setInputSchedule(true)}
            class="w-60 sm:w-36 lg:w-32"
          >
            <button
              onClick={defaultshift1}
              className="inline-block w-full p-4 text-gray-900 bg-white rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              Default Shift 1
            </button>
          </button>
          <button
            onClick={() => setInputSchedule(true)}
            class="w-60 sm:w-36 lg:w-32"
          >
            <button
              onClick={defaultshift2}
              class="inline-block w-full p-4 text-red-900 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Default Shift 2
            </button>
          </button>

          <button class="w-60 sm:w-36 lg:w-32">
            <a
              href="/ScheduleProduction"
              class="inline-block w-full p-4 400 bg-green-700 text-white rounded-r-lg hover:text-green-700 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Schedule
            </a>
          </button>
        </ul>

        <div className="flex">
          {RealProduction ? (
            <>
              <div className="overflow-y-auto max-h-96 sm:ml-0 lg:ml-28  w-[500px]">
                {data ? (
                  <div className="bg-white px-4 py-6 sm:p-6 rounded-lg shadow-md">
                    <h3 className="text-lg font-bold mb-2">
                      Real Production Time
                    </h3>
                    <table>
                      <tr>
                        <td className="font-bold">Production time 1:</td>
                        <span className="px-4 text-lime-800">{RealPT1}</span>
                      </tr>
                      <tr>
                        <td className="font-bold">Production time 2:</td>
                        <span className="px-4 text-lime-800">{RealPT2}</span>
                      </tr>

                      <tr>
                        <td className="font-bold">Planned DT:</td>
                        <span className="px-4 text-lime-800">{RealPD}</span>
                      </tr>
                      <tr>
                        <td className="font-bold">Production time 3:</td>
                        <span className="px-4 text-lime-800">{RealPT3}</span>
                      </tr>

                      <tr>
                        <td className="font-bold">Production time 4:</td>
                        <span className="px-4 text-lime-800">{RealPT4}</span>
                      </tr>
                      <tr>
                        <td className="font-bold">Over Time:</td>
                        <span className="px-4 text-lime-800">{RealOT}</span>
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

                      <p className="text-sm text-white bg-amber-500 text-center justify-center rounded-xl">
                        ON GOING : {ResultsCMA}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </>
          ) : null}

          {InputSchedule ? (
            <>
              <form className="bg-slate-50 w-[900px] sm:w-[600px] lg:w-[650px] px-3 ml-5 rounded-lg ">
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Production Date
                    </label>
                    <input
                      type="Date"
                      id="Production_Date"
                      class="ml-5  g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                      value={PDATE}
                      onChange={(e) => {
                        setPDATE(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex  ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Shift
                    </label>
                    <input
                      type="number"
                      max="5"
                      value={SHIFT}
                      id="Shift"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="1-5"
                      required
                      onChange={(e) => {
                        setSHIFT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* production time 1 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Production Time 1
                    </label>
                    <input
                      value={PT1_IN}
                      type="time"
                      id="first_name"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT1_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={PT1_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT1_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Break1 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Break Time 1
                    </label>
                    <input
                      value={BR1_IN}
                      type="time"
                      id="first_name"
                      class="ml-11 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR1_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={BR1_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR1_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* production time 2 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Production Time 2
                    </label>
                    <input
                      value={PT2_IN}
                      type="time"
                      id="first_name"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT2_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={PT2_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT2_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* break 2 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Break Time 2
                    </label>
                    <input
                      value={BR2_IN}
                      type="time"
                      id="first_name"
                      class="ml-11 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR2_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={BR2_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR2_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* production time 3 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Production Time 3
                    </label>
                    <input
                      value={PT3_IN}
                      type="time"
                      id="first_name"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT3_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={PT3_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT3_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* break 3 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Break Time 3
                    </label>
                    <input
                      value={BR3_IN}
                      type="time"
                      id="first_name"
                      class="ml-11 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR3_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={BR3_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setBR3_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* production time 4 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Production Time 4
                    </label>
                    <input
                      value={PT4_IN}
                      type="time"
                      id="first_name"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT4_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={PT4_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      required
                      onChange={(e) => {
                        setPT4_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* break 4 */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Break Time 4
                    </label>
                    <input
                      value={BR4_IN}
                      type="time"
                      id="first_name"
                      class="ml-11 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setBR4_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={BR4_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setBR4_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* Over Time */}
                <div class=" gap-2 mb-6 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Over Time
                    </label>
                    <input
                      value={OT_IN}
                      type="time"
                      id="first_name"
                      class="ml-7 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setOT_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={OT_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setOT_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                {/* PLANNED DOWN TIME */}
                <div class=" gap-2 mb-4 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Planned DownTime
                    </label>
                    <input
                      value={PD_IN}
                      type="time"
                      id="first_name"
                      class="ml-2 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setPD_IN(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 ml-2">To</h1>
                    <input
                      value={PD_OUT}
                      type="time"
                      id="first_name"
                      class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="John"
                      onChange={(e) => {
                        setPD_OUT(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div class=" gap-2 mb-6 flex py-2 px-1 ">
                  <div className="flex ">
                    <h1>
                      ---------------------------------------------------------------------------------------------
                    </h1>
                  </div>
                </div>
                {/*  Planned Production  */}
                <div class=" gap-2 mb-4 flex py-2 px-3 ">
                  <div className="flex ">
                    <label class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
                      Planned Production
                    </label>
                    <input
                      value={PP}
                      type="text"
                      defaultValue="0 Hours : 0 Minutes"
                      class="ml-12 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setPP(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 text-xs text-red-500 ml-2">
                      !Ganti Angka 0 Untuk Menentukan Waktu
                    </h1>
                  </div>
                </div>

                {/* Planned Downtime */}
                <div class=" gap-2 mb-4 flex py-2 px-3 ">
                  <div className="flex ">
                    <label class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">
                      Planned Downtime
                    </label>
                    <input
                      type="text"
                      defaultValue="0 Hours : 0 Minutes"
                      class="ml-14 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        setPD(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 text-red-500 text-xs ml-2">
                      !Ganti Angka 0 Untuk Menentukan Waktu
                    </h1>
                  </div>
                </div>

                {/* change model */}
                <div class=" gap-2 mb-4 flex py-2 px-3 ">
                  <div className="flex ">
                    <label
                      for="first_name"
                      class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                    >
                      Change Model Alocation
                    </label>
                    <input
                      type="text"
                      id="cma"
                      class="ml-5 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      defaultValue="0 Hours : 0 Minutes"
                      onChange={(e) => {
                        setCMA(e.target.value);
                      }}
                    />
                    <h1 className="mt-3 text-red-500 text-xs ml-2">
                      !Ganti Angka 0 Untuk Menentukan Waktu{" "}
                    </h1>
                  </div>
                </div>

                {/* submit */}
                <div class="flex justify-end">
                  <button
                    type="submit"
                    class=" mb-2 items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto"
                    onClick={submit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </>
          ) : null}

          <ol class="relative border-l border-gray-200 ml-7 dark:border-gray-700">
            <li class="mb-10 ml-6">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src={process.env.PUBLIC_URL + "/Lead.png"}
                  alt="Bonnie image"
                />
              </span>
              <div class="items-center justify-between p-4  bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                <div className="bg-white px-4 h-auto w-96 sm:w-72 lg:w-[400px]  py-6 sm:p-6 ml-3 sm:ml-3 lg:ml-3 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold mb-4">
                    PRODUCTION TIME PLANNING
                  </h3>
                  {data ? (
                    <table>
                      <tbody>
                        <tr>
                          <td className="font-bold text-xs">
                            Date : {formatDate(data.PDATE)}
                          </td>
                          <td className="font-bold text-xs">
                            Shift : {data.SHIFT}{" "}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                           Production Time 1 :
                          </td>
                          <td className="text-sm">
                            <span style={{ color: "green" }}>
                              {data.PT1_IN}
                            </span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.PT1_OUT}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">Break 1:</td>
                          <td className="text-sm bg-orange-500 rounded-lg">
                            {data.BR1_IN} - {data.BR1_OUT}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            Production Time 2:
                          </td>
                          <td className="text-sm">
                            <span style={{ color: "green" }}>
                              {data.PT2_IN}
                            </span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.PT2_OUT}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">Break 2:</td>
                          <td className="text-sm bg-orange-500 rounded-lg">
                            {data.BR2_IN} - {data.BR2_OUT}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            Production Time 3:
                          </td>
                          <td className="text-sm">
                            <span style={{ color: "green" }}>
                              {data.PT3_IN}
                            </span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.PT3_OUT}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">Break 3:</td>
                          <td className="text-sm bg-orange-500 rounded-lg">
                            {data.BR3_IN} - {data.BR3_OUT}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            Production Time 4:
                          </td>
                          <td className="text-sm">
                            <span style={{ color: "green" }}>
                              {data.PT4_IN}
                            </span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.PT4_OUT}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">Break 4:</td>
                          <td className="text-sm bg-orange-500 rounded-lg">
                            {data.BR4_IN} - {data.BR4_OUT}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            --------------------
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">Over Time:</td>
                          <td className="text-sm">
                            <span style={{ color: "green" }}>{data.OT_IN}</span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.OT_OUT}</span>
                          </td>

                        </tr>
                        <tr>
                          <td className="font-bold  text-xs">Planned DT:</td>
                          <td className="text-sm ">
                            <span style={{ color: "green" }}>{data.PD_IN}</span>{" "}
                            -{" "}
                            <span style={{ color: "red" }}>{data.PD_OUT}</span>
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            --------------------
                          </td>
                        </tr>
                        <tr>
                          <td className="font-bold text-xs">
                            Change Model Allocation :
                          </td>
                          <td className="text-sm">{data.CMA} </td>
                        </tr>

                        <tr>
                          <td className="font-bold text-xs">
                            Planned Production :
                          </td>
                          <td className="text-sm">{data.PP} </td>
                        </tr>

                        <tr>
                          <td className="font-bold text-xs">
                            Planned Downtime :
                          </td>
                          <td className="text-sm">{data.PD} </td>
                        </tr>
                      </tbody>
                    </table>
                  ) : (
                    <p>Loading...</p>
                  )}
                  <div className="pt-3 flex">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-2 px-2 rounded"
                      onClick={() => stop("NULL")}
                    >
                      STOP PRODUCTION
                    </button>
                    <button
                      className="bg-lime-900 ml-3 hover:bg-lime-700 text-white text-xs font-bold py-2 px-2 rounded"
                      onClick={Input}
                    >
                      INPUT SCHEDULE
                    </button>
                    <button
                      className="bg-teal-800 ml-3 hover:bg-slate-700 text-white text-xs font-bold py-2 px-2 rounded"
                      onClick={() => {
                        setIsAddOvertime(true);
                  
                      }}
                    >
                      Over Time
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <td class="">
          {IsAddOvertime ? (
            <>
              <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
                style={{ zIndex: 50 }}
              >
                <div class="fixed inset-0 z-50 P overflow-y-auto">
                  <div class="flex items-end justify-center text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                          <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 500 500"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M237.685 263.578C268.085 279.978 302.879 282.927 341.239 274.922L352.053 302.9C304.053 306.562 260.223 302.814 223.466 286.51L237.685 263.574V263.578Z"
                                fill="#FFB83A"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M222.957 280.636C222.957 280.636 193.377 277.459 176.801 287.908C145.513 307.631 130.193 450.132 130.193 450.132C174.854 476.762 294.813 496.967 339.8 478.063C354.781 491.776 391.948 493.963 407.949 483.113C407.949 483.113 417.391 358.19 407.199 330.564C397.007 302.938 360.599 301.576 360.599 301.576L222.956 280.636H222.957Z"
                                fill="#FFC764"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M169.888 464.736C180.642 444.358 205.107 441.058 200.697 439.006C190.676 434.345 174.226 450.192 175.973 440.26C178.408 426.427 190.793 417.66 187.188 413.521C182.144 407.73 179.311 407.939 180.852 401.229C185.052 382.951 202.576 378.323 199.952 377.647C193.095 375.879 189.419 371.874 196.314 335.254C189.933 347.271 186.114 374.24 182.338 383.885C178.562 393.53 172.223 385.847 170.572 394.86C168.921 403.873 173.638 407.383 172.104 414.431C170.57 421.479 161.119 408.014 158.618 415.977C156.117 423.94 165.561 438.103 164.041 445.306C162.521 452.509 146.8 463.13 146.8 463.13C146.8 463.13 158.814 464.066 169.892 464.736H169.888Z"
                                fill="#FFB83A"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M354.88 361.43C354.88 361.43 359.954 375.487 359.801 387.869C359.648 400.469 354.554 410.763 357.801 415.301C361.048 419.839 372.414 405.169 377.829 410.222C382.899 414.949 357.265 413.255 353.829 425.996C352.507 430.905 363.219 423.28 364.99 428.922C366.89 434.971 356.07 430.28 348.612 459.746C346.977 466.778 345.766 473.902 344.986 481.079C343.231 479.944 341.554 478.691 339.969 477.328C337.648 478.24 333.699 479.502 331.829 480.02C333.639 474.336 339.629 464.748 338.094 455.612C336.317 445.034 319.104 437.663 321.85 435.312C331.288 427.212 342.195 443.012 343.039 433.406C344.828 413.055 323.017 403.946 328.658 399.706C337.658 392.942 348.929 411.397 351.738 403.158C355.4 392.424 357.2 379.316 354.888 361.432L354.88 361.43Z"
                                fill="#FFB83A"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M352.882 198.094C362.863 181.62 370.499 163.834 375.569 145.251C388.747 149.718 398.822 135.551 389.357 121.981C403.764 115.992 405.499 95.32 389.148 90.301C399.836 82.445 396.956 64.953 384.343 63.054C391.227 48.309 378.752 33.124 362.772 38.514C367.797 20.245 342.193 7.145 330.592 23.626C323.43 4.193 299.408 7.126 293.992 22.483C281.592 9.619 264.008 18.977 264.487 33.534C249.3 25.648 236 39.663 241.191 54.112C224.1 55.261 221.1 74.646 231.205 85.176C221.934 91.662 225.479 107.403 235.779 110.41L352.879 198.094H352.882Z"
                                fill="#29263B"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M215.784 280.707C197.144 285.401 230.272 327.139 263.584 344.627C320.638 345.411 384.396 310.949 367.668 302.489C342.41 289.718 228.58 277.489 215.78 280.707H215.784Z"
                                fill="#FFB83A"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M241.711 87.082C220.456 121.269 207.853 181.042 224.435 215.282C233.935 234.882 261.62 244.491 261.435 244.216C261.25 243.941 265.895 284.185 238.445 284.547C219.045 284.805 264.256 339.947 264.256 339.947L326.324 295.568C326.324 295.568 313.111 291.356 311.776 280.805C310.441 270.254 327.257 212.916 327.257 212.916C358.372 225.1 362.695 185.573 337.527 185.579C337.527 185.579 354.927 132.879 348.862 116.161C343.47 101.3 248.182 76.674 241.711 87.082Z"
                                fill="#915839"
                              />
                              <path
                                d="M261 259.439C276.887 258.989 290.3 250.406 298.765 237.877C287.524 244.509 274.234 246.767 261.433 244.22C261.799 249.295 261.654 254.393 261 259.439Z"
                                fill="#7B3711"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M238 263.79C231.415 262.157 215.524 275.149 214.065 281.365C223.015 307.194 241.296 326.633 263.67 343.272C300.989 340.46 336.22 326.124 370.311 305.501C369.011 296.201 347.618 274.512 340.602 274.901C319.219 297.101 293.886 318.158 264.602 338.073C249.088 315.8 239.722 291.229 238 263.79Z"
                                fill="#FFDC9C"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M279.494 337.256L272.739 383.777L285.247 384.516L291.245 336.409L279.494 337.256Z"
                                fill="white"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M248.242 325.101L235.417 373.98L244.161 376.265L254.748 330.8L248.242 325.101Z"
                                fill="white"
                              />
                              <path
                                d="M255.541 187.716C255.373 187.717 255.209 187.66 255.077 187.555C254.623 187.195 243.958 178.675 243.883 171.855C243.774 161.664 260.865 137.707 261.592 136.692C261.709 136.535 261.883 136.43 262.077 136.399C262.271 136.369 262.468 136.416 262.628 136.53C262.787 136.644 262.895 136.817 262.929 137.01C262.963 137.203 262.919 137.402 262.808 137.563C262.633 137.808 245.274 162.135 245.379 171.839C245.446 177.949 255.9 186.299 256.005 186.383C256.127 186.479 256.215 186.611 256.258 186.76C256.302 186.909 256.298 187.068 256.247 187.215C256.196 187.361 256.1 187.488 255.974 187.578C255.847 187.668 255.696 187.717 255.541 187.717V187.716Z"
                                fill="#29263B"
                              />
                              <path
                                d="M273.387 218.3C273.201 218.3 273.022 218.23 272.884 218.105C272.747 217.979 272.661 217.807 272.644 217.622C272.178 212.632 268.901 208.422 263.653 206.063C259.101 204.019 254.678 204.051 253.027 205.263C252.792 205.412 252.606 205.626 252.491 205.88C252.376 206.133 252.337 206.414 252.379 206.689C252.394 206.788 252.388 206.889 252.363 206.986C252.338 207.082 252.294 207.173 252.233 207.253C252.172 207.332 252.096 207.399 252.009 207.448C251.922 207.498 251.826 207.529 251.727 207.541C251.628 207.553 251.527 207.544 251.431 207.517C251.335 207.489 251.245 207.442 251.168 207.379C251.09 207.316 251.026 207.238 250.979 207.15C250.932 207.061 250.903 206.965 250.894 206.865C250.823 206.327 250.902 205.781 251.123 205.285C251.343 204.79 251.696 204.365 252.142 204.057C254.456 202.357 259.667 202.632 264.266 204.698C270.019 207.281 273.615 211.941 274.133 217.483C274.151 217.68 274.09 217.877 273.964 218.029C273.837 218.182 273.655 218.278 273.458 218.297C273.434 218.294 273.411 218.3 273.387 218.3Z"
                                fill="#29263B"
                              />
                              <path
                                d="M326.167 138.033C325.42 138.032 324.7 137.751 324.149 137.246C323.598 136.741 323.256 136.048 323.19 135.304C322.433 126.704 318.365 122.259 310.39 121.326C310 121.28 309.622 121.158 309.28 120.967C308.937 120.775 308.635 120.518 308.391 120.21C308.147 119.902 307.967 119.549 307.86 119.171C307.753 118.793 307.721 118.398 307.767 118.007C307.812 117.617 307.934 117.24 308.126 116.897C308.317 116.554 308.574 116.252 308.882 116.008C309.191 115.765 309.544 115.584 309.922 115.477C310.3 115.37 310.695 115.338 311.085 115.384C321.9 116.649 328.148 123.356 329.153 134.779C329.188 135.17 329.145 135.565 329.027 135.939C328.909 136.314 328.719 136.662 328.466 136.963C328.214 137.264 327.905 137.512 327.556 137.694C327.208 137.876 326.827 137.987 326.436 138.021C326.343 138.029 326.255 138.033 326.167 138.033Z"
                                fill="#29263B"
                              />
                              <path
                                d="M242.746 112.863C242.202 112.862 241.668 112.713 241.202 112.432C240.737 112.151 240.356 111.748 240.103 111.266C239.849 110.785 239.731 110.243 239.762 109.7C239.793 109.157 239.972 108.632 240.279 108.183C245.295 100.845 251.919 99.354 258.929 103.989C259.578 104.432 260.026 105.113 260.177 105.884C260.329 106.655 260.17 107.454 259.737 108.11C259.304 108.765 258.63 109.224 257.861 109.387C257.093 109.549 256.291 109.403 255.629 108.98C251.4 106.18 248.382 106.93 245.219 111.559C244.944 111.961 244.575 112.291 244.144 112.518C243.713 112.745 243.233 112.864 242.746 112.863Z"
                                fill="#29263B"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M310.33 131.643C313.675 132.523 315.03 138.395 313.355 144.749C311.68 151.103 307.608 155.542 304.264 154.66C300.92 153.778 299.564 147.908 301.239 141.554C302.914 135.2 306.989 130.761 310.33 131.643Z"
                                fill="#29263B"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M251.613 117.164C254.955 118.044 256.313 123.916 254.637 130.264C252.961 136.612 248.888 141.064 245.546 140.178C242.204 139.292 240.846 133.423 242.522 127.072C244.198 120.721 248.268 116.279 251.613 117.161V117.164Z"
                                fill="#29263B"
                              />
                              <path
                                d="M332.157 206.344C332.095 206.344 332.033 206.336 331.973 206.321C331.781 206.272 331.616 206.149 331.515 205.979C331.413 205.809 331.384 205.605 331.432 205.413C332.014 203.416 333.058 201.584 334.479 200.066C335.9 198.547 337.659 197.384 339.613 196.671C340.921 196.125 342.345 195.918 343.754 196.068C345.162 196.218 346.511 196.721 347.674 197.53C347.829 197.649 347.931 197.824 347.959 198.018C347.986 198.212 347.937 198.409 347.821 198.566C347.705 198.724 347.532 198.83 347.339 198.861C347.146 198.893 346.948 198.848 346.788 198.735C345.821 198.075 344.703 197.669 343.537 197.555C342.372 197.44 341.196 197.62 340.119 198.079C338.393 198.705 336.839 199.728 335.582 201.065C334.324 202.403 333.4 204.018 332.882 205.779C332.841 205.94 332.748 206.084 332.617 206.186C332.485 206.288 332.324 206.344 332.157 206.344Z"
                                fill="#29263B"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M113.864 350.347C112.237 351.681 108.943 365.017 103.714 385.069C101.545 393.38 96.406 406.515 94.808 414.811C93.175 423.289 93.558 430.636 92.108 437.373C89.786 448.16 88.066 454.963 88.066 454.963C97.711 467.263 147.426 478.763 162.085 464.282C162.085 464.282 166.109 453.156 167.458 447.436C168.358 443.631 163.958 437.762 165.22 433.316C167.03 426.935 165.962 420.055 167.76 413.109C173.366 391.447 179.816 380.564 178.784 375.125C175.948 360.189 126.941 339.625 113.862 350.347H113.864Z"
                                fill="#FFC764"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M168.13 401.783C153.256 415.972 111.952 406.548 104.022 401.448C103.247 406.91 103.367 417.105 105.979 423.678C108.351 429.652 124.343 438.701 151.285 440.263C152.585 458.23 99.496 439.422 94.835 438.65C98.817 453.33 138.051 459.6 164.098 448.034C165.755 440.927 151.428 448.462 161.798 432.534C164.036 429.096 144.717 428.265 146.191 417.486C146.992 411.613 164.992 418.67 168.13 401.783ZM155.15 434.034C155.515 439.868 117.915 434.199 106.894 406.623C122.65 426.912 136.301 422.176 142.427 424.342C148.553 426.508 143.151 432.027 155.15 434.034Z"
                                fill="#FFB83A"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M172.522 368.332C175.896 370.414 177.978 378.003 173.822 377.815C168.841 377.587 164.122 370.922 156.122 370.632C148.122 370.342 115.964 364.832 115.985 351.624C128.035 343.624 159.266 356.644 163.87 362.681C170.47 371.344 172.516 373.675 172.516 368.332H172.522Z"
                                fill="#F8C500"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M170.033 250.11C184.076 232.555 215.133 200.91 225.956 213.185C235.075 223.527 208.266 239.185 202.023 250.806C206.744 248.69 215.623 257.364 209.915 267.906C218.378 269.077 222.228 281.111 218.296 287.432C226.51 290.219 225.976 305.925 222.455 310.361C215.996 318.49 207.245 321.878 197.043 316.795C190.69 340.084 183.687 352.283 169.523 352.895C168.223 352.7 162.862 363.106 160.523 367.252C143.485 368.82 120.323 359.415 121.114 351.952C121.114 351.952 151.77 272.958 170.038 250.116L170.033 250.11Z"
                                fill="#915939"
                              />
                              <path
                                d="M197.083 317.486C196.963 317.485 196.846 317.456 196.74 317.4C196.634 317.345 196.543 317.265 196.474 317.167C196.406 317.069 196.362 316.956 196.346 316.838C196.33 316.719 196.343 316.599 196.383 316.486C199.003 309.196 203.964 305.21 209.349 306.086C209.446 306.102 209.539 306.137 209.622 306.188C209.706 306.24 209.779 306.308 209.836 306.388C209.893 306.467 209.934 306.558 209.957 306.653C209.979 306.749 209.983 306.848 209.967 306.945C209.951 307.042 209.916 307.135 209.865 307.218C209.813 307.302 209.745 307.375 209.665 307.432C209.586 307.489 209.495 307.53 209.4 307.553C209.304 307.575 209.205 307.579 209.108 307.563C204.488 306.813 200.151 310.425 197.79 316.994C197.737 317.139 197.641 317.264 197.515 317.352C197.388 317.44 197.237 317.487 197.083 317.486Z"
                                fill="#29263B"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M116.94 55.447C116.877 42.564 126.885 31.38 149.285 30.936C171.685 30.492 186.637 44.523 183.96 55.388C180.468 69.563 156.131 73.544 156.526 88.497C156.587 90.772 141.769 90.566 141.769 88.291C141.428 73.4 170.986 66.2 171.433 55.11C171.823 45.389 163.883 40.119 149.406 40.119C139.348 40.119 130.894 45.3 130.153 55.331C130.027 57.451 116.953 57.57 116.94 55.447Z"
                                fill="#E1B100"
                              />
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M149.065 95.564C154.71 95.564 159.293 98.598 159.293 102.339C159.293 106.08 154.71 109.113 149.065 109.113C143.42 109.113 138.839 106.078 138.839 102.339C138.839 98.6 143.422 95.564 149.065 95.564Z"
                                fill="#E1B100"
                              />
                            </svg>
                          </div>

                          <span className=" ml-2 mt-2 font-bold">
                            Ubah Atau Tambahkan Overtime
                          </span>
                        </div>
                        <form className="mt-2">
                          <div class="mb-1">
                            {/* Over Time */}
                            <div class=" gap-2 mb-3 flex py-2 px-3 ">
                              <div className="flex ">
                                <label
                                  for="first_name"
                                  class=" mt-3  block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center"
                                >
                                  Over Time
                                </label>
                                <input
                                  value={OT_IN}
                                  type="time"
                                  id="first_name"
                                  class="ml-7 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="John"
                                  onChange={(e) => {
                                    setOT_IN(e.target.value);
                                  }}
                                />
                                <h1 className="mt-3 ml-2">To</h1>
                                <input
                                  value={OT_OUT}
                                  type="time"
                                  id="first_name"
                                  class="ml-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                  placeholder="John"
                                  onChange={(e) => {
                                    setOT_OUT(e.target.value);
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          onClick={UpdateOverTime}
                          type="button"
                          class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        >
                          Submit
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                           setIsAddOvertime(false);
                          }}
                          class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </td>


      </main>
    </body>
  );
};

export default SmtTop;
