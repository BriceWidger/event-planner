import React, { useRef } from "react";
import { Link } from "react-router-dom";

const NavLink = ({ children, href, scrollId }) => {
  const handleScroll = (e) => {
    if (scrollId) {
      e.preventDefault();
      const element = document.getElementById(scrollId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      style={{ fontSize: "12px" }}
      className="link-dark text-decoration-none ms-3 fw-semibold"
      onClick={handleScroll}
    >
      {children}
    </a>
  );
};

const HomeNavbar = () => {
  return (
    <nav className="ps-3 pe-3 py-3">
      <a href="#" onClick={(e) => e.preventDefault()}>
        <img
          src="https://res.cloudinary.com/eventcreate/image/upload/v1575663623/testlogo_r9pnuh.jpg"
          width="162px"
        />
      </a>
      <NavLink href="#" scrollId="keynote-container-main">
        SPEAKERS
      </NavLink>
      <NavLink href="#" scrollId="schedule-container-middle">
        SCHEDULE
      </NavLink>
      <NavLink href="#" scrollId="conference-location-container-main">
        LOCATION
      </NavLink>
      <NavLink href="#" scrollId="sponsors-container-main">
        SPONSORS
      </NavLink>
      <NavLink href="#" scrollId="news-updates-container">
        NEWS
      </NavLink>
      <Link
        to="/tickets"
        className="float-end btn"
        style={{ backgroundColor: "rgb(61, 104, 137)" }}
      >
        REGISTOR NOW
      </Link>
    </nav>
  );
};

export default HomeNavbar;
