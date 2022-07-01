import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setCheckFuel,
  setCheckBabyChair,
  setCheckRightHand,
} from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

function AdditionalServicesBlock() {
  const dispatch = useDispatch();
  const handleClickCheckboxFuel = () => {
    dispatch(setCheckFuel());
  };
  const handleClickCheckboxBabyChair = () => {
    dispatch(setCheckBabyChair());
  };
  const handleClickCheckboxThree = () => {
    dispatch(setCheckRightHand());
  };

  const { checkFuelState, checkedBabyChairState, checkedRightHand } =
    useSelector(({ finalOrder }) => finalOrder);
  return (
    <div className="additionalServices_container">
      <p>Доп услуги</p>
      <form className="additionalServices_container_form">
        <label
          htmlFor="gasoline"
          className="additionalServices_container_form_label"
        >
          <input
            value="gasoline"
            id="gasoline"
            type="checkbox"
            className="additionalServices_container_form_label_input"
            checked={checkFuelState}
            onChange={() => {
              handleClickCheckboxFuel();
            }}
          ></input>
          <span className="additionalServices_container_form_label_span_fakeCheckbox"></span>
          <span className=" additionalServices_container_form_label_span_radioTextColor">
            Полный бак, 500р
          </span>
        </label>
      </form>

      <form className="additionalServices_container_form">
        <label
          htmlFor="babyChair"
          className="additionalServices_container_form_label"
        >
          <input
            value="babyChair"
            id="babyChair"
            type="checkbox"
            className="additionalServices_container_form_label_input"
            checked={checkedBabyChairState}
            onChange={() => handleClickCheckboxBabyChair()}
          ></input>
          <span className="additionalServices_container_form_label_span_fakeCheckbox"></span>
          <span className="additionalServices_container_form_label_span_radioTextColor">
            Детское кресло, 200р
          </span>
        </label>
      </form>

      <form className="additionalServices_container_form">
        <label
          htmlFor="rightHand"
          className="additionalServices_container_form_label"
        >
          <input
            value="rightHand"
            id="rightHand"
            type="checkbox"
            className="additionalServices_container_form_label_input"
            checked={checkedRightHand}
            onChange={() => handleClickCheckboxThree()}
          ></input>
          <span className="additionalServices_container_form_label_span_fakeCheckbox"></span>
          <span className="additionalServices_container_form_label_span_radioTextColor">
            Правый руль, 1600р
          </span>
        </label>
      </form>
    </div>
  );
}

export default AdditionalServicesBlock;
