import React from 'react'
import NavBarBicho from './NavBarBicho'
import SuggestionsBicho from './SuggestionsBicho.js';
import TransferData from './TransferData'
import Container from 'react-bootstrap/Container';
import MenuBicho from './MenuBicho.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function HomeBicho() {
  return (
    <div>
       <NavBarBicho/>
      <Routes>
        <Route path='/' element={<SuggestionsBicho/>}/>
        <Route path='menu' element={<MenuBicho/>}/>
        <Route path='datosTransferencia' element={<TransferData/>}/>
      </Routes>
    </div>
  )
}
