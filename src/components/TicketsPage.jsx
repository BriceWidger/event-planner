import React, { useState } from "react";
import CheckoutHeader from "./CheckoutHeader";

const TicketsPage = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleContinueClick = () => {
    setShowAlert(true);
    setTimeout(() => {
      setAlertVisible(true);
    }, 100); // add a small delay here
    setTimeout(() => {
      setAlertVisible(false);
    }, 4100); // adjust the timeout to account for the delay
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fc",
        height: "100vh",
      }}
    >
      <CheckoutHeader />
      <div
        className="container select-tickets-container"
        style={{
          width: "770px",
          height: "274.667px",
          paddingLeft: "15px",
          paddingRight: "15px",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "0",
          paddingTop: "0",
          paddingBottom: "0",
          position: "relative",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <h3>Select Ticket(s)</h3>
        </div>
        <div className="card" style={{ backgroundColor: "white", flex: 1 }}>
          <div
            className="card-body"
            style={{
              padding: "40px 50px",
              border: "0.566667px solid #ddd",
              borderTopWidth: "2.83333px",
              borderTopColor: "black",
            }}
          >
            <div className="row">
              <div className="col-md-8">
                <h3>General Admission</h3>
                <h5 className="text-muted">$0.00</h5>
                <div className="ticket-description"></div>
              </div>
              <div className="col-md-4">
                <select className="form-select">
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <input
          type="submit"
          value="Continue"
          className="btn btn-primary"
          id="event-show-checkout"
          style={{
            position: "absolute",
            bottom: 0,
            right: 15,
          }}
          onClick={handleContinueClick}
        />
        {showAlert && (
          <div
            className="alert alert-danger ticket-alert"
            style={{
              width: "244.05px",
              height: "46px",
              position: "fixed",
              top: alertVisible ? "10px" : "-50px",
              right: "20px",
              backgroundColor: "#252f3e",
              color: "#fbfbfb",
              transition: alertVisible
                ? "top 0.3s ease-in-out"
                : "top 0.22s ease-in-out",
            }}
          >
            Please select a ticket
          </div>
        )}
      </div>
    </div>
  );
};

export default TicketsPage;
