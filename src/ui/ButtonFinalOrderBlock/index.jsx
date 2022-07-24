import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

const ButtonFinalOrder = ({
  handlClick,
  buttonControl,
  disabled,
  hidden,
  name,
}) => (
  <button
    type="button"
    className={cn(buttonControl, disabled, hidden)}
    onClick={() => {
      handlClick();
    }}
  >
    {name}
  </button>
);

ButtonFinalOrder.propTypes = {
  handlClick: PropTypes.func,
  buttonControl: PropTypes.string,
  disabled: PropTypes.string,
  hidden: PropTypes.string,
  name: PropTypes.string,
};
ButtonFinalOrder.defaultProps = {
  handlClick: () => {},
  buttonControl: "",
  disabled: "",
  hidden: "",
  name: "",
};

export default ButtonFinalOrder;
