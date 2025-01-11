import React from "react";
import { Link } from "react-router-dom";

const RegisterNowButtonNav = () => {
  return (
    <Link
      to="/tickets"
      className="btn btn-primary ms-auto d-none d-lg-block"
      style={{
        backgroundColor: "#3d6889",
        color: "#fff",
        letterSpacing: "2px",
        textTransform: "uppercase",
        fontSize: "11px",
        fontWeight: "bold",
        borderRadius: "20px",
        padding: "14px 21px",
        lineHeight: "1",
        width: "146.95px",
        height: "39px",
        whiteSpace: "nowrap",
        textAlign: "center"
      }}
    >
      REGISTER NOW
    </Link>
  );
};

export default RegisterNowButtonNav;