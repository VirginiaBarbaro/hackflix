import React from "react";
import { Link } from "react-router-dom";
import "../movie.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {

  return (
    <Navbar expand="lg"className="navbar-header">
      <Container className="general-container">
          <Navbar.Brand>
            {" "}
            <h5 className="hackflix-navbar mt-2">HACKFLIX</h5>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-item-center">
              <Nav.Link className="nav-link">
                <ul className="navbar-nav list-unstyled d-flex justify-content-end">
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
                      About project
                    </Link>
                  </li>
                  <li className="nav-item home-list">
                    <Link to="/contact" className="home" aria-current="page">
                      Contact
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
