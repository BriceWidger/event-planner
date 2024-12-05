import React from "react";
import ArrowDivider from "./ArrowDivider";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <div
      className="checkout-header vw-100 d-flex justify-content-between align-items-center"
      style={{
        height: "59.1333px",
        border: "1px solid #ccc",
        padding: "14px",
      }}
    >
      <div className="d-flex flex-grow-1">
        <span className="fw-bold" style={{ fontSize: "12px" }}>
          Annual Conference
        </span>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center">
        <div className="btn-breadcrumb d-inline-flex align-items-center">
          <Link to="/">
            <img
              src="/images/home-icon.png"
              style={{
                width: "16.6167px",
                height: "15px",
              }}
            />
          </Link>
          <ArrowDivider />
          <span className="fw-bold" style={{ fontSize: "12px" }}>
            Tickets
          </span>
          <ArrowDivider />
          <span className="fw-bold" style={{ fontSize: "12px" }}>
            Details
          </span>
          <ArrowDivider />
          <span className="fw-bold" style={{ fontSize: "12px" }}>
            Confirmation
          </span>
        </div>
      </div>
      <div className="d-flex flex-grow-1 justify-content-end">
        <div className="secure-lock-container d-inline-flex align-items-center">
          <img
            src="/images/locked-icon.png"
            style={{
              width: "15.31667px",
              height: "15px",
            }}
          />
          <div className="ms-2 fw-bold" style={{ fontSize: "12px" }}>
            Secure
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutHeader;
