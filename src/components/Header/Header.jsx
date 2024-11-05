import React from "react";
import "./Header.css";
import "./Utilities.css"
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content d-flex justify-content-between align-items-center">
            <div className="brand-and-toggler d-flex align-items-center justify-content-between">
              <a href="#" className="navbar-brand d-flex align-items-center">
                <span className="brand-shape d-inline-block text-white">M</span>
                <span className="brand-text fw-7">Mars Healthcare</span>
              </a>
              <button type="button" className="d-none navbar-show-btn">
                <i className="fas fa-bars"></i>
              </button>
            </div>

            <div className="navbar-box">
              <button type="button" className="navbar-hide-btn">
                <i className="fas fa-times"></i>
              </button>

              <ul className="navbar-nav d-flex align-items-center">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link text-white nav-active text-nowrap"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white text-nowrap">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white text-nowrap">
                    Appointment
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white text-nowrap">
                    Clients
                  </a>
                </li>
                <li className="nav-item">
                  <NavLink to="/products" className="nav-link text-white text-nowrap">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link text-white text-nowrap">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
