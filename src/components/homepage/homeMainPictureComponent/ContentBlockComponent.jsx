import React from "react";
import styled from "styled-components";

const AnnualConferenceTitle = styled.h1`
  font-size: 80px;
  font-family: "Unna", serif;
  color: white;

  @media (max-width: 768px) {
    font-size: 6vw;
  }

  @media (max-width: 480px) {
    font-size: 5vw;
  }

  @media (max-width: 320px) {
    font-size: 6vw;
  }
`;
const ContentBlockComponent = () => {
  return (
    <div
      className="AnnualConferenceMainContainer-outer content-block-content position-absolute top-50 start-50 translate-middle text-center col-md-10"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "80vw",
        height: "100vh",
      }}
    >
      <div
        className="AnnualConferenceMainContainer-inner"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "80%",
          paddingLeft: "2em",
          paddingRight: "2em",
        }}
      >
        <AnnualConferenceTitle>Annual Conference</AnnualConferenceTitle>
        <p
          className="ec-editor-block subdued mb-4"
          style={{
            fontWeight: 400,
            fontSize: "2.5vw", // Set font size to 2.5% of viewport width
            color: "#ffffff",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          Join us on December 26
        </p>
        <div
          className="register-now-btn-container text-center"
          style={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a
            className="btn"
            style={{
              display: "inline-block",
              fontSize: "1.2em",
              padding: "1em 2em",
              lineHeight: "1",
              textDecoration: "none",
              cursor: "pointer",
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
