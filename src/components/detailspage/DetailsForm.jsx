// DetailsForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import CompleteRegistrationButton from "./CompleteRegistrationButton";

const DetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newErrors = {};

    if (!firstName) newErrors.firstName = "Please enter a valid first name";
    if (!lastName) newErrors.lastName = "Please enter a valid last name";
    if (!email) newErrors.email = "Please enter a valid email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
      newErrors.email = "Please enter a valid email";

    setFormErrors(newErrors);

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
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{ flex: 1, height: "100%" }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", height: "100%" }}
          >
            <div className="form-container-upper" style={{ flex: 1 }}>
              <h2
                className="mb-4"
                style={{ fontSize: "20px", fontWeight: 600 }}
              >
                General Admission - Ticket 1
              </h2>
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
                  <TextInput
                    label="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={formErrors.firstName}
                    placeholder="First Name"
                  />
                </div>
                <div
                  className="col-md-6"
                  style={{ padding: "0", width: "fit-content" }}
                >
                  <TextInput
                    label="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={formErrors.lastName}
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mb-3">
                <TextInput
                  label="Email Address"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={formErrors.email}
                  placeholder="email@email.com"
                />
              </div>
            </div>
            <CompleteRegistrationButton type="submit">
              Complete Registration
            </CompleteRegistrationButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;