import React from "react";

const Receipt = () => {
  return (
    <div className="checkout-table" style={{ marginTop: 60 }}>
      <div className="form-header">
        <h3
          style={{
            marginBottom: 26,
            fontSize: 20,
            fontWeight: 600,
            marginTop: 20,
            lineHeight: 1.1,
          }}
        >
          Receipt
        </h3>
      </div>
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
        }}
      >
        <tbody>
          <tr>
            <td
              className="ticket-quantity"
              style={{
                width: "454.317px",
                verticalAlign: "middle",
                textAlign: "center",
              }}
            >
              <h5 style={{ display: "flex", alignItems: "center" }}>
                <span
                  className="ticket-quantity"
                  style={{
                    fontSize: "20px",
                    fontWeight: "700",
                    lineHeight: 1.1,
                  }}
                >
                  1
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
              }}
            >
              <span className="ticket-amount">$0.00</span>
            </td>
          </tr>
        </tbody>
      </table>
      <table
        className="table"
        style={{
          borderCollapse: "initial",
          width: "100%",
          maxWidth: "100%",
          marginBottom: 20,
          fontSize: 14,
          lineHeight: 1.428571429,
        }}
      >
        <tbody>
          <tr>
            <td style={{ borderBottom: "none" }}>
              <strong>
                Service Fee
                <i
                  className="fa fa-question-circle fee-tip"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title=""
                  data-original-title="Credit card processing fee ($0.00) +  EventCreate Platform Fee ($0.00) "
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
              }}
            >
              <span className="fee-amount">$0.00</span>
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
                fontWeight: 600,
                padding: 8,
                lineHeight: 1.428571429,
                verticalAlign: "top",
                textAlign: "right",
                borderBottom: "none",
              }}
            >
              <span className="total-amount">$0.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;