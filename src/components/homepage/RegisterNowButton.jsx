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
        borderRadius: "30px",
        backgroundColor: "#3d6889",
        color: "#fff",
        fontWeight: 500,
        transition: "0.2s all ease",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      Register Now
    </Link>
  );
};

export default RegisterNowButton;
