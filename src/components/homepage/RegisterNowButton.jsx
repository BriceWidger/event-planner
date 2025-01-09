import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButton = () => {
  return (
    <Link
      to="/tickets"
      className="btn"
      style={{
        display: "inline-block",
        width: "185.767px",
        height: "58px",
        fontSize: "18px",
        padding: "0",
        lineHeight: "58px",
        textDecoration: "none",
        cursor: "pointer",
        textAlign: "center",
        borderRadius: "30px",
        backgroundColor: "#3d6889",
        color: "#fff",
        fontWeight: "600",
        transition: ".2s all ease",
      }}
    >
      Register Now
    </Link>
  );
};

export default RegisterNowButton;
