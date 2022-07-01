import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setColor } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

function ColorBlock() {
  const dispatch = useDispatch();
  const handleClick = (value) => {
    dispatch(setColor(value));
  };
  const { colorCar } = useSelector(({ finalOrder }) => finalOrder);

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

        <label className="colorBlock_container_label" htmlFor="redRadio">
          <input
            className="colorBlock_container_label_input"
            name="color"
            type="radio"
            value="Красный"
            id="redRadio"
            checked={colorCar === "Красный"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="colorBlock_container_label_span_fakeCheckbox"></span>
          <span className="colorBlock_container_label_span_textColor">
            Красный
          </span>
        </label>

        <label className="colorBlock_container_label" htmlFor="blueRadio">
          <input
            className="colorBlock_container_label_input"
            name="color"
            type="radio"
            value="Голубой"
            id="blueRadio"
            checked={colorCar === "Голубой"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="colorBlock_container_label_span_fakeCheckbox"></span>
          <span className="colorBlock_container_label_span_textColor">
            Голубой
          </span>
        </label>
      </div>
    </div>
  );
}

export default ColorBlock;
