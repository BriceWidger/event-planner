// SpeakerInfo.jsx

import React from "react";

const Speaker = ({ imageSrc, name, role, info }) => (
  <div
    className="image-container"
    style={{
      padding: "0 15px",
      margin: "0 auto",
      wordBreak: "break-all",
    }}
  >
    <img
      className="img-fluid rounded-circle"
      src={imageSrc}
      alt={name}
      style={{
        width: "274px",
        height: "274px",
        borderRadius: "50%",
        display: "block",
        width: "100% !important",
        height: "auto !important",
        maxWidth: "100%",
      }}
    />

    <h2
      className="speaker-name text-center fs-5 fw-bold"
      style={{
        marginTop: "16px",
        marginBottom: "8px",
        fontWeight: "bold",
        fontSize: 20,
        lineHeight: "110%",
      }}
    >
      {name}
    </h2>
    <p
      className="speaker-role text-center text-sm fw-bold"
      style={{
        marginBottom: "12px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "2px",
        fontSize: 14,
        lineHeight: "140%",
      }}
    >
      {role}
    </p>
    <p
      className="speaker-info text-center"
      style={{
        fontWeight: 400,
        fontSize: 16,
        lineHeight: "150%",
        fontFamily: "'Nunito Sans', sans-serif",
        color: "#888",
      }}
    >
      {info}
    </p>
  </div>
);

export default Speaker;
