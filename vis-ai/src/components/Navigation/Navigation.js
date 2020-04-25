import React from 'react';
import { Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Vis-AI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Create</Nav.Link>
                    <Nav.Link href="/Train">Train</Nav.Link>
                    <Nav.Link href="/Metrics">Metrics</Nav.Link>
                    <Nav.Link href="/Predict">Predict</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Navigation;