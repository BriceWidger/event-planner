import React from "react";

const FooterTwo = () => {
  return (
    <div className="footer-container">
      <div
        className="checkout-tos"
        style={{
          position: "relative",
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
        <div className="footer-links">
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
        <div className="footer-powered">
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
            flex-direction: row;
          }

          @media (max-width: 768px) {
            .footer-container .checkout-tos {
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            .footer-container .footer-links,
            .footer-container .footer-powered {
              flex: 1 1 100%;
              text-align: center;
              margin: 10px 0;
            }
          }
        `}
      </style>
    </div>
  );
};

export default FooterTwo;
