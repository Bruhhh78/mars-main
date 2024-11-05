import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import WebPage from "./pages/WebPage.jsx";
import Products from "./components/Products/Products.jsx";
import Services from "./components/Services/Services.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import TieupBrands from "./components/TieupBrands/TieupBrands.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import Maintenance from "./components/Maintenance/Maintenance.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WebPage />} />
          <Route path="/products">
            <Route index element={<Products />} />
          </Route>
          <Route path="/services">
            <Route index element={<Services />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/brands">
            <Route index element={<TieupBrands />} />
          </Route>
          <Route path="/appointment">
            <Route index element={<Appointment />} />
          </Route>
          <Route path="/maintenance">
            <Route index element={<Maintenance />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
