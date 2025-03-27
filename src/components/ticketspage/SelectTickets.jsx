import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectTickets = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("0");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleContinueClick = () => {
    const ticketPrice = 150; // General Admission price
    if (selectedValue !== "0") {
      const totalPrice = ticketPrice * parseInt(selectedValue, 10);
      navigate("/details", {
        state: {
          ticketQuantity: selectedValue,
          ticketAmount: totalPrice,
        },
      });
    } else {
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 4100);
    }
  };

  return (
    <div
      className="container select-tickets-container"
      style={{
        maxWidth: "800px",
        padding: "0 15px",
        margin: "30px auto 0",
        position: "relative",
        flex: "1",
      }}
    >
      <div
        className="card-container"
        style={{
          maxWidth: "800px",
          margin: "30px auto 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="card-button-container" style={{ width: "100%" }}>
          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 600 }}>
              Select Ticket(s)
            </h3>
          </div>
          <div
            className="card"
            style={{
              backgroundColor: "white",
              flex: 1,
              width: "100%",
              border: "none",
            }}
          >
            <div
              className="card-body"
              style={{
                padding: "30px",
                border: "0.566667px solid #ddd",
                borderTopWidth: "2.83333px",
                borderTopColor: "black",
              }}
            >
              <div className="row">
                <div className="col-md-8">
                  <h3
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      wordBreak: "break-word",
                    }}
                  >
                    General Admission
                  </h3>
                  <h5
                    className="text-muted"
                    style={{ fontSize: "17px", fontWeight: 700 }}
                  >
                    $150.00
                  </h5>
                  <div className="ticket-description"></div>
                </div>
                <div className="col-md-4">
                  <select
                    className="form-select"
                    value={selectedValue}
                    onChange={(e) => setSelectedValue(e.target.value)}
                    aria-label="Select number of tickets"
                  >
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
              marginTop: "20px",
              float: "right",
              backgroundColor: "#334999",
              borderColor: "#334999",
            }}
            onClick={handleContinueClick}
            aria-label="Continue to details page"
          />
        </div>
      </div>
      {alertVisible && (
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
            transition: "top 0.3s ease-in-out",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Please select a ticket
        </div>
      )}
    </div>
  );
};

export default SelectTickets;
