import React from "react";

const ScheduledTime = ({ time, title, description }) => {
  return (
    <div className="scheduled-time-container-main col-md-10 mx-auto row">
      <div className="time-block col-md-2">{time}</div>
      <div className="col col-md-10">
        <h3 className="col">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ScheduledTime;
