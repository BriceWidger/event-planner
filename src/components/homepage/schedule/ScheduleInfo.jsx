import React from "react";

const ScheduleInfo = ({ time, title, description }) => {
  return (
    <div className="scheduled-time-container-main col-md-10 mx-auto row">
      <div
        className="time-block col-md-2"
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "110%",
          color: "#3d6889",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {time}
      </div>
      <div className="col col-md-10">
        <h3 className="col">{title}</h3>
        <p
          style={{
            color: "#888",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ScheduleInfo;
