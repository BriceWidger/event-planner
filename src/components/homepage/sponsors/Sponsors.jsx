import React from "react";
import SponsorsTitle from "./SponsorsTitle";
import SponsorsLogos from "./SponsorsLogos";

const Sponsors = () => {
  return (
    <section id="sponsors-container-main" className="sponsors-container-main py-5">
      <div className="container text-center">
        <SponsorsTitle />
        <SponsorsLogos />
      </div>
    </section>
  );
};

export default Sponsors;