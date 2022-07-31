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
      <p className="colorBlock__blockName">Цвет</p>
      <div className="colorBlock__container">
        <label className="colorBlock__label" htmlFor="allRadio">
          <input
            className="colorBlock__input"
            name="color"
            type="radio"
            value="Любой"
            id="allRadio"
            checked={colorCar === "Любой"}
            onChange={(e) => handleClick(e.target.value)}
          ></input>
          <span className="colorBlock__fakeCheckbox"></span>
          <span className="colorBlock__checkBoxName">Любой</span>
        </label>
        {colorsCurrentCar &&
          colorsCurrentCar.map((el) => (
            <label
              className="colorBlock__label"
              htmlFor={el}
              key={el.toString()}
            >
              <input
                className="colorBlock__input"
                name="color"
                type="radio"
                value={el}
                id={el}
                checked={colorCar === el}
                onChange={(e) => handleClick(e.target.value)}
              ></input>
              <span className="colorBlock__fakeCheckbox"></span>
              <span className="colorBlock__checkBoxName">{el}</span>
            </label>
          ))}
      </div>
    </div>
  );
};

export default ColorBlock;
