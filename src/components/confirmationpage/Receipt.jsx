import React from "react";

const Receipt = () => {
  return (
    <div className="checkout-table" style={{ marginTop: 60 }}>
      <div className="form-header">
        <h3>Receipt</h3>
      </div>
      <table className="table">
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
                  style={{ fontSize: "20px", fontWeight: "700" }}
                >
                  1
                </span>
                <h5
                  style={{
                    fontSize: "17px",
                    fontWeight: "700",
                    margin: "0 0 0 20px",
                  }}
                >
                  General Admission
                </h5>
              </h5>
            </td>
            <td className="text-right">
              <span className="ticket-amount">$0.00</span>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="table">
        <tbody>
          <tr>
            <td>
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
            <td className="text-right">
              <span className="fee-amount">$0.00</span>
            </td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td className="text-right">
              <span className="total-amount">$0.00</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Receipt;
