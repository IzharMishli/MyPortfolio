import React from "react";
import {Navbar, Nav, NavItem, NavDropdown, Container} from 'react-bootstrap';
import { Routes, Route, Link } from "react-router-dom";
export default function()
{
    return( 
        <div className="navDiv">
                <Navbar  expand="lg">
                <Container>
                    <Navbar.Brand ><Link to="/" className="nav-link-text">Izhar - Portfolio</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link ><Link to="/" className="nav-link-text">Home</Link></Nav.Link>
                        <Nav.Link >
                        <a className="nav-link-text" onClick={() => {
                        const anchor = document.querySelector('#work-section');
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })}}>
                            My Works
                        </a>
                        </Nav.Link>
                        <Nav.Link ><Link to="/credits" className="nav-link-text">Credits</Link></Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    
        
    )
}