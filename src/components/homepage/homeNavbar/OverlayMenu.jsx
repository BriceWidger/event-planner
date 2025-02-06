import React from "react";

const styles = {
  overlay: {
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
  },
  ul: {
    listStyle: "none",
    padding: "100px",
    margin: 0,
    width: "100%",
    textAlign: "center",
    position: "absolute",
    top: 0,
  },
  li: {
    padding: "0",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 0",
    height: "100%",
  },
  menuItem: {
    color: "#fff",
    fontSize: "20px",
    fontWeight: "600",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    textDecoration: "none",
  },
};

const OverlayMenu = () => {
  const menuItems = [
    "About",
    "Schedule",
    "Speakers",
    "Schedule",
    "Location",
    "Sponsors",
    "News",
  ];

  return (
    <div style={styles.overlay}>
      <ul style={styles.ul}>
        {menuItems.map((text, index) => (
          <li key={index} style={styles.li}>
            <a
              href="#"
              style={styles.menuItem}
              onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
              onMouseOut={(e) => (e.target.style.textDecoration = "none")}
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OverlayMenu;