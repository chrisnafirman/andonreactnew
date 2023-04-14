import React from "react";
import { Routes, Route } from "react-router-dom";
import Realtime from "./components/Line1/RealTime.jsx";
import OperatorLine1 from "./components/Line1/OperatorLine1.jsx";
import GoodReport from "./components/Report/GoodReport.jsx";
import RepairReport from "./components/Report/RepairReport.jsx";
import InputDamage from "./components/Input/InputDamage.jsx"
import DamageReport from "./components/Report/DamageReport.jsx"
import AllReport from "./components/Report/AllReport.jsx"
import Login from "./components/Maintenance/Login.jsx"
import Leader from "./components/Leader/RealTimeLeader.jsx"
import Home from "./components/Home.jsx"
import BP from "./components/Broken/BrokenPage.jsx"
import Mobile from "./components/Mobile/Mobile.jsx"
import Line from "./components/Line.jsx"
import Line1 from "./components/Line1/Line1.jsx"
import PPIC from "./components/Ppic/Ppic.jsx"
import RequestPpic from "./components/Ppic/RequestPpic.jsx"
import ReturnPpic from "./components/Ppic/ReturnPpic.jsx"
import PURCHASING from "./components/Purchasing/Purchasing.jsx"
import RequestPurchasing from "./components/Purchasing/RequestPurchasing.jsx"
import ReturnPurchasing from "./components/Purchasing/ReturnPurchasing.jsx"
import QualityA from "./components/QualityA/QualityA.jsx"
import RequestQualityA from "./components/QualityA/RequestQualityA.jsx"
import ValidationQualityA from "./components/QualityA/ValidationQualityA.jsx"
import QualityC from "./components/QualityC/QualityC.jsx"
import RequestQualityC from "./components/QualityC/RequestQualityC.jsx"
import ValidationQualityC from "./components/QualityC/ValidationQualityC.jsx"


function App() {
  return (
    <>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/AndonLine1" element={<Realtime/>}/>
        <Route path="/GoodReport" element={<GoodReport/>}/>
        <Route path="/RepairReport" element={<RepairReport/>}/>
        <Route path="/InputDamage" element={<InputDamage/>}/>
        <Route path="/DamageReport" element={<DamageReport/>}/>
        <Route path="/LoginMaintenance" element={<Login/>}/>
        <Route path="/Mobile" element={<Mobile/>}/>
        <Route path="/OperatorLine1" element={<OperatorLine1/>}/>
        <Route path="/Leader" element={<Leader/>}/>
        <Route path="/--" element={<BP/>}/>
        <Route path="Line" element={<Line/>}/>
        <Route path="Line1" element={<Line1/>}/>
        <Route path="PPIC" element={<PPIC/>}/>
        <Route path="RequestPPIC" element={<RequestPpic/>}/>
        <Route path="ReturnPPIC" element={<ReturnPpic/>}/>
        <Route path="PURCHASING" element={<PURCHASING/>}/>
        <Route path="RequestPurchasing" element={<RequestPurchasing/>}/>
        <Route path="ReturnPurchasing" element={<ReturnPurchasing/>}/>
        <Route path="AllReport" element={<AllReport/>}/>
        <Route path="QualityA" element={<QualityA/>}/>
        <Route path="RequestQA" element={<RequestQualityA/>}/>
        <Route path="ValidationQA" element={<ValidationQualityA/>}/>
        <Route path="QualityC" element={<QualityC/>}/>
        <Route path="RequestQC" element={<RequestQualityC/>}/>
        <Route path="ValidationQC" element={<ValidationQualityC/>}/>
      </Routes>
    </>
  );
}

export default App;
