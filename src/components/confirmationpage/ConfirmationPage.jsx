import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import OrderNumber from "./OrderNumber";
import Receipt from "./Receipt";

const ConfirmationPage = () => {
  const { state: { firstName, lastName, email } = {} } = useLocation();

  return (
    <div>
      <CheckoutHeader />
      <div
        style={{
          padding: "36px 0 50px",
          backgroundColor: "#f8f9fc",
        }}
      >
        <div
          className="checkoutLeftContent"
          style={{
            border: "1px solid #ccc",
            padding: "20px 50px 40px",
            width: "100%",
            maxWidth: "800px",
            backgroundColor: "#ffffff",
            margin: "0 auto",
            border: "1px solid #ececec",
            boxShadow: "2px 2px 20px #0000000a",
            "@media (max-width: 768px)": {
              width: "100%",
              padding: "20px",
            },
          }}
        >
          <OrderNumber
            orderNumber="12333341"
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <Receipt />
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
