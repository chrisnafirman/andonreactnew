import React, { useState, useEffect, useRef } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
import Select from "react-select";
import QRScannerPopup from "../QR";


const firebaseConfig = {
    apiKey: "AIzaSyAuJMa_ODFS06DHoK25kxkbY46wajkTuT4",
    databaseURL:
        "https://andon-73506-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

function QROperatorBE() {
    const [StationView, setStationView] = useState("");
    const [Station, setStation] = useState("");
    const [NamaPIC, setNamaPIC] = useState("");
    const [Line, setLine] = useState("SMT LINE 1");
    const [Area, setArea] = useState("SMT BE");
    const [Uid, setUid] = useState("");
    // Khusus Req Maintenance
    const [Requestor, setRequestor] = useState("Operator");
    const [Department, setDepartment] = useState("MAINTENANCE & IT");
    const [Kerusakan, setKerusakan] = useState("");
    // --------------
    const [isQROperator, setIsQROperator] = useState(false);
    const [isQROperatorToMTC, setIsQROperatorToMTC] = useState(false);
    const [isOpenStation, setIsOpenStation] = useState(false);
    const [showPopupNama, setShowPopupNama] = useState(false);
    const [showPopupMesin, setShowPopupMesin] = useState(false);
    const [showPopupNamaToMTC, setShowPopupNamaToMTC] = useState(false);
    const [showPopupMesinToMTC, setShowPopupMesinToMTC] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpenQR, setIsOpenQR] = useState(true);
    const [isOpenISA, setIsOpenISA] = useState(true);
    const [showDrawer, setShowDrawer] = useState(false);
    const [isOpenLogo, setIsOpenLogo] = useState(true);
    const [data, setData] = useState(null);

    // CMA
    const [CMATime, setCMATime] = useState({ hours: 0, minutes: 0, seconds: 0 });
    const [CMARunning, setCMARunning] = useState();
    const [ResultsCMA, setResultsCMA] = useState();

    // -------------

    // REAL PRODUCTION TIME

    const [RealPT1, setRealPT1] = useState("");
    const [RealPT2, setRealPT2] = useState("");
    const [RealPT3, setRealPT3] = useState("");
    const [RealPT4, setRealPT4] = useState("");
    const [RealPD, setRealPD] = useState("");
    const [RealOT, setRealOT] = useState("");
    const [Total, setTotal] = useState("");

    // -------------

    const toggleDrawer = () => {
        setShowDrawer(!showDrawer);
    };

    // Fetching FIrebase
    useEffect(() => {


        const ref10 = firebase.database().ref("/StatusLine/SMTLine1CMAOnGoing");
        ref10.on("value", (snapshot) => {
            const data = snapshot.val();
            setResultsCMA(data);
        });

        const ref11 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime1");
        ref11.on("value", (snapshot) => {
            const data = snapshot.val();

            setRealPT1(data);
        });

        const ref12 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime2");
        ref12.on("value", (snapshot) => {
            const data = snapshot.val();
            setRealPT2(data);
        });

        const ref13 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime3");
        ref13.on("value", (snapshot) => {
            const data = snapshot.val();
            setRealPT3(data);
        });

        const ref14 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/ProductionTime4");
        ref14.on("value", (snapshot) => {
            const data = snapshot.val();
            setRealPT4(data);
        });

        const ref15 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/DownTime");
        ref15.on("value", (snapshot) => {
            const data = snapshot.val();
            setRealPD(data);
        });

        const ref16 = firebase
            .database()
            .ref("/StatusLine/SMTLine1ProductionTime/OverTime");
        ref16.on("value", (snapshot) => {
            const data = snapshot.val();
            setRealOT(data);
        });




        return () => { };
    }, []);



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

        notificationLeader();
        setIsQROperator(false);
        setIsOpenQR(false);
        setIsOpenISA(false);
        setIsOpenLogo(true);
        setIsOpenStation(true);
        setStation(null);
        setNamaPIC(null);
        alert("Laporan Telah Berhasil Di Kirim Ke Team Leader ");
        firebase.database().ref(`SMTLine1BE/${Station}`).set("Leader");
        firebase.database().ref("StatusLine/SMTLine1").set("Down");


        fetch(`https://andonline.astra-visteon.com:3002/api/Leader`, {
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

    //  fungsi mengambil data dari firebase

    // QR
    const submitMaintenance = () => {
        if (!NamaPIC || !Area || !Department || !Station || !Kerusakan) {
            alert("Harap isi semua kolom!");
            return;
        }

        const data = {
            NamaPIC: NamaPIC,
            Area: Area,
            Line: Line,
            Station: Station,
            Department: Department,
            Requestor: Requestor,
            Kerusakan: Kerusakan,
            Uid: Uid,
        };
        alert(`Laporan Telah Berhasil Di Kirim Ke Team MAINTENANCE & IT `);
        notificationMaintenance();
        firebase.database().ref(`SMTLine1BE/${Station}`).set("MAINTENANCE & IT");
        firebase.database().ref("StatusLine/SMTLine1").set("Down");
        setIsQROperatorToMTC(false);
        setIsOpenQR(false);
        setIsOpenISA(false);
        setIsOpenLogo(true);
        setIsOpenStation(true);
        setStation(null);
        setNamaPIC(null);

        fetch(`https://andonline.astra-visteon.com:3002/api/Repair`, {
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
                    "https://andonline.astra-visteon.com:3002/api/ScheduleProduction"
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


    const styles = {
        background: "linear-gradient(45deg, #000, #CFCFCF, #091727)",
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

    const togglePopupNamaToMTC = () => {
        setShowPopupNamaToMTC(!showPopupNamaToMTC);
        setIsQROperatorToMTC(false);
    };

    const togglePopupMesinToMTC = () => {
        setShowPopupMesinToMTC(!showPopupMesinToMTC);
        setIsQROperatorToMTC(false);
    };

    const handleScanSuccessNama = (data) => {
        setNamaPIC(data);
        setShowPopupNama(false)
        setShowPopupMesin(false)
        setIsQROperator(true);

    };

    const handleScanSuccessMesin = (data) => {
        // Check if "(BE)" is present in the scanned data
        if (data.includes("(BE)")) {

            setStation(data);
            setStationView(data);
            setShowPopupMesin(false)
            setIsQROperator(true);
        } else {
            // Show an error message or take appropriate action for "(BE)" or other cases
            alert("Invalid scan. Scan Hanya Bisa Di Lakukan Di Mesin Area '(BE)'");
        }
    };



    const handleScanSuccessNamaToMTC = (data) => {
        setNamaPIC(data);
        setShowPopupNamaToMTC(false)
        setShowPopupMesinToMTC(false)
        setIsQROperatorToMTC(true);

    };

    const handleScanSuccessMesinToMTC = (data) => {
        if (data.includes("(BE)")) {
            setStation(data);
            setStationView(data);
            setShowPopupMesinToMTC(false)
            setIsQROperatorToMTC(true);
        } else {
            // Show an error message or take appropriate action for "(BE)" or other cases
            alert("Invalid scan. Scan Hanya Bisa Di Lakukan Di Mesin Area '(BE)'");
        }
    };

    const refreshPage = () => {
        window.location.reload();
    };


    useEffect(() => {
        generateUniqueUid();
    }, []);

    const generateUniqueUid = () => {
        const randomId = `INC${Math.floor(Math.random() * 1000).toString().padStart(4, "0")}`;

        // Kirim permintaan ke API untuk memeriksa UID
        fetch("https://andonline.astra-visteon.com:3002/api/Repair")
            .then((response) => response.json())
            .then((data) => {
                const uids = data.map((item) => item.Uid);
                if (!uids.includes(randomId)) {
                    // Jika UID belum digunakan, set UID ke nilai randomId
                    setUid(randomId);
                } else {
                    // Jika UID sudah digunakan, coba generate UID baru
                    generateUniqueUid();
                }
            })
            .catch((error) => {
                console.error("Error fetching data from API:", error);
            });
    };

    
    const notificationLeader = () => {
    
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-950877102];
        const message = `!! Attention Station Down !!%0A%0ASMT LINE 1 Request Action Leader%0A%0ARequest By : ${NamaPIC}%0AStation : ${Station}`;


        const escapedMessage = message.replace(/&/g, '%26');

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${escapedMessage}`
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
    
    }

    const notificationMaintenance = () => {
    
        const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
        const chatIds = [-993707437];
        const message = `!! Attention Station Down !!%0A%0ASMT LINE 1 Request Repair Maintenance%0A%0ARequest By : ${NamaPIC}%0AStation : ${Station}%0AUid : ${Uid}%0AProblem : ${Kerusakan}`;

        const escapedMessage = message.replace(/&/g, '%26');

        chatIds.forEach((chatId) => {
          fetch(
            `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&parse_mode=HTML&text=${escapedMessage}`
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
    
    }

    return (
        <body style={styles}>

            {isOpenLogo ? (
                <>
                    <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-[linear-gradient(45deg, #000, #768087, #27374D)] w-full z-20 BE-0 left-0  dark:border-gray-600">
                        <div class="flex h-14 items-center justify-between">
                            <div class="flex items-center justify-center mx-auto">
                                <div class="flex-shrink-0 ">
                                    <img
                                        src={process.env.PUBLIC_URL + "/aviqr.PNG"}
                                        alt="Logo"
                                        class="h-20 w-60 ml-4 mt-10 sm:h-9 bg-white rounded-md"
                                    />
                                </div>
                            </div>
                            <p class="text-gray-500 text-sm"></p>
                        </div>
                    </nav>
                </>
            ) : null}


            {/* 
            <header class="bg-white shadow mb-3">
                <div class="mx-auto max-w-7xl px-4">
                    <div>
                        <div class="flex items-center">
                            <button >
                                <h1 class="text-xl font-sans tracking-tight text-gray-900">
                                    | SMT Line 1 - BE  |
                                </h1>
                            </button>
                            <h1 class="text-xl font-sans tracking-tight ml-4">
                                <span class="text-black">SMT LINE 1:</span>
                                <span
                                    class="ml-4"
                             
                                >
                                
                                </span>
                                <span className="ml-4">|</span>
                            </h1>
                            <h1 class="text-xl font-sans tracking-tight ml-4">
                                <span class="text-black">SMT LINE 2:</span>
                                <span class="ml-4 text-green-500">RUNNING </span>|
                            </h1>
                        </div>
                    </div>
                </div>
            </header> */}
            <div className="">
                <button
                    className="px-4 ml-4 mt-10 py-2 bg-blue-500  text-white rounded-md shadow-md hover:bg-blue-600"
                    onClick={refreshPage}
                >
                    <svg width="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 3V8M3 8H8M3 8L6 5.29168C7.59227 3.86656 9.69494 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.71683 21 4.13247 18.008 3.22302 14" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            {isOpenStation ? (
                <>
                    <div class="flex items-center justify-center pt-48">
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
                </>
            ) : null}


            {isOpenQR ? (
                <>
                    <div class="flex items-center justify-center pt-20">
                        <section className="antialiased text-gray-600 px-2">
                            <div className=" flex ">
                                <div className="">
                                    <div className=" p-6 rounded-lg text-center">
                                        <button onClick={() => setIsQROperator(true)}>

                                            <svg fill="#1e1f1f" width="100px" className="w-full py-2 px-4  hover:scale-75 ease-in duration-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1666667,6 C16.0746192,6 16,6.07461921 16,6.16666667 L16,7.83333333 C16,7.92538079 16.0746192,8 16.1666667,8 L17.8333333,8 C17.9253808,8 18,7.92538079 18,7.83333333 L18,6.16666667 C18,6.07461921 17.9253808,6 17.8333333,6 L16.1666667,6 Z M16,18 L16,17.5 C16,17.2238576 16.2238576,17 16.5,17 C16.7761424,17 17,17.2238576 17,17.5 L17,18 L18,18 L18,17.5 C18,17.2238576 18.2238576,17 18.5,17 C18.7761424,17 19,17.2238576 19,17.5 L19,18.5 C19,18.7761424 18.7761424,19 18.5,19 L14.5,19 C14.2238576,19 14,18.7761424 14,18.5 L14,17.5 C14,17.2238576 14.2238576,17 14.5,17 C14.7761424,17 15,17.2238576 15,17.5 L15,18 L16,18 L16,18 Z M13,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 C14,11.7761424 13.7761424,12 13.5,12 L11.5,12 C11.2238576,12 11,11.7761424 11,11.5 C11,11.2238576 11.2238576,11 11.5,11 L12,11 L12,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.22385763 10.2238576,9 10.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L13,10 L13,11 Z M18,12 L17.5,12 C17.2238576,12 17,11.7761424 17,11.5 C17,11.2238576 17.2238576,11 17.5,11 L18,11 L18,10.5 C18,10.2238576 18.2238576,10 18.5,10 C18.7761424,10 19,10.2238576 19,10.5 L19,12.5 C19,12.7761424 18.7761424,13 18.5,13 C18.2238576,13 18,12.7761424 18,12.5 L18,12 Z M13,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 C12,13.2238576 12.2238576,13 12.5,13 L13.5,13 C13.7761424,13 14,13.2238576 14,13.5 L14,15.5 C14,15.7761424 13.7761424,16 13.5,16 L10.5,16 C10.2238576,16 10,15.7761424 10,15.5 C10,15.2238576 10.2238576,15 10.5,15 L13,15 L13,14 L13,14 Z M16.1666667,5 L17.8333333,5 C18.4776655,5 19,5.52233446 19,6.16666667 L19,7.83333333 C19,8.47766554 18.4776655,9 17.8333333,9 L16.1666667,9 C15.5223345,9 15,8.47766554 15,7.83333333 L15,6.16666667 C15,5.52233446 15.5223345,5 16.1666667,5 Z M6.16666667,5 L7.83333333,5 C8.47766554,5 9,5.52233446 9,6.16666667 L9,7.83333333 C9,8.47766554 8.47766554,9 7.83333333,9 L6.16666667,9 C5.52233446,9 5,8.47766554 5,7.83333333 L5,6.16666667 C5,5.52233446 5.52233446,5 6.16666667,5 Z M6.16666667,6 C6.07461921,6 6,6.07461921 6,6.16666667 L6,7.83333333 C6,7.92538079 6.07461921,8 6.16666667,8 L7.83333333,8 C7.92538079,8 8,7.92538079 8,7.83333333 L8,6.16666667 C8,6.07461921 7.92538079,6 7.83333333,6 L6.16666667,6 Z M6.16666667,15 L7.83333333,15 C8.47766554,15 9,15.5223345 9,16.1666667 L9,17.8333333 C9,18.4776655 8.47766554,19 7.83333333,19 L6.16666667,19 C5.52233446,19 5,18.4776655 5,17.8333333 L5,16.1666667 C5,15.5223345 5.52233446,15 6.16666667,15 Z M6.16666667,16 C6.07461921,16 6,16.0746192 6,16.1666667 L6,17.8333333 C6,17.9253808 6.07461921,18 6.16666667,18 L7.83333333,18 C7.92538079,18 8,17.9253808 8,17.8333333 L8,16.1666667 C8,16.0746192 7.92538079,16 7.83333333,16 L6.16666667,16 Z M13,6 L10.5,6 C10.2238576,6 10,5.77614237 10,5.5 C10,5.22385763 10.2238576,5 10.5,5 L13.5,5 C13.7761424,5 14,5.22385763 14,5.5 L14,7.5 C14,7.77614237 13.7761424,8 13.5,8 C13.2238576,8 13,7.77614237 13,7.5 L13,6 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 L11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L10.5,8 Z M5.5,14 C5.22385763,14 5,13.7761424 5,13.5 C5,13.2238576 5.22385763,13 5.5,13 L7.5,13 C7.77614237,13 8,13.2238576 8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L5.5,14 Z M9.5,14 C9.22385763,14 9,13.7761424 9,13.5 C9,13.2238576 9.22385763,13 9.5,13 L10.5,13 C10.7761424,13 11,13.2238576 11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 Z M11,18 L11,18.5 C11,18.7761424 10.7761424,19 10.5,19 C10.2238576,19 10,18.7761424 10,18.5 L10,17.5 C10,17.2238576 10.2238576,17 10.5,17 L12.5,17 C12.7761424,17 13,17.2238576 13,17.5 C13,17.7761424 12.7761424,18 12.5,18 L11,18 Z M9,11 L9.5,11 C9.77614237,11 10,11.2238576 10,11.5 C10,11.7761424 9.77614237,12 9.5,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 L8,11 L7.5,11 C7.22385763,11 7,10.7761424 7,10.5 C7,10.2238576 7.22385763,10 7.5,10 L8.5,10 C8.77614237,10 9,10.2238576 9,10.5 L9,11 Z M5,10.5 C5,10.2238576 5.22385763,10 5.5,10 C5.77614237,10 6,10.2238576 6,10.5 L6,11.5 C6,11.7761424 5.77614237,12 5.5,12 C5.22385763,12 5,11.7761424 5,11.5 L5,10.5 Z M15,10.5 C15,10.2238576 15.2238576,10 15.5,10 C15.7761424,10 16,10.2238576 16,10.5 L16,12.5 C16,12.7761424 15.7761424,13 15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,10.5 Z M17,15 L17,14.5 C17,14.2238576 17.2238576,14 17.5,14 L18.5,14 C18.7761424,14 19,14.2238576 19,14.5 C19,14.7761424 18.7761424,15 18.5,15 L18,15 L18,15.5 C18,15.7761424 17.7761424,16 17.5,16 L15.5,16 C15.2238576,16 15,15.7761424 15,15.5 L15,14.5 C15,14.2238576 15.2238576,14 15.5,14 C15.7761424,14 16,14.2238576 16,14.5 L16,15 L17,15 Z M3,6.5 C3,6.77614237 2.77614237,7 2.5,7 C2.22385763,7 2,6.77614237 2,6.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L6.5,2 C6.77614237,2 7,2.22385763 7,2.5 C7,2.77614237 6.77614237,3 6.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6.5 Z M17.5,3 C17.2238576,3 17,2.77614237 17,2.5 C17,2.22385763 17.2238576,2 17.5,2 L19.5,2 C20.8807119,2 22,3.11928813 22,4.5 L22,6.5 C22,6.77614237 21.7761424,7 21.5,7 C21.2238576,7 21,6.77614237 21,6.5 L21,4.5 C21,3.67157288 20.3284271,3 19.5,3 L17.5,3 Z M6.5,21 C6.77614237,21 7,21.2238576 7,21.5 C7,21.7761424 6.77614237,22 6.5,22 L4.5,22 C3.11928813,22 2,20.8807119 2,19.5 L2,17.5 C2,17.2238576 2.22385763,17 2.5,17 C2.77614237,17 3,17.2238576 3,17.5 L3,19.5 C3,20.3284271 3.67157288,21 4.5,21 L6.5,21 Z M21,17.5 C21,17.2238576 21.2238576,17 21.5,17 C21.7761424,17 22,17.2238576 22,17.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L17.5,22 C17.2238576,22 17,21.7761424 17,21.5 C17,21.2238576 17.2238576,21 17.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,17.5 Z" />
                                            </svg>

                                        </button>
                                        <span className='text-white block font-serif'>Leader QR</span>
                                    </div>
                                </div>
                                <div className="">
                                    <div className=" p-6 rounded-lg text-center ">
                                        <button onClick={() => setIsQROperatorToMTC(true)}>

                                            <svg fill="#8b4513" width="100px" className="w-full py-2 px-4  hover:scale-75 ease-in duration-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16.1666667,6 C16.0746192,6 16,6.07461921 16,6.16666667 L16,7.83333333 C16,7.92538079 16.0746192,8 16.1666667,8 L17.8333333,8 C17.9253808,8 18,7.92538079 18,7.83333333 L18,6.16666667 C18,6.07461921 17.9253808,6 17.8333333,6 L16.1666667,6 Z M16,18 L16,17.5 C16,17.2238576 16.2238576,17 16.5,17 C16.7761424,17 17,17.2238576 17,17.5 L17,18 L18,18 L18,17.5 C18,17.2238576 18.2238576,17 18.5,17 C18.7761424,17 19,17.2238576 19,17.5 L19,18.5 C19,18.7761424 18.7761424,19 18.5,19 L14.5,19 C14.2238576,19 14,18.7761424 14,18.5 L14,17.5 C14,17.2238576 14.2238576,17 14.5,17 C14.7761424,17 15,17.2238576 15,17.5 L15,18 L16,18 L16,18 Z M13,11 L13.5,11 C13.7761424,11 14,11.2238576 14,11.5 C14,11.7761424 13.7761424,12 13.5,12 L11.5,12 C11.2238576,12 11,11.7761424 11,11.5 C11,11.2238576 11.2238576,11 11.5,11 L12,11 L12,10 L10.5,10 C10.2238576,10 10,9.77614237 10,9.5 C10,9.22385763 10.2238576,9 10.5,9 L13.5,9 C13.7761424,9 14,9.22385763 14,9.5 C14,9.77614237 13.7761424,10 13.5,10 L13,10 L13,11 Z M18,12 L17.5,12 C17.2238576,12 17,11.7761424 17,11.5 C17,11.2238576 17.2238576,11 17.5,11 L18,11 L18,10.5 C18,10.2238576 18.2238576,10 18.5,10 C18.7761424,10 19,10.2238576 19,10.5 L19,12.5 C19,12.7761424 18.7761424,13 18.5,13 C18.2238576,13 18,12.7761424 18,12.5 L18,12 Z M13,14 L12.5,14 C12.2238576,14 12,13.7761424 12,13.5 C12,13.2238576 12.2238576,13 12.5,13 L13.5,13 C13.7761424,13 14,13.2238576 14,13.5 L14,15.5 C14,15.7761424 13.7761424,16 13.5,16 L10.5,16 C10.2238576,16 10,15.7761424 10,15.5 C10,15.2238576 10.2238576,15 10.5,15 L13,15 L13,14 L13,14 Z M16.1666667,5 L17.8333333,5 C18.4776655,5 19,5.52233446 19,6.16666667 L19,7.83333333 C19,8.47766554 18.4776655,9 17.8333333,9 L16.1666667,9 C15.5223345,9 15,8.47766554 15,7.83333333 L15,6.16666667 C15,5.52233446 15.5223345,5 16.1666667,5 Z M6.16666667,5 L7.83333333,5 C8.47766554,5 9,5.52233446 9,6.16666667 L9,7.83333333 C9,8.47766554 8.47766554,9 7.83333333,9 L6.16666667,9 C5.52233446,9 5,8.47766554 5,7.83333333 L5,6.16666667 C5,5.52233446 5.52233446,5 6.16666667,5 Z M6.16666667,6 C6.07461921,6 6,6.07461921 6,6.16666667 L6,7.83333333 C6,7.92538079 6.07461921,8 6.16666667,8 L7.83333333,8 C7.92538079,8 8,7.92538079 8,7.83333333 L8,6.16666667 C8,6.07461921 7.92538079,6 7.83333333,6 L6.16666667,6 Z M6.16666667,15 L7.83333333,15 C8.47766554,15 9,15.5223345 9,16.1666667 L9,17.8333333 C9,18.4776655 8.47766554,19 7.83333333,19 L6.16666667,19 C5.52233446,19 5,18.4776655 5,17.8333333 L5,16.1666667 C5,15.5223345 5.52233446,15 6.16666667,15 Z M6.16666667,16 C6.07461921,16 6,16.0746192 6,16.1666667 L6,17.8333333 C6,17.9253808 6.07461921,18 6.16666667,18 L7.83333333,18 C7.92538079,18 8,17.9253808 8,17.8333333 L8,16.1666667 C8,16.0746192 7.92538079,16 7.83333333,16 L6.16666667,16 Z M13,6 L10.5,6 C10.2238576,6 10,5.77614237 10,5.5 C10,5.22385763 10.2238576,5 10.5,5 L13.5,5 C13.7761424,5 14,5.22385763 14,5.5 L14,7.5 C14,7.77614237 13.7761424,8 13.5,8 C13.2238576,8 13,7.77614237 13,7.5 L13,6 Z M10.5,8 C10.2238576,8 10,7.77614237 10,7.5 C10,7.22385763 10.2238576,7 10.5,7 L11.5,7 C11.7761424,7 12,7.22385763 12,7.5 C12,7.77614237 11.7761424,8 11.5,8 L10.5,8 Z M5.5,14 C5.22385763,14 5,13.7761424 5,13.5 C5,13.2238576 5.22385763,13 5.5,13 L7.5,13 C7.77614237,13 8,13.2238576 8,13.5 C8,13.7761424 7.77614237,14 7.5,14 L5.5,14 Z M9.5,14 C9.22385763,14 9,13.7761424 9,13.5 C9,13.2238576 9.22385763,13 9.5,13 L10.5,13 C10.7761424,13 11,13.2238576 11,13.5 C11,13.7761424 10.7761424,14 10.5,14 L9.5,14 Z M11,18 L11,18.5 C11,18.7761424 10.7761424,19 10.5,19 C10.2238576,19 10,18.7761424 10,18.5 L10,17.5 C10,17.2238576 10.2238576,17 10.5,17 L12.5,17 C12.7761424,17 13,17.2238576 13,17.5 C13,17.7761424 12.7761424,18 12.5,18 L11,18 Z M9,11 L9.5,11 C9.77614237,11 10,11.2238576 10,11.5 C10,11.7761424 9.77614237,12 9.5,12 L8.5,12 C8.22385763,12 8,11.7761424 8,11.5 L8,11 L7.5,11 C7.22385763,11 7,10.7761424 7,10.5 C7,10.2238576 7.22385763,10 7.5,10 L8.5,10 C8.77614237,10 9,10.2238576 9,10.5 L9,11 Z M5,10.5 C5,10.2238576 5.22385763,10 5.5,10 C5.77614237,10 6,10.2238576 6,10.5 L6,11.5 C6,11.7761424 5.77614237,12 5.5,12 C5.22385763,12 5,11.7761424 5,11.5 L5,10.5 Z M15,10.5 C15,10.2238576 15.2238576,10 15.5,10 C15.7761424,10 16,10.2238576 16,10.5 L16,12.5 C16,12.7761424 15.7761424,13 15.5,13 C15.2238576,13 15,12.7761424 15,12.5 L15,10.5 Z M17,15 L17,14.5 C17,14.2238576 17.2238576,14 17.5,14 L18.5,14 C18.7761424,14 19,14.2238576 19,14.5 C19,14.7761424 18.7761424,15 18.5,15 L18,15 L18,15.5 C18,15.7761424 17.7761424,16 17.5,16 L15.5,16 C15.2238576,16 15,15.7761424 15,15.5 L15,14.5 C15,14.2238576 15.2238576,14 15.5,14 C15.7761424,14 16,14.2238576 16,14.5 L16,15 L17,15 Z M3,6.5 C3,6.77614237 2.77614237,7 2.5,7 C2.22385763,7 2,6.77614237 2,6.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L6.5,2 C6.77614237,2 7,2.22385763 7,2.5 C7,2.77614237 6.77614237,3 6.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,6.5 Z M17.5,3 C17.2238576,3 17,2.77614237 17,2.5 C17,2.22385763 17.2238576,2 17.5,2 L19.5,2 C20.8807119,2 22,3.11928813 22,4.5 L22,6.5 C22,6.77614237 21.7761424,7 21.5,7 C21.2238576,7 21,6.77614237 21,6.5 L21,4.5 C21,3.67157288 20.3284271,3 19.5,3 L17.5,3 Z M6.5,21 C6.77614237,21 7,21.2238576 7,21.5 C7,21.7761424 6.77614237,22 6.5,22 L4.5,22 C3.11928813,22 2,20.8807119 2,19.5 L2,17.5 C2,17.2238576 2.22385763,17 2.5,17 C2.77614237,17 3,17.2238576 3,17.5 L3,19.5 C3,20.3284271 3.67157288,21 4.5,21 L6.5,21 Z M21,17.5 C21,17.2238576 21.2238576,17 21.5,17 C21.7761424,17 22,17.2238576 22,17.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L17.5,22 C17.2238576,22 17,21.7761424 17,21.5 C17,21.2238576 17.2238576,21 17.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,17.5 Z" />
                                            </svg>

                                        </button>
                                        <span class='block  text-white font-serif'>Maintenance QR</span>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </div>
                </>
            ) : null}
            {isOpenISA ? (
                <>
                    <div class="flex items-center justify-center ">
                        <section className="antialiased flex text-gray-600 px-2">
                            <div className="flex">
                                <div className=" p-6 rounded-lg ">
                                    <button onClick={() => setIsOpen2(true)}>
                                        <button className="w-full py-2 px-4  hover:scale-75 ease-in duration-500">
                                            <svg fill="#2e3730" width="70px" className="w-full py-2 px-4  hover:scale-75 ease-in duration-500" version="1.1" id="Layer_1"
                                                viewBox="0 0 512 512" >
                                                <g>
                                                    <g>
                                                        <path d="M0,0v512h512V0H0z M462.452,462.452H49.548V49.548h412.903V462.452z" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <polygon points="272.516,330.323 272.516,222.968 222.968,222.968 222.968,379.871 313.806,379.871 313.806,330.323 		" />
                                                    </g>
                                                </g>
                                                <g>
                                                    <g>
                                                        <path d="M247.742,123.871c-18.214,0-33.032,14.818-33.032,33.032s14.818,33.032,33.032,33.032s33.032-14.818,33.032-33.032
			S265.956,123.871,247.742,123.871z"/>
                                                    </g>
                                                </g>
                                            </svg>
                                            <span className='text-white font-serif'>Information</span>
                                        </button>
                                    </button>
                                </div>
                            </div>
                           
                        </section>
                    </div>
                </>
            ) : null}

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
                                            <button
                                                className="absolute BE-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => {
                                                    setIsQROperator(false)
                                                    setIsOpenLogo(true);
                                                }}
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
                                                <div className="justify-center mb-3 w-96 items-center flex font-bold uppercase text-black ">
                                                    <span>Request Leader</span>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div className="w-full mt-3 px-3 mb-3 md:mb-0">
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
                                                            <button onClick={() => {
                                                                togglePopupNama();
                                                                setIsQROperator(false);
                                                                setIsOpenLogo(false);
                                                            }}>
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
                                                    <div className="w-full mt-3 px-3 mb-3 md:mb-0">
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
                                                                setIsOpenLogo(false);
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

            {/* Operator To MTC */}
            <td class="">
                {isQROperatorToMTC ? (
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
                                            <button
                                                className="absolute BE-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                                onClick={() => {
                                                    setIsQROperatorToMTC(false)
                                                    setIsOpenLogo(true);
                                                }}
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
                                                <div className="justify-center mb-3 w-96 items-center flex font-bold uppercase text-black ">
                                                    <span>Request Maintenance </span>
                                                </div>
                                                <div class="flex flex-wrap -mx-3 ">
                                                    <div className="w-full mt-3 px-3 mb-3 md:mb-0">
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
                                                            <button onClick={() => {
                                                                togglePopupNamaToMTC();
                                                                setIsQROperatorToMTC(false)
                                                                setIsOpenLogo(false);
                                                            }}>
                                                                {showPopupNamaToMTC ? (
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
                                                    <div className="w-full mt-3 px-3 mb-3 md:mb-0">
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
                                                                togglePopupMesinToMTC();
                                                                setIsQROperatorToMTC(false)
                                                                setIsOpenLogo(false);
                                                            }}
                                                            >
                                                                {showPopupMesinToMTC ? (
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

                                                <div class="flex  -mx-3  mt-3">
                                                    <div class="w-full md:w-1/3 px-3 mb-3 md:mb-0">
                                                        <label
                                                            class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                            for="grid-city"
                                                        >
                                                            Area
                                                        </label>
                                                        <span
                                                            class="appearance-none block w-full mb-3 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
                                                <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
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
                                                    <p class="text-gray-600 text-xs italic">
                                                        Laporkan Permasalahan Yang Ditemukan
                                                    </p>
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
                                                        onClick={submitMaintenance}
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
            {/* ISA */}
            <td class="">
                {isOpen2 ? (
                    <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                            <div className="flex items-start justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                                {/* Set the width to the desired value, e.g., 'max-w-screen-md' */}

                                <div
                                    className="inline-block bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-5xl sm:w-full max-w-screen-md"
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
                                    <div className="bg-white px-4 pt-1 pb-4 flex flex-col sm:p-6 sm:pb-4">
                                        <div className="bg-gray-100 px-4 w-[470px]  rounded-lg shadow-md">
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
                                        <div className="pt-2">
                                            <div className="overflow-y-auto max-h-96 w-[470px]">
                                                {data ? (
                                                    <div className="bg-gray-100 px-4 py-6 sm:p-6 rounded-lg shadow-md">
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="fixed inset-0 z-0 bg-gray-500 opacity-75"></div>
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
            <div className="relative">
                {showPopupMesinToMTC && (
                    <QRScannerPopup
                        onClose={() => {
                            togglePopupMesinToMTC();
                            setIsQROperatorToMTC(true);
                        }}
                        onScanSuccess={handleScanSuccessMesinToMTC}
                    />
                )}

                {showPopupNamaToMTC && (
                    <QRScannerPopup
                        onClose={() => {
                            togglePopupNamaToMTC();
                            setIsQROperatorToMTC(true);
                        }}
                        onScanSuccess={handleScanSuccessNamaToMTC}
                    />
                )}
            </div>
        </body>

    )
}

export default QROperatorBE