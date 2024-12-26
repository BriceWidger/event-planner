// NewsItem.js
import React from "react";

const NewsItem = ({ image, title, date, text }) => {
  return (
    <div className="row">
      <div className="col-md-6 mb-5">
        <img className="img-fluid" src={image} />
      </div>
      <div className="col-md-6 mb-5">
        <h5 className="mb-3">
          <strong>{title}</strong>
        </h5>
        <h4 className="mb-3">
          <strong>{date}</strong>
        </h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NewsItem;
