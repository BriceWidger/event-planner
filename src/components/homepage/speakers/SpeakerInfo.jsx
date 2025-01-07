import React from "react";

const Speaker = ({ imageSrc, name, role, info }) => (
  <div className="speaker-container-main col-md-6 col-lg-3">
<img
  className="img-fluid rounded-circle"
  style={{
    width: "326.567px",
    padding: "0 15px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  }}
  src={imageSrc}
/>
    <h2
      className="speaker-name text-center fs-5 fw-bold"
      style={{
        marginTop: "16px",
        marginBottom: "8px",
      }}
    >
      {name}
    </h2>
    <p
      className="speaker-role text-center text-sm fw-bold"
      style={{
        marginBottom: "12px",
      }}
    >
      {role}
    </p>
    <p className="speaker-info text-center">{info}</p>
  </div>
);

export default Speaker;