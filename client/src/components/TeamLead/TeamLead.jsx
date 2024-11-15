import React from "react";
import "./TeamLead.css";

const TeamLead = () => {
  return (
    <>
      <h1 className="pt-32 text-4xl font-semibold text-center text-blue-500 ">
        Our Leaders
      </h1>
      <div className="main">
        <div className="profile-card">
          <div className="img">
            <img src="Meenu Srivastava.jpg" alt="Meenu Srivastava" />
          </div>
          <div className="caption">
            <h3>Meenu Srivastava</h3>
            <p>Proprietress</p>
          </div>
          <div className="social-links">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-twitter"></a>
          </div>
        </div>

        <div className="profile-card">
          <div className="img">
            <img src="Rakesh Kumar Srivastava.jpg" alt="Rakesh Kumar Srivastava" />
          </div>
          <div className="caption">
            <h3>Rajesh Kumar Srivastava</h3>
            <p>Managing Director</p>
          </div>
          <div className="social-links">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-twitter"></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamLead;
