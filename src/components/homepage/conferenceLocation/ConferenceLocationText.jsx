import React from "react";

const ConferenceLocationText = () => {
  return (
    <div
      className="conference-location-text-wrap text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "20px",
      }}
    >
      <h1
        className="text-white display-5 pb-3 fw-normal"
        style={{
          fontSize: "52px",
          fontFamily: "'Unna', serif",
          margin: 0,
          lineHeight: "110%",
        }}
      >
        Conference Location
      </h1>
      <div
        className="ec-editor-block p"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        data-elementtype="text"
      >
        <h5
          className="opacity-75 pb-3 fw-normal"
          style={{
            color: "#3d6889",
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          WeWork, 220 N Green Street, Chicago, IL
        </h5>
        <p
          className="text-white opacity-50 mb-0 fw-normal"
          style={{
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
            paddingBottom: "70px",
          }}
        >
          Etiam ullamcorper justo quis interdum imperdiet. Praesent bibendum
          eget erat non gravida. Etiam porta feugiat quam, eu laoreet arcu
          dignissim convallis. In ut imperdiet mi, quis ornare sem.
        </p>
      </div>
    </div>
  );
};

export default ConferenceLocationText;
