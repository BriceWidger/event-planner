import React from "react";

const SelectTickets = () => {
  return (
    <div
      className="select-tickets-container"
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
      <div className="container" style={{ backgroundColor: "white", flex: 1 }}>
        <div
          className="row"
          style={{
            padding: "40px 50px",
            border: "0.566667px solid #ddd",
            borderTopWidth: "2.83333px",
            borderTopColor: "black",
          }}
        >
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
      />
    </div>
  );
};

export default SelectTickets;
