"use client";
import React, { useEffect, useState } from "react";

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Select all <a> and <button> elements and attach hover events
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-200 ease-out transform ${
        hovered
          ? "scale-150 transition ease-in-out w-8 h-8"
          : "scale-100 transition ease-in-out w-4 h-4"
      } custom-cursor`}
      style={{
        transform: `translate3d(${position.x - 16}px, ${position.y - 16}px, 0)`,
        zIndex: 9999, // High z-index to keep the cursor above other elements
        willChange: "transform",
        mixBlendMode: "difference", // Invert the background color
        backgroundColor: "white", // White cursor to create the inversion effect
      }}
    />
  );
};

export default CustomCursor;
