import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";
const firebaseConfig = {
  apiKey: "AIzaSyBn6iDHHW-vU7bB6GL3iOvlD6QI0wmTOE8",
  databaseURL:
    "https://andon-a0ad5-default-rtdb.asia-southeast1.firebasedatabase.app",
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const Mobile = () => {
  const [status, setStatus] = useState("");
  const [mesin, setMesin] = useState("");
  const [line, setLine] = useState("");
  const [nama, setNama] = useState("");
  const [timer, setTimer] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");

 

  useEffect(() => {
    const ref = firebase.database().ref("Mesin/Mesin1");
    ref.on("value", (snapshot) => {
      const data = snapshot.val();
      updateStatus(data);
    });

    const ref2 = firebase.database().ref("Mesin/NamaMesin");
    ref2.on("value", (snapshot) => {
      const data = snapshot.val();
      setMesin(data);
    });

    const ref3 = firebase.database().ref("Mesin/LineMesin");
    ref3.on("value", (snapshot) => {
      const data = snapshot.val();
      setLine(data);
    });

    const ref4 = firebase.database().ref("Mesin/Nama");
    ref4.on("value", (snapshot) => {
      const data = snapshot.val();
      setNama(data);
    });

    const ref5 = firebase.database().ref("Mesin/timer");
    ref5.on("value", (snapshot) => {
      const data = snapshot.val();
      setTimer(data);
    });

    return () => {};
  }, []);
  ////////////

  // DATA2
  ////////////
  // const ref5 = database.ref("Mesin2/Status");
  // ref5.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   updateStatus2(data);
  // });

  // const ref6 = firebase.database().ref("Mesin2/NamaMesin");
  // ref6.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setMesin2(data);
  // });

  // const ref7 = firebase.database().ref("Mesin2/LineMesin");
  // ref7.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setLine2(data);
  // });

  // const ref8 = firebase.database().ref("Mesin2/Nama");
  // ref8.on("value", (snapshot) => {
  //   const data = snapshot.val();
  //   setNama2(data);
  // });

  // ----

  // fungsi time di navbar

  // fungsi post ke backend

  // fungsi mengubah warna status

  const updateStatus = (data) => {
    setStatus(data);
    setBackgroundColor(
      data === "Good"
        ? "#31A207"
        : data === "Repair"
        ? "#E9CE08"
        : data === "Damage"
        ? "#DA0404"
        : "#565454"
    );
  };

  return (
    <body class="w-full h-screen bg-white">

        

        {/* navbar */}

        <nav class=" relative  flex w-full  flex-wrap items-center justify-between bg-neutral-100 py-3 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600">
          <a href="/" class="flex items-center">
            <img
              src={process.env.PUBLIC_URL + "/AVI.png"}
              alt="Logo"
              class="h-6 mr-3 sm:h-9"
            />
          </a>
        </nav>

        <div class="flex p-3  flex-row space-x-4 mt-3">
          <div style={{ backgroundColor: backgroundColor }} value={status} class=" p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">{mesin}</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">{line}</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">{nama}</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">{timer}</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>
        </div>
        <div class="flex p-3 flex-row space-x-4 mt-3">
        <div   class=" bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>
        </div>
        <div class="flex p-3 flex-row space-x-4 mt-3">
        <div   class=" bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>
        </div>
        <div class="flex p-3 flex-row space-x-4 mt-3">
        <div   class=" bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>
        </div>

    <div class="flex p-3 flex-row space-x-4 mt-3">
        <div   class=" bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>

         <div   class="bg-slate-500 p-4 rounded-md w-1/3">
            <div class="text-base font-bold text-white">Unknown</div>
            <p class="text-sm  text-black">LINE:</p>
            <p class="text-sm  text-white ">Unkwon</p>
            <p class="text-sm  text-black">PIC:</p>
            <p class="text-sm  text-white ">Unknown</p>
            <p class="text-sm  text-black ">TIME:</p>
            <p class="text-sm  text-white ">Uknwon</p>
       
          </div>
        </div>
      



      {/* bottom bar */}
      <footer
          id="bottom-navigation"
          class="block fixed inset-x-0 bottom-0 z-10 bg-white shadow"
        >
          <div id="tabs" class="flex justify-between">
            <a
              href="/Mobile"
              class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 42 42"
                class="inline-block mb-1"
              >
                <g
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <path
                    d="M21.0847458,3.38674884 C17.8305085,7.08474576 17.8305085,10.7827427 21.0847458,14.4807396 C24.3389831,18.1787365 24.3389831,22.5701079 21.0847458,27.6548536 L21.0847458,42 L8.06779661,41.3066256 L6,38.5331279 L6,26.2681048 L6,17.2542373 L8.88135593,12.4006163 L21.0847458,2 L21.0847458,3.38674884 Z"
                    fill="currentColor"
                    fill-opacity="0.1"
                  ></path>
                  <path
                    d="M11,8 L33,8 L11,8 Z M39,17 L39,36 C39,39.3137085 36.3137085,42 33,42 L11,42 C7.6862915,42 5,39.3137085 5,36 L5,17 L7,17 L7,36 C7,38.209139 8.790861,40 11,40 L33,40 C35.209139,40 37,38.209139 37,36 L37,17 L39,17 Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M22,27 C25.3137085,27 28,29.6862915 28,33 L28,41 L16,41 L16,33 C16,29.6862915 18.6862915,27 22,27 Z"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="currentColor"
                    fill-opacity="0.1"
                  ></path>
                  <rect
                    fill="currentColor"
                    transform="translate(32.000000, 11.313708) scale(-1, 1) rotate(-45.000000) translate(-32.000000, -11.313708) "
                    x="17"
                    y="10.3137085"
                    width="30"
                    height="2"
                    rx="1"
                  ></rect>
                  <rect
                    fill="currentColor"
                    transform="translate(12.000000, 11.313708) rotate(-45.000000) translate(-12.000000, -11.313708) "
                    x="-3"
                    y="10.3137085"
                    width="30"
                    height="2"
                    rx="1"
                  ></rect>
                </g>
              </svg>
              <span class="tab tab-home block text-xs">Home</span>
            </a>
            <a
              href="/--"
              class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <svg
                fill="/Mobile808080"
                class="inline-block mb-1"
                width="25"
                height="25"
                viewBox="-2.84 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <g
                    data-name="E404, gear, Media, media player, multimedia"
                    id="E404_gear_Media_media_player_multimedia"
                  >
                    <path
                      class="cls-1"
                      d="M373.59,340.89V299.52a18.84,18.84,0,0,0-18.84-18.84H333.48A18.92,18.92,0,0,1,316,268.91l-.1-.24a19,19,0,0,1,4-20.71l15-15a18.83,18.83,0,0,0,0-26.64L305.72,177a18.83,18.83,0,0,0-26.64,0l-15,15a19,19,0,0,1-20.71,4l-.24-.1a18.92,18.92,0,0,1-11.77-17.46V157.25a18.84,18.84,0,0,0-18.84-18.84H171.11a18.84,18.84,0,0,0-18.84,18.84v21.27A18.92,18.92,0,0,1,140.5,196l-.24.1a19,19,0,0,1-20.71-4l-15-15a18.83,18.83,0,0,0-26.64,0L48.62,206.28a18.83,18.83,0,0,0,0,26.64l15,15a19,19,0,0,1,4,20.71l-.1.24a18.92,18.92,0,0,1-17.46,11.77H28.84A18.84,18.84,0,0,0,10,299.52v41.37a18.84,18.84,0,0,0,18.84,18.84H50.11A18.92,18.92,0,0,1,67.57,371.5l.1.24a19,19,0,0,1-4,20.71l-15,15a18.83,18.83,0,0,0,0,26.64l29.25,29.25a18.83,18.83,0,0,0,26.64,0l15-15a19,19,0,0,1,20.71-4l.24.1a18.92,18.92,0,0,1,11.77,17.46v21.27A18.84,18.84,0,0,0,171.11,502h41.37a18.84,18.84,0,0,0,18.84-18.84V461.89a18.92,18.92,0,0,1,11.77-17.46l.24-.1a19,19,0,0,1,20.71,4l15,15a18.83,18.83,0,0,0,26.64,0L335,434.13a18.83,18.83,0,0,0,0-26.64l-15-15a19,19,0,0,1-4-20.71l.1-.24a18.92,18.92,0,0,1,17.46-11.77h21.27A18.84,18.84,0,0,0,373.59,340.89Z"
                    />

                    <circle class="cls-1" cx="191.8" cy="320.2" r="74.8" />

                    <path
                      class="cls-1"
                      d="M207.45,138.41V138a15,15,0,0,1,15-15h16.9a15,15,0,0,0,13.88-9.35c0-.06.05-.13.08-.19A15.06,15.06,0,0,0,250.09,97l-12-11.94a15,15,0,0,1,0-21.17l23.24-23.24a15,15,0,0,1,21.16,0l11.95,12a15.07,15.07,0,0,0,16.45,3.18l.19-.08a15,15,0,0,0,9.36-13.88V25a15,15,0,0,1,15-15h32.87a15,15,0,0,1,15,15v16.9a15,15,0,0,0,9.35,13.88l.18.08a15.09,15.09,0,0,0,16.46-3.18l12-12a15,15,0,0,1,21.16,0l23.24,23.24a15,15,0,0,1,0,21.17L453.68,97a15.05,15.05,0,0,0-3.17,16.46l.07.19A15,15,0,0,0,464.45,123h16.9a15,15,0,0,1,15,15v32.86a15,15,0,0,1-15,15h-16.9a15,15,0,0,0-13.87,9.36l-.07.18a15,15,0,0,0,3.17,16.46l11.95,11.95a15,15,0,0,1,0,21.16l-23.24,23.24a15,15,0,0,1-21.16,0l-12-11.95a15,15,0,0,0-16.46-3.18l-.18.07A15,15,0,0,0,383.29,267v16.9a15,15,0,0,1-9.77,14"
                    />

                    <circle class="cls-1" cx="351.88" cy="154.43" r="48.69" />
                  </g>
                </g>
              </svg>
              <span class="tab tab-kategori block text-xs">Unknown</span>
            </a>
            <a
              href="/Mobile"
              class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <svg
                width="25"
                height="26"
                viewBox="0 0 1024 1024"
                fill="#000000"
                class="icon mx-auto mb-1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M40.628 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8 8 0 0 1-7.998 7.996zM72.62 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8.004 8.004 0 0 1-7.998 7.996zM104.61 184.1c-4.42 0-8.076-3.576-8.076-7.996 0-4.422 3.498-7.998 7.904-7.998h0.172a8.002 8.002 0 0 1 7.998 7.998 8.004 8.004 0 0 1-7.998 7.996z"
                  fill=""
                />
                <path
                  d="M1015.848 200.096H8.156a7.994 7.994 0 0 1-7.998-7.998v-15.994c0-13.23 10.762-23.994 23.992-23.994h975.702c13.23 0 23.992 10.764 23.992 23.994v15.994a7.994 7.994 0 0 1-7.996 7.998zM16.152 184.1h991.696v-7.996c0-4.336-3.656-7.998-7.996-7.998H24.15a8.008 8.008 0 0 0-7.998 7.998v7.996z"
                  fill=""
                />
                <path
                  d="M1015.848 871.89H8.156a7.994 7.994 0 0 1-7.998-7.998V192.098a7.994 7.994 0 0 1 7.998-7.998h1007.692a7.994 7.994 0 0 1 7.996 7.998v671.794a7.994 7.994 0 0 1-7.996 7.998zM16.152 855.894h991.696V200.096H16.152v655.798z"
                  fill=""
                />
                <path
                  d="M56.14 743.93a7.994 7.994 0 0 1-7.998-7.998V240.084a7.994 7.994 0 0 1 7.998-7.998 7.994 7.994 0 0 1 7.998 7.998v495.848a7.994 7.994 0 0 1-7.998 7.998z"
                  fill=""
                />
                <path
                  d="M967.86 743.93H56.14c-4.42 0-7.998-3.578-7.998-7.998s3.578-7.998 7.998-7.998h911.72c4.422 0 8 3.578 8 7.998s-3.578 7.998-8 7.998zM791.914 791.914H232.086a7.994 7.994 0 0 1-7.998-7.998 7.994 7.994 0 0 1 7.998-7.998h559.828a7.992 7.992 0 0 1 7.996 7.998 7.99 7.99 0 0 1-7.996 7.998zM647.958 823.904H376.042a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996h271.916c4.422 0 8 3.576 8 7.996a7.994 7.994 0 0 1-8 7.998zM951.868 328.056c-13.23 0-23.996-10.762-23.996-23.992s10.766-23.994 23.996-23.994 23.992 10.764 23.992 23.994-10.762 23.992-23.992 23.992z m0-31.99c-4.406 0-8 3.584-8 7.998a8.008 8.008 0 0 0 8 7.996 8.008 8.008 0 0 0 7.996-7.996 8.008 8.008 0 0 0-7.996-7.998zM695.946 599.972c-13.23 0-23.992-10.762-23.992-23.992s10.762-23.992 23.992-23.992 23.992 10.762 23.992 23.992-10.762 23.992-23.992 23.992z m0-31.99c-4.406 0-8 3.594-8 7.998s3.594 7.998 8 7.998c4.402 0 7.996-3.594 7.996-7.998s-3.594-7.998-7.996-7.998zM392.038 456.018c-13.23 0-23.994-10.764-23.994-23.994 0-13.228 10.762-23.992 23.994-23.992 13.23 0 23.994 10.764 23.994 23.992-0.002 13.23-10.766 23.994-23.994 23.994z m0-31.99a8.006 8.006 0 0 0-7.998 7.996c0 4.414 3.592 7.998 7.998 7.998s7.998-3.584 7.998-7.998a8.01 8.01 0 0 0-7.998-7.996z"
                  fill=""
                />
                <path
                  d="M120.12 647.958c-13.23 0-23.992-10.764-23.992-23.994s10.762-23.992 23.992-23.992 23.992 10.762 23.992 23.992-10.762 23.994-23.992 23.994z m0-31.99a8.014 8.014 0 0 0-7.998 7.996 8.014 8.014 0 0 0 7.998 7.998 8.012 8.012 0 0 0 7.998-7.998 8.012 8.012 0 0 0-7.998-7.996z"
                  fill=""
                />
                <path
                  d="M131.242 620.842a7.936 7.936 0 0 1-3.888-1.016 7.994 7.994 0 0 1-3.092-10.886c4.202-7.544 104.812-184.912 251.782-184.912a7.992 7.992 0 0 1 7.998 7.996 7.994 7.994 0 0 1-7.998 7.998c-137.662 0-236.834 174.948-237.818 176.728a7.992 7.992 0 0 1-6.984 4.092z"
                  fill=""
                />
                <path
                  d="M680.136 582.792c-71.804 0-116.746-41.956-156.39-78.984-35.13-32.802-68.306-63.786-115.714-63.786a7.994 7.994 0 0 1-7.998-7.998 7.992 7.992 0 0 1 7.998-7.996c53.718 0 89.128 33.076 126.632 68.088 39.316 36.724 79.976 74.682 145.472 74.682a7.99 7.99 0 0 1 7.996 7.996 7.992 7.992 0 0 1-7.996 7.998z"
                  fill=""
                />
                <path
                  d="M709.55 575.652a7.984 7.984 0 0 1-7.75-6.014 7.998 7.998 0 0 1 5.766-9.732c118.242-30.272 196.532-111.864 232.676-242.512 1.156-4.256 5.546-6.738 9.844-5.576a7.99 7.99 0 0 1 5.558 9.842c-37.77 136.574-119.898 221.94-244.114 253.742a7.88 7.88 0 0 1-1.98 0.25z"
                  fill=""
                />
              </svg>
              <span class="tab tab-realtime block text-xs">Realtime</span>
            </a>
            <a
              href="/Mobile"
              class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <svg
                fill="/Mobile808080"
                class="inline-block mb-1"
                width="25"
                height="25"
                viewBox="-2.84 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g data-name="Layer 2" id="Layer_2">
                  <g
                    data-name="E404, gear, Media, media player, multimedia"
                    id="E404_gear_Media_media_player_multimedia"
                  >
                    <path
                      class="cls-1"
                      d="M373.59,340.89V299.52a18.84,18.84,0,0,0-18.84-18.84H333.48A18.92,18.92,0,0,1,316,268.91l-.1-.24a19,19,0,0,1,4-20.71l15-15a18.83,18.83,0,0,0,0-26.64L305.72,177a18.83,18.83,0,0,0-26.64,0l-15,15a19,19,0,0,1-20.71,4l-.24-.1a18.92,18.92,0,0,1-11.77-17.46V157.25a18.84,18.84,0,0,0-18.84-18.84H171.11a18.84,18.84,0,0,0-18.84,18.84v21.27A18.92,18.92,0,0,1,140.5,196l-.24.1a19,19,0,0,1-20.71-4l-15-15a18.83,18.83,0,0,0-26.64,0L48.62,206.28a18.83,18.83,0,0,0,0,26.64l15,15a19,19,0,0,1,4,20.71l-.1.24a18.92,18.92,0,0,1-17.46,11.77H28.84A18.84,18.84,0,0,0,10,299.52v41.37a18.84,18.84,0,0,0,18.84,18.84H50.11A18.92,18.92,0,0,1,67.57,371.5l.1.24a19,19,0,0,1-4,20.71l-15,15a18.83,18.83,0,0,0,0,26.64l29.25,29.25a18.83,18.83,0,0,0,26.64,0l15-15a19,19,0,0,1,20.71-4l.24.1a18.92,18.92,0,0,1,11.77,17.46v21.27A18.84,18.84,0,0,0,171.11,502h41.37a18.84,18.84,0,0,0,18.84-18.84V461.89a18.92,18.92,0,0,1,11.77-17.46l.24-.1a19,19,0,0,1,20.71,4l15,15a18.83,18.83,0,0,0,26.64,0L335,434.13a18.83,18.83,0,0,0,0-26.64l-15-15a19,19,0,0,1-4-20.71l.1-.24a18.92,18.92,0,0,1,17.46-11.77h21.27A18.84,18.84,0,0,0,373.59,340.89Z"
                    />

                    <circle class="cls-1" cx="191.8" cy="320.2" r="74.8" />

                    <path
                      class="cls-1"
                      d="M207.45,138.41V138a15,15,0,0,1,15-15h16.9a15,15,0,0,0,13.88-9.35c0-.06.05-.13.08-.19A15.06,15.06,0,0,0,250.09,97l-12-11.94a15,15,0,0,1,0-21.17l23.24-23.24a15,15,0,0,1,21.16,0l11.95,12a15.07,15.07,0,0,0,16.45,3.18l.19-.08a15,15,0,0,0,9.36-13.88V25a15,15,0,0,1,15-15h32.87a15,15,0,0,1,15,15v16.9a15,15,0,0,0,9.35,13.88l.18.08a15.09,15.09,0,0,0,16.46-3.18l12-12a15,15,0,0,1,21.16,0l23.24,23.24a15,15,0,0,1,0,21.17L453.68,97a15.05,15.05,0,0,0-3.17,16.46l.07.19A15,15,0,0,0,464.45,123h16.9a15,15,0,0,1,15,15v32.86a15,15,0,0,1-15,15h-16.9a15,15,0,0,0-13.87,9.36l-.07.18a15,15,0,0,0,3.17,16.46l11.95,11.95a15,15,0,0,1,0,21.16l-23.24,23.24a15,15,0,0,1-21.16,0l-12-11.95a15,15,0,0,0-16.46-3.18l-.18.07A15,15,0,0,0,383.29,267v16.9a15,15,0,0,1-9.77,14"
                    />

                    <circle class="cls-1" cx="351.88" cy="154.43" r="48.69" />
                  </g>
                </g>
              </svg>
              <span class="tab tab-whishlist block text-xs">Unknown</span>
            </a>
            <a
              href="/mobile"
              class="w-full focus:text-teal-500 hover:text-teal-500 justify-center inline-block text-center pt-2 pb-1"
            >
              <svg
                fill="/Mobile000000"
                class="inline-block mb-1"
                width="25"
                height="25"
                viewBox="0 0 19 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Account Settings</title>
                <path d="M9.6,3.32a3.86,3.86,0,1,0,3.86,3.85A3.85,3.85,0,0,0,9.6,3.32M16.35,11a.26.26,0,0,0-.25.21l-.18,1.27a4.63,4.63,0,0,0-.82.45l-1.2-.48a.3.3,0,0,0-.3.13l-1,1.66a.24.24,0,0,0,.06.31l1,.79a3.94,3.94,0,0,0,0,1l-1,.79a.23.23,0,0,0-.06.3l1,1.67c.06.13.19.13.3.13l1.2-.49a3.85,3.85,0,0,0,.82.46l.18,1.27a.24.24,0,0,0,.25.2h1.93a.24.24,0,0,0,.23-.2l.18-1.27a5,5,0,0,0,.81-.46l1.19.49c.12,0,.25,0,.32-.13l1-1.67a.23.23,0,0,0-.06-.3l-1-.79a4,4,0,0,0,0-.49,2.67,2.67,0,0,0,0-.48l1-.79a.25.25,0,0,0,.06-.31l-1-1.66c-.06-.13-.19-.13-.31-.13L19.5,13a4.07,4.07,0,0,0-.82-.45l-.18-1.27a.23.23,0,0,0-.22-.21H16.46M9.71,13C5.45,13,2,14.7,2,16.83v1.92h9.33a6.65,6.65,0,0,1,0-5.69A13.56,13.56,0,0,0,9.71,13m7.6,1.43a1.45,1.45,0,1,1,0,2.89,1.45,1.45,0,0,1,0-2.89Z" />
              </svg>
              <span class="tab tab-account block text-xs">Account</span>
            </a>
          </div>
        </footer>
    </body>
  );
};

export default Mobile;
