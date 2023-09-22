import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";
import QRScannerPopup from "../../QR";

const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL:
    "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function QRResponseOTHBOT() {
  const [Station, setStation] = useState("");
  const [NamaPIC, setNamaPIC] = useState("");
  const [Line, setLine] = useState("SMT LINE 1");
  const [isLoader, setIsLoader] = useState(false);
  
  const [isQRResponse, setIsQRResponse] = useState(true);
  const [showPopupNama, setShowPopupNama] = useState(false);
  const [showPopupMesin, setShowPopupMesin] = useState(false);
  const [Status, setStatus] = useState("Repair");
  const [Area, setArea] = useState("SMT BOT");
  const [Department, setDepartment] = useState("");
  const [DepartTo, setDepartTo] = useState("");
  const [Kerusakan, setKerusakan] = useState("");


 

  const submitResponse = () => {
    if (!NamaPIC || !Area || !Station) {
      alert("Harap isi semua kolom!");
      return;
    }
    const data = {
      Station: Station,
      Status: Status,
      NamaPIC: NamaPIC,
      Area: Area,
    };

    console.log("Sending data:", data);

    alert("Response Telah Di Terima Selamat Bekerja");

    firebase.database().ref(`SMTLine1BOT/${Station}`).set("Repair");
    firebase.database().ref("StatusLine/SMTLine1").set("Down");
    setNamaPIC(null);
    setStation(null);
    fetch(`https://andonline.astra-visteon.com:3002/api/PutResponseRepair`, {
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

  const styles = {
        background: "linear-gradient(45deg, #000, #626658, #292d1f)",
        height: "1000px",
    };

  const togglePopupNama = () => {
    setShowPopupNama(!showPopupNama);
    setIsQRResponse(false);
  };

  const togglePopupMesin = () => {
    setShowPopupMesin(!showPopupMesin);
    setIsQRResponse(false);
  };

  const handleScanSuccessNama = (data) => {
    setNamaPIC(data);
    setShowPopupNama(false);
    setShowPopupMesin(false);
    setIsQRResponse(true);
  };

  const handleScanSuccessMesin = (data) => {
    // Check if "(BOT)" is present in the scanned data
    if (data.includes("(BOT)")) {
    setStation(data);
    setShowPopupMesin(false);
    setIsQRResponse(true);
  } else {
    // Show an error message or take appropriate action for "(BOT)" or other cases
     alert("Invalid scan. Scan Hanya Bisa Di Lakukan Di Mesin Area '(BOT)'");
  }
};



  const handleButtonClick = () => {
    submitResponse();
    // Mengalihkan pengguna ke halaman yang diinginkan
    setIsLoader(true);
      setTimeout(() => {
      window.location.href = '/Others'; // Ganti dengan URL halaman tujuan
    }, 3000); // 5000 milidetik sama dengan 5 detik
  };

  return (
    <body style={styles}>
      <td class="">
        {isQRResponse ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-[500px] text-center sm:block sm:p-0">
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
                      <form
                        className="w-full max-w-lg"
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className="justify-center mb-2 w-96 items-center flex font-bold uppercase text-black ">
                          <span>Repair</span>
                        </div>
                        <div class="flex flex-wrap -mx-3 ">
                          <div className="w-full mt-1 px-3 mb-3 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-city"
                            >
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
                              <button onClick={() => {
                                togglePopupNama();
                                setIsQRResponse(false);
                              }}>
                                {showPopupNama ? (
                                  <svg
                                    width="60px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z"
                                      fill="#0F0F0F"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    width="60px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z"
                                      fill="#0F0F0F"
                                    />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                          <div className="w-full mt-1 px-3 mb-3 md:mb-0">
                            <label
                              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              htmlFor="grid-city"
                            >
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
                              <button
                                onClick={() => {
                                  togglePopupMesin();
                                  setIsQRResponse(false);
                                }}
                              >
                                {showPopupMesin ? (
                                  <svg
                                    width="60px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z"
                                      fill="#0F0F0F"
                                    />
                                  </svg>
                                ) : (
                                  <svg
                                    width="60px"
                                    height="40px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                  >
                                    <path
                                      d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      fill-rule="evenodd"
                                      clip-rule="evenodd"
                                      d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z"
                                      fill="#0F0F0F"
                                    />
                                    <path
                                      d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z"
                                      fill="#0F0F0F"
                                    />
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>

                        {/*Status*/}


                        <div className="flex justify-end mt-3">
                          <button
                            class="text-white bg-emerald-600 ml-2 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                            type="button"
                            onClick={handleButtonClick}
                          >
                            Repair
                          </button>
                        </div>
                      </form>
                      <a href="/Others">
                        <button class="text-white bg-red-600 justify-start hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                          <svg width="20px" viewBox="0 0 1024 1024">
                            <path
                              fill="#F7F7F7"
                              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                            />
                            <path
                              fill="#F7F7F7"
                              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                            />
                          </svg>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>
      <td class="">
        {isLoader ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-[500px] text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-slate-800 opacity-75"></div>
                </div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>

                <div
                  className="inline-block align-bottom bg-slate-300 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="modal-headline"
                >
                  <div className="">
                    <svg fill="#000000" className="justify-center items-center mx-auto" height="80px" viewBox="-7.6 0 93.973 93.973">
                      <path id="checklist2" d="M572.822,452.824c-2.939-1.625-3.463-5.666-3.705-9.985.841-16.276.252-33.982.856-50.5.266-5.442.043-11.367.851-16.265,1.176-1.867,3.227-2.86,4.854-4.279a109.4,109.4,0,0,1,22.54,1.142c.8-.429.992-1.478,1.139-2.57.52-.616-.056-2.334.569-2.85a23.764,23.764,0,0,1,.572-6.561,5.687,5.687,0,0,1,3.707-1.428c.463.08.492-.269.858-.285a14.671,14.671,0,0,0,4.277-.045,14.264,14.264,0,0,1,4.854.045c2.186.547,6.295.555,7.988,2.283,1.182,2.821.142,6.524.285,9.987,3.08.461,6.59-.725,9.982-.859.393-.56,1.748-.154,2.281-.57a2.386,2.386,0,0,0,1.359-.13,2.408,2.408,0,0,1,1.213-.155,30.729,30.729,0,0,1,5.418-.284c1.285.423,1.638,1.783,2.281,2.85.693,1.022.949,2.475,1.713,3.424q1.069,18.047.857,37.375c0,6.365-.106,12.852.285,18.828-.117,3.021.276,6.553-.285,9.131.006,3.146-.131,6.144-1.144,8.271-1.02.881-2.834.967-4.847.86a18.968,18.968,0,0,1-5.135.568c-3.088.629-7.386.219-10.556,0-9.037.283-17.553,1.088-26.248,1.711-6.028.194-12.712.45-19.036.45C577.92,452.987,575.3,452.941,572.822,452.824Zm17.689-5.992c3.194-.025,6.414-.014,9.591,0,2.945.011,5.853.021,8.668,0a1.437,1.437,0,0,0,.923-.158,1.458,1.458,0,0,1,1.076-.128c10.912-.026,20.875-.994,31.1-1.711-.6-20.785-.334-42.856.285-63.337a8.98,8.98,0,0,0-.285-5.705c-2.308-1.552-5.967-.067-8.56.572.043,4.047,3.07,8.377.857,11.982a266.843,266.843,0,0,1-44.79.857c-2.948-3.138-1.35-10.826-5.135-13.126a19.431,19.431,0,0,1-4.849.287c-.184,1.814-.832,3.164-.858,5.134a7.173,7.173,0,0,0-.285,2.856c-.832.214.258,2.349-.57,2.564.222,2.316-.412,3.775-.285,5.994a10.031,10.031,0,0,0-.284,2.854c.4,1.089-.747,2.076,0,2.566.615-1.666,1.2-3.361,3.709-3.137.083.581.769.559.856,1.14-2.478,3.894-3.673,9.072-5.423,13.693.183,1.055-.368,2.842.287,3.425.68-1.89,1.231-3.906,4.28-3.425.445.41.992.716,1.139,1.426.146,1.67-1,2.049-1.139,3.424-.554.968-.59,2.454-1.144,3.424-.4,2.638-1.45,4.635-1.708,7.416.139.143.468-.049.858-.239.578-.284,1.288-.567,1.708.239-.6,3.011-1.785,5.443-2.283,8.56-.658,1.149-.767,2.849-1.427,3.992.282,1.717-1.666,2.7-.571,4.284a26.919,26.919,0,0,1,2.569-4.284,23.787,23.787,0,0,1,1.427-1.994c.678-.556.777-1.695,2.283-1.427.608.815-.414,1.912-.856,2.569-.073,1.354-.876,1.976-1.142,3.137-.816,2.037-1.595,4.111-2.283,6.275h3.425c1.546-1.117,1.694-3.627,3.993-3.992.655.689-.292,1.385-.285,2.282-.473,0-.16.791-.572.856.184.623-.806.908.287.855C586.779,446.938,588.674,446.85,590.512,446.832Zm13.979-81.309c-.067,1.876.5,3.111.286,5.134-.555,2.488-.969,5.117-3.137,5.992-2.25.317-4.424.711-6.846.858-.074,2.683.285,5.8-.571,7.7a2.413,2.413,0,0,0,1.42.032,5.878,5.878,0,0,1,1.717-.032,17.611,17.611,0,0,0,3.712-.285c1.424-.042,2.912-.021,4.4,0a48.789,48.789,0,0,0,7.864-.286c.765-.026,1.57-.013,2.375,0a19.249,19.249,0,0,0,4.757-.286,30.093,30.093,0,0,0,9.13,0,72.754,72.754,0,0,1,0-8.276,11.32,11.32,0,0,0-4.015-.287,23.591,23.591,0,0,1-2.548,0c-1.646-.539-4.492.121-5.135-1.427-.113-3.2.815-6.416.284-9.13a31.229,31.229,0,0,0-7.414-.853C608.9,364.986,605.779,364.34,604.49,365.523Zm-5.418,69.9c-.486-.559-.669-1.428-1.429-1.711.2-.766-.589-.551-.854-.855-.245-.231-.172-.782-.572-.858-.68-1.408-1.813-2.37-2.567-3.707-1.785-2.4-3.7-4.672-4.851-7.7a17.5,17.5,0,0,1,4.568-2.854c1.016-1.359,2.958-1.795,4.85-2.283,2.394.645,3.16,2.926,4.277,4.85a6.727,6.727,0,0,1,1.711,2.853,26.022,26.022,0,0,0,2.283,2,5.176,5.176,0,0,0,2.282-2c1.352-.076,1.607-1.248,2.567-1.711a36.859,36.859,0,0,1,4-4.849c1.43-1.424,2.567-3.139,3.992-4.565a63.254,63.254,0,0,1,9.989-7.421,1.841,1.841,0,0,0,1.423-.283c.332,1.822.051,2.592,0,4.565-.945,1.431-1.314,3.441-2.566,4.566-.627,1.749-2.022,2.731-2.854,4.278-2.306,2.352-4.3,5.019-6.56,7.418-.2.881-1.278,1.065-1.715,2-.459.678-1.022,1.256-1.426,2-1.263,1.114-2.078,2.675-3.422,3.711a50.428,50.428,0,0,1-6.562,7.417C602.688,439.412,601.371,436.926,599.072,435.42Zm4.278-54.205c-.514-.512-1.362-1.633-.856-2.282,1.346-.014,2.16.5,3.425.57,5.172-.057,9.35-1.107,14.83-.856.482.567,1.639.458,2,1.143.779-.209.574.565,1.143.568-.06.489.489.739,0,.858,0,1.789-2.174,1.662-3.425,1.428a38.436,38.436,0,0,1-4.565-.856c-4.09-.289-6.638.968-10.269,1.139A3.3,3.3,0,0,1,603.35,381.215Zm3.71-8.561c-.066-1.205.438-1.841.569-2.851,1.048-1.435,4.4-1.931,6.277-.856.418.914,1.078,1.584.856,3.139a5.384,5.384,0,0,1-3.424,3.707C609.5,375.16,607.867,374.322,607.06,372.654Z" transform="translate(-569.117 -359.013)" />
                    </svg>
                    <div className="  bg-slate-300 flex justify-center items-center mt-3">
                      <div className="inline-block  w-8 h-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>
                    </div>
                    <div className="flex justify-center items-center mt-3">
                    <span className="text-center justify-center items-center mx-auto">Mohon Tunggu Ya Permintaanmu sedang kami proses</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </>
        ) : null}
      </td>
      <div className="relative">
        {showPopupMesin && (
          <QRScannerPopup
            onClose={() => {
              togglePopupMesin();
              setIsQRResponse(true);
            }}
            onScanSuccess={handleScanSuccessMesin}
          />
        )}
        {showPopupNama && (
          <QRScannerPopup
            onClose={() => {
              togglePopupNama();
              setIsQRResponse(true);
            }}
            onScanSuccess={handleScanSuccessNama}
          />
        )}
      </div>
    </body>
  );
}

export default QRResponseOTHBOT;
