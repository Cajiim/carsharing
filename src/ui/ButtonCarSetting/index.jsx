import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

const ButtonCarSettings = ({ handlClick, className, isActive, name }) => (
  <button
    type="button"
    className={cn(className,{ [`${className}_active`]: isActive })}
    onClick={handlClick}
  >
    {name}
  </button>
); 

ButtonCarSettings.propTypes = {
  handlClick: PropTypes.func,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  name: PropTypes.string,
};
ButtonCarSettings.defaultProps = {
  handlClick: () => {},
  className: "",
  isActive: false,
  name: "",
};

export default ButtonCarSettings;
