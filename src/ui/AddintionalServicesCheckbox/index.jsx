import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const AdditionalServicesCheckBox = ({
  text,
  handlClick,
  checkState,
  htmlFor,
  id,
}) => (
  <label htmlFor={htmlFor} className="additionalServicesCheckbox">
    <input
      id={id}
      type="checkbox"
      className="additionalServicesCheckbox__input"
      checked={checkState}
      onChange={() => {
        handlClick();
      }}
    ></input>
    <span className="additionalServicesCheckbox__fakeCheckbox"></span>
    <span className="additionalServicesCheckbox__text">{text}</span>
  </label>
);

AdditionalServicesCheckBox.propTypes = {
  text: PropTypes.string,
  handlClick: PropTypes.func,
  checkState: PropTypes.bool,
  htmlFor: PropTypes.string,
  id: PropTypes.string,
};
AdditionalServicesCheckBox.defaultProps = {
  text: "",
  handlClick: () => {},
  checkState: false,
  htmlFor: "",
  id: "",
};

export default AdditionalServicesCheckBox;
