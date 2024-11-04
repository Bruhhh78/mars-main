import React from "react";
import "./App.css"; // Uncomment this if you have styles here
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import WebPage from "./pages/WebPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  element={<Layout />}>
          <Route path="/" element={<WebPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
