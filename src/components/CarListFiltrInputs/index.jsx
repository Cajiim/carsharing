import React, { useState, memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCarFilter } from "../../redux/dataThunk/fetchFiltrInputs";
import useParameters from "../../hooks/useParametersCarList";
import Select from "../../ui/SelectedList";
import Button from "../../ui/ButtonCarSetting";
import "./index.scss";

const CarListFiltrInputs = () => {
  const dispatch = useDispatch();
  const [carNameFromList, setCarNameFromList] = useState("");
  const [minPriceFromList, setMinPriceFromList] = useState("");
  const [maxPriceFromList, setMaxPriceFromList] = useState("");
  const [carTypeFromList, setCarTypeFromList] = useState("");
  const { setCarListQuery, deleteCarListQuery } = useParameters();
  const { dataCarsInput } = useSelector(({ filterInputs }) => filterInputs);

  useEffect(() => {
    dispatch(fetchCarFilter());
  }, []);

  const uniqueNames = [...new Set(dataCarsInput.map((el) => el.name))];
  const uniqueMinPrice = [...new Set(dataCarsInput.map((el) => el.minPrice))];
  const uniqueMaxPrice = [...new Set(dataCarsInput.map((el) => el.maxPrice))];
  const uniqueTypeCars = [
    ...new Set(dataCarsInput.map((el) => el.typeCarCart)),
  ];

  const handlClearSelect = () => {
    document.getElementById("name").value = "defaultValue";
    document.getElementById("minPrice").value = "defaultValue";
    document.getElementById("maxPrice").value = "defaultValue";
    document.getElementById("carClass").value = "defaultValue";
  };
  const handlDeleteFilters = () => {
    deleteCarListQuery("name");
    deleteCarListQuery("minPrice");
    deleteCarListQuery("maxPrice");
    deleteCarListQuery("typeCarCart");
  };
  const handlApply = () => {
    setCarListQuery("name", carNameFromList);
    if (carNameFromList === "") {
      deleteCarListQuery("name");
    }
    setCarListQuery("minPrice", minPriceFromList);
    if (minPriceFromList === "") {
      deleteCarListQuery("minPrice");
    }
    setCarListQuery("maxPrice", maxPriceFromList);
    if (maxPriceFromList === "") {
      deleteCarListQuery("maxPrice");
    }
    setCarListQuery("typeCarCart", carTypeFromList);
    if (carTypeFromList === "") {
      deleteCarListQuery("typeCarCart");
    }
  };
  const handlClear = () => {
    setCarNameFromList("");
    setCarTypeFromList("");
    setMaxPriceFromList("");
    setMinPriceFromList("");
    handlClearSelect();
    handlDeleteFilters();
  };
  return (
    <div className="carListFiltrInputs">
      <div className="carListFiltrInputs__select">
        <Select
          handlChange={setCarNameFromList}
          text="Выберите имя"
          uniqueArr={uniqueNames}
          id="name"
        />
        <Select
          handlChange={setMinPriceFromList}
          text="Выберите цену"
          uniqueArr={uniqueMinPrice}
          id="minPrice"
        />
        <Select
          handlChange={setMaxPriceFromList}
          text="Выберите цену"
          uniqueArr={uniqueMaxPrice}
          id="maxPrice"
        />
        <Select
          handlChange={setCarTypeFromList}
          text="Выберите класс"
          uniqueArr={uniqueTypeCars}
          id="carClass"
        />
      </div>
      <div className="carListFiltrInputs__buttons">
        <Button handlClick={handlClear} className="buttonReset" name="Reset" />
        <Button handlClick={handlApply} className="buttonApply" name="Apply" />
      </div>
    </div>
  );
};

export default memo(CarListFiltrInputs);
