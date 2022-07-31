import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { putCar, postCar, deleteCar } from "../../api/api";
import { fetchDataCarList } from "../../redux/dataThunk/fetchDataThunk";
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

  const errorChecking = 
    linkError === "" &&
    descriptionError === "" &&
    carNameError === "" &&
    carTypeError === "" &&
    minPriceError === "" &&
    maxPriceError === "" &&
    colorError === "";
  const correctErrorChecking = 
    Number(maxPrice) <= Number(minPrice) ||
    (arrAllColors && arrAllColors.length === 0);
  const choiseFromArr = modelCarCart.split(",");
  const model = choiseFromArr[0];
  const name = choiseFromArr[1];

  const handlClickClear = () => {
    dispatch(clearData());
  };

  const location = useLocation();
  const url = location.search
    .slice(location.search.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
  const urlId = url[1] ? url[1] : "";
  const handleChangeCar = () => {
    putCar(
      model,
      name,
      typeCarCart,
      minPrice,
      maxPrice,
      imgCar,
      descriptionCar,
      arrAllColors,
      urlId
    )
      .then(
        (Response) => console.log(Response, "put data"),
        setActiveConfirmation(true)
      )
      .catch((error) => console.log(error));
  };

  const handleAddCar = () => {
    postCar(
      model,
      name,
      typeCarCart,
      minPrice,
      maxPrice,
      imgCar,
      descriptionCar,
      arrAllColors
    )
      .then(
        (Response) => console.log(Response, "posting data"),
        setActiveConfirmation(true)
      )
      .catch((error) => console.log(error));
  };

  const handleDeleteCar = () => {
    deleteCar(urlId)
      .then((Response) =>
        console.log(Response, `Delete!! car with id ${urlId} `),
        dispatch(clearData())
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
      <div>
        <ButtonCarSetting
          handlClick={urlId[1] ? handleChangeCar : handleAddCar}
          className="controlSave"
          isActive={errorChecking && !correctErrorChecking}
          name="Сохранить"
        />
        <ButtonCarSetting
          handlClick={urlId[1] ? handlReturnCar : handlClickClear}
          className="controlCancel"
          name="Отменить"
        />
      </div>
      <ButtonCarSetting
        handlClick={
          urlId[1] ? handleDeleteCar : handlClickClear
        }
        className="controlDelete"
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
