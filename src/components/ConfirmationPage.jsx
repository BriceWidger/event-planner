import React from "react";
import CheckoutHeader from "./CheckoutHeader";

const ConfirmationPage = () => (
  <div>
    <CheckoutHeader />
    <div
      className="checkout-container"
      style={{ padding: "36px 0 50px", backgroundColor: "#f8f9fc" }}
    >
      <div
        className="checkout-left-content"
        style={{
          border: "1px solid #ccc",
          padding: "20px 50px 40px",
          width: "800px",
          height: "806.167px",
          backgroundColor: "#ffffff",
          margin: "0 auto",
          border: "1px solid #ececec",
          boxShadow: "2px 2px 20px #0000000a",
        }}
      >
        <h1>Thank you</h1>
        <p>
          Thank you for your response. Your response has been sent to the event
          organizer.
        </p>
        <div
          className="ticket-container"
          style={{
            border: "1px solid #ccc",
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div className="row">
            <div className="col-md-6 col-lg-7">
              <h5 style={{ fontSize: 17, fontWeight: 700 }}>
                Order Number: 12333341
              </h5>
              <p>
                December 12, 2024
                <br />f f<br />
                df@gmail.com
              </p>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="form-group">
                <a
                  className="btn btn-primary"
                  target="_blank"
                  style={{ backgroundColor: "#334999" }}
                  href="https://checkout.eventcreate.com/annual-conference-666681/build-ticket?oid=aa022cfe-dc85-4cb0-8643-c0aacb104ed8&amp;rt=914dd8f4ea15cf4194d95e708554e7ac089111dc"
                >
                  <i className="far fa-print"></i> Print My Ticket(s) Now
                </a>
                <p
                  className="help-block"
                  style={{ fontSize: 12, lineHeight: 1.3 }}
                >
                  We've also emailed these tickets to df@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  </div>
);

export default ConfirmationPage;
