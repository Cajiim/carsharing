import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const OrderCardLineButton = ({ className, classNameImg, src, text }) => (
  <button type="button" className={className}>
    <img src={src} alt="imgButton" className={classNameImg}></img>
    {text}
  </button>
);
OrderCardLineButton.propTypes = {
  className: PropTypes.string,
  classNameImg: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
};
OrderCardLineButton.defaultProps = {
  className: "",
  classNameImg: "",
  src: "",
  text: "",
};
export default OrderCardLineButton;
