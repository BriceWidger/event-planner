import React from "react";
import ScheduleInfo from "./ScheduleInfo";

const Schedule = () => {
  return (
    <div
      id="schedule-container-middle"
      className="schedule-container d-flex justify-content-center align-items-center"
      style={{
        height: "1408.2px",
        width: "320px",
        fontFamily: "'Unna', serif",
      }}
    >
      <div
        className="schedule-content"
        style={{
          height: "1254.2px",
          maxHeight: "100%",
          overflowY: "auto",
          margin: "auto",
        }}
      >
        <h1
          className="col-md-10"
          style={{
            fontSize: "52px",
            marginBottom: "30px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "12px",
            paddingRight: "12px",
            width: "304px",
          }}
        >
          Schedule
        </h1>
        <ScheduleInfo
          time="| &nbsp;&nbsp; 8:00 am"
          title="Coffee and Conversation"
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
          style={{ width: "304px" }}
        />
        <ScheduleInfo
          time="| &nbsp;&nbsp; 9:00 am"
          title="Welcome"
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
          style={{ width: "304px" }}
        />
        <ScheduleInfo
          time="| &nbsp;&nbsp; 9:30 am"
          title="Keynote: Understanding System Complexity "
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
          style={{ width: "304px" }}
        />
      </div>
    </div>
  );
};

export default Schedule;