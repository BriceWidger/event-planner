import React from "react";
import RegisterNowButton from "./RegisterNowButton";

const DontMissOut = () => {
  return (
    <div
      className="dontmissout-container position-relative h-100"
      style={{ height: "100%" }}
    >
      <div
        className="dontmissout-bg-img img-fluid w-100 h-100 m-0 justify-content-center align-items-center"
        style={{
          display: "block",
          minHeight: "331.2px",
          paddingTop: "70px",
          paddingBottom: "80px",
          flexGrow: 1,
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
            padding: "0 20px",
            wordBreak: "break-all",
            flexGrow: 1,
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
          <RegisterNowButton />
        </div>
      </div>
    </div>
  );
};

export default DontMissOut;
