import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";
import QRScannerPopup from "../QR";


const firebaseConfig = {
    apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
    databaseURL:
        "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function Destacker() {
    const [StationView, setStationView] = useState("");
    const [Station, setStation] = useState("");
    const [NamaPIC, setNamaPIC] = useState("");
    const [Line, setLine] = useState("SMT LINE 1");
    const [Area, setArea] = useState("SMT TOP");
    const [isQROperator, setIsQROperator] = useState(true);
    const [DestackerTop, setDestackerTop] = useState("Destacker (TOP)");
    const [StatusdestackerTop, setStatusdestackerTop] = useState("");
    const [hasilScan, setHasilScan] = useState("");
    const [hasilScanMesin, setHasilScanMesin] = useState("");
    const [showPopupNama, setShowPopupNama] = useState(false);
    const [showPopupMesin, setShowPopupMesin] = useState(false);

    const [
        backgroundColorStatusdestackerTop,
        setBackgroundColorStatusdestackerTop,
    ] = useState("");
    // select operator manufacturing
    const [optionsOperatorManufacturing, setOptionsOperatorManufacturing] =
        useState([]);
    const [
        selectedOptionOperatorManufacturing,
        setSelectedOptionOperatorManufacturing,
    ] = useState(null);


    useEffect(() => {
        const ref8 = firebase.database().ref("SMTLine1TOP/Destacker (TOP)");
        ref8.on("value", (snapshot) => {
            const data = snapshot.val();
            updateStatusdestackerTop(data);
        });
        return () => { };
    }, []);

    const updateStatusdestackerTop = (data) => {
        if (data === "Go") {
            setIsQROperator(true);
        }
        setStatusdestackerTop(data);
        setBackgroundColorStatusdestackerTop(
            data === "Go"
                ? "#31A207"
                : data === "Repair"
                    ? "#E9CE08"
                    : data === "Leader"
                        ? "#C00000"
                        : data === "Maintenance"
                            ? "#be4f62"
                            : data === "Return Maintenance"
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



    const submitLeader = () => {
        if (!NamaPIC || !Area || !Station) {
            alert("Harap isi semua kolom!");
            return;
          }
        const data = {
            NamaPIC: NamaPIC,
            Area: Area,
            Line: Line,
            Station: Station,
        };



        alert("Laporan Telah Berhasil Di Kirim Ke Team Leader ");
        setIsQROperator(false);
        firebase.database().ref(`SMTLine1TOP/${Station}`).set("Leader");
        firebase.database().ref("StatusLine/SMTLine1").set("Down");
        setStation(null);
        setNamaPIC(null);

        fetch(`http://192.168.101.236:3001/api/Leader`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.status === 200) {

                } else {
                    throw new Error("Error adding data");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };





    const styles = {
        background: "linear-gradient(45deg, #000, #768087, #87CEEB)",
        height: "1000px",
    };

    const togglePopupNama = () => {
        setShowPopupNama(!showPopupNama);
        setIsQROperator(false);
    };

    const togglePopupMesin = () => {
        setShowPopupMesin(!showPopupMesin);
        setIsQROperator(false);
    };

    const handleScanSuccessNama = (data) => {
        setNamaPIC(data);
        setShowPopupNama(false)
        setShowPopupMesin(false)
        setIsQROperator(true);

    };

    const handleScanSuccessMesin = (data) => {
        setStation(data);
        setStationView(data);
        setShowPopupMesin(false)
        setIsQROperator(true);
    };

    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <body style={styles}>

            <div className="">
                <button
                    className="px-4 ml-4 mt-5 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                    onClick={refreshPage}
                >
                    Refresh
                </button>
            </div>
            <div class="flex items-center justify-center pt-56">
                <section className="antialiased text-gray-600 px-2">
                    <div className="flex flex-col">
                        {/* <!-- Table --> */}

                        <div className="w-72 sm:w-48 lg:w-72">
                            <button

                                className="w-full max-w-sm bg-[#C00000] shadow-lg rounded-xl"
                            >
                                <header className="px-5 py-4">
                                    <div className="italic text-center text-white">
                                        {StationView}
                                    </div>
                                </header>
                            </button>
                        </div>

                        {/* Tombol Refresh */}

                    </div>
                </section>


            </div>
            <td class="">
                {isQROperator ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-64 text-center sm:block sm:p-0">
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
                                                <div className="justify-center mb-3 w-96 items-center flex font-bold uppercase text-black ">
                                                    <span>Request Leader</span>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div className="w-full mt-3 px-3 mb-6 md:mb-0">
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
                                                            <button onClick={togglePopupNama}>
                                                                {showPopupNama ? (
                                                                    <svg width="60px" height="40px" viewBox="0 0 24 24" fill="none" >
                                                                        <path d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z" fill="#0F0F0F" />
                                                                        <path d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z" fill="#0F0F0F" />
                                                                        <path d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z" fill="#0F0F0F" />
                                                                        <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z" fill="#0F0F0F" />
                                                                        <path d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z" fill="#0F0F0F" />
                                                                        <path d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z" fill="#0F0F0F" />
                                                                        <path d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z" fill="#0F0F0F" />
                                                                        <path d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z" fill="#0F0F0F" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="60px" height="40px" viewBox="0 0 24 24" fill="none" >
                                                                        <path d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z" fill="#0F0F0F" />
                                                                        <path d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z" fill="#0F0F0F" />
                                                                        <path d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z" fill="#0F0F0F" />
                                                                        <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z" fill="#0F0F0F" />
                                                                        <path d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z" fill="#0F0F0F" />
                                                                        <path d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z" fill="#0F0F0F" />
                                                                        <path d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z" fill="#0F0F0F" />
                                                                        <path d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z" fill="#0F0F0F" />
                                                                    </svg>
                                                                )}
                                                            </button>
                                                        </div>

                                                    </div>
                                                    <div className="w-full mt-3 px-3 mb-6 md:mb-0">
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
                                                            <button onClick={() => {
                                                                togglePopupMesin();
                                                                setIsQROperator(false);
                                                            }}
                                                            >
                                                                {showPopupMesin ? (
                                                                    <svg width="60px" height="40px" viewBox="0 0 24 24" fill="none" >
                                                                        <path d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z" fill="#0F0F0F" />
                                                                        <path d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z" fill="#0F0F0F" />
                                                                        <path d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z" fill="#0F0F0F" />
                                                                        <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z" fill="#0F0F0F" />
                                                                        <path d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z" fill="#0F0F0F" />
                                                                        <path d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z" fill="#0F0F0F" />
                                                                        <path d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z" fill="#0F0F0F" />
                                                                        <path d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z" fill="#0F0F0F" />
                                                                    </svg>
                                                                ) : (
                                                                    <svg width="60px" height="40px" viewBox="0 0 24 24" fill="none" >
                                                                        <path d="M23 4C23 2.34315 21.6569 1 20 1H16C15.4477 1 15 1.44772 15 2C15 2.55228 15.4477 3 16 3H20C20.5523 3 21 3.44772 21 4V8C21 8.55228 21.4477 9 22 9C22.5523 9 23 8.55228 23 8V4Z" fill="#0F0F0F" />
                                                                        <path d="M23 16C23 15.4477 22.5523 15 22 15C21.4477 15 21 15.4477 21 16V20C21 20.5523 20.5523 21 20 21H16C15.4477 21 15 21.4477 15 22C15 22.5523 15.4477 23 16 23H20C21.6569 23 23 21.6569 23 20V16Z" fill="#0F0F0F" />
                                                                        <path d="M4 21C3.44772 21 3 20.5523 3 20V16C3 15.4477 2.55228 15 2 15C1.44772 15 1 15.4477 1 16V20C1 21.6569 2.34315 23 4 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H4Z" fill="#0F0F0F" />
                                                                        <path d="M1 8C1 8.55228 1.44772 9 2 9C2.55228 9 3 8.55228 3 8V4C3 3.44772 3.44772 3 4 3H8C8.55228 3 9 2.55228 9 2C9 1.44772 8.55228 1 8 1H4C2.34315 1 1 2.34315 1 4V8Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11 6C11 5.44772 10.5523 5 10 5H6C5.44772 5 5 5.44772 5 6V10C5 10.5523 5.44772 11 6 11H10C10.5523 11 11 10.5523 11 10V6ZM9 7.5C9 7.22386 8.77614 7 8.5 7H7.5C7.22386 7 7 7.22386 7 7.5V8.5C7 8.77614 7.22386 9 7.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5Z" fill="#0F0F0F" />
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18 13C18.5523 13 19 13.4477 19 14V18C19 18.5523 18.5523 19 18 19H14C13.4477 19 13 18.5523 13 18V14C13 13.4477 13.4477 13 14 13H18ZM15 15.5C15 15.2239 15.2239 15 15.5 15H16.5C16.7761 15 17 15.2239 17 15.5V16.5C17 16.7761 16.7761 17 16.5 17H15.5C15.2239 17 15 16.7761 15 16.5V15.5Z" fill="#0F0F0F" />
                                                                        <path d="M14 5C13.4477 5 13 5.44772 13 6C13 6.55229 13.4477 7 14 7H16.5C16.7761 7 17 7.22386 17 7.5V10C17 10.5523 17.4477 11 18 11C18.5523 11 19 10.5523 19 10V6C19 5.44772 18.5523 5 18 5H14Z" fill="#0F0F0F" />
                                                                        <path d="M14 8C13.4477 8 13 8.44771 13 9V10C13 10.5523 13.4477 11 14 11C14.5523 11 15 10.5523 15 10V9C15 8.44772 14.5523 8 14 8Z" fill="#0F0F0F" />
                                                                        <path d="M6 13C5.44772 13 5 13.4477 5 14V16C5 16.5523 5.44772 17 6 17C6.55229 17 7 16.5523 7 16V15.5C7 15.2239 7.22386 15 7.5 15H10C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13H6Z" fill="#0F0F0F" />
                                                                        <path d="M10 17C9.44771 17 9 17.4477 9 18C9 18.5523 9.44771 19 10 19C10.5523 19 11 18.5523 11 18C11 17.4477 10.5523 17 10 17Z" fill="#0F0F0F" />
                                                                    </svg>
                                                                )}
                                                            </button>
                                                        </div>

                                                    </div>

                                                </div>

                                                {/*Status*/}

                                                <div class="flex flex-wrap -mx-3 mb-3 mt-3">
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


                                                <div className="flex justify-end">
                                                    {/* <button
                                                        class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                                        onClick={() => setIsQROperator(false)}
                                                    >
                                                        No, cancel
                                                    </button> */}
                                                    <button
                                                        class="text-white bg-emerald-600 ml-2 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                                                        type="submit"
                                                        onClick={submitLeader}
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

            <div className="relative">
                {showPopupMesin && (
                    <QRScannerPopup
                        onClose={() => {
                            togglePopupMesin();
                            setIsQROperator(true);
                        }}
                        onScanSuccess={handleScanSuccessMesin}
                    />
                )}

                {showPopupNama && (
                    <QRScannerPopup
                        onClose={() => {
                            togglePopupNama();
                            setIsQROperator(true);
                        }}
                        onScanSuccess={handleScanSuccessNama}
                    />
                )}
            </div>
        </body>

    )
}

export default Destacker