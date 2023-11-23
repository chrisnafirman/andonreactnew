import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"

import ValidationQuality from "./components/Quality/ValidationQuality.jsx"




import SmtLine1Controller from "./components/Line1/SMTLINE1(Controler).jsx";

import Inputsche from "./components/ScheduleProduction/Inputsche.jsx"
import ScheProd from "./components/ScheduleProduction/ScheProd.jsx"



import Others from "./components/Others/Others.jsx"


import Maintenance from "./components/Maintenance/Maintenance.jsx"



import Leader from "./components/Production/Leader.jsx"


import ReportINC from "./components/Report/ReportINC.jsx"
import ReportRTN from "./components/Report/ReportRTN.jsx"
import ReportREQ from "./components/Report/ReportREQ.jsx"

import ValidationProduction from "./components/Production/ValidationProduction.jsx"


import UserSMTLine1 from "./components/User/SMTLine1.jsx"







import QROperator from "./components/QR/QRAndon/QROperator.jsx"
import QRLeader from "./components/QR/QRAndon/QRLeader.jsx"

import QRResponseRepairMTC from "./components/QR/QRAndon/Maintenance/QRResponseRepairMaintenance.jsx"
import QRResponseRepairOTH from "./components/QR/QRAndon/Others/QRResponseRepairOthers.jsx"
import QRResponseQuality from "./components/QR/QRAndon/Quality/QRResponseQuality.jsx"
import QRResponseProduction from "./components/QR/QRAndon/Production/QRResponseProduction.jsx"








import QRCHECKSHEET from "./components/QR/QRMaintenance/QRCHECKSHEET.jsx"


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


        <Route path="/--" element={<BP />} />

        <Route path="Line" element={<Line />} />
        <Route path="Line1" element={<Line1 />} />




        <Route path="RequestGeneral" element={<BP />} />



        <Route path="Leader" element={<Leader />} />


        <Route path="ReportINC" element={<ReportINC />} />
        <Route path="ReportRTN" element={<ReportRTN />} />
        <Route path="ReportREQ" element={<ReportREQ />} />




        <Route path="UserSMTLine1" element={<UserSMTLine1 />} />


        <Route path="SMTLine1Controller" element={<SmtLine1Controller />} />


        <Route path="Inputschedule" element={<Inputsche />} />
        <Route path="ScheduleProduction" element={<ScheProd />} />






        <Route path="ValidationQuality" element={<ValidationQuality />} />


        <Route path="Maintenance" element={<Maintenance />} />



        <Route path="Others" element={<Others />} />


        <Route path="ValidationProduction" element={<ValidationProduction />} />





        <Route path="QRLeader" element={<QRLeader />} />
        <Route path="QROperator" element={<QROperator />} />




        <Route path="QRResponseRepairMTC" element={<QRResponseRepairMTC />} />
        <Route path="QRResponseRepairOTH" element={<QRResponseRepairOTH />} />
        <Route path="QRResponseQuality" element={<QRResponseQuality />} />
        <Route path="QRResponseProduction" element={<QRResponseProduction />} />


 

      {/* QR MAINTENANCE  */}
        <Route path="QRCHECKSHEET" element={<QRCHECKSHEET />} />



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
