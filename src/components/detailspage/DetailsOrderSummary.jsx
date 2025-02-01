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
        paddingLeft: "30px",
      }}
    >
      <div className="checkout-table">
        <div className="form-header">
          <h5>Order Summary</h5>
        </div>
        <table className="table">
          <tbody>
            <tr>
              <td
                className="ticket-quantity text-center"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5>
                  <span className="ticket-quantity">1</span>
                </h5>
              </td>
              <td
                className="text-center"
                style={{ backgroundColor: "#f8f9fc" }}
              >
                <h5>General Admission</h5>
              </td>
              <td className="text-end" style={{ backgroundColor: "#f8f9fc" }}>
                <span className="ticket-amount">$0.00</span>
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
