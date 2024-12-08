import React from "react";
import BodyBackgroundColor from "./BodyBackgroundColor";
import CheckoutHeader from "./CheckoutHeader";
import SelectTickets from "./SelectTickets";

const TicketsPage = () => {
  return (
    <BodyBackgroundColor backgroundColor="#f8f9fc">
      <CheckoutHeader />
      <SelectTickets />
    </BodyBackgroundColor>
  );
};

export default TicketsPage;
