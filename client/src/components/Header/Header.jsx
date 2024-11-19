import React from "react";
import "./Header.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";
// import ProfileMenu from "../ProfileMenu/ProfileMenu";

const Header = () => {
  // const { loginWithRedirect, isAuthenticated, user, logout } = useAuth0();
  // const {validateLogin} = useAuthCheck()

  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content d-flex justify-content-between align-items-center">
            <div className="brand-and-toggler d-flex align-items-center justify-content-between">
              <NavLink
                to="/"
                className="navbar-brand d-flex align-items-center"
              >
               <img src="/mars-main-logo.png"  alt="Mars-Logo"
                  className="h-28 w-auto" />
              </NavLink>
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
                  <NavLink
                    to="/products"
                    className="nav-link text-white text-nowrap"
                  >
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/brands"
                    className="nav-link text-white text-nowrap"
                  >
                    Brands
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/services"
                    className="nav-link text-white text-nowrap"
                  >
                    Services
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/about"
                    className="nav-link text-white text-nowrap"
                  >
                    About Us
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-link text-white text-nowrap"
                  >
                    Contact Us
                  </NavLink>
                </li>
{/*                 <li className="nav-item">
                  {!isAuthenticated ? (
                    <button
                      onClick={loginWithRedirect}
                      className="nav-link text-white text-nowrap px-6 py-3 bg-transparent border-2 border-white rounded-lg text-lg font-medium transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:border-transparent focus:outline-none"
                    >
                      Login/SignUp
                    </button>
                  ) : (
                    <ProfileMenu user={user} logout={logout}/>
                  )}
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
