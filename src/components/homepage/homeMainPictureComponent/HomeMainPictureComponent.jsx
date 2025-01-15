import React from "react";
import styled from "styled-components";
import "../../../styles/responsive.css";

const BreakAllContainer = styled.div`
  word-break: break-all;
`;

const HomeMainPictureComponent = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <div
        style={{
          backgroundImage: `url(https://res.cloudinary.com/eventcreate/image/upload/v1575668151/themes/theme%20assets/photo-1515006346612-71f85b11e4fe_ak5ufw.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(0.5)",
          padding: "20px",
        }}
      >
        <BreakAllContainer
          className="AnnualConferenceMainContainer-outer content-block-content position-relative text-center d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="AnnualConferenceMainContainer-inner d-flex flex-column justify-content-center align-items-center text-center"
            style={{
              width: "100%",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                "@media (min-width: 768px)": {
                  width: "50%",
                },
              }}
            >
              <h1
                style={{
                  color: "white",
                  margin: 0,
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "110%",
                  fontFamily: " 'Unna', serif;",
                }}
              >
                Annual Conference
              </h1>
              <p
                className="text-center"
                style={{
                  color: "#888",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "150%",
                  fontFamily: "'Nunito Sans', sans-serif",
                }}
              >
                Join us on December 26
              </p>
            </div>
            <div
              className="register-now-btn-container text-center d-flex justify-content-center"
              style={{
                "@media (min-width: 768px)": {
                  width: "50%",
                },
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
        </BreakAllContainer>
      </div>
    </div>
  );
};

export default HomeMainPictureComponent;