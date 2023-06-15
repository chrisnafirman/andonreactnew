import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Maintenance/Login.jsx"
import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"
import PPIC from "./components/Ppic/Ppic.jsx"
import RequestPpic from "./components/Ppic/RequestPpic.jsx"
import ReturnPpic from "./components/Ppic/ReturnPpic.jsx"
import RequestPurchasing from "./components/Purchasing/RequestPurchasing.jsx"
import ReturnPurchasing from "./components/Purchasing/ReturnPurchasing.jsx"
import RequestQualityA from "./components/QualityA/RequestQualityA.jsx"
import ValidationQualityA from "./components/QualityA/ValidationQualityA.jsx"


import AndonLine1 from "./components/Line1/AndonLine1.jsx";
import SmtTop from "./components/Line1/SmtTop.jsx";
import SmtBot from "./components/Line1/SmtBot.jsx";
import SmtBE from "./components/Line1/SmtBE.jsx";
import Inputsche from "./components/Leader/Inputsche.jsx"
import ScheProd from "./components/Leader/ScheProd.jsx"

import RequestNetwork from "./components/Network/RequestNetwork.jsx"


import RequestMaintenance from "./components/Maintenance/RequestMaintenance.jsx"
import ReturnMaintenance from "./components/Maintenance/ReturnMaintenance.jsx"


import EM from "./components/EMaintenance.jsx"

function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/AndonLine1" element={<AndonLine1/>}/>
        <Route path="/LoginMaintenance" element={<Login/>}/>
        <Route path="/--" element={<BP/>}/>

        <Route path="Line" element={<Line/>}/>
        <Route path="Line1" element={<Line1/>}/>

        <Route path="PPIC" element={<PPIC/>}/>
        <Route path="RequestPPIC" element={<RequestPpic/>}/>
        <Route path="ReturnPPIC" element={<ReturnPpic/>}/>

        <Route path="RequestPurchasing" element={<RequestPurchasing/>}/>
        <Route path="ReturnPurchasing" element={<ReturnPurchasing/>}/>


        <Route path="RequestQA" element={<RequestQualityA/>}/>
        <Route path="ValidationQA" element={<ValidationQualityA/>}/>


                
        <Route path="RequestNetwork" element={<RequestNetwork/>}/>
        <Route path="RequestMaintenance" element={<RequestMaintenance/>}/>
        <Route path="ReturnMaintenance" element={<ReturnMaintenance/>}/>
      

        <Route path="SmtTop" element={<SmtTop/>}/>
        <Route path="SmtBot" element={<SmtBot/>}/>
        <Route path="SmtBE" element={<SmtBE/>}/>

        <Route path="Inputsche" element={<Inputsche/>}/>
        <Route path="ScheProd" element={<ScheProd/>}/>

        <Route path="E" element={<EM/>}/>


        
      </Routes>
    </>
  );
}

export default App;
