import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

const ButtonFinalOrder = ({
  handlClick,
  className,
  isDisabled,
  isHidden,
  name,
}) => (
  <button
    type="button"
    className={cn(className, {
      [`${className}_disabled`]: isDisabled,
      [`${className}_hidden`]: isHidden,
    })}
    onClick={() => {
      handlClick();
    }}
  >
    {name}
  </button>
);

ButtonFinalOrder.propTypes = {
  handlClick: PropTypes.func,
  className: PropTypes.string,
  isDisabled: PropTypes.bool,
  isHidden: PropTypes.bool,
  name: PropTypes.string,
};
ButtonFinalOrder.defaultProps = {
  handlClick: () => {},
  className: "",
  isDisabled: false,
  isHidden: false,
  name: "",
};

export default ButtonFinalOrder;
