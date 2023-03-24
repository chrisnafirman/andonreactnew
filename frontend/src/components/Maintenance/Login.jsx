// import React, { useState } from "react";
// import ReactDOM from "react-dom";

// function App() {
//   const [Password, setPassword] = useState("");
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (Password === "1234") {
//       setIsSubmitted(true);
//       window.location.href = "/InputDamage"; // Redirect to the next page
//     } else {
//       alert("Invalid password. Please try again.");
//     }
//   };

//   return (
//     <body>
//       <div className="bg-gray-100 h-screen">
//         <div className="container mx-auto flex justify-center items-center h-full">
//           <div className="max-w-md w-full">
//             <h1 className="text-4xl font-bold mb-4 text-gray-800">ANDON</h1>
//             {!isSubmitted ? (
//               <form
//                 onSubmit={handleSubmit}
//                 className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
//               >
//                 <div className="mb-4">
//                   <label
//                     className="block text-gray-700 font-bold mb-2"
//                     htmlFor="Password"
//                   >
//                     PASSWORD
//                   </label>
//                   <input
//                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                     id="Password"
//                     type="password" // prop type="password" disini
//                     placeholder="Password"
//                     value={Password}
//                     onChange={(event) => setPassword(event.target.value)} // fungsi onChange untuk memperbarui nilai password
//                   />
//                 </div>

//                 <div className="flex items-center justify-between">
//                   <button
//                     className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                     type="submit"
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             ) : (
//               <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//                 <p className="text-gray-800 text-xl">Thanks for signing up!</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </body>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// export default App;
