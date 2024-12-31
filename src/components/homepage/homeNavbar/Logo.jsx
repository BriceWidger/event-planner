// Logo.js
import React from "react";

const Logo = () => {
  return (
    <a href="#" onClick={(e) => e.preventDefault()} className="navbar-brand">
      <img
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575663623/testlogo_r9pnuh.jpg"
        width="162px"
        className="d-inline-block align-top"
      />
    </a>
  );
};

export default Logo;
