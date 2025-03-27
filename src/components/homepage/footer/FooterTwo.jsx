import React from "react";

const FooterTwo = () => {
  return (
    <div className="footer-container">
      <div
        className="checkout-tos sticky"
        style={{
          position: "fixed",
          bottom: "0",
          left: "0",
          width: "100%",
          borderTop: "1px solid #e6e6e6",
          paddingTop: "20px",
          background: "#fff",
          padding: "20px 20px 14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            flex: "1 1 auto",
            textAlign: "left",
          }}
          className="footer-links"
        >
          <span
            style={{
              color: "#334999",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Privacy Policy
          </span>{" "}
          |{" "}
          <span
            style={{
              color: "#334999",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Terms of Service
          </span>
        </div>
        <div
          style={{
            flex: "1 1 auto",
            textAlign: "right",
          }}
          className="footer-powered"
        >
          <span
            style={{
              color: "black",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Powered by Brice Widger
          </span>
        </div>
      </div>
      <style>
        {`
          .footer-container .checkout-tos {
            display: flex;
            flex-direction: row; /* Default row layout */
          }

          @media (max-width: 768px) {
            .footer-container .checkout-tos {
              flex-direction: column; /* Stack elements in a column */
              align-items: center; /* Center align items vertically */
              justify-content: center; /* Center horizontally */
            }
            .footer-container .footer-links, .footer-container .footer-powered {
              flex: 1 1 100%; /* Full width for each row */
              text-align: center; /* Center text horizontally */
              margin: 10px 0; /* Add spacing between rows */
            }
          }
        `}
      </style>
    </div>
  );
};

export default FooterTwo;
