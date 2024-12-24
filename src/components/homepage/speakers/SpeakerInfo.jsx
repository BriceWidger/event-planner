import React from "react";

const Speaker = ({ imageSrc, name, role, info }) => (
  <div
    className="speaker-container-main col col-md-2"
    style={{ width: "242.5px", height: "359.3px" }}
  >
    <img className="img-fluid rounded-circle mb-3" src={imageSrc} />
    <h2 className="speaker-name text-center fs-5 fw-bold">{name}</h2>
    <p
      className="speaker-role text-center text-sm fw-bold"
      style={{
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: "12px",
        lineHeight: "140%",
      }}
    >
      {role}
    </p>
    <p className="speaker-info text-center" style={{ color: "#888" }}>
      {info}
    </p>
  </div>
);

export default Speaker;
