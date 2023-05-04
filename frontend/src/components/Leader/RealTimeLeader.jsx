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

const Leader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const [mesin, setMesin] = useState("");
  const [line, setLine] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [nama, setNama] = useState("");
  const [timer, setTimer] = useState(0);
  const [area, setArea] = useState("");
  const [station, setStation] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [time, setTime] = useState(new Date().toLocaleString());
  const [prevStatus, setPrevStatus] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  ////
  const [NamaPIC, setNamaPIC] = useState("");
  const [NpkPIC, setNpkPIC] = useState("");
  const [MachineArea, setMachineArea] = useState("");
  const [MachineLine, setMachineLine] = useState("");
  const [MachineStation, setMachineStation] = useState("");
  const [Kerusakan, setKerusakan] = useState("");
  const namaList = [
    "Dwi Anggraeny",
    "Eko Purwanto",
    "Ila Kurnia",
    "Marsisto Utoyo",
    "Siti Ningrum",
  ];
  const npkList = ["0141", "0015", "0018", "0144", "0040"];

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
            } else {
              console.log("Permission not granted");
            }
          })
          .catch((error) => {
            console.error(error);
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
        : data === "Purchasing"
        ? "#eab676"
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
    setTimer("0");
  };

  const submit = () => {
    const data = {
      NamaPIC: NamaPIC,
      NpkPIC: NpkPIC,
      MachineName: mesin,
      MachineArea: area,
      MachineLine: line,
      MachineStation: station,
      Kerusakan: Kerusakan,
    };

    let department;
    switch (selectedStatus) {
      case "PPIC":
        department = "PPIC";
        break;
      case "Purchasing":
        department = "Purchasing";
        break;
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

  

  return (
    <body style={{ height: "200vh" }} class="bg-slate-900 h-screen">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        onClick={toggleDrawer}
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-60 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="https://flowbite.com/" class="flex items-center pl-2.5 mb-5">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              class="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Leader Line 1
            </span>
          </a>
          <ul class="space-y-2">
            <li>
              <a
                href="/Leader"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span class="ml-3">Realtime Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/Leader"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">
                  Report Machine
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <sidebar>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
            showDrawer ? "" : "-translate-x-full"
          } bg-gray-100  dark:bg-gray-100 `}
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
                  href="/Leader"
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
                  <span class="ml-3 text-gray-500">Realtime Dashboard</span>
                </a>
              </li>
              <li>
                <a
                  href="/Leader"
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
                  <span class="ml-3 text-gray-500">Report Machine</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </sidebar>

      {/* <nav class="bg-slate px-2 sm:px-4 py-2.5 dark:bg-gray-900 bg-white w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
          </a>

          <div>
            <h1 class="text-center">ANDON PPIC LINE 1</h1>
          </div>

          <div class="flex md:order-2">
            <button
              className="text-white md:inline-block hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              onClick={toggleDrawer}
              aria-controls="drawer-navigation"
            >
              Menu
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleDrawer}
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav> */}

      {/*  */}
      <main class="pt-3 flex justify-center items-center flex-col md:flex-row p-4 sm:ml-64">
        <section class="antialiased  text-gray-600 h-screen px-2" x-data="app">
          <div class="flex flex-col ">
            {/* <!-- Table --> */}
            <div className="w-72">
              <div
                style={{ backgroundColor: backgroundColor }}
                value={status}
                class="w-full max-w-sm   bg-lime-600 shadow-lg rounded-xl "
              >
                <header class="px-5 py-4 border-b ">
                  <div class="font-semibold text-center text-white">
                    {mesin}
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-sm uppercase text-black font-extrabold">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>
                        <th class="p-1">
                          <div id="request" class="font-semibold text-left ">
                            Area
                          </div>
                        </th>
                        <th class="p-1">
                          <div id="request" class="font-semibold text-left ">
                            Station
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm">
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-white">{line}</div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-white">{area}</div>
                        </td>
                        <td class="p-1">
                          <div class="font-medium text-white">{station}</div>
                        </td>
                      </tr>
                    </tbody>

                    <td class="p-1   ">
                      <span className="text-xs uppercase text-black font-bold">
                        PIC
                      </span>
                      <div id="timer" class="font-medium  text-white">
                        {nama}
                      </div>
                    </td>

                    <td class="p-1   ">
                      <span className="text-xs uppercase text-black font-bold">
                        TIME
                      </span>
                      <div id="timer" class="font-medium  text-white">
                        {timer}
                      </div>
                    </td>

                    {/* <td class="p-1   ">
                      {status === "Good" || status === "Damage" ? (
                        <>
                          <span className="text-xs uppercase text-black font-bold">
                            TIME
                          </span>
                          <div id="timer" class="font-medium  text-white">
                            {timer}
                          </div>
                        </>
                      ) : null}
                    </td> */}

                    {/* POP UP */}
                    <td class="">
                      {status === "Leader" && (
                        <div>
                          <span className="text-xs uppercase text-black font-bold">
                            Request
                          </span>
                          <div id="timer" className="font-medium text-white">
                            <button
                              className="bg-blue-500 hover:bg-blue-700 text-white text-xs px-3 py-1 rounded"
                              onClick={() => setIsOpen(true)}
                            >
                              To
                            </button>
                          </div>
                        </div>
                      )}
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
                                    <form
                                      className="w-full max-w-lg"
                                      onSubmit={(e) => {
                                        e.preventDefault();
                                        database
                                          .ref("Mesin/Mesin1")
                                          .set(selectedStatus);
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
                                                npkList[
                                                  namaList.indexOf(
                                                    e.target.value
                                                  )
                                                ]
                                              );
                                            }}
                                          >
                                            <option value="">
                                              - -Pilih Nama Anda- -
                                            </option>
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
                                            <option value="">
                                              -- Pilih Depart --
                                            </option>
                                            <option value="PPIC">PPIC</option>
                                            <option value="Purchasing">
                                              Purchasing
                                            </option>
                                            <option value="MP&L">MP&L</option>
                                            <option value="Accounting">
                                              Accounting
                                            </option>
                                            <option value="Engineering & RND">
                                              Engineering & RND
                                            </option>
                                            <option value="Maintenance & IT">
                                              Maintenance & IT
                                            </option>
                                            <option value="QA">QA</option>
                                            <option value="QC">QC</option>
                                            <option value="Opex">Opex</option>
                                            <option value="HRGA & EHS">
                                              HRGA & EHS
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                          <label
                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            for="grid-city"
                                          >
                                            Machine Name
                                          </label>
                                          <span
                                            class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="grid-city"
                                            type="text"
                                            placeholder="ICT"
                                            name="MachineName"
                                          >
                                            {mesin}
                                          </span>
                                        </div>

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
                                            {area}
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
                                            {line}
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
                                            {station}
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
                                          onClick={() => setIsOpen(false)}
                                        >
                                          Batal
                                        </button>
                                        <button
                                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                          type="submit"
                                          onClick={submit}
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
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <!-- Table --> */}
            <div className="w-72 pt-2">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-6 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 1 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center h-6 bg-black text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          Unknown
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <!-- Table --> */}
            <div className="w-72 pt-2">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-6 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 1 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center h-6 bg-black text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          Unknown
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="w-72 pt-2">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-6 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 1 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center h-6 bg-black text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          Unknown
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
        <section class="antialiased  text-gray-600 h-screen px-2" x-data="app">
          <div class="flex flex-col ">
            {/* <!-- Table --> */}
            <div className="w-72">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 1 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center bg-black h-6 text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          Unknown
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <!-- Table 3 --> */}
            <div className="w-72 pt-2">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 3 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center h-6 bg-black text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          Unknown
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
            {/* <!-- Table 3 --> */}
            <div className="w-72 pt-2">
              <div class="w-full max-w-sm  bg-gray-500 shadow-lg rounded-xl border border-gray-200">
                <header class="px-5 py-4 border-b border-gray-100">
                  <div class="font-semibold text-center text-gray-800">
                    Unknown
                  </div>
                </header>

                <div class="overflow-x-auto p-3">
                  <table class="table-auto w-full">
                    <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th class="p-1">
                          <div class="font-semibold text-left">Line</div>
                        </th>

                        <th class="p-1">
                          <div id="request" class="font-semibold text-center">
                            PIC
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody class="text-sm divide-y divide-gray-100">
                      {/* <!-- record 3 --> */}
                      <tr>
                        <td class="p-1">
                          <div class="font-medium text-gray-800">Unknown</div>
                        </td>
                        <td class="p-1 w-36">
                          <div
                            id="data"
                            class="text-center h-6 bg-black text-black font-medium w-full rounded-lg"
                          >
                            Unknown
                          </div>
                        </td>
                      </tr>
                      <td class="p-1 w-56 ">
                        <span>Time:</span>
                        <div id="timer" class="font-medium text-gray-800">
                          6h37m
                        </div>
                      </td>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </section>
      </main>
    </body>
  );
};

export default Leader;
