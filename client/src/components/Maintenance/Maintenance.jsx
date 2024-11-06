import React from "react";
import "./Maintenance.css";
import FAQ from "../Accordion/FAQ";

const Maintenance = () => {
  return (
    <div className="w-full">
      <h1 className="p-5 text-4xl font-semibold text-center text-blue-500 ">
        After Sale Service
      </h1>
      <div className="p-4">
        <FAQ />
      </div>
    </div>
  );
};

export default Maintenance;
