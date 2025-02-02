import React from "react";
import "./DetailsPage.css";

const DetailsOrderSummaryDropdown = () => {
  return (
    <div
      className="order-summary-container custom-flex-column justify-items-center align-items-center"
      style={{
        width: "275.783px",
        height: "165.633px",
        marginRight: "72px",
        paddingLeft: "30px",
      }}
    >
      <div className="summary-table">
        <div className="header-section">
          <h5>Order Summary</h5>
        </div>
        <table className="custom-table">
          <tbody>
            <tr>
              <td
                className="quantity-cell text-center"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5>
                  <span className="quantity-value">1</span>
                </h5>
              </td>
              <td
                className="center-cell"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5>General Admission</h5>
              </td>
              <td className="end-cell" style={{ backgroundColor: "#f8f9fc" }}>
                <span className="amount-value">$0.00</span>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="custom-table"></table>
      </div>
    </div>
  );
};

export default DetailsOrderSummaryDropdown;
