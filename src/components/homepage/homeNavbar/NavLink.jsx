// NavLink.js
import React from "react";

const NavLink = ({ children, href, scrollId }) => {
  const handleScroll = (e) => {
    if (scrollId) {
      e.preventDefault();
      const element = document.getElementById(scrollId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      style={{ fontSize: "12px" }}
      className="link-dark text-decoration-none ms-3 fw-semibold"
      onClick={handleScroll}
    >
      {children}
    </a>
  );
};

export default NavLink;
