import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const SelectedList = ({ handlChange, text, uniqueArr, id }) => (
  <select
    className="select-wrapper"
    onChange={(e) => handlChange(e.target.value)}
    id={id}
  >
    <option value="defaultValue" hidden>
      {text}
    </option>
    {uniqueArr.map((el) => (
      <option key={el.toString()}>{el}</option>
    ))}
  </select>
);
export default SelectedList;

SelectedList.propTypes = {
  handlChange: PropTypes.func,
  text: PropTypes.string,
  uniqueArr: PropTypes.arrayOf(PropTypes.string),
  id: PropTypes.string,
};
SelectedList.defaultProps = {
  handlChange: () => {},
  text: "",
  uniqueArr: [],
  id: "",
};
