import React from "react";

const Brands = () => {
  return (
    <section
      style={{ padding: "40px", backgroundColor: "white", textAlign: "center" }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "2em", color: "#333" }}>Brands We Work With</h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        <figure
          style={{
            width: "220px",
            cursor: "pointer",
            height: "auto",
            display: "inline-block",
          }}
        >
          <img
            src="https://cdn.dribbble.com/users/432807/screenshots/14567438/rh.jpg"
            alt="Phoenix"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </figure>
        <figure
          style={{
            width: "220px",
            cursor: "pointer",
            height: "auto",
            display: "inline-block",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HuI1EL43YRf2TX1R3a3TSgGuFonHywAvvA&s"
            alt="Godrej Interio"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </figure>
        <figure
          style={{
            width: "120px",
            cursor: "pointer",
            height: "auto",
            display: "inline-block",
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLp2aQDxpKoef3IOhaMu8iAwL2piqkSi9V9rPQEsOzgzi57wBPjGUzBXs6z8J09Iug1Ic&usqp=CAU"
            alt="Philips"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </figure>
        <figure
          style={{
            width: "250px",
            cursor: "pointer",
            height: "auto",
            display: "inline-block",
          }}
        >
          <img
            src="https://i0.wp.com/trendystockcharts.com/wp-content/uploads/2017/08/MASI-Logo-866W-H.jpg?fit=866%2C541&ssl=1"
            alt="Masimo"
            style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
          />
        </figure>
      </div>
    </section>
  );
};

export default Brands;
