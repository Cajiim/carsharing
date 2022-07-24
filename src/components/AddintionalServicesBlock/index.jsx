import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../ui/AddintionalServicesCheckbox";
import {
  setCheckFuel,
  setCheckBabyChair,
  setCheckRightHand,
} from "../../redux/cart/reducerFinalOrder";
import "./index.scss";

const AdditionalServicesBlock = () => {
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
    <div className="additionalServices">
      <p className="additionalServices__title">Доп услуги</p>
      <CheckBox
        text="Полный бак, 500р"
        handlClick={handleClickCheckboxFuel}
        checkState={checkFuelState}
        htmlFor="gasoline"
        id="gasoline"
      />
      <CheckBox
        text="Детское кресло, 200р"
        handlClick={handleClickCheckboxBabyChair}
        checkState={checkedBabyChairState}
        htmlFor="babyChair"
        id="babyChair"
      />
      <CheckBox
        text="Правый руль, 1600р"
        handlClick={handleClickCheckboxThree}
        checkState={checkedRightHand}
        htmlFor="rightHand"
        id="rightHand"
      />
    </div>
  );
};

export default AdditionalServicesBlock;
