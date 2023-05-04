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

const SmtTop= () => {
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

  /// Purchasing
  const namaList = [
    "Agus Sofian Warsito",
    "Allan Mulyana",
    "Alwan Luchi",
    "Ari Ramdani",
    "Arif Setiawan",
  ];
  const npkList = ["0601", "0686", "0594", "0789", "0214"];

  // Area Station

  const [status, setStatus] = useState("");
  const [desteckerTop, setStatusDesteckerTop] = useState("");

  //
  const [backgroundColorDesteckerTop, setBackgroundColorDesteckerTop] =
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

    // TOP
    const ref8 = firebase.database().ref("AreaLine1TOP/Destecker");
    ref8.on("value", (snapshot) => {
      const data = snapshot.val();
      updatedesteckerTop(data);
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

  const updatedesteckerTop = (data) => {
    setStatusDesteckerTop(data);
    setBackgroundColorDesteckerTop(
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

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/l.jpg)`,
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
            <h1 class="text-xl font-bold tracking-tight text-gray-900">
            SMT LINE 1 - SMT TOP
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
            Input Schedule Production
          </span>
        </div>

        
<form className="bg-slate-300 w-[900px] mx-auto rounded-lg ">
    <div class=" gap-2 mb-6 flex py-2 px-3 ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-center">SHIFT</label>
            <input type="time" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Planned Production Time    </label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>

        
        
    </div>
    <div class=" gap-2 mb-6 flex ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="time" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        
    </div>
    <div class=" gap-2 mb-6 flex ">
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
            <input type="time" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div>
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
            <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        
    </div>
    <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required/>
    </div> 
    <div class="mb-6">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="mb-6">
        <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
        <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 
    <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
        <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required/>
        </div>
        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      </main>
    </body>
  );
};

export default SmtTop;

