import React from "react";
import "./Banner.css";
import "./Utilities.css";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-content">
          <div className="banner-left">
            <div className="content-wrapper">
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }} // Changed opacity to a number
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
              <a href="#" className="btn btn-secondary">
                Book Appointment
              </a>
            </div>
          </div>

          <div className="banner-right d-flex align-items-center justify-content-end">
            <motion.div
              initial={{ x: "7rem", opacity: 0 }} // Changed opacity to a number
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 4,
                type: "spring",
              }}
              className="image-container"
            >
              <img src="./banner-image.png" alt="BannerImg" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
