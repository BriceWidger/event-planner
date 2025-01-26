import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButton = () => {
  return (
    <Link
      to="/tickets"
      className="btn"
      style={{
        display: "inline-block",
        fontSize: "1.2em",
        padding: "1em 2em",
        lineHeight: "1",
        textDecoration: "none",
        cursor: "pointer",
        borderRadius: "30px",
        backgroundColor: "#3d6889",
        color: "#ffffff",
        fontWeight: 600,
        transition: "0.2s",
        wordBreak: "break-all",
      }}
    >
      Register Now
    </Link>
  );
};

export default RegisterNowButton;