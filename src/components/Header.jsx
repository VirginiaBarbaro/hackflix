import React from "react";
import { Link } from "react-router-dom";
import "../movie.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar expand="lg" className="nav-header">
      <Container className="general-container">
          <Navbar.Brand>
            {" "}
            <h5 className="hackflix-navbar mt-2">HACKFLIX</h5>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
              <Nav.Link>
                <ul className="navbar-nav list-unstyled">
                  <li className="nav-item home-list">
                    <Link to="/" className="home" aria-current="page">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item home-list">
                    <Link to="/filtered-by-rating" className="home" aria-current="page">
                      Filter films
                    </Link>
                  </li>
                  <li className="nav-item home-list">
                    <Link to="/about-us" className="home" aria-current="page">
                      About us
                    </Link>
                  </li>
                  <li className="nav-item home-list">
                    <Link to="/contact" className="home" aria-current="page">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
            {/* <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
