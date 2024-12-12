import React from "react";

const Sponsors = () => {
  return (
    <section
      id="sponsors-container-main"
      className="sponsors-container-main mx-auto d-flex justify-content-center align-items-center"
      style={{ height: "461.2px" }}
    >
      <div className="content-block-content d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <div className="container-inner">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="sponsors-title-paragraph-wrap col-md-8 text-center">
                <h2 className="ec-editor-block" data-elementtype="text">
                  Sponsors
                </h2>
                <div
                  className="ec-editor-block spacer"
                  data-elementtype="spacer"
                  style={{ height: "16px" }}
                ></div>
                <p className="ec-editor-block" data-elementtype="text">
                  Cras posuere non dui eu tincidunt. Maecenas congue dignissim
                  tortor, eget euismod ex. Duis fringilla auctor faucibus. Donec
                  pulvinar venenatis nisi. Nam vitae lectus egestas, pretium
                  ante sed, ultrices ligula. Donec erat elit, semper eu risus
                  et, gravida sollicitudin enim. Nunc sit amet imperdiet tellus.
                  Ut lacinia odio urna, non eleifend odio porttitor in. Fusce
                  vitae dictum dui, at cursus enim.
                </p>
                <div
                  className="ec-editor-block spacer"
                  data-elementtype="spacer"
                  style={{ height: "70px" }}
                ></div>
              </div>
            </div>
            <div className="sponsors-logos ec-repeatable">
              <div className="row fr-inner justify-content-around">
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124619/themes/theme%20assets/apple_waf4wo.svg"
                      height="44"
                      alt="Apple"
                    />
                  </div>
                </div>
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124619/themes/theme%20assets/amazon_jreo4v.svg"
                      height="44"
                      alt="Amazon"
                    />
                  </div>
                </div>
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124619/themes/theme%20assets/cisco_bp2d1e.svg"
                      height="44"
                      alt="Cisco"
                    />
                  </div>
                </div>
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124619/themes/theme%20assets/ebay_umezde.svg"
                      height="44"
                      alt="eBay"
                    />
                  </div>
                </div>
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124621/themes/theme%20assets/intel_oqlavl.svg"
                      height="44"
                      alt="Intel"
                    />
                  </div>
                </div>
                <div className="col fr-inner">
                  <div className="ec-editor-block" data-elementtype="image">
                    <img
                      src="https://res.cloudinary.com/eventcreate/image/upload/v1638124623/themes/theme%20assets/salesforce_uxmc6p.svg"
                      height="44"
                      alt="Salesforce"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
