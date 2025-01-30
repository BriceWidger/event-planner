// TextInput.jsx
import React from "react";

const TextInput = ({ label, name, value, onChange, error, placeholder }) => {
  return (
    <div>
      <label
        htmlFor={name}
        style={{
          fontSize: "16px",
          fontWeight: 700,
          paddingBottom: "5px",
        }}
      >
        {label}
      </label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`form-control ${error ? "is-invalid" : ""}`}
        style={{
          border: "0.566667px solid #ccc",
          padding: "6px 12px",
          width: "283.967px",
          height: "50px",
          borderRadius: "0px",
        }}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

export default TextInput;
