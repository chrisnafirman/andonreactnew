import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";


const ReturnPurchasing = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

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
    fetch("http://192.168.101.236:3001/api/get/ReturnPURCHASING")
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
            .padStart(2, "0")}-${year} / ${hours.toString().padStart(2, "0")}:${minutes
            .toString()
            .padStart(2, "0")}`;
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
    fetch(`http://192.168.101.236:3001/api/get/ReturnPURCHASING?date=${selectedDate}`)
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
    const filteredData = data.filter((item) => item.waktu.includes(formattedDate));
    filteredData.sort((a, b) => Date.parse(b.waktu) - Date.parse(a.waktu));
    setFilteredData(filteredData);
  };
  
  

  return (
    <body className="h-full w-full bg-stone-400">
      <nav class="bg-gray-100 px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full sticky z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/PURCHASING" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              PURCHASING
            </span>
          </a>

          <div class="flex md:order-2">
            <a href="/PURCHASING">
            <button
              className="text-white md:inline-block hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              
              aria-controls="drawer-navigation"
            >
              Back
            </button>

            </a>

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              onClick={toggleDrawer}
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <sidebar>
        <div
          id="drawer-navigation"
          className={`fixed top-0 left-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform ${
            showDrawer ? "" : "-translate-x-full"
          } bg-gray-100  dark:bg-gray-100 `}
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
                  href="/PURCHASING"
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
                  <span class="ml-3 text-gray-500">Realtime Dashboard</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </sidebar>

      <main>
        <section
          className="antialiased  text-gray-600 h-screen px-4"
          x-data="app"
        >
          <div className="flex flex-col mt-1 h-full">
            <form onSubmit={handleSubmit}>
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
            {/* <!-- Table --> */}
             <div className="w-full max-w-4xl mt-1 mx-auto bg-white shadow-lg rounded-2xl border border-gray-200">
              <button className="flex" onClick={exportToPDF}>
                Export To:
                <img
                  className="w-[25px]"
                  src={process.env.PUBLIC_URL + "/pdf.png"}
                  alt=""
                />
              </button>
              <header className="px-5 py-4 border-b border-gray-100">
                <div className="font-semibold text-center text-gray-800">
                  Retrun From Quality
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
                        <div className="font-semibold text-left">Mesin</div>
                      </th>
                      <th className="p-1 w-20">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">AREA</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">Station</div>
                      </th>
                      <th className="p-1 w-10">
                        <div className="font-semibold text-center">DETAILS</div>
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
                          <div className="font-medium text-gray-800">
                            {item.MachineName}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.MachineLine}
                          </div>
                        </td>
                        <td className="p-2 ">
                          <div className="font-medium text-gray-800">
                            {item.MachineArea}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.MachineStation}
                          </div>
                        </td>
                        <td className="p-5 ">
                          <button
                            onClick={() => setSelectedItem(item)}
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

                        {selectedItem && (
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
                                          <span>PROBLEM</span>
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
                            {item.waktu} WIB
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

export default ReturnPurchasing;
