import React from "react";
import SpeakerOne from "./SpeakerOne";
import SpeakerTwo from "./SpeakerTwo";
import SpeakerThree from "./SpeakerThree";
import SpeakerFour from "./SpeakerFour";

const KEYNOTE_CONTAINER_HEIGHT = "880.5px";
const KEYNOTE_CONTAINER_MIDDLE_HEIGHT = "726.5px";
const KEYNOTE_SPEAKERS_TITLE_CONTAINER_WIDTH = "616.667px";
const KEYNOTE_TITLE_FONT_SIZE = "48px";

const KeynoteSpeakers = () => {
  return (
    <section
      // Main container
      className="keynote-container-main container-fluid p-0 d-flex align-items-center"
      style={{ height: KEYNOTE_CONTAINER_HEIGHT }}
    >
      <div
        // Middle container
        className="keynote-container-middle container-fluid"
        style={{ height: KEYNOTE_CONTAINER_MIDDLE_HEIGHT }}
      >
        <div className="container-fluid px-0">
          <header className="keynote-speakers-title-container-outer container-lg h-100 d-flex flex-column justify-content-start align-items-center">
            <section
              className="keynote-speakers-title-container-inner"
              style={{ width: KEYNOTE_SPEAKERS_TITLE_CONTAINER_WIDTH }}
            >
              <h1
                className="keynote-title text-center"
                style={{ fontSize: KEYNOTE_TITLE_FONT_SIZE }}
              >
                Keynote Speakers
              </h1>
              <p className="keynote-subtitle text-center">
                We are extremely excited to showcase the lineup of impressive
                keynote speakers. Pellentesque ullamcorper tortor ut auctor
                consequat. Nullam sed nisi massa. Aliquam eget enim nunc.
                Praesent blandit blandit ornare.
              </p>
            </section>
          </header>
          <section className="speakers-row-main row justify-content-center">
            <SpeakerOne alt="Speaker One" />
            <SpeakerTwo alt="Speaker Two" />
            <SpeakerThree alt="Speaker Three" />
            <SpeakerFour alt="Speaker Four" />
          </section>
          <div className="col-md-8 mx-auto pt-5">
            Interested in speaking at the event? Aliquam erat volutpat. Aenean
            id enim ut nisi consequat venenatis. Phasellus cursus ipsum at nunc
            placerat auctor. Curabitur lorem arcu, lacinia nec consequat vitae,
            pellentesque rhoncus sapien. Nunc a eros massa. Phasellus massa
            enim, egestas quis viverra et, porta eget dui.
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeynoteSpeakers;
