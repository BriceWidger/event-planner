import React from "react";
import styled from "styled-components";
import RegisterNowButton from "../RegisterNowButton";
import "./HomeMainPictureComponent.css";

const BreakAllContainer = styled.div`
  word-break: break-all;
`;

export const getDynamicDate = () => {
  const now = new Date();
  now.setDate(now.getDate() + 20);
  now.setHours(now.getHours() + 5);
  return now; // Return the Date object instead of a formatted string
};

const HomeMainPictureComponent = () => {
  return (
    <div
      className="container-fluid p-0 position-relative"
      style={{ minHeight: "712px" }}
    >
      <div
        className="background-container"
        style={{
          padding: "240px 20px 280px 20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
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
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="AnnualConferenceMainContainer-inner flex-column justify-content-center align-items-center text-center"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  color: "#ffffff",
                  margin: 0,
                  fontWeight: 400,
                  fontSize: "80px",
                  lineHeight: "110%",
                  textAlign: "center",
                }}
              >
                Annual Conference
              </h1>
              <p
                className="text-center"
                style={{
                  color: "#fff",
                  fontWeight: "400",
                  fontSize: "19px",
                  lineHeight: "150%",
                  textAlign: "center",
                }}
              >
                Join us on {getDynamicDate().toLocaleDateString(undefined, { month: "long", day: "numeric" })}
              </p>
            </div>
            <div
              className="register-now-btn-container text-center d-flex justify-content-center"
              style={{
                display: "flex",
                justifyContent: "center",
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
