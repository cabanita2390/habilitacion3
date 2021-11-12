import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

function Navbars() {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Container>
            <button className="btn btn-primary">Login</button>
        </Navbar>
    )
}

export default Navbars
