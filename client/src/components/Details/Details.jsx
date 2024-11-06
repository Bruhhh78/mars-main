import React from "react";
import "./Details.css";
import "./Utilities.css";

const Details = () => {
  return (
    <section className="sc-grid sc-grid-one">
      <div className="container">
        <div className="grid-content d-grid align-items-center">
          <div className="grid-img">
            <img src="/health-care-img.png" alt="" />
          </div>
          <div className="grid-text">
            <div className="content-wrapper text-start">
              <div className="title-box">
                <h3 className="title-box-name text-white">
                  Leading Healthcare Providers
                </h3>
                <div className="title-separator mx-auto"></div>
              </div>

              <p className="text title-box-text text-white">
                Mars HealthCare specializes in innovative medical devices and
                healthcare solutions. Our products enhance patient care, improve
                medical outcomes, and support healthcare professionals in
                delivering quality services efficiently and effectively.
              </p>
              <button type="button" className="btn btn-white-outline">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
