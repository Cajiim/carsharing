import React, { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import Select from "../../ui/SelectedList";
import Button from "../../ui/ButtonCarSetting";
import {
  setFiltrCarListName,
  setFiltrCarListMinPrice,
  setFiltrCarListMaxPrice,
  setFiltrCarListCarType,
  deleteFiltrsCarList,
} from "../../redux/cart/reducerFiltrCarList";
import "./index.scss";

const CarListFiltrInputs = () => {
  const dispatch = useDispatch();
  const [carNameFromList, setCarNameFromList] = useState("");
  const [minPriceFromList, setMinPriceFromList] = useState("");
  const [maxPriceFromList, setMaxPriceFromList] = useState("");
  const [carTypeFromList, setCarTypeFromList] = useState("");

  const { dataFullCarList } = useSelector(({ getData }) => getData);
  const uniqueNames = [...new Set(dataFullCarList.map((el) => el.name))];
  const uniqueMinPrice = [...new Set(dataFullCarList.map((el) => el.minPrice))];
  const uniqueMaxPrice = [...new Set(dataFullCarList.map((el) => el.maxPrice))];
  const uniqueTypeCars = [
    ...new Set(dataFullCarList.map((el) => el.typeCarCart)),
  ];

  const handlClear = () => {
    setCarNameFromList("");
    setCarTypeFromList("");
    setMaxPriceFromList("");
    setMinPriceFromList("");
    dispatch(deleteFiltrsCarList());
  };

  const handlApply = () => {
    dispatch(setFiltrCarListName(carNameFromList));
    dispatch(setFiltrCarListMinPrice(minPriceFromList));
    dispatch(setFiltrCarListMaxPrice(maxPriceFromList));
    dispatch(setFiltrCarListCarType(carTypeFromList));
  };

  return (
    <div className="carListFiltrInputs-wrapper">
      <form className="carListFiltrInputs-wrapper__form" id="some-form">
        <Select
          handlChange={setCarNameFromList}
          text="Выберите имя"
          uniqueArr={uniqueNames}
        />
        <Select
          handlChange={setMinPriceFromList}
          text="Выберите цену"
          uniqueArr={uniqueMinPrice}
        />
        <Select
          handlChange={setMaxPriceFromList}
          text="Выберите цену"
          uniqueArr={uniqueMaxPrice}
        />
        <Select
          handlChange={setCarTypeFromList}
          text="Выберите класс"
          uniqueArr={uniqueTypeCars}
        />
      </form>
      <div className="carListFiltrInputs-wrapper__buttons buttons">
        <Button
          handlClick={handlClear}
          buttonControl="buttons__reset"
          name="Reset"
        />
        <Button
          handlClick={handlApply}
          buttonControl="buttons__apply"
          name="Apply"
        />
      </div>
    </div>
  );
};

export default memo(CarListFiltrInputs);
