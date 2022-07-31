import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const OrderCardLineCheckBox = ({
  classNameLabel,
  classNameInput,
  classNameFake,
  classNameText,
  id,
  isChecked,
  text,
}) => (
  <label htmlFor={id} className={classNameLabel}>
    <input
      value="gasoline"
      id={id}
      type="checkbox"
      className={classNameInput}
      readOnly
      checked={isChecked}
    ></input>
    <span className={classNameFake}></span>
    <span className={classNameText}>{text}</span>
  </label>
);

OrderCardLineCheckBox.propTypes = {
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameFake: PropTypes.string,
  classNameText: PropTypes.string,
  id: PropTypes.string,
  isChecked: PropTypes.bool,
  text: PropTypes.string,
};
OrderCardLineCheckBox.defaultProps = {
  classNameLabel: "",
  classNameInput: "",
  classNameFake: "",
  classNameText: "",
  id: "",
  isChecked: false,
  text: "",
};

export default OrderCardLineCheckBox;
