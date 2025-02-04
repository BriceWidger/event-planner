// CompleteRegistrationButton.jsx
import React from "react";

const CompleteRegistrationButton = ({ type, children }) => {
  return (
    <button
      type={type}
      className="btn btn-primary"
      style={{
        width: "241.667px",
        height: "60px",
        alignSelf: "flex-start",
        backgroundColor: "#334999",
        borderColor: "#334999",
        padding: "20px 50px",
        marginTop: "10px",
      }}
    >
      {children}
    </button>
  );
};

export default CompleteRegistrationButton;
