import React, { memo } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import style from "./index.scss";

const cn = classNames.bind(style);

const SlideContainer = ({ title, text, buttonStyle, buttonText }) => (
  <div className="slideContainer">
    <h3 className="slideContainer_title">{title}</h3>
    <p className="slideContainer_text">{text}</p>
    <button
      className={cn("slideContainer_button_information", [buttonStyle])}
      type="button"
    >
      {buttonText}
    </button>
  </div>
);

SlideContainer.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  buttonStyle: PropTypes.string,
  buttonText: PropTypes.string,
};
SlideContainer.defaultProps = {
  title:'',
  text: '',
  buttonStyle: '',
  buttonText: '',
};

export default memo(SlideContainer);
