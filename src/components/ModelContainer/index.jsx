import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchAllCars from "../../redux/dataThunk/fetchAllCars";
import { setClass } from "../../redux/cart/reducerFinalOrder";
import Model from "../Model";
import Radio from "../../ui/RadioButtonsSort";
import "./index.scss";

const ModelContainer = () => {
  const dispatch = useDispatch();
  const { dataCars } = useSelector(({ allCars }) => allCars);
  useEffect(() => {
    dispatch(fetchAllCars());
  }, []);

  const handleClickClassCar = (value) => {
    dispatch(setClass(value));
  };
  const classCart = useSelector(({ finalOrder }) => finalOrder.classCar);
  return (
    <div className="modelContainer">
      <div className="modelContainer__classSelection">
        <Radio
          classNameLabel="radioButton"
          classNameInput="radioButton__input"
          classNameFakeSpan="radioButton__fakeRadioBox"
          classNameSpan="radioButton__text"
          id="classAll"
          value="all"
          handlClick={handleClickClassCar}
          text="Все модели"
          defaultChecked
        />
        <Radio
          classNameLabel="radioButton"
          classNameInput="radioButton__input"
          classNameFakeSpan="radioButton__fakeRadioBox"
          classNameSpan="radioButton__text"
          id="classEconom"
          value="economy"
          handlClick={handleClickClassCar}
          text="Эконом"
        />
        <Radio
          classNameLabel="radioButton"
          classNameInput="radioButton__input"
          classNameFakeSpan="radioButton__fakeRadioBox"
          classNameSpan="radioButton__text"
          id="classBusiness"
          value="business"
          handlClick={handleClickClassCar}
          text="Бизнес"
        />
      </div>
      <ul className="modelContainer__mainContent">
        {dataCars
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
};

export default memo(ModelContainer);
