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

const ReturnQA = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const [showDatePicker, setShowDatePicker] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  //
  const [StatusLine, setStatusLine] = useState("");

  useEffect(() => {
    const ref3 = firebase.database().ref("StatusLine/SMTLine1");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setStatusLine(data);
    });
    return () => {};
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

  // waktu navbar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getDate()}/${
    currentTime.getMonth() + 1
  }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  updateTime();

  // button search
  function handleToggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  useEffect(() => {
    // set showDatePicker ke false ketika halaman dimuat
    setShowDatePicker(false);
  }, []);

  useEffect(() => {
    fetch("http://192.168.101.236:3001/api/ValidationQC")
      .then((response) => response.json())
      .then((json) => {
        // mengubah properti timestamp menjadi tanggal dan waktu
        json.forEach((item) => {
          const date = new Date(item.waktu);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const formattedDate = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year} / ${hours
            .toString()
            .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
          item.waktu = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.waktu) - Date.parse(b.waktu));
        json.reverse();
        setData(json);
        setFilteredData(json);
      });
  }, []);

  const handleFilterByDate = (e) => {
    const date = new Date(e.target.value);
    const selectedDate = date.toLocaleDateString();
    setSelectedDate(selectedDate);
    fetch(
      `http://192.168.101.236:3001/api/ValidationQC?date=${selectedDate}`
    )
      .then((response) => response.json())
      .then((json) => {
        // mengubah properti waktu menjadi tanggal saja
        json.forEach((item) => {
          const date = new Date(item.waktu);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const formattedDate = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year}`;
          item.waktu = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.waktu) - Date.parse(b.waktu));
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
    const filteredData = data.filter((item) =>
      item.waktu.includes(formattedDate)
    );
    filteredData.sort((a, b) => Date.parse(b.waktu) - Date.parse(a.waktu));
    setFilteredData(filteredData);
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/QC.jpg)`,
    backgroundSize: "1300px",
    backgroundPosition: "1px",
    height: "700px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };

  return (
    <body style={styles}>
      <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <a href="/AndonLine1">
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
        <div class="mx-auto max-w-7xl px-4">
          <marquee behavior="scroll" direction="right">
            <div class="flex items-center">
              <h1 class="text-xl font-sans tracking-tight text-gray-900">
                | Validation Quality Control |
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
          </marquee>
        </div>
      </header>

      <main>
        <section
          className="antialiased  text-gray-600 h-screen px-4"
          x-data="app"
        >
          <div className="flex flex-col mt-1 h-full">
          <div>
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
                      class="bg-blue-500  hover:bg-blue-400 text-white w-20 font-bold py-2 px-3 border-b-4 border-blue-700 hover:border-blue-500  rounded-3xl  rounded mt-2 "
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
              <button
                class="bg-blue-500 hover:bg-blue-400 text-white w-20 font-bold py-1 px-2 border-b-4 border-blue-700 hover:border-blue-500 rounded-3xl mt-1 mb-3 "
                onClick={handleToggleDatePicker}
              >
                {showDatePicker ? "Hide" : "Search"}
              </button>
            </div>
            {/* <!-- Table --> */}
            <div className="w-full max-w-4xl mt-1 mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-center text-gray-800">
                  Validation Quality Control
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
                        <div className="font-semibold text-left">Nama</div>
                      </th>
                      <th className="p-1 w-32">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-1 w-24">
                        <div className="font-semibold text-center">AREA</div>
                      </th>
                      <th className="p-1 w-28">
                        <div className="font-semibold text-center">Station</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">File</div>
                      </th>
                      <th className="p-1 w-26">
                        <div className="font-semibold text-center">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.map((item, index) => (
                      <tr key={item.id}>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.NamaPIC}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.Line}
                          </div>
                        </td>
                        <td className="p-2 ">
                          <div className="font-medium text-gray-800">
                            {item.Area}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.Station}
                          </div>
                        </td>
                        <td className="p-5 ">
                          <button
                            onClick={() => setSelectedItem(item)}
                            className="flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
                          >
                            <svg
                              width="800px"
                              height="800px"
                              viewBox="0 0 24 24"
                              className="w-6 h-6 mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <title />

                              <g id="Complete">
                                <g id="F-File">
                                  <g id="Text">
                                    <g>
                                      <path
                                        d="M18,22H6a2,2,0,0,1-2-2V4A2,2,0,0,1,6,2h7.1a2,2,0,0,1,1.5.6l4.9,5.2A2,2,0,0,1,20,9.2V20A2,2,0,0,1,18,22Z"
                                        fill="none"
                                        id="File"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                      />

                                      <line
                                        fill="none"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        x1="7.9"
                                        x2="16.1"
                                        y1="17.5"
                                        y2="17.5"
                                      />

                                      <line
                                        fill="none"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        x1="7.9"
                                        x2="16.1"
                                        y1="13.5"
                                        y2="13.5"
                                      />

                                      <line
                                        fill="none"
                                        stroke="#000000"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        x1="8"
                                        x2="13"
                                        y1="9.5"
                                        y2="9.5"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </button>
                        </td>

                        {selectedItem && (
                          <>
                            <div className="fixed z-10 inset-0 overflow-y-auto">
                              <div class="flex items-end justify-center min-h-screen bg-slate-800 bg-opacity-75 pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                                <div
                                  class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                                  role="dialog"
                                  aria-modal="true"
                                  aria-labelledby="modal-headline"
                                >
                                  <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                      <div className="w-full max-w-lg">
                                        <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                                          <span>Validation By</span>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 ">
                                          <div class="w-full  px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-first-name"
                                            >
                                              Nama PIC Quality
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.NamaPIC}{" "}
                                            </div>
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
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.Line}{" "}
                                            </div>
                                          </div>
                                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-city"
                                            >
                                              Line
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.Area}{" "}
                                            </div>
                                          </div>
                                          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                              for="grid-city"
                                            >
                                              Station
                                            </label>
                                            <div
                                              class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                              type="text"
                                            >
                                              {" "}
                                              {selectedItem.Station}{" "}
                                            </div>
                                          </div>
                                        </div>
                                        <div class="flex flex-wrap -mx-3 ">
                                          <div class="w-full px-1">
                                            <label
                                              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                                              for="grid-password"
                                            >
                                              Validation
                                            </label>
                                            <div class="flex items-center">
                                              <a
                                                href={`http://192.168.101.236:3001/${selectedItem.Validation}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                class="text-blue-600 hover:text-blue-800"
                                              >
                                                <i class="far fa-file-pdf mr-2"></i>
                                                View PDF
                                              </a>
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

                          
                          </>
                        )}

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
                            {item.waktu}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default ReturnQA;
