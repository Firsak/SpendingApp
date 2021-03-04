import React from 'react'
import {Navbar, NavDropdown, Nav, Form, FormControl, Button, Container} from "react-bootstrap";

function Header (props) {
  return (
    <div>
      <header>
        <Navbar bg="light" expand="lg" collapseOnSelect>
          <Container>
            <Navbar.Brand href="/">Coin App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/"><i className="fas fa-home"></i> Home</Nav.Link>
                <Nav.Link href="/statistics"><i className="fas fa-cubes"></i> Statisctics</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </div>
  )
}

export default Header