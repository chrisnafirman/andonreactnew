import React, { useState, useEffect } from "react";
import { db } from "./../../Firebase.js";
const HeaderStatus = () => {
    const [StatusLine1, setStatusLine1] = useState("");
    const [StatusLine2, setStatusLine2] = useState("");

    //  fungsi mengambil data dari firebase
    useEffect(() => {
        const ref3 = db.ref("StatusLine/SMTLine1");
        ref3.on("value", (snapshot) => {
            const data = snapshot.val();
            setStatusLine1(data);
        });


        const ref0 = db.ref("StatusLine/SMTLine2");
        ref0.on("value", (snapshot) => {
            const data = snapshot.val();
            setStatusLine2(data);
        });
        return () => { };
    }, []);


    return (
        <header class="bg-white shadow mb-3">
            <div class="mx-auto max-w-7xl px-4">
                <div>
                    <div class="flex items-center">
                        <h1 class="text-xs lg:text-xl font-sans tracking-tight text-gray-900">
                            | STATUS LINE |
                        </h1>
                        <h1 class="text-xl font-sans tracking-tight ml-4">
                            <span class="text-black">SMT LINE 1:</span>
                            <span
                                class="ml-4"
                                style={{
                                    color: StatusLine1 === "Running" ? "green" : "red",
                                }}
                            >
                                {StatusLine1}
                            </span>
                            <span className="ml-4">|</span>
                        </h1>
                        <h1 class="text-xl font-sans tracking-tight ml-4">
                            <span class="text-black">SMT LINE 2:</span>
                            <span
                                class="ml-4"
                                style={{
                                    color: StatusLine2 === "Running" ? "green" : "red",
                                }}
                            >
                                {StatusLine2}
                            </span>
                            <span className="ml-4">|</span>
                        </h1>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderStatus