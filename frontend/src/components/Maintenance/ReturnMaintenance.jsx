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

const ReturnMaintenance = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showDatePicker, setShowDatePicker] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(null);
  const [Station, setStation] = useState("");
  const [NamaPIC, setNamaPIC] = useState("");
  const [Kerusakan, setKerusakan] = useState("");
  const [Action, setAction] = useState("");
  const [Line, setLine] = useState("");
  const [isOpenRequestValidation, setisOpenRequestValidation] = useState(false);
  const [Requestor, setRequestor] = useState("");
 const [Department, setDepartment] = useState("");
 const [DepartTo, setDepartTo] = useState("");
  const [StatusLine, setStatusLine] = useState("");
  const [Status, setStatus] = useState("Solved");
  const [Uid, setUid] = useState("");
  const [Area, setArea] = useState("");
  const [AreaFirebase, setAreaFirebase] = useState("");
  const [isLoader, setIsLoader] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [isButtonSearch, setisButtonSearch] = useState(true);
  const [isExportOption, setisExportOption] = useState(false);

  const [selectedOptionDepartment, setSelectedOptionDepartment] =
    useState(null);


    useEffect(() => {
      if (Area === "SMT TOP") {
        setAreaFirebase("TOP");
      } else if (Area === "SMT BOT") {
        setAreaFirebase("BOT");
      } else if (Area === "SMT BE") {
        setAreaFirebase("BE");
      }
    }, [Area]); 
  

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
  const exportToPDFRequest = () => {
    const doc = new jsPDF("landscape");
    const tableData = [];
    
    // Header untuk tabel PDF
    const headers = ["Uid", "Requestor", "Request at", "Requestor PIC", "Line", "Area", "Station", "Problem"];
    
    // Warna teks header (abu-abu)
    const headerStyles = {
      fillColor: [192, 192, 192], // Warna abu-abu dalam format RGB
      textColor: 0, // Warna teks hitam (0)
      fontStyle: "bold", // Teks header tebal
    };
  
    // Mengisi data tabel PDF dengan properti yang Anda inginkan
    filteredData.forEach((item) => {
      const rowData = [
        item.Uid,
        item.Requestor,
        item.Date,
        item.Nama,
        item.Line,
        item.Area,
        item.Station,
        item.Problem,
      ];
      tableData.push(rowData);
    });
  
    // Menambahkan logo perusahaan ke file PDF
    const logoImg = new Image();
    logoImg.src = process.env.PUBLIC_URL + "/avi.png";
    
    // Mengukur logo sesuai dengan yang Anda inginkan
    const logoWidth = 50; // Lebar logo
    const logoHeight = (logoWidth / logoImg.width) * logoImg.height; // Menghitung tinggi logo sesuai dengan lebar yang diinginkan
    
    doc.addImage(logoImg, "JPEG", 10, 10, logoWidth, logoHeight); // Tambahkan logo pada koordinat (10, 10) dengan ukuran yang sesuai
    
    // Menambahkan teks di atas tabel dan di tengah-tengah
    const pageWidth = doc.internal.pageSize.getWidth(); // Lebar halaman PDF
    const text = "Return Request Repairment Maintenance [Andon Data]";
    const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor; // Lebar teks
    
    const textX = (pageWidth - textWidth) / 2; // Pusat teks secara horizontal
    const textY = 10 + logoHeight + 10; // Atas tabel dan tambahkan jarak 20 satuan
    
    doc.text(text, textX, textY);
    
    const fontSize = 6; 
    // Membuat tabel PDF dengan menggunakan autotable
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: textY + 10, // Mulai tabel setelah teks dan tambahkan jarak 10
      headStyles: {
        fillColor: [192, 192, 192], // Warna abu-abu dalam format RGB
        textColor: 0, // Warna teks hitam (0)
        fontStyle: fontSize, // Teks header tebal
      },
      columnStyles: {
        1: { // Indeks 4 adalah kolom "Date"
          textColor: [159, 0, 0], // Warna teks merah dalam format RGB
        },
      },
     
    });
  
  
    // Menyimpan file PDF
    doc.save(`Return Request Repairment Maintenance [Andon Data].pdf`);
  };

    //  fungsi export to pdf
    const exportToPDFRepair = () => {
      const doc = new jsPDF("landscape");
      const tableData = [];
      
      // Header untuk tabel PDF
      const headers = ["Uid", "Requestor", "Request at", "Repair PIC", "Line", "Area", "Station", "Status", "Problem",  "Repair Start", "Forward To", "Forward at"];
      
      // Warna teks header (abu-abu)
      const headerStyles = {
        fillColor: [192, 192, 192], // Warna abu-abu dalam format RGB
        textColor: 0, // Warna teks hitam (0)
        fontStyle: "bold", // Teks header tebal
      };
    
      // Mengisi data tabel PDF dengan properti yang Anda inginkan
      filteredData.forEach((item )  => {
        const Requestat = `${item.Date} WIB`;
        const rowData = [
          item.Uid,
          item.Requestor,
          Requestat,
          item.ResponseName,
          item.Line,
          item.Area,
          item.Station,
          item.Status,
          item.Problem,
          formatDateTimeAPI(item.ResponseTime),
          item.DepartTo,
          formatDateTimeAPI(item.ResponseDone),
        ];
        tableData.push(rowData);
      });
    
      // Menambahkan logo perusahaan ke file PDF
      const logoImg = new Image();
      logoImg.src = process.env.PUBLIC_URL + "/avi.png";
      
      // Mengukur logo sesuai dengan yang Anda inginkan
      const logoWidth = 50; // Lebar logo
      const logoHeight = (logoWidth / logoImg.width) * logoImg.height; // Menghitung tinggi logo sesuai dengan lebar yang diinginkan
      
      doc.addImage(logoImg, "JPEG", 10, 10, logoWidth, logoHeight); // Tambahkan logo pada koordinat (10, 10) dengan ukuran yang sesuai
      
      // Menambahkan teks di atas tabel dan di tengah-tengah
      const pageWidth = doc.internal.pageSize.getWidth(); // Lebar halaman PDF
      const text = "Return Repairment PIC Maintenance [Andon Data]";
      const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor; // Lebar teks
      
      const textX = (pageWidth - textWidth) / 2; // Pusat teks secara horizontal
      const textY = 10 + logoHeight + 10; // Atas tabel dan tambahkan jarak 20 satuan
      
      doc.text(text, textX, textY);

      const fontSize = 8; // Atur ukuran font yang diinginkan
      const scaleFactor = 2;
      // Membuat tabel PDF dengan menggunakan autotable
      doc.autoTable({
        head: [headers],
        body: tableData,
        startY: textY + 10, // Mulai tabel setelah teks dan tambahkan jarak 10
        headStyles: {
          fillColor: [192, 192, 192], // Warna abu-abu dalam format RGB
          textColor: 0, // Warna teks hitam (0)
          fontStyle: fontSize, // Teks header tebal
        },
        columnStyles: {
          10: { // Indeks 4 adalah kolom "Date"
            textColor: [5, 150, 27], // Warna teks merah dalam format RGB
          },
          1: { // Indeks 4 adalah kolom "Date"
            textColor: [159, 0, 0], // Warna teks merah dalam format RGB
          },
        },
        styles: {
          fontSize: fontSize, // Atur ukuran font
        },
      });
      
    
    
      // Menyimpan file PDF
      doc.save(`Return Repairment PIC Maintenance [Andon Data].pdf`);
    };


  //  fungsi mengambil data dari firebase

  function updateTime() {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }

  updateTime();

  useEffect(() => {
    fetch("http://192.168.101.12:3001/api/ReturnRepair")
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

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Menghentikan peristiwa pengiriman formulir

    // Lakukan pencarian dengan kata kunci yang telah dimasukkan
    const searchTermLower = searchTerm.toLowerCase();
    const filteredResults = data.filter((item) =>
      ` ${item.DepartTo} ${item.Uid} ${item.Line} ${item.Nama}  ${item.Area} ${item.Station} ${item.Date} ${item.Requestor} ${item.Problem} ${item.Status}`
        .toLowerCase()
        .includes(searchTermLower)
    );

    // Perbarui state dengan hasil pencarian
    setFilteredData(filteredResults);

  };


 // QR
 const submitRequestValidation = () => {
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
    AreaFirebase: AreaFirebase,
    Uid: Uid,
  };

  alert("Laporan Telah Berhasil Di Kirim Ke Team Validation ");

  firebase.database().ref(`SMTLine1${AreaFirebase}/${Station}`).set(`Return ${Department}`);
  firebase.database().ref("StatusLine/SMTLine1").set("Down");
  setStation(null);
  setNamaPIC(null);

  fetch(`http://192.168.101.12:3001/api/ReturnValidation`, {
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

  fetch(`http://192.168.101.12:3001/api/PutReturnRepairDone`, {
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
    background: "linear-gradient(45deg, #95754B, #8a8b90, #CC7722)",
    height: "1000px",
  };


  const OptionsDepartment = [
    { value: "", label: "-- Pilih Depart --" },
    { value: "QC", value2: "Validation", label: "QC" },
    { value: "QA", value2: "Validation", label: "QA" },
    { value: "Production Leader", value2: "Validation", label: "Production Leader" },
    { value: "Sub Leader", value2: "Validation", label: "Sub Leader" },
  ];

  const handleSelectDepartment = (selectedOptionDepartment) => {
    setSelectedOptionDepartment(selectedOptionDepartment);
    setDepartment(selectedOptionDepartment.value);
    setDepartTo(selectedOptionDepartment.value2);
  };



  const handleButtonClick = () => {
    submitUpdate();
    submitRequestValidation();
    setisOpenRequestValidation(false)
    setSelectedItem(false)
    setIsLoader(true);

    setTimeout(() => {
      window.location.reload();
    }, 3000); // 5000 milidetik sama dengan 5 detik
  };

  const QRResponseLink = () => {
    if (selectedItem.Area === "SMT TOP" && selectedItem.Status === "") {
      return "/QRReturnResponseRepairTopMTC";
    } else if (selectedItem.Area === "SMT BOT" && selectedItem.Status === "") {
      return "/QRReturnResponseRepairBotMTC";
    } else if (selectedItem.Area === "SMT BE" && selectedItem.Status === "") {
      return "/QRReturnResponseRepairBeMTC";
    }else {
    }
  };

  
  return (
    <body style={styles}>
      <nav class="bg-slate px-3 sm:px-4   dark:bg-gray-900 bg-gray-900 w-full z-20 top-0 left-0  dark:border-gray-600">
        <div class="flex h-14 items-center justify-between">
          <div class="flex items-center">
            <a href="/PortalMaintenance">
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
              <h1 class="text-xs lg:text-xl font-sans tracking-tight text-gray-900">
                | Return Request Maintenance |
              </h1>
               <h1 class="text-xs lg:text-xl  font-sans tracking-tight ml-4">
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

              <h1 class="text-xs lg:text-xl  font-sans tracking-tight ml-4">
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
                <div className="font-mono text-lg text-center text-gray-800">
                 Return Request Maintenance
                </div>
                <button className="flex text-sm" onClick={() => { setisExportOption(true) }}>
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
                    <th className="p-1 w-10 lg:w-32">
                        <div className="font-sans lg:font-semibold text-left">Uid</div>
                      </th>
                      <th className="p-1 w-10 lg:w-32">
                        <div className="font-sans lg:font-semibold text-left">Requestor</div>
                      </th>
                      <th className="p-1  w-20 lg:w-28">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-1  w-20 lg:w-24">
                        <div className="font-semibold text-left">Area</div>
                      </th>
                      <th className="p-1  w-32 lg:w-40">
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
                      if (item.Department === "MAINTENANCE & IT") {
                        return (
                          <tr
                          key={item.id}
                          className={item.Status === "Repair" ? "bg-yellow-400" : item.Status === "" ? "bg-red-400" : ""}
                        >
                         <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {item.Uid}
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
                          {item.Status === "Solved" && (
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="bg-green-600 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                            >
                              <span className="text-xs lg:text-sm">Solved</span>
                            </button>
                          )}
                          {item.Status === "Repair" && (
                            <button
                              onClick={() => setSelectedItem(item)}
                              className="bg-yellow-500 w-16 flex items-center justify-center rounded-md px-4 py-2 text-white  focus:outline-none  transition duration-300 ease-in-out"
                            >
                              <span className="text-xs lg:text-sm">Repair</span>
                            </button>
                          )}
                        </td>
                        {/* <td className="p-5 w-40">
                          <button className="bg-blue-500 flex items-center justify-center rounded-md px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:bg-red-600 transition duration-300 ease-in-out">
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
                        );
                      }
                      return null;
                    })}
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
                                            setisOpenRequestValidation(true)
                                            setNamaPIC(selectedItem.ResponseName)
                                            setUid(selectedItem.Uid)            
                                            setRequestor(selectedItem.Department + ' [Return]');
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
        {isOpenRequestValidation ? (
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
                                  setisOpenRequestValidation(false)
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
                          <span>Request Return Validation {Uid}</span>
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
                        <button
                            onClick={exportToPDFRequest}
                            className="bg-blue-900 w-28 h-16 hover:bg-blue-700  text-white font-bold py-2 px-4  rounded mr-2"
                          >
                            Request
                          </button>
                          <button
                            onClick={exportToPDFRepair}
                            className="bg-yellow-400 w-28 h-16 hover:bg-yellow-400 text-white font-bold py-2 px-4 ml-16 rounded"
                          >
                            Repair
                          </button>
                         
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
      </main>
    </body>
  );
};

export default ReturnMaintenance;
