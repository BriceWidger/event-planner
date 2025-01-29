import React from "react";

const ArrowDivider = () => {
  return (
    <span
      className="arrow-divider"
      style={{
        fontSize: "80px",
        color: "#ccc",
        fontWeight: "100",
        lineHeight: "59.1333px",
        transform: "scaleX(0.5)",
        marginTop: "-20px", // Adjust this value to move the arrow up or down
      }}
    >
      ›
    </span>
  );
};

export default ArrowDivider;
