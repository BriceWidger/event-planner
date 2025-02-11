import React from "react";
import styled from "styled-components";
import RegisterNowButton from "../RegisterNowButton";
import './HomeMainPictureComponent.css';

const BreakAllContainer = styled.div`
  word-break: break-all;
`;

const HomeMainPictureComponent = () => {
  return (
    <div
      className="container-fluid p-0 position-relative"
      style={{ height: "100%" }}
    >
      <div
        style={{
          padding: "180.38px 20px 280px 20px",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="background-container"
      >
        <div
          className="background-image"
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url(https://res.cloudinary.com/eventcreate/image/upload/v1575668151/themes/theme%20assets/photo-1515006346612-71f85b11e4fe_ak5ufw.jpg)`,
            filter: "brightness(0.5)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
        <BreakAllContainer
          className="AnnualConferenceMainContainer-outer content-block-content position-relative text-center d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className="AnnualConferenceMainContainer-inner flex-column justify-content-center align-items-center text-center"
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
                  color: "#ffffff",
                  margin: 0,
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "110%",
                  fontFamily: "'Unna', serif !important",
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
              <RegisterNowButton />
            </div>
          </div>
        </BreakAllContainer>
      </div>
    </div>
  );
};

export default HomeMainPictureComponent;
