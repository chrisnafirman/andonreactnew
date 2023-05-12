import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";


const RepairReport = () => {
  const [time, setTime] = useState(new Date().toLocaleString());
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [showDrawer, setShowDrawer] = useState(false);



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
      fetch("http://localhost:3001/api/get/data")
        .then((response) => response.json())
        .then((json) => {
          const YellowData = json.filter(
            (item) => item.status === "Repair"
          );
          // mengubah properti timestamp menjadi tanggal saja
          YellowData.forEach((item) => {
            const date = new Date(item.timestamp);
            const formattedDate = `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;
            item.timestamp = formattedDate;
          });
          YellowData.sort(
            (a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp)
          );
          YellowData.reverse();
          setData(YellowData);
          setFilteredData(YellowData);
        });
    }, []);
    
    const handleFilterByDate = (e) => {
      const date = new Date(e.target.value);
      const selectedDate = date.toLocaleDateString();
      setSelectedDate(selectedDate);
      fetch(`http://localhost:3001/api/get/data?date=${selectedDate}`)
        .then((response) => response.json())
        .then((json) => {
          const YellowData = json.filter(
            (item) => item.status === "Repair"
          );
          // mengubah properti timestamp menjadi tanggal saja
          YellowData.forEach((item) => {
            const date = new Date(item.timestamp);
            const formattedDate = `${date.getDate()}/${
              date.getMonth() + 1
            }/${date.getFullYear()}`;
            item.timestamp = formattedDate;
          });
          YellowData.sort(
            (a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp)
          );
          YellowData.reverse();
          setFilteredData(YellowData);
        });
    };
    
    const handleSubmit = (event) => {
      event.preventDefault();
      const date = new Date(selectedDate);
      const formattedDate = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;
      const filteredData = data.filter(
        (item) => item.timestamp === formattedDate
      );
      filteredData.sort(
        (a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp)
      );
      setFilteredData(filteredData);
    };
    
    const styles = {
      backgroundImage: `url(${process.env.PUBLIC_URL}/avi.jpg)`,
      backgroundSize: "1300px",
      backgroundPosition: "500px"
      
    }

  return (
    <body style={styles}>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900  w-full sticky z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
          </a>

          <h1 class="text-center sm:text-left">MESIN YELLOW CONDITION</h1>

          <div class="flex md:order-2">
          <button
              className="text-white md:inline-block hidden bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              type="button"
              data-drawer-target="drawer-navigation"
              onClick={toggleDrawer}
              aria-controls="drawer-navigation"
            >
              Menu
            </button>

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
                  href="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700"
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                  href="/RepairReport"
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
                  <span class="ml-3 text-white">Report Repair Machine</span>
                </a>
              </li>
              <li>
                <a
                  href="/GoodReport"
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
                  <span class="ml-3 text-white">Report Good Machine</span>
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
                  Yellow Status
                </div>
              </header>

              <div
                className="overflow-x-auto p-3"
                style={{ height: "300px", overflowY: "scroll" }}
              >
                <table id="data-table" className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2">
                        <div className="font-semibold text-left">Mesin</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-left">Line</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Status</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Timer</div>
                      </th>
                      <th className="p-2">
                        <div className="font-semibold text-center">Date</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {filteredData.map((item) => (
                      <tr key={item.id}>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.mesin}
                          </div>
                        </td>
                        <td className="p-2">
                          <div className="font-medium text-gray-800">
                            {item.line}
                          </div>
                        </td>
                        <td className="p-2 w-40 ">
                          <div className="text-center h-6 bg-[#E9CE08]  rounded-2xl text-black...">
                            {item.status}
                          </div>
                        </td>
                        <td className="p-2 w-36">
                          <div className="text-center h-6 text-black...">
                            {item.timer}
                          </div>
                        </td>
                        <td className="p-2 w-36">
                          <div className="text-center h-6 text-black...">
                            {item.timestamp}
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

export default RepairReport;
