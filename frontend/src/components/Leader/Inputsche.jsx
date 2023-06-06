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
  const [mesin, setMesin] = useState("");
  const [line, setLine] = useState("");
  const [nama, setNama] = useState("");
  const [area, setArea] = useState("");
  const [station, setStation] = useState("");
  const [timer, setTimer] = useState("");
  const [time, setTime] = useState(new Date().toLocaleString());
  const [prevStatus, setPrevStatus] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // popup 1

  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [NamaPIC, setNamaPIC] = useState("");
  const [NpkPIC, setNpkPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");
  const [data, setData] = useState(null);

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

    fetch(`http://192.168.101.236:3001/api/post/Inputsche`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          setIsOpen(false);
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // RESET

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
      VALUE: value,
    };

    fetch(`http://192.168.101.236:3001/api/post/Inputsche`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Production Berhasil Di Reset");
          setIsOpen(false);
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
    backgroundImage: `url(${process.env.PUBLIC_URL}/l.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "500px",
    height: "8000px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let interval;

    const startCountdown = (startTime, endTime) => {
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
            .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1")
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

    if (data && data.PT1_IN && data.PT1_OUT) {
      interval = startCountdown(data.PT1_IN, data.PT1_OUT);
    }

    return () => {
      clearInterval(interval);
    };
  }, [data]);



  const defaultshift1 = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    const formattedDate = `${year}-${month}-${day}`;
    setPDATE(formattedDate);
    
    setSHIFT("1");
    setPT1_IN("07:00");
    setPT1_OUT("07:00");
    setPT2_IN("07:00");
    setPT2_OUT("07:00");
    setPT3_IN("07:00");
    setPT3_OUT("07:00");
    setPT4_IN("07:00");
    setPT4_OUT("07:00");
    setBR1_IN("07:00");
    setBR1_OUT("07:00");
    setBR2_IN("07:00");
    setBR2_OUT("07:22");
    setBR3_IN("07:00");
    setBR3_OUT("07:32");
    setBR4_IN("07:00");
    setBR4_OUT("07:43");
    setPD_IN("07:22");
    setPD_OUT("07:00");
    setOT_IN("Null");
    setOT_OUT("Null");
    setPD_IN("Null");
    setPD_OUT("Null");
    setPP("9 Hours : 0 Minutes");
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
          <marquee behavior="scroll" direction="right">
            <h1 class="text-xl font-bold tracking-tight text-gray-900">
              SMT LINE 1 - LEADER - Input Schedule Production
            </h1>
          </marquee>
        </div>
      </header>

      <sidebar>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64  p-4 overflow-y-auto transition-transform ${
            showDrawer ? "" : "-translate-x-full"
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
        <ul class="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex mx-auto justify-center item dark:divide-gray-700 dark:text-gray-400">
          <li class="w-60 sm:w-36 lg:w-32">
            <button
              className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
              onClick={defaultshift1}
            >
              Default Shift 1
            </button>
          </li>
          <button onClick={() => setIsOpen2(true)} class="w-60 sm:w-36 lg:w-32">
            <a
              href="#"
              class="inline-block w-full p-4 text-red-900 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Default Shift 2
            </a>
          </button>

          <button class="w-60 sm:w-36 lg:w-32">
            <a
              href="/Andonline1"
              class="inline-block w-full p-4 400 bg-blue-700 text-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              BACK
            </a>
          </button>
        </ul>

        <div className=" pt-3">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-normal px-2">
            Input Schedule Production
          </span>
        </div>

        <div className="flex">
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
                  required
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
                  required
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
                  Over Time Time
                </label>
                <input
                value={OT_IN}
                  type="time"
                  id="first_name"
                  class="ml-7 g-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                  required
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
                required
              >
                Submit
              </button>
            </div>
          </form>

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
                            Planned Production Time 1 :
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
                      <tr>
                        <td className="font-bold text-xs">
                          --------------------
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-xs">
                          REAL PRODUCTION TIME
                        </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-xs">
                          Change Model Allocation :
                        </td>
                        <td className="text-sm">{data.ResultsCMA} </td>
                      </tr>

                      <tr>
                        <td className="font-bold text-xs">Production :</td>
                        <td className="text-sm">Loading.... </td>
                      </tr>
                      <tr>
                        <td className="font-bold text-xs">Downtime :</td>
                        <td className="text-sm">Loading....</td>
                      </tr>
                    </table>
                  ) : (
                    <p>Loading...</p>
                  )}
                  <div className="pt-3">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white text-xs font-bold py-2 px-4 rounded"
                      onClick={() => stop("NULL")}
                    >
                      STOP PRODUCTION
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </main>
    </body>
  );
};

export default SmtTop;
