import React from "react";
import { useLocation } from "react-router-dom";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import OrderNumber from "./OrderNumber";
import Receipt from "./Receipt";
import FooterTwo from "../homepage/footer/FooterTwo";

const ConfirmationPage = () => {
  const {
    state: { firstName, lastName, email, ticketQuantity, ticketAmount } = {},
  } = useLocation();

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
        style={{
          flex: "1",
          padding: "36px 0 50px",
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
          }}
        >
          <OrderNumber
            orderNumber="12333341"
            firstName={firstName}
            lastName={lastName}
            email={email}
          />
          <Receipt
            ticketQuantity={ticketQuantity}
            ticketAmount={ticketAmount}
          />
        </div>
      </div>
      <FooterTwo />
    </div>
  );
};

export default ConfirmationPage;
