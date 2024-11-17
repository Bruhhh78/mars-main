import React from "react";
import "./Services.css";
import "./Utilities.css";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <section className="sc-services" style={{ margin: "20px" }}>
      <div className="services-shape">
        <img src="/curve-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="services-content">
          <div className="title-box text-center">
            <div className="content-wrapper">
              <h3 className="title-box-name">Our Mission And Vision</h3>
              <div className="title-separator mx-auto"></div>
              <p className="text title-box-text">
                Striving for a future where healthcare spaces are at the
                forefront of innovation and efficiency.
                <span style={{ color: "rgb(0, 132, 255)" }}>Mars</span>
                <span style={{ color: "orange" }}> Healthcare</span> envisions
                being the preferred provider of integrated solutions that
                combine Philips and Godrej Interio. We aspire to create healing
                environments that not only meet the highest standards of
                functionality and aesthetics but also foster a compassionate and
                patient-centric approach to healthcare. line prescriptions, and
                offer quick refills whenever you require them.
              </p>
            </div>
          </div>

          <div className="services-list">
            <div className="services-item">
              <div className="item-icon">
                <img src="/service-icon-3.png" alt="service icon" />
              </div>
              <h5 className="item-title fw-7">Medical Equipments</h5>
              <p className="text">
                The most effective and reliable medical products
              </p>
            </div>

            <div className="services-item">
              <div className="item-icon">
                <img src="/service-icon-5.png" alt="service icon" />
              </div>
              <h5 className="item-title fw-7">Healthcare Furniture</h5>
              <p className="text">
                We ensure that our hospital furniture meets the highest standard
                of quality
              </p>
            </div>

            <div className="services-item">
              <div className="item-icon">
                <img src="/service-icon-4.png" alt="service icon" />
              </div>
              <h5 className="item-title fw-7">Hospital Setup</h5>
              <p className="text">
                Mars Health Care ensures that the hospital is equipped with
                state-of-the-art technology.
              </p>
            </div>

            <div className="services-item">
              <div className="item-icon">
                <img src="/service-icon-6.png" alt="service icon" />
              </div>
              <h5 className="item-title fw-7">Detailed Info</h5>
              <p className="text">
                Free consultation with our trusted doctors and get the best
                recommendations.
              </p>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-center services-main-btn">
            <NavLink to="/maintenance">
              <button type="button" className="btn btn-primary-outline">
                Maintenence Page
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
