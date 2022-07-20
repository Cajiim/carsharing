import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../redux/cart/reducerFinalOrder";

import "./index.scss";

const ColorBlock = () => {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setColor(value));
  };
  const { colorCar, modelInCart } = useSelector(({ finalOrder }) => finalOrder);
  const colorsCurrentCar = modelInCart?.arrAllColors;
  return (
    <div className="colorBlock">
      <p className="colorBlock_title">Цвет</p>
      <div className="colorBlock_container">
        <label className="colorBlock_container_label" htmlFor="allRadio">
          <input
            className="colorBlock_container_label_input"
            name="color"
            type="radio"
            value="Любой"
            id="allRadio"
            checked={colorCar === "Любой"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="colorBlock_container_label_span_fakeCheckbox"></span>
          <span className="colorBlock_container_label_span_textColor">
            Любой
          </span>
        </label>
        {colorsCurrentCar && colorsCurrentCar.map((el) => (
          <label className="colorBlock_container_label" htmlFor={el} key={el.toString()}>
            <input
              className="colorBlock_container_label_input"
              name="color"
              type="radio"
              value={el}
              id={el}
              checked={colorCar === el}
              onChange={(e) => handleClick(e.target.value)}
            ></input>
            <span className="colorBlock_container_label_span_fakeCheckbox"></span>
            <span className="colorBlock_container_label_span_textColor">
              {el}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ColorBlock;
