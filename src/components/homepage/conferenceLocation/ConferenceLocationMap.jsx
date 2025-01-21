import React from "react";

const ConferenceLocationMap = () => {
  return (
    <div
      className="col-md-12 fr-inner d-flex justify-content-center"
      style={{
        width: "100%",
        paddingLeft: "15px",
        paddingRight: "15px",
      }}
    >
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed/v1/place?q=WeWork,+220+N+Green+Street,+Chicago,+IL&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        frameBorder="0"
        style={{
          width: "100%",
          height: "400px",
          border: 0,
        }}
      />
    </div>
  );
};

export default ConferenceLocationMap;
