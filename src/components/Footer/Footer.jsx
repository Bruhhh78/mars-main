import React from "react";
import "./Footer.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-list d-grid text-white">
            <div className="footer-item">
              <NavLink to="/" className="navbar-brand d-flex align-items-center">
                <span className="brand-shape d-inline-block text-white">M</span>
                <span className="brand-text fw-7">Mars Healthcare</span>
              </NavLink>
              <p className="text-white">
                We work with the Best Brands that includes Philips, Godrej
                Interio and Pheonix to provide you with the best medical
                facilities, equipments and Lab setup for your Hospital
              </p>
              <p className="text-white copyright-text">
                &copy; Mars Healthcare Fintech LTD 2024. All rights reserved.
              </p>
            </div>

            <div className="footer-item">
              <h3 className="footer-item-title">Company</h3>
              <ul className="footer-links">
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact Us</NavLink>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-item-title">Catalogs</h3>
              <ul className="footer-links">
                <li>
                  <a href="#">CT Scan Machine</a>
                </li>
                <li>
                  <a href="#">Diagnostic Machine</a>
                </li>
                <li>
                  <a href="#">Oxygen Concentrator</a>
                </li>
                <li>
                  <a href="#">Ultrasound Machine</a>
                </li>
                <li>
                  <a href="#">X-Ray</a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-item-title">Help</h3>
              <ul className="footer-links">
                <li>
                  <NavLink to="/contact">Help center</NavLink>
                </li>
                <li>
                  <NavLink to="/maintenance">Maintenance</NavLink>
                </li>
              </ul>
              <p className="text-white copyright-text">
                &copy; Mars Healthcare Fintech LTD 2024. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
