import React from "react";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import DetailsForm from "./DetailsForm";
import DetailsOrderSummary from "./DetailsOrderSummary";
import DetailsTimer from "../checkOutHeader/DetailsTimer";

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
        className="checkout-container clearfix"
        style={{
          paddingTop: "36px",
          paddingBottom: "50px",
        }}
      >
        <div className="d-flex">
          <DetailsForm />
          <DetailsOrderSummary />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
