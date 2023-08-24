import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";
import { Link } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL:
    "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ReturnOthers = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(null);
  const [Station, setStation] = useState("");
  const [NamaPIC, setNamaPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");
  const [Action, setAction] = useState("");
  const [Area, setArea] = useState("");
  const [Line, setLine] = useState("");
  const [isOpenQuality, setisOpenQuality] = useState(false);
  const [Requestor, setRequestor] = useState("");
 const [Department, setDepartment] = useState("");
 const [DepartTo, setDepartTo] = useState("");
  const [StatusLine, setStatusLine] = useState("");
  const [Status, setStatus] = useState("Solved");
  
  const [selectedOptionDepartment, setSelectedOptionDepartment] =
    useState(null);

  // button search
  function handleToggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  useEffect(() => {
    // set showDatePicker ke false ketika halaman dimuat
    setShowDatePicker(false);
  }, []);

  useEffect(() => {
    const ref3 = firebase.database().ref("StatusLine/SMTLine1");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setStatusLine(data);
    });
    return () => { };
  }, []);

  // waktu navbar
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${currentTime.getDate()}/${currentTime.getMonth() + 1
    }/${currentTime.getFullYear()} ~ ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  //  fungsi export to pdf
  const exportToPDF = () => {
    const doc = new jsPDF();
    const table = document.getElementById("data-table");
    doc.autoTable({ html: table });
    doc.save(`Report Repair Status.pdf`);
  };

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

  updateTime();

  useEffect(() => {
    fetch("http://192.168.101.236:3001/api/ReturnOthers")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // mengubah properti timestamp menjadi tanggal dan Date
        json.forEach((item) => {
          const date = new Date(item.Date);
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
          item.Date = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.Date) - Date.parse(b.Date));
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
      `http://192.168.101.236:3001/api/ReturnOthers?date=${selectedDate}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // mengubah properti Date menjadi tanggal saja
        json.forEach((item) => {
          const date = new Date(item.Date);
          const day = date.getDate();
          const month = date.getMonth() + 1;
          const year = date.getFullYear();
          const formattedDate = `${day.toString().padStart(2, "0")}-${month
            .toString()
            .padStart(2, "0")}-${year}`;
          item.Date = formattedDate;
        });
        json.sort((a, b) => Date.parse(a.Date) - Date.parse(b.Date));
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
      item.Date.includes(formattedDate)
    );
    filteredData.sort((a, b) => Date.parse(b.Date) - Date.parse(a.Date));
    setFilteredData(filteredData);
  };



 // QR
 const submitQuality = () => {
  if (!NamaPIC || !Line || !Area || !Requestor || !Kerusakan || !Station || !Action) {
    alert("Harap isi semua kolom!");
    return;
  }

  const data = {
    NamaPIC: NamaPIC,
    Area: Area,
    Line: Line,
    Station: Station,
    Requestor: Requestor,
    Kerusakan: Kerusakan,
    Action: Action,
    DepartTo: DepartTo,
    Department: Department,
  };

  alert("Laporan Telah Berhasil Di Kirim Ke Team Validation ");

  firebase.database().ref(`SMTLine1TOP/${Station}`).set(`${DepartTo}`);
  firebase.database().ref("StatusLine/SMTLine1").set("Down");
  setStation(null);
  setNamaPIC(null);

  fetch(`http://192.168.101.236:3001/api/${Department}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (response.status === 200) {
        // Handle success if needed
      } else {
        throw new Error("Error adding data");
      }
    })
    .catch((err) => {
      console.log(err);
    });


};


