import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
        <div>
          <Navbar bg="secondary" variant={'dark'} expand="lg">
            <Container>
              <Navbar.Brand href="#home">NE Getaway</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link as={Link} href="">Home</Nav.Link>
                  <Nav.Link as={Link} href="/:id">Activities</Nav.Link>
                  <NavDropdown title="Add An" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Add A Trip
                    </NavDropdown.Item>
                    <NavDropdown.Item href="create">
                      Update A Trip
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Delete A Trip
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
    )
  }
} 
