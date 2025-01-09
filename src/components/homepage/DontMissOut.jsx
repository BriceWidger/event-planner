import React from "react";
import RegisterNowButton from "./RegisterNowButton";

const DontMissOut = () => {
  return (
    <div className="dontmissout-container position-relative">
      <img
        className="dontmissout-bg-img img-fluid w-100 m-0"
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575668151/themes/theme%20assets/photo-1515006346612-71f85b11e4fe_ak5ufw.jpg"
        alt="Background image"
        style={{
          height: "412.4px",
          objectFit: "cover",
          objectPosition: "0% 10%",
          filter: "brightness(0.2)",
        }}
      />
      <div
        className="position-absolute top-50 start-50 translate-middle text-center text-white"
        style={{ width: "274px", maxWidth: "274px" }}
      >
        <h1
          style={{
            fontSize: "52px",
            fontFamily: "'Unna', serif",
            fontWeight: 400,
            lineHeight: "110%",
          }}
        >
          Don't miss out.
        </h1>
        <p
          style={{
            opacity: 0.5,
            marginTop: "16px",
            marginBottom: "26px",
          }}
        >
          Register by December 26 . We look forward to seeing you there.
        </p>
        <RegisterNowButton />
      </div>
    </div>
  );
};

export default DontMissOut;
