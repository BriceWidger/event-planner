import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/homepage/HomePage";
import TicketsPage from "./components/ticketspage/TicketsPage";
import DetailsPage from "./components/detailspage/DetailsPage";
import ConfirmationPage from "./components/confirmationpage/ConfirmationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tickets" element={<TicketsPage />} />
        <Route exact path="/details" element={<DetailsPage />} />
        <Route exact path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
