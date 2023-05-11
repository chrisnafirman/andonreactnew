import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Line1 from "./Line1";

const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL:
    "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const SmtTop = () => {
  const [mesin, setMesin] = useState("");
  const [Station, setStation] = useState("");

  const [NamaPIC, setNamaPIC] = useState("");
  const [Line, setLine] = useState("SMT LINE 1");
  const [Area, setArea] = useState("SMT TOP");
  const [Destacker, setDestacker] = useState("Destacker");
  const [Statusdestacker, setStatusdestacker] = useState("");
  const [Kerusakan, setKerusakan] = useState("");

  const [timer, setTimer] = useState("");
  const [time, setTime] = useState(new Date().toLocaleString());
  const [prevStatus, setPrevStatus] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [StatusLine, setStatusLine] = useState("");

  const [file, setFile] = useState(null);

  // popup 1

  const [isOpenDestacker, setIsOpenDestacker] = useState(false);
  const [isOpenQuality, setIsOpenQuality] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpenValQA, setIsOpenValQA] = useState(false);
  const [isOpenReturn, setIsOpenReturn] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("");

  const [NpkPIC, setNpkPIC] = useState("");

  /// Purchasing
  const namaList = ["CHRISNA"];
  const npkList = ["0601"];

  // Area Station

  const [status, setStatus] = useState("");
  const [desteckerTop, setStatusDesteckerTop] = useState("");

  //
  const [backgroundColorStatusdestacker, setBackgroundColorStatusdestacker] =
    useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

  //  fungsi mengambil data dari firebase
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  useEffect(() => {
    const ref = firebase.database().ref("Mesin/Mesin1");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatus(data);
      if (data === "Damage") {
        const audio = new Audio("Sound.mp3");
        audio.autoplay = true;
        audio.play();

        navigator.permissions
          .query({ name: "clipboard-write" })
          .then((permissionStatus) => {
            if (permissionStatus.state === "granted") {
              const text =
                "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
              navigator.clipboard
                .writeText(text)
                .then(() => {
                  const botToken =
                    "6165170138:AAHGjjgGP88vnuGyDZ-6JTCkEPaZ_aGJLvc";
                  const chatIds = [1563609464, 6019720343, -692863121];
                  const message =
                    "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakukan Perbaikan";
                  chatIds.forEach((chatId) => {
                    fetch(
                      `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
                    )
                      .then((response) => {
                        if (!response.ok) {
                          throw new Error("Error sending telegram message");
                        }
                      })
                      .catch((error) => {
                        console.error(error);
                      });
                  });
                })
                .catch((error) => {
                  console.error(error);
                });
            } else if (permissionStatus.state === "prompt") {
              permissionStatus.onchange = () => {
                if (permissionStatus.state === "granted") {
                  const text =
                    "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
                  navigator.clipboard
                    .writeText(text)
                    .then(() => {
                      const botToken =
                        "6165170138:AAHGjjgGP88vnuGyDZ-6JTCkEPaZ_aGJLvc";
                      const chatIds = [1563609464, 6019720343, -692863121];
                      const message =
                        "Mesin1 Sedang Rusak, Di Mohon Untuk Segera Di Lakuka Perbaikan";
                      chatIds.forEach((chatId) => {
                        fetch(
                          `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`
                        )
                          .then((response) => {
                            if (!response.ok) {
                              throw new Error("Error sending telegram message");
                            }
                          })
                          .catch((error) => {
                            console.error(error);
                          });
                      });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }
              };
            } else {
              // Izin ditolak
            }
          });
      }
    });

    const ref2 = firebase.database().ref("Mesin/NamaMesin");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      setMesin(data);
    });

    const ref3 = firebase.database().ref("StatusLine/SMTLine1");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setStatusLine(data);
    });

    // const ref4 = firebase.database().ref("Mesin/Nama");
    // ref4.on("value", (snapshot) => {
    //   const data = snapshot.val();
    //   setNama(data);
    // });

    const ref5 = firebase.database().ref("Mesin/timer");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimer(data);
    });

    // TOP
    const ref8 = firebase.database().ref("SMTLine1TOP/Destacker");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatusdestacker(data);
    });

    return () => {};
  }, []);
  ////////////

  // DATA2
  ////////////
  // const ref5 = database.ref("Mesin2/Status");
  // ref5.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   updateStatus2(data);
  // });

  // const ref6 = firebase.database().ref("Mesin2/NamaMesin");
  // ref6.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setMesin2(data);
  // });

  // const ref7 = firebase.database().ref("Mesin2/LineMesin");
  // ref7.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setLine2(data);
  // });

  // const ref8 = firebase.database().ref("Mesin2/Nama");
  // ref8.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setNama2(data);
  // });

  // ----

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
  // ----

  // fungsi post ke backend

  useEffect(() => {
    if (status !== "" && prevStatus !== status) {
      fetch("http://192.168.101.236:3001/api/post/data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: prevStatus,
          mesin: mesin,
          Line: Line,
          timer: timer,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    setPrevStatus(status);
  }, [status, mesin, Line, timer, prevStatus]);

  // ------

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

  const updateStatusdestacker = (data) => {
    setStatusdestacker(data);
    setBackgroundColorStatusdestacker(
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  //  Submit Destacker
  const submitDestacker = () => {
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.236:3001/api/post/Maintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success report destecker smt top");
          setIsOpenDestacker(false);
          firebase.database().ref("SMTLine1TOP/Destacker").set("Maintenance");
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

  //  Submit Quality
  const submitQuality = () => {
    const data = {
      NamaPIC: NamaPIC,
      NpkPIC: NpkPIC,
      Area: Area,
      Line: Line,
      Station: Station,
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
          alert("success Report Quality");
          firebase.database().ref("SMTLine1TOP/Destacker").set(selectedStatus);
          setIsOpenQuality(false);
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //  Submit Validation Quality A
  const submitValQA = () => {
    const data = new FormData();
    data.append("NamaPIC", NamaPIC);
    data.append("NpkPIC", NpkPIC);
    data.append("Area", Area);
    data.append("Line", Line);
    data.append("Station", Station);
    data.append("validation", file);

    fetch("http://192.168.101.236:3001/api/post/validationqa", {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success");
          setIsOpen2(false);
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitReturn = () => {
    const data = {
      NamaPIC: NamaPIC,
      Area: Area,
      Line: Line,
      Station: Station,
      Kerusakan: Kerusakan,
    };

    fetch(`http://192.168.101.236:3001/api/post/ReturnMaintenance`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("success report di kembalikan ke maintenance");
          setIsOpenDestacker(false);
          firebase.database().ref("SMTLine1TOP/Destacker").set("Maintenance");
          window.location.reload();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Backgroun
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
                <div class="flex items-center">
                  <h1 class="text-xl font-bold tracking-tight text-gray-900">
                    | SMT Line 1 - TOP |
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
            <a
              href="/Andonline1"
              class="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
              aria-current="page"
            >
              SMT LINE 1
            </a>
          </li>
          <button onClick={() => setIsOpen2(true)} class="w-60 sm:w-36 lg:w-32">
            <a
              href="#"
              class="inline-block w-full p-4 text-orange-500 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              ISA
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
                    style={{ backgroundColor: backgroundColorStatusdestacker }}
                    value={Statusdestacker}
                    onClick={() => {
                      if (Statusdestacker === "Go") {
                        // set isOpenDestacker state to true if Statusdestacker is "Go"
                        setIsOpenDestacker(true);
                      } else if (Statusdestacker === "Repair") {
                        // set isOpenQuality state to true if Statusdestacker is "Repair"
                        setIsOpenQuality(true);
                      } else if (Statusdestacker === "QA") {
                        // set isOpenQuality state to true if Statusdestacker is "Repair"
                        setIsOpenValQA(true);
                      }
                      setStation(Destacker);
                    }}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
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
                    style={{ backgroundColor: backgroundColor }}
                    value={status}
                    onClick={() => setIsOpenDestacker(true)}
                    disabled={status !== "Go"}
                    class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-sm text-center text-white">
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

      {/* POPPP UPPPP */}

      {/* POP UP  DESTECKER*/}
      <td class="">
        {isOpenDestacker ? (
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
                        }}
                      >
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Request</span>
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

                        {/*Status*/}

                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Machine Area
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
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Machine Station
                            </label>
                            <span
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              type="text"
                              placeholder="ICT"
                              name="MachineName"
                            >
                              {Destacker}
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
                            onClick={() => setIsOpenDestacker(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitDestacker}
                          >
                            Simpan
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
      </td>

      {/* ISA */}
      <td class="">
        {isOpen2 ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
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
                  <h2 className="text-lg font-bold mb-4  text-center">
                    Production Area: SMT
                  </h2>
                  <div className="bg-white px-4 pt-1 pb-4 flex sm:p-6 sm:pb-4">
                    <div className="overflow-y-auto max-h-96 w-96">
                      <div className="bg-white px-4 py-6 sm:p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-bold mb-4">
                          Today's Login
                        </h3>
                        <div className="ml-6">
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">Leader:</span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              SMT Top Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              SMT Bot Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              Drop In Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              Touch Up Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              Router Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              FCT Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                          <p className="mb-2 flex">
                            <span className="font-bold w-40">
                              Coating Operator:
                            </span>
                            <span className="font-bold ml-4">test</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white px-4 w-96 py-6 sm:p-6 ml-24 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-4">
                        PRODUCTION TIME PLANNING
                      </h3>
                      <table>
                        <tbody>
                          <tr>
                            <td className="font-bold">Shift 2</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Prod time 1:</td>
                            <td>07.00 - 09.45</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Break 1:</td>
                            <td>09.45 - 10.00</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Prod time 2:</td>
                            <td>10.00 - 12.00</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Break 2:</td>
                            <td>12.00 - 13.00</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Planned DT:</td>
                            <td>13.00 - 14.00</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Prod time 3:</td>
                            <td>14.00 - 15.45</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Break 3:</td>
                            <td>15.45 - 16.00</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Prod time 4:</td>
                            <td>16.00 - 16.30</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Break 4:</td>
                            <td>16.30 - 16.40</td>
                          </tr>
                          <tr>
                            <td className="font-bold">Over Time:</td>
                            <td>16.40 - 18.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white px-4 py-6 sm:p-6 ml-24 rounded-lg shadow-md">
                      <h3 className="text-lg font-bold mb-4">Facturing</h3>
                      <div className="flex flex-col justify-between">
                        <div>
                          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            CALL LEADER
                          </button>
                        </div>
                        <div className="pt-3">
                          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                            START CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="pt-3">
                          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            END CHANGE MODEL (ROUTER)
                          </button>
                        </div>
                        <div className="mt-4">
                          <p className="font-bold">Planned Production Time:</p>
                          <p>500 minutes</p>
                        </div>
                        <div className="mt-2">
                          <p className="font-bold">Change Model Allocation:</p>
                          <p>15 minutes</p>
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

      {/* Request Quality */}
      <td class="">
        {isOpenQuality ? (
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
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Quality</span>
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
                              onChange={(e) =>
                                setSelectedStatus(e.target.value)
                              }
                              required
                              defaultValue={""}
                            >
                              <option value="">-- Pilih Depart --</option>
                              <option value="QA">QA</option>
                              <option value="QC">QC</option>
                            </select>
                          </div>
                        </div>
                        <div class="flex flex-wrap -mx-3 mb-6">
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Machine Area
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
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Machine Station
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
                              Tindakan
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
                              Tindakan Yang Di Lakukan
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenQuality(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitQuality}
                          >
                            Simpan
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
      </td>

      {/* Val QA */}
      <td class="">
        {isOpenValQA ? (
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
                      <form className="w-full max-w-lg">
                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                          <span>Validation Quality</span>
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
                              Input
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
                              Tindakan Yang Di Lakukan
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
                            Simpan
                          </button>
                        </div>
                        <button
                          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => {
                            setIsOpenReturn(true);
                            setIsOpenValQA(false);
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

            <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
          </>
        ) : null}
      </td>

      {/* POP UP  RETURN*/}
      <td class="">
        {isOpenReturn ? (
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
                              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                              Machine Area
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
                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label
                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city"
                            >
                              Machine Station
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
                              Kendala
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
                              Laporkan Kendala Yang Di temukan
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end">
                          <button
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                            onClick={() => setIsOpenReturn(false)}
                          >
                            Batal
                          </button>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                            onClick={submitReturn}
                          >
                            Simpan
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
      </td>
    </body>
  );
};

export default SmtTop;
