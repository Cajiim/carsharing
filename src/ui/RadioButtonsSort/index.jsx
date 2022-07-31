import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const RadioButton = ({
  classNameLabel,
  classNameInput,
  classNameFakeSpan,
  classNameSpan,
  id,
  value,
  handlClick,
  text,
  defaultChecked,
}) => (
  <label className={classNameLabel} htmlFor={id}>
    <input
      className={classNameInput}
      name="elem"
      type="radio"
      value={value}
      id={id}
      defaultChecked={  defaultChecked}
      onClick={(e) => handlClick(e.target.value)}
    ></input>
    <span className={classNameFakeSpan}></span>
    <span className={classNameSpan}>{text}</span>
  </label>
);

RadioButton.propTypes = {
  classNameLabel: PropTypes.string,
  classNameInput: PropTypes.string,
  classNameFakeSpan: PropTypes.string,
  classNameSpan: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  handlClick: PropTypes.func,
  text: PropTypes.string,
  defaultChecked: PropTypes.bool,
};
RadioButton.defaultProps = {
  classNameLabel: "",
  classNameInput: "",
  classNameFakeSpan: "",
  classNameSpan: "",
  id: "",
  value: "",
  handlClick: () => {},
  text: "",
  defaultChecked: false,
};

export default RadioButton;
