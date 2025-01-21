import React from "react";

const ScheduleInfo = ({ time, title, description, style }) => {
  return (
    <div
      className="scheduled-time-container-main col-12 row"
      style={{ ...style }}
    >
      <div
        className="time-block col-12 col-md-2"
        style={{
          fontWeight: "bold",
          fontSize: "18px",
          lineHeight: "110%",
          color: "#3d6889",
          fontFamily: "'Poppins', sans-serif",
          wordBreak: "break-all",
        }}
      >
        {time}
      </div>
      <div className="col col-12 col-md-10">
        <h3
          className="col"
          style={{
            wordBreak: "break-all",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#888",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            fontFamily: "'Nunito Sans', sans-serif",
            wordBreak: "break-all",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default ScheduleInfo;
