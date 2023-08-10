import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"



import RequestQualityA from "./components/QualityA/RequestQualityA.jsx"
import ValidationQualityA from "./components/QualityA/ValidationQualityA.jsx"

import RequestQualityC from "./components/QualityC/RequestQualityC.jsx"
import ValidationQualityC from "./components/QualityC/ValidationQualityC.jsx"

import AndonLine1 from "./components/Line1/AndonLine1.jsx";
import SmtTop from "./components/Line1/SmtTop.jsx";
import SmtBot from "./components/Line1/SmtBot.jsx";
import SmtBE from "./components/Line1/SmtBE.jsx";
import Inputsche from "./components/Production/Inputsche.jsx"
import ScheProd from "./components/Production/ScheProd.jsx"

import RequestGeneral from "./components/General/RequestGeneral.jsx"


import RequestOthers from "./components/Others/RequestOthers.jsx"

import RequestMaintenance from "./components/Maintenance/RequestMaintenance.jsx"
import ReturnMaintenance from "./components/Maintenance/ReturnMaintenance.jsx"


import RequestLeader from "./components/Leader/RequestLeader.jsx"
import ReturnLeader from "./components/Leader/ReturnLeader.jsx"





import UserMobile from "./components/User/UserMobile.jsx"

import QROperator from "./components/QR/QROperator.jsx"
import QRLeader from "./components/QR/QRLeaderTOP.jsx"
import QRResponseTop from "./components/QR/QRResponsesTop.jsx"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/AndonLine1" element={<AndonLine1/>}/>
  
        <Route path="/--" element={<BP/>}/>

        <Route path="Line" element={<Line/>}/>
        <Route path="Line1" element={<Line1/>}/>




        <Route path="RequestQA" element={<RequestQualityA/>}/>
        <Route path="ValidationQA" element={<ValidationQualityA/>}/>

        <Route path="RequestQC" element={<RequestQualityC/>}/>
        <Route path="ValidationQC" element={<ValidationQualityC/>}/>
                
        <Route path="RequestGeneral" element={<RequestGeneral/>}/>

        <Route path="RequestOthers" element={<RequestOthers/>}/>


        <Route path="RequestMaintenance" element={<RequestMaintenance/>}/>
        <Route path="ReturnMaintenance" element={<ReturnMaintenance/>}/>

        <Route path="RequestLeader" element={<RequestLeader/>}/>
        <Route path="ReturnLeader" element={<ReturnLeader/>}/>
      

        <Route path="SmtTop" element={<SmtTop/>}/>
        <Route path="SmtBot" element={<SmtBot/>}/>
        <Route path="SmtBE" element={<SmtBE/>}/>

        <Route path="Inputsche" element={<Inputsche/>}/>
        <Route path="ScheProd" element={<ScheProd/>}/>

        <Route path="UserMobile" element={<UserMobile/>}/>

        <Route path="QRLeader" element={<QRLeader/>}/>

        <Route path="QROperator" element={<QROperator/>}/>

        <Route path="QRResponseTop" element={<QRResponseTop/>}/>
        
      </Routes>
    </>
  );
}

export default App;
