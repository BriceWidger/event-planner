// HomeNavbar.jsx
import React from "react";

const NavLink = ({ children, href }) => (
  <a
    href={href}
    style={{ fontSize: "12px" }}
    className="link-dark text-decoration-none ms-3 fw-semibold"
  >
    {children}
  </a>
);

const HomeNavbar = () => {
  return (
    <nav className="ps-3 pe-3 py-3">
      <img
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575663623/testlogo_r9pnuh.jpg"
        width="162px"
      ></img>
      <NavLink href="#">SPEAKERS</NavLink>
      <NavLink href="#">SCHEDULE</NavLink>
      <NavLink href="#">LOCATION</NavLink>
      <NavLink href="#">SPONSORS</NavLink>
      <NavLink href="#">NEWS</NavLink>
      <button
        className="float-end btn"
        style={{ backgroundColor: "rgb(61, 104, 137)" }}
      >
        REGISTOR NOW
      </button>
    </nav>
  );
};

export default HomeNavbar;
