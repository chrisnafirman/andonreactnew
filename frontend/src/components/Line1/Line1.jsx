import {React,useState,useEffect} from "react";

const Line1 = () => {
  const [time, setTime] = useState ("");

  function updateTime() {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true }));
    }, 1000);
    return () => clearInterval(interval);
  }
  
  useEffect(() => {
    updateTime();
  }, []);
  

  
  return (
    <body className="bg-gray-800" >

      <nav class="w-full container mx-auto pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed z-20 top-0">
      {/* <nav aria-label="menu nav" class="bg-gray-800 pt-2 md:pt-1 pb-1 px-1 mt-0 h-auto fixed w-full z-20 top-0"> */}

        <div class="w-full flex items-center justify-between">
          <a
            class=" ml-4 flex items-center text-[#0576bb] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            AV
            <span class="text-[#f18f23]">
              MS
            </span>
          </a>

          <div class="flex w-1/2 justify-end content-center">
            
          </div>
        </div>
      </nav>

      <main>
        <div class="flex flex-col md:flex-row">
          <nav aria-label="alternative nav">
            <div class="bg-gray-800 shadow-xl h-20 fixed bottom-0 mt-12 md:relative md:h-screen z-10 w-full md:w-48 content-center">
              <div class="md:mt-12 md:w-48 md:fixed md:left-0 md:top-0 content-center md:content-start text-left justify-between">
                <ul class="list-reset flex flex-row md:flex-col pt-3 md:py-3 px-1 md:px-2 text-center md:text-left">
                  <li class="mr-3 flex-1">
                    <a
                      href="/Andonline1"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-pink-500"
                    >
                      <i class="fas fa-tasks pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        ANDON
                      </span>
                    </a>
                  </li>
                  <li class="mr-3 flex-1">
                    <a
                      href="#"
                      class="block py-1 md:py-3 pl-1 align-middle text-white no-underline hover:text-white border-b-2 border-gray-800 hover:border-purple-500"
                    >
                      <i class="fa fa-envelope pr-0 md:pr-3"></i>
                      <span class="pb-1 md:pb-0 text-xs md:text-base text-gray-400 md:text-gray-200 block md:inline-block">
                        CHECKSHEET
                      </span>
                    </a>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
          <section>
            <div
              id="main"
              class="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5"
            >
              <div class="bg-gray-800 pt-3">
                <div class="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                  <h1 class="font-bold pl-2">AVI MANUFCATURING DASHBOARD</h1>
                </div>
              </div>

              <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-green-600">
                          <i class="fa fa-wallet fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          MODEL
                        </h2>
                        <p class="font-bold text-3xl">
                          K1ZA{" "}
                          <span class="text-green-500">
                            <i class="fas fa-caret-up"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-pink-600">
                          <i class="fas fa-users fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          LINE STATUS
                        </h2>
                        <p class="font-bold text-3xl">
                          GOOD{" "}
                          <span class="text-pink-500">
                            <i class="fas fa-exchange-alt"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-yellow-600">
                          <i class="fas fa-user-plus fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          PRODUCTION LINE
                        </h2>
                        <p class="font-bold text-3xl">
                          LINE SMT 1{" "}
                          <span class="text-yellow-600">
                            <i class="fas fa-caret-up"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-blue-600">
                          <i class="fas fa-server fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          DATE TIME
                        </h2>
                        <p class="font-bold text-3xl">{time}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-indigo-600">
                          <i class="fas fa-tasks fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          UNKNOWN
                        </h2>
                        <p class="font-bold text-3xl">UNKNWON</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-red-600">
                          <i class="fas fa-inbox fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-gray-600">
                          Issues
                        </h2>
                        <p class="font-bold text-3xl">
                          3{" "}
                          <span class="text-red-500">
                            <i class="fas fa-caret-up"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>    

              {/*  */}

            
                <div class="w-full  p-6">
                  <div class="bg-gradient-to-b from-stone-500 to-zinc-700 border-b-4 border-gray-700 rounded-lg shadow-xl p-5">
                    <div class="flex flex-row items-center">
                      <div class="flex-shrink pr-4">
                        <div class="rounded-full p-5 bg-neutral-900">
                          <i class="fa fa-wallet fa-2x fa-inverse"></i>
                        </div>
                      </div>
                      <div class="flex-1 text-right md:text-center">
                        <h2 class="font-bold uppercase text-white">
                          CURRENT DOWNTIME SATUS
                        </h2>
                        <p class="font-bold text-3xl">
                          PLANNED DT : CHANGE MODEL
                          {" "}
                          <span class="text-green-500">
                            <i class="fas fa-caret-up"></i>
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


              <div class="flex flex-row flex-wrap flex-grow mt-2">
                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h class="font-bold uppercase text-gray-600">Graph</h>
                    </div>
                    <div class="p-5">
                      <canvas
                        id="chartjs-7"
                        class="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      {/* <script>
                                    new Chart(document.getElementById("chartjs-7"), {
                                        "type": "bar",
                                        "data": {
                                            "labels": ["January", "February", "March", "April"],
                                            "datasets": [{
                                                "label": "Page Impressions",
                                                "data": [10, 20, 30, 40],
                                                "borderColor": "rgb(255, 99, 132)",
                                                "backgroundColor": "rgba(255, 99, 132, 0.2)"
                                            }, {
                                                "label": "Adsense Clicks",
                                                "data": [5, 15, 10, 30],
                                                "type": "line",
                                                "fill": false,
                                                "borderColor": "rgb(54, 162, 235)"
                                            }]
                                        },
                                        "options": {
                                            "scales": {
                                                "yAxes": [{
                                                    "ticks": {
                                                        "beginAtZero": true
                                                    }
                                                }]
                                            }
                                        }
                                    });
                                </script> */}
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                      <canvas
                        id="chartjs-0"
                        class="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      {/* <script>
                                    new Chart(document.getElementById("chartjs-0"), {
                                        "type": "line",
                                        "data": {
                                            "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                            "datasets": [{
                                                "label": "Views",
                                                "data": [65, 59, 80, 81, 56, 55, 40],
                                                "fill": false,
                                                "borderColor": "rgb(75, 192, 192)",
                                                "lineTension": 0.1
                                            }]
                                        },
                                        "options": {}
                                    });
                                </script> */}
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                      <canvas
                        id="chartjs-1"
                        class="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      {/* <script>
                                    new Chart(document.getElementById("chartjs-1"), {
                                        "type": "bar",
                                        "data": {
                                            "labels": ["January", "February", "March", "April", "May", "June", "July"],
                                            "datasets": [{
                                                "label": "Likes",
                                                "data": [65, 59, 80, 81, 56, 55, 40],
                                                "fill": false,
                                                "backgroundColor": ["rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)"],
                                                "borderColor": ["rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)"],
                                                "borderWidth": 1
                                            }]
                                        },
                                        "options": {
                                            "scales": {
                                                "yAxes": [{
                                                    "ticks": {
                                                        "beginAtZero": true
                                                    }
                                                }]
                                            }
                                        }
                                    });
                                </script> */}
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h5 class="font-bold uppercase text-gray-600">Graph</h5>
                    </div>
                    <div class="p-5">
                      <canvas
                        id="chartjs-4"
                        class="chartjs"
                        width="undefined"
                        height="undefined"
                      ></canvas>
                      {/* <script>
                                    new Chart(document.getElementById("chartjs-4"), {
                                        "type": "doughnut",
                                        "data": {
                                            "labels": ["P1", "P2", "P3"],
                                            "datasets": [{
                                                "label": "Issues",
                                                "data": [300, 50, 100],
                                                "backgroundColor": ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"]
                                            }]
                                        }
                                    });
                                </script> */}
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 class="font-bold uppercase text-gray-600">Graph</h2>
                    </div>
                    <div class="p-5">
                      <table class="w-full p-5 text-gray-700">
                        <thead>
                          <tr>
                            <th class="text-left text-blue-900">Name</th>
                            <th class="text-left text-blue-900">Side</th>
                            <th class="text-left text-blue-900">Role</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>Obi Wan Kenobi</td>
                            <td>Light</td>
                            <td>Jedi</td>
                          </tr>
                          <tr>
                            <td>Greedo</td>
                            <td>South</td>
                            <td>Scumbag</td>
                          </tr>
                          <tr>
                            <td>Darth Vader</td>
                            <td>Dark</td>
                            <td>Sith</td>
                          </tr>
                        </tbody>
                      </table>

                      <p class="py-2">
                        <a href="#">See More issues...</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div class="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div class="bg-white border-transparent rounded-lg shadow-xl">
                    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                      <h2 class="font-bold uppercase text-gray-600">Advert</h2>
                    </div>
                    <div class="p-5 text-center">
                      <script
                        async
                        type="text/javascript"
                        src="//cdn.carbonads.com/carbon.js?serve=CK7D52JJ&placement=wwwtailwindtoolboxcom"
                        id="_carbonads_js"
                      ></script>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
    </body>
  );
};

export default Line1;
