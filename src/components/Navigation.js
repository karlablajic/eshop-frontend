import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import { LinkContainer} from "react-router-bootstrap";
import './Navigation.css';

function Navigation () {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <LinkContainer to ="/">
                    <Navbar.Brand>EaseShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                           
                            <Nav.Link href="/login">Login</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-drpdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Antoher action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Another one</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                     </Navbar.Collapse>
            </Container>
            </Navbar>
    );
};
export default Navigation;