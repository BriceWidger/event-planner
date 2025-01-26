import React from "react";
import FooterContent from "./FooterContent";
import FooterCopyright from "./FooterCopyright";
import FooterCallToAction from "./FooterCallToAction";

const Footer = () => {
  return (
    <div
      className="footer-container-main content-block content-block-footer bg-black"
      data-block-type="footer"
      id="footer1"
      style={{
        display: "block",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="content-block-bg"></div>
      <div
        className="main-content-container content-block-content text-center"
        style={{ paddingTop: 80, paddingBottom: 120, paddingLeft: "15px", paddingRight: "15px" }}
      >
        <FooterContent />
        <FooterCallToAction />
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;