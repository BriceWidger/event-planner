import React from "react";
import { Link } from "react-router-dom";

const HomeMainPicture = () => {
  return (
    <div className="container-fluid p-0 position-relative">
      <img
        src="https://res.cloudinary.com/eventcreate/image/upload/v1575668151/themes/theme%20assets/photo-1515006346612-71f85b11e4fe_ak5ufw.jpg"
        className="img-fluid w-100 m-0"
        style={{
          height: "644px",
          objectFit: "cover",
          filter: "brightness(0.5)",
        }}
        alt="Main Picture"
      />
      <div
        className="content-block-content position-absolute top-50 start-50 translate-middle text-center"
        style={{
          height: "192px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="col-md-10 offset-md-1 mx-auto p-0"
          style={{ width: "778px" }}
        >
          <h1
            className="ec-editor-block h1 mb-0"
            style={{
              fontSize: "80px",
              color: "#ffffff",
              fontFamily: "'Unna', serif;",
            }}
          >
            Annual Conference
          </h1>
          <p
            className="ec-editor-block plead mb-4"
            style={{
              fontWeight: 400,
              fontSize: "20px",
              color: "#ffffff",
              lineHeight: "150%",
              fontFamily: "'Nunito Sans', sans-serif",
            }}
          >
            Join us on December 26
          </p>
          <Link
            to="/tickets"
            className="btn"
            style={{
              backgroundColor: "#3d6889",
              color: "#fff",
              borderRadius: "30px",
            }}
          >
            REGISTOR NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMainPicture;
