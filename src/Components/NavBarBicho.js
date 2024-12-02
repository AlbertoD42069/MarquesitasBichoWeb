import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextStatics } from '../Resources/TextStatics'
import { Link } from "react-router-dom";



export default function NavBarBicho() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>{TextStatics.title}</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href='/'>{TextStatics.suggestions}</Nav.Link>
            <Nav.Link href='menu'>{TextStatics.menu}</Nav.Link>
            <Nav.Link href='datosTransferencia'>{TextStatics.transferData}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </> 
  )
}
