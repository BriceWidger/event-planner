import React from "react";

const SpeakerOne = () => {
  return (
    <div className="speaker-container-main col col-md-2">
      <img
        className="img-fluid rounded-circle"
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker2_swuare_n9wd9s.jpg"
      />
      <h2 className="speaker-name text-center fs-5 fw-semibold">
        Yvonne Butler
      </h2>
      <p className="speaker-role text-center text-sm fw-semibold">CEO, ACME</p>
      <p className="speaker-info text-center">
        Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi
        massa.
      </p>
    </div>
  );
};

export default SpeakerOne;
