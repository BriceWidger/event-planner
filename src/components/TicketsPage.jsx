import React from "react";
import ArrowDivider from "./ArrowDivider";

const TicketsPage = () => {
  return (
    <div
      className="vw-100 d-flex justify-content-center align-items-center"
      style={{
        height: "59.1333px",
        border: "1px solid #ccc",
        padding: "14px",
      }}
    >
      <div className="vw-100 d-flex justify-content-between">
        <h5 className="col-md-2">Annual Conference</h5>
        <div className="col-md-2 d-flex align-items-center">
          <img
            src="/images/home-icon.png"
            style={{
              width: "16.6167px",
              height: "15px",
            }}
          />
          <ArrowDivider />
          <span>Tickets</span>
          <ArrowDivider />
          <span>Details</span>
          <ArrowDivider />
          <span>Confirmation</span>
        </div>
        <div className="col-md-2">durp</div>
      </div>
    </div>
  );
};

export default TicketsPage;
