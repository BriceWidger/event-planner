// HomeNavbar.js
import React from "react";
import Logo from "./Logo";
import NavbarToggler from "./NavbarToggler";
import NavbarLinks from "./NavbarLinks";
import RegisterNowButton from "./RegisterNowButtonNav";

const HomeNavbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        width: "100vw",
        paddingLeft: "10px",
        paddingRight: "10px",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#ffffff",
        zIndex: 1000,
      }}
    >
      <Logo className="mb-0" />
      <NavbarToggler />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavbarLinks />
        <RegisterNowButton />
      </div>
    </nav>
  );
};

export default HomeNavbar;
