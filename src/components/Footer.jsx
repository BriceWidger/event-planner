import React from "react";

const Footer = () => {
  return (
    <div
      className="content-block content-block-footer bg-black d-flex justify-content-center align-items-center"
      style={{ height: 487.5 }}
      data-block-type="footer"
      id="footer1"
    >
      <div className="content-block-bg"></div>
      <div className="content-block-content">
        <div className="container text-center">
          <div className="container-inner">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                <p className="text-white" style={{ marginBottom: 32 }}>
                  Integer fermentum tempor quam in hendrerit. Quisque non augue
                  elit. Curabitur at mollis leo. Suspendisse sit amet
                  condimentum tortor. Etiam ac augue non lacus malesuada mollis
                  sit amet id urna. Aenean id euismod sem. Aliquam ante odio,
                  auctor ut fringilla vitae, auctor et purus.
                </p>
                <a
                  rel="nofollow"
                  href="https://checkout.eventcreate.com/annual-conference-666681/select-buy"
                  className="btn btn-light"
                >
                  Register Now
                </a>
                <div className="mb-5"></div>
                <p className="text-white">
                  &copy; 2024. All Rights Reserved. <br />
                  Event website powered by{" "}
                  <a
                    rel="nofollow"
                    href="https://www.eventcreate.com/"
                    target="_blank"
                    id="ec_link"
                  >
                    EventCreate
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
