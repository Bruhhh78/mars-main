import React from "react";
import Banner from "../components/Banner/Banner.jsx";
import Brands from "../components/Brands/Brands.jsx";
import Services from "../components/Services/Services.jsx";
import Details from "../components/Details/Details.jsx";
import About from "../components/About/About.jsx";
import Clients from "../components/Clients/Clients.jsx";
import Products from "../components/Products/Products.jsx";
import TeamLead from "../components/TeamLead/TeamLead.jsx";

const WebPage = () => {
  return (
    <div className="App">
      <div  style={{ background: "#458ff6",minHeight:"65vh",color:"white", overflow: "hidden" }}>
        <Banner/>
      </div>
      <Brands/>
      <Services/>
      <Details/>
      <TeamLead/>
      <About/>
      <Clients/>
      <Products/>
    </div>
  );
};

export default WebPage;
