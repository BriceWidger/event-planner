import React from "react";

const ConferenceLocation = () => {
  return (
    <div
      id="conference-location-container-main"
      className="conference-location-container-main w-100 h-100vh bg-black d-flex justify-content-center"
      style={{ height: "853.2px" }}
    >
      <div className="conference-location-container-middle w-100 d-flex justify-content-center align-items-center flex-column">
        <div className="conference-location-text-wrap col col-md-8 col-md-offset-2 text-center">
          <h1 className="text-white display-5 pb-3">Conference Location</h1>
          <h5 className="opacity-75 pb-3" style={{ color: "#3d6889" }}>
            WeWork, 220 N Green Street, Chicago, IL
          </h5>
          <p className="text-white fs-5 opacity-25 pb-5">
            Etiam ullamcorper justo quis interdum imperdiet. Praesent bibendum
            eget erat non gravida. Etiam porta feugiat quam, eu laoreet arcu
            dignissim convallis. In ut imperdiet mi, quis ornare sem.
          </p>
        </div>
        <div className="map-img-container col col-md-12 fr-inner d-flex justify-content-center">
          <img
            src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
            style={{ width: "940px", height: "400px", padding: "0 15px" }}
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ConferenceLocation;
