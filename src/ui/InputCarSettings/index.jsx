import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import style from "./index.scss";

const cn = classNames.bind(style);

const InputCarSettings = ({
  className,
  isError,
  value,
  onChange,
  onBlur,
  name,
}) => (
  <input
    className={cn(className, {
      [`${className}_error`]: isError,
    })}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    onBlur={(e) => onBlur(e)}
    name={name}
  ></input>
);

InputCarSettings.propTypes = {
  className: PropTypes.string,
  isError: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  name: PropTypes.string,
};
InputCarSettings.defaultProps = {
  className: "",
  isError: false,
  value: "",
  onChange: () => {},
  onBlur: () => {},
  name: "",
};

export default InputCarSettings;
