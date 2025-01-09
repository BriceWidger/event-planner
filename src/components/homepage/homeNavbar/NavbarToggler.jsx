// NavbarToggler.js
import React from 'react';
import { Button } from 'react-bootstrap';

const NavbarToggler = () => {
  return (
    <Button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style={{
        width: '44px',
        height: '34px',
        padding: '0'
      }}
    >
      <span className="navbar-toggler-icon"></span>
    </Button>
  );
};

export default NavbarToggler;