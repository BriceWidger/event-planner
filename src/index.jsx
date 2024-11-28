import React from "react";
import ReactDOM from "react-dom/client"; // Use 'react-dom/client' for React 18+
import App from "./App"; // Adjust the path if necessary
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

// Create a root element for React to render into
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(
  React.createElement(React.StrictMode, null, React.createElement(App, null))
);
