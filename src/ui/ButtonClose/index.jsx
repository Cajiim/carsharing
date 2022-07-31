import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

const ButtonAutocomplete = ({ className, handlClick, isDisabled }) => (
  <button
    type="button"
    className={cn(className, { [`${className}_disabled`]: isDisabled })}
    onClick={handlClick}
  >
    &times;
  </button>
);

ButtonAutocomplete.propTypes = {
  className: PropTypes.string,
  handlClick: PropTypes.func,
  isDisabled: PropTypes.bool,
};
ButtonAutocomplete.defaultProps = {
  className: "",
  handlClick: () => {},
  isDisabled: false,
};
export default ButtonAutocomplete;
