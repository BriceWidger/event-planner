import React from "react";

const FooterCopyright = () => {
  const currentYear = new Date().getFullYear(); // Dynamically get the current year

  return (
    <p
      style={{
        color: "#888",
        fontSize: "13px",
        fontWeight: 400,
        lineHeight: "150%",
        fontFamily: "'Nunito Sans', sans-serif",
        paddingTop: "100px",
        wordBreak: "break-all",
      }}
    >
      &copy; {currentYear}. All Rights Reserved. <br />
      <span style={{ wordBreak: "break-all" }}>
        Event website powered by Brice Widger
      </span>
    </p>
  );
};

export default FooterCopyright;
