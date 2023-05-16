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

  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(true);

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

  // button search
  function handleToggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  useEffect(() => {
    fetch("http://192.168.101.236:3001/api/get/Inputsche")
      .then((response) => response.json())
      .then((json) => {
        // mengubah properti timestamp menjadi tanggal dan waktu
        json.forEach((item) => {
          const date = new Date(item.PDATE);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const formattedDate = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year}`; 
          item.PDATE = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.PDATE) - Date.parse(b.PDATE));
        json.reverse();
        setData(json);
        setFilteredData(json);
      });
  }, []);
  
  const handleFilterByDate = (e) => {
    const date = new Date(e.target.value);
    const selectedDate = date.toLocaleDateString();
    setSelectedDate(selectedDate);
    fetch(`http://192.168.101.236:3001/api/get/Inputsche?date=${selectedDate}`)
      .then((response) => response.json())
      .then((json) => {
        // mengubah properti PDATE menjadi tanggal saja
        json.forEach((item) => {
          const date = new Date(item.PDATE);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const formattedDate = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year}`;
          item.PDATE = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.PDATE) - Date.parse(b.PDATE));
        json.reverse();
        setFilteredData(json);
      });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedDate) {
      setFilteredData([]);
      return;
    }
    const date = new Date(selectedDate);
    const formattedDate = `${date.getDate().toString().padStart(2, "0")}-${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${date.getFullYear()}`;
    const filteredData = data.filter((item) => item.PDATE.includes(formattedDate));
    filteredData.sort((a, b) => Date.parse(b.PDATE) - Date.parse(a.PDATE));
    setFilteredData(filteredData);
  };
  

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

  useEffect(() => {
    updateTime();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;



  
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/l.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "500px",
    height: "8000px", // Ubah tinggi (height) sesuai kebutuhan Anda
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
      <main className="flex">
        <div className="ml-4">
          {showDatePicker && (
            <form className="" onSubmit={handleSubmit}>
              <label htmlFor="date" className="text-gray-300">
                Pilih Tanggal :
              </label>
              <div className="flex flex-col w-40">
                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    class="bg-gray-50 border items-center border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    onChange={handleFilterByDate}
                  />
                </div>
                <button
                  class="bg-blue-500  hover:bg-blue-400 text-white w-20 font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2 "
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          )}
          <button
            class="bg-blue-500 hover:bg-blue-400 text-white w-20 font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-1 mb-3 "
            onClick={handleToggleDatePicker}
          >
            {showDatePicker ? "Hide" : "Search"}
          </button>
        </div>
        <div className="flex ">
          <ol class="relative border-l border-gray-200 ml-7 dark:border-gray-700">
            <div class="mb-10 ml-6 w-[1000px] md:w-[700px] sm:w-[500px] lg:w-[1000px]">
              <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <img
                  class="rounded-full shadow-lg"
                  src={process.env.PUBLIC_URL + "/Lead.png"}
                  alt="Bonnie image"
                />
              </span>
              {/* <!-- Table --> */}
              <div className="w-full max-w-4xl mt-1 mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <div className="font-semibold text-center text-gray-800">
                    SMT LINE 1
                  </div>
                </header>

                <div
                  className="overflow-x-auto p-3"
                  style={{ height: "300px", overflowY: "scroll" }}
                >
                  <table id="data-table" className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                      <tr>
                        <th className="p-1 w-40">
                          <div className="font-semibold text-left">LINE</div>
                        </th>
                        <th className="p-1 w-20">
                          <div className="font-semibold text-left">Line</div>
                        </th>
                        <th className="p-1 w-10">
                          <div className="font-semibold text-center">AREA</div>
                        </th>
                        <th className="p-1 w-10">
                          <div className="font-semibold text-center">
                            Station
                          </div>
                        </th>
                        <th className="p-1 w-10">
                          <div className="font-semibold text-center">
                            DETAILS
                          </div>
                        </th>
                        <th className="p-1 w-26">
                          <div className="font-semibold text-center">Date</div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {filteredData.map((item, index) => (
                        <tr
                          key={item.SHIFT}
                          className={index === 0 ? "bg-green-400" : ""}
                        >
                          <td className="p-2">
                            <div className="font-medium text-gray-800">
                              SMT LINE 1
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="font-medium text-gray-800">
                              {item.SHIFT}
                            </div>
                          </td>
                          <td className="p-2 ">
                            <div className="font-medium text-gray-800">
                              {item.SHIFT}
                            </div>
                          </td>
                          <td className="p-2">
                            <div className="font-medium text-gray-800">
                              {item.SHIFT}
                            </div>
                          </td>
                          <td className="p-5 ">
                            <button
                              // onClick={() => setSelectedItem(item)}
                              className="bg-blue-500 flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="w-6 h-6 mr-2"
                              >
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span>DETAIL</span>
                            </button>
                          </td>

                          {/* {selectedItem && (
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
                                      <div className="w-full max-w-lg">
                                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                                          <span>REQUESTED BY</span>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 ">
                                          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-first-name"
                                            >
                                              Nama PIC
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.NamaPIC}{" "}
                                            </div>
                                          </div>
                                          <div class="w-full md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                              NPK PIC
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.NpkPIC}{" "}
                                            </div>
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
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.MachineName}{" "}
                                            </div>
                                          </div>

                                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-city"
                                            >
                                              Machine Area
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.MachineArea}{" "}
                                            </div>
                                          </div>
                                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-city"
                                            >
                                              Machine Line
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.MachineArea}{" "}
                                            </div>
                                          </div>
                                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-city"
                                            >
                                              Machine Station
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.MachineStation}{" "}
                                            </div>
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
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.Kerusakan}{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div className="flex justify-end">
                                          <button
                                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
                                            onClick={() =>
                                              setSelectedItem(false)
                                            }
                                          >
                                            CLOSE
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
                        )} */}

                          {/* <td className="p-5 w-40">
                          <button className="bg-blue-500 flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              className="w-6 h-6 mr-2"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 110-16 8 8 0 010 16zm0-2a6 6 0 100-12 6 6 0 000 12zM8 9a1 1 0 011-1h2a1 1 0 010 2H9a1 1 0 01-1-1zm5.293 5.293a1 1 0 00-1.414 0L11 14.586l-1.879-1.88a1 1 0 00-1.414 1.414l2.586 2.586a1 1 0 001.414 0l4.586-4.586a1 1 0 000-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>QUALITY</span>
                          </button>
                        </td> */}

                          <td className="p-2">
                            <div className="text-center h-6 text-black...">
                              {item.PDATE}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </ol>
        </div>
      </main>
    </body>

    // <div class="items-center justify-between p-4  bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
    //                 <div className="bg-white px-4 h-auto w-96 sm:w-72 lg:w-[400px]  py-6 sm:p-6 ml-3 sm:ml-3 lg:ml-3 rounded-lg shadow-md">
    //                   <h3 className="text-lg font-bold mb-4">
    //                     PRODUCTION TIME PLANNING
    //                   </h3>
    //                   {filteredData ? (
    //                     <table>
    //                       <tbody>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Date : {formatDate(filteredData.PDATE)}
    //                           </td>
    //                           <td className="font-bold text-xs">
    //                             Shift : {filteredData.SHIFT}{" "}
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Planned Production Time 1 :
    //                           </td>
    //                           <td className="text-sm">
    //                             <span style={{ color: "green" }}>
    //                               {filteredData.PT1_IN}
    //                             </span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.PT1_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">Break 1:</td>
    //                           <td className="text-sm bg-orange-500 rounded-lg">
    //                             {filteredData.BR1_IN} - {filteredData.BR1_OUT}
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Production Time 2:
    //                           </td>
    //                           <td className="text-sm">
    //                             <span style={{ color: "green" }}>
    //                               {filteredData.PT2_IN}
    //                             </span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.PT2_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">Break 2:</td>
    //                           <td className="text-sm bg-orange-500 rounded-lg">
    //                             {filteredData.BR2_IN} - {filteredData.BR2_OUT}
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold  text-xs">Planned DT:</td>
    //                           <td className="text-sm ">
    //                             <span style={{ color: "green" }}>{filteredData.PD_IN}</span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.PD_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Production Time 3:
    //                           </td>
    //                           <td className="text-sm">
    //                             <span style={{ color: "green" }}>
    //                               {filteredData.PT3_IN}
    //                             </span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.PT3_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">Break 3:</td>
    //                           <td className="text-sm bg-orange-500 rounded-lg">
    //                             {filteredData.BR3_IN} - {filteredData.BR3_OUT}
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Production Time 4:
    //                           </td>
    //                           <td className="text-sm">
    //                             <span style={{ color: "green" }}>
    //                               {filteredData.PT4_IN}
    //                             </span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.PT4_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">Break 4:</td>
    //                           <td className="text-sm bg-orange-500 rounded-lg">
    //                             {filteredData.BR4_IN} - {filteredData.BR4_OUT}
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">Over Time:</td>
    //                           <td className="text-sm">
    //                             <span style={{ color: "green" }}>{filteredData.OT_IN}</span>{" "}
    //                             -{" "}
    //                             <span style={{ color: "red" }}>{filteredData.OT_OUT}</span>
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             --------------------
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Change Model Allocation :
    //                           </td>
    //                           <td className="text-sm">{filteredData.CMA} </td>
    //                         </tr>

    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Planned Production :
    //                           </td>
    //                           <td className="text-sm">{filteredData.PP} </td>
    //                         </tr>

    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Planned Downtime :
    //                           </td>
    //                           <td className="text-sm">{filteredData.PD} </td>
    //                         </tr>

    //                       </tbody>
    //                     </table>

    //                   ) : (
    //                     <p>No data available</p>
    //                   )}
    //                   <div className="pt-3">
    //                   </div>
    //                 </div>
    //                 <div className="bg-white px-4 h-auto w-96 sm:w-72 lg:w-[400px]  py-6 sm:p-6 ml-3 sm:ml-3 lg:ml-3 rounded-lg shadow-md">
    //                      <tr>
    //                           <td className="font-bold text-xs">
    //                             --------------------
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             REAL PRODUCTION  TIME
    //                           </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                             Change Model Allocation :
    //                           </td>
    //                           <td className="text-sm"> </td>
    //                         </tr>

    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                           Planned Production :
    //                           </td>
    //                           <td className="text-sm">Loading.... </td>
    //                         </tr>
    //                         <tr>
    //                           <td className="font-bold text-xs">
    //                           Planned Downtime :
    //                           </td>
    //                           <td className="text-sm">Loading....</td>
    //                         </tr>
    //                 </div>
    //               </div>
  );
};

export default SmtTop;
