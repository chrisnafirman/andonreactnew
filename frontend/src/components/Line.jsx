import React from "react";

const Line = () => {
  return (
    <body>
      <div class="w-full container mx-auto">
        <div class="w-full flex items-center justify-between">
          <a
            class="flex items-center text-[#0576bb] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            AV
            <span class="text-[#f18f23] ">
              MS
            </span>
          </a>
        </div>
      </div>

      <div class="flex flex-wrap mt-7">
        <div class="w-full md:w-1/2 p-2">
          <div class="bg-gray-800 rounded-md overflow-hidden hover:bg-gray-700 transition duration-300">
            <a href="/Line1">
            <img
              src={process.env.PUBLIC_URL + "/Line.jpg"}
              alt="Map 1"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2 text-white">Line 1</h2>
              <p class="text-gray-300">Terdiri Dari Machine FCT,ICT,NXT</p>
            </div>
            </a>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-2">
          <div class="bg-gray-800 rounded-md overflow-hidden hover:bg-gray-700 transition duration-300">
            <img
              src={process.env.PUBLIC_URL + "/Line.jpg"}
              alt="Map 2"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2 text-white">Line 2</h2>
              <p class="text-gray-300">Terdiri Dari Machine FCT,ICT,NXT</p>
            </div>
          </div>
        </div>
        <div class="w-full md:w-1/2 p-2">
          <a href="/QCProd">
          <div class="bg-gray-800 rounded-md overflow-hidden hover:bg-gray-700 transition duration-300">
            <img
             src={process.env.PUBLIC_URL + "/Line.jpg"}
              alt="Map 3"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2 text-white">Line 3</h2>
              <p class="text-gray-300">Terdiri Dari Machine FCT,ICT,NXT</p>
            </div>
          </div>
          </a>
        </div>
        <div class="w-full md:w-1/2 p-2">
        <a href="/PPICProd">
          <div class="bg-gray-800 rounded-md overflow-hidden hover:bg-gray-700 transition duration-300">
            <img
              src={process.env.PUBLIC_URL + "/Line.jpg"}
              alt="Map 4"
              class="w-full h-40 object-cover"
            />
            <div class="p-4">
              <h2 class="text-lg font-bold mb-2 text-white">Line 4</h2>
              <p class="text-gray-300">Terdiri Dari Machine FCT,ICT,NXT</p>
            </div>
          </div>
          </a>
        </div>  
      </div>
    </body>
  );
};

export default Line;
