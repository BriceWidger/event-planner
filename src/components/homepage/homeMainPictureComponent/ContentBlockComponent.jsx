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
        className="AnnualConferenceMainContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 304,
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <h1
          className="ec-editor-block h1 mb-0"
          style={{
            fontSize: "16vw",
            color: "#ffffff",
            fontFamily: "'Unna', serif;",
            width: 274,
          }}
        >
          Annual Conference
        </h1>
        <p
          className="ec-editor-block subdued mb-4"
          style={{
            fontWeight: 400,
            fontSize: "20px",
            color: "#ffffff",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
            width: 274,
          }}
        >
          Join us on December 26
        </p>
        <div
          className="register-now-btn-container"
          style={{
            width: 274,
          }}
        >
          <a
            className="btn"
            style={{
              display: "inline-block",
              fontSize: "18px",
              padding: "20px 34px",
              lineHeight: "1",
              textDecoration: "none",
              cursor: "pointer",
              textAlign: "center",
              borderRadius: "30px",
              backgroundColor: "#3d6889",
              color: "#ffffff",
              fontWeight: 600,
              transition: "0.2s",
            }}
            href="/tickets"
          >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentBlockComponent;
