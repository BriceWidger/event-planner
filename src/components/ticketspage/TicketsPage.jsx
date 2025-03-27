import React from "react";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import SelectTickets from "./SelectTickets";
import FooterTwo from "../homepage/footer/FooterTwo";

const TicketsPage = () => {
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
      <div style={{ flex: "1" }}>
        <SelectTickets />
      </div>
      <FooterTwo />
    </div>
  );
};

export default TicketsPage;
