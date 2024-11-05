import React from "react";
import "./TieupBrands.css";
import Dropdown from "../Dropdown/Dropdown";

const TieupBrands = () => {
  return (
    <div className="tieup-brands-container">
      <h2 className="title p-4 ">Brands We Work With</h2>
      <Dropdown />
    </div>
  );
};

export default TieupBrands;
