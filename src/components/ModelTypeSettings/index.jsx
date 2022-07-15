import React, { useState, useEffect } from "react";
import classNames from "classnames";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  setModelCarCart,
  setTypeCarCart,
} from "../../redux/cart/reducerCarCartSettings";
import {
  setCarNameError,
  setCarTypeError,
} from "../../redux/cart/reducerValidateErrors";
import style from "./index.scss";

const cn = classNames.bind(style);

function ModelTypeSettings() {
  const dispatch = useDispatch();
  const { modelCarCart, typeCarCart } = useSelector(
    ({ carSettings }) => carSettings
  );
  const { carNameError, carTypeError } = useSelector(
    ({ validateErrors }) => validateErrors
  );

  const [modelCarDirty, setModelCarDirty] = useState(false);
  const [typeCarDirty, setTypeCarDirty] = useState(false);

  const handlClickBlur = (e) => {
    switch (e.target.name) {
      case "carModel":
        setModelCarDirty(true);
        break;
      case "carType":
        setTypeCarDirty(true);
        break;

      default:
    }
  };

  const handlChangeModel = (value) => {
    const re = /["a-zA-Z]+[, ]+["a-zA-Z]/g;

    if (!re.test(String(value).toLowerCase())) {
      dispatch(setCarNameError(
        "Введите корретно модель автомобиля, разделив марку с названием запятой"
      ));
      dispatch(setModelCarCart(value));
    } else {
      dispatch(setModelCarCart(value));
      dispatch(setCarNameError(""));
    }
  };

  const handlChangeType = (value) => {
    const re = String(value).toLowerCase();
    if (re !== "business" && re !== "economy") {
      dispatch(setCarTypeError("Выберете класс: business или economy"));
      dispatch(setTypeCarCart(value));
    } else {
      dispatch(setTypeCarCart(value));
      dispatch(setCarTypeError(""));
    }
  };

  const [contentModelBack, setContentModelBack] = useState([]);
  function fetchData() {
    const url = window.location.href
      .slice(window.location.href.indexOf("?"))
      .split(/[&?]{1}[\w\d]+=/);
    axios
      .get(
        `https://6288c18410e93797c15e9916.mockapi.io/Cars/${
          url[1] ? url[1] : ""
        }`
      )
      .then((res) => setContentModelBack(res.data))
      .catch((error) => console.log(error, "Ошибка"));
  }

  const modelCarFromBack = contentModelBack?.model;
  const nameCarFromBack = contentModelBack?.name;
  const typeCarFromBack = contentModelBack?.typeCarCart;
  const fullModel = modelCarFromBack && nameCarFromBack ? `${modelCarFromBack  }, ${  nameCarFromBack}` : null;
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      dispatch(setModelCarCart(fullModel || modelCarCart));
      dispatch(setTypeCarCart(typeCarFromBack || typeCarCart));
      dispatch(setCarNameError(contentModelBack?.model ? '' : "Поле не должно быть пустым"));
      dispatch(setCarTypeError(contentModelBack?.typeCarCart? '' : "Поле не должно быть пустым"));
    }, 0); 
  }, [fullModel, typeCarFromBack]);

  return (
    <div className="modelTypeSettings_container_setting">
      <div className="modelTypeSettings_container_setting_carModel">
        <span className="modelTypeSettings_container_setting_carModel_title">
          Модель автомобиля
        </span>
        <input
          className={cn("modelTypeSettings_container_setting_carModel_input", {
            modelTypeSettings_container_setting_carModel_input_error:
              modelCarDirty && carNameError,
          })}
          value={modelCarCart}
          onChange={(e) => handlChangeModel(e.target.value)}
          onBlur={(e) => handlClickBlur(e)}
          name="carModel"
        ></input>
        {modelCarDirty && carNameError && (
          <div className="modelTypeSettings_container_setting_carModel_input_textError">
            {carNameError}
          </div>
        )}
      </div>
      <div className="modelTypeSettings_container_setting_carType">
        <span className="modelTypeSettings_container_setting_carType_title">
          Тип автомобиля
        </span>
        <input
          className={cn("modelTypeSettings_container_setting_carType_input", {
            modelTypeSettings_container_setting_carType_input_error:
              typeCarDirty && carTypeError,
          })}
          value={typeCarCart}
          onBlur={(e) => handlClickBlur(e)}
          onChange={(e) => handlChangeType(e.target.value)}
          name="carType"
        ></input>
        {typeCarDirty && carTypeError && (
          <div className="modelTypeSettings_container_setting_carType_input_textError">
            {carTypeError}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModelTypeSettings;
