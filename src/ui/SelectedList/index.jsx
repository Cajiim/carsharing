import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const SelectedList = ({ handlChange, text, uniqueArr }) => (
  <select
    className="select-wrapper"
    onChange={(e) => handlChange(e.target.value)}
  >
    <option value={text} disabled hidden>
      {text} 
    </option>
    {uniqueArr.map((el) => (
      <option key={el.toString()}>
        {el}
      </option>
    ))}
  </select>
);
export default SelectedList;

SelectedList.propTypes = {
  handlChange: PropTypes.func,
  text: PropTypes.string,
  uniqueArr: PropTypes.array,
};
SelectedList.defaultProps = {
  handlChange: () => {},
  text: "",
  uniqueArr: [],
};
