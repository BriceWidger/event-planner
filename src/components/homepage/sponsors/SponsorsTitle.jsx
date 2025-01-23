import React from "react";

const SponsorsTitle = () => {
  return (
    <div className="text-center mb-5">
      <h2
        className="display-4 font-weight-bold"
        style={{
          fontSize: "52px",
          fontFamily: "'Unna', serif",
          fontWeight: "400",
          margin: "0 0 16px 0",
          lineHeight: "110%",
          wordBreak: "break-all",
        }}
      >
        Sponsors
      </h2>
      <p
        className="sponsor-information lead text-muted"
        style={{
          color: "#888",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "150%",
          fontFamily: "'Nunito Sans', sans-serif",
          margin: "0 auto",
          padding: "0 15px",
          boxSizing: "border-box",
          textAlign: "center",
          wordWrap: "break-word",
          fontStyle: "normal",
          maxWidth: "750px",
        }}
      >
        Cras posuere non dui eu tincidunt. Maecenas congue dignissim tortor,
        eget euismod ex. Duis fringilla auctor faucibus. Donec pulvinar
        venenatis nisi. Nam vitae lectus egestas, pretium ante sed, ultrices
        ligula. Donec erat elit, semper eu risus et, gravida sollicitudin enim.
        Nunc sit amet imperdiet tellus. Ut lacinia odio urna, non eleifend odio
        porttitor in. Fusce vitae dictum dui, at cursus enim.
      </p>
    </div>
  );
};

export default SponsorsTitle;