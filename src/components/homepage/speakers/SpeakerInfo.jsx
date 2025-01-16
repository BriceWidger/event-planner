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
        wordBreak: "break-all",
      }}
    >
      {name}
    </h2>
    <p
      className="speaker-role text-center text-sm fw-bold"
      style={{
        marginBottom: "12px",
        wordBreak: "break-all",
      }}
    >
      {role}
    </p>
    <p
      className="speaker-info text-center"
      style={{
        wordBreak: "break-all",
      }}
    >
      {info}
    </p>
  </div>
);

export default Speaker;
