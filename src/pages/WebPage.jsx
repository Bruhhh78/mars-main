import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Brands from "../components/Brands/Brands.jsx";
import Services from "../components/Services/Services.jsx";
import Details from "../components/Details/Details.jsx";
import About from "../components/About/About.jsx";
import Clients from "../components/Clients/Clients.jsx";

const WebPage = () => {
  return (
    <div className="App">
      <div  style={{ background: "#458ff6",minHeight:"65vh",color:"white", overflow: "hidden" }}>
        <Banner/>
      </div>
      <Brands/>
      <Services/>
      <Details/>
      <About/>
      <Clients/>
    </div>
  );
};

export default WebPage;
