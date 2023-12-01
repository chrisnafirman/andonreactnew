import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { db } from "./../../Firebase.js";
import * as ExcelJS from 'exceljs';
import Navbar from "../ComponentsStyle/Navbar.jsx";
import HeaderStatus from "../ComponentsStyle/HeaderStatus.jsx";



const ReuestLeader = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpenDepartTo, setisOpenDepartTo] = useState(false);
  const [isOpenSearch, setisOpenSearch] = useState(false);
  const [isButtonSearch, setisButtonSearch] = useState(true);
  const [validationData, setValidationData] = useState([]);
  const [repairData, setRepairData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  // button search


 

  //  fungsi export to pdf
  const exportToPDF = () => {
    const doc = new jsPDF("landscape");
    const tableData = [];

    // Header untuk tabel PDF
    const headers = ["Sid", "Uid", "Start Downtime", "Request PIC", "Line", "Station", "Repair PIC", "Problem", "Action", "Start Repair", "End Repair", "Validation", "Validation PIC", "Start Validation", "End Validation", "Station Status", "Description", "Total Downtime", "Return To", "Return Id"];


    // Mengisi data tabel PDF dengan properti yang Anda inginkan
    filteredData.forEach((item) => {
      const rowData = [
        item.Sid,
        item.Uid,
        formatDateTimeAPI(item.Downtime),
        item.RequestorName,
        item.Line,
        item.Station,
        item.RepairBy,
        item.ProblemDesc,
        item.ActionDesc,
        formatDateTimeAPI(item.StartRepair),
        formatDateTimeAPI(item.DoneRepair),
        item.DepartTo,
        item.ValidationBy,
        formatDateTimeAPI(item.StartValidation),
        formatDateTimeAPI(item.ValidationAt),
        item.ValidationStatus,
        item.Description,
        item.TotalDowntime,
        item.ReturnTo,
        item.ReturnId,
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
    // ...
    const text = "Report Case Maintenance [INC]";
    const textWidth = doc.getStringUnitWidth(text) * doc.internal.getFontSize() / doc.internal.scaleFactor; // Lebar teks

    const textX = (pageWidth - textWidth) / 2; // Pusat teks secara horizontal
    const textY = 10 + logoHeight + 10; // Atas tabel dan tambahkan jarak 20 satuan

    doc.text(text, textX, textY);

    // Tambahkan teks "Operator - Maintenance - Validation" di bawah teks utama dengan ukuran font yang lebih kecil
    const subText = "Noted : Operator -> Maintenance -> Validation";
    const subTextWidth = textWidth / 2; // Setengah dari lebar teks utama
    const subTextX = textX; // Sejajar dengan teks utama
    const subTextY = textY + 8; // Tambahkan jarak 10 satuan dari teks utama
    doc.setTextColor(128, 128, 128);
    doc.setFontSize(8); // Atur ukuran font yang lebih kecil
    doc.text(subText, subTextX, subTextY);

    const fontSize = 5; // Atur ukuran font yang diinginkan
    const scaleFactor = 2;
    // Membuat tabel PDF dengan menggunakan autotable
    doc.autoTable({
      head: [headers],
      body: tableData,
      startY: subTextY + 10, // Mulai tabel setelah teks sub
      headStyles: {
        fillColor: [48, 151, 255],
        textColor: 0, // Warna teks hitam (0)
        fontStyle: fontSize, // Teks header tebal
      },
      columnStyles: {
        15: { // Indeks 15 adalah kolom "Validation Status"
          fontSize: 5,
          fontStyle: 'bold', // Mengatur teks tebal (bold)
        },
      },
      styles: {
        fontSize: fontSize, // Atur ukuran font
      },
    });



    // Menyimpan file PDF
    doc.save(`Report Case Maintenance [INC].pdf`);
  };




  const exportToExcel = () => {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Data');

    const headers = ["Sid", "Uid", "Start Downtime", "Request PIC", "Line", "Station", "Repair PIC", "Problem", "Action", "Start Repair", "End Repair", "Validation", "Validation PIC", "Start Validation", "End Validation", "Station Status", "Description", "Total Downtime", "Return To", "Return Id"];

    worksheet.addRow(headers);

    filteredData.forEach((item) => {
      const rowData = [
        item.Sid,
        item.Uid,
        formatDateTimeAPI(item.Downtime),
        item.RequestorName,
        item.Line,
        item.Station,
        item.RepairBy,
        item.ProblemDesc,
        item.ActionDesc,
        formatDateTimeAPI(item.StartRepair),
        formatDateTimeAPI(item.DoneRepair),
        item.DepartTo,
        item.ValidationBy,
        formatDateTimeAPI(item.StartValidation),
        formatDateTimeAPI(item.ValidationAt),
        item.ValidationStatus,
        item.Description,
        item.TotalDowntime,
        item.ReturnTo,
        item.ReturnId,
      ];
      worksheet.addRow(rowData);
    });

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      const url = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'Report Case Maintenance [INC].xlsx';

      a.click();

      window.URL.revokeObjectURL(url);
    });
  };




  //  fungsi mengambil data dari firebase

  function updateTime() {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  }

  updateTime();






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


  const handleSearch = (e) => {
    e.preventDefault(); // Prevent form submission

    // Split the search input into individual Uids
    const searchTerms = searchTerm.split(',').map((term) => term.trim());

    // Filter the data to find items that match any of the Uids or date/time
    const filteredResults = filteredData.filter((item) =>
      searchTerms.some((searchTerm) =>
        item.Sid.toLowerCase().includes(searchTerm.toLowerCase()) || item.Uid.toLowerCase().includes(searchTerm.toLowerCase()) ||
        formatDateTimeAPI(item.Downtime).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    // Update the state with the filtered results
    setFilteredData(filteredResults);
  };






  useEffect(() => {
    fetch("https://andonline.astra-visteon.com:3000/api/Validation")
      .then((response) => response.json())
      .then((json) => {
        // Lakukan pengolahan data Validation jika diperlukan
        json.forEach((item) => {
          item.DoneRepair = item.Date;
          item.ProblemDesc = item.Problem;
          item.ActionDesc = item.Action;
          item.ValidationBy = item.ValidationName;
          item.ValidationAt = item.ValidationDate;
          item.TotalDowntime = item.DownTime;
          item.ValidationStatus = item.Status;
          item.ReturnTo = item.ReturnDepartment;
          item.ReturnId = item.UidReturn;
          item.Description = item.ValidationDescription;
          item.StartValidation = item.ResponseValidation;
        });
        setValidationData(json);
      });

    fetch("https://andonline.astra-visteon.com:3000/api/Repair")
      .then((response) => response.json())
      .then((json) => {
        // Lakukan pengolahan data Repair jika diperlukan
        json.forEach((item) => {
          item.Line = item.Line
          item.Station = item.Station
          item.Uid = item.Uid
          item.Sid = item.Sid
          item.Downtime = item.Date;
          item.RepairBy = item.ResponseName;
          item.RequestorName = item.Nama;
          item.StartRepair = item.ResponseTime;
          item.DepartTo = item.DepartTo;

        });
        setRepairData(json);
      });
  }, []);

  useEffect(() => {


    // Menyaring data Validation yang memiliki Uid dengan nilai "INC"
    const filteredValidationData = validationData.filter((validationItem) =>
      validationItem.Uid.includes("INC")
    );

    // Menyaring data Repair yang memiliki Uid dengan nilai "INC"
    const filteredRepairData = repairData.filter((repairItem) =>
      repairItem.Uid.includes("INC")
    );

    // Menggabungkan data Validation dan Repair berdasarkan Uid
    const mergedData = filteredValidationData.map((validationItem) => {
      const matchingRepairItem = filteredRepairData.find(
        (repairItem) => repairItem.Uid === validationItem.Uid
      );

      if (matchingRepairItem) {
        // Jika ada data Repair yang cocok dengan Uid, gabungkan kedua data
        return {
          Uid: matchingRepairItem.Uid,
          Sid: matchingRepairItem.Sid,
          Downtime: matchingRepairItem.Downtime,
          RequestorName: matchingRepairItem.RequestorName,
          StartRepair: matchingRepairItem.StartRepair,
          RepairBy: matchingRepairItem.RepairBy,
          Line: matchingRepairItem.Line,
          Station: matchingRepairItem.Station,
          DepartTo: matchingRepairItem.DepartTo,

          DoneRepair: validationItem.DoneRepair,
          ProblemDesc: validationItem.ProblemDesc,
          ActionDesc: validationItem.ActionDesc,
          ValidationBy: validationItem.ValidationBy,
          ValidationAt: validationItem.ValidationAt,
          TotalDowntime: validationItem.TotalDowntime,
          ValidationStatus: validationItem.ValidationStatus,
          Description: validationItem.Description,
          ReturnTo: validationItem.ReturnTo,
          ReturnId: validationItem.ReturnId,
          StartValidation: validationItem.StartValidation,

        };
      } else {
        // Kasus ketika tidak ada cocok
        return {};
      }
    });

    setFilteredData(mergedData);
    mergedData.sort((a, b) => Date.parse(b.Downtime) - Date.parse(a.Downtime));
  }, [validationData, repairData]);




  
  


  const styles = {
    background: "linear-gradient(45deg, #000, #8a8b90, #5D6D7E )",
    height: "1000px",
  };

  return (
    <body style={styles}>
      <Navbar   />
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
                  <form onSubmit={handleSearch}>
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
            <div className="w-full max-w-4xl mt-24 lg:mt-2 mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">

              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-mono text-lg text-center text-gray-800">
                  REPORT INCIDENT
                </div>
                <div className="flex space-x-2">
                  <button className="flex text-sm" onClick={exportToPDF}>
                    <img
                      className="w-[30px]"
                      src={process.env.PUBLIC_URL + "/pdf.png"}
                      alt=""
                    />
                  </button>
                  <button className="flex text-sm" onClick={exportToExcel}>
                    <img
                      className="w-[35px]"
                      src={process.env.PUBLIC_URL + "/excel.png"}
                      alt=""
                    />
                  </button>
                </div>
              </header>

              <div
                className="overflow-x-auto p-3"
                style={{ height: "300px", overflowY: "scroll" }}
              >
                <table id="data-table" className="table-auto w-full">
                  <thead className="text-xs font-mono uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-1 min-w-[80px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Sid</div>
                      </th>
                      <th className="p-1 min-w-[80px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Uid</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Start Downtime</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Requestor</div>
                      </th>
                      <th className="p-1 min-w-[120px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Line</div>
                      </th>
                      <th className="p-1 min-w-[120px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Station</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Start Repair</div>
                      </th>
                      <th className="p-1 min-w-[200px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Repair By</div>
                      </th>
                      <th className="p-1 min-w-[200px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Problem</div>
                      </th>
                      <th className="p-1 min-w-[200px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Action</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Repair Done</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Validation By</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Start Validation</div>
                      </th>
                      <th className="p-1 min-w-[180px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Validation At</div>
                      </th>
                      <th className="p-1 min-w-[140px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Validation Status</div>
                      </th>
                      <th className="p-1 min-w-[200px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Description</div>
                      </th>
                      <th className="p-1 min-w-[250px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Total Downtime</div>
                      </th>
                      <th className="p-1 min-w-[200px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Return To</div>
                      </th>
                      <th className="p-1 min-w-[140px] whitespace-no-wrap overflow-x-auto">
                        <div className="text-center flex">Return ID</div>
                      </th>

                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.map((item) => (
                      <tr
                        key={item.id}
                      >
                        <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {item.Sid}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {item.Uid}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {formatDateTimeAPI(item.Downtime)}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {item.RequestorName}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-xs lg:text-sm text-gray-800">
                            {item.Line}
                          </div>
                        </td>

                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.Station}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {formatDateTimeAPI(item.StartRepair)}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.RepairBy}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ProblemDesc}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ActionDesc}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {formatDateTimeAPI(item.DoneRepair)}
                          </div>
                        </td>

                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ValidationBy}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {formatDateTimeAPI(item.StartValidation)}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {formatDateTimeAPI(item.ValidationAt)}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ValidationStatus}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.Description}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.TotalDowntime}
                          </div>
                        </td>

                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ReturnTo}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-sans text-gray-800">
                            {item.ReturnId}
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

export default ReuestLeader;
