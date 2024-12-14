import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const DetailsForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName) newErrors.firstName = "Please enter a valid first name";
    if (!lastName) newErrors.lastName = "Please enter a valid last name";
    if (!email) newErrors.email = "Please enter a valid email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      newErrors.email = "Please enter a valid email";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/confirmation", {
        state: {
          firstName,
          lastName,
          email,
        },
      });
    }
  };

  return (
    <div
      className="checkout-left-content"
      style={{
        width: "739.067px",
        height: "423.133px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 30px",
      }}
    >
      <div
        className="form-container"
        style={{
          padding: "20px 50px 50px 50px",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          border: "1px solid #ececec",
          backgroundColor: "#fff",
          height: "100%",
        }}
      >
        <form onSubmit={handleSubmit} style={{ flex: 1, height: "100%" }}>
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div className="form-container-upper" style={{ flex: 1 }}>
              <h2 className="mb-4">General Admission - Ticket 1</h2>
              <div
                className="name-input-fields-wrap row mb-3"
                style={{ width: "577.933px", marginLeft: "0px" }}
              >
                <div
                  className="col-md-6"
                  style={{
                    padding: "0",
                    width: "fit-content",
                    marginRight: "10px",
                  }}
                >
                  <label htmlFor="firstName" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.firstName ? "is-invalid" : ""
                    }`}
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                      border: "0.566667px solid #ccc",
                      padding: "6px 12px",
                      width: "283.967px",
                      height: "50px",
                      borderRadius: "0px",
                    }}
                  />
                  {errors.firstName && (
                    <div className="invalid-feedback">{errors.firstName}</div>
                  )}
                </div>
                <div
                  className="col-md-6"
                  style={{ padding: "0", width: "fit-content" }}
                >
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.lastName ? "is-invalid" : ""
                    }`}
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      border: "0.566667px solid #ccc",
                      padding: "6px 12px",
                      width: "283.967px",
                      height: "50px",
                      borderRadius: "0px",
                    }}
                  />
                  {errors.lastName && (
                    <div className="invalid-feedback">{errors.lastName}</div>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    border: "0.566667px solid #ccc",
                    padding: "6px 12px",
                    width: "577.933px",
                    height: "50px",
                    borderRadius: "0px",
                  }}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: "241.667px",
                height: "60px",
                alignSelf: "flex-start",
              }}
            >
              Complete Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
