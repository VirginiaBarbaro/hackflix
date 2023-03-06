import React from "react";
import "../movie.css";
import Carousel from "./Carousel";

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <h5 className="hackflix-navbar mt-2">
            HackFlix
          </h5>
          <button
            className="navbar-toggler"
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
                <a className="home" aria-current="page">
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="carousel mb-4">
        <Carousel />
      </div>
      <div className="hero-container row">
        <h5 className="header-h5">Filter by </h5>
      </div>
    </>
  );
}

export default Header;
