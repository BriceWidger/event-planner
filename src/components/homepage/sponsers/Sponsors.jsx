import React from "react";
import SponsorsTitle from "./SponsorsTitle";
import SponsorsLogos from "./SponsorsLogos";

const Sponsors = () => {
  return (
    <section
      id="sponsors-container-main"
      className="sponsors-container-main mx-auto d-flex justify-content-center align-items-center"
      style={{ height: "461.2px" }}
    >
      <div className="content-block-content d-flex justify-content-center align-items-center">
        <div className="container text-center">
          <SponsorsTitle />
          <SponsorsLogos />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
