import React from "react";
import CheckoutHeader from "../checkOutHeader/CheckoutHeader";
import SelectTickets from "./SelectTickets";

const TicketsPage = () => {
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
      <SelectTickets />
    </div>
  );
};

export default TicketsPage;
