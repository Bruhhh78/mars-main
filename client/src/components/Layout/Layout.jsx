import React from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
