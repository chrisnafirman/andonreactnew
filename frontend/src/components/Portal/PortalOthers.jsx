import React, { useEffect, useState } from 'react';

const PortalOthers = () => {
    const [statusData, setStatusData] = useState([]);
    const [emptyStatusCount, setEmptyStatusCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        fetch('http://192.168.101.12:3001/api/Repair')
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.Status === '' && item.Department !== 'MAINTENANCE & IT');
                setStatusData(filteredData); // Menyimpan data item ke dalam state
                // Menghitung jumlah item yang kosong
                const count = filteredData.length;
                setEmptyStatusCount(count);
            })
            .catch((error) => {
                console.error('Error fetching repair data:', error);
            });
    }, []);

    const styles = {
        background: "linear-gradient(45deg, #3B3131, #8a8b90, #34282C)",
        height: "1000px",
      };

    return (
        <body style={styles}>
            <nav class="bg-opacity-70">
                <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div class="relative flex h-16 items-center justify-between">
                        <div class="absolute inset-y-0 left-0 flex items-center ">
                            <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2  " aria-controls="mobile-menu" aria-expanded="false">
                                <div class="flex flex-shrink-0 items-center">
                                    <img
                                        src={process.env.PUBLIC_URL + "/avi.png"}
                                        alt="Logo"
                                        class="h-6 ml-4 sm:h-9 bg-white rounded-md"
                                    />
                                </div>
                            </button>

                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">


                        </div>
                        <div class="absolute inset-y-0 right-0 mt-3 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            <button
                                onClick={() => setShowDropdown(!showDropdown)}
                                type="button"
                                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                <span className="absolute -inset-4">
                                    {emptyStatusCount > 0 && <span className="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{emptyStatusCount}</span>}
                                </span>
                                <span className="sr-only">View notifications</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                    />
                                </svg>
                            </button>
                            <div>
                                {showDropdown && (
                                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                            {statusData
                                                .filter((item) => item.Status === '')
                                                .map((item) => (
                                                    <a
                                                        key={item.Uid}
                                                        href= "/Others"
                                                        className="block px-4 py-2 text-sm bg-yellow-300 hover:bg-white"
                                                    >
                                                        {item.Uid !== "" ? item.Uid : (item.Station + " Need Action")}
                                                    </a>
                                                ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>


            <div className="flex flex-col  items-center  h-screen ">
            <h1 className="text-4xl mt-5 text-[#2C2B27] font-serif mb-52 lg:mb-36" style={{ textShadow: '2px 2px 4px rgba(24,0,0,0.5)' }}>
                  Astra Visteon Indonesia [Andon]
                </h1>

                <div className="flex space-x-12">
                    <div className="flex-1">
                        <div className=" p-6 rounded-lg ">
                            <a href="Others">
                            <button className="w-full py-2 px-4  text-white rounded-md  hover:scale-75 ease-in duration-500 ">
                                <svg width="100px"viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#b99204" stroke="#b99204">

                                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />

                                    <g id="SVGRepo_iconCarrier">

                                        <path d="M810.666667 149.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666667V192c0-23.466667-19.2-42.666667-42.666666-42.666667zM810.666667 405.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666667v-128c0-23.466667-19.2-42.666667-42.666666-42.666667zM810.666667 661.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666667v-128c0-23.466667-19.2-42.666667-42.666666-42.666667z" fill="#C5D315" />

                                        <path d="M964.266667 812.8c2.133333-8.533333 2.133333-17.066667 2.133333-23.466667s0-17.066667-2.133333-23.466666l49.066666-36.266667c4.266667-4.266667 6.4-10.666667 4.266667-14.933333l-49.066667-83.2c-2.133333-4.266667-8.533333-6.4-14.933333-4.266667l-55.466667 25.6c-12.8-10.666667-27.733333-19.2-42.666666-25.6l-6.4-61.866667c0-6.4-6.4-10.666667-10.666667-10.666666h-96c-6.4 0-10.666667 4.266667-10.666667 10.666666l-6.4 61.866667c-14.933333 6.4-29.866667 14.933333-42.666666 25.6l-55.466667-25.6c-6.4-2.133333-12.8 0-14.933333 4.266667l-49.066667 83.2c-2.133333 4.266667-2.133333 12.8 4.266667 14.933333l49.066666 36.266667c-2.133333 8.533333-2.133333 17.066667-2.133333 23.466666s0 17.066667 2.133333 23.466667l-49.066666 36.266667c-4.266667 4.266667-6.4 10.666667-4.266667 14.933333l49.066667 83.2c2.133333 4.266667 8.533333 6.4 14.933333 4.266667l55.466667-25.6c12.8 10.666667 27.733333 19.2 42.666666 25.6l6.4 61.866666c0 6.4 6.4 10.666667 10.666667 10.666667h96c6.4 0 10.666667-4.266667 10.666667-10.666667l6.4-61.866666c14.933333-6.4 29.866667-14.933333 42.666666-25.6l55.466667 25.6c6.4 2.133333 12.8 0 14.933333-4.266667l49.066667-83.2c2.133333-4.266667 2.133333-12.8-4.266667-14.933333l-49.066666-36.266667zM789.333333 900.266667c-61.866667 0-110.933333-49.066667-110.933333-110.933334 0-61.866667 49.066667-110.933333 110.933333-110.933333 61.866667 0 110.933333 49.066667 110.933334 110.933333 0 61.866667-49.066667 110.933333-110.933334 110.933334z" fill="#607D8B" />

                                        <path d="M789.333333 661.333333c-70.4 0-128 57.6-128 128s57.6 128 128 128 128-57.6 128-128-57.6-128-128-128z m0 192c-36.266667 0-64-27.733333-64-64s27.733333-64 64-64 64 27.733333 64 64-27.733333 64-64 64z" fill="#455A64" />

                                    </g>

                                </svg>
                                <span className='text-white font-serif'>Request</span>
                            </button>
                            </a>
                        </div> 
                    </div>
                    
                </div>
            </div>
        </body>
    );
};

export default PortalOthers;
