import React from "react";
import ConferenceLocationText from "./ConferenceLocationText";
import ConferenceLocationMap from "./ConferenceLocationMap";
import "./ConferenceLocation.css";

const ConferenceLocationContainer = () => {
  return (
    <div
      id="conference-location-container-main"
      className="conference-location-container-main w-100 h-100vh bg-black d-flex justify-content-center"
      style={{
        width: "320px",
        paddingTop: "70px",
        paddingBottom: "120px",
      }}
    >
      <div className="conference-location-container-middle w-100 d-flex justify-content-center align-items-center flex-column">
        <ConferenceLocationText />
        <ConferenceLocationMap />
      </div>
    </div>
  );
};

export default ConferenceLocationContainer;