import React, { useEffect, useRef } from "react";
import "./CustomMouse.css";

const CustomMouse = () => {
  const cursorRef = useRef(null);
  const colors = [
    "#ffb56b",
    "#fdaf69",
    "#f89d63",
    "#f59761",
    "#ef865e",
    "#ec805d",
    "#e36e5c",
    "#df685c",
    "#d5585c",
    "#d1525c",
    "#c5415d",
    "#c03b5d",
    "#b22c5e",
    "#ac265e",
    "#9c155f",
    "#950f5f",
    "#830060",
    "#7c0060",
    "#680060",
    "#60005f",
    "#48005f",
    "#3d005e",
  ];

  useEffect(() => {
    const coords = { x: 0, y: 0 };

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY;
    });

    const animateCursor = () => {
      const cursor = cursorRef.current;
      if (!cursor) return; // Handle potential null reference

      cursor.style.left = `${coords.x - 12}px`;
      cursor.style.top = `${coords.y - 12}px`;
      cursor.style.transform = `scale(1)`; // Remove scaling for consistent size

      requestAnimationFrame(animateCursor);
    };

    animateCursor();

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, [colors]);

  return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomMouse;
