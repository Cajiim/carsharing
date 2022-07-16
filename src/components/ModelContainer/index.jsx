import React, { useEffect, useState, memo } from "react";
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

  return (
    <div className="modelContainer">
      <div className="modelContainer_classSelection">
        <label className="modelContainer_classSelection_all" htmlFor="classAll">
          <input
            className="modelContainer_classSelection_all_input"
            name="elem"
            type="radio"
            value="all"
            id="classAll"
            defaultChecked
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="modelContainer_classSelection_all_fakeCheckBox"></span>
          <span className="modelContainer_classSelection_all_textColor">
            Все модели
          </span>
        </label>

        <label
          className="modelContainer_classSelection_economy"
          htmlFor="classEconom"
        >
          <input
            className="modelContainer_classSelection_economy_input"
            name="elem"
            type="radio"
            value="economy"
            id="classEconom"
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="modelContainer_classSelection_economy_fakeCheckBox"></span>
          <span className="modelContainer_classSelection_economy_textColor">
            Эконом
          </span>
        </label>

        <label
          className="modelContainer_classSelection_business"
          htmlFor="classBusiness"
        >
          <input
            className="modelContainer_classSelection_business_input"
            name="elem"
            type="radio"
            value="business"
            id="classBusiness"
            onClick={(e) => handleClickClassCar(e.target.value)}
          ></input>
          <span className="modelContainer_classSelection_business_fakeCheckBox"></span>
          <span className="modelContainer_classSelection_business_textColor">
            Бизнес
          </span>
        </label>
      </div>

      <ul className="modelContainer_mainContent">
        {contentCart
          .filter((el) => {
            if (classCart !== "all") return el.typeCarCart === classCart;
            return el;
          })
          .map((cart) => (
            <Model cart={cart} key={cart.id} />
          ))}
      </ul>
    </div>
  );
}

export default memo(ModelContainer);
