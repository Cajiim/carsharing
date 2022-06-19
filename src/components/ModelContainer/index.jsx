import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setClass } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";
import Model from "../Model";

function ModelContainer() {
  const [contentCart, setContentCart] = useState([]);

  async function fetchData() {
    try {
      const [contentCartResponse] = await Promise.all([
        axios.get("https://6288c18410e93797c15e9916.mockapi.io/Cars"),
      ]);
      setContentCart(contentCartResponse.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  const dispatch = useDispatch();
  const handleClickClassCar = (value) => {
    dispatch(setClass(value));
  };
  const classCart = useSelector(({ finalOrder }) => finalOrder.classCar);
  const economCar = contentCart.filter((cart) => cart.class === "economy");
  const businessCar = contentCart.filter((cart) => cart.class === "business");

  return (
    <div>
      <div className="tabs_left_content_radioContent">
        <label className="radio_text" htmlFor="classAll">
          <input
            className="radio_box"
            name="elem"
            type="radio"
            value="all"
            id="classAll"
            defaultChecked
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Все модели</span>
        </label>

        <label className="radio_text" htmlFor="classEconom">
          <input
            className="radio_box"
            name="elem"
            type="radio"
            value="economy"
            id="classEconom"
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Эконом</span>
        </label>

        <label className="radio_text" htmlFor="classBusiness">
          <input
            className="radio_box"
            name="elem"
            type="radio"
            value="business"
            id="classBusiness"
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="fake"></span>
          <span className="radio_text_color">Бизнес</span>
        </label>
      </div>
      <div>
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
            {contentCart.map((cart) => (
              <Model cart={cart} key={cart.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelContainer;
