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

const RealTime = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [notif, setNotif] = useState(false);
  const [mesin, setMesin] = useState("");
  const [line, setLine] = useState("");
  const [nama, setNama] = useState("");
  const [area, setArea] = useState("");
  const [station, setStation] = useState("");
  const [timer, setTimer] = useState("");

  const [time, setTime] = useState(new Date().toLocaleString());
  const [prevStatus, setPrevStatus] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  //
  const [status, setStatus] = useState("");
  const [Destecker, setDestecker] = useState("");

  //
  const [backgroundColor, setBackgroundColor] = useState("");
  const [backgroundColorStation, setBackgroundColorStation] = useState("");

  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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

    const ref3 = firebase.database().ref("Mesin/LineMesin");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setLine(data);
    });

    const ref4 = firebase.database().ref("Mesin/Nama");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      setNama(data);
    });

    const ref5 = firebase.database().ref("Mesin/timer");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimer(data);
    });

    const ref6 = firebase.database().ref("Mesin/Area");
    ref6.on("value", (snapshot) => {
      const data = snapshot.val();
      setArea(data);
    });

    const ref7 = firebase.database().ref("Mesin/Station");
    ref7.on("value", (snapshot) => {
      const data = snapshot.val();
      setStation(data);
    });

    // area
    const ref8 = firebase.database().ref("AreaLine1TOP/Destecker");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updateDestecker(data);
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
          line: line,
          timer: timer,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error(error));
    }
    setPrevStatus(status);
  }, [status, mesin, line, timer, prevStatus]);

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

  const updateDestecker = (data) => {
    setDestecker(data);
    setBackgroundColorStation(
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
  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    // get the current value of the selected option
    const newStatus =
      selectedOption === "Maintenance" ? "Maintenance" : "Leader";

    // update the Firebase database with the new status value
    firebase.database().ref("Mesin/Mesin1").set(newStatus);

    alert("success");
    setIsOpen2(false);
    window.location.reload();
  };

  const handleSubmitStation = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    // get the current value of the selected option
    const newStatus =
      selectedOption === "Maintenance" ? "Maintenance" : "Leader";

    // update the Firebase database with the new status value
    firebase.database().ref("AreaLine1TOP/Destecker").set(newStatus);

    alert("success");
    setIsOpen2(false);
    window.location.reload();
  };

  return (
    <body style={{ height: "200vh" }} class="bg-zinc-900 h-screen">
      <nav class="bg-slate px-2 sm:px-4 py-2.5 dark:bg-gray-900 bg-white w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
          </a>

          <div>
            <h1 class="text-center">DESTECKER(TOP) LINE 1</h1>
          </div>
        </div>
      </nav>

      <sidebar>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
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

      {/* PIC */}

      {/*  */}
      <main class="flex  flex-col md:flex-row  sm:ml-2">
        <section class="antialiased text-gray-600 h-screen " x-data="app">
          <div class="bg-gray-200 p-2 w-64 mt-2 rounded-lg">
            <div class="flex md:order-2 ml-3 mt-2">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="Logo Akun"
                class="h-4 w-4 mr-2"
              />

              <div class="ml-2">
                <p
                  class="font-medium text-gray-800 mb-1 text-sm"
                  onClick={toggleInfo}
                >
                  Informasi Operator {showInfo ? "▲" : "▼"}
                </p>
                <div class="ml-2">
                  <p
                    class="font-medium text-gray-800 mb-1 text-sm"
                    onClick={toggleInfo}
                  >
                    Informasi Operator {showInfo ? "▲" : "▼"}
                  </p>
                  {showInfo && (
                    <div>
                      <div class="border-t border-b border-gray-400 py-1">
                        <p class="text-xs text-gray-600">Nama Operator:</p>
                        <p class="font-medium text-sm">CHRISNA</p>
                      </div>
                      <div class="border-b border-gray-400 py-1">
                        <p class="text-xs text-gray-600">NPK Operator:</p>
                        <p class="font-medium text-sm">0134</p>
                      </div>
                      <div class="border-b border-gray-400 py-1">
                        <p class="text-xs text-gray-600">Waktu Bekerja:</p>
                        <p class="font-medium text-sm">{timer}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gray-200  p-2 w-64 mt-2 rounded-lg">
            <div class="flex md:order-2 ml-3 mt-2">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="Logo Akun"
                class="h-4 w-4 mr-2"
              />

              <div class="ml-2">
                <p class="font-medium text-gray-800 mb-1 text-sm">
                  Informasi Operator
                </p>
                <div class="border-t border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">Nama Operator:</p>
                  <p class="font-medium text-sm">CHRISNA</p>
                </div>
                <div class="border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">NPK Operator:</p>
                  <p class="font-medium text-sm">0134</p>
                </div>
                <div class="border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">Waktu Bekerja:</p>
                  <p class="font-medium text-sm">{timer}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-200  p-2 w-64 mt-2 rounded-lg">
            <div class="flex md:order-2 ml-3 mt-2">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                alt="Logo Akun"
                class="h-4 w-4 mr-2"
              />

              <div class="ml-2">
                <p class="font-medium text-gray-800 mb-1 text-sm">
                  Informasi Operator
                </p>
                <div class="border-t border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">Nama Operator:</p>
                  <p class="font-medium text-sm">CHRISNA</p>
                </div>
                <div class="border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">NPK Operator:</p>
                  <p class="font-medium text-sm">0134</p>
                </div>
                <div class="border-b border-gray-400 py-1">
                  <p class="text-xs text-gray-600">Waktu Bekerja:</p>
                  <p class="font-medium text-sm">{timer}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          class="antialiased px-48   sm:px-48 lg:px-80  p-3 text-gray-600 h-screen "
          x-data="app"
        >
          <div class="flex flex-col ">
            {/* <!-- Table --> */}
            <div className="w-72 sm:w-72 lg:w-72">
              <button
                style={{ backgroundColor: backgroundColorStation }}
                value={Destecker}
                class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
                onClick={Destecker === "Go" ? () => setIsOpen2(true) : null}
              >
                <header class="px-5 py-4  ">
                  <div class="font-semibold text-center text-white">
                    Destecker
                  </div>
                </header>
              </button>
            </div>
            {isOpen2 ? (
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
                          <form>
                            <div className="mx-auto flex flex-wrap justify-center">
                              <label className="w-full md:w-1/2  p-4">
                                <div
                                  style={{
                                    backgroundColor:
                                      selectedOption === "Maintenance"
                                        ? "#be4f62"
                                        : "#FFFFFF",
                                    color:
                                      selectedOption === "Maintenance"
                                        ? "#be4f62"
                                        : "#4B5563",
                                  }}
                                  className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                >
                                  <div className="text-gray-700 font-bold mr-9 mb-2">
                                    Maintenance
                                  </div>
                                  <input
                                    type="radio"
                                    id="Maintenance"
                                    name="option"
                                    value="Maintenance"
                                    className="hidden"
                                    onChange={handleOptionChange}
                                    checked={selectedOption === "Maintenance"}
                                  />
                                </div>
                              </label>
                              <label className="w-full md:w-1/2 p-4">
                                <div
                                  style={{
                                    backgroundColor:
                                      selectedOption === "Leader"
                                        ? "#C00000"
                                        : "#FFFFFF",
                                    color:
                                      selectedOption === "Leader"
                                        ? "#C00000"
                                        : "#4B5563",
                                  }}
                                  className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                >
                                  <div className="text-gray-700 font-bold mr-9 mb-2">
                                    Leader
                                  </div>
                                  <input
                                    type="radio"
                                    id="Leader"
                                    name="option"
                                    value="Leader"
                                    className="hidden"
                                    onChange={handleOptionChange}
                                    checked={selectedOption === "Leader"}
                                  />
                                </div>
                              </label>
                            </div>

                            <div className="flex justify-end">
                              <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                onClick={() => setIsOpen2(false)}
                              >
                                Batal
                              </button>
                              <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                onClick={handleSubmitStation}
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
          </div>

          {/* kotak  */}
          <div class="flex pt-10 flex-col ">
            {/* <!-- Table --> */}
            <div className="w-72">
              <button
                style={{ backgroundColor: backgroundColor }}
                value={status}
                onClick={() => setIsOpen2(true)}
                className="w-full max-w-sm bg-lime-600 shadow-lg rounded-xl"
                disabled={status !== "Go"}
              >
                <header class="px-5 py-4 border-b ">
                  <div class="font-semibold text-center text-white">
                    {mesin}
                  </div>
                </header>

                <div class="overflow-x-auto p-3 h-24">
                  <table class="table-auto w-full">
                    <thead class="text-sm uppercase text-black font-extrabold">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>
                        <th class="p-1">
                          <div class="font-semibold text-left">Area</div>
                        </th>
                        <th class="p-1">
                          <div class="font-semibold text-left">Station</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm">
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {line}
                          </div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {area}
                          </div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {station}
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    {/* POP UP */}
                    {/* POP UP */}
                  </table>
                </div>
              </button>
            </div>
            <td class="">
              {isOpen ? (
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
                            <form>
                              <div className="mx-auto flex flex-wrap justify-center">
                                <label className="w-full md:w-1/2  p-4">
                                  <div
                                    style={{
                                      backgroundColor:
                                        selectedOption === "Maintenance"
                                          ? "#be4f62"
                                          : "#FFFFFF",
                                      color:
                                        selectedOption === "Maintenance"
                                          ? "#be4f62"
                                          : "#4B5563",
                                    }}
                                    className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                  >
                                    <div className="text-gray-700 font-bold mr-9 mb-2">
                                      Maintenance
                                    </div>
                                    <input
                                      type="radio"
                                      id="Maintenance"
                                      name="option"
                                      value="Maintenance"
                                      className="hidden"
                                      onChange={handleOptionChange}
                                      checked={selectedOption === "Maintenance"}
                                    />
                                  </div>
                                </label>
                                <label className="w-full md:w-1/2 p-4">
                                  <div
                                    style={{
                                      backgroundColor:
                                        selectedOption === "Leader"
                                          ? "#C00000"
                                          : "#FFFFFF",
                                      color:
                                        selectedOption === "Leader"
                                          ? "#C00000"
                                          : "#4B5563",
                                    }}
                                    className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                  >
                                    <div className="text-gray-700 font-bold mr-9 mb-2">
                                      Leader
                                    </div>
                                    <input
                                      type="radio"
                                      id="Leader"
                                      name="option"
                                      value="Leader"
                                      className="hidden"
                                      onChange={handleOptionChange}
                                      checked={selectedOption === "Leader"}
                                    />
                                  </div>
                                </label>
                              </div>

                              <div className="flex justify-end">
                                <button
                                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => setIsOpen2(false)}
                                >
                                  Batal
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  type="submit"
                                  onClick={handleSubmit}
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
            </td>
            {/*  */}
            {/* <!-- Table 3 --> */}
          </div>
          {/* akhir kotak */}

          {/* kotak  */}
          <div class="flex pt-3 flex-col ">
            {/* <!-- Table --> */}
            <div className="w-72">
              <button
                style={{ backgroundColor: backgroundColor }}
                value={status}
                onClick={() => setIsOpen2(true)}
                className="w-full max-w-sm bg-lime-600 shadow-lg rounded-xl"
                disabled={status !== "Go"}
              >
                <header class="px-5 py-4 border-b ">
                  <div class="font-semibold text-center text-white">
                    {mesin}
                  </div>
                </header>

                <div class="overflow-x-auto p-3 h-24">
                  <table class="table-auto w-full">
                    <thead class="text-sm uppercase text-black font-extrabold">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>
                        <th class="p-1">
                          <div class="font-semibold text-left">Area</div>
                        </th>
                        <th class="p-1">
                          <div class="font-semibold text-left">Station</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm">
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {line}
                          </div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {area}
                          </div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-left text-white">
                            {station}
                          </div>
                        </td>
                      </tr>
                    </tbody>

                    {/* POP UP */}
                    {/* POP UP */}
                  </table>
                </div>
              </button>
            </div>
            <td class="">
              {isOpen ? (
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
                            <form>
                              <div className="mx-auto flex flex-wrap justify-center">
                                <label className="w-full md:w-1/2  p-4">
                                  <div
                                    style={{
                                      backgroundColor:
                                        selectedOption === "Maintenance"
                                          ? "#be4f62"
                                          : "#FFFFFF",
                                      color:
                                        selectedOption === "Maintenance"
                                          ? "#be4f62"
                                          : "#4B5563",
                                    }}
                                    className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                  >
                                    <div className="text-gray-700 font-bold mr-9 mb-2">
                                      Maintenance
                                    </div>
                                    <input
                                      type="radio"
                                      id="Maintenance"
                                      name="option"
                                      value="Maintenance"
                                      className="hidden"
                                      onChange={handleOptionChange}
                                      checked={selectedOption === "Maintenance"}
                                    />
                                  </div>
                                </label>
                                <label className="w-full md:w-1/2 p-4">
                                  <div
                                    style={{
                                      backgroundColor:
                                        selectedOption === "Leader"
                                          ? "#C00000"
                                          : "#FFFFFF",
                                      color:
                                        selectedOption === "Leader"
                                          ? "#C00000"
                                          : "#4B5563",
                                    }}
                                    className="shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow"
                                  >
                                    <div className="text-gray-700 font-bold mr-9 mb-2">
                                      Leader
                                    </div>
                                    <input
                                      type="radio"
                                      id="Leader"
                                      name="option"
                                      value="Leader"
                                      className="hidden"
                                      onChange={handleOptionChange}
                                      checked={selectedOption === "Leader"}
                                    />
                                  </div>
                                </label>
                              </div>

                              <div className="flex justify-end">
                                <button
                                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                  onClick={() => setIsOpen2(false)}
                                >
                                  Batal
                                </button>
                                <button
                                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                  type="submit"
                                  onClick={handleSubmit}
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
            </td>
            {/*  */}
            {/* <!-- Table 3 --> */}
          </div>
          {/* akhir kotak */}
        </section>
      </main>

      <td className="">
        {notif || status === "null" ? (
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
                    <h2 className="text-xl font-bold mb-2">
                      <span className="inline-block text-red-600 mr-2 text-2xl">
                        &#x26A0;
                      </span>
                      Harap Scan Kartu Anda
                    </h2>
                    <p className="text-gray-700 leading-5">
                      Untuk dapat menjalankan mesin, harap scan kartu Anda
                      terlebih dahulu.
                    </p>
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

export default RealTime;
