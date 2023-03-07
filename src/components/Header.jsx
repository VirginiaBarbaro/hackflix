import React from "react";
import { Link } from "react-router-dom";
import "../movie.css";
import Carousel from "./Carousel";

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
            <ul className="navbar-nav list-unstyled">
              <li className="nav-item home-list">
                <Link to="/" className="home" aria-current="page">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="hero-container row">
        <h5 className="header-h5">Filter by </h5>
      </div>
    </>
  );
}

export default Header;