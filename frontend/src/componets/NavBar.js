import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap';
import '../App.css';

const NavBar = () => {
    return (
        <Navbar className="NavBarCustom" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Cooking-With-Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#breakfast">Breakfast</Nav.Link>
                        <Nav.Link href="#lunch">Lunch</Nav.Link>
                        <Nav.Link href="#dinner">Dinner</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <FormControl 
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav>
                        <Nav.Link href="#login">
                            <Button variant="outline-primary" className="ms-2">Login</Button>
                        </Nav.Link>
                        <Nav.Link href="#signup">
                            <Button variant="primary" className="ms-2">Sign Up</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;