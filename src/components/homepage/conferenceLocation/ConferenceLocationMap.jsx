import React from "react";

const ConferenceLocationMap = () => {
  return (
    <div className="col-md-12 fr-inner d-flex justify-content-center">
      <div className="map-img-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed/v1/place?q=WeWork,+220+N+Green+Street,+Chicago,+IL&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          frameBorder="0"
          width="940"
          height="400"
          style={{ border: 0 }}
        />
      </div>
    </div>
  );
};

export default ConferenceLocationMap;
