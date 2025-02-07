// OverlayMenu.jsx
import React from "react";
import NavLink from "./NavLink";

const OverlayMenu = ({ onHideMenu }) => {
  const menuItems = [
    "About",
    "Speakers",
    "Schedule",
    "Location",
    "Sponsors",
    "News",
  ];

  const overlayMenuStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1000,
  };

  const ulStyles = {
    listStyle: "none",
    padding: "100px",
    margin: 0,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: 0,
  };

  const liStyles = {
    padding: "0",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    height: "100%",
  };

  const linkStyles = {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
  };

  const handleMouseOver = (e) => {
    e.target.style.textDecoration = "underline";
  };

  const handleMouseOut = (e) => {
    e.target.style.textDecoration = "none";
  };

  const scrollIds = {
    Schedule: "schedule-container-middle",
    Speakers: "keynote-container-main",
    Location: "conference-location-container-main",
    Sponsors: "sponsors-container-main",
    News: "news-updates-container",
  };

  return (
    <div className="overlay-menu" style={overlayMenuStyles}>
      <ul style={ulStyles}>
        {menuItems.map((text, index) => (
          <li key={index} style={liStyles}>
            <NavLink
              href="#"
              scrollId={scrollIds[text]}
              noMargin
              onClick={onHideMenu}
            >
              <a
                style={linkStyles}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                onClick={onHideMenu}
              >
                {text}
              </a>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayMenu;
