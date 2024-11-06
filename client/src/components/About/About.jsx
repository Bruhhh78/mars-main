import React from "react";
import "./About.css";
import "./Utilities.css";

const About = () => {
  return (
    <section className="sc-grid sc-grid-two">
      <div className="container">
        <div className="grid-content d-grid align-items-center">
          <div className="grid-img">
            <img src="/download-image.png" alt="" />
          </div>
          <div className="grid-text">
            <div className="content-wrapper text-start">
              <div className="title-box">
                <h3 className="title-box-name">About Us</h3>
                <div className="title-separator mx-auto"></div>
              </div>
            </div>
            <p className="text title-box-text">
              We create healing environments that combine functionality and
              aesthetics, prioritizing compassionate, patient-centric
              healthcare. By pursuing advancements in technology and design, we
              aim to shape the future of healthcare infrastructure. Our
              commitment to excellence is reflected in every facility we touch,
              contributing to the well-being of communities worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
