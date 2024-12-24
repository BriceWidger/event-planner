import React from "react";
import SpeakerInfo from "./SpeakerInfo";

const KEYNOTE_CONTAINER_HEIGHT = "880.5px";
const KEYNOTE_CONTAINER_MIDDLE_HEIGHT = "726.5px";
const KEYNOTE_SPEAKERS_TITLE_CONTAINER_WIDTH = "616.667px";
const KEYNOTE_TITLE_FONT_SIZE = "48px";

const KeynoteSpeakers = () => (
  <section
    id="keynote-container-main"
    className="keynote-container-main container-fluid p-0 d-flex align-items-center"
    style={{ height: KEYNOTE_CONTAINER_HEIGHT }}
  >
    <div
      className="keynote-container-middle container-fluid vw-100 p-0 m-0"
      style={{ height: KEYNOTE_CONTAINER_MIDDLE_HEIGHT, width: "100vw" }}
    >
      <div className="px-0">
        <header className="keynote-speakers-title-container-outer container-lg h-100 d-flex flex-column justify-content-start align-items-center mb-5">
          <section className="keynote-speakers-title-container-inner w-75 mx-auto">
            <h1
              className="keynote-title text-center"
              style={{ fontSize: KEYNOTE_TITLE_FONT_SIZE }}
            >
              Keynote Speakers
            </h1>
            <p
              className="keynote-subtitle text-center"
              style={{ color: "#888" }}
            >
              We are extremely excited to showcase the lineup of impressive
              keynote speakers. Pellentesque ullamcorper tortor ut auctor
              consequat. Nullam sed nisi massa. Aliquam eget enim nunc. Praesent
              blandit blandit ornare.
            </p>
          </section>
        </header>
        <section
          className="speakers-row-main row justify-content-center"
          style={{ width: "970px", margin: "0 auto" }}
        >
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker2_swuare_n9wd9s.jpg"
            name="Yvonne Butler"
            role="CEO, ACME"
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749662/themes/theme%20assets/speaker1_square_wn3ik5.jpg"
            name="Larry Coleman"
            role="CMO, XYZ, Inc."
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker3_swuare_ofjsvm.jpg"
            name="Albert Dean"
            role="FOUNDER, ACME"
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575750521/themes/theme%20assets/speaker4_swuare_zxjryd.jpg"
            name="Kurt Young"
            role="CFO, XYZ, Inc."
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
        </section>
        <div
          className="col-md-8 mx-auto"
          style={{ height: "72px", width: "940px", marginTop: "80px" }}
        >
          <strong>Interested in speaking at the event?</strong> Aliquam erat
          volutpat. Aenean id enim ut nisi consequat venenatis. Phasellus cursus
          ipsum at nunc placerat auctor. Curabitur lorem arcu, lacinia nec
          consequat vitae, pellentesque rhoncus sapien. Nunc a eros massa.
          Phasellus massa enim, egestas quis viverra et, porta eget dui.
        </div>
      </div>
    </div>
  </section>
);

export default KeynoteSpeakers;
