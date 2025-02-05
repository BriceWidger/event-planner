// OverlayMenu.jsx
import React from "react";

const OverlayMenu = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            About
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Schedule
          </a>
        </li>
        <li
          style={{
            marginBottom: "20px",
          }}
        >
          <a
            href="#"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Speakers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default OverlayMenu;
