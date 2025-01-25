import React from "react";
import RegisterNowButton from "./RegisterNowButton";

const DontMissOut = () => {
  return (
    <div className="dontmissout-container position-relative">
      <div
        className="dontmissout-bg-img img-fluid w-100 h-100 m-0"
        style={{
          minHeight: "331.2px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingTop: "70px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="bg-image"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/eventcreate/image/upload/v1575668151/themes/theme%20assets/photo-1515006346612-71f85b11e4fe_ak5ufw.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "0% 10%",
            filter: "brightness(0.2)",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1,
          }}
        />
<div
  className="text-center text-white"
  style={{
    maxWidth: "400px",
    padding: "0 20px",
  }}
>
          <h1
            className="display-1 font-weight-normal"
            style={{
              fontSize: "52px",
              fontFamily: "'Unna', serif",
              fontWeight: 400,
              lineHeight: "110%",
              wordBreak: "break-all",
            }}
          >
            Don't miss out.
          </h1>
          <p
            className="text-opacity-50 mt-3 mb-4"
            style={{
              wordBreak: "break-all",
            }}
          >
            Register by December 26 . We look forward to seeing you there.
          </p>
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
              wordBreak: "break-all",
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

export default DontMissOut;