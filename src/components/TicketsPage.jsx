import React from "react";
import CheckoutHeader from "./CheckoutHeader";
import SelectTickets from "./SelectTickets";

const TicketsPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#f8f9fc",
        height: "100vh",
      }}
    >
      <CheckoutHeader />
      <SelectTickets />
    </div>
  );
};

export default TicketsPage;
