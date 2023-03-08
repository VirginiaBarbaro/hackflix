import React from "react";
import { Link } from "react-router-dom";
import "../movie.css";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg nav-header">
        <div className="container-fluid">
          <h5 className="hackflix-navbar mt-2">
            HackFlix
          </h5>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="ms-auto navbar-nav list-unstyled">
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
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
