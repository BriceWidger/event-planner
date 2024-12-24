import React from "react";

const Speaker = ({ imageSrc, name, role, info }) => {
  return (
    <div className="speaker-container-main col col-md-2">
      <img className="img-fluid rounded-circle" src={imageSrc} />
      <h2 className="speaker-name text-center fs-5 fw-semibold">{name}</h2>
      <p className="speaker-role text-center text-sm fw-semibold">{role}</p>
      <p className="speaker-info text-center" style={{ color: "#888" }}>
        {info}
      </p>
    </div>
  );
};

export default Speaker;
