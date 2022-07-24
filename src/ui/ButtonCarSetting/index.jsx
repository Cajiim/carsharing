import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import style from "./index.scss";

const cn = classNames.bind(style);

const ButtonCarSettings = ({ handlClick, buttonControl, active, name }) => (
  <button
    type="button"
    className={cn(buttonControl, active)}
    onClick={handlClick}
  >
    {name}
  </button>
);

ButtonCarSettings.propTypes = {
  handlClick: PropTypes.func,
  buttonControl: PropTypes.string,
  active: PropTypes.string,
  name: PropTypes.string,
};
ButtonCarSettings.defaultProps = {
  handlClick: () => {},
  buttonControl: "",
  active: "",
  name: "",
};

export default ButtonCarSettings;
