import React, { useState, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SelectTickets = () => {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const selectRef = useRef(null);

  const handleContinueClick = useCallback(() => {
    const selectedValue = selectRef.current.value;

    if (selectedValue !== "0") {
      navigate("/details");
    } else {
      setShowAlert(true);
      setTimeout(() => {
        setAlertVisible(true);
      }, 100);
      setTimeout(() => {
        setAlertVisible(false);
      }, 4100);
    }
  }, [navigate]);

  return (
    <div
      className="container select-tickets-container"
      style={{
        maxWidth: "800px",
        height: "274.667px",
        padding: "0 15px",
        margin: "30px auto 0",
        position: "relative",
        "@media (max-width: 575px)": {
          width: "100%",
          margin: "30px auto 0",
          padding: "0 15px",
        },
      }}
    >
      <div style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: 600 }}>Select Ticket(s)</h3>
      </div>
      <div className="card" style={{ backgroundColor: "white", flex: 1 }}>
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
                $0.00
              </h5>
              <div className="ticket-description"></div>
            </div>
            <div className="col-md-4">
              <select className="form-select" ref={selectRef}>
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
  );
};

export default SelectTickets;
