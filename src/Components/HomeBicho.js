import React from 'react'
import NavBarBicho from './NavBarBicho'
import SuggestionsBicho from './SuggestionsBicho.js';
import TransferData from './TransferData'
import Container from 'react-bootstrap/Container';
import MenuBicho from './MenuBicho.js';


export default function HomeBicho() {
  return (
    <div>
      <NavBarBicho/>
      <SuggestionsBicho/>
      <MenuBicho/>
      <TransferData/>
    </div>
  )
}
