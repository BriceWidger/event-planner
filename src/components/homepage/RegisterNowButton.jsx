import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButton = () => {
  return (
    <Link
      to="/tickets"
      className="btn"
      style={{
        backgroundColor: "#3d6889",
        color: "#fff",
        borderRadius: "30px",
      }}
    >
      REGISTER NOW
    </Link>
  );
};

export default RegisterNowButton;
