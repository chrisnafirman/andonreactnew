import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"

import ValidationQuality from "./components/Quality/ValidationQuality.jsx"



import AndonLine1 from "./components/Line1/AndonLine1.jsx";
import SmtLine1Controller from "./components/Line1/SMTLINE1(Controler).jsx";
import SmtBot from "./components/Line1/SmtBot.jsx";
import SmtBE from "./components/Line1/SmtBE.jsx";
import Inputsche from "./components/Production/Inputsche.jsx"
import ScheProd from "./components/Production/ScheProd.jsx"

import RequestGeneral from "./components/General/RequestGeneral.jsx"


import Others from "./components/Others/Others.jsx"


import Maintenance from "./components/Maintenance/Maintenance.jsx"



import Leader from "./components/Leader/Leader.jsx"



import ValidationLeader from "./components/Leader/ValidationLeader.jsx"


import UserMobile from "./components/User/UserMobile.jsx"
import UserSMTTop from "./components/User/SmtTop.jsx"
import UserSMTBot from "./components/User/SmtBot.jsx"
import UserHome from "./components/User/Home.jsx"


// QR Top

import QROperatorTop from "./components/QR/QRTop/QROperatorTOP.jsx"
import QRLeaderTop from "./components/QR/QRTop/Leader/QRLeaderTOP.jsx"


import QRResponseRepairTopMTC from "./components/QR/QRTop/Maintenance/QRResponseRepairTOP.jsx"


import QRResponseRepairTopOTH from "./components/QR/QRTop/Others/QRResponseRepairTOP.jsx"


import QRReturnQualityTop from "./components/QR/QRTop/Quality/QRReturnQualityTOP.jsx"
import QRValidationQualityTop from "./components/QR/QRTop/Quality/QRValidationQualityTOP.jsx"

import QRReturnLeaderTop from "./components/QR/QRTop/Leader/QRReturnLeaderTOP.jsx"
import QRValidationLeaderTop from "./components/QR/QRTop/Leader/QRValidationLeaderTOP.jsx"



// 


// QR Bot

import QROperatorBot from "./components/QR/QRBot/QROperatorBOT.jsx"
import QRLeaderBot from "./components/QR/QRBot/Leader/QRLeaderBOT.jsx"



import QRResponseRepairBotMTC from "./components/QR/QRBot/Maintenance/QRResponseRepairBOT.jsx"
import QRResponseRepairBotOTH from "./components/QR/QRBot/Others/QRResponseRepairBOT.jsx"


import QRReturnQualityBot from "./components/QR/QRBot/Quality/QRReturnQualityBOT.jsx"
import QRValidationQualityBot from "./components/QR/QRBot/Quality/QRValidationQualityBOT.jsx"


import QRReturnLeaderBot from "./components/QR/QRBot/Leader/QRReturnLeaderBOT.jsx"
import QRValidationLeaderBot from "./components/QR/QRBot/Leader/QRValidationLeaderBOT.jsx"



// 

// QR Be

import QROperatorBe from "./components/QR/QRBe/QROperatorBE.jsx"
import QRLeaderBe from "./components/QR/QRBe/Leader/QRLeaderBE.jsx"


import QRResponseRepairBeMTC from "./components/QR/QRBe/Maintenance/QRResponseRepairBE.jsx"
import QRResponseRepairBeOTH from "./components/QR/QRBe/Others/QRResponseRepairBE.jsx"


import QRReturnQualityBe from "./components/QR/QRBe/Quality/QRReturnQualityBE.jsx"
import QRValidationQualityBe from "./components/QR/QRBe/Quality/QRValidationQualityBE.jsx"

import QRReturnLeaderBe from "./components/QR/QRBe/Leader/QRReturnLeaderBE.jsx"
import QRValidationLeaderBe from "./components/QR/QRBe/Leader/QRValidationLeaderBE.jsx"


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

        <Route path="SMTLine1Controller" element={<SmtLine1Controller />} />
        <Route path="SmtBot" element={<SmtBot />} />
        <Route path="SmtBE" element={<SmtBE />} />

        <Route path="Inputschedule" element={<Inputsche />} />
        <Route path="ScheduleProduction" element={<ScheProd />} />

        <Route path="UserMobile" element={<BP />} />




        <Route path="ValidationQuality" element={<ValidationQuality />} />


        <Route path="Maintenance" element={<Maintenance />} />



        <Route path="Others" element={<Others />} />


        <Route path="ValidationLeader" element={<ValidationLeader />} />



        {/* QR Top*/}
        <Route path="QRLeaderTop" element={<QRLeaderTop />} />

        <Route path="QROperatorTop" element={<QROperatorTop />} />



        <Route path="QRResponseRepairTopMTC" element={<QRResponseRepairTopMTC />} />

        <Route path="QRResponseRepairTopOTH" element={<QRResponseRepairTopOTH />} />




        <Route path="QRReturnQualityTop" element={<QRReturnQualityTop />} />
        <Route path="QRValidationQualityTop" element={<QRValidationQualityTop />} />

        <Route path="QRReturnLeaderTop" element={<QRReturnLeaderTop />} />
        <Route path="QRValidationLeaderTop" element={<QRValidationLeaderTop />} />

        {/*  */}

        {/* QR Bot*/}

        <Route path="QRLeaderBot" element={<QRLeaderBot />} />

        <Route path="QROperatorBot" element={<QROperatorBot />} />



        <Route path="QRResponseRepairBotMTC" element={<QRResponseRepairBotMTC />} />

        <Route path="QRResponseRepairBotOTH" element={<QRResponseRepairBotOTH />} />




        <Route path="QRReturnQualityBot" element={<QRReturnQualityBot />} />
        <Route path="QRValidationQualityBot" element={<QRValidationQualityBot />} />

        <Route path="QRReturnLeaderBot" element={<QRReturnLeaderBot />} />
        <Route path="QRValidationLeaderBot" element={<QRValidationLeaderBot />} />


        {/*  */}


        {/* QR Be*/}

        <Route path="QRLeaderBe" element={<QRLeaderBe />} />

        <Route path="QROperatorBe" element={<QROperatorBe />} />



        <Route path="QRResponseRepairBeMTC" element={<QRResponseRepairBeMTC />} />

        <Route path="QRResponseRepairBeOTH" element={<QRResponseRepairBeOTH />} />




        <Route path="QRReturnQualityBe" element={<QRReturnQualityBe />} />
        <Route path="QRValidationQualityBe" element={<QRValidationQualityBe />} />


        <Route path="QRReturnLeaderBe" element={<QRReturnLeaderBe />} />
        <Route path="QRValidationLeaderBe" element={<QRValidationLeaderBe />} />


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
