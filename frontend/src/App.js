import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"

import Quality from "./components/Quality/Quality.jsx"
import ValidationQuality from "./components/Quality/ValidationQuality.jsx"


import AndonLine1 from "./components/Line1/AndonLine1.jsx";
import SmtTop from "./components/Line1/SmtTop(Controler).jsx";
import SmtBot from "./components/Line1/SmtBot.jsx";
import SmtBE from "./components/Line1/SmtBE.jsx";
import Inputsche from "./components/Production/Inputsche.jsx"
import ScheProd from "./components/Production/ScheProd.jsx"

import RequestGeneral from "./components/General/RequestGeneral.jsx"


import Others from "./components/Others/Others.jsx"
import ReturnOthers from "./components/Others/ReturnOthers.jsx"

import Maintenance from "./components/Maintenance/Maintenance.jsx"
import ReturnMaintenance from "./components/Maintenance/ReturnMaintenance.jsx"


import Leader from "./components/Leader/Leader.jsx"



import ValidationLeader from "./components/Leader/ValidationLeader.jsx"


import UserMobile from "./components/User/UserMobile.jsx"
import UserSMTTop from "./components/User/SmtTop.jsx"
import UserSMTBot from "./components/User/SmtBot.jsx"
import UserHome from "./components/User/Home.jsx"


// QR Top

import QROperatorTop from "./components/QR/QRTop/QROperatorTOP.jsx"
import QRLeaderTop from "./components/QR/QRTop/Leader/QRLeaderTOP.jsx"


import QRReturnResponseMaintenanceTop from "./components/QR/QRTop/MTC/QRReturnResponseMTCTOP.jsx"
import QRResponseMaintenanceTop from "./components/QR/QRTop/MTC/QRResponseMTCTOP.jsx"

import QRReturnQualityTop from "./components/QR/QRTop/Quality/QRReturnQualityTOP.jsx"
import QRValidationQualityTOP from "./components/QR/QRTop/Quality/QRValidationQualityTOP.jsx"

import QRReturnLeaderTop from "./components/QR/QRTop/Leader/QRReturnLeaderTOP.jsx"
import QRValidationLeaderTOP from "./components/QR/QRTop/Leader/QRValidationLeaderTOP.jsx"

import QRReturnResponseOthersTop from "./components/QR/QRTop/Others/QRReturnResponseOTHERSTOP.jsx"
import QRResponseOthersTop from "./components/QR/QRTop/Others/QRResponseOTHERSTOP.jsx"
// 


// QR Bot

import QROperatorBot from "./components/QR/QRBot/QROperatorBot.jsx"
import QRLeaderBot from "./components/QR/QRBot/Leader/QRLeaderBot.jsx"


import QRReturnResponseMaintenanceBot from "./components/QR/QRBot/MTC/QRReturnResponseMTCBot.jsx"
import QRResponseMaintenanceBot from "./components/QR/QRBot/MTC/QRResponseMTCBot.jsx"

import QRReturnQualityBot from "./components/QR/QRBot/Quality/QRReturnQualityBot.jsx"
import QRValidationQualityBot from "./components/QR/QRBot/Quality/QRValidationQualityBot.jsx"

import QRReturnLeaderBot from "./components/QR/QRBot/Leader/QRReturnLeaderBot.jsx"
import QRValidationLeaderBot from "./components/QR/QRBot/Leader/QRValidationLeaderBot.jsx"

import QRReturnResponseOthersBot from "./components/QR/QRBot/Others/QRReturnResponseOTHERSBot.jsx"
import QRResponseOthersBot from "./components/QR/QRBot/Others/QRResponseOTHERSBot.jsx"
// 

import PortalMaintenance from "./components/Portal/PortalMaintenance.jsx"
import PortalLeader from "./components/Portal/PortalLeader.jsx"
import PortalQuality from "./components/Portal/PortalQuality.jsx"
import PortalOthers from "./components/Portal/PortalOthers.jsx"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AndonLine1" element={<AndonLine1 />} />

        <Route path="/--" element={<BP />} />

        <Route path="Line" element={<Line />} />
        <Route path="Line1" element={<Line1 />} />




        <Route path="RequestGeneral" element={<BP />} />



        <Route path="Leader" element={<Leader />} />




        <Route path="UserSMTTop" element={<UserSMTTop />} />
        <Route path="UserSMTBot" element={<UserSMTBot />} />
        <Route path="UserHome" element={<UserHome />} />

        <Route path="SmtTop" element={<SmtTop />} />
        <Route path="SmtBot" element={<SmtBot />} />
        <Route path="SmtBE" element={<SmtBE />} />

        <Route path="Inputsche" element={<Inputsche />} />
        <Route path="ScheProd" element={<ScheProd />} />

        <Route path="UserMobile" element={<BP />} />




        <Route path="Quality" element={<Quality />} />
        <Route path="ValidationQuality" element={<BP />} />

        <Route path="Maintenance" element={<Maintenance />} />
        <Route path="ReturnMaintenance" element={<ReturnMaintenance />} />


        <Route path="Others" element={<Others />} />
        <Route path="ReturnOthers" element={<ReturnOthers />} />


        <Route path="ValidationLeader" element={<ValidationLeader />} />



        {/* QR Top*/}

        <Route path="QRLeaderTop" element={<QRLeaderTop />} />

        <Route path="QROperatorTop" element={<QROperatorTop />} />

        <Route path="QRResponseMaintenanceTop" element={<QRResponseMaintenanceTop />} />
        <Route path="QRReturnResponseMaintenanceTop" element={<QRReturnResponseMaintenanceTop />} />

        <Route path="QRReturnQualityTop" element={<QRReturnQualityTop />} />
        <Route path="QRValidationQualityTop" element={<QRValidationQualityTOP />} />

        <Route path="QRReturnLeaderTop" element={<QRReturnLeaderTop />} />
        <Route path="QRValidationLeaderTop" element={<QRValidationLeaderTOP />} />

        <Route path="QRResponseOthersTop" element={<QRResponseOthersTop />} />
        <Route path="QRReturnResponseOthersTop" element={<QRReturnResponseOthersTop />} />
        {/*  */}

        {/* QR Bot*/}

        <Route path="QRLeaderBot" element={<QRLeaderBot />} />

        <Route path="QROperatorBot" element={<QROperatorBot />} />

        <Route path="QRResponseMaintenanceBot" element={<QRResponseMaintenanceBot />} />
        <Route path="QRReturnResponseMaintenanceBot" element={<QRReturnResponseMaintenanceBot />} />

        <Route path="QRReturnQualityBot" element={<QRReturnQualityBot />} />
        <Route path="QRValidationQualityBot" element={<QRValidationQualityBot />} />

        <Route path="QRReturnLeaderBot" element={<QRReturnLeaderBot />} />
        <Route path="QRValidationLeaderBot" element={<QRValidationLeaderBot />} />

        <Route path="QRResponseOthersBot" element={<QRResponseOthersBot />} />
        <Route path="QRReturnResponseOthersBot" element={<QRReturnResponseOthersBot />} />
        {/*  */}

        <Route path="PortalMaintenance" element={<PortalMaintenance />} />
        <Route path="PortalLeader" element={<PortalLeader />} />
        <Route path="PortalQuality" element={<PortalQuality />} />
        <Route path="PortalOthers" element={<PortalOthers />} />

      </Routes>
    </>
  );
}

export default App;
