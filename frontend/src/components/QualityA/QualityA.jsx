import React, { useState, useEffect } from "react";

const QA = () => {
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [Model, setModel] = useState("");
  const [Pnc, setPnc] = useState("");
  const [Week, setWeek] = useState("");
  const [Stock, setStock] = useState("");
  const [Wip, setWip] = useState("");
  const [SE, setSE] = useState("");
  const [values, setValues] = useState([
    {
      no: 1,
      model: "K3AA",
      partNumber: "PWBA K3AA",
      w17: 5376,
      stock: 4000,
      wip: 1100,
      occ: -1376,
      stokEnd: -1376,
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [newValues, setNewValues] = useState({
    no: "",
    model: "",
    partNumber: "",
    w17: "",
    stock: "",
    wip: "",
    occ: "",
    stokEnd: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    setValues([newValues]);
    setIsEditing(false);
    setNewValues({
      no: "",
      model: "",
      partNumber: "",
      w17: "",
      stock: "",
      wip: "",
      occ: "",
      stokEnd: "",
    });
  };

  const handleSave = () => {
    setValues((prevValues) => [...prevValues, newValues]);
    setIsEditing(false);
    setNewValues({
      no: "",
      model: "",
      partNumber: "",
      w17: "",
      stock: "",
      wip: "",
      occ: "",
      stokEnd: "",
    });
  };

  const handleAdd = () => {
    setValues((prevValues) => [...prevValues, newValues]);
    setNewValues({
      no: "",
      model: "",
      partNumber: "",
      w17: "",
      stock: "",
      wip: "",
      occ: "",
      stokEnd: "",
    });
  };

  // Submit Network
  const SubmitNetwork = (event) => {
    if (!Model || !Pnc || !Week || !Stock) {
      alert("Harap isi semua kolom!");
      return;
    }

    const data = {
      Model: Model,
      Pnc: Pnc,
      Week: Week,
      Stock: Stock,
    };

    fetch(`http://192.168.101.236:3001/api/post/network`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          alert("Permintaan Bantuan Network Segera Diproses");
          setIsOpen1(false);
          window.location.reload();
          event.preventDefault();
        } else {
          throw new Error("Error adding data");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (Stock !== "" && Week !== "") {
      const wipValue = parseInt(Stock) - parseInt(Week);
      setWip(wipValue.toString());
      const SEValue = parseInt(Stock) - parseInt(Week);
      setSE(SEValue.toString());
    } else {
      setWip("");
      setSE("");
    }
  }, [Week, Stock]);

  return (
    <body className="h-full w-full bg-slate-700" style={{ height: "200vh" }}>
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-controls="logo-sidebar"
        // onClick={toggleDrawer}
        type="button"
        class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="logo-sidebar"
        class="fixed top-0 left-0 z-40 w-44 h-screen transition-transform -translate-x-full  sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <a href="/QualityA" class="flex items-center pl-2.5 mb-5">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              class="h-6 mr-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              QA
            </span>
          </a>
          <ul class="space-y-2">
            <li>
              <a
                href="/RequestQA"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Input</span>
              </a>
            </li>
            <li>
              <a
                href="/ValidationQA"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Validation QA</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      {/*  */}
      <main>
        <div className="pt-3 flex flex-col md:flex-row p-4 sm:ml-64">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <button
                onClick={() => setIsOpen2(true)}
                className="w-72 pt-2 sm:w-48 lg:w-72"
              >
                <a>
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 1
                      </div>
                    </header>
                  </div>
                </a>
              </button>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <button
                onClick={() => setIsOpen1(true)}
                className="w-72 pt-2 sm:w-48 lg:w-72"
              >
                <a>
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 2
                      </div>
                    </header>
                  </div>
                </a>
              </button>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 3
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-3 flex flex-col md:flex-row p-4 sm:ml-64">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 4
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 5
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 6
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-3 flex flex-col md:flex-row p-4 sm:ml-64">
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 7
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 8
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
          <section class="antialiased  text-gray-600  px-2" x-data="app">
            <div class="flex flex-col ">
              {/* <!-- Table --> */}
              <div className="w-72 pt-2 sm:w-48 lg:w-72">
                <a href="/QualityA">
                  <div
                    // style={{ backgroundColor: backgroundColor }}
                    // value={status}
                    class="w-full max-w-sm  bg-slate-800 border border-white shadow-lg rounded-xl  "
                  >
                    <header class="px-5 py-4  ">
                      <div class="font-semibold text-center text-white">
                        Week 9
                      </div>
                    </header>
                  </div>
                </a>
              </div>
            </div>
          </section>
        </div>

        {isOpen2 ? (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-end justify-center min-h-screen w-[800px] pt-4 px-4 ml-48 md:ml-48 sm:ml-56 lg:ml-80 pb-0 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute bg-gray-500 opacity-75"></div>
                </div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                <div
                  className="inline-block  align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
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
                  <section class="py-1 bg-blueGray-50">
                    <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 justify-center ml-2 mt-10">
                      <div className="relative flex flex-col min-w-0 break-words bg-white w-[750px] mb-6 shadow-lg rounded">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                          <div className="flex flex-wrap items-center overflow-auto">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                              <h3 className="font-semibold text-base text-blueGray-700">
                                Week 1
                              </h3>
                            </div>
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                              {isEditing ? (
                                <button
                                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={handleSaveEdit}
                                >
                                  Save
                                </button>
                              ) : (
                                <button
                                  className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={handleEdit}
                                >
                                  Edit
                                </button>
                              )}
                              <button
                                className="bg-green-500 text-white active:bg-green-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setIsOpen1(true)}
                              >
                                Add
                              </button>
                            </div>
                          </div>
                        </div>

                        <div className="block w-full overflow-x-auto overflow-y-scroll max-h-[200px] h-[200px] ">
                          <table className="items-center bg-transparent w-full border-collapse">
                            <thead className="bg-blueGray-50">
                              <tr>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  No
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  Model
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  Part Number Customer
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  WEEK 17
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  Stock
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  WIP
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  OCC
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  Stok End
                                </th>
                                <th className="px-6 py-3 text-xs uppercase font-semibold text-left">
                                  QC
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {values.map((value, index) => (
                                <tr key={index}>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="no"
                                        value={newValues.no}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.no}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="model"
                                        value={newValues.model}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.model}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="partNumber"
                                        value={newValues.partNumber}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.partNumber}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="w17"
                                        value={newValues.w17}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.w17}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="stock"
                                        value={newValues.stock}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.stock}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="wip"
                                        value={newValues.wip}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.wip}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="occ"
                                        value={newValues.occ}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.occ}</span>
                                    )}
                                  </td>
                                  <td className="px-6 py-4 text-xs whitespace-nowrap border-t-0">
                                    {isEditing ? (
                                      <input
                                        type="text"
                                        name="stokEnd"
                                        value={newValues.stokEnd}
                                        onChange={handleChange}
                                        className="px-2 py-1 w-full"
                                      />
                                    ) : (
                                      <span>{value.stokEnd}</span>
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <footer class="relative  mt-16">
                      <div class="container mx-auto px-4">
                        <div class="flex flex-wrap items-center md:justify-between justify-center">
                          <div class="w-full md:w-6/12 px-4 mx-auto text-center"></div>
                        </div>
                      </div>
                    </footer>
                  </section>
                </div>
              </div>
            </div>
          </>
        ) : null}

        {isOpen1 ? (
          <>
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-labelledby="modal-title"
              role="dialog"
              aria-modal="true"
              style={{ zIndex: 50 }}
            >
              <div class="fixed inset-0 z-50 P overflow-y-auto">
                <div class="flex items-end justify-center text-center sm:items-center sm:p-0">
                  <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <svg
                            className="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                          </svg>
                        </div>
                      </div>
                      <form>
                        <div class="mb-4">
                          <label
                            for="Model"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Model:
                          </label>
                          <input
                            onChange={(e) => {
                              setModel(e.target.value);
                            }}
                            type="text"
                            id="Model"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="part-number"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Part Number Customer :
                          </label>
                          <input
                            type="text"
                            onChange={(e) => {
                              setPnc(e.target.value);
                            }}
                            id="part-number"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="Week"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Week:
                          </label>
                          <input
                            onChange={(e) => {
                              setWeek(e.target.value);
                            }}
                            type="number"
                            id="Week"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="Stock"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Stock:
                          </label>
                          <input
                            onChange={(e) => {
                              setStock(e.target.value);
                            }}
                            type="number"
                            id="Stock"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="Wip"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Wip:
                          </label>
                          <input
                            type="text"
                            value={Wip}
                            id="Wip"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                            readOnly
                          />
                        </div>
                        <div class="mb-4">
                          <label
                            for="SE"
                            class="block text-gray-700 text-sm font-bold mb-2"
                          >
                            Stock End:
                          </label>
                          <input
                            type="text"
                            value={SE}
                            id="SE"
                            class="border border-gray-400 rounded-md px-3 py-2 w-full"
                            readOnly
                          />
                        </div>
                      </form>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      >
                        Submit
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsOpen1(false)}
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </main>
    </body>
  );
};

export default QA;
