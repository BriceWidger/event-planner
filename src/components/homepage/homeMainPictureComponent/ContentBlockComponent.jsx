import React from "react";
import RegisterNowButton from "../RegisterNowButton";

const ContentBlockComponent = () => {
  return (
    <div
      className="content-block-content position-absolute top-50 start-50 translate-middle text-center"
      style={{
        height: "192px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        className="col-md-10 offset-md-1 mx-auto p-0"
        style={{ width: "778px" }}
      >
        <div
          className="d-flex flex-wrap justify-content-center"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <h1
            className="ec-editor-block h1 mb-0"
            style={{
              fontSize: "80px",
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
        </div>
        <RegisterNowButton />
      </div>
    </div>
  );
};

export default ContentBlockComponent;
