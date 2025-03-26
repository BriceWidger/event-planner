import React from "react";





// CONTINUE WORKING ON THE FOOTERTWO COMPONENT IN SELECT TICKETS



const FooterTwo = () => {
  return (
    <div
      className="checkout-tos sticky"
      style={{
        position: "fixed",
        bottom: "0",
        left: "0",
        width: "100%",
        borderTop: "1px solid #e6e6e6",
        paddingTop: "20px",
        background: "#fff",
        padding: "20px 20px 14px 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ marginLeft: "20px" }}>
        <a
          href="https://www.eventcreate.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Privacy Policy
        </a>{" "}
        |{" "}
        <a
          href="https://www.eventcreate.com/terms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Terms of Service
        </a>
      </div>
      <div style={{ marginRight: "20px", textAlign: "right" }}>
        Powered by{" "}
        <a
          className="poweredbyec"
          href="https://www.eventcreate.com/?utm_source=eventwebsite&amp;utm_medium=websitebanner&amp;utm_content=669791"
          target="_blank"
          rel="noopener noreferrer"
        >
          EventCreate{" "}
          <i className="fa-regular fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterTwo;
