import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArendTime } from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

function RentalRateBlock() {
  const dispatch = useDispatch();
  const handleClickFare = (value) => {
    dispatch(setArendTime(value));
  };
  const { arendTime } = useSelector(({ finalOrder }) => finalOrder);
  return (
    <div className="rentalRentBlock">
      <p className="rentalRentBlock_title">Тариф</p>
      <div className="rentalRentBlock_mainContent">
        <div className="rentalRentBlock_mainContent_minutRent">
          <label
            className="rentalRentBlock_mainContent_minutRent_label"
            htmlFor="fareTypeMin"
          >
            <input
              className="rentalRentBlock_mainContent_minutRent_label_input"
              name="tax"
              type="radio"
              value="minut"
              id="fareTypeMin"
              checked={arendTime === "minut"}
              onChange={(e) => handleClickFare(e.target.value)}
            ></input>
            <span className="rentalRentBlock_mainContent_minutRent_label_fakeCheckBox"></span>
            <span className="rentalRentBlock_mainContent_minutRent_label_textColor">
              Поминутно, 7Р/мин
            </span>
          </label>
        </div>

        <div className="rentalRentBlock_mainContent_daysRent">
          <label
            className="rentalRentBlock_mainContent_daysRent_label"
            htmlFor="fareTypeDay"
          >
            <input
              className="rentalRentBlock_mainContent_daysRent_label_input"
              name="tax"
              type="radio"
              value="days"
              id="fareTypeDay"
              onChange={(e) => handleClickFare(e.target.value)}
              checked={arendTime === "days"}
            ></input>
            <span className="rentalRentBlock_mainContent_daysRent_label_fakeCheckBox"></span>
            <span className="rentalRentBlock_mainContent_daysRent_label_textColor">
              На сутки, 1999Р/сутки
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default RentalRateBlock;
