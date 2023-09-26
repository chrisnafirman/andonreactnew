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
import Inputsche from "./components/ScheduleProduction/Inputsche.jsx"
import ScheProd from "./components/ScheduleProduction/ScheProd.jsx"

import RequestGeneral from "./components/General/RequestGeneral.jsx"


import Others from "./components/Others/Others.jsx"


import Maintenance from "./components/Maintenance/Maintenance.jsx"



import Leader from "./components/Production/Leader.jsx"


import ReportINC from "./components/Report/ReportINC.jsx"
import ReportRTN from "./components/Report/ReportRTN.jsx"
import ReportREQ from "./components/Report/ReportREQ.jsx"

import ValidationProduction from "./components/Production/ValidationProduction.jsx"


import UserMobile from "./components/User/UserMobile.jsx"
import UserSMTTop from "./components/User/SmtTop.jsx"
import UserSMTBot from "./components/User/SmtBot.jsx"
import UserSMTLine1 from "./components/User/SMTLine1.jsx"

import UserSMTBe from "./components/User/SmtBe.jsx"
import UserHome from "./components/User/Home.jsx"


// QR Top

import QROperatorTop from "./components/QR/QRTop/QROperatorTOP.jsx"
import QRLeaderTop from "./components/QR/QRTop/Leader/QRLeaderTOP.jsx"


import QRResponseRepairTopMTC from "./components/QR/QRTop/Maintenance/QRResponseRepairTOP.jsx"


import QRResponseRepairTopOTH from "./components/QR/QRTop/Others/QRResponseRepairTOP.jsx"


import QRResponseQualityTop from "./components/QR/QRTop/Quality/QRResponseQualityTOP.jsx"


import QRResponseProductionTop from "./components/QR/QRTop/Production/QRResponseProductionTOP.jsx"





// 


// QR Bot

import QROperatorBot from "./components/QR/QRBot/QROperatorBOT.jsx"
import QRLeaderBot from "./components/QR/QRBot/Leader/QRLeaderBOT.jsx"



import QRResponseRepairBotMTC from "./components/QR/QRBot/Maintenance/QRResponseRepairBOT.jsx"
import QRResponseRepairBotOTH from "./components/QR/QRBot/Others/QRResponseRepairBOT.jsx"
import QRResponseQualityBot from "./components/QR/QRBot/Quality/QRResponseQualityBOT.jsx"
import QRResponseProductionBot from "./components/QR/QRBot/Production/QRResponseProductionBOT.jsx"



// 

// QR Be

import QROperatorBe from "./components/QR/QRBe/QROperatorBE.jsx"
import QRLeaderBe from "./components/QR/QRBe/Leader/QRLeaderBE.jsx"


import QRResponseRepairBeMTC from "./components/QR/QRBe/Maintenance/QRResponseRepairBE.jsx"
import QRResponseRepairBeOTH from "./components/QR/QRBe/Others/QRResponseRepairBE.jsx"
import QRResponseQualityBe from "./components/QR/QRBe/Quality/QRResponseQualityBE.jsx"
import QRResponseProductionBe from "./components/QR/QRBe/Production/QRResponseProductionBE.jsx"


// 

import PortalMaintenance from "./components/Portal/PortalMaintenance.jsx"
import PortalProduction from "./components/Portal/PortalProduction.jsx"
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


        <Route path="ReportINC" element={<ReportINC />} />
        <Route path="ReportRTN" element={<ReportRTN />} />
        <Route path="ReportREQ" element={<ReportREQ />} />

        <Route path="UserSMTTop" element={<UserSMTTop />} />
        <Route path="UserSMTBe" element={<UserSMTBe />} />
        <Route path="UserSMTBot" element={<UserSMTBot />} />
        <Route path="UserSMTLine1" element={<UserSMTLine1 />} />
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


        <Route path="ValidationProduction" element={<ValidationProduction />} />



        {/* QR Top*/}
        <Route path="QRLeaderTop" element={<QRLeaderTop />} />

        <Route path="QROperatorTop" element={<QROperatorTop />} />



        <Route path="QRResponseRepairTopMTC" element={<QRResponseRepairTopMTC />} />
        <Route path="QRResponseRepairTopOTH" element={<QRResponseRepairTopOTH />} />
        <Route path="QRResponseQualityTOP" element={<QRResponseQualityTop />} />
        <Route path="QRResponseProductionTOP" element={<QRResponseProductionTop />} />

        {/*  */}

        {/* QR Bot*/}

        <Route path="QRLeaderBot" element={<QRLeaderBot />} />

        <Route path="QROperatorBot" element={<QROperatorBot />} />



        <Route path="QRResponseRepairBotMTC" element={<QRResponseRepairBotMTC />} />
        <Route path="QRResponseRepairBotOTH" element={<QRResponseRepairBotOTH />} />
        <Route path="QRResponseQualityBOT" element={<QRResponseQualityBot />} />
        <Route path="QRResponseProductionBOT" element={<QRResponseProductionBot />} />




        {/*  */}


        {/* QR Be*/}

        <Route path="QRLeaderBe" element={<QRLeaderBe />} />

        <Route path="QROperatorBe" element={<QROperatorBe />} />



        <Route path="QRResponseRepairBeMTC" element={<QRResponseRepairBeMTC />} />
        <Route path="QRResponseRepairBeOTH" element={<QRResponseRepairBeOTH />} />
        <Route path="QRResponseQualityBE" element={<QRResponseQualityBe />} />
        <Route path="QRResponseProductionBE" element={<QRResponseProductionBe />} />



        {/*  */}

        <Route path="PortalMaintenance" element={<PortalMaintenance />} />
        <Route path="PortalProduction" element={<PortalProduction />} />
        <Route path="PortalQuality" element={<PortalQuality />} />
        <Route path="PortalOthers" element={<PortalOthers />} />

      </Routes>
    </>
  );
}

export default App;
