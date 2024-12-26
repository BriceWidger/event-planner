import React from "react";

const SponsorsTitle = () => {
  return (
    <div className="text-center d-flex flex-column align-items-center">
      <h2
        style={{
          fontSize: "52px",
          fontFamily: "'Unna', serif",
          fontWeight: "400",
          margin: "0",
          lineHeight: "110%",
        }}
      >
        Sponsors
      </h2>
      <div style={{ height: "16px" }}></div>
      <p
        style={{
          width: "616.667px",
          height: "120px",
          overflow: "hidden",
          color: "#888",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "150%",
          fontFamily: "'Nunito Sans', sans-serif",
        }}
      >
        Cras posuere non dui eu tincidunt. Maecenas congue dignissim tortor,
        eget euismod ex. Duis fringilla auctor faucibus. Donec pulvinar
        venenatis nisi. Nam vitae lectus egestas, pretium ante sed, ultrices
        ligula. Donec erat elit, semper eu risus et, gravida sollicitudin enim.
        Nunc sit amet imperdiet tellus. Ut lacinia odio urna, non eleifend odio
        porttitor in. Fusce vitae dictum dui, at cursus enim.
      </p>
      <div style={{ height: "70px" }}></div>
    </div>
  );
};

export default SponsorsTitle;
