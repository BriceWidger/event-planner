// NewsHeader.js
import React from "react";

const NewsHeader = () => {
  return (
    <div className="row text-center">
      <div className="title-paragragh col-md-8 offset-md-2">
        <h2
          style={{
            fontSize: "52px",
            fontFamily: "'Unna', serif",
            fontWeight: 400,
            margin: 0,
            lineHeight: "110%",
            wordBreak: "break-all",
          }}
          className="mb-4"
        >
          News & Updates
        </h2>
        <p
          style={{
            color: "#888",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
            textAlign: "center",
            wordBreak: "break-all",
          }}
          className="mb-5"
        >
          <span
            style={{
              color: "#888",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "150%",
              fontFamily: "'Nunito Sans', sans-serif",
              textAlign: "center",
              wordBreak: "break-all",
            }}
          >
            Cras posuere non dui eu tincidunt. Maecenas congue dignissim tortor,
            eget euismod ex. Duis fringilla auctor faucibus. Donec pulvinar
            venenatis nisi. Nam vitae lectus egestas, pretium ante sed, ultrices
            ligula. Donec erat elit, semper eu risus et, gravida sollicitudin
            enim. Nunc sit amet imperdiet tellus. Ut lacinia odio urna, non
            eleifend odio porttitor in. Fusce vitae dictum dui, at cursus enim.
          </span>
        </p>
      </div>
    </div>
  );
};

export default NewsHeader;
