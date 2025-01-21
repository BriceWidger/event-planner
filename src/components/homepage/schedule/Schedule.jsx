import React from "react";
import ScheduleInfo from "./ScheduleInfo";
import { Container } from "react-bootstrap";
import "./Schedule.css";

const Schedule = () => {
  return (
    <Container style={{ paddingTop: "70px", paddingBottom: "84px",
      maxWidth: "1140px",
     }}>
      <div
        id="schedule-container-middle"
        className="schedule-container d-flex justify-content-center align-items-center"
        style={{
          fontFamily: "'Unna', serif",
        }}
      >
        <div
          className="schedule-content"
          style={{
            overflowY: "auto",
            margin: "auto",
          }}
        >
          <h1
            className="col-12"
            style={{
              fontSize: "52px",
              marginBottom: "30px",
              paddingLeft: "12px",
              paddingRight: "12px",
              wordBreak: "break-all",
              "@media (min-width: 768px)": {
                fontSize: "64px",
              },
            }}
          >
            Schedule
          </h1>
          <ScheduleInfo
            time="| &nbsp;&nbsp; 8:00 am"
            title="Coffee and Conversation"
            description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
            style={{ width: "100%" }}
          />
          <ScheduleInfo
            time="| &nbsp;&nbsp; 9:00 am"
            title="Welcome"
            description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
            style={{ width: "100%" }}
          />
          <ScheduleInfo
            time="| &nbsp;&nbsp; 9:30 am"
            title="Keynote: Understanding System Complexity "
            description="Nullam lectus nisi, pulvinar vitae blandit dignissim, egestas non eros. Sed vel purus et sapien ornare pulvinar. Aliquam erat volutpat. Mauris nibh dolor, feugiat a ex sit amet, blandit ornare nulla. Proin luctus lorem diam. Proin nec ipsum id quam vulputate tempor. Etiam eleifend vitae urna et rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia."
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </Container>
  );
};

export default Schedule;
