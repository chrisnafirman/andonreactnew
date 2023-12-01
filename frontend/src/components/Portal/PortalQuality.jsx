import React, { useEffect, useState } from 'react';

const PortalQuality = () => {
    const [statusData, setStatusData] = useState([]);
    const [emptyStatusCount, setEmptyStatusCount] = useState(0);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        fetch('https://andonline.astra-visteon.com:3000/api/Validation')
            .then((response) => response.json())
            .then((data) => {
                const filteredData = data.filter((item) => item.Status === '' && (item.DepartTo === 'QA' || item.DepartTo === 'QC'));
                ;
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
        background: "linear-gradient(45deg, #4E86B0, #8a8b90, #0183E8)",
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
                                                        href= "/ValidationQuality"
                                                        className="block px-4 py-2 text-sm bg-green-300 hover:bg-white"
                                                    >
                                                        {item.Uid}
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
                    Quality
                </h1>
                <div className="flex space-x-12">
                   
                    <div className="flex-1">
                        <div className=" p-6 rounded-lg ">
                        <a href="ValidationQuality">
                            <button className="w-full py-2 px-4  hover:scale-75 ease-in duration-500">
                            <svg width="100px"  viewBox="0 0 1024 1024" class="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M810.666667 149.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666667V192c0-23.466667-19.2-42.666667-42.666666-42.666667zM810.666667 405.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h535.466667c27.733333-27.733333 104.533333-19.2 104.533333-42.666667v-128c0-23.466667-19.2-42.666667-42.666666-42.666667zM733.866667 661.333333H213.333333c-23.466667 0-42.666667 19.2-42.666666 42.666667v128c0 23.466667 19.2 42.666667 42.666666 42.666667h597.333334c23.466667 0 42.666667-19.2 42.666666-42.666667v-51.2c0-66.133333-53.333333-119.466667-119.466666-119.466667z" fill="#06AB1F" /><path d="M981.333333 533.333333H682.666667c-23.466667 0-42.666667 19.2-42.666667 42.666667v251.733333c0 27.733333 12.8 51.2 34.133333 68.266667l157.866667 117.333333 157.866667-117.333333c21.333333-17.066667 34.133333-40.533333 34.133333-68.266667V576c0-23.466667-19.2-42.666667-42.666667-42.666667z" fill="#009688" /></svg>
                            <span className='text-white font-serif'>Validation</span>
                            </button>
                        </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </body>
    );
};

export default PortalQuality;
