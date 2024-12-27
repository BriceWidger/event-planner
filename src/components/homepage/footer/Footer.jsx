import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyright from "./FooterCopyright";
import FooterCallToAction from "./FooterCallToAction";

const Footer = () => {
  return (
    <div
      className="content-block content-block-footer bg-black d-flex justify-content-center align-items-center"
      style={{ height: 487.5 }}
      data-block-type="footer"
      id="footer1"
    >
      <div className="content-block-bg"></div>
      <div className="content-block-content">
        <FooterContent />
        <FooterCallToAction />
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
