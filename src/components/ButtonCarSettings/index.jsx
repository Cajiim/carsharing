import React, { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  deleteModelCarCart,
  deleteTypeCarCart,
  deleteMinPrice,
  deleteMaxPrice,
  deleteImgForCar,
  deleteDescriptionCar,
  deleteArrAllColorsForCar,
  deleteColorForCheckbox,
  setModelCarCart,
  setTypeCarCart,
  setMinPrice,
  setMaxPrice,
  setImgForCar,
  setDescriptionCar,
  setArrAllColorsForCar,
  setColorForCheckbox,
} from "../../redux/cart/reducerCarCartSettings";
import style from "./index.scss";

const cn = classNames.bind(style);

function ButtonCarSettings({ setActiveConfirmation }) {
  ButtonCarSettings.propTypes = {
    setActiveConfirmation: PropTypes.bool,
  };
  ButtonCarSettings.defaultProps = {
    setActiveConfirmation: false,
  };
  const urlId = window.location.href
    .slice(window.location.href.indexOf("?"))
    .split(/[&?]{1}[\w\d]+=/);
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
    dispatch(deleteModelCarCart());
    dispatch(deleteTypeCarCart());
    dispatch(deleteMinPrice());
    dispatch(deleteMaxPrice());
    dispatch(deleteImgForCar());
    dispatch(deleteDescriptionCar());
    dispatch(deleteArrAllColorsForCar());
    dispatch(deleteColorForCheckbox());
  };

  const handleChangeCar = () => {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    axios
      .put(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          url[1] ? url[1] : ""
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

  const [contentCart, setContentCart] = useState([]);
  function fetchData() {
    axios
      .get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          urlId[1] ? urlId[1] : ""
        }`
      )
      .then((res) => setContentCart(res.data))
      .catch((error) => console.log(error, "Ошибка"));
  }
  useEffect(() => {
    fetchData();
  }, []);
  const returnModel = contentCart?.model;
  const returnName = contentCart?.name;
  const returnCarModel = `${returnModel}, ${returnName}`;

  const handlReturnCar = () => {
    dispatch(setModelCarCart(returnCarModel));
    dispatch(setTypeCarCart(contentCart?.typeCarCart));
    dispatch(setMinPrice(contentCart?.minPrice));
    dispatch(setMaxPrice(contentCart?.maxPrice));
    dispatch(setImgForCar(contentCart?.imgCar));
    dispatch(setDescriptionCar(contentCart?.descriptionCar));
    dispatch(setArrAllColorsForCar(contentCart?.arrAllColors));
    dispatch(setColorForCheckbox(contentCart?.arrAllColors));
  };

  return (
    <div className="container_buttons">
      <div className="container_buttons_control">
        <button
          type="button"
          className={cn("container_buttons_control_save", {
            container_buttons_control_save_active:
              errorChecking && !correctErrorChecking,
          })}
          onClick={urlId[1] ? handleChangeCar : handleAddCar}
        >
          Сохранить
        </button>
        <button
          type="button"
          className="container_buttons_control_cancel"
          onClick={urlId[1] ? handlReturnCar : handlClickClear}
        >
          Отменить
        </button>
      </div>
      <button
        type="button"
        className="container_buttons_control_delete"
        onClick={urlId[1] ? handleDeleteCar : handlClickClear}
      >
        Удалить
      </button>
    </div>
  );
}

export default ButtonCarSettings;
