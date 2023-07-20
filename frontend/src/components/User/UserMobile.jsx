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

const UserMobile = () => {
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

  // Selceted Name

  // Tanpa database
  const [selectedOptionDepartment, setSelectedOptionDepartment] =
    useState(null);
  // ....

  const [optionsOperator, setOptionsOperator] = useState([]);
  const [selectedOptionOperator, setSelectedOptionOperator] = useState(null);

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
    });


    const ref4 = firebase.database().ref("SMTLine1/Electricity");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      updateElectricity(data);
    });


    return () => {};
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
  const updateElectricity = (data) => {
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


  // ----

  // ------

  // Function Call Leader
  const handleCall = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281380996094";
  };

  const handleCall2 = () => {
    window.location.href = "https://api.whatsapp.com/send?phone=6281929749600";
  };
  // ------

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

        <div className=" ">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            Failure
          </span>
        </div>

        <div>
          <div class="pt-3 flex   md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorElectricity }}
                    value={Electricity}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      className="justify-center items-center mx-auto"
                      width="60px"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M829.44 911.36c45.245 0 81.92-36.675 81.92-81.92V194.56c0-45.245-36.675-81.92-81.92-81.92H194.56c-45.245 0-81.92 36.675-81.92 81.92v634.88c0 45.245 36.675 81.92 81.92 81.92h634.88zm0 40.96H194.56c-67.866 0-122.88-55.014-122.88-122.88V194.56c0-67.866 55.014-122.88 122.88-122.88h634.88c67.866 0 122.88 55.014 122.88 122.88v634.88c0 67.866-55.014 122.88-122.88 122.88z" />
                      <path d="M727.746 234.526l-.358.247c.12-.078.239-.16.358-.247zm-304.56 198.992l53.506 34.806c9.143 5.947 12.02 18.016 6.545 27.449L322.853 772.067l277.96-181.589-53.507-34.807c-9.143-5.947-12.02-18.016-6.545-27.449l160.378-276.284-277.953 181.579zm14.854 58.527l-63.524-41.323c-12.402-8.068-12.42-26.221-.033-34.313L704.13 201.06c29.158-20.549 66.411 12.954 48.276 44.151l-166.448 286.74 63.524 41.323c12.402 8.068 12.42 26.221.034 34.313L319.883 822.934c-29.153 20.564-66.398-12.925-48.29-44.148l166.448-286.74z" />
                    </svg>
                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Electricity
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      width="60px"
                      className="justify-center items-center mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.496094 0.480469 c -0.3984378 0.378906 -0.410156 1.011719 -0.03125 1.410156 c 0.382812 0.398438 1.015625 0.410156 1.414062 0.03125 l 0.5 -0.476562 c 3.085938 -2.957032 8.53125 -2.957032 11.617188 0 l 0.5 0.476562 c 0.398437 0.378906 1.03125 0.367188 1.414062 -0.03125 c 0.378906 -0.398437 0.367188 -1.03125 -0.03125 -1.410156 l -0.496094 -0.480469 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -0.03125 4.007812 c -1.570312 0.011719 -3.128906 0.628906 -4.207031 1.8125 l -0.5 0.550781 c -0.375 0.40625 -0.347657 1.042969 0.0625 1.414063 c 0.410156 0.371094 1.042969 0.339844 1.414062 -0.070313 l 0.5 -0.546875 c 1.277344 -1.402344 4.160157 -1.496094 5.523438 0 l 0.5 0.546875 c 0.371093 0.410157 1.003906 0.441407 1.414062 0.070313 c 0.40625 -0.371094 0.4375 -1.007813 0.0625 -1.414063 l -0.5 -0.550781 c -1.125 -1.230469 -2.703125 -1.824219 -4.269531 -1.8125 z m 0.03125 4 c -0.511719 0 -1.023438 0.195312 -1.414062 0.585938 c -0.78125 0.78125 -0.78125 2.046874 0 2.828124 s 2.046874 0.78125 2.828124 0 s 0.78125 -2.046874 0 -2.828124 c -0.390624 -0.390626 -0.902343 -0.585938 -1.414062 -0.585938 z m 0 0"
                        fill="#2e3436"
                        fill-opacity="0.7000"
                      />
                    </svg>
                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Network
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      className="justify-center items-center mx-auto"
                      version="1.1"
                      id="Capa_1"
                      width="60px"
                      viewBox="0 0 913.443 913.443"
                    >
                      <g>
                        <g>
                          <path
                            d="M160.172,752.869l-35.715,85.408c-2.255,5.395,1.707,11.346,7.553,11.346h101.786c8.608,0,16.375-5.17,19.695-13.113
			l34.305-82.037H186.389C177.561,754.473,168.815,753.934,160.172,752.869z"
                          />
                          <path
                            d="M484.246,201.833v105.811h242.809c28.527,0,56.213,5.593,82.291,16.622c21.188,8.962,40.545,21.188,57.717,36.4V201.833
			c0-14.329-11.615-25.945-25.945-25.945H510.191C495.861,175.888,484.246,187.504,484.246,201.833z"
                          />
                          <path
                            d="M863.732,669.795c30.844-33.254,49.711-77.775,49.711-126.711v-24.051c0-47.148-17.514-90.2-46.381-123.025
			c-34.158-38.843-84.217-63.364-140.008-63.364H484.246h-51.687v-12.5v-12.5V115.131l110.21-0.232
			c5.643,12.801,18.436,21.741,33.324,21.741h91.76c20.109,0,36.41-16.301,36.41-36.41s-16.301-36.41-36.41-36.41l-260.699,0.167
			c-13.61,0-25.004,11.143-25.435,24.664c-0.043,0.594-0.073,1.192-0.073,1.795v217.197v12.5v12.5H186.389
			C83.45,332.644,0,416.092,0,519.033v24.051c0,97.5,74.868,177.502,170.249,185.686c5.32,0.455,10.701,0.703,16.14,0.703H298.25
			h265.603c-0.178-3.041-0.277-6.096-0.277-9.166c0-20.82,4.082-41.033,12.137-60.072c7.773-18.381,18.896-34.881,33.061-49.045
			c14.164-14.162,30.664-25.285,49.043-33.061c19.041-8.053,39.252-12.137,60.074-12.137s41.033,4.084,60.074,12.137
			c18.379,7.775,34.879,18.898,49.043,33.061c14.164,14.164,25.287,30.664,33.061,49.043
			C861.402,663.389,862.617,666.578,863.732,669.795z"
                          />
                          <path
                            d="M843.32,688.76c-14.082-56.168-64.895-97.766-125.43-97.766c-71.418,0-129.314,57.896-129.314,129.314
			c0,3.082,0.115,6.137,0.328,9.164c0.295,4.227,0.795,8.396,1.488,12.5c0.715,4.24,1.637,8.41,2.754,12.5
			c14.986,54.838,65.154,95.15,124.744,95.15c71.418,0,129.314-57.896,129.314-129.314c0-1.086-0.016-2.168-0.041-3.248
			c-0.121-4.957-0.531-9.84-1.197-14.643C845.326,697.781,844.441,693.225,843.32,688.76z M717.891,762.959
			c-9.576,0-18.416-3.156-25.535-8.486c-4.51-3.375-8.322-7.629-11.201-12.5c-2.26-3.824-3.938-8.029-4.916-12.5
			c-0.646-2.953-0.998-6.018-0.998-9.164c0-23.555,19.096-42.65,42.65-42.65s42.652,19.096,42.652,42.65
			c0,2.123-0.16,4.207-0.461,6.248c-0.697,4.746-2.18,9.232-4.305,13.336c-2.801,5.406-6.721,10.133-11.457,13.879
			C737.053,759.518,727.877,762.959,717.891,762.959z"
                          />
                        </g>
                      </g>
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Air Compressor
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      width="60px"
                      fill-opacity="0.7000"
                      className="justify-center items-center mx-auto"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15.0002 4V5C15.0002 6.88562 15.0002 7.82843 15.586 8.41421C16.1718 9 17.1146 9 19.0002 9H20.5002M20.5002 9L18.0002 7M20.5002 9L18.0002 11"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.1008 15.0272L15.6446 15.5437V15.5437L15.1008 15.0272ZM15.5562 14.5477L15.0124 14.0312V14.0312L15.5562 14.5477ZM17.9729 14.2123L17.5987 14.8623H17.5987L17.9729 14.2123ZM19.8834 15.312L19.5092 15.962L19.8834 15.312ZM20.4217 18.7584L20.9655 19.275L20.9655 19.2749L20.4217 18.7584ZM19.0012 20.254L18.4574 19.7375L19.0012 20.254ZM17.6763 20.9631L17.75 21.7095L17.6763 20.9631ZM7.8154 16.4752L8.3592 15.9587L7.8154 16.4752ZM3.75185 6.92574C3.72965 6.51212 3.37635 6.19481 2.96273 6.21701C2.54911 6.23921 2.23181 6.59252 2.25401 7.00613L3.75185 6.92574ZM9.19075 8.80507L9.73454 9.32159L9.19075 8.80507ZM9.47756 8.50311L10.0214 9.01963L9.47756 8.50311ZM9.63428 5.6931L10.2467 5.26012L9.63428 5.6931ZM8.3733 3.90961L7.7609 4.3426V4.3426L8.3733 3.90961ZM4.7177 3.09213C4.43244 3.39246 4.44465 3.86717 4.74498 4.15244C5.04531 4.4377 5.52002 4.42549 5.80529 4.12516L4.7177 3.09213ZM11.0632 13.0559L11.607 12.5394L11.0632 13.0559ZM10.6641 19.8123C11.0148 20.0327 11.4778 19.9271 11.6982 19.5764C11.9186 19.2257 11.8129 18.7627 11.4622 18.5423L10.6641 19.8123ZM15.113 20.0584C14.7076 19.9735 14.3101 20.2334 14.2252 20.6388C14.1403 21.0442 14.4001 21.4417 14.8056 21.5266L15.113 20.0584ZM15.6446 15.5437L16.1 15.0642L15.0124 14.0312L14.557 14.5107L15.6446 15.5437ZM17.5987 14.8623L19.5092 15.962L20.2575 14.662L18.347 13.5623L17.5987 14.8623ZM19.8779 18.2419L18.4574 19.7375L19.545 20.7705L20.9655 19.275L19.8779 18.2419ZM8.3592 15.9587C4.48307 11.8778 3.83289 8.43556 3.75185 6.92574L2.25401 7.00613C2.35326 8.85536 3.13844 12.6403 7.27161 16.9917L8.3592 15.9587ZM9.73454 9.32159L10.0214 9.01963L8.93377 7.9866L8.64695 8.28856L9.73454 9.32159ZM10.2467 5.26012L8.98569 3.47663L7.7609 4.3426L9.02189 6.12608L10.2467 5.26012ZM9.19075 8.80507C8.64695 8.28856 8.64626 8.28929 8.64556 8.29002C8.64533 8.29028 8.64463 8.29102 8.64415 8.29152C8.6432 8.29254 8.64223 8.29357 8.64125 8.29463C8.63928 8.29675 8.63724 8.29896 8.63515 8.30127C8.63095 8.30588 8.6265 8.31087 8.62182 8.31625C8.61247 8.32701 8.60219 8.33931 8.5912 8.3532C8.56922 8.38098 8.54435 8.41511 8.51826 8.45588C8.46595 8.53764 8.40921 8.64531 8.36117 8.78033C8.26346 9.0549 8.21022 9.4185 8.27675 9.87257C8.40746 10.7647 8.99202 11.9644 10.5194 13.5724L11.607 12.5394C10.1793 11.0363 9.82765 10.1106 9.7609 9.65511C9.72871 9.43536 9.76142 9.31957 9.77436 9.28321C9.78163 9.26277 9.78639 9.25709 9.78174 9.26437C9.77948 9.26789 9.77498 9.27451 9.76742 9.28407C9.76363 9.28885 9.75908 9.29437 9.75364 9.30063C9.75092 9.30375 9.74798 9.30706 9.7448 9.31056C9.74321 9.31231 9.74156 9.3141 9.73985 9.31594C9.739 9.31686 9.73813 9.31779 9.73724 9.31873C9.7368 9.3192 9.73612 9.31992 9.7359 9.32015C9.73522 9.32087 9.73454 9.32159 9.19075 8.80507ZM10.5194 13.5724C12.0422 15.1757 13.1924 15.806 14.0699 15.9485C14.5201 16.0216 14.8846 15.9632 15.1606 15.8544C15.2955 15.8012 15.4023 15.7387 15.4824 15.6819C15.5223 15.6535 15.5556 15.6266 15.5825 15.6031C15.5959 15.5913 15.6078 15.5803 15.6181 15.5703C15.6233 15.5654 15.628 15.5606 15.6324 15.5562C15.6346 15.554 15.6368 15.5518 15.6388 15.5497C15.6398 15.5487 15.6408 15.5477 15.6417 15.5467C15.6422 15.5462 15.6429 15.5454 15.6432 15.5452C15.6439 15.5444 15.6446 15.5437 15.1008 15.0272C14.557 14.5107 14.5577 14.51 14.5583 14.5093C14.5586 14.509 14.5592 14.5083 14.5597 14.5078C14.5606 14.5069 14.5615 14.506 14.5623 14.5051C14.5641 14.5033 14.5658 14.5015 14.5675 14.4998C14.5708 14.4965 14.574 14.4933 14.577 14.4904C14.5831 14.4846 14.5885 14.4796 14.5933 14.4754C14.6029 14.467 14.61 14.4616 14.6146 14.4584C14.6239 14.4517 14.623 14.454 14.6102 14.459C14.5909 14.4666 14.5001 14.4987 14.3103 14.4679C13.9078 14.4025 13.0391 14.0472 11.607 12.5394L10.5194 13.5724ZM8.98569 3.47663C7.9721 2.04305 5.94388 1.80119 4.7177 3.09213L5.80529 4.12516C6.32812 3.57471 7.24855 3.61795 7.7609 4.3426L8.98569 3.47663ZM18.4574 19.7375C18.1783 20.0313 17.8864 20.1887 17.6026 20.2167L17.75 21.7095C18.497 21.6357 19.1016 21.2373 19.545 20.7705L18.4574 19.7375ZM10.0214 9.01963C10.9889 8.00095 11.0574 6.40678 10.2467 5.26012L9.02189 6.12608C9.44404 6.72315 9.3793 7.51753 8.93377 7.9866L10.0214 9.01963ZM19.5092 15.962C20.3301 16.4345 20.4907 17.5968 19.8779 18.2419L20.9655 19.2749C22.2705 17.901 21.8904 15.6019 20.2575 14.662L19.5092 15.962ZM16.1 15.0642C16.4854 14.6584 17.086 14.5672 17.5987 14.8623L18.347 13.5623C17.2485 12.93 15.8862 13.1113 15.0124 14.0312L16.1 15.0642ZM11.4622 18.5423C10.4785 17.9241 9.43149 17.0876 8.3592 15.9587L7.27161 16.9917C8.42564 18.2067 9.56897 19.1241 10.6641 19.8123L11.4622 18.5423ZM17.6026 20.2167C17.0561 20.2707 16.1912 20.2842 15.113 20.0584L14.8056 21.5266C16.0541 21.788 17.0742 21.7762 17.75 21.7095L17.6026 20.2167Z"
                        fill="#1C274C"
                      />
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Department
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      className="justify-center mt-1 items-center mx-auto"
                      width="50px"
                      viewBox="0 0 16 16"
                      id="hardware-16px"
                    >
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M37.5,0h-13A1.5,1.5,0,0,0,23,1.5v13A1.5,1.5,0,0,0,24.5,16h13A1.5,1.5,0,0,0,39,14.5V1.5A1.5,1.5,0,0,0,37.5,0Zm0,15H28v-.5a.5.5,0,0,0-1,0V15H26V12.5a.5.5,0,0,0-1,0V15h-.5a.5.5,0,0,1-.5-.5V1.5a.5.5,0,0,1,.5-.5H29V9.5a.5.5,0,0,0,.5.5h1.592a1.5,1.5,0,1,0,0-1H30V1h7.5a.5.5,0,0,1,.5.5V2H35.5a.5.5,0,0,0,0,1H38V4H36.5a.5.5,0,0,0,0,1H38V6H33V4.908a1.5,1.5,0,1,0-1,0V6.5a.5.5,0,0,0,.5.5H38v7.5A.5.5,0,0,1,37.5,15ZM32,9.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,9.5Zm0-6a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,3.5ZM35.5,11a1.5,1.5,0,0,0-1.408,1H28.707L27,10.293V4.908a1.5,1.5,0,1,0-1,0V10.5a.5.5,0,0,0,.146.354l2,2A.5.5,0,0,0,28.5,13h5.592A1.5,1.5,0,1,0,35.5,11Zm-9-8a.5.5,0,1,1-.5.5A.5.5,0,0,1,26.5,3Zm9,10a.5.5,0,1,1,.5-.5A.5.5,0,0,1,35.5,13Z"
                        transform="translate(-23)"
                      />
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Shortage Comp
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      className="justify-center mt-1 items-center mx-auto"
                      width="50px"
                      viewBox="0 0 16 16"
                      id="hardware-16px"
                    >
                      <path
                        id="Path_94"
                        data-name="Path 94"
                        d="M37.5,0h-13A1.5,1.5,0,0,0,23,1.5v13A1.5,1.5,0,0,0,24.5,16h13A1.5,1.5,0,0,0,39,14.5V1.5A1.5,1.5,0,0,0,37.5,0Zm0,15H28v-.5a.5.5,0,0,0-1,0V15H26V12.5a.5.5,0,0,0-1,0V15h-.5a.5.5,0,0,1-.5-.5V1.5a.5.5,0,0,1,.5-.5H29V9.5a.5.5,0,0,0,.5.5h1.592a1.5,1.5,0,1,0,0-1H30V1h7.5a.5.5,0,0,1,.5.5V2H35.5a.5.5,0,0,0,0,1H38V4H36.5a.5.5,0,0,0,0,1H38V6H33V4.908a1.5,1.5,0,1,0-1,0V6.5a.5.5,0,0,0,.5.5H38v7.5A.5.5,0,0,1,37.5,15ZM32,9.5a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,9.5Zm0-6a.5.5,0,1,1,.5.5A.5.5,0,0,1,32,3.5ZM35.5,11a1.5,1.5,0,0,0-1.408,1H28.707L27,10.293V4.908a1.5,1.5,0,1,0-1,0V10.5a.5.5,0,0,0,.146.354l2,2A.5.5,0,0,0,28.5,13h5.592A1.5,1.5,0,1,0,35.5,11Zm-9-8a.5.5,0,1,1-.5.5A.5.5,0,0,1,26.5,3Zm9,10a.5.5,0,1,1,.5-.5A.5.5,0,0,1,35.5,13Z"
                        transform="translate(-23)"
                      />
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm  text-white">
                        Shortage Box FG
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      width="50px"
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      className="justify-center items-center mx-auto"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M10.5 11.5L12 10V14"
                        stroke="#1C274C"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.5 19.75C9.91421 19.75 10.25 19.4142 10.25 19C10.25 18.5858 9.91421 18.25 9.5 18.25V19.75ZM11 5V5.75C11.3033 5.75 11.5768 5.56727 11.6929 5.28701C11.809 5.00676 11.7448 4.68417 11.5303 4.46967L11 5ZM9.53033 2.46967C9.23744 2.17678 8.76256 2.17678 8.46967 2.46967C8.17678 2.76256 8.17678 3.23744 8.46967 3.53033L9.53033 2.46967ZM1.25 12C1.25 12.4142 1.58579 12.75 2 12.75C2.41421 12.75 2.75 12.4142 2.75 12H1.25ZM3.86991 15.5709C3.63293 15.2312 3.16541 15.1479 2.82569 15.3849C2.48596 15.6219 2.40267 16.0894 2.63965 16.4291L3.86991 15.5709ZM9.5 18.25H9.00028V19.75H9.5V18.25ZM9 5.75H11V4.25H9V5.75ZM11.5303 4.46967L9.53033 2.46967L8.46967 3.53033L10.4697 5.53033L11.5303 4.46967ZM2.75 12C2.75 8.54822 5.54822 5.75 9 5.75V4.25C4.71979 4.25 1.25 7.71979 1.25 12H2.75ZM2.63965 16.4291C4.03893 18.435 6.36604 19.75 9.00028 19.75V18.25C6.87703 18.25 5.00068 17.1919 3.86991 15.5709L2.63965 16.4291Z"
                        fill="#1C274C"
                      />
                      <path
                        d="M13 19V18.25C12.6967 18.25 12.4232 18.4327 12.3071 18.713C12.191 18.9932 12.2552 19.3158 12.4697 19.5303L13 19ZM14.4697 21.5303C14.7626 21.8232 15.2374 21.8232 15.5303 21.5303C15.8232 21.2374 15.8232 20.7626 15.5303 20.4697L14.4697 21.5303ZM14.5 4.25C14.0858 4.25 13.75 4.58579 13.75 5C13.75 5.41421 14.0858 5.75 14.5 5.75V4.25ZM22.75 12C22.75 11.5858 22.4142 11.25 22 11.25C21.5858 11.25 21.25 11.5858 21.25 12H22.75ZM20.1302 8.42907C20.3671 8.76881 20.8347 8.85211 21.1744 8.61514C21.5141 8.37817 21.5974 7.91066 21.3604 7.57093L20.1302 8.42907ZM15 18.25H13V19.75H15V18.25ZM12.4697 19.5303L14.4697 21.5303L15.5303 20.4697L13.5303 18.4697L12.4697 19.5303ZM14.5 5.75H15V4.25H14.5V5.75ZM21.25 12C21.25 15.4518 18.4518 18.25 15 18.25V19.75C19.2802 19.75 22.75 16.2802 22.75 12H21.25ZM21.3604 7.57093C19.9613 5.56497 17.6342 4.25 15 4.25V5.75C17.1232 5.75 18.9995 6.80806 20.1302 8.42907L21.3604 7.57093Z"
                        fill="#1C274C"
                      />
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Over Trial
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
                    class="w-full max-w-sm bg-[#5D6D7E] shadow-lg rounded-xl "
                  >
                    <svg
                      width="50px"
                      fill="#2e3436"
                      fill-opacity="0.7000"
                      viewBox="0 0 52 52"
                      className="justify-center items-center mx-auto"
                      enable-background="new 0 0 52 52"
                    >
                      <path
                        d="M20,37.5c0-0.8-0.7-1.5-1.5-1.5h-15C2.7,36,2,36.7,2,37.5v11C2,49.3,2.7,50,3.5,50h15c0.8,0,1.5-0.7,1.5-1.5
	V37.5z"
                      />
                      <path
                        d="M8.1,22H3.2c-1,0-1.5,0.9-0.9,1.4l8,8.3c0.4,0.3,1,0.3,1.4,0l8-8.3c0.6-0.6,0.1-1.4-0.9-1.4h-4.7
	c0-5,4.9-10,9.9-10V6C15,6,8.1,13,8.1,22z"
                      />
                      <path
                        d="M41.8,20.3c-0.4-0.3-1-0.3-1.4,0l-8,8.3c-0.6,0.6-0.1,1.4,0.9,1.4h4.8c0,6-4.1,10-10.1,10v6
	c9,0,16.1-7,16.1-16H49c1,0,1.5-0.9,0.9-1.4L41.8,20.3z"
                      />
                      <path
                        d="M50,3.5C50,2.7,49.3,2,48.5,2h-15C32.7,2,32,2.7,32,3.5v11c0,0.8,0.7,1.5,1.5,1.5h15c0.8,0,1.5-0.7,1.5-1.5
	V3.5z"
                      />
                    </svg>

                    <header class="px-5 py-2  ">
                      <div class="italic  text-center text-sm text-white">
                        Over Change Model
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className=" ">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT TOP
          </span>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Destacker (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                      <div class="italic   text-center text-sm text-white">
                        Label (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Printer (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        SPI (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Pick&Place (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Reflow (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        AOI (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        RVS (TOP)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className=" ">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT BOT
          </span>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Printer (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        SPI (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Pick&Place (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Reflow (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        AOI (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        RVS (BOT)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

         <div className=" ">
          <span className=" pt-4 sm:ml-5 text-2xl text-white font-thin px-2">
            SMT BE
          </span>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Drop In (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Fluxer (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        PreHeat (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Seho 1 (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div>
          <div class="pt-4 flex   md:flex-row p-4 sm:ml-5">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Seho 2 (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Touch Up (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        ICT (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Flash (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
            <section class="antialiased  text-gray-600  px-2" x-data="app">
              <div class="flex flex-col ">
                {/* <!-- Table --> */}
                <div className=" pt-2 w-50 sm:w-50 lg:w-50">
                  <button
                    style={{ backgroundColor: backgroundColorNetwork }}
                    value={Network}
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
                        Router (BE)
                      </div>
                    </header>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>

     

        <div>
          <div class="pt-4 flex   flex-col md:flex-row p-4 sm:ml-5"></div>
        </div>
      </main>

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
                            // onClick={startCMA}
                            className="bg-green-500 text-xs hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                          >
                            START CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="pt-2">
                          <button
                            // onClick={stopCMA}
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
    </body>
  );
};

export default UserMobile;
