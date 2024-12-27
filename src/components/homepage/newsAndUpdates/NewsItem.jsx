// NewsItem.js
import React from "react";

const NewsItem = ({ image, title, date, text }) => {
  return (
    <div className="row">
      <div className="col-md-6 mb-5">
        <img className="img-fluid" src={image} />
      </div>
      <div className="col-md-6 mb-5">
        <h5
          style={{
            fontWeight: "bold",
            fontSize: "20px",
            lineHeight: "110%",
          }}
          className="mb-3"
        >
          {title}
        </h5>
        <h4
          style={{
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "14px",
            margin: 0,
            lineHeight: "200%",
          }}
          className="mb-3"
        >
          {date}
        </h4>
        <p
          style={{
            color: "#888",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
