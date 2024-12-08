import React from "react";

const BodyBackgroundColor = ({ backgroundColor, children }) => {
  return (
    <div
      style={{
        backgroundColor,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </div>
  );
};

export default BodyBackgroundColor;
