// HomeNavbar.js
import React from "react";
import Logo from "./Logo";
import NavbarToggler from "./NavbarToggler";
import NavbarLinks from "./NavbarLinks";
import RegisterNowButton from "./RegisterNowButton";

const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg ps-3 pe-3 py-3">
      <Logo />
      <NavbarToggler />
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <NavbarLinks />
        <RegisterNowButton />
      </div>
    </nav>
  );
};

export default HomeNavbar;
