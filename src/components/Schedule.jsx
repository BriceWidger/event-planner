import React from "react";
import ScheduledTime from "./ScheduledTime";

const Schedule = () => {
  return (
    <div
      className="schedule-container-middle d-flex justify-content-center align-items-center"
      style={{
        height: "746.4px",
      }}
    >
      <div
        className="schedule-container-middle"
        style={{
          height: "592.4px",
        }}
      >
        <h1
          className="col-md-10 mx-auto"
          style={{
            fontSize: "52px",
          }}
        >
          Schedule
        </h1>
        <ScheduledTime
          time="| &nbsp;&nbsp; 8:00 am"
          title="Coffee and Conversation"
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
        />
        <ScheduledTime
          time="| &nbsp;&nbsp; 9:00 am"
          title="Welcome"
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
        />
        <ScheduledTime
          time="| &nbsp;&nbsp; 9:30 am"
          title="Keynote: Understanding System Complexity "
          description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
        />
      </div>
    </div>
  );
};

export default Schedule;
