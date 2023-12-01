import React, { useState, useEffect } from "react";
import { db } from "./../../Firebase.js";
import Select from "react-select";

import Navbar from "../ComponentsStyle/Navbar.jsx";
import HeaderStatus from "../ComponentsStyle/HeaderStatus.jsx";

const Quality = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [IsOpenValidation, setIsOpenValidation] = useState(false);
  const [IsOpenReturn, setIsOpenReturn] = useState(false);
  const [isOpenRequestReturn, setIsOpenRequestReturn] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [isExportOption, setisExportOption] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [isButtonSearch, setisButtonSearch] = useState(true);
  const [isOpenRunValidation, setisOpenRunValidation] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [Station, setStation] = useState("");
  const [LineFirebase, setLineFirebase] = useState("");

  const [Uid, setUid] = useState("");
  const [Sid, setSid] = useState("");

  const [NamaPIC, setNamaPIC] = useState("");
  const [Desc, setDesc] = useState("");
  const [Kerusakan, setKerusakan] = useState("");

  const [Line, setLine] = useState("");

  const [Requestor, setRequestor] = useState("");

  const [Status, setStatus] = useState("");

  const [Area, setArea] = useState("");
  const [AreaFirebase, setAreaFirebase] = useState("");


  const [Department, setDepartment] = useState("");
  const [DepartTo, setDepartTo] = useState("");
  const [selectedOptionDepartment, setSelectedOptionDepartment] =
    useState(null);




  //  fungsi mengambil data dari firebase
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  // button search
  function handleToggleDatePicker() {
    setShowDatePicker(!showDatePicker);
  }

  useEffect(() => {
    // set showDatePicker ke false ketika halaman dimuat
    setShowDatePicker(false);
  }, []);

  function updateTime() {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }

  updateTime();

  useEffect(() => {
    fetch("https://andonline.astra-visteon.com:3000/api/Validation")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        // mengubah properti timestamp menjadi tanggal dan Date
        json.forEach((item) => {
          const date = new Date(item.Date);
          const day = date.getDate()
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

  const handleSubmit = (e) => {
    e.preventDefault(); // Menghentikan peristiwa pengiriman formulir

    // Lakukan pencarian dengan kata kunci yang telah dimasukkan
    const searchTermLower = searchTerm.toLowerCase();
    const filteredResults = data.filter((item) =>
      ` ${item.DepartTo} ${item.Problem} ${item.Uid} ${item.Line} ${item.Nama} ${item.ValidationName} ${item.Area} ${item.Station} ${item.Date} ${item.Requestor}  ${item.Status}`
        .toLowerCase()
        .includes(searchTermLower)
    );

    // Perbarui state dengan hasil pencarian
    setFilteredData(filteredResults);

  };




  const formatDateTimeAPI = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} / ${hours}:${minutes} WIB`;
  };



  const SubmitValidation = () => {
    if (!NamaPIC || !Desc || !Area || !Station) {
      alert("Harap isi semua kolom!");
      return;
    }

    const data = {
      NamaPIC: NamaPIC,
      Station: Station,
      Status: Status,
      Area: Area,
      Desc: Desc,
    };

    db.ref(`${AreaFirebase}/${Station}`).set("Go");
    db.ref(`StatusLine/${LineFirebase}`).set("Running");
    notificationValidation();
    alert("Validation Telah Berhasil ");
    setisOpenRunValidation(false);
    setStation(null);
    setNamaPIC(null);

    fetch(`https://andonline.astra-visteon.com:3000/api/PutValidation`, {
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


  // Return

  // QR
  const submitReturnRequest = () => {
    if (!NamaPIC | !Department || !Kerusakan || !Station || !Sid) {
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
      Sid: Sid,
    };

    alert("Return Perbaikan Telah Di Kirim Ke Team Terkait");
    notificationReturn();
    db.ref(`${AreaFirebase}/${Station}`).set(`Return ${Department}`);
    db.ref(`StatusLine/${LineFirebase}`).set("Down");
    setStation(null);
    setNamaPIC(null);

    fetch(`https://andonline.astra-visteon.com:3000/api/Repair`, {
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


  const submitUpdateReturn = () => {
    if (!NamaPIC | !Department || !Kerusakan || !Station) {
      return;
    }

    const data = {
      Station: Station,
      Status: Status,
      Area: Area,
      Department: Department,
      NamaPIC: NamaPIC,
      Kerusakan: Kerusakan,
      Uid: Uid,
    };


    console.log("Sending data:", data);

    fetch(`https://andonline.astra-visteon.com:3000/api/PutStatusReturnValidation`, {
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





  const OptionsDepartment = [
    { value: "", label: "-- Pilih Depart --" },
    { value: "PURCHASING,PPIC,MP&L", value2: "Repair", label: "PURCHASING,PPIC,MP&L" },
    { value: "PROCESS ENGINEERING", value2: "Repair", label: "PROCESS ENGINEERING" },
    { value: "PRODUCT DEVELOPMENT", value2: "Repair", label: "PRODUCT DEVELOPMENT" },
    {
      value: "ADVANCED MANUFACTURING ENGINEERING", value2: "Repair",
      label: "ADVANCED MANUFACTURING ENGINEERING",
    },
    { value: "HRGA & EHS", value2: "Repair", label: "HRGA & EHS" },
    { value: "MAINTENANCE & IT", value2: "Repair", label: "MAINTENANCE & IT" },

  ];

  const handleSelectDepartment = (selectedOptionDepartment) => {
    setSelectedOptionDepartment(selectedOptionDepartment);
    setDepartment(selectedOptionDepartment.value);
    setDepartTo(selectedOptionDepartment.value2);
  };



  const styles = {
    background: "linear-gradient(45deg, #4E86B0, #8a8b90, #0183E8)",
    height: "1000px",
  };


  const handleButtonClickValidation = () => {
    setisOpenRunValidation(false)
    setSelectedItem(false)
    setIsLoader(true);
    SubmitValidation();

    setTimeout(() => {
      window.location.reload();
    }, 3000); // 5000 milidetik sama dengan 5 detik
  };



  const handleButtonClickReturn = () => {
    setIsOpenRequestReturn(false)
    setSelectedItem(false)
    setIsLoader(true);
    submitReturnRequest();
    submitUpdateReturn();


    setTimeout(() => {
      window.location.reload();
    }, 3000); // 5000 milidetik sama dengan 5 detik
  };



  const QRResponseLink = () => {
    if (selectedItem.Area === "SMT TOP" && selectedItem.Status === "") {
      return "/QRResponseQuality";
    } else if (selectedItem.Area === "SMT BOT" && selectedItem.Status === "") {
      return "/QRResponseQuality";
    } else if (selectedItem.Area === "SMT BE" && selectedItem.Status === "") {
      return "/QRResponseQuality";
    } else if (selectedItem.Area === "SMT" && selectedItem.Status === "") {
      return "/QRResponseQuality";
    } else {
    }
  };

  useEffect(() => {
    if (Area === "SMT TOP") {
      setAreaFirebase("SMTLine1TOP");
      setLineFirebase("SMTLine1");
    } else if (Area === "SMT BOT") {
      setAreaFirebase("SMTLine1BOT");
      setLineFirebase("SMTLine1");
    } else if (Area === "SMT BE") {
      setAreaFirebase("SMTLine1BE");
      setLineFirebase("SMTLine1");
    } else if (Area === "SMT") {
      setAreaFirebase("SMTLine2");
      setLineFirebase("SMTLine2");
    }
  }, [Area]); // Efek samping ini hanya akan dipanggil ketika nilai Area berubah


  useEffect(() => {
    generateUniqueUid();
  }, [Station]);


  const generateUniqueUid = () => {
    const randomId = `RTN${Math.floor(Math.random() * 1000).toString().padStart(4, "0")}`;

    // Kirim permintaan ke API untuk memeriksa UID
    fetch("https://andonline.astra-visteon.com:3000/api/Repair")
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


  const notificationReturn = () => {
    const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
    let chatIds = [-921205810]; // Default chat id

    // Pemeriksaan jika Department adalah Maintenance
    if (Department === "MAINTENANCE & IT") {
      chatIds = [-993707437]; // Ganti chat id jika Department adalah Maintenance
    }

    const message = `!! Attention ${Line} Station Down Has Been Return !!%0A%0AReturn By ${Requestor}%0AReturn PIC : ${NamaPIC}%0AStation : ${Station}%0AUid Return : ${Uid}%0AReturn To : ${Department}%0AProblem : ${Kerusakan}`;

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


  const notificationValidation = () => {
    const botToken = "5960720527:AAFn6LH_L3iD_wGKt8FMVOnmiaKEcR0x17A";
    const chatIds = [-912913885, -950877102]; // Default chat id


    const message = `!! ${Station} ${Line} Already Running !!%0A%0AValidation By ${Requestor}%0AValidation PIC : ${NamaPIC}%0AStation : ${Station}%0ADescription : ${Desc}`;

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

  const navHref = "/PortalQuality";
  return (
    <body style={styles}>
      <Navbar navHref={navHref} />
      <HeaderStatus />



      <main>
        <section
          className="antialiased  text-gray-600 h-screen px-4"
          x-data="app"
        >
          <div className="flex flex-col mt-1 h-full">
            {isOpenSearch && (
              <>
                <div className="w-96">
                  <form onSubmit={handleSubmit}>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                      </div>
                      <input value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search [Nama/Date/Area/Line/Station]" required />
                      <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                  </form>
                </div>
              </>
            )}
            {isButtonSearch && (
              <>
                <button onClick={() => {
                  setisOpenSearch(true)
                  setisButtonSearch(false)
                }} className="h-12 w-12">
                  <svg width="90px" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.9026 15.024L12.549 24.7778L23.7885 51.763L45.6905 41.9843L34.9026 15.024Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4867 14.8989L32.7199 13.2983L15.2585 21.0013L26.0716 47.0612L46.7693 38.1578L37.4867 14.974V14.8989Z" fill="white" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M47.9735 38.583L38.2142 14.1487L32.6697 12.298L14.0543 20.4261L25.5698 48.1616L47.9735 38.583ZM36.7842 15.6993L45.54 37.6076L26.5733 45.7607L16.4878 21.4765L32.745 14.3738L36.7089 15.6993H36.7842Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.4404 13.2983L33.6984 18.0001L38.5906 15.8243L37.9634 14.4988L34.4259 16.0744L32.8203 12.6981L31.4906 13.3484L31.4404 13.2983Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3801 26.4784L24.2401 25.2279L23.1864 22.802L20.3264 24.0525L21.3801 26.4784Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2903 33.281L27.1503 32.0305L26.0966 29.5796L23.2366 30.8301L24.2903 33.281Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M27.326 40.5087L30.186 39.2582L29.1072 36.8323L26.2472 38.1578L27.326 40.5087Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.4977 22.5519C34.7772 22.1767 36.1319 22.1767 37.3863 22.5519C38.6658 22.927 39.7948 23.6523 40.6478 24.6777C41.5008 25.6781 42.0527 26.9285 42.2284 28.229C42.404 29.5295 42.1782 30.88 41.6012 32.0555C41.0241 33.2559 40.1209 34.2313 38.9669 34.9316C37.8379 35.6068 36.5082 35.957 35.2037 35.9069C33.874 35.8569 32.5945 35.4318 31.5157 34.6565C30.4369 33.8812 29.609 32.8308 29.1072 31.6053C28.5051 29.8296 28.6055 27.8789 29.4334 26.2033C30.2613 24.4776 31.7164 23.1771 33.4977 22.5519Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M42.1531 26.6534L41.3754 29.8296L49.529 31.8554L50.3319 28.6792L42.1531 26.6534Z" fill="#4C5EFD" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M47.4216 27.2787L46.1672 32.0805L47.2711 32.3806L48.5004 27.5538L47.4216 27.2787Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.6364 27.8539L41.275 25.303L39.9453 30.655L50.3067 33.206L51.6364 27.8539ZM42.1029 26.6535L41.3252 29.8297L49.4788 31.8555L50.2817 28.6793L42.1029 26.6535Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.874 21.0012C35.1033 20.5511 36.433 20.451 37.6874 20.7511C38.9669 21.0513 40.121 21.7015 40.9991 22.6519C41.9022 23.6022 42.4793 24.7777 42.7051 26.0782C42.9309 27.3536 42.7552 28.6792 42.2284 29.8796C41.7015 31.0801 40.8234 32.0804 39.7196 32.7807C38.6157 33.481 37.3362 33.8311 36.0316 33.8061C34.727 33.7811 33.4475 33.3559 32.3938 32.6307C31.315 31.8804 30.4871 30.855 30.0104 29.6295C29.6843 28.8042 29.5338 27.9289 29.5588 27.0535C29.5839 26.1782 29.7595 25.3029 30.1359 24.5026C30.5122 23.7023 31.014 22.977 31.6412 22.3768C32.2935 21.7765 33.0461 21.3013 33.874 21.0012Z" fill="#F0EDFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.5478 20.101C32.193 20.6762 31.0139 21.6516 30.2111 22.877C29.3832 24.1025 28.9567 25.553 28.9567 27.0286C28.9567 28.5042 29.4083 29.9547 30.2362 31.1802C31.0641 32.4057 32.2432 33.381 33.598 33.9312C34.9778 34.5065 36.4831 34.6565 37.9382 34.3814C39.3934 34.1063 40.7481 33.406 41.8018 32.3556C42.8555 31.3052 43.5831 29.9797 43.8841 28.5542C44.1852 27.1036 44.0598 25.6031 43.5078 24.2275C43.1315 23.3022 42.5796 22.4769 41.852 21.7516C41.1495 21.0513 40.2965 20.4761 39.3934 20.101C38.4651 19.7258 37.4867 19.5258 36.4831 19.5258C35.4545 19.5258 34.451 19.7258 33.5478 20.101ZM36.3577 21.4265H36.5082C37.6372 21.4265 38.7662 21.7516 39.6944 22.3768C40.6478 23.0021 41.3753 23.9024 41.8018 24.9528C42.2534 26.0032 42.4039 27.1787 42.1781 28.3291C41.9774 29.4545 41.4255 30.5049 40.5976 31.3302C39.7948 32.1556 38.7411 32.7308 37.6121 32.9559C36.4831 33.1809 35.304 33.0809 34.2252 32.6307C33.1464 32.1806 32.2432 31.4303 31.5909 30.4799C30.9386 29.5046 30.6125 28.3791 30.6125 27.2287C30.6125 26.0782 30.9637 24.9528 31.616 23.9774C32.2683 23.0271 33.1966 22.2768 34.2754 21.8516H34.4259C35.0531 21.6266 35.7305 21.5015 36.4079 21.4765L36.3577 21.4265ZM33.5478 20.101L33.2467 20.226L33.5478 20.101Z" fill="#2A2941" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.7019 23.102C35.4796 22.8019 36.3577 22.7269 37.1856 22.902C38.0136 23.077 38.7662 23.5022 39.3432 24.1024C39.9203 24.7027 40.3217 25.478 40.4722 26.3033C40.6227 27.1286 40.5224 27.9789 40.1962 28.7542C39.8701 29.5295 39.2931 30.1797 38.5906 30.6299C37.8881 31.0801 37.0602 31.3302 36.2072 31.3052C35.3542 31.2802 34.5263 31.0301 33.8489 30.5549C33.1464 30.0797 32.6196 29.4044 32.2934 28.6291C31.8669 27.5787 31.892 26.4033 32.3436 25.3529C32.7952 24.3525 33.6482 23.5272 34.7019 23.102Z" fill="#003366" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5513 22.752C33.6983 23.1021 32.9708 23.6774 32.4439 24.4276C31.9171 25.1779 31.6411 26.0783 31.616 26.9786C31.5909 27.904 31.8669 28.7793 32.3436 29.5546C32.8453 30.3299 33.5478 30.9301 34.4008 31.3053C35.2538 31.6804 36.1821 31.7804 37.0852 31.6304C37.9884 31.4803 38.8163 31.0552 39.4937 30.4049C40.146 29.7797 40.6227 28.9544 40.8234 28.079C41.0241 27.1787 40.9488 26.2533 40.6227 25.403C40.3969 24.8278 40.0707 24.3026 39.6442 23.8774C39.2177 23.4273 38.716 23.0771 38.1389 22.827C37.587 22.5769 36.9598 22.4519 36.3577 22.4269C35.7556 22.4269 35.1284 22.5269 34.5513 22.752ZM34.8524 23.4523C35.58 23.1772 36.3577 23.1271 37.1103 23.2772C37.863 23.4523 38.5404 23.8274 39.0672 24.3776C39.5941 24.9278 39.9453 25.6281 40.0958 26.3784C40.2213 27.1287 40.146 27.904 39.8449 28.6042C39.5439 29.3045 39.0421 29.9047 38.3898 30.3299C37.7375 30.755 36.9849 30.9551 36.2322 30.9551C35.4545 30.9551 34.727 30.705 34.0747 30.2799C33.4475 29.8547 32.9457 29.2295 32.6697 28.5292C32.2934 27.5538 32.3185 26.5034 32.745 25.5531C33.1213 24.6027 33.874 23.8524 34.8524 23.4523Z" fill="#2A2941" />
                  </svg>
                </button>
              </>
            )}
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
                <div className="font-mono text-center text-gray-800">
                  Request Validation Quality
                </div>
                <button className="flex text-sm" onClick={() => setisExportOption(true)}>
                  <img
                    className="w-[30px]"
                    src={process.env.PUBLIC_URL + "/pdf.png"}
                    alt=""
                  />
                </button>
              </header>

              <div
                className="overflow-x-auto p-3"
                style={{ height: "300px", overflowY: "scroll" }}
              >
                <table id="data-table" className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-1 w-10 lg:w-20">
                        <div className="font-sans lg:font-semibold text-left">Uid</div>
                      </th>

                      <th className="p-1 w-10 lg:w-20">
                        <div className="font-sans lg:font-semibold text-left">To</div>
                      </th>
                      <th className="p-1 w-10 lg:w-32">
                        <div className="font-sans lg:font-semibold text-left">Department</div>
                      </th>
                      <th className="p-1  w-14 lg:w-28">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-1  w-10 lg:w-24">
                        <div className="font-semibold text-left">Area</div>
                      </th>
                      <th className="p-1  w-10 lg:w-32">
                        <div className="font-semibold text-left">Station</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">Status</div>
                      </th>
                      <th className="p-1 w-24 justify-center items-center flex">
                        <div className="font-mono text-center ">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.map((item, index) => {
                      if (item.DepartTo === 'QA' || item.DepartTo === 'QC') {
                        return (
                          <tr
                            key={item.id}
                            className={item.Status === "" ? "bg-red-400" : ""}
                          >
                            <td className="p-2">
                              <div className="font-sans text-xs lg:text-sm text-gray-800">
                                {item.Uid}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="font-sans text-xs lg:text-sm text-gray-800">
                                {item.DepartTo}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="font-sans text-xs lg:text-sm text-gray-800">
                                {item.Requestor}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="font-sans text-xs lg:text-sm text-gray-800">
                                {item.Line}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="font-sans text-xs lg:text-sm text-gray-800">
                                {item.Area}
                              </div>
                            </td>
                            <td className="p-2">
                              <div className="font-sans text-gray-800">
                                {item.Station}
                              </div>
                            </td>
                            <td className="p-2 ">
                              {item.Status === "" && (
                                <button
                                  onClick={() => setSelectedItem(item)}
                                  className="bg-red-600 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300 ease-in-out"
                                >
                                  <span className="text-xs  lg:text-sm">Open</span>
                                </button>
                              )}
                              {item.Status === "Running" && (
                                <button
                                  onClick={() => setSelectedItem(item)}
                                  className="bg-green-600 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                                >
                                  <span className="text-xs lg:text-sm">Running</span>
                                </button>
                              )}

                              {item.Status === "Return" && (
                                <button
                                  onClick={() => {
                                    setSelectedItem(item);
                                    setIsOpenReturn(item);
                                  }}
                                  className="bg-orange-400 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                                >
                                  <span className="text-xs lg:text-sm">
                                    Return
                                  </span>
                                </button>
                              )}


                              {item.Status === "Validation" && (
                                <button
                                  onClick={() => setSelectedItem(item)}
                                  className="bg-blue-600 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                                >
                                  <span className="text-xs lg:text-xs">Validation</span>
                                </button>
                              )}
                            </td>
                            <td className="p-2">
                              <div className="text-center h-6 text-black...">
                                {item.Date} WIB
                              </div>
                            </td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>

                </table>
                {selectedItem && (
                  <>
                    <div className="fixed z-10 inset-0 overflow-y-auto">
                      <div className="flex items-end justify-center min-h-screen bg-slate-800 bg-opacity-75 pt-4 px-4 pb-80 text-center sm:block sm:p-0">
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
                                  <span>Request BY</span>
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
                                      Department
                                    </label>
                                    <div
                                      class="appearance-none block w-full text-green-600 bg-gray-200  border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                      type="text"
                                    >
                                      {" "}
                                      {selectedItem.Requestor}{" "}
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
                                  <div class="w-full px-3 mb-2 md:mb-0">
                                    <label
                                      class="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2"
                                      for="grid-city"
                                    >
                                      Action
                                    </label>
                                    <div
                                      class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                      type="text"
                                    >
                                      {" "}
                                      {selectedItem.Action}{" "}
                                    </div>
                                  </div>
                                </div>



                                <div className="flex justify-end">
                                  <a href={QRResponseLink()} >
                                    {selectedItem.Status === "" && (
                                      <button
                                        className="bg-green-600 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
                                        onClick={() =>
                                          setSelectedItem(false)
                                        }
                                      >
                                        Start Validation
                                      </button>
                                    )}

                                    {selectedItem.Status === "Validation" && (
                                      <div className="flex space-x-10">
                                        <div
                                          className="bg-lime-600 flex flex-col  text-white font-mono text-xs py-2 px-4 rounded mr-16"

                                        >
                                          <span >    Validation PIC : {selectedItem.ValidationName}</span>
                                          <span>    Start At : {formatDateTimeAPI(selectedItem?.ResponseValidation) || ""}</span>
                                        </div>


                                        <div>
                                          <button
                                            className="" onClick={() => {
                                              setIsOpenRequestReturn(true)
                                              setNamaPIC(selectedItem.ValidationName)
                                              setRequestor(selectedItem.DepartTo)
                                              setArea(selectedItem.Area)
                                              setSid(selectedItem.Sid)
                                              setLine(selectedItem.Line)
                                              setStation(selectedItem.Station)
                                              setStatus("Return")

                                            }}

                                          >
                                            <svg width="50px" fill="#F36B00" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" >

                                              <path d="M0 0h48v48H0z" fill="none" />
                                              <g id="Shopicon">
                                                <path d="M10,22v2c0,7.72,6.28,14,14,14s14-6.28,14-14s-6.28-14-14-14h-4V4l-8,8l8,8v-6h4c5.514,0,10,4.486,10,10s-4.486,10-10,10
		s-10-4.486-10-10v-2H10z"/>
                                              </g>
                                            </svg>
                                          </button>
                                        </div>

                                        <div>
                                          <button
                                            className="" onClick={() => {
                                              setisOpenRunValidation(true)
                                              setNamaPIC(selectedItem.ValidationName)
                                              setRequestor(selectedItem.DepartTo)
                                              setArea(selectedItem.Area)
                                              setSid(selectedItem.Sid)
                                              setLine(selectedItem.Line)
                                              setStation(selectedItem.Station)
                                              setStatus("Running")

                                            }}

                                          >
                                            <svg width="50px" viewBox="0 0 64 64" fill="#0074ff" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><path class="cls-1" d="M24.64,52.06a5.55,5.55,0,0,1-3.94-1.63L6.43,36.16a5.57,5.57,0,0,1,0-7.87,5.58,5.58,0,0,1,7.88,0L24.64,38.62l1.85-1.85a2,2,0,1,1,2.83,2.83l-3.26,3.26a2,2,0,0,1-2.83,0L11.48,31.11a1.57,1.57,0,0,0-2.22,2.22L23.53,47.6a1.59,1.59,0,0,0,2.22,0l29-29a1.57,1.57,0,0,0-2.22-2.21L36.63,32.29a2,2,0,0,1-2.83-2.83L49.69,13.57a5.57,5.57,0,0,1,7.88,7.87l-29,29A5.54,5.54,0,0,1,24.64,52.06Z" /></svg>
                                          </button>
                                        </div>
                                      </div >

                                    )}

                                    {selectedItem.Status === "." && (
                                      <div
                                        className="bg-slate-900 flex flex-col  text-white font-mono text-xs py-2 px-4 rounded mr-2"

                                      >
                                        <span >    Validation PIC : {selectedItem.ResponseName}</span>
                                        <span>    Start At : {formatDateTimeAPI(selectedItem?.ResponseTime) || ""}</span>
                                        <span>    Done At : {formatDateTimeAPI(selectedItem?.ResponseDone) || ""}</span>
                                        <span>    Depart To : {selectedItem.DepartTo}</span>
                                      </div>

                                    )}
                                    {selectedItem.Status === "Running" && (
                                      <div className="flex space-x-32">
                                        <button
                                          className="bg-green-700  text-white font-bold py-2 px-4 rounded mr-2"
                                          onClick={() => {
                                            setIsOpenValidation(true);
                                          }}
                                        >
                                          Validation By
                                        </button>
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
                    {IsOpenValidation && (
                      <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                          <div className="flex items-end justify-center min-h-screen bg-slate-800 bg-opacity-75 pt-4 px-4 pb-[450px] text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            <div
                              className="inline-block align-bottom bg-green-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="modal-headline"
                            >
                              <div className="bg-green-700 px-4 pt-1 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  {/* Close button */}
                                  <button
                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                    onClick={() =>
                                      setIsOpenValidation(false)
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
                                      <span>Validation BY</span>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 ">
                                      <div class="w-full  px-3 mb-3 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Nama PIC
                                        </label>
                                        <div
                                          class="appearance-none block w-full  bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {selectedItem.ValidationName}{" "}
                                        </div>
                                      </div>




                                      <div class="w-full px-3 mb-2 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide  text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Request At
                                        </label>
                                        <div
                                          class="appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {selectedItem.Date} WIB
                                        </div>
                                      </div>


                                      <div className="flex space-x-6">
                                        <div class="w-full px-3 mb-2 md:mb-0">
                                          <label
                                            class="block uppercase tracking-wide  text-black text-xs font-bold mb-2"
                                            for="grid-city"
                                          >
                                            Response at
                                          </label>
                                          <div
                                            class="appearance-none block w-52 bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            type="text"
                                          >
                                            {" "}
                                            {formatDateTimeAPI(selectedItem?.ResponseValidation) || ""}
                                          </div>
                                        </div>
                                        <div class="w-full px-3 mb-2 md:mb-0">
                                          <label
                                            class="block uppercase tracking-wide  text-black text-xs font-bold mb-2"
                                            for="grid-city"
                                          >
                                            Validation At
                                          </label>
                                          <div
                                            class="appearance-none block w-52 bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                            type="text"
                                          >
                                            {" "}
                                            {formatDateTimeAPI(selectedItem?.ValidationDate) || ""}
                                          </div>
                                        </div>
                                      </div>
                                      <div class="w-full px-3 mb-2 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide  text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Validation Description
                                        </label>
                                        <div
                                          class="appearance-none block w-full bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {selectedItem.ValidationDescription}
                                        </div>
                                      </div>
                                      <div class="w-full px-3 mb-2 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide  text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Total DownTime
                                        </label>
                                        <div
                                          className="appearance-none block w-full text-center font-semibold bg-black text-red-600 border-yellow-500 border-2 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        >
                                          {" "}
                                          {selectedItem.DownTime}
                                        </div>
                                      </div>
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

                    {IsOpenReturn && (
                      <>
                        <div className="fixed z-10 inset-0 overflow-y-auto">
                          <div className="flex items-end justify-center min-h-screen bg-slate-800 bg-opacity-75 pt-4 px-4 pb-[750px] text-center sm:block sm:p-0">
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            <div
                              className="inline-block align-bottom bg-green-700 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                              role="dialog"
                              aria-modal="true"
                              aria-labelledby="modal-headline"
                            >
                              <div className="bg-orange-800 px-4 pt-1 pb-4 w-[500px]  lg:w-full sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                  {/* Close button */}
                                  <button
                                    className="absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-600"
                                    onClick={() => {

                                      setIsOpenReturn(false)
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
                                  <div className="w-full max-w-lg">
                                    <div className="justify-center mb-3 items-center flex font-bold uppercase text-black ">
                                      <span>Return To </span>
                                    </div>
                                    <div class="flex flex-wrap w-full -mx-3 ">
                                      <div class="w-full  px-3 mb-3 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide w-full text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Department
                                        </label>
                                        <div
                                          class="appearance-none block w-full  bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {selectedItem.ReturnDepartment}{" "}
                                        </div>
                                      </div>
                                      <div class="w-full  px-3 mb-3 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide w-full text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Return At
                                        </label>
                                        <div
                                          class="appearance-none block w-full  bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {formatDateTimeAPI(selectedItem?.ValidationDate) || ""}
                                        </div>
                                      </div>
                                      <div class="w-full  px-3 mb-3 md:mb-0">
                                        <label
                                          class="block uppercase tracking-wide w-full text-black text-xs font-bold mb-2"
                                          for="grid-city"
                                        >
                                          Return Problem
                                        </label>
                                        <div
                                          class="appearance-none block w-full  bg-gray-200 text-black border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                          type="text"
                                        >
                                          {" "}
                                          {selectedItem.ValidationDescription}{" "}
                                        </div>
                                      </div>


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

                  </>
                )}

              </div>
            </div>
          </div>
        </section>

        <td class="">
          {isOpenRunValidation ? (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-96 text-center sm:block sm:p-0">
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
                            setisOpenRunValidation(false)
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
                            <span>Validation</span>
                          </div>
                          <div class="flex flex-wrap -mx-3 ">
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
                              Validation Description
                            </label>
                            <input
                              class="appearance-none block w-full  text-gray-700 border bg-white border-b-slate-900 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-password"
                              type="text"
                              placeholder=""
                              name="Desc"
                              onChange={(e) => {
                                setDesc(e.target.value);
                              }}
                              required
                            />
                          </div>


                          <div className="flex justify-end">

                            <button
                              class="text-white bg-emerald-600 ml-2 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                              type="button" // Change to type="button" to prevent form submission
                              onClick={handleButtonClickValidation}

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

        <td class="">
          {isOpenRequestReturn ? (
            <>
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-2 px-4 pb-80 text-center sm:block sm:p-0">
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
                            setIsOpenRequestReturn(false)
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
                            <span>Return Repair</span>
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
                                required
                                placeholder="Pilih Department"
                                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
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
                              Return Problem
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


                          <div className="flex justify-end">

                            <button
                              class="text-white bg-emerald-600 ml-2 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg hover:text-gray-900 text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                              type="button" // Change to type="button" to prevent form submission
                              onClick={handleButtonClickReturn}

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

      </main>

      <td class="">
        {isExportOption ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-96 text-center sm:block sm:p-0">
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
                      <div className="flex justify-end">
                        <button
                          onClick={() => setisExportOption(false)}
                          className="absolute top-0 right-0 mt-2 mr-2"
                        >
                          <svg
                            className="h-6 w-6 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
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
                        </button>
                      </div>

                      <div className="w-full h-60 max-w-lg">
                        <div className="justify-center mb-20 items-center flex font-bold uppercase text-black">
                          <span>Pilih</span>
                        </div>

                        <div className="flex justify-center">
                          <a href="/ReportReq">
                            <button

                              className="bg-lime-600 w-28 h-16 hover:bg-lime-700  text-white font-bold py-2 px-4  rounded mr-2"
                            >
                              REQ
                            </button>
                          </a>
                          <a href="ReportRtn">
                            <button

                              className="bg-yellow-400 w-28 h-16 hover:bg-yellow-400 text-white font-bold py-2 px-4 ml-16 rounded"
                            >
                              RTN
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </td>
    </body>
  );
};

export default Quality;
