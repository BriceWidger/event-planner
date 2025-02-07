// NavbarToggler.jsx
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import FadeInMenu from "./FadeInMenu";

const NavbarToggler = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };

  const onHideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenu]);

  return (
    <div>
      <Button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{
          width: "44px",
          height: "34px",
          padding: "0",
        }}
        onClick={handleToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </Button>
      <FadeInMenu showMenu={showMenu} onHideMenu={onHideMenu} />
    </div>
  );
};

export default NavbarToggler;
