import React from "react";

const HomeMainPicture = () => {
  return (
    <div className="container-fluid p-0">
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
    </div>
  );
};

export default HomeMainPicture;
