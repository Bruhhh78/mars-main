import React, { useState } from "react";
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
import { QueryClient, QueryClientProvider } from "react-query"; // Import the CustomMouse component
import ProductList from "./components/ProductList/ProductList.jsx";
import MainProduct from "./pages/MainProduct/MainProduct.jsx";
import UserDetailContext from "./context/UserDetailContext.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookingsList from "./pages/BookingsList/BookingList.jsx";
import AddToFavourite from "./pages/FavouritesList/FavouritesList.jsx";
import CTScanBrochure from "./components/Brochures/CTScanBrochure.jsx";
import DiagnosticMachine from "./components/Brochures/DiagnosticMachine.jsx";
import OxygenConcentrator from "./components/Brochures/OxygenConcentrator.jsx";
import UltrasoundBrochure from "./components/Brochures/UltrasoundBrochure.jsx";
import XRayBrochure from "./components/Brochures/XRayBrochure.jsx";
// import AnimatedCursor from "./components/AnimatedCursor/AnimatedCursor.jsx";

const App = () => {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          {/* <AnimatedCursor /> */}
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
              <Route path="/category/:category" element={<ProductList />} />
              <Route path="/product/:id" element={<MainProduct />} />
              <Route path="/bookings" element={<BookingsList />} />
              <Route path="/favourites" element={<AddToFavourite />} />
              <Route path="/CtScanBrochure" element={<CTScanBrochure />} />
              <Route path="/DiagnosticMachine" element={<DiagnosticMachine />} />
              <Route path="/OxygenBrochure" element={<OxygenConcentrator />} />
              <Route path="/UltraSoundBrochure" element={<UltrasoundBrochure />} />
              <Route path="/XRay" element={<XRayBrochure />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
};

export default App;
