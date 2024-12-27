import React from "react";

const FooterCopyright = () => {
  return (
    <p
      style={{
        color: "#888",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "150%",
        fontFamily: "'Nunito Sans', sans-serif",
        paddingTop: "100px",
      }}
    >
      &copy; 2024. All Rights Reserved. <br />
      Event website powered by{" "}
      <a
        rel="nofollow"
        href="https://www.eventcreate.com/"
        target="_blank"
        id="ec_link"
      >
        EventCreate
      </a>
    </p>
  );
};

export default FooterCopyright;
