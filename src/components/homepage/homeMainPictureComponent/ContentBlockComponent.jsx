import React from "react";
import RegisterNowButton from "../RegisterNowButton";

const ContentBlockComponent = () => {
  return (
    <div
      className="content-block-content position-absolute top-50 start-50 translate-middle text-center col-md-10 offset-md-1"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="d-flex flex-column align-items-center"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
<h1
  className="ec-editor-block h1 mb-0"
  style={{
    fontSize: "18vw", // Increase the font size to 12vw
    color: "#ffffff",
    fontFamily: "'Unna', serif;",
  }}
>
  Annual Conference
</h1>
        <p
          className="ec-editor-block plead mb-4"
          style={{
            fontWeight: 400,
            fontSize: "20px",
            color: "#ffffff",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          Join us on December 26
        </p>
        <RegisterNowButton />
      </div>
    </div>
  );
};

export default ContentBlockComponent;