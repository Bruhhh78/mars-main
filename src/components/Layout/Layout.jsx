import React from "react";
import Header from "../Header/Header.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div>
        <Header />
      </div>
      <Outlet/>
      {/* <Footer/> */}
    </>
  );
};

export default Layout;
