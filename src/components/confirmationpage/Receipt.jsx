import React, { useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Tooltip } from "bootstrap";

const Receipt = ({ ticketQuantity, ticketAmount }) => {
  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll("[title]");
    [...tooltipTriggerList].forEach((tooltipTriggerEl) => new Tooltip(tooltipTriggerEl));
  }, []);

  const feeAmount = (ticketAmount * 0.0224 + 100).toFixed(2);
  const totalAmount = (ticketAmount + parseFloat(feeAmount)).toFixed(2);

  return (
    <div
      className="checkout-table"
      style={{
        marginTop: 60,
        maxWidth: "100%",
        overflow: "hidden",
        wordWrap: "break-word",
      }}
    >
      <div className="form-header">
        <h3
          style={{
            marginBottom: 26,
            fontSize: 18,
            fontWeight: 600,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          Receipt
        </h3>
      </div>
      <div
        style={{
          overflowX: "auto",
          display: "block",
        }}
      >
        <table
          className="table"
          style={{
            borderTop: "1px solid #ccc",
            borderCollapse: "initial",
            paddingTop: 12,
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
            fontSize: 14,
            lineHeight: 1.428571429,
            "@media (max-width: 768px)": {
              fontSize: 12,
            },
          }}
        >
          <tbody>
            <tr>
              <td
                className="ticket-quantity"
                style={{
                  width: "100%",
                  verticalAlign: "middle",
                  textAlign: "center",
                  "@media (max-width: 768px)": {
                    width: "100%",
                    padding: "10px",
                  },
                }}
              >
                <h5 style={{ display: "flex", alignItems: "center" }}>
                  <span
                    className="ticket-quantity"
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      lineHeight: 1.1,
                      verticalAlign: "middle",
                    }}
                  >
                    {ticketQuantity}
                  </span>
                  <h5
                    style={{
                      fontSize: "17px",
                      fontWeight: "700",
                      margin: "0 0 0 20px",
                      lineHeight: 1.1,
                    }}
                  >
                    General Admission
                  </h5>
                </h5>
              </td>
              <td
                className="text-right"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  padding: 8,
                  lineHeight: 1.428571429,
                  verticalAlign: "top",
                  textAlign: "right",
                  "@media (max-width: 768px)": {
                    padding: "10px",
                  },
                }}
              >
                <span className="ticket-amount">${ticketAmount.toFixed(2)}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        style={{
          overflowX: "auto",
          display: "block",
        }}
      >
        <table
          className="table"
          style={{
            borderCollapse: "initial",
            width: "100%",
            maxWidth: "100%",
            marginBottom: 20,
            fontSize: 14,
            lineHeight: 1.428571429,
            "@media (max-width: 768px)": {
              fontSize: 12,
            },
          }}
        >
          <tbody>
            <tr>
              <td style={{ borderBottom: "none" }}>
                <strong>
                  Service Fee
                  <i
                    className="bi bi-question-circle"
                    title="Credit card processing fee (2.24%) + EventCreate Platform Fee ($100.00)"
                    style={{ marginLeft: 4 }}
                  ></i>
                </strong>
              </td>
              <td
                className="text-right"
                style={{
                  fontSize: 15,
                  fontWeight: 600,
                  padding: 8,
                  lineHeight: 1.428571429,
                  verticalAlign: "top",
                  textAlign: "right",
                  borderBottom: "none",
                  "@media (max-width: 768px)": {
                    padding: "10px",
                  },
                }}
              >
                <span className="fee-amount">${feeAmount}</span>
              </td>
            </tr>
            <tr>
              <td style={{ borderBottom: "none" }}>
                <strong>Total</strong>
              </td>
              <td
                className="text-right"
                style={{
                  fontSize: 15,
                  fontWeight: 700,
                  padding: 8,
                  lineHeight: 1.428571429,
                  verticalAlign: "top",
                  textAlign: "right",
                  borderBottom: "none",
                  "@media (max-width: 768px)": {
                    padding: "10px",
                  },
                }}
              >
                <span className="total-amount">${totalAmount}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Receipt;
