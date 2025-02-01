import React from "react";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import DetailsForm from "./DetailsForm";
import DetailsOrderSummary from "./DetailsOrderSummary";
import "bootstrap-icons/font/bootstrap-icons.css";

const DetailsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fc",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CheckoutHeader />
      <div
        className="show-order-summary-container d-block d-md-none"
        style={{
          width: "100%",
          padding: "8px 20px",
          borderTop: "1px solid #ccc",
          borderBottom: "1px solid #ccc",
          marginTop: "20px",
          backgroundColor: "#fdfdfd",
        }}
      >
        <div className="d-flex align-items-center">
          <div
            className="icons-text-wrap col-xs-8"
            style={{
              width: "66.6666666667%",
              float: "left",
              position: "relative",
              minHeight: "1px",
              paddingRight: "15px",
              paddingLeft: "15px",
              color: "#334999",
              cursor: "pointer",
              fontWeight: 500,
            }}
          >
            <i
              class="bi bi-cart"
              style={{
                color: "#334999",
                marginRight: "5px",
                marginTop: "-3.0px",
              }}
            ></i>
            <span
              style={{
                color: "#334999",
                cursor: "pointer",
                fontWeight: 500,
                fontSize: "14px",
                fontFamily: "proxima-nova, sans-serif",
              }}
            >
              Show Order Summary
            </span>
            <i
              class="bi bi-chevron-down"
              style={{
                marginLeft: "5px",
                fontSize: "11px",
                color: "#334999",
                cursor: "pointer",
              }}
            ></i>
          </div>
        </div>
      </div>
      <div
        className="d-block d-md-none"
        style={{
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <div className="checkout-container clearfix">
          <div className="d-flex">
            <DetailsForm />
            <DetailsOrderSummary />
          </div>
        </div>
      </div>
      <div
        className="d-none d-md-block"
        style={{
          paddingTop: "36px",
          paddingBottom: "50px",
        }}
      >
        <div className="checkout-container clearfix">
          <div className="d-flex">
            <DetailsForm />
            <DetailsOrderSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
