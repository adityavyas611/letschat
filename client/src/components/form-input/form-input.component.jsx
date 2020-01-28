import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...formprops }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...formprops} />
    {label ? (
      <label
        className={`${formprops.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
