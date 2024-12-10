import React from "react";

const DetailsForm = () => {
  return (
    <div
      className="checkout-left-content"
      style={{
        width: "739.067px",
        height: "423.133px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "0.566667px solid #ececec",
        backgroundColor: "#fff",
      }}
    >
      <div
        className="checkout-left-content-inner"
        style={{
          width: "577.933px",
          height: "332px",
        }}
      >
        <h3
          style={{
            marginTop: 20,
            marginBottom: 26,
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          General Admission - Ticket 1
        </h3>
        <div className="ticket-buyer-form">
          <div className="form-inline">
            <div className="form-group col-sm-6">
              <label> First Name </label>
              <input
                type="text"
                className="form-control"
                name="attendees[18058114][first_name]"
                placeholder="First Name"
                value=""
                required=""
                maxLength="255"
                aria-required="true"
              />
            </div>
            <div className="form-group col-sm-6">
              <label> Last Name</label>
              <input
                type="text"
                className="form-control"
                name="attendees[18058114][last_name]"
                placeholder="Last Name"
                value=""
                required=""
                maxLength="255"
                aria-required="true"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="text"
              name="attendees[18058114][email]"
              placeholder="email@email.com"
              className="form-control"
              value=""
              required=""
              maxLength="255"
              aria-required="true"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsForm;
