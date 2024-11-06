import React from "react";
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
import CustomMouse from "./components/CustomMouse/CustomMouse.jsx"; // Import the CustomMouse component

const App = () => {
  return (
    <BrowserRouter>
      <CustomMouse /> {/* Add the CustomMouse component here */}
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<WebPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brands" element={<TieupBrands />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/maintenance" element={<Maintenance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
