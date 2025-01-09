// HomeNavbar.js
import React from "react";
import Logo from "./Logo";
import NavbarToggler from "./NavbarToggler";
import NavbarLinks from "./NavbarLinks";
import RegisterNowButton from "./RegisterNowButton";


const HomeNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-2" style={{ paddingLeft: '10px', paddingRight: '10px' }}>
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