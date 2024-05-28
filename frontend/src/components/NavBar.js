import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Button, Form, FormControl } from 'react-bootstrap';
import '../App.css';

const NavBar = () => {
    return (
        <Navbar className="NavBarCustom" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href='/'>Cooking-With-Code</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/american">American</Nav.Link>
                        <Nav.Link href="/greek">Greek</Nav.Link>
                        <Nav.Link href="/chinese">Chinese</Nav.Link>
                        <Nav.Link href="/mexican">Mexican</Nav.Link>
                        <NavDropdown title='More' id='nav-dropdown-more'>
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;