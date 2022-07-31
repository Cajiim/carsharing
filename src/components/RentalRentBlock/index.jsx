import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArendTime } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

const RentalRateBlock = () => {
  const dispatch = useDispatch();
  const handleClickFare = (value) => {
    dispatch(setArendTime(value));
  };
  const { arendTime } = useSelector(({ finalOrder }) => finalOrder);
  return (
    <div className="rentalRentBlock">
      <p className="rentalRentBlock__name">Тариф</p>
      <div className="rentalRentBlock__rentRate">
        <label className="rentalRentBlock__label" htmlFor="fareTypeMin">
          <input
            className="rentalRentBlock__input"
            name="tax"
            type="radio"
            value="minut"
            id="fareTypeMin"
            checked={arendTime === "minut"}
            onChange={(e) => handleClickFare(e.target.value)}
          ></input>
          <span className="rentalRentBlock__fake"></span>
          <span className="rentalRentBlock__text">Поминутно, 7Р/мин</span>
        </label>
      </div>
      <div className="rentalRentBlock__rentRate">
        <label className="rentalRentBlock__label" htmlFor="fareTypeDay">
          <input
            className="rentalRentBlock__input"
            name="tax"
            type="radio"
            value="days"
            id="fareTypeDay"
            onChange={(e) => handleClickFare(e.target.value)}
            checked={arendTime === "days"}
          ></input>
          <span className="rentalRentBlock__fake"></span>
          <span className="rentalRentBlock__text">На сутки, 1999Р/сутки</span>
        </label>
      </div>
    </div>
  );
};

export default RentalRateBlock;
