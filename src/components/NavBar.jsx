import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, Container} from 'react-bootstrap';
export default function()
{
    return( 
        <div className="navDiv">
                <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Izhar</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">My Works</Nav.Link>
                        <Nav.Link href="#link">Credits</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    
        
    )
}