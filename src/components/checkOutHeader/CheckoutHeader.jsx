import React from "react";
import { useLocation } from "react-router-dom";
import ArrowDivider from "./ArrowDivider";
import { Link } from "react-router-dom";
import DetailsTimer from "./DetailsTimer";
import "./CheckoutHeader.css";

const CheckoutHeader = () => {
  const location = useLocation();

  return (
    <div
      className="checkout-header vw-100 d-flex justify-content-between align-items-center"
      style={{
        border: "1px solid #ccc",
        padding: "14px",
        backgroundColor: "white",
      }}
    >
      <div className="annual-conference-container d-flex flex-grow-1">
        <span className="fw-bold" style={{ fontSize: "12px" }}>
          Annual Conference
        </span>
      </div>
      <div className="d-flex flex-grow-1 justify-content-center">
        <div
          className="btn-breadcrumb d-inline-flex align-items-center flex-wrap"
          style={{
            cursor: "pointer",
            "@media (max-width: 768px)": {
              flexDirection: "column",
              alignItems: "center",
            },
          }}
        >
          <Link to="/">
            <img
              src="/images/home-icon.png"
              style={{
                width: "16.6167px",
                height: "15px",
              }}
            />
          </Link>
          <div className="arrow-tickets-container d-flex align-items-center justify-content-center">
            <ArrowDivider
              style={{
                "@media (max-width: 768px)": {
                  fontSize: "20px",
                  marginTop: "10px",
                },
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "12px",
                color: "#334999",
                "@media (max-width: 768px)": {
                  fontSize: "12px",
                },
              }}
            >
              Tickets
            </span>
          </div>
          <div className="arrow-details-container d-flex align-items-center justify-content-center">
            <ArrowDivider
              style={{
                "@media (max-width: 768px)": {
                  fontSize: "20px",
                  marginTop: "10px",
                },
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "12px",
                "@media (max-width: 768px)": {
                  fontSize: "12px",
                },
              }}
            >
              Details
            </span>
          </div>
          <div className="arrow-confirmation-container d-flex align-items-center justify-content-center">
            <ArrowDivider
              style={{
                "@media (max-width: 768px)": {
                  fontSize: "20px",
                  marginTop: "10px",
                },
              }}
            />
            <span
              className="fw-bold"
              style={{
                fontSize: "12px",
                "@media (max-width: 768px)": {
                  fontSize: "12px",
                },
              }}
            >
              Confirmation
            </span>
          </div>
        </div>
      </div>
      <div className="secure-lock-container-outer d-flex flex-grow-1 justify-content-end">
        <div>{location.pathname === "/details" && <DetailsTimer />}</div>
        <div className="secure-lock-container-inner d-inline-flex align-items-center">
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
