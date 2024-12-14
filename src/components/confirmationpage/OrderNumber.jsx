import React from "react";

const OrderNumber = ({ orderNumber, firstName, lastName, email }) => {
  return (
    <div className="ticket-container-main">
      <h1>Thank you</h1>
      <p>
        Thank you for your response. Your response has been sent to the event
        organizer.
      </p>
      <div
        className="ticket-container"
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <h5 style={{ fontSize: 17, fontWeight: 700 }}>
              Order Number: {orderNumber}
            </h5>
            <p>
              {firstName} {lastName}
              <br />
              {email}
            </p>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="form-group">
              <a
                className="btn btn-primary"
                target="_blank"
                style={{ backgroundColor: "#334999" }}
                href="https://checkout.eventcreate.com/annual-conference-666681/build-ticket?oid=aa022cfe-dc85-4cb0-8643-c0aacb104ed8&amp;rt=914dd8f4ea15cf4194d95e708554e7ac089111dc"
              >
                <i className="far fa-print"></i> Print My Ticket(s) Now
              </a>
              <p
                className="help-block"
                style={{ fontSize: 12, lineHeight: 1.3 }}
              >
                We've also emailed these tickets to {email}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderNumber;
