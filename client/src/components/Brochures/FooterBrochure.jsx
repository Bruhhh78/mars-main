import React from "react";
import "./FooterBrochure.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";

const FooterBrochure = () => {
  return (
    <div className="footer-item">
      <NavLink to="/"><h3 className="footer-item-title">Brochures</h3></NavLink>
      <ul className="footer-links">
        <li>
          <NavLink to="/CtScanBrochure">CT Scan Machine</NavLink>
        </li>
        <li>
          <NavLink to="/DiagnosticMachine">Diagnostic Machine</NavLink>
        </li>
        <li>
          <NavLink to="/OxygenBrochure">Oxygen Concentrator</NavLink>
        </li>
        <li>
          <NavLink to="/UltraSoundBrochure">
            Ultrasound Machine
          </NavLink>
        </li>
        <li>
          <NavLink to="/XRay">X-Ray</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default FooterBrochure;
