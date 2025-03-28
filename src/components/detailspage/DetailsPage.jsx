import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import DetailsForm from "./DetailsForm";
import DetailsOrderSummary from "./DetailsOrderSummary";
import DetailsOrderSummaryDropdown from "./DetailsOrderSummaryDropdown";
import FooterTwo from "../homepage/footer/FooterTwo";
import "./DetailsPage.css";

const DetailsPage = () => {
  const location = useLocation();
  const { ticketQuantity = 0, ticketAmount = 0 } = location.state || {};

  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleIconClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f9fc",
        minHeight: "100vh",
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
        <div className="show-order-summary-header d-flex align-items-center">
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
            onClick={handleIconClick}
          >
            <i
              className="bi bi-cart"
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
              className="bi bi-chevron-down"
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
      {isMobile && showDropdown && (
        <DetailsOrderSummaryDropdown
          ticketQuantity={ticketQuantity}
          ticketAmount={ticketAmount}
        />
      )}
      <div
        className="form-outer-container d-block d-md-none"
        style={{
          paddingTop: "20px",
          paddingBottom: "50px",
        }}
      >
        <div className="checkout-container clearfix">
          <div className="mobile-checkout-content d-flex">
            <DetailsForm
              ticketQuantity={ticketQuantity}
              ticketAmount={ticketAmount}
            />
            <DetailsOrderSummary
              ticketQuantity={ticketQuantity}
              ticketAmount={ticketAmount}
            />
          </div>
        </div>
      </div>
      <div
        className="checkout-desktop-container d-none d-md-block"
        style={{
          paddingTop: "36px",
          paddingBottom: "50px",
          maxWidth: "100%",
          margin: "0 auto",
          padding: "36px 20px",
          display: "flex",
          flexDirection: "column",
          flex: "1",
        }}
      >
        <div className="checkout-container clearfix">
          <div className="desktop-checkout-content d-flex">
            <DetailsForm
              ticketQuantity={ticketQuantity}
              ticketAmount={ticketAmount}
            />
            <DetailsOrderSummary
              ticketQuantity={ticketQuantity}
              ticketAmount={ticketAmount}
            />
          </div>
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

export default DetailsPage;
