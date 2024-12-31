// NavbarLinks.js
import React from "react";
import NavLink from "./NavLink";

const NavbarLinks = () => {
  return (
    <ul className="navbar-nav me-auto">
      <li className="nav-item">
        <NavLink href="#" scrollId="keynote-container-main">
          SPEAKERS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink href="#" scrollId="schedule-container-middle">
          SCHEDULE
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink href="#" scrollId="conference-location-container-main">
          LOCATION
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink href="#" scrollId="sponsors-container-main">
          SPONSORS
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink href="#" scrollId="news-updates-container">
          NEWS
        </NavLink>
      </li>
    </ul>
  );
};

export default NavbarLinks;
