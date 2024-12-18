import React from "react";
import "./Footer.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";
import FooterBrochure from "../Brochures/FooterBrochure";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-list d-grid text-white">
            <div className="footer-item">
              <a href="#" className="navbar-brand d-flex align-items-center">
               <img src="/mars-main-logo.png"  alt="Mars-Logo"
                  className="h-28 w-auto" />
              </a>
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

            <FooterBrochure/>

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
