import React from "react";
import SpeakerInfo from "./SpeakerInfo";

const KeynoteSpeakers = () => (
  <section
    id="keynote-container-main"
    className="container-fluid d-flex align-items-center"
    style={{ paddingTop: "70px", paddingBottom: "84px" }}
  >
    <div className="container-fluid vw-100 p-0 m-0">
      <div className="w-100 d-flex justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div
            className="keynote-title-container"
            style={{ width: 304, padding: "0 15px" }}
          >
            <h1
              className="keynote-title text-center display-4"
              style={{
                fontWeight: "400",
                lineHeight: "110%",
                fontFamily: "'Unna', serif",
                fontSize: "46px",
              }}
            >
              Keynote Speakers
            </h1>
            <p
              className="keynote-subtitle text-center"
              style={{
                fontWeight: 400,
                fontSize: 16,
                lineHeight: "150%",
                fontFamily: "'Nunito Sans', sans-serif",
                color: "#888",
              }}
            >
              We are extremely excited to showcase the lineup of impressive
              keynote speakers. Pellentesque ullamcorper tortor ut auctor
              consequat. Nullam sed nisi massa. Aliquam eget enim nunc. Praesent
              blandit blandit ornare.
            </p>
          </div>
        </div>
      </div>
      <section className="row justify-content-center">
        <div className="col-md-6 col-lg-3">
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker2_swuare_n9wd9s.jpg"
            name="Yvonne Butler"
            role="CEO, ACME"
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749662/themes/theme%20assets/speaker1_square_wn3ik5.jpg"
            name="Larry Coleman"
            role="CMO, XYZ, Inc."
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575749661/themes/theme%20assets/speaker3_swuare_ofjsvm.jpg"
            name="Albert Dean"
            role="FOUNDER, ACME"
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
        </div>
        <div className="col-md-6 col-lg-3">
          <SpeakerInfo
            imageSrc="https://res.cloudinary.com/eventcreate/image/upload/v1575750521/themes/theme%20assets/speaker4_swuare_zxjryd.jpg"
            name="Kurt Young"
            role="CFO, XYZ, Inc."
            info="Pellentesque ullamcorper tortor ut auctor consequat. Nullam sed nisi massa."
          />
        </div>
      </section>
      <div
        className="speaker-invitation-container"
        style={{ width: 304, padding: "0 15px", margin: "0 auto" }}
      >
        <div className="col-md-8 col-lg-6 mx-auto" style={{ width: 274 }}>
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
