import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextStatics } from '../Resources/TextStatics'


export default function NavBarBicho() {
  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{TextStatics.title}</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">{TextStatics.suggestions}</Nav.Link>
            <Nav.Link href="#features">{TextStatics.menu}</Nav.Link>
            <Nav.Link href="#pricing">{TextStatics.transferData}</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </> 
  )
}
