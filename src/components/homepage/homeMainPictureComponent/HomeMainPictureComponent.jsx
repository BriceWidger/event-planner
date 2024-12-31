// HomeMainPictureComponent.js
import React from "react";
import ImageComponent from "./ImageComponent";
import ContentBlockComponent from "./ContentBlockComponent";

const HomeMainPictureComponent = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <ImageComponent />
      <ContentBlockComponent />
    </div>
  );
};

export default HomeMainPictureComponent;
