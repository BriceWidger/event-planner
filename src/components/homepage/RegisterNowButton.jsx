import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButton = () => {
  return (
    <Link
      to="/tickets"
      className="btn"
      style={{
        display: "inline-block",
        fontSize: "18px",
        padding: "20px 34px",
        lineHeight: "1",
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
