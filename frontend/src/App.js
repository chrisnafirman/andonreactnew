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
import Inputsche from "./components/Leader/Inputsche.jsx"
import ScheProd from "./components/Leader/ScheProd.jsx"

import RequestGeneral from "./components/General/RequestGeneral.jsx"


import RequestOthers from "./components/Others/RequestOthers.jsx"

import RequestMaintenance from "./components/Maintenance/RequestMaintenance.jsx"
import ReturnMaintenance from "./components/Maintenance/ReturnMaintenance.jsx"


import EM from "./components/EMaintenance.jsx"


import Tickets from "./components/Tickets.jsx"

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
      

        <Route path="SmtTop" element={<SmtTop/>}/>
        <Route path="SmtBot" element={<SmtBot/>}/>
        <Route path="SmtBE" element={<SmtBE/>}/>

        <Route path="Inputsche" element={<Inputsche/>}/>
        <Route path="ScheProd" element={<ScheProd/>}/>

        <Route path="E" element={<EM/>}/>

        <Route path="Tickets" element={<Tickets/>}/>
        
      </Routes>
    </>
  );
}

export default App;
