// FadeInMenu.jsx
import React, { useState, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";

const FadeInMenu = ({ showMenu }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setFadeIn(true);
    } else {
      setFadeIn(false);
    }
  }, [showMenu]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1000,
        opacity: fadeIn ? 1 : 0,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: fadeIn ? "auto" : "none",
      }}
    >
      {fadeIn && <OverlayMenu />}
    </div>
  );
};

export default FadeInMenu;
