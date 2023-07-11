import { React, useState } from "react";

const MaintenancePage = () => {
  const [Tickets, setTickets] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorCount, setErrorCount] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Tickets === "524316") {
      setIsSubmitted(true);
      window.location.href = "/RequestMaintenance";
    } else if (Tickets === "167321") {
      setIsSubmitted(true);
      window.location.href = "/ReturnMaintenance";
    } else if (Tickets === "827465") {
      setIsSubmitted(true);
      window.location.href = "/RequestGeneral";
    } else if (Tickets === "768215") {
      setIsSubmitted(true);
      window.location.href = "/RequestOthers";
    } else if (Tickets === "493651") {
      setIsSubmitted(true);
      window.location.href = "/RequestQC";
    } else if (Tickets === "586197") {
      setIsSubmitted(true);
      window.location.href = "/ValidationQC";
    } else if (Tickets === "973812") {
      setIsSubmitted(true);
      window.location.href = "/RequestQA";
    } else if (Tickets === "819436") {
      setIsSubmitted(true);
      window.location.href = "/ValidationQA";
    } else {
      setErrorCount(errorCount + 1);
      if (errorCount === 2) {
        setIsSubmitted(true);
      }
      alert("Invalid Tickets. Please try again.");
      window.location.reload();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Planet.jpg)`,
    backgroundSize: "1400px",
    backgroundPosition: "1400px",
    height: "700px", // Ubah tinggi (height) sesuai kebutuhan Anda
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Opacity 0.5 untuk background gelap
  };

  return (
    <body style={styles}>
      <div class=" mx-auto md:px-6 xl:px-32">
        <span className="">'</span>
        <section class="  text-center mt-20 lg:text-left">
          <div class="block rounded-lg bg-white ">
            <div class="flex flex-wrap items-center">
              <div class="hidden shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/004.jpg"
                  alt="Trendy Pants and Shoes"
                  class="w-72 rounded-t-lg lg:rounded-tr-none h-[350px] lg:rounded-bl-lg"
                />
              </div>
              <div class="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div class="px-6 py-12 md:px-12">
                  <h2 class="mb-6 text-3xl font-bold">
                    Andon Tracking Problem.
                  </h2>
                  <p class="mb-12 text-neutral-500 dark:text-neutral-300">
                    The Tickets can only be obtained from the Andon system via
                    telegram
                  </p>
                  {!isSubmitted ? (
                    <form class="mb-6 flex-row md:mb-0 md:flex">
                      <div
                        class="relative mb-3 md:mr-3  ml-0 sm:ml-60 md:ml-60 lg:ml-0  md:mb-0"
                        data-te-input-wrapper-init
                      >
                        <input
                          type="text"
                          class="peer block min-h-[auto]  w-[300px] rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput2"
                          onChange={(event) => setTickets(event.target.value)}
                         value={Tickets}
                         onKeyDown={handleKeyPress}
                        />
                        <label
                          for="exampleFormControlInput2"
                          class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                        >
                          Enter Your Tickets Number
                        </label>
                      </div>
                      <button
                        type="button"
                        onClick={handleSubmit}
                        class="text-white bg-blue-900 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-blue-900 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:focus:ring-yellow-900"
                      >
                        Submit
                      </button>
                    </form>
                  ) : (
                    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                      <p className="text-gray-800 text-xl">
                        Good Luck!!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </body>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
    //   <a href="/" class="flex items-center mb-10">
    //     <img
    //       src={process.env.PUBLIC_URL + "/AVI.png"}
    //       alt="Logo"
    //       class="h-6 mr-3 sm:h-9"
    //     />
    //   </a>
    //   <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
    //     Planning Production Export
    //   </h1>
    //   <p className="text-gray-700 text-base text-center md:text-xl lg:text-2xl mb-8">
    //    Restricted Only For PPIC & QC "Please Input Pin To Get Into The
    //     Website"
    //   </p>
    //   {!isSubmitted ? (
    //   <form class="w-60 max-w-sm">
    //     <div class="flex items-center border-b border-teal-500 py-2">
    //       <input
    //         class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    //         type="Tickets"
    //         onChange={(event) => setTickets(event.target.value)}
    //         value={Tickets}
    //         onKeyDown={handleKeyPress}
    //         placeholder="Masukan Pin"
    //       />
    //       <button
    //         class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
    //         type="button"
    //         onClick={handleSubmit}
    //       >
    //         Sign In
    //       </button>
    //     </div>
    //   </form>

    //       ) : (
    //         <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    //           <p className="text-gray-800 text-xl">Selamat Datang Kembali!!!</p>
    //         </div>
    //       )}
    // </div>
  );
};

export default MaintenancePage;
