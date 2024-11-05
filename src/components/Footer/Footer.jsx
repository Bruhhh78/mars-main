import React from "react";
import "./Footer.css";
import "./Utilities.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-list d-grid text-white">
            <div className="footer-item">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <span className="brand-shape d-inline-block text-white">M</span>
                <span className="brand-text fw-7">Mars Healthcare</span>
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
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
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
                  <a href="#">Help center</a>
                </li>
                <li>
                  <a href="#">Contact support</a>
                </li>
                <li>
                  <a href="#">Maintenance</a>
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
