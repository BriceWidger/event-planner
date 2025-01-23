// NewsAndUpdatesContainer.js
import React from "react";
import NewsHeader from "./NewsHeader";
import NewsList from "./NewsList";
import './NewsAndUpdates.css';

const NewsAndUpdatesContainer = () => {
  return (
    <div
      id="news-updates-container"
      className="news-updates-container d-flex flex-column justify-content-center align-items-center"
      style={{
        flex: 1,
        backgroundColor: "#eaeaea",
        overflow: "hidden",
        padding: "2rem",
      }}
    >
      <div
        className="container mt-5 mb-5"
        style={{
          maxHeight: "100%",
          overflowY: "auto",
        }}
      >
        <NewsHeader />
        <NewsList />
      </div>
    </div>
  );
};

export default NewsAndUpdatesContainer;
