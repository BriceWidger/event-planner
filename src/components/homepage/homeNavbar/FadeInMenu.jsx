// FadeInMenu.jsx
import React, { useState, useEffect } from "react";
import OverlayMenu from "./OverlayMenu";

const FadeInMenu = ({ showMenu, onHideMenu }) => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (showMenu) {
      setFadeIn(true);
      setFadeOut(false);
    } else {
      setFadeIn(false);
      setFadeOut(true);
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
        opacity: fadeIn ? 1 : fadeOut ? 0 : 0,
        transition: "opacity 0.4s ease-in-out",
        pointerEvents: fadeIn ? "auto" : "none",
      }}
    >
      {(fadeIn || fadeOut) && <OverlayMenu onHideMenu={onHideMenu} />}
    </div>
  );
};

export default FadeInMenu;