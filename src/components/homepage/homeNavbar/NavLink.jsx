// NavLink.js
import React from "react";

const NavLink = ({ children, href, scrollId, noMargin }) => {
  const handleScroll = (e) => {
    if (scrollId) {
      e.preventDefault();
      const element = document.getElementById(scrollId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Added conditional statement to remove .ms-3 class when noMargin prop is true
  // This is to prevent margin from being added to the link in the OverlayMenu component
  const className = noMargin
    ? "link-dark text-decoration-none fw-semibold"
    : "link-dark text-decoration-none ms-3 fw-semibold";
  return (
    <a
      href={href}
      style={{ fontSize: "11px", letterSpacing: "2px" }}
      className={`link-dark text-decoration-none ${
        noMargin ? "" : "ms-3"
      } fw-bold`}
      onClick={handleScroll}
    >
      {children}
    </a>
  );
};

export default NavLink;
