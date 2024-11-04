import React from "react";
import Banner from "../components/Banner/Banner.jsx";

const WebPage = () => {
  return (
    <div className="App">
      <div  style={{ background: "#458ff6",minHeight:"65vh",color:"white", overflow: "hidden" }}>
        <Banner/>
      </div>
    </div>
  );
};

export default WebPage;
