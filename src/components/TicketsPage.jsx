import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const TicketsPage = () => {
  return (
    <div style={{ height: "363.8px", backgroundColor: "#f8f9fc" }}>
      <CheckoutHeader />
      <div className="container mt-3">
        <h3 className="mb-4 mt-3 fw-bold fs-5">Select Ticket(s)</h3>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-8">
                    <h3 className="fw-bold fs-5">General Admission</h3>
                    <h5 className="fw-bold fs-6">$0.00</h5>
                    <div className="ticket-description"></div>
                  </div>
                  <div className="col-md-3 offset-md-1">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketsPage;
