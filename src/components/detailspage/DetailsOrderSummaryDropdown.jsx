import React from "react";
import "./DetailsPage.css";

const DetailsOrderSummaryDropdown = () => {
  return (
    <div
      className="order-summary-container custom-flex-column justify-items-center align-items-center"
      style={{
        height: "165.633px",
        padding: "30px",
      }}
    >
      <div className="summary-table">
        <div className="header-section">
          <h5 style={{ fontSize: "15px", fontWeight: 500, margin: "10px 0" }}>
            Order Summary
          </h5>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td
                className="ticket-quantity"
                style={{ padding: "8px", verticalAlign: "middle" }}
              >
                <h5 style={{ marginBottom: 0 }}>
                  <span className="ticket-quantity">1</span>
                </h5>
              </td>
              <td style={{ verticalAlign: "middle" }}>
                <h5
                  style={{ fontSize: "17px", fontWeight: 500, marginBottom: 0 }}
                >
                  General Admission
                </h5>
              </td>
              <td className="text-right" style={{ verticalAlign: "middle" }}>
                <span
                  className="ticket-amount"
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    textAlign: "right",
                  }}
                >
                  $0.00
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="table"></table>
      </div>
    </div>
  );
};

export default DetailsOrderSummaryDropdown;
