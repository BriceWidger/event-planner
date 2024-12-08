import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TicketsPage from "./components/TicketsPage";
import DetailsPage from "./components/DetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/tickets" element={<TicketsPage />} />
        <Route exact path="/details" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
