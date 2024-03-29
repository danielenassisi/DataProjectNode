import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export class AppNavbar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <LinkContainer exact to="/">
          <Navbar.Brand>DataProject</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer exact to="/"><Nav.Link>Home</Nav.Link></LinkContainer>
            <LinkContainer exact to="/esperimento"><Nav.Link>Esperimento</Nav.Link></LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default AppNavbar