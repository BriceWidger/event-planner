import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const OrderNumber = ({ orderNumber, firstName, lastName, email }) => {
  return (
    <div className="ticket-container-main">
      <h1
        style={{
          fontWeight: 700,
          fontSize: 36,
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Thank you
      </h1>
      <p
        style={{
          marginBottom: 20,
          fontWeight: 400,
          fontSize: 15,
          color: "#555",
        }}
      >
        Thank you for your response. Your response has been sent to the event
        organizer.
      </p>
      <div
        className="ticket-container"
        style={{
          border: "1px solid #ccc",
          borderTop: "3px solid #1f2834",
          padding: "40px 40px",
          marginBottom: "20px",
        }}
      >
        <div className="row">
          <div className="col-md-6 col-lg-7">
            <h5 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>
              Order Number: {orderNumber}
            </h5>
            <p
              style={{
                fontWeight: 400,
                fontSize: 16,
                color: "#555",
                margin: "0 0 10px",
              }}
            >
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
                style={{
                  backgroundColor: "#2d4086",
                  color: "#fff",
                  WebkitTransition: "all 0.2s ease",
                  fontSize: 13,
                  padding: "15px 28px",
                  borderRadius: 6,
                  display: "inline-block",
                  fontWeight: 700,
                  cursor: "pointer",
                  border: "none",
                  background: "#334999",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  verticalAlign: "middle",
                  touchAction: "manipulation",
                  lineHeight: 1.428571429,
                }}
                href="https://checkout.eventcreate.com/annual-conference-666681/build-ticket?oid=aa022cfe-dc85-4cb0-8643-c0aacb104ed8&amp;rt=914dd8f4ea15cf4194d95e708554e7ac089111dc"
              >
                <i className="bi bi-printer"></i> Print My Ticket(s) Now
              </a>
              <p
                className="help-block"
                style={{
                  fontSize: 12,
                  lineHeight: 1.3,
                  display: "block",
                  marginTop: 5,
                  marginBottom: 10,
                  color: "#737373",
                  fontWeight: 400,
                }}
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
