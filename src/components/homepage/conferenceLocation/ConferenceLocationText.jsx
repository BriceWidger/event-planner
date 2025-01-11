import React from "react";

const ConferenceLocationText = () => {
  return (
    <div
      className="conference-location-text-wrap col-md-8 text-center"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "304px",
        height: "416.4px",
        paddingLeft: "15px",
        paddingRight: "15px",
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
          width: "274px",
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
          width: "274px",
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
            width: "274px",
          }}
        >
          WeWork, 220 N Green Street, Chicago, IL
        </h5>
<p
  className="text-white opacity-50 mb-0"
  style={{
    fontSize: "16px",
    fontWeight: 400,
    lineHeight: "150%",
    fontFamily: "'Nunito Sans', sans-serif",
    width: "274px",
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
