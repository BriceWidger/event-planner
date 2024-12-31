// RegisterNowButton.js
import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButton = () => {
  return (
    <Link
      to="/tickets"
      className="btn btn-primary ms-auto"
      style={{ backgroundColor: "rgb(61, 104, 137)" }}
    >
      REGISTOR NOW
    </Link>
  );
};

export default RegisterNowButton;
