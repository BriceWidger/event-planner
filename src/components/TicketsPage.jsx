import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const TicketsPage = () => (
  <div>
    <header>
      <CheckoutHeader />
    </header>
    <div className="container">
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
  </div>
);

export default TicketsPage;
