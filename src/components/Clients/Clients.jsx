import React, { useEffect, useRef } from "react";
import "./Clients.css";
import "./Utilities.css";

const Clients = () => {
  const imagePaths = [
    "/public/bhu.51f1d1f0717fae22b92c.png",
    "/public/bhumc.7ee5b10e393bb845a81c.jpg",
    "/public/brdmc.e29a7bfe5c9c8078551b.png",
    "/public/firoza.8efca984438f767f9fed.webp",
    "/public/gsvm.0ef4c9e1e4d9015c5eaf.jpg",
    "/public/hmc.0f3052af56b663e57674.jpg",
    "/public/integral.f930dc51d1c0061f2433.jpg",
    "/public/kgmc.fa9a6e1636b677b291f4.jpg",
    "/public/Mayo clicnic.jpeg",
    "/public/mlbmc.b250207dd9084de86f6d.jpg",
    "/public/mnmc.ce5948c5645d36ac129c.jpg",
    "/public/patiala.c4efcf386075c16c38e7.png",
    "/public/rmcbd.3803ade23a53002322c1.jpg",
    "/public/rmlimc.f9c5ad5b3ed8a81f5ad3.jpg",
    "/public/sgmpims.e5d1af847989cf53623c.png",
  ];

  const carouselWrapperRef = useRef(null);

  useEffect(() => {
    const carouselWrapper = carouselWrapperRef.current;
    const totalWidth = carouselWrapper.scrollWidth;
    let currentPosition = 0;
    const scrollAmount = 1; // Adjust for scroll speed

    const interval = setInterval(() => {
      currentPosition += scrollAmount;
      carouselWrapper.style.transform = `translateX(-${currentPosition}px)`;

      // Reset position for infinite scrolling
      if (currentPosition >= totalWidth) {
        currentPosition = 0;
      }
    }, 20); // Adjust for animation speed

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="sc-feedback" style={{ padding: "60px 0" }}>
      <div
        className="container"
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}
      >
        <div className="feedback-content">
          <div className="title-box text-center">
            <div className="content-wrapper">
              <h3 className="title-box-name" style={{ color: "black" }}>
                Our Clients
              </h3>
              <div
                className="title-separator"
                style={{
                  height: "2px",
                  backgroundColor: "black",
                  width: "50px",
                  margin: "10px auto",
                }}
              ></div>
            </div>
          </div>
          <div
            className="carousel-container"
            style={{ overflow: "hidden", position: "relative" }}
          >
            <div
              className="carousel-wrapper"
              ref={carouselWrapperRef}
              style={{ display: "flex", width: "fit-content" }}
            >
              {imagePaths.map((path, index) => (
                <img
                  key={index}
                  src={path}
                  alt={`Image ${index + 1}`}
                  style={{ width: "200px", height: "200px", margin: "0 10px" }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
