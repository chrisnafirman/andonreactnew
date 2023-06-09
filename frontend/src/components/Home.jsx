import {React, useState} from "react";

const Home = () => {
  const [Password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {

    event.preventDefault();
    if (Password === "1234") {
      setIsSubmitted(true);
      window.location.href = "/Line"; // Redirect to the next page
    } else {
      alert("Invalid password. Please try again.");
    }
  };
  return (
    <body class="leading-normal tracking-normal text-indigo-400 h-screen m-6 bg-cover bg-fixed bg-[#121212]">
      <div class="h-full">
        <div class="w-full container mx-auto">
          <div class="w-full flex items-center justify-between">
            <a
              class="flex items-center text-[#0576bb] no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
              href="#"
            >
              AV
              <span className="text-[#f18f23]">
                MS
              </span>
            </a>

           
          </div>
        </div>

        <div class="container pt-24 md:pt-24 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="text-3xl md:text-5xl text-[#0576bb]  text-white opacity-75 font-bold leading-tight text-center md:text-left">
              ASTRA VISTEON
            </h1>
            <h1 class=" text-3xl md:text-3xl text-[#f18f23] text-white opacity-75 font-bold leading-tight text-center md:text-left">
              MANAGEMENT SYSTEM
            </h1>
            <p class="leading-normal text-base md:text-sm mb-8 text-center md:text-left">
              This system collects and processes data from various sources in
              the production environment, including data from machines, workers,
              and other systems. AVMS enables real-time production control and
              inventory management.
            </p>
            {!isSubmitted ? (
              <form
                onSubmit={handleSubmit}
                class="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
              >
                <div class="mb-4">
                  <label
                    class="block text-blue-300 py-2 font-bold mb-2"
                    for="passcode"
                  >
                    ENTER A PASSCODE
                  </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Password"
                    type="password" // prop type="password" disini
                    placeholder="Passcode"
                    value={Password}
                    onChange={(event) => setPassword(event.target.value)} // fungsi onChange untuk memperbarui nilai password
                  />
                </div>

                <div class="flex items-center justify-between pt-4">
                  <button
                    class="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                    type="submit"
                  >
                    GO TO SYSTEM
                  </button>
                </div>
              </form>
            ) : (
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-gray-800 text-xl">Thanks for signing up!</p>
              </div>
            )}
          </div>

          <div class="w-full xl:w-3/5 p-12 overflow-hidden">
            <img
              class="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
              src="macbook.svg"
            />
          </div>

          <div class="mx-auto md:pt-16">
            <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
              Download our app:
            </p>
            <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
              <img
                src="App Store.svg"
                class="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
              />
              <img
                src="Play Store.svg"
                class="h-12 transform hover:scale-125 duration-300 ease-in-out"
              />
            </div>
          </div>

          <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <a class="text-gray-500 no-underline hover:no-underline" href="#">
              &copy; App 2020
            </a>

          
          </div>
        </div>
      </div>
    </body>
  );
};

export default Home;
