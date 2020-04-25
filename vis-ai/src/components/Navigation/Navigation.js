import React from 'react';
import { Button, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
        <Navbar>
            <Navbar.Brand href="/">Vis-AI</Navbar.Brand>
            <Nav.Link href="/">Create</Nav.Link>
            <Nav.Link href="/Train">Train</Nav.Link>
            <Nav.Link href="/Metrics">Metrics</Nav.Link>
            <Nav.Link href="/Predict">Predict</Nav.Link>
            <Nav.Link href="/ProjectSummary">Project Summary</Nav.Link>
        </Navbar>
    );
}
 
export default Navigation;