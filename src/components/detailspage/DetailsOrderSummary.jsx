import React from "react";
import "./DetailsPage.css";

const DetailsOrderSummary = () => {
  return (
    <div
      className="checkout-right-content d-flex flex-column justify-content-center align-items-center"
      style={{
        width: "275.783px",
        height: "165.633px",
        marginRight: "72px",
      }}
    >
      <div className="checkout-table">
        <div className="form-header">
          <h5
            style={{
              fontSize: "15px",
              fontWeight: 700,
              margin: "40px 0 26px 0",
            }}
          >
            Order Summary
          </h5>
        </div>
        <table className="table">
          <tbody>
            <tr style={{ borderTop: "1px solid #ccc" }}>
              <td
                className="ticket-quantity text-center pt-3 pb-4"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5>
                  <span
                    className="ticket-quantity"
                    style={{ fontSize: "20px", fontWeight: "700" }}
                  >
                    1
                  </span>
                </h5>
              </td>
              <td
                className="text-center pt-3 pb-4"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    marginBottom: 0,
                    textAlign: "left",
                  }}
                >
                  General Admission
                </h5>
              </td>
              <td
                className="text-end pt-3 pb-4"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <span
                  className="ticket-amount"
                  style={{ fontSize: "15px", fontWeight: "600" }}
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

export default DetailsOrderSummary;
