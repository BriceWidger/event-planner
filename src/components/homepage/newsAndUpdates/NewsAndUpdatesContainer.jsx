// NewsAndUpdatesContainer.js
import React from "react";
import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";

const NewsAndUpdatesContainer = () => {
  return (
    <div
      id="news-updates-container"
      className="news-updates-container d-flex justify-content-center align-items-center"
      style={{ height: 1075.97, backgroundColor: "#eaeaea" }}
    >
      <div className="container mt-5 mb-5">
        <NewsHeader />
        <NewsList />
      </div>
    </div>
  );
};

export default NewsAndUpdatesContainer;
