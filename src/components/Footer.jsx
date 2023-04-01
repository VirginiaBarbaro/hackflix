import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="row footer-container mx-auto">
        <div className="col-8">
          <div className="row">
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Our Story</li>
                <li>Media Center</li>
                <li>Ways to Watch</li>
                <li>Gift cards</li>
                <li>Cookie Preferences</li>
                <li>Speed Test</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Help Center</li>
                <li>Investor Relations</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
                <li>Comfort Guide</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="col-4">
              <ul className="list-unstyled footer-list">
                <li>Contact Us</li>
                <li>Careers</li>
                <li>Privacy Policy</li>
                <li>Do Not Sell My Information</li>
                <li>Terms and Conditions</li>
                <li>Only on Hackflix</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-4">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className="input-group d-flex justify-content-center mb-3">
              <Link to="/">
                <button
                  className="btn btn-outline-secondary footer-cta text-white"
                  type="button"
                  id="button-addon2"
                >
                  Catalogue
                </button>
              </Link>
            </div>
            <p className="mb-5 footer-text">
              Enjoy unlimited entertainment at Hackflix. Your go-to destination for the latest and
              greatest movies
            </p>
            <div>
              <i className="bi bi-instagram me-2 fs-5"></i>
              <i className="bi bi-twitter me-2 fs-5"></i>
              <i className="bi bi-facebook me-2 fs-5"></i>
              <i className="bi bi-pinterest me-2 fs-5"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
