import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const InputAutocomplete = ({
  placeholder,
  type,
  value,
  className,
  onChange,
  disabled,
  id,
  labelText,
  classNameLabel,
}) => (
  <>
    <label htmlFor={id} className={classNameLabel}>
      {labelText}
    </label>
    <input
      id={id}
      placeholder={placeholder}
      type={type}
      value={value}
      className={className}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      disabled={disabled}
    ></input>
  </>
);

InputAutocomplete.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  labelText: PropTypes.string,
  classNameLabel: PropTypes.string,
};
InputAutocomplete.defaultProps = {
  placeholder: "",
  type: "",
  value: "",
  className: "",
  onChange: () => {},
  disabled: false,
  id: "",
  labelText: "",
  classNameLabel: "",
};

export default InputAutocomplete;
