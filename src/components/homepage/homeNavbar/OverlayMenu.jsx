// OverlayMenu.jsx
import React from "react";

const menuItemStyle = {
  color: "#fff",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "500",
  cursor: "pointer",
};

const OverlayMenu = () => {
  return (
    <div
      style={{
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
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            About
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            Schedule
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            Speakers
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            Schedule
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            Location
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            Sponsors
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a href="#" style={menuItemStyle}>
            News
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OverlayMenu;