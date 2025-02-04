// CompleteRegistrationButton.jsx
import React from "react";

const CompleteRegistrationButton = ({ type, children }) => {
  return (
    <button
      type={type}
      className="complete-registration-button btn btn-primary"
      style={{
        alignSelf: "flex-start",
        backgroundColor: "#334999",
        borderColor: "#334999",
        padding: "20px 50px",
        marginTop: "10px",
        fontSize: "14px",
        fontWeight: 700,
      }}
    >
      {children}
    </button>
  );
};

export default CompleteRegistrationButton;
