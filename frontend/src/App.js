import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"

import Quality from "./components/Quality/Quality.jsx"
import ValidationQuality from "./components/Quality/ValidationQuality.jsx"


import AndonLine1 from "./components/Line1/AndonLine1.jsx";
import SmtTop from "./components/Line1/SmtTop.jsx";
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
import ReturnLeader from "./components/Leader/ReturnLeader.jsx"


import ProductionLeader from "./components/ProductionLeader/ProductionLeader.jsx"


import UserMobile from "./components/User/UserMobile.jsx"
import UserSMTTop from "./components/User/SmtTop.jsx"

import QROperator from "./components/QR/QRTop/QROperatorTOP.jsx"
import QRLeaderTop from "./components/QR/QRTop/QRLeaderTOP.jsx"

import QRMaintenanceTop from "./components/QR/QRTop/MTC/QRReqValidationMTCTOP.jsx"
import QRReturnResponseMaintenanceTop from "./components/QR/QRTop/MTC/QRReturnResponseMTCTOP.jsx"
import QRResponseMaintenanceTop from "./components/QR/QRTop/MTC/QRResponseMTCTOP.jsx"

import QRReturnQualityTop from "./components/QR/QRTop/Quality/QRReturnQualityTOP.jsx"
import QRValidationQualityTOP from "./components/QR/QRTop/Quality/QRValidationQualityTOP.jsx"

import QRReturnProductionLeaderTop from "./components/QR/QRTop/ProductionLeader/QRReturnPLTOP.jsx"
import QRValidationProductionLeaderTOP from "./components/QR/QRTop/ProductionLeader/QRValidationPLTOP.jsx"

import QRReturnResponseOthersTop from "./components/QR/QRTop/Others/QRReturnResponseOTHERSTOP.jsx"
import QRResponseOthersTop from "./components/QR/QRTop/Others/QRResponseOTHERSTOP.jsx"

import PortalMaintenance from "./components/Portal/PortalMaintenance.jsx"
import PortalLeader from "./components/Portal/PortalLeader.jsx"
import PortalQuality from "./components/Portal/PortalQuality.jsx"
import PortalOthers from "./components/Portal/PortalOthers.jsx"
import PortalProductionLeader from "./components/Portal/PortalProductionLeader.jsx"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/AndonLine1" element={<AndonLine1/>}/>
  
        <Route path="/--" element={<BP/>}/>

        <Route path="Line" element={<Line/>}/>
        <Route path="Line1" element={<Line1/>}/>
      


                
        <Route path="RequestGeneral" element={<RequestGeneral/>}/>



        <Route path="Leader" element={<Leader/>}/>
        <Route path="ReturnLeader" element={<ReturnLeader/>}/>
      
     

        <Route path="UserSMTTop" element={<UserSMTTop/>}/>

        <Route path="SmtTop" element={<SmtTop/>}/>
        <Route path="SmtBot" element={<SmtBot/>}/>
        <Route path="SmtBE" element={<SmtBE/>}/>

        <Route path="Inputsche" element={<Inputsche/>}/>
        <Route path="ScheProd" element={<ScheProd/>}/>

        <Route path="UserMobile" element={<UserMobile/>}/>



        <Route path="Leader" element={<Leader/>}/>
        <Route path="ReturnLeader" element={<ReturnLeader/>}/>

        <Route path="Quality" element={<Quality/>}/>
        <Route path="ValidationQuality" element={<ValidationQuality/>}/>
    
        <Route path="Maintenance" element={<Maintenance/>}/>
        <Route path="ReturnMaintenance" element={<ReturnMaintenance/>}/>


        <Route path="Others" element={<Others/>}/>
        <Route path="ReturnOthers" element={<ReturnOthers/>}/>


        <Route path="ProductionLeader" element={<ProductionLeader/>}/>



        {/* QR */}

        <Route path="QRLeaderTop" element={<QRLeaderTop/>}/>

        <Route path="QROperatorTop" element={<QROperator/>}/>

        <Route path="QRMaintenanceTop" element={<QRMaintenanceTop/>}/>
        <Route path="QRResponseMaintenanceTop" element={<QRResponseMaintenanceTop/>}/>
        <Route path="QRReturnResponseMaintenanceTop" element={<QRReturnResponseMaintenanceTop/>}/>

        <Route path="QRReturnQualityTop" element={<QRReturnQualityTop/>}/>
        <Route path="QRValidationQualityTop" element={<QRValidationQualityTOP/>}/>

        <Route path="QRReturnProductionLeaderTop" element={<QRReturnProductionLeaderTop/>}/>
        <Route path="QRValidationProductionLeaderTop" element={<QRValidationProductionLeaderTOP/>}/>

        <Route path="QRResponseOthersTop" element={<QRResponseOthersTop/>}/>
        <Route path="QRReturnResponseOthersTop" element={<QRReturnResponseOthersTop/>}/>
        {/*  */}

        <Route path="PortalMaintenance" element={<PortalMaintenance/>}/>
        <Route path="PortalLeader" element={<PortalLeader/>}/>
        <Route path="PortalQuality" element={<PortalQuality/>}/>
        <Route path="PortalOthers" element={<PortalOthers/>}/>
        <Route path="PortalProductionLeader" element={<PortalProductionLeader/>}/>
      </Routes>
    </>
  );
}

export default App;
