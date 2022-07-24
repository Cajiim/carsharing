import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { fetchDataCarList } from "../../api/fetchDataThunk";
import {
  setModelCarCart,
  setTypeCarCart,
  setMinPrice,
  setMaxPrice,
  setImgForCar,
  setDescriptionCar,
  setArrAllColorsForCar,
  setColorForCheckbox,
  clearData,
} from "../../redux/cart/reducerCarCartSettings";
import { clearErrors } from "../../redux/cart/reducerValidateErrors";
import ButtonCarSetting from "../../ui/ButtonCarSetting";
import "./index.scss";

const ButtonCarSettings = ({ setActiveConfirmation }) => {
  const dispatch = useDispatch();
  const {
    modelCarCart,
    typeCarCart,
    minPrice,
    maxPrice,
    imgCar,
    descriptionCar,
    arrAllColors,
  } = useSelector(({ carSettings }) => carSettings);

  const {
    linkError,
    descriptionError,
    carNameError,
    carTypeError,
    minPriceError,
    maxPriceError,
    colorError,
  } = useSelector(({ validateErrors }) => validateErrors);

  const errorChecking = // Должен быть true, чтобы без ошибки было
    linkError === "" &&
    descriptionError === "" &&
    carNameError === "" &&
    carTypeError === "" &&
    minPriceError === "" &&
    maxPriceError === "" &&
    colorError === "";
  const correctErrorChecking = // Должен быть false, чтобы без ошибки было
    Number(maxPrice) <= Number(minPrice) ||
    (arrAllColors && arrAllColors.length === 0);
  const choiseFromArr = modelCarCart.split(",");
  const model = choiseFromArr[0];
  const name = choiseFromArr[1];

  const handlClickClear = () => {
    dispatch(clearData());
  };

  const location = useLocation();
  const urlId = location.search
    .slice(location.search.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);

  const handleChangeCar = () => {
    axios
      .put(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          urlId[1] ? urlId[1] : ""
        }`,
        {
          model,
          name,
          typeCarCart,
          minPrice,
          maxPrice,
          imgCar,
          descriptionCar,
          arrAllColors,
        }
      )
      .then(
        (Response) => console.log(Response, "posting data"),
        setActiveConfirmation(true)
      )
      .catch((error) => console.log(error));
  };

  const handleAddCar = () => {
    axios
      .post(`https://6288c18410e93797c15e9916.mockapi.io/Cars`, {
        model,
        name,
        typeCarCart,
        minPrice,
        maxPrice,
        imgCar,
        descriptionCar,
        arrAllColors,
      })
      .then(
        (Response) => console.log(Response, "posting data"),
        setActiveConfirmation(true)
      )
      .catch((error) => console.log(error));
  };

  const handleDeleteCar = () => {
    axios
      .delete(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          urlId[1] ? urlId[1] : ""
        }`
      )
      .then((Response) =>
        console.log(Response, `Delete!! car with id ${urlId[1]} `)
      )
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    dispatch(fetchDataCarList());
  }, [dispatch]);

  const { dataCarList } = useSelector(({ getData }) => getData);

  const returnModel = dataCarList?.model;
  const returnName = dataCarList?.name;
  const returnCarModel = `${returnModel}, ${returnName}`;

  const handlReturnCar = () => {
    dispatch(setModelCarCart(returnCarModel));
    dispatch(setTypeCarCart(dataCarList?.typeCarCart));
    dispatch(setMinPrice(dataCarList?.minPrice));
    dispatch(setMaxPrice(dataCarList?.maxPrice));
    dispatch(setImgForCar(dataCarList?.imgCar));
    dispatch(setDescriptionCar(dataCarList?.descriptionCar));
    dispatch(setArrAllColorsForCar(dataCarList?.arrAllColors));
    dispatch(setColorForCheckbox(dataCarList?.arrAllColors));
    dispatch(clearErrors());
  };

  return (
    <div className="containerButtons">
      <div className="containerButtons__control control">
        <ButtonCarSetting
          handlClick={urlId[1] ? handleChangeCar : handleAddCar}
          buttonControl="control__save"
          active={
            (errorChecking && !correctErrorChecking) === true
              ? "control__save_active"
              : ""
          }
          name="Сохранить"
        />
        <ButtonCarSetting
          handlClick={urlId[1] ? handlReturnCar : handlClickClear}
          buttonControl="control__cancel"
          name="Отменить"
        />
      </div>
      <ButtonCarSetting
        handlClick={urlId[1] ? handleDeleteCar : handlClickClear}
        buttonControl="control__delete"
        name="Удалить"
      />
    </div>
  );
};

ButtonCarSettings.propTypes = {
  setActiveConfirmation: PropTypes.func,
};
ButtonCarSettings.defaultProps = {
  setActiveConfirmation: () => {},
};

export default memo(ButtonCarSettings);
