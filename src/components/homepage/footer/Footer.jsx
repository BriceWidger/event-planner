import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyright from "./FooterCopyright";
import FooterCallToAction from "./FooterCallToAction";

const Footer = () => {
  return (
    <div
      className="footer-container-main content-block content-block-footer bg-black d-flex justify-content-center align-items-center"
      data-block-type="footer"
      id="footer1"
    >
      <div className="content-block-bg"></div>
      <div
        className="main-content-container content-block-content text-center"
        style={{ paddingTop: 80, paddingBottom: 120 }}
      >
        <FooterContent />
        <FooterCallToAction />
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
