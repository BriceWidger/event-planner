import React from "react";

const SpeakerThree = () => {
  return (
    <div className="speaker-container-main col col-md-2">
      <img
        className="img-fluid rounded-circle"
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker3_swuare_ofjsvm.jpg"
      />
      <h2 className="speaker-name text-center fs-5 fw-semibold">Albert Dean</h2>
      <p className="speaker-role text-center text-sm fw-semibold">
        FOUNDER, ACME
      </p>
      <p className="speaker-info text-center">
        Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi
        massa.
      </p>
    </div>
  );
};

export default SpeakerThree;
