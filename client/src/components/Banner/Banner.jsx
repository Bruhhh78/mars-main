import React from "react";
import "./Banner.css";
import "./Utilities.css";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <div className="banner pt-12 ">
      {/* Video background */}
      <video
        className="banner-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/36b1d7065d45486b9ef2af4d015e150e_1280x720_2000K.mp4" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="container">
        <div className="banner-content">
          <div className="banner-left">
            <div className="content-wrapper p-10 align-items-center justify-content-end">
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: "0", opacity: 1 }}
                transition={{ duration: 4, type: "spring" }}
                className="banner-title"
              >
                MARS HealthCare
              </motion.h1>

              <p className="text text-white">
                We work with the Best Brands that includes Philips, Godrej
                Interio, and Pheonix to provide you with the best medical
                facilities, equipment, and Lab setup for your Hospital.
              </p>
              <NavLink to="/appointment" className="btn btn-secondary">
                Book Appointment
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
