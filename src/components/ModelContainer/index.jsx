import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";
import Model from "../Model";
import arrModels from "../../data";

function ModelContainer() {

  const dispatch = useDispatch();
  const handleClickClassCar = (value) => {
    dispatch(setClass(value));
  };
  const classCart = useSelector(({finalOrder}) => finalOrder.classCar);

  const economCar = arrModels.filter((cart) => cart.class === "economy");
  const businessCar = arrModels.filter((cart) => cart.class === "business");

  return (
    <div>
      <div className="tabs_left_content_radioContent">
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="all"
          defaultChecked
          onClick={(e) => handleClickClassCar(e.target.value)}
          onChange={() => console.log(1)}
        ></input>
        <p className="radio_text">Все модели</p>
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="economy"
          onClick={(e) => handleClickClassCar(e.target.value)}
        ></input>
        <p className="radio_text">Эконом</p>
        <input
          className="radio_box"
          name="elem"
          type="radio"
          value="business"
          color="secondary"
          onClick={(e) => handleClickClassCar(e.target.value)}
        ></input>
        <p className="radio_text">Бизнес</p>
      </div>

      {classCart === "business" ? (
        <div className="active-tabs-content-model_cart">
          {businessCar.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      ) : classCart === "economy" ? (
        <div className="active-tabs-content-model_cart">
          {economCar.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      ) : (
        <div className="active-tabs-content-model_cart">
          {arrModels.map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ModelContainer;
