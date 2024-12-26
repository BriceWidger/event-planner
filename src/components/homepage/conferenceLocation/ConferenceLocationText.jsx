import React from "react";

const ConferenceLocationText = () => {
  return (
    <div
      className="conference-location-text-wrap col col-md-8 text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1
        className="text-white display-5 pb-3"
        style={{
          fontSize: "52px",
          fontFamily: "'Unna', serif",
          fontWeight: 400,
          margin: 0,
          lineHeight: "110%",
        }}
      >
        Conference Location
      </h1>
      <div
        className="ec-editor-block p"
        style={{
          width: "616.667px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        data-elementtype="text"
      >
        <h5
          className="opacity-75 pb-3"
          style={{
            color: "#3d6889",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          WeWork, 220 N Green Street, Chicago, IL
        </h5>
        <p className="text-white opacity-25 pb-5" style={{ fontSize: "18px" }}>
          Etiam ullamcorper justo quis interdum imperdiet. Praesent bibendum
          eget erat non gravida. Etiam porta feugiat quam, eu laoreet arcu
          dignissim convallis. In ut imperdiet mi, quis ornare sem.
        </p>
      </div>
    </div>
  );
};

export default ConferenceLocationText;
