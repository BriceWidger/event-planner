import React from "react";
import BodyBackgroundColor from "./BodyBackgroundColor";
import CheckoutHeader from "./CheckoutHeader";
import DetailsForm from "./DetailsForm";
import DetailsOrderSummary from "./DetailsOrderSummary";

const DetailsPage = () => {
  return (
    <BodyBackgroundColor backgroundColor="#f8f9fc">
      <CheckoutHeader />
      <div
        className="checkout-container clearfix"
        style={{
          height: "423.133px",
          paddingTop: "36px",
          paddingBottom: "50px",
        }}
      >
        <div className="d-flex">
          <DetailsForm />
          <DetailsOrderSummary />
        </div>
      </div>
    </BodyBackgroundColor>
  );
};

export default DetailsPage;
