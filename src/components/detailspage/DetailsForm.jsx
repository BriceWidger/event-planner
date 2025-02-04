import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import TextInput from "./TextInput";
import CompleteRegistrationButton from "./CompleteRegistrationButton";

const DetailsForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const newErrors = {};

    if (!data.firstName)
      newErrors.firstName = "Please enter a valid first name";
    if (!data.lastName) newErrors.lastName = "Please enter a valid last name";
    if (!data.email) newErrors.email = "Please enter a valid email";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email))
      newErrors.email = "Please enter a valid email";

    setFormErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate("/confirmation", {
        state: {
          ...data,
        },
      });
    }
  };

  return (
    <div
      className="checkout-left-content"
      style={{
        width: "739.067px",
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
        }}
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            flex: 1,
            flexGrow: 1,
            overflowY: "auto",
          }}
        >
          <h2 className="mb-4" style={{ fontSize: "20px", fontWeight: 600 }}>
            General Admission - Ticket 1
          </h2>
          <div
            className="col-md-6"
            style={{ padding: "0", marginBottom: "24px" }}
          >
            <TextInput
              label="First Name"
              name="firstName"
              error={formErrors.firstName}
              placeholder="First Name"
            />
          </div>
          <div
            className="col-md-6"
            style={{ padding: "0", marginBottom: "24px" }}
          >
            <TextInput
              label="Last Name"
              name="lastName"
              error={formErrors.lastName}
              placeholder="Last Name"
            />
          </div>
          <div className="col-md-12" style={{ marginBottom: "24px" }}>
            <TextInput
              label="Email Address"
              name="email"
              error={formErrors.email}
              placeholder="email@email.com"
            />
          </div>
          <CompleteRegistrationButton
            type="submit"
            style={{ padding: "20px 50px", marginTop: "10px" }}
          >
            Complete Registration
          </CompleteRegistrationButton>
        </form>
      </div>
    </div>
  );
};

export default DetailsForm;
