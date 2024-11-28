import React from "react";

const SpeakerTwo = () => {
  return (
    <div className="speaker-container-main col col-md-2">
      <img
        className="img-fluid rounded-circle"
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575749662/themes/theme%20assets/speaker1_square_wn3ik5.jpg"
      />
      <h2 className="speaker-name text-center fs-5 fw-semibold">
        Larry Coleman
      </h2>
      <p className="speaker-role text-center text-sm fw-semibold">
        CMO, XYZ, Inc.
      </p>
      <p className="speaker-info text-center">
        Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi
        massa.
      </p>
    </div>
  );
};

export default SpeakerTwo;
