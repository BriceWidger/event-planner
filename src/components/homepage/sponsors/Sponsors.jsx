import React from "react";
import SponsorsTitle from "./SponsorsTitle";
import SponsorsLogos from "./SponsorsLogos";

const Sponsors = () => {
  return (
    <section id="sponsors-container-main" className="sponsors-container-main" style={{ paddingTop: "70px", paddingBottom: "84px" }}>
      <div className="container text-center">
        <SponsorsTitle />
        <SponsorsLogos />
      </div>
    </section>
  );
};

export default Sponsors;