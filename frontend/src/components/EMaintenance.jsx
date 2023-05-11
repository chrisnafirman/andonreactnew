import React from 'react'

const EMaintenance = () => {

      const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/MTC.jpg)`,
    backgroundSize: "1400px",
    backgroundPosition: "1400px",
    height: "640px", // Ubah tinggi (height) sesuai kebutuhan Anda
  };
  return (
    <body style={styles}>
    <div >
    <div className="flex justify-center items-center">
        <div className="2xl:mx-auto 2xl:container  sm:px-6 xl:px-20 2xl:px-0 w-[900px]">
            <div className="flex flex-col jusitfy-center items-center space-y-5">
                <div className="flex flex-col justify-center items-center space-y-2">
                    <h1 className="text-3xl xl:text-4xl font-extralight  leading-7 xl:leading-9 text-white ">E - Maintenance</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                    <div className="relative group flex justify-center items-center h-full w-full">
                    <a href="">
                        <img className=" transition duration-500 ease-in-out transform hover:scale-110 object-center object-cover rounded-xl h-full w-full" src={process.env.PUBLIC_URL + "/Employee.jpeg"} style={{ width: "100%", height: "auto" }}  alt="girl-image" />
                     </a>
                        {/* <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" /> */}
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                        <div className="relative group flex justify-center items-center h-full w-full">
                            <a href="">
                            <img className=" transition duration-500 ease-in-out transform hover:scale-110 object-center object-cover h-full rounded-xl w-full" src={process.env.PUBLIC_URL + "/Checklist.jpeg"} style={{ width: "90%", height: "auto" }}  alt="shoe-image" />
                            </a>
                            {/* <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" /> */}
                        </div>
                        <div className=" transition duration-500 ease-in-out transform hover:scale-110 relative group flex justify-center items-center h-full w-full">
                            <a href="">
                            <img className="object-center rounded-xl  object-cover h-full w-full" src={process.env.PUBLIC_URL + "/Sparepart.jpeg"}  style={{ width: "90%", height: "auto" }} alt="watch-image" />
                            {/* <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Watches</button> */}
                           
                            </a> {/* <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" /> */}
                        </div>
                    </div>
                    <div className=" transition duration-500 ease-in-out transform hover:scale-110 relative group justify-center items-center h-full w-full hidden lg:flex">
                        <a href="">
                        <img className="object-center rounded-xl object-cover h-full w-full" src={process.env.PUBLIC_URL + "/Equipment.jpeg"} style={{ width: "100%", height: "auto" }}  alt="girl-image" />
                       
                        </a> {/* <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" /> */}
                    </div>
                    {/* <div className="relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                        <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                        <img className="object-center object-cover h-full w-full md:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                        <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                        // <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                    </div> */}
                </div>
                {/* <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                    <img className="object-center object-cover h-full w-full hidden md:block" src="https://i.ibb.co/6FjW19n/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2.png" alt="girl-image" />
                    <img className="object-center object-cover h-full w-full sm:hidden" src="https://i.ibb.co/sQgHwHn/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-2" />
                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">Women</button>
                    // <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50" />
                </div> */}
            </div>
        </div>
    </div>
</div>
</body>
  )
}

export default EMaintenance