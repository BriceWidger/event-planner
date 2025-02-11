import React from "react";
import NavLink from "./NavLink";

const NavbarLinks = () => {
  return (
    <div className="container" style={{ marginLeft: 0, paddingLeft: 0 }}>
      <ul className="navbar-nav me-auto">
        <li className="nav-item d-none d-lg-block" style={{ padding: "0 5px" }}>
          <NavLink href="#" scrollId="keynote-container-main">
            SPEAKERS
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block" style={{ padding: "0 5px" }}>
          <NavLink href="#" scrollId="schedule-container-middle">
            SCHEDULE
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block" style={{ padding: "0 5px" }}>
          <NavLink href="#" scrollId="conference-location-container-main">
            LOCATION
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block" style={{ padding: "0 5px" }}>
          <NavLink href="#" scrollId="sponsors-container-main">
            SPONSORS
          </NavLink>
        </li>
        <li className="nav-item d-none d-lg-block" style={{ padding: "0 5px" }}>
          <NavLink href="#" scrollId="news-updates-container">
            NEWS
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavbarLinks;