const submitUpdate = () => {
  if (!Area || !Requestor || !Action || !Station || !Kerusakan ) {
    return;
  }

  const data = {
    NamaPIC: NamaPIC,
    Station: Station,
    Status: Status,
    Area: Area,
    Action: Action,
    Kerusakan: Kerusakan,
    Requestor: Requestor,
    DepartTo : DepartTo,
    Department: Department,
  };

  console.log("Sending data:", data);

  fetch(`http://192.168.101.236:3001/api/PutReturnRepairDoneOthers`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      console.log("Response status:", response.status);
      if (response.status === 200) {
        console.log("PUT request successful");
      } else {
        throw new Error("Error updating data");
      }
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};




  const QRResponseLink = () => {
    if (selectedItem.Area === "SMT TOP" && selectedItem.Status === "") {
      return "/QRReturnResponseOthersTop";
    } else if (selectedItem.Area === "SMT BE" && selectedItem.Status === "") {
      return "/QRReturnResponseOthersBe";
    } else {
    }
  };



  const formatDateTimeAPI = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ~~ ${hours}:${minutes} WIB`;
  };



  const styles = {
    background: "linear-gradient(45deg, #3B3131, #8a8b90, #34282C)",
    height: "1000px",
  };


  const OptionsDepartment = [
    { value: "", label: "-- Pilih Depart --" },
    { value: "QC", value2: "Quality", label: "QC" },
    { value: "QA", value2: "Quality", label: "QA" },
    { value: "Production Leader", value2: "Quality", label: "Production Leader" },
  ];

  const handleSelectDepartment = (selectedOptionDepartment) => {
    setSelectedOptionDepartment(selectedOptionDepartment);
    setDepartment(selectedOptionDepartment.value);
    setDepartTo(selectedOptionDepartment.value2);
  };

  const handleButtonClick = () => {
    submitUpdate();
    submitQuality();
    setisOpenQuality(false)
    setSelectedItem(false)
    window.location.reload();
    // Mengalihkan pengguna ke halaman yang diinginkan
  };


  return (
    <body style={styles}>
      <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <a href="/PortalOthers">
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
          <div>
            <div class="flex items-center">
              <h1 class="text-base lg:text-xl font-sans tracking-tight text-gray-900">
                | Return All Department |
              </h1>
              <h1 class="text-base lg:text-xl  font-sans tracking-tight ml-4">
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

              <h1 class="text-base lg:text-xl font-sans tracking-tight ml-4">
                <span class="text-black">SMT LINE 2:</span>
                <span class="ml-4 text-green-500">RUNNING </span>|
              </h1>
            </div>
          </div>
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
            <div className="w-full max-w-4xl mt-24 lg:mt-1 mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
              {/* <button className="flex" onClick={exportToPDF}>
                Export To:
                <img
                  className="w-[25px]"
                  src={process.env.PUBLIC_URL + "/pdf.png"}
                  alt=""
                />
              </button> */}
              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-center text-gray-800">
                  Return For All Department
                </div>
              </header>

              <div
                className="overflow-x-auto p-3"
                style={{ height: "300px", overflowY: "scroll" }}
              >
                <table id="data-table" className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-1 w-10 lg:w-32">
                        <div className="font-sans lg:font-semibold text-left">Requestor</div>
                      </th>
                      <th className="p-1 w-10 lg:w-28">
                        <div className="font-sans lg:font-semibold text-left">Department</div>
                      </th>
                      <th className="p-1  w-10 lg:w-28">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-1  w-10 lg:w-24">
                        <div className="font-semibold text-left">Area</div>
                      </th>
                      <th className="p-1  w-10 lg:w-36">
                        <div className="font-semibold text-left">Station</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">Status</div>
                      </th>
                      <th className="p-1 w-26">
                        <div className="font-semibold text-center">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.map((item, index) => (
                      <tr
                        key={item.id}
                        className={index === 0 ? "bg-green-400" : ""}
                      >
                        <td className="p-2">
                          <div className="font-medium text-xs lg:text-sm text-gray-800">
                            {item.Requestor}
                          </div>
                        </td>
                         <td className="p-2">
                          <div className="font-medium text-xs lg:text-sm text-gray-800">
                            {item.Department}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-xs lg:text-sm text-gray-800">
                            {item.Line}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-xs lg:text-sm text-gray-800">
                            {item.Area}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.Station}
                          </div>
                        </td>
                        <td className="p-2 ">
                          {item.Status === "" && (
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="bg-green-600 w-16  flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out"
                            >
                              <span className="text-xs lg:text-sm">Open</span>
                            </button>
                          )}
                          {item.Status === "Solved" && (
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="bg-red-600  w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                            >
                              <span className="text-xs lg:text-sm">Solved</span>
                            </button>
                          )}
                          {item.Status === "Repair" && (
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="bg-yellow-500 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                            >
                              <span className="text-xs lg:text-sm">Repair</span>
                            </button>
                          )}
                        </td>
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
                            {item.Date} WIB
                          </div>
                        </td>
                      </tr>


                    ))}
                  </tbody>
                </table>
                {selectedItem && (
                  <>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-end justify-center min-h-screen bg-slate-800 bg-opacity-75 pt-4 px-4 pb-96 text-center sm:block sm:p-0">
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                        <div
                          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                          role="dialog"
                          aria-modal="true"
                          aria-labelledby="modal-headline"
                        >
                          <div className="bg-white px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                              {/* Close button */}
                              <button
                                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                onClick={() =>
                                  setSelectedItem(false)
                                }
                              >
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                              <div className="w-full max-w-lg">
                                <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                                  <span>Request BY </span>
                                </div>
                                <div class="flex flex-wrap -mx-3 ">
                                  <div class="w-full  px-3 mb-3 md:mb-0">
                                    <label
                                      class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                      for="grid-city"
                                    >
                                      Nama PIC
                                    </label>
                                    <div
                                      class="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                      type="text"
                                    >
                                      {" "}
                                      {selectedItem.Nama}{" "}
                                    </div>
                                  </div>
                                  <div class="w-full px-3 flex space-x-12 mb-3 md:mb-0">
                                    <div className="flex flex-col">
                                      <label
                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                        for="grid-city"
                                      >
                                        Line
                                      </label>
                                      <div
                                        class="appearance-none block w-full  bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                        type="text"
                                      >
                                        {" "}
                                        {selectedItem.Line}{" "}
                                      </div>
                                    </div>
                                    <div className="flex flex-col">
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
                                        {selectedItem.Area}{" "}
                                      </div>
                                    </div>
                                    <div className="flex flex-col">
                                      <label
                                        class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2"
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


                                  <div class="w-full px-3 mb-2 md:mb-0">
                                    <label
                                      class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2"
                                      for="grid-city"
                                    >
                                      Problem
                                    </label>
                                    <div
                                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                      type="text"
                                    >
                                      {" "}
                                      {selectedItem.Problem}{" "}
                                    </div>
                                  </div>
                                </div>



                                <div className="flex justify-end">
                                  <a href={QRResponseLink()} >
                                    {selectedItem.Status === "" && (
                                      <button
                                        className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() =>
                                          setSelectedItem(false)
                                        }
                                      >
                                        Repair
                                      </button>
                                    )}

                                    {selectedItem.Status === "Repair" && (
                                      <div className="flex space-x-32">
                                        <div
                                          className="bg-lime-600 flex flex-col  text-white font-mono text-xs py-2 px-4 rounded mr-16"

                                        >
                                          <span >    Repair PIC : {selectedItem.ResponseName}</span>
                                          <span>    Start At : {formatDateTimeAPI(selectedItem?.ResponseTime) || ""}</span>
                                        </div>

                                        <button
                                          className="" onClick= {()=>{
                                            setisOpenQuality(true)
                                            setNamaPIC(selectedItem.Nama)                 
                                            setRequestor(selectedItem.Department)
                                            setArea(selectedItem.Area)
                                            setLine(selectedItem.Line)
                                            setStation(selectedItem.Station)
                                          }}
                                          
                                        >
                                          <svg width="50px" viewBox="0 0 500 500" enable-background="new 0 0 500 500" id="Layer_1" version="1.1">

                                            <g>

                                              <path d="M367.679,246.833c-0.531-12.609,0.588-25.654-2.368-37.986c-1.382-3.791-4.184,0.511-6.413,1.041   c0,0,0,0,0,0c-4.161,4.267-12.565,6.238-13.146,12.717c-0.524,14.991-1.168,30.556,0.048,45.341   c-0.256,155.461,19.482,119.776-129.649,128.882c-26.317,0.919-52.651,1.739-78.963,2.626   c-16.608-1.275-53.481,9.018-60.088-11.189c-2.655-45.337-1.478-91.005-3.291-136.479c0.204-34.898-3.914-70.04-1.535-104.8   c3.226-24.4,8.242-20.229,30.082-22.084c26.483-1.403,52.952-3.164,79.47-3.758c34.934-0.781,69.826-3.017,104.755-3.289   c17.011,0.55,41.179-5.384,55.709,4.213c0.979,1.101,2.618,0.592,3.615-0.271c3.858-4.829,13.071-11.129,11.308-17.687   c-4.346-5.641-10.068-8.916-17.037-10.118c-39.561-0.225-79.248,1.59-118.855,2.063c-48.609,1.286-97.324,0.978-145.829,4.682   c-28.279,2.629-26.965,32.887-26.321,54.499c0.752,80.147,3.524,160.258,5.465,240.383c0.598,25.755,26.017,30.674,47.021,28.662   c31.923,0.35,63.834-0.558,95.749-1.108C399.499,417.707,367.504,447.783,367.679,246.833z" fill="#3F3756" />

                                              <path d="M449.635,117.379c-6.574-12.733-14.071-24.909-21.967-36.85c-2.997-6.499-9.362-6.329-14.768-2.732   c-73.571,44.542-132.338,114.15-189.97,173.683c-22.42-31.589-44.424-64.116-71.873-91.594c-5.13-5.857-10.137,3.101-14.566,5.699   c-15.546,13.494-31.881,26.214-46.55,40.66c-4.867,5.32,5.123,11.79,7.768,16.236c33.41,36.191,64.959,73.977,96.458,111.811   c14.845,14.243,22.046,39.069,37.899,9.414c56.253-74.899,118.664-146.302,195.214-201.163   C434.005,135.91,456.987,128.424,449.635,117.379z" fill="#3F3756" />

                                              <path d="M363.669,212.248c4.902,275.049,38.635,192.045-291.396,207.75l-14.313-17.667l-5.667-281.37l17.917-16.296   l264.333-6.047l12.269,1.819l7.188,7.187l-9.232,10.874l-11.476-4.574l-249.667,8.908l-10.333,6.292l-3.375,12.75l3.625,242.125   l4.583,13.417l14.167,4.667l23.25,0.167l203.75-6.5l16.333-2.75l11.186-14.417c2.602-3.175,1.2-151.257,1.509-158.583   C348.323,219.998,362.544,208.873,363.669,212.248z" fill="#DAB983" />

                                              <path d="M91.961,209.498l126.667,145c24.314-28.484,72.224-97.423,132.683-154.546   c38.984-33.787,96.234-77.204,96.234-77.204l-25.75-42.583c0,0-82.106,59.904-112.454,88.455s-86.041,87.423-86.041,87.423   c-4.66-6.425-62.336-84.392-75.88-93.169L91.961,209.498z" fill="#A7943F" />

                                              <path d="M347.874,271.406c-0.053-0.845,0.189-2.272-0.608-2.791c0.279-14.802-0.347-29.611,0.385-44.41   c0.117-2.374,0.471-4.598,2.169-6.403c-13.549,6.172-23.709,19.774-33.579,30.884c-29.918,35.143-58.954,71.213-85.627,108.712   c-3.986,3.731-9.226,14.64-15.351,9.163c-11.095-12.707-23.026-24.68-33.794-37.69c-20.132-24.133-40.661-47.927-61.801-71.202   c-14.178-15.228-26.694-31.991-41.918-46.234c-0.593-0.546-0.824-0.954-0.113-1.562c12.281-13.499,26.196-25.361,39.932-37.381   c9.09-7.903,18.087-15.91,28.037-22.754c0.931-0.64,1.421-0.679,2.191,0.16c10.869,11.092,20.764,23.025,30.841,34.81   c15.662,17.983,30.663,36.599,43.705,56.575c1.07,1.73,2.726,2.075,4.077,0.929c38.415-40.411,74.538-83.245,117.633-118.97   c0.75-0.429,1.288-1.08,1.82-1.736c-13.68-9.983-32.115-5.538-48.058-5.782c-36.034,0.832-72.04,2.288-108.06,3.578   c-25.43,0.58-50.822,1.798-76.216,3.241c-10.512,0.569-21.041,0.853-31.507,2.169c-11.738,0.663-12.042,13.019-12.458,21.996   c-0.549,80.034,3.955,160.473,4.43,240.628c2.455,20.959,29.736,15.735,44.781,15.823c29.938-1.359,59.902-2.189,89.852-3.263   C365.974,388.894,347.736,430.82,347.874,271.406z" fill="#5887A2" />

                                              <path d="M348.737,218.802c-1.676,1.782-2.025,3.978-2.141,6.322c-0.724,14.631-0.103,29.272-0.381,43.906   c-17.303,17.364-32.116,37.111-47.639,56.065c-11.202,13.241-23.649,25.37-33.804,39.511c-9.03,14.348-27.224,1.473-33.655-8.326   c26.676-36.76,54.868-72.434,84.47-106.985C325.332,238.317,335.362,224.897,348.737,218.802z" fill="#3B6985" />

                                              <path d="M72.274,146.987c0.808-8.204,0.956-20.369,11.67-21.172c10.333-1.299,20.727-1.58,31.106-2.142   c25.07-1.425,50.139-2.627,75.245-3.2c35.561-1.274,71.109-2.712,106.684-3.532c15.752,0.238,33.929-4.148,47.446,5.707   c-0.526,0.648-1.057,1.291-1.797,1.714c-17.794-5.377-36.753-1.44-55.03-1.301c-32.504,0.508-64.964,3.244-97.457,2.8   c-30.53,1.33-61.175,1.894-91.543,5.535c-13.099,0.627-19.336,3.561-25.354,15.501C73.007,147.15,72.695,148.129,72.274,146.987z" fill="#739EB5" />

                                              <path d="M359.715,297.207c-0.016-13.73-0.041-27.31-0.051-41.059c-3.426,3.302-6.552,6.314-9.678,9.327   c-0.821-14.39,0.215-28.814-0.765-43.2c1.276-4.32,7.43-6.147,10.589-9.509C360.863,240.844,359.811,269.161,359.715,297.207z" fill="#CBA065" />

                                              <path d="M164.994,114.891c-8.16,0.249,2.854-7.75,4.534-10.155c6.682-0.446,13.297-0.637,19.995-0.291   C179.431,117.301,180.055,113.896,164.994,114.891z" fill="#E2C89A" />

                                              <path d="M138.857,105.679c-2.097,4.403-5.732,7.7-8.826,11.36c-4.185,0.764-8.431,0.28-12.606,0.826   c2.032-4.777,5.939-8.313,9.666-11.765C131.023,105.697,134.931,105.961,138.857,105.679z" fill="#E2C89A" />

                                              <path d="M220.605,113.557c-2.137,0-4.274,0-6.804,0c4.396-4.193,8.195-10.4,14.618-9.742   c0.719,0.063,1.545,0.285,2.175-0.373c1.3,0.236,8.622-1.075,5.826,1.503c-3.313,2.472-5.634,7.669-9.904,8.159   c-1.014,0.055-2.1-0.369-3.036,0.356C222.521,113.492,221.563,113.524,220.605,113.557z" fill="#E2C89A" />

                                              <path d="M287.809,111.168c-4.632,0.379,3.658-5.888,4.216-7.589c2.309-2.478,5.068-0.82,8.539-1.292   C296.591,106.28,294.239,111.973,287.809,111.168z" fill="#E0C494" />

                                              <path d="M306.085,101.797c1.024,0.046,2.047,0.093,3.255,0.147c-1.741,3.355-4.623,5.561-6.919,8.249   c-1.117,0.137-1.969,0.145-3.155-0.033c1.633-3.162,4.067-5.596,6.088-8.326C305.598,101.822,305.841,101.81,306.085,101.797z" fill="#E0C494" />

                                              <path d="M134.507,106.419c-2.443,0.732-4.944,0.151-7.411,0.332c0-0.081,0-0.162-0.001-0.243   C129.565,106.478,132.036,106.448,134.507,106.419z" fill="#DAB984" />

                                              <path d="M119.685,116.615c1.153-0.64,2.392-0.219,3.592-0.292C122.112,116.803,120.89,116.608,119.685,116.615z" fill="#DAB983" />

                                              <path d="M430.721,101.723c-0.547,9.62-0.2,19.832-2.506,29.113c-0.618,0.45-1.237,0.899-1.856,1.349   c-1.447-4.678,1.241-11.508,1.076-16.881c0.78-5.508-0.059-11.334,1.453-16.686C429.61,99.588,430.283,100.586,430.721,101.723z" fill="#B9A95B" />

                                              <path d="M419.961,80.165c0,0-41,29-74.429,54c-33.429,25-123.571,123.333-123.571,123.333l-74.542-94.625   l-54.125,44.5l5.541,4.337c8.002-5.724,16.812-14.151,25.349-19.182c6.834-4.231,12.728-9.793,19.602-13.987   c3.462-2.112,3.616-2.145,6.1,1.058c19.302,23.616,35.954,49.16,55.143,72.824c4.862,5.218,10.885,18.167,19.011,15.814   c2.523-2.381,5.6-4.085,7.897-6.732c19.818-20.856,40.134-41.737,61.04-61.336c-4.334,21.59-8.907,43.299-13.098,64.974   c-0.227,1.17-0.931,2.771,0.59,3.828c5.533-7.413,13.343-13.633,17.467-21.843c3.594-20.212,6.941-40.464,9.914-60.776   c0.671-3.68,4.639-5.288,6.644-8.492c-4.601,20.575-9.176,41.348-12.044,62.335c-0.132,0.816-0.679,1.898,0.695,2.324   c4.609-3.301,4.82-8.757,5.581-13.882c2.96-18.06,6.246-36.057,10.473-53.871c6.179-10.243,17.123-17.338,25.563-25.954   c-3.022,15.411-5.682,30.879-7.122,46.565c0.072,3.32-2.075,8.837,0.029,11.355c2.367-2.26,4.734-4.52,7.101-6.781   c2.205-7.85,1.898-16.479,3.202-24.595c1.119-10.301,3.137-20.48,4.319-30.769c0.366-3.184,2.428-4.573,4.65-6.207   c-2.633,17.749-4.256,35.834-6.392,53.733c-0.077,0.669-0.541,1.539,0.554,1.903c7.241-5.466,4.442-27.06,6.853-36.485   c1.388-7.699,0.653-16.614,4.098-23.594c14.475-12.406,29.859-23.824,46.793-32.659c-1.444,15.168-4.557,30.95-3.268,46.143   c8.88-7.05,14.742-7.654,14.485-20.451c0.207-11.652,6.688-28.107,3.072-38.579l0.001-0.001l5.753,8.358v4.975l1.839,0.532   l0.005-5.756L419.961,80.165z" fill="#B9A95C" />

                                              <path d="M449.635,117.379c-6.574-12.733-14.071-24.909-21.967-36.85c-2.997-6.499-9.362-6.329-14.768-2.732   c-73.571,44.542-132.338,114.15-189.97,173.683c-22.42-31.589-44.424-64.116-71.873-91.594c-5.13-5.857-10.137,3.101-14.566,5.699   c-15.546,13.494-31.881,26.214-46.55,40.66c-4.867,5.32,5.123,11.79,7.768,16.236c33.41,36.191,64.959,73.977,96.458,111.811   c14.845,14.243,22.046,39.069,37.899,9.414c56.253-74.899,118.664-146.302,195.214-201.163   C434.005,135.91,456.987,128.424,449.635,117.379z M441.297,121.921c-11.764,7.929-24.483,16.819-35.718,25.501c0,0,0,0,0,0l0,0   c-56.174,44.362-90.877,81.021-125.108,121.551v0c-20.731,25.944-41.627,51.843-60.848,78.932c-0.786,1.167-1.234,0.62-1.817-0.052   c-39.1-45.908-76.499-93.216-118.97-136.142v0l0,0c-7.993-1.995,49.435-45.192,50.003-43.911   c23.695,27.704,44.996,57.46,65.949,87.29c2.256,2.387,3.95,8.531,7.724,7.862c45.025-44.485,86.908-92.939,136.274-133.145   c18.99-15.653,38.552-30.555,59.22-43.959c3.272-2.405,21.589,30.853,23.497,34.438   C441.825,120.883,442.083,121.391,441.297,121.921z" fill="#3F3756" />

                                              <path d="M359.272,254.221c0-0.052,0-0.094,0-0.148c-0.022,0.022-0.043,0.042-0.066,0.063   C359.231,254.158,359.251,254.191,359.272,254.221z" fill="#3F3756" />

                                              <path d="M367.679,246.833c-0.531-12.609,0.588-25.654-2.368-37.986c-1.382-3.791-4.184,0.511-6.413,1.041   c0,0,0,0,0,0c-4.161,4.267-12.565,6.238-13.146,12.717c-0.524,14.991-1.168,30.556,0.048,45.341   c-0.256,155.461,19.482,119.776-129.649,128.882c-26.317,0.919-52.651,1.739-78.963,2.626   c-16.608-1.275-53.481,9.018-60.088-11.189c-2.655-45.337-1.478-91.005-3.291-136.479c0.204-34.898-3.914-70.04-1.535-104.8   c3.226-24.4,8.242-20.229,30.082-22.084c26.483-1.403,52.952-3.164,79.47-3.758c34.934-0.781,69.826-3.017,104.755-3.289   c17.011,0.55,41.179-5.384,55.709,4.213c0.979,1.101,2.618,0.592,3.615-0.271c3.858-4.829,13.071-11.129,11.308-17.687   c-4.346-5.641-10.068-8.916-17.037-10.118c-39.561-0.225-79.248,1.59-118.855,2.063c-48.609,1.286-97.324,0.978-145.829,4.682   c-28.279,2.629-26.965,32.887-26.321,54.499c0.752,80.147,3.524,160.258,5.465,240.383c0.598,25.755,26.017,30.674,47.021,28.662   c31.923,0.35,63.834-0.558,95.749-1.108C399.499,417.707,367.504,447.783,367.679,246.833z M359.875,227.948   c-0.557,34.621-0.438,69.173-0.544,103.786c0.088,17.487-0.122,34.985,0.288,52.466c0.738,16.579-16.156,29.134-31.786,27.398   c-69.232,0.909-138.465,2.212-207.678,4.117c-66.064,6.163-56.19-4.696-58.166-63.015c-1.383-57.558-2.632-115.124-4.59-172.667   c-3.819-73.784-5.462-75.15,69.694-73.526v0c14.612-0.085,29.209-0.869,43.824-0.828v0c5.032-0.434,10.079-0.33,15.12-0.386   c0,0,0,0,0,0c14.354-0.655,28.796-0.745,43.179-0.997v0c0,0,0,0,0,0c1.156-0.021,2.312-0.042,3.469-0.064c0,0,0,0,0,0   c23.902-0.771,47.882-1.235,71.816-1.743v0c7.841,0.555,46.051-4.903,45.229,5.487c-1.805,1.51-3.008,6.568-5.741,5.609   c-12.299-7.68-28.177-3.973-41.954-4.066l0,0l0,0c-0.445,0.038-0.889,0.076-1.334,0.114l0,0c0,0,0,0,0,0   c-25.716,1.888-51.666,1.719-77.468,3.089l0,0c0,0,0,0,0,0c-31.181,1.679-62.469,1.109-93.666,3.229   c-3.527,0.485-7.066,0.549-10.603,0.695c0,0,0,0,0,0c0,0,0,0,0,0c-11.634,1.303-23.332,1.935-34.915,3.469   c-15.896,2.345-16.039,19.493-16.332,32.299c-0.219,16.254-0.068,32.509,0.114,48.763c0.865,59.575,1.489,119.165,3.447,178.716   c-0.273,33.219,32.702,22.12,54.885,23.622c60.437-1.557,120.867-3.405,181.295-5.291c31.484,1.791,44.756-9.153,42.936-41.464   c-0.385-31.382,0.123-62.78,0.025-94.156c0,0,0,0,0,0c-0.751-13.163,0.196-26.357-0.7-39.516c1.167-3.952,6.797-5.623,9.686-8.698   C360.156,218.962,360.08,223.464,359.875,227.948z" fill="#3F3756" />

                                              <path d="M134.507,106.419c-0.235,0.07-0.471,0.119-0.707,0.167C134.039,106.572,134.277,106.537,134.507,106.419z" fill="#3F3756" />

                                            </g>

                                          </svg>
                                        </button>

                                      </div >

                                    )}

                                    {selectedItem.Status === "Solved" && (
                                      <div
                                        className="bg-slate-900 flex flex-col  text-white font-mono text-xs py-2 px-4 rounded mr-2"

                                      >
                                        <span >    Repair PIC : {selectedItem.ResponseName}</span>
                                        <span>    Start At : {formatDateTimeAPI(selectedItem?.ResponseTime) || ""}</span>
                                        <span>    Done At : {formatDateTimeAPI(selectedItem?.ResponseDone) || ""}</span>
                                        <span>    Depart To : {selectedItem.DepartTo}</span>
                                      </div>

                                    )}

                                  </a>
                                </div>
                                <div className="flex justify-end" >

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
        <td class="">
        {isOpenQuality ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-60 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
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
                    <button
                                className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                onClick={() =>
                                  setisOpenQuality(false)
                                }
                              >
                                <svg
                                  className="w-6 h-6"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                  />
                                </svg>
                              </button>
                      <form
                        className="w-full max-w-lg"
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className="justify-center mb-2 w-96 items-center flex font-bold uppercase text-black ">
                          <span>Request Validation</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div className="w-full mt-3 px-3 mb-2 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-city"
                            >
                              Depart To
                            </label>
                            <Select
                              value={selectedOptionDepartment}
                              onChange={handleSelectDepartment}
                              options={OptionsDepartment}
                              isSearchable
                              placeholder="Pilih Department"
                            />
                          </div>
                          <div className="w-full mt-1 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                              Nama
                            </label>
                            <div className="flex">
                              <span
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                                placeholder="ICT"
                                name="MachineName"
                              >
                                {NamaPIC} 
                              </span>

                            </div>
                            

                          </div>
                          <div className="w-full mt-1 px-3 mb-3 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                              Station
                            </label>
                            <div className="flex">
                              <span
                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-city"
                                type="text"
                                placeholder="ICT"
                                name="MachineName"
                              >
                                {Station}
                              </span>
                             
                            </div>

                          </div>

                        </div>

                        {/*Status*/}

                        <div class="flex  -mx-3 mb-2 ">
                          <div class="w-full md:w-1/3 px-3 md:mb-0">
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
                              name="MachineName"
                            >
                              {Area}
                            </span>
                          </div>
                          <div class="w-full md:w-1/3 px-3  md:mb-0">
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
                              name="MachineName"
                            >
                              {Line}
                            </span>
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
                            class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder=""
                            name="Kerusakan"
                            onChange={(e) => {
                              setKerusakan(e.target.value);
                            }}
                            required
                          />
                        </div>
                        <div class="w-full px-1">
                          <label
                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1"
                            for="grid-password"
                          >
                            Action
                          </label>
                          <input
                            class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder=""
                            name="Action"
                            onChange={(e) => {
                              setAction(e.target.value);
                            }}
                            required
                          />
                        </div>

                        <div className="flex justify-end">

                          <button
                            class="text-white bg-emerald-600 ml-2 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            type="button" // Change to type="button" to prevent form submission
                            onClick={handleButtonClick}

                          >
                            Yes, I'm sure
                          </button>
                        </div>
                      </form>  
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

export default ReturnOthers;
